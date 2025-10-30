import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuestionType } from '../types';
import { LightBulbIcon, ShuffleIcon } from './Icons';
import { QuestionCounts } from '../App';

type HomeScreenProps = {
    key?: string;
    onStartQuiz: (type: QuestionType | 'ALL', count: number, name: string, shuffle: boolean) => void;
    questionCounts: QuestionCounts;
    onStartReview: () => void;
};

export const HomeScreen = ({ onStartQuiz, questionCounts, onStartReview }: HomeScreenProps) => {
    const [selectedCounts, setSelectedCounts] = useState({
        'ALL': 20,
        [QuestionType.MULTIPLE_CHOICE]: 20,
        [QuestionType.FILL_IN_BLANK]: 20,
        [QuestionType.COMPLETE_ANSWER]: 20,
    });
    const [shuffle, setShuffle] = useState(false);

    const handleCountChange = (type: QuestionType | 'ALL', value: number) => {
        setSelectedCounts(prev => ({ ...prev, [type]: value }));
    };
    
    const modes = [
        { type: 'ALL' as 'ALL', name: 'Comprehensive Mix', description: 'All question types.' },
        { type: QuestionType.MULTIPLE_CHOICE, name: 'Multiple Choice', description: 'Test your knowledge.' },
        { type: QuestionType.FILL_IN_BLANK, name: 'Fill in the Blanks', description: 'Recall key terms.' },
        { type: QuestionType.COMPLETE_ANSWER, name: 'Complete the Answer', description: 'Practice for essays.' },
    ];
    
    const countsOptions = [20, 30, 40, 60, 80, 100];

    return (
        <motion.div
            layoutId="quiz-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-full"
        >
            <div className="text-center mb-8 sm:mb-12">
                <motion.h1 
                    className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    ADS301m Master
                </motion.h1>
                <motion.p 
                    className="mt-2 text-lg text-gray-600 dark:text-gray-400"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Session 11 Exam Prep
                </motion.p>
            </div>

            <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring' }}
                whileHover={{ scale: 1.03, y: -5 }}
            >
                <button
                    onClick={onStartReview}
                    className="w-full flex items-center justify-center gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-soft-lg p-6 text-left hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all"
                >
                    <LightBulbIcon className="w-10 h-10 text-yellow-500" />
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Study Guide</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Review key concepts before you start.</p>
                    </div>
                </button>
            </motion.div>

             <motion.div 
                className="flex items-center justify-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, type: 'spring' }}
            >
                <button
                    onClick={() => setShuffle(!shuffle)}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 transition-colors"
                    aria-label="Toggle question shuffle"
                >
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Shuffle Questions</span>
                    <div className={`relative w-12 h-6 flex items-center rounded-full transition-colors ${shuffle ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                        <motion.div
                            className="w-5 h-5 bg-white rounded-full shadow-md"
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            style={{
                                position: 'absolute',
                                left: shuffle ? 'auto' : '2px',
                                right: shuffle ? '2px' : 'auto',
                            }}
                        />
                    </div>
                    <ShuffleIcon className={`w-6 h-6 transition-colors ${shuffle ? 'text-blue-500' : 'text-gray-500'}`} />
                </button>
            </motion.div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {modes.map((mode, index) => {
                    const modeType = mode.type;
                    const maxQuestions = questionCounts[modeType];
                    const currentCount = selectedCounts[modeType];

                    return (
                    <motion.div
                        key={mode.type}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                        whileHover={{ scale: 1.03, y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                        className="w-full text-left p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-soft-lg transition-all flex flex-col gap-4"
                    >
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{mode.name}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{mode.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {countsOptions.map(countValue => {
                                const isDisabled = countValue > maxQuestions;
                                if (isDisabled && countValue === 20) return <p key="na" className="text-sm text-gray-500">Not enough questions for this mode.</p>
                                if (isDisabled) return null;

                                return (
                                    <button
                                        key={countValue}
                                        onClick={() => handleCountChange(modeType, countValue)}
                                        className={`px-3 py-1.5 text-sm font-bold rounded-full transition-all transform hover:scale-105 ${
                                            currentCount === countValue
                                                ? 'bg-blue-500 text-white shadow-md'
                                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                        }`}
                                    >
                                        {countValue}
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => onStartQuiz(modeType, currentCount, mode.name, shuffle)}
                            disabled={maxQuestions < 20}
                            className="w-full mt-2 bg-blue-500 text-white font-bold py-3 px-6 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                        >
                            Start with {currentCount}
                        </button>
                    </motion.div>
                    )
                })}
            </div>
        </motion.div>
    );
};
