import React from 'react';
import { motion } from 'framer-motion';
import { reviewContent } from '../data/reviewContent';
import { BackIcon } from './Icons';

type ReviewScreenProps = {
    key?: string;
    onHome: () => void;
};

export const ReviewScreen = ({ onHome }: ReviewScreenProps) => {
    return (
        <motion.div
            layoutId="quiz-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-full p-4 sm:p-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-2xl border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-soft-xl flex flex-col" style={{minHeight: '90vh'}}
        >
             <div className="flex items-center justify-between mb-4">
                <button onClick={onHome} className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"><BackIcon className="w-6 h-6" /></button>
                <h2 className="font-bold text-xl text-center">Session 11 Study Guide</h2>
                <div className="w-10"></div>
            </div>
            <div className="flex-grow overflow-y-auto pr-2 space-y-6">
                {reviewContent.map((section, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="p-4 bg-gray-100/50 dark:bg-gray-900/50 rounded-2xl"
                    >
                        <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{section.title}</h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            {section.points.map((point, pIndex) => (
                                <li key={pIndex} className="flex items-start">
                                    <span className="mr-2 mt-1 text-blue-500">&#8227;</span>
                                    <span dangerouslySetInnerHTML={{ __html: point }} />
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
             <div className="mt-6">
                <button
                    onClick={onHome}
                    className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105"
                >
                    Back to Home
                </button>
            </div>
        </motion.div>
    )
};
