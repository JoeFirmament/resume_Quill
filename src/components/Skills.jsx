import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
};

const SkillTag = ({ name }) => (
    <motion.span
        variants={item}
        layout
        whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm font-medium text-gray-600 cursor-default border border-gray-100"
    >
        {name}
    </motion.span>
);

const SkillCategory = ({ name, items }) => (
    <div className="mb-6 last:mb-0">
        <h3 className="text-sm font-mono text-gray-400 mb-3 uppercase tracking-wider">{name}</h3>
        <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
                <SkillTag key={i} name={item} />
            ))}
        </div>
    </div>
);

const Skills = ({ data }) => {
    return (
        <motion.div
            layout
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="bg-white p-8 rounded-3xl border border-gray-100"
        >
            <h2 className="text-3xl font-bold tracking-tighter mb-6">{data.title}</h2>
            <div className="flex flex-col gap-6">
                {data.categories.map((cat, i) => (
                    <SkillCategory key={i} {...cat} />
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
