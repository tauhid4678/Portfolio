import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './components.css';

import profileImg from '../assets/profileimg.jpg';

const Hero = ({ onOpenResume }) => {
  return (
    <section className="hero-editorial section" id="home">
      <div className="container">
        <div className="hero-editorial-grid">
          {/* Main Editorial Text Column */}
          <div className="hero-editorial-content">
            {/* Availability Indicator */}
            <motion.div 
              className="hero-status-tag"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="status-indicator-dot" />
              <span className="mono status-label-text">
                Available for software roles & selective freelance
              </span>
            </motion.div>

            {/* Headline with Editorial Typography */}
            <motion.h1 
              className="hero-editorial-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Building thoughtful, <span className="serif title-serif-italic">high-performance</span> web experiences with algorithmic rigor.
            </motion.h1>

            {/* Refined Bio & Positioning */}
            <motion.p 
              className="hero-editorial-bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              I am <strong>Md. Tauhid Hasan</strong>, a Computer Science undergraduate at <em>Varendra University</em>. My work bridges deliberate visual aesthetics, scalable React frontend architecture, and competitive programming problem solving.
            </motion.p>

            {/* Editorial CTAs */}
            <motion.div 
              className="hero-editorial-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#projects" className="editorial-btn primary">
                <span>View Selected Works</span>
                <ArrowDown size={14} />
              </a>

              <button onClick={onOpenResume} className="editorial-btn secondary">
                <FileText size={14} />
                <span>Curriculum Vitae</span>
              </button>

              <a href="#contact" className="editorial-btn link-styled">
                <span>Contact Me</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Understated Social Handles */}
            <motion.div 
              className="hero-editorial-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="meta-heading mono">REACH OUT</span>
              <div className="meta-links mono">
                <a 
                  href="https://github.com/tauhid4678" 
                  target="_blank" 
                  rel="noreferrer"
                  className="meta-link"
                >
                  <FaGithub size={13} /> GitHub
                </a>
                <span className="meta-separator">/</span>
                <a 
                  href="https://linkedin.com/in/md-tauhid-hasan" 
                  target="_blank" 
                  rel="noreferrer"
                  className="meta-link"
                >
                  <FaLinkedin size={13} /> LinkedIn
                </a>
                <span className="meta-separator">/</span>
                <a 
                  href="mailto:tauhid4678@gmail.com" 
                  className="meta-link"
                >
                  <FaEnvelope size={13} /> tauhid4678@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Portrait Column */}
          <motion.div 
            className="hero-editorial-portrait-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portrait-figure">
              <div className="portrait-image-frame">
                <img 
                  src={profileImg} 
                  alt="Md. Tauhid Hasan" 
                  className="portrait-editorial-img"
                  loading="eager"
                  onError={(e) => { 
                    e.target.src = 'https://ui-avatars.com/api/?name=Tauhid+Hasan&background=14171f&color=d99b64&size=600'; 
                  }} 
                />
              </div>

              {/* Editorial Caption */}
              <div className="portrait-caption">
                <div className="caption-title">Md. Tauhid Hasan</div>
                <div className="caption-sub mono">B.Sc. in CSE • Varendra University</div>
                <div className="caption-badge mono">1st Runner Up — Code Harbor CP</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quiet Factual Highlights Bar */}
        <motion.div 
          className="hero-highlights-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="highlight-block">
            <span className="highlight-number serif">01st</span>
            <div className="highlight-detail">
              <span className="highlight-title">Runner Up Award</span>
              <span className="highlight-sub mono">Code Harbor CP Contest (VUPC)</span>
            </div>
          </div>

          <div className="highlight-block">
            <span className="highlight-number serif">10+</span>
            <div className="highlight-detail">
              <span className="highlight-title">Verified Credentials</span>
              <span className="highlight-sub mono">DataCamp, BTEB, Programming Hero</span>
            </div>
          </div>

          <div className="highlight-block">
            <span className="highlight-number serif">04</span>
            <div className="highlight-detail">
              <span className="highlight-title">Production Web Projects</span>
              <span className="highlight-sub mono">React, Modern CSS, Client Solutions</span>
            </div>
          </div>

          <div className="highlight-block">
            <span className="highlight-number serif">2026</span>
            <div className="highlight-detail">
              <span className="highlight-title">Expected Graduation</span>
              <span className="highlight-sub mono">B.Sc. CSE, Varendra University</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
