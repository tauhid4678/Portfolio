import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Laptop, Cpu, Database, Award, BookOpen, ArrowUpRight } from 'lucide-react';
import './components.css';

const skillGroups = [
  {
    category: 'Programming Languages',
    description: 'Foundational problem solving & systems development',
    items: ['C++', 'C', 'Java', 'Python', 'JavaScript (ES6+)', 'Solidity']
  },
  {
    category: 'Web & Frontend Development',
    description: 'Interface architecture, responsive systems & client state',
    items: ['React.js', 'HTML5 Semantic', 'Modern CSS3', 'Framer Motion', 'REST APIs', 'Vite']
  },
  {
    category: 'Computer Science Core',
    description: 'Algorithmic rigor & theoretical foundations',
    items: ['Data Structures & Algorithms', 'Competitive Programming', 'OOP Principles', 'Digital Signal Processing (DSP)', 'Blockchain Fundamentals']
  },
  {
    category: 'Databases & Developer Tooling',
    description: 'Data querying, version control & deployment platforms',
    items: ['SQL (DataCamp Certified)', 'Git & GitHub', 'VS Code', 'Netlify', 'npm']
  }
];

const educationTimeline = [
  {
    period: '2023 — 2026',
    role: 'B.Sc. in Computer Science & Engineering',
    institution: 'Varendra University, Rajshahi',
    badge: 'Undergraduate Program',
    description: 'Core focus on Algorithms, Data Structures, Object-Oriented Programming, Database Systems, Computer Networks, and Discrete Mathematics.'
  },
  {
    period: 'Jul 2023 — Dec 2023',
    role: 'Executive Member',
    institution: 'BASIS Students\' Forum (VU Chapter)',
    badge: 'Student Leadership',
    description: 'Coordinated technical workshops, industry-academia meetups, and student programming orientation sessions across the university chapter.'
  },
  {
    period: '2020',
    role: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Fakirhat Shahid Smriti College',
    badge: 'GPA: 4.58 / 5.00',
    description: 'Pre-university concentration in Higher Mathematics, Physics, Chemistry, and Information Technology.'
  }
];

const SkillsEducation = () => {
  return (
    <section className="skills-editorial section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="section-index-pill mono">INDEX / 02</span>
            <span className="section-divider-dot" />
            <span className="mono section-meta-note">COMPETENCIES & BACKGROUND</span>
          </div>

          <h2 className="section-editorial-heading">
            Technical <span className="serif section-serif-italic">Capabilities</span> & Education
          </h2>
        </div>

        {/* Two-Column Editorial Grid: Skills Matrix + Journey Timeline */}
        <div className="skills-editorial-grid">
          {/* Left Column: Clean Scannable Technical Matrix */}
          <div className="skills-column">
            <div className="column-header-block">
              <span className="column-label mono">TECHNICAL PROFICIENCIES</span>
              <p className="column-subtext">
                Demonstrated skills applied in competitive programming contests and production web applications.
              </p>
            </div>

            <div className="skills-matrix-list">
              {skillGroups.map((group, idx) => (
                <motion.div 
                  key={idx}
                  className="skills-matrix-row"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="matrix-cat-info">
                    <h3 className="matrix-cat-name">{group.category}</h3>
                    <p className="matrix-cat-sub mono">{group.description}</p>
                  </div>

                  <div className="matrix-items-wrap">
                    {group.items.map((item, iIdx) => (
                      <span key={iIdx} className="matrix-pill mono">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic & Leadership Timeline */}
          <div className="timeline-column">
            <div className="column-header-block">
              <span className="column-label mono">ACADEMIC & LEADERSHIP JOURNEY</span>
              <p className="column-subtext">
                Formal computer science curriculum paired with active university tech community leadership.
              </p>
            </div>

            <div className="editorial-timeline-list">
              {educationTimeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="editorial-timeline-entry"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  <div className="entry-period-meta mono">
                    <span className="entry-period">{item.period}</span>
                    <span className="entry-badge">{item.badge}</span>
                  </div>

                  <h3 className="entry-role">{item.role}</h3>
                  <div className="entry-institution mono">{item.institution}</div>
                  <p className="entry-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
