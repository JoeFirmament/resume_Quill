import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, className = '' }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`hand-border mb-8 ${className}`}
    >
      {title && (
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-dashed border-gray-400 pb-2 inline-block">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
};

export default Section;
