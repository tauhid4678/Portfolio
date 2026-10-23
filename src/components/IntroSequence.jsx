import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './components.css';

const IntroSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // brief pause before removing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className="intro-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{ alignItems: 'center' }}
    >
      <div className="mono" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text-primary)', fontWeight: 600 }}>
        {Math.min(progress, 100)}%
      </div>
    </motion.div>
  );
};

export default IntroSequence;
