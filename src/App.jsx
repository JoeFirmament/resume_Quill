import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import { content } from './data/content';

function App() {
  const [lang, setLang] = useState('cn');
  const data = content[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'cn' ? 'en' : 'cn');
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans text-fg transition-colors duration-500">
      {/* Language Toggle */}
      <motion.button
        layout
        onClick={toggleLang}
        className="fixed top-6 right-6 z-50 px-4 py-2 bg-black text-white rounded-full font-mono text-sm font-bold hover:scale-105 transition-transform shadow-lg"
        whileTap={{ scale: 0.95 }}
      >
        {lang === 'cn' ? 'EN' : '中'}
      </motion.button>

      <motion.div
        layout
        className="max-w-7xl mx-auto grid grid-cols-12 gap-4"
      >
        {/* Left Column: Hero & Skills */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <Hero key={`hero-${lang}`} data={data.hero} />
            <Skills key={`skills-${lang}`} data={data.skills} />
          </AnimatePresence>
        </div>

        {/* Right Column: Experience & Education */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <Experience key={`exp-${lang}`} data={data.experience} />
            <Education key={`edu-${lang}`} data={data.education} />
          </AnimatePresence>
        </div>

        <motion.footer
          layout
          className="col-span-12 py-12 text-center text-gray-400 text-sm font-mono"
        >
          <p>{data.footer.copyright}</p>
          <p className="text-xs mt-1 opacity-60">{data.footer.tech}</p>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;
