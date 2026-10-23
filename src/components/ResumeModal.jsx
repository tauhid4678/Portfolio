import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, MapPin, Award, BookOpen, Briefcase, ExternalLink, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="resume-modal-overlay" onClick={onClose}>
        <motion.div 
          className="resume-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="resume-modal-header">
            <div className="resume-header-badge">
              <span className="live-dot"></span> Curriculum Vitae
            </div>
            <div className="resume-actions">
              <button onClick={handlePrint} className="resume-action-btn" title="Print / Save PDF">
                <Printer size={16} /> <span>Print</span>
              </button>
              <a href="mailto:tauhid4678@gmail.com?subject=Job%20Opportunity%20/%20Inquiry" className="resume-action-btn primary">
                <Mail size={16} /> <span>Hire Tauhid</span>
              </a>
              <button onClick={onClose} className="resume-close-btn" aria-label="Close">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="resume-doc-body" id="printable-resume">
            {/* Top Identity */}
            <div className="resume-doc-header">
              <div>
                <h1 className="resume-name">MD. TAUHID HASAN</h1>
                <p className="resume-title">Full-Stack & Frontend Engineer | Competitive Programmer</p>
              </div>
              <div className="resume-contacts mono">
                <div><Mail size={14} /> tauhid4678@gmail.com</div>
                <div><MapPin size={14} /> Rajshahi, Bangladesh</div>
                <div><FaLinkedin size={14} /> linkedin.com/in/md-tauhid-hasan</div>
                <div><FaGithub size={14} /> github.com/tauhid4678</div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="resume-section">
              <h3 className="resume-sec-title"><User size={16} /> PROFESSIONAL SUMMARY</h3>
              <p className="resume-sec-text">
                Passionate and analytical Computer Science undergraduate at Varendra University with strong hands-on experience in modern frontend and full-stack web development (React, JavaScript, CSS3). 1st Runner Up in University Competitive Programming (Code Harbor Season 01), showcasing sharp problem-solving capabilities, algorithmic thinking, and quick learning adaptability. Eager to contribute to forward-thinking engineering teams.
              </p>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h3 className="resume-sec-title"><BookOpen size={16} /> EDUCATION</h3>
              <div className="resume-item">
                <div className="resume-item-top">
                  <strong>B.Sc. in Computer Science & Engineering</strong>
                  <span className="mono">2023 – 2026</span>
                </div>
                <div className="resume-item-sub">Varendra University, Rajshahi</div>
                <p className="resume-item-desc">Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Systems (SQL), Digital Signal Processing (DSP), Operating Systems.</p>
              </div>

              <div className="resume-item" style={{ marginTop: '0.75rem' }}>
                <div className="resume-item-top">
                  <strong>Higher Secondary Certificate (HSC) — Science</strong>
                  <span className="mono">2020</span>
                </div>
                <div className="resume-item-sub">Fakirhat Shahid Smriti College • GPA: 4.58 / 5.00</div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="resume-section">
              <h3 className="resume-sec-title"><Code2 size={16} /> TECHNICAL SKILLS</h3>
              <div className="resume-skills-grid">
                <div>
                  <strong>Programming Languages:</strong> C, C++, Java, Python, Solidity, JavaScript (ES6+)
                </div>
                <div>
                  <strong>Web Technologies:</strong> React.js, HTML5, CSS3, Responsive Design, Framer Motion
                </div>
                <div>
                  <strong>Core CS & Problem Solving:</strong> DSA, OOP, DSP, Competitive Programming, Blockchain Fundamentals
                </div>
                <div>
                  <strong>Developer Tools:</strong> Git, GitHub, VS Code, SQL, Netlify, Vite, RESTful APIs
                </div>
              </div>
            </div>

            {/* Honors & Awards */}
            <div className="resume-section">
              <h3 className="resume-sec-title"><Award size={16} /> HONORS & CERTIFICATIONS</h3>
              <ul className="resume-bullet-list">
                <li><strong>1st Runner Up:</strong> Code Harbor Season 01 — Varendra University Programming Club (VUPC, Spring 2024).</li>
                <li><strong>Executive Member:</strong> BASIS Students' Forum, Varendra University Chapter (2023).</li>
                <li><strong>Introduction to SQL:</strong> Verified DataCamp Certification.</li>
                <li><strong>Solidity For Beginners & Blockchain Basics:</strong> codedamn & Great Learning.</li>
                <li><strong>Programming Certifications:</strong> Java, C++, and C Certifications (Programming Hero).</li>
                <li><strong>National Skill Standard Courses:</strong> BTEB Certified in Database Programming & Office Applications.</li>
              </ul>
            </div>

            {/* Key Projects */}
            <div className="resume-section">
              <h3 className="resume-sec-title"><Briefcase size={16} /> KEY PROJECTS</h3>
              
              <div className="resume-project-item">
                <div className="resume-item-top">
                  <strong>GreenNest (TreePlantShop) — E-Commerce & Plant Care Platform</strong>
                  <span className="mono">React, Vite, CSS3</span>
                </div>
                <p className="resume-item-desc">Interactive web platform featuring botanical care guides, product exploration, reactive UI state, and responsive browsing across devices.</p>
              </div>

              <div className="resume-project-item">
                <div className="resume-item-top">
                  <strong>Hero-App — Trending Applications Directory</strong>
                  <span className="mono">React, Modern UI</span>
                </div>
                <p className="resume-item-desc">Responsive showcase catalog with search, filtering, download metrics, developer details, and interactive rating views.</p>
              </div>

              <div className="resume-project-item">
                <div className="resume-item-top">
                  <strong>DrawArc — Architectural Drafting & CAD Services Site</strong>
                  <span className="mono">Client Freelance Project</span>
                </div>
                <p className="resume-item-desc">Built a clean, responsive static web presence for an architectural client showcasing blueprint drafting, 3D modeling, and inquiry generation.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Simple User icon helper
function User(props) {
  return (
    <svg width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default ResumeModal;
