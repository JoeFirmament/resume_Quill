import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
};

const EducationCard = ({ school, degree, period, description }) => (
    <motion.div
        variants={item}
        layout
        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
        className="bg-white p-6 rounded-2xl border border-gray-100 transition-all duration-300"
    >
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold">{school}</h3>
            <span className="text-xs font-mono bg-gray-50 px-2 py-1 rounded whitespace-nowrap">{period}</span>
        </div>
        <p className="text-sm font-mono text-gray-500 mb-2 font-bold">{degree}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const Education = ({ data }) => {
    return (
        <motion.div
            layout
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="w-full grid gap-4 content-start"
        >
            <motion.div
                variants={item}
                className="bg-black text-white p-6 rounded-2xl flex items-center justify-center min-h-[100px]"
            >
                <h2 className="text-3xl font-bold tracking-tighter uppercase">{data.title}</h2>
            </motion.div>
            {data.schools.map((school, i) => (
                <EducationCard key={i} {...school} />
            ))}
        </motion.div>
    );
};

export default Education;
