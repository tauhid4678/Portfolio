import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowRight, Download, Sparkles, Trophy, Code2, GraduationCap, ArrowUpRight } from 'lucide-react';
import './components.css';

import profileImg from '../assets/profileimg.jpg';

const roles = [
  'Frontend & React Developer',
  'Full-Stack Web Engineer',
  'Competitive Programmer (1st Runner Up)',
  'Computer Science Undergraduate',
];

const Hero = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Dynamic Typewriter Effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(80);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  // Subtle 3D Card Hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const stats = [
    { value: '1st', label: 'Runner Up CP', sub: 'Code Harbor VUPC' },
    { value: '10+', label: 'Certifications', sub: 'DataCamp, BTEB, PH' },
    { value: '3+', label: 'Years Coding', sub: 'C, C++, Java, JS, React' },
    { value: '100%', label: 'Responsive UI', sub: 'Production Ready' },
  ];

  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Text & Actions */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <motion.div 
              className="status-pill"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="status-dot"></span>
              <span className="mono status-text">Available for Full-time Roles & Freelance</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <h1 className="hero-title">
              <span className="hero-greeting mono">HELLO, WORLD! I'M</span>
              <span className="hero-name">
                MD. TAUHID <span className="accent-gradient-text">HASAN</span>
              </span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="hero-role-wrapper">
              <span className="hero-role-prefix mono">&gt; </span>
              <span className="hero-role-text">{displayText}</span>
              <span className="typing-cursor">|</span>
            </div>

            {/* Bio Description */}
            <p className="hero-description">
              A passionate Computer Science undergraduate at <strong className="text-highlight">Varendra University</strong> specializing in modern web development and algorithms. I craft high-performance, user-centric web applications with clean design and robust problem-solving fundamentals.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-glass" title="View Curriculum Vitae">
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="hero-social-strip">
              <span className="mono social-label">Connect:</span>
              <div className="social-links-row">
                <a 
                  href="https://github.com/tauhid4678" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-pill"
                  title="GitHub Profile"
                >
                  <FaGithub size={17} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="subtle-arrow" />
                </a>

                <a 
                  href="https://linkedin.com/in/md-tauhid-hasan" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-pill"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={17} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="subtle-arrow" />
                </a>

                <a 
                  href="mailto:tauhid4678@gmail.com" 
                  className="social-pill"
                  title="Direct Email"
                >
                  <FaEnvelope size={17} />
                  <span>tauhid4678@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Profile Portrait with Floating Badges */}
          <motion.div 
            className="hero-visual-wrapper"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="portrait-card-3d"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Outer Radiant Glow Ring */}
              <div className="portrait-glow-ring"></div>

              {/* Card Container */}
              <div className="portrait-frame">
                <img 
                  src={profileImg} 
                  alt="Md. Tauhid Hasan" 
                  className="portrait-img"
                  onError={(e) => { 
                    e.target.src = 'https://ui-avatars.com/api/?name=Tauhid+Hasan&background=121826&color=6366f1&size=512'; 
                  }} 
                />
                
                {/* Gradient vignette overlay at bottom */}
                <div className="portrait-overlay">
                  <div className="portrait-meta">
                    <span className="portrait-name">Md. Tauhid Hasan</span>
                    <span className="portrait-subtitle mono">Software & Web Developer</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: CP Achievement */}
              <motion.div 
                className="floating-badge badge-trophy"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="badge-icon gold"><Trophy size={18} /></div>
                <div>
                  <div className="badge-title">1st Runner Up</div>
                  <div className="badge-sub mono">Code Harbor CP Contest</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Tech Specialization */}
              <motion.div 
                className="floating-badge badge-tech"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="badge-icon cyan"><Code2 size={18} /></div>
                <div>
                  <div className="badge-title">Modern React</div>
                  <div className="badge-sub mono">Frontend & Full-Stack</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Academic */}
              <motion.div 
                className="floating-badge badge-edu"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="badge-icon violet"><GraduationCap size={18} /></div>
                <div>
                  <div className="badge-title">B.Sc. in CSE</div>
                  <div className="badge-sub mono">Varendra University</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Hero Stats Strip */}
        <motion.div 
          className="hero-stats-banner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value accent-gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub mono">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
