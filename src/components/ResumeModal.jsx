import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, MapPin, Award, BookOpen, Briefcase, Code2, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="editorial-modal-backdrop" onClick={onClose}>
        <motion.div 
          className="resume-editorial-modal"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="resume-modal-topbar">
            <span className="mono resume-doc-tag">CURRICULUM VITAE // MD. TAUHID HASAN</span>
            <div className="resume-topbar-actions">
              <button onClick={handlePrint} className="resume-icon-action mono" title="Print or Save PDF">
                <Printer size={14} /> <span>Print</span>
              </button>
              <a href="mailto:tauhid4678@gmail.com?subject=Engineering%20Opportunity" className="resume-cta-action mono">
                <span>Hire Tauhid</span>
                <ArrowUpRight size={13} />
              </a>
              <button onClick={onClose} className="modal-close-trigger" aria-label="Close CV modal">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="resume-document-sheet" id="printable-resume">
            {/* Header Identity */}
            <div className="resume-sheet-header">
              <div>
                <h1 className="resume-full-name">MD. TAUHID HASAN</h1>
                <p className="resume-sheet-headline">Full-Stack & Frontend Engineer • Competitive Programmer</p>
              </div>
              <div className="resume-contact-block mono">
                <div><Mail size={13} /> tauhid4678@gmail.com</div>
                <div><MapPin size={13} /> Rajshahi, Bangladesh</div>
                <div><FaLinkedin size={13} /> linkedin.com/in/md-tauhid-hasan</div>
                <div><FaGithub size={13} /> github.com/tauhid4678</div>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="resume-sheet-section">
              <h3 className="resume-sec-heading mono">PROFESSIONAL SUMMARY</h3>
              <p className="resume-sec-paragraph">
                Analytical and dedicated Computer Science undergraduate at Varendra University with demonstrable strength in modern React frontend engineering, responsive web systems, and competitive algorithmic problem solving. 1st Runner Up in VUPC Code Harbor Season 01. Experienced in building production web applications with clean component architecture and performance-focused execution.
              </p>
            </section>

            {/* Education */}
            <section className="resume-sheet-section">
              <h3 className="resume-sec-heading mono">EDUCATION</h3>
              <div className="resume-entry">
                <div className="resume-entry-header">
                  <strong>B.Sc. in Computer Science & Engineering</strong>
                  <span className="mono">2023 – 2026</span>
                </div>
                <div className="resume-entry-sub">Varendra University, Rajshahi</div>
                <p className="resume-entry-details">
                  Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, Digital Signal Processing (DSP).
                </p>
              </div>

              <div className="resume-entry" style={{ marginTop: '0.85rem' }}>
                <div className="resume-entry-header">
                  <strong>Higher Secondary Certificate (HSC) — Science</strong>
                  <span className="mono">2020</span>
                </div>
                <div className="resume-entry-sub">Fakirhat Shahid Smriti College • GPA: 4.58 / 5.00</div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="resume-sheet-section">
              <h3 className="resume-sec-heading mono">TECHNICAL SKILLS</h3>
              <div className="resume-skills-matrix">
                <div>
                  <strong>Programming Languages:</strong> C++, C, Java, Python, JavaScript (ES6+), Solidity
                </div>
                <div>
                  <strong>Frontend & Web:</strong> React.js, Vite, HTML5 Semantic, Modern CSS3, Framer Motion, REST APIs
                </div>
                <div>
                  <strong>Core CS:</strong> Data Structures & Algorithms, OOP, Competitive Programming, DSP, Blockchain Basics
                </div>
                <div>
                  <strong>Tools & Workflow:</strong> Git, GitHub, VS Code, SQL (DataCamp Verified), Netlify, npm
                </div>
              </div>
            </section>

            {/* Honors & Certifications */}
            <section className="resume-sheet-section">
              <h3 className="resume-sec-heading mono">HONORS & VERIFIED CERTIFICATIONS</h3>
              <ul className="resume-list">
                <li><strong>1st Runner Up:</strong> Code Harbor Season 01 — Varendra University Programming Club (VUPC, Spring 2024).</li>
                <li><strong>Executive Member:</strong> BASIS Students' Forum (Varendra University Chapter, 2023).</li>
                <li><strong>Introduction to SQL:</strong> Verified DataCamp Certification.</li>
                <li><strong>Smart Contracts & Blockchain:</strong> Solidity For Beginners (codedamn) & Blockchain Basics (Great Learning).</li>
                <li><strong>Programming Hero Certifications:</strong> Java, C++, and C Programming credentials.</li>
                <li><strong>National Skill Standards:</strong> BTEB Certified in Database Programming & Office Application.</li>
              </ul>
            </section>

            {/* Key Projects */}
            <section className="resume-sheet-section">
              <h3 className="resume-sec-heading mono">SELECTED PROJECTS</h3>
              
              <div className="resume-project-item">
                <div className="resume-entry-header">
                  <strong>RoamVista — Travel & Adventure Platform</strong>
                  <span className="mono">React, Vite, CSS3</span>
                </div>
                <p className="resume-entry-details">Curated expedition discovery platform featuring interactive destination exploration, activity categorization, budget tiering, and an atmospheric responsive interface.</p>
              </div>

              <div className="resume-project-item">
                <div className="resume-entry-header">
                  <strong>GreenNest (TreePlantShop) — E-Commerce & Plant Care Platform</strong>
                  <span className="mono">React, Netlify</span>
                </div>
                <p className="resume-entry-details">Indoor air-purifying plant store featuring comprehensive watering/lighting botanical guides, dynamic plant catalog, and reactive shopping workflow.</p>
              </div>

              <div className="resume-project-item">
                <div className="resume-entry-header">
                  <strong>Hero-App — Productivity & Tools Directory</strong>
                  <span className="mono">React Web App</span>
                </div>
                <p className="resume-entry-details">Curated digital application showcase displaying verified user ratings, download metrics, developer information, and responsive layout.</p>
              </div>

              <div className="resume-project-item">
                <div className="resume-entry-header">
                  <strong>DrawArc — Architectural CAD & Drafting Studio</strong>
                  <span className="mono">Client Freelance</span>
                </div>
                <p className="resume-entry-details">Commercial web presence for an architectural client showcasing blueprint drafting, 3D modeling services, and client quote generation.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
