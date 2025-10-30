import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, QuestionType } from '../types';
import { BackIcon, CheckIcon, InfoIcon, LightBulbIcon, SparklesIcon, XIcon } from './Icons';

type QuizScreenProps = { 
    key?: string;
    question: Question;
    onAnswer: (answer: string) => void;
    onHome: () => void;
    onNext: () => void;
    userAnswer: string | undefined;
    isAnswered: boolean;
    attemptStatus: 'idle' | 'correct' | 'incorrect';
    questionNumber: number;
    totalQuestions: number;
    quizTitle: string;
    isLockdownActive: boolean;
    incorrectForLockdown: number;
    correctForBonus: number;
    bonusCharges: number;
    onStartBonus: () => void;
    hasIncorrectQuestions: boolean;
};

export const QuizScreen = (props: QuizScreenProps) => {
    const { 
        question, onAnswer, onHome, onNext, userAnswer, isAnswered, attemptStatus, 
        questionNumber, totalQuestions, quizTitle, isLockdownActive, 
        incorrectForLockdown, correctForBonus, bonusCharges, 
        onStartBonus, hasIncorrectQuestions 
    } = props;
    
    return (
        <motion.div
            layoutId="quiz-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-full p-4 sm:p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-2xl border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-soft-xl flex flex-col" style={{minHeight: '90vh'}}>
            
            <div className="flex items-center justify-between mb-2">
                <button onClick={onHome} className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"><BackIcon className="w-6 h-6" /></button>
                <div className="text-center">
                    <h2 className="font-bold text-lg">{quizTitle}</h2>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{questionNumber} / {totalQuestions}</p>
                </div>
                <div className="w-10"></div>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col justify-center"
                    >
                        <QuestionDisplay 
                            question={question} 
                            onAnswer={onAnswer} 
                            isAnswered={isAnswered}
                            userAnswer={userAnswer}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="h-48 mt-4 flex flex-col justify-center">
                <AnimatePresence>
                {isAnswered && attemptStatus !== 'idle' && (
                    <AnswerFeedback
                        status={attemptStatus}
                        explanation={question.explanation}
                        correctAnswer={question.answer}
                        tip={question.tip}
                        onNext={onNext}
                    />
                )}
                </AnimatePresence>
            </div>

            <div className="mt-4 flex justify-between items-center gap-4">
               <LockdownMeter incorrectCount={incorrectForLockdown} />
               <BonusMeter correctCount={correctForBonus} charges={bonusCharges} onStartBonus={onStartBonus} hasIncorrectQuestions={hasIncorrectQuestions} />
            </div>
        </motion.div>
    );
};

const QuestionDisplay = ({ question, onAnswer, isAnswered, userAnswer }: { question: Question, onAnswer: (answer: string) => void, isAnswered: boolean, userAnswer?: string }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (question.type === QuestionType.FILL_IN_BLANK || question.type === QuestionType.COMPLETE_ANSWER || question.type === QuestionType.MULTI_WORD_BLANK) {
            setInputValue('');
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [question]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAnswer(inputValue.trim());
        }
    };
    
    return (
        <div className="w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 min-h-[6rem] flex items-center justify-center">{question.question}</h3>
            {question.type === QuestionType.MULTIPLE_CHOICE && question.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {question.options.map(option => {
                        const isSelected = userAnswer === option;
                        const isCorrect = Array.isArray(question.answer) ? question.answer.includes(option) : question.answer === option;

                        return (
                            <motion.button
                                key={option}
                                onClick={() => onAnswer(option)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 font-semibold
                                    ${isAnswered
                                        ? isCorrect
                                            ? 'bg-green-500 border-green-600 text-white transform scale-105 shadow-lg'
                                            : isSelected
                                                ? 'bg-red-500 border-red-600 text-white'
                                                : 'bg-gray-100/50 dark:bg-gray-700/50 border-transparent text-gray-500'
                                        : 'bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:border-blue-500'
                                    }`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * question.options!.indexOf(option) }}
                            >
                                {option}
                            </motion.button>
                        );
                    })}
                </div>
            )}
             {(question.type === QuestionType.FILL_IN_BLANK || question.type === QuestionType.COMPLETE_ANSWER || question.type === QuestionType.MULTI_WORD_BLANK) && (
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isAnswered}
                        placeholder={
                            question.type === QuestionType.FILL_IN_BLANK ? "Type the missing word..." :
                            question.type === QuestionType.MULTI_WORD_BLANK ? "Type the missing phrase..." :
                            "Type your full answer..."
                        }
                        className="w-full max-w-md p-3 text-lg text-center bg-white/70 dark:bg-gray-900/70 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-50"
                        aria-label="Your answer"
                    />
                     <button
                        type="submit"
                        disabled={isAnswered || !inputValue.trim()}
                        className="mt-4 px-8 py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        Submit
                    </button>
                </form>
             )}
        </div>
    );
};

type AnswerFeedbackProps = {
    status: 'correct' | 'incorrect';
    explanation: string;
    correctAnswer: string | string[];
    tip?: string;
    onNext: () => void;
};

const AnswerFeedback = ({ status, explanation, tip, onNext, correctAnswer }: AnswerFeedbackProps) => {
    const [showExplanation, setShowExplanation] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`p-4 rounded-2xl text-center border ${
                status === 'correct' ? 'bg-green-100/50 dark:bg-green-900/30 border-green-500' : 'bg-red-100/50 dark:bg-red-900/30 border-red-500'
            }`}
        >
            <div className="flex items-center justify-center mb-2">
                {status === 'correct' ? (
                    <>
                        <CheckIcon className="w-7 h-7 text-green-500 mr-2" />
                        <h4 className="text-xl font-bold text-green-700 dark:text-green-300">Correct!</h4>
                    </>
                ) : (
                    <>
                        <XIcon className="w-7 h-7 text-red-500 mr-2" />
                        <h4 className="text-xl font-bold text-red-700 dark:text-red-300">Incorrect</h4>
                    </>
                )}
            </div>
            
            {status === 'incorrect' && (
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Correct answer: <strong className="text-green-700 dark:text-green-300">{Array.isArray(correctAnswer) ? correctAnswer.join(' / ') : correctAnswer}</strong>
                </p>
            )}
            
            {!showExplanation && (
                 <button
                    onClick={() => setShowExplanation(true)}
                    className="flex items-center justify-center gap-2 mx-auto my-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                    <InfoIcon className="w-5 h-5" />
                    Show Explanation
                </button>
            )}

            <AnimatePresence>
                {showExplanation && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                       <div className="pt-3 mt-3 border-t border-gray-300/70 dark:border-gray-600/70">
                         <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{explanation}</p>
                         {tip && <TipDisplay tip={tip} />}
                       </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {status === 'incorrect' && (
                <button
                    onClick={onNext}
                    className="mt-3 px-6 py-2 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105"
                >
                    Next Question
                </button>
            )}
        </motion.div>
    );
};

const TipDisplay = ({ tip }: { tip: string }) => (
    <motion.div 
        className="mt-3 p-2 bg-yellow-100/50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 text-left text-sm text-yellow-800 dark:text-yellow-200 rounded-lg"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
    >
        <div className="flex items-start">
            <InfoIcon className="w-5 h-5 mr-2 flex-shrink-0" />
            <div>
                <strong className="font-semibold">Tip:</strong> {tip}
            </div>
        </div>
    </motion.div>
);

const LockdownMeter = ({ incorrectCount }: { incorrectCount: number }) => {
    const maxIncorrect = 5;
    const progress = (incorrectCount / maxIncorrect) * 100;
    return (
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-red-600 dark:text-red-400">Lockdown Risk</span>
                <span className="text-sm font-semibold">{incorrectCount} / {maxIncorrect}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                    className="bg-red-500 h-2.5 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
};

const BonusMeter = ({ correctCount, charges, onStartBonus, hasIncorrectQuestions }: { correctCount: number, charges: number, onStartBonus: () => void, hasIncorrectQuestions: boolean }) => {
    const maxCorrect = 5;
    const progress = (correctCount / maxCorrect) * 100;

    return (
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                 <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Bonus Meter</span>
                 {charges > 0 && (
                     <motion.button 
                        onClick={onStartBonus}
                        disabled={!hasIncorrectQuestions}
                        className="flex items-center gap-1 text-sm font-bold text-yellow-700 dark:text-yellow-300 bg-yellow-300/50 dark:bg-yellow-800/50 px-2 py-0.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                         <SparklesIcon className="w-4 h-4"/> Use Charge ({charges})
                    </motion.button>
                 )}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
};