import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Video } from 'lucide-react';
import resumeImg from '../assets/resume.jpg';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

const Hero = ({ data }) => {
    return (
        <motion.div
            layout
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gray-100 p-8 md:p-12 rounded-3xl flex flex-col justify-between min-h-[400px]"
        >
            <div>
                <motion.div
                    variants={item}
                    className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.img
                        src={resumeImg}
                        alt={data.name}
                        className="w-full h-48 md:h-80 object-cover object-center"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.5, 1]
                        }}
                    />
                </motion.div>

                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-black"
                >
                    {data.name.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05, type: "spring" }}
                            className="inline-block"
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-gray-500 font-mono uppercase tracking-wide"
                >
                    {data.title}
                </motion.p>
            </div>

            <div className="space-y-8 mt-8">
                <div>
                    <motion.h2 variants={item} className="text-2xl font-bold mb-2">{data.tagline}</motion.h2>
                    <motion.p variants={item} className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                        {data.description}
                    </motion.p>
                </div>

                <motion.div variants={item} className="flex gap-4">
                    <a href="https://github.com/JoeFirmament" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full hover:bg-black hover:text-white transition-colors shadow-sm font-medium group">
                        <Github size={18} className="group-hover:rotate-12 transition-transform" />
                        <span>{data.buttons.github}</span>
                    </a>
                    <a href="https://space.bilibili.com/75428042" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full hover:bg-black hover:text-white transition-colors shadow-sm font-medium group">
                        <Video size={18} className="group-hover:-rotate-12 transition-transform" />
                        <span>{data.buttons.bilibili}</span>
                    </a>
                    <a href="mailto:email@example.com" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full hover:bg-black hover:text-white transition-colors shadow-sm font-medium group">
                        <Mail size={18} className="group-hover:scale-110 transition-transform" />
                        <span>{data.buttons.email}</span>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
