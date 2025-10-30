

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { quizData } from './data/quizData';
import { Question, QuestionType, GameMode } from './types';
import { MoonIcon, SunIcon } from './components/Icons';
import { HomeScreen } from './components/HomeScreen';
import { ReviewScreen } from './components/ReviewScreen';
import { QuizScreen } from './components/QuizScreen';

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

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShaking, setIsShaking] = useState(false);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const questionCounts = useMemo<QuestionCounts>(() => {
    return {
      [QuestionType.MULTIPLE_CHOICE]: quizData.filter(q => q.type === QuestionType.MULTIPLE_CHOICE).length,
      [QuestionType.FILL_IN_BLANK]: quizData.filter(q => q.type === QuestionType.FILL_IN_BLANK).length,
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
        
        // Don't add to bonus meter during special sessions
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

        // Record the mistake if in lockdown, but don't force a retry.
        if (isLockdownActive) {
            if (!lockdownMistakes.some(q => q.id === currentQuestion.id)) {
                setLockdownMistakes(prev => [...prev, currentQuestion]);
            }
        }

        setIsAnswered(true);
        setAttemptStatus('incorrect');
        
        // Add to the main incorrect list ONLY if not in a special session
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
      // Start a new round with the questions they got wrong
      const newLockdownQuestions = [...lockdownMistakes].sort(() => 0.5 - Math.random());
      setQuestions(newLockdownQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers(Array(newLockdownQuestions.length).fill(undefined));
      setAttemptStatus('idle');
      setIsAnswered(false);
      setLockdownMistakes([]); // Clear mistakes for the new round
      setQuizTitle(`🚨 Lockdown: ${newLockdownQuestions.length} left 🚨`);
    } else {
      // They passed! End lockdown and return to the main quiz.
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
        } else if (quizBackup) { // Was in Bonus mode
            endBonus();
        } else {
            goHome();
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

    // Restore quiz state from backup
    setQuestions(quizBackup.questions);
    setUserAnswers(quizBackup.userAnswers);
    setCorrectCount(quizBackup.correctCount);
    setCorrectForBonus(quizBackup.correctForBonus);
    setBonusCharges(quizBackup.bonusCharges);
    setQuizTitle(quizBackup.quizTitle);
    
    // Reset lockdown specific state - they passed, so clear the incorrect list
    setIncorrectlyAnswered([]);
    setIncorrectForLockdown(0); 
    setIsLockdownActive(false);

    // Determine the next step
    const nextIndex = quizBackup.index + 1;
    setQuizBackup(null); // Clear backup now that we have the info we need

    if (nextIndex < quizBackup.questions.length) {
        // Advance to the next question
        setCurrentQuestionIndex(nextIndex);
        // Reset UI for the new question
        setIsAnswered(false);
        setAttemptStatus('idle');
    } else {
        // Lockdown was triggered on the last question, so quiz is over
        goHome();
    }
  }

  const endBonus = () => {
    if (!quizBackup) { goHome(); return; }
   
   // Determine which questions were answered correctly during the bonus round.
   // At this point, `questions` and `userAnswers` are from the bonus session.
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

   // Restore the main quiz's core state from the backup.
   setQuestions(quizBackup.questions);
   setCurrentQuestionIndex(quizBackup.index);
   setUserAnswers(quizBackup.userAnswers);
   setCorrectCount(quizBackup.correctCount);
   setCorrectForBonus(quizBackup.correctForBonus);
   setBonusCharges(quizBackup.bonusCharges);
   setQuizTitle(quizBackup.quizTitle);
   
   // Apply the results from the bonus round to the incorrect questions list.
   const updatedIncorrectlyAnswered = quizBackup.incorrectlyAnswered.filter(
       q => !correctlyAnsweredInBonusIds.has(q.id)
   );
   setIncorrectlyAnswered(updatedIncorrectlyAnswered);
   setIncorrectForLockdown(updatedIncorrectlyAnswered.length);
   
   // Clean up the backup.
   setQuizBackup(null);
 }

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
                <HomeScreen key="home" onStartQuiz={startQuiz} questionCounts={questionCounts} onStartReview={startReview} />
            )}
            {gameMode === GameMode.REVIEW && (
                <ReviewScreen key="review" onHome={goHome} />
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
