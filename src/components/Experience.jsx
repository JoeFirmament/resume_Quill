import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
};

const ExperienceCard = ({ role, company, period, description, details }) => (
    <motion.div
        variants={item}
        layout
        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
        className="bg-white p-6 rounded-2xl border border-gray-100 transition-colors duration-300 group"
    >
        <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
            <div>
                <h3 className="text-xl font-bold group-hover:text-black transition-colors">{role}</h3>
                <p className="text-gray-500 text-sm font-mono mt-1 font-bold group-hover:text-gray-800">{company}</p>
            </div>
            <span className="text-xs font-mono bg-gray-50 px-2 py-1 rounded whitespace-nowrap group-hover:bg-gray-100 transition-colors">{period}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
        {details && (
            <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                {details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                ))}
            </ul>
        )}
    </motion.div>
);

const Experience = ({ data }) => {
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
            {data.jobs.map((job, i) => (
                <ExperienceCard key={i} {...job} />
            ))}
        </motion.div>
    );
};

export default Experience;
