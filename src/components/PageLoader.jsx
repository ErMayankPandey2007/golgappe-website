import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "circOut" }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary"
        >
            <div className="relative">
                {/* Outer Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 rounded-full border-t-2 border-b-2 border-primary/20"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-32 h-32 rounded-full border-l-2 border-r-2 border-primary"
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-12 h-12 bg-primary rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                    />
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 font-display text-primary tracking-[0.3em] font-black italic text-xs uppercase"
                    >
                        Gol Gol Gappe
                    </motion.span>
                </div>
            </div>

            {/* Background Texture/Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </motion.div>
    );
};

export default PageLoader;
