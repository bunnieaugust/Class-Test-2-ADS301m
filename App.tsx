


import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { quizData } from './data/quizData';
import { Question, QuestionType, GameMode } from './types';
import { MoonIcon, SunIcon } from './components/Icons';
import { HomeScreen } from './components/HomeScreen';
import { ReviewScreen } from './components/ReviewScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';

export type QuestionCounts = {
  [key in QuestionType | 'ALL']: number;
};

export type QuizStateBackup = {
  questions: Question[];
  index: number;
  userAnswers: (string | undefined)[];
  correctCount: number;
  correctForBonus: number;
  bonusCharges: number;
  incorrectForLockdown: number;
  incorrectlyAnswered: Question[];
  quizTitle: string;
};


// Main Application Component
export default function App() {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.HOME);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | undefined)[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [attemptStatus, setAttemptStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  
  const [correctCount, setCorrectCount] = useState(0);
  
  // Bonus Mode State
  const [correctForBonus, setCorrectForBonus] = useState(0);
  const [bonusCharges, setBonusCharges] = useState(0);

  // Lockdown Mode State
  const [incorrectForLockdown, setIncorrectForLockdown] = useState(0);
  const [isLockdownActive, setIsLockdownActive] = useState(false);
  const [lockdownMistakes, setLockdownMistakes] = useState<Question[]>([]);
  
  const [incorrectlyAnswered, setIncorrectlyAnswered] = useState<Question[]>([]);
  const [quizBackup, setQuizBackup] = useState<QuizStateBackup | null>(null);
  const [quizTitle, setQuizTitle] = useState('');
  const [quizResults, setQuizResults] = useState({ correct: 0, total: 0 });
  const [hasStoredMistakes, setHasStoredMistakes] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // FIX: Changed return type to use a string index signature `[key: string]` because JSON.parse will always produce string keys.
  // This allows TypeScript to correctly infer types for `Object.entries` later on, resolving the arithmetic error.
  const getMistakeCounts = useCallback((): { [key: string]: number } => {
    try {
      const counts = localStorage.getItem('ads301mMistakeCounts');
      return counts ? JSON.parse(counts) : {};
    } catch (error) {
      console.error("Failed to parse mistake counts from localStorage", error);
      return {};
    }
  }, []);
  
  const incrementMistakeCount = useCallback((questionId: number) => {
      const counts = getMistakeCounts();
      counts[questionId] = (counts[questionId] || 0) + 1;
      localStorage.setItem('ads301mMistakeCounts', JSON.stringify(counts));
      setHasStoredMistakes(true);
  }, [getMistakeCounts]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const counts = getMistakeCounts();
    setHasStoredMistakes(Object.keys(counts).length > 0);
  }, [gameMode, getMistakeCounts]);

  const questionCounts = useMemo<QuestionCounts>(() => {
    return {
      [QuestionType.MULTIPLE_CHOICE]: quizData.filter(q => q.type === QuestionType.MULTIPLE_CHOICE).length,
      [QuestionType.FILL_IN_BLANK]: quizData.filter(q => q.type === QuestionType.FILL_IN_BLANK).length,
      [QuestionType.MULTI_WORD_BLANK]: quizData.filter(q => q.type === QuestionType.MULTI_WORD_BLANK).length,
      [QuestionType.COMPLETE_ANSWER]: quizData.filter(q => q.type === QuestionType.COMPLETE_ANSWER).length,
      'ALL': quizData.length,
    };
  }, []);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

  const startQuiz = (type: QuestionType | 'ALL', count: number, name: string, shuffle: boolean) => {
    let filteredQuestions: Question[];
    if (type === 'ALL') {
      filteredQuestions = [...quizData];
    } else {
      filteredQuestions = quizData.filter(q => q.type === type);
    }
    
    let questionsToProcess = [...filteredQuestions];
    if (shuffle) {
      questionsToProcess.sort(() => Math.random() - 0.5);
    }
    
    const selectedQuestions = questionsToProcess.slice(0, count);

    setQuestions(selectedQuestions);
    setGameMode(GameMode.QUIZ);
    resetState(selectedQuestions.length);
    setQuizTitle(name);
  };
  
  const startReview = () => {
    setGameMode(GameMode.REVIEW);
  };

  const resetState = (numQuestions: number) => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(numQuestions).fill(undefined));
    setIsAnswered(false);
    setAttemptStatus('idle');
    setCorrectCount(0);
    setCorrectForBonus(0);
    setBonusCharges(0);
    setIncorrectForLockdown(0);
    setIncorrectlyAnswered([]);
    setIsLockdownActive(false);
    setLockdownMistakes([]);
    setQuizBackup(null);
  };
  
  const goHome = () => {
    setGameMode(GameMode.HOME);
  };
  
  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    const isAnswerCorrect = Array.isArray(currentQuestion.answer) 
        ? currentQuestion.answer.some(a => a.toLowerCase() === answer.toLowerCase().trim())
        : currentQuestion.answer.toLowerCase() === answer.toLowerCase().trim();

    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);

    if (isAnswerCorrect) {
        setIsAnswered(true);
        setAttemptStatus('correct');
        setCorrectCount(prev => prev + 1);
        
        if (!isLockdownActive && !quizBackup) {
            const nextCorrectForBonus = correctForBonus + 1;
            if (nextCorrectForBonus >= 5) {
                setBonusCharges(prev => prev + Math.floor(nextCorrectForBonus / 5));
                setCorrectForBonus(nextCorrectForBonus % 5);
            } else {
                setCorrectForBonus(nextCorrectForBonus);
            }
        }

        setTimeout(() => {
            nextQuestion();
        }, 1200);

    } else { // Incorrect Answer
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
        incrementMistakeCount(currentQuestion.id);

        if (isLockdownActive) {
            if (!lockdownMistakes.some(q => q.id === currentQuestion.id)) {
                setLockdownMistakes(prev => [...prev, currentQuestion]);
            }
        }

        setIsAnswered(true);
        setAttemptStatus('incorrect');
        
        if (!isLockdownActive && !quizBackup) {
            if (!incorrectlyAnswered.some(q => q.id === currentQuestion.id)) {
                setIncorrectForLockdown(prev => prev + 1);
                setIncorrectlyAnswered(prev => [...prev, currentQuestion]);
            }
        }
    }
  };

  const handleLockdownRoundEnd = () => {
    if (lockdownMistakes.length > 0) {
      const newLockdownQuestions = [...lockdownMistakes].sort(() => 0.5 - Math.random());
      setQuestions(newLockdownQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers(Array(newLockdownQuestions.length).fill(undefined));
      setAttemptStatus('idle');
      setIsAnswered(false);
      setLockdownMistakes([]);
      setQuizTitle(`🚨 Lockdown: ${newLockdownQuestions.length} left 🚨`);
    } else {
      endLockdown();
    }
  };


  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswered(false);
      setAttemptStatus('idle');
    } else {
        if (isLockdownActive) {
            handleLockdownRoundEnd();
        } else if (quizBackup) {
            endBonus();
        } else {
            setQuizResults({ correct: correctCount, total: questions.length });
            setGameMode(GameMode.RESULTS);
        }
    }
  };
  
  const startSpecialSession = useCallback((mode: 'LOCKDOWN' | 'BONUS') => {
    if (incorrectlyAnswered.length === 0) return;

    setQuizBackup({
        questions,
        index: currentQuestionIndex,
        userAnswers,
        correctCount,
        correctForBonus,
        bonusCharges,
        incorrectForLockdown,
        incorrectlyAnswered,
        quizTitle
    });
    
    const specialQuestions = [...incorrectlyAnswered].sort(() => 0.5 - Math.random());
    setQuestions(specialQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(specialQuestions.length).fill(undefined));
    setAttemptStatus('idle');
    setIsAnswered(false);

    if (mode === 'LOCKDOWN') {
        setIsLockdownActive(true);
        setLockdownMistakes([]);
        setQuizTitle("🚨 Lockdown Mode 🚨");
    } else {
        setBonusCharges(prev => prev -1);
        setQuizTitle("✨ Bonus Round ✨");
    }
  }, [questions, currentQuestionIndex, userAnswers, correctCount, correctForBonus, bonusCharges, incorrectForLockdown, incorrectlyAnswered, quizTitle]);

  const endLockdown = () => {
    if (!quizBackup) { goHome(); return; }

    setQuestions(quizBackup.questions);
    setUserAnswers(quizBackup.userAnswers);
    setCorrectCount(quizBackup.correctCount);
    setCorrectForBonus(quizBackup.correctForBonus);
    setBonusCharges(quizBackup.bonusCharges);
    setQuizTitle(quizBackup.quizTitle);
    
    setIncorrectlyAnswered([]);
    setIncorrectForLockdown(0); 
    setIsLockdownActive(false);

    const nextIndex = quizBackup.index + 1;
    setQuizBackup(null); 

    if (nextIndex < quizBackup.questions.length) {
        setCurrentQuestionIndex(nextIndex);
        setIsAnswered(false);
        setAttemptStatus('idle');
    } else {
        setQuizResults({ correct: quizBackup.correctCount, total: quizBackup.questions.length });
        setGameMode(GameMode.RESULTS);
    }
  }

  const endBonus = () => {
    if (!quizBackup) { goHome(); return; }
   
   const correctlyAnsweredInBonusIds = new Set<number>();
   questions.forEach((q, index) => {
       const ans = userAnswers[index];
       if (ans) {
           const isCorrect = Array.isArray(q.answer)
               ? q.answer.some(a => a.toLowerCase() === ans.toLowerCase().trim())
               : q.answer.toLowerCase() === ans.toLowerCase().trim();
           if (isCorrect) {
               correctlyAnsweredInBonusIds.add(q.id);
           }
       }
   });

   setQuestions(quizBackup.questions);
   setCurrentQuestionIndex(quizBackup.index);
   setUserAnswers(quizBackup.userAnswers);
   setCorrectCount(quizBackup.correctCount);
   setCorrectForBonus(quizBackup.correctForBonus);
   setBonusCharges(quizBackup.bonusCharges);
   setQuizTitle(quizBackup.quizTitle);
   
   const updatedIncorrectlyAnswered = quizBackup.incorrectlyAnswered.filter(
       q => !correctlyAnsweredInBonusIds.has(q.id)
   );
   setIncorrectlyAnswered(updatedIncorrectlyAnswered);
   setIncorrectForLockdown(updatedIncorrectlyAnswered.length);
   
   setQuizBackup(null);
 }

 const startRetryIncorrectQuiz = () => {
    if (incorrectlyAnswered.length === 0) return;
    const retryQuestions = [...incorrectlyAnswered].sort(() => Math.random() - 0.5);
    setQuestions(retryQuestions);
    setGameMode(GameMode.QUIZ);
    resetState(retryQuestions.length);
    setQuizTitle("Retry Incorrect");
  };
  
  const startToughestQuiz = () => {
    const counts = getMistakeCounts();
    if (Object.keys(counts).length === 0) return;
  
    const sortedMistakes = Object.entries(counts).sort(([, a], [, b]) => b - a);
    const toughestIds = sortedMistakes.slice(0, 10).map(([id]) => parseInt(id, 10));
    
    const toughestQuestions = quizData.filter(q => toughestIds.includes(q.id));
    
    if (toughestQuestions.length === 0) return;
  
    setQuestions(toughestQuestions.sort(() => Math.random() - 0.5));
    setGameMode(GameMode.QUIZ);
    resetState(toughestQuestions.length);
    setQuizTitle("Toughest 10 Practice");
  };

  useEffect(() => {
    if (incorrectForLockdown > 4 && !isLockdownActive && gameMode === GameMode.QUIZ && !quizBackup) {
        startSpecialSession('LOCKDOWN');
    }
  }, [incorrectForLockdown, isLockdownActive, gameMode, quizBackup, startSpecialSession]);


  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDarkMode ? 'dark bg-black text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-colors"
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-700" />}
            </button>
        </div>
      <LayoutGroup>
        <motion.div 
            animate={{ x: isShaking ? [-5, 5, -5, 5, 0] : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="container mx-auto p-4 sm:p-6 md:p-8 max-w-2xl min-h-screen flex flex-col justify-center"
        >
            <AnimatePresence mode="wait">
            {gameMode === GameMode.HOME && (
                <HomeScreen 
                    key="home" 
                    onStartQuiz={startQuiz} 
                    questionCounts={questionCounts} 
                    onStartReview={startReview}
                    onStartToughestQuiz={startToughestQuiz}
                    hasStoredMistakes={hasStoredMistakes} 
                />
            )}
            {gameMode === GameMode.REVIEW && (
                <ReviewScreen key="review" onHome={goHome} />
            )}
            {gameMode === GameMode.RESULTS && (
                <ResultsScreen 
                  key="results"
                  onHome={goHome}
                  onRetry={startRetryIncorrectQuiz}
                  results={quizResults}
                  hasIncorrect={incorrectlyAnswered.length > 0}
                />
            )}
            {gameMode === GameMode.QUIZ && currentQuestion && (
                <QuizScreen 
                    key="quiz"
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                    onHome={goHome}
                    onNext={nextQuestion}
                    userAnswer={userAnswers[currentQuestionIndex]}
                    isAnswered={isAnswered}
                    attemptStatus={attemptStatus}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                    quizTitle={quizTitle}
                    isLockdownActive={isLockdownActive}
                    incorrectForLockdown={incorrectForLockdown}
                    correctForBonus={correctForBonus}
                    bonusCharges={bonusCharges}
                    onStartBonus={() => startSpecialSession('BONUS')}
                    hasIncorrectQuestions={incorrectlyAnswered.length > 0}
                />
            )}
            </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}