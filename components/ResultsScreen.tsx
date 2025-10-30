import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, BackIcon } from './Icons';
import { QuestionType } from '../types';

type ResultsScreenProps = {
    key?: string;
    onHome: () => void;
    onRetry: () => void;
    results: { correct: number, total: number };
    hasIncorrect: boolean;
    quizType: QuestionType | 'ALL' | null;
    onStartToughestQuiz: (type: QuestionType) => void;
    hasToughestMistakes: boolean;
};

export const ResultsScreen = ({ onHome, onRetry, results, hasIncorrect, quizType, onStartToughestQuiz, hasToughestMistakes }: ResultsScreenProps) => {
    const percentage = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0;
    
    const getFeedback = () => {
        if (percentage === 100) return "Flawless Victory!";
        if (percentage >= 80) return "Excellent Work!";
        if (percentage >= 60) return "Good Job, Keep Practicing!";
        return "You can do better! Keep trying!";
    };

    return (
        <motion.div
            layoutId="quiz-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-full p-6 sm:p-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-2xl border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-soft-xl flex flex-col items-center text-center"
        >
            <SparklesIcon className="w-16 h-16 text-yellow-500 mb-4" />
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Quiz Complete!</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{getFeedback()}</p>

            <div className="my-6">
                <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {results.correct} / {results.total}
                </p>
                <p className="font-semibold text-gray-600 dark:text-gray-400">({percentage}%)</p>
            </div>

            <div className="w-full max-w-sm flex flex-col gap-4">
                {hasIncorrect && (
                    <motion.button
                        onClick={onRetry}
                        className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-2xl hover:bg-yellow-600 transition-all transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Retry {results.total - results.correct} Incorrect Questions
                    </motion.button>
                )}
                {hasToughestMistakes && quizType && quizType !== 'ALL' && (
                     <motion.button
                        onClick={() => onStartToughestQuiz(quizType)}
                        className="w-full bg-purple-500 text-white font-bold py-3 px-6 rounded-2xl hover:bg-purple-600 transition-all transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <SparklesIcon className="w-5 h-5" />
                            <span>Practice Toughest 10</span>
                        </div>
                    </motion.button>
                )}
                <motion.button
                    onClick={onHome}
                    className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="flex items-center justify-center gap-2">
                        <BackIcon className="w-5 h-5" />
                        <span>Back to Home</span>
                    </div>
                </motion.button>
            </div>
        </motion.div>
    );
};