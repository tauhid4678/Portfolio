import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, GraduationCap, Laptop, Database, Cpu, 
  Terminal, Sparkles, Award, Calendar, MapPin, 
  CheckCircle, ArrowUpRight 
} from 'lucide-react';
import { 
  FaReact, FaJava, FaPython, FaGitAlt, 
  FaHtml5, FaCss3Alt, FaJs, FaDatabase 
} from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import './components.css';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <Terminal size={20} className="cat-icon-cyan" />,
    description: 'Foundational and modern languages for competitive problem solving and systems development.',
    skills: [
      { name: 'C++', level: 'Advanced / CP' },
      { name: 'C', level: 'Strong Core' },
      { name: 'Java', level: 'OOP & Certified' },
      { name: 'Python', level: 'Scripting & Algo' },
      { name: 'JavaScript (ES6+)', level: 'Modern Frontend' },
      { name: 'Solidity', level: 'Smart Contracts' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & Web Development',
    icon: <Laptop size={20} className="cat-icon-indigo" />,
    description: 'Building dynamic, responsive, and aesthetically modern web applications.',
    skills: [
      { name: 'React.js', level: 'Component Architecture' },
      { name: 'HTML5 Semantic', level: 'Standards & SEO' },
      { name: 'Modern CSS3', level: 'Flex/Grid/Animations' },
      { name: 'Framer Motion', level: 'Interactive Animations' },
      { name: 'Responsive Design', level: 'Mobile First' },
      { name: 'REST APIs', level: 'Integration' },
    ]
  },
  {
    id: 'core',
    title: 'Core Computer Science',
    icon: <Cpu size={20} className="cat-icon-violet" />,
    description: 'Computer science principles that drive clean, efficient, and scalable engineering.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Core Strength' },
      { name: 'Competitive Programming', level: '1st Runner Up' },
      { name: 'OOP Concepts', level: 'Modular Design' },
      { name: 'Digital Signal Processing (DSP)', level: 'Academic Core' },
      { name: 'Blockchain Fundamentals', level: 'Decentralized Tech' },
    ]
  },
  {
    id: 'tools',
    title: 'Databases & Developer Tools',
    icon: <Database size={20} className="cat-icon-emerald" />,
    description: 'Tools for development, version control, database querying, and hosting.',
    skills: [
      { name: 'SQL', level: 'DataCamp Certified' },
      { name: 'Git & GitHub', level: 'Version Control' },
      { name: 'VS Code', level: 'Primary IDE' },
      { name: 'Vite & npm', level: 'Build Tooling' },
      { name: 'Netlify', level: 'Continuous Deployment' },
    ]
  },
  {
    id: 'ai',
    title: 'AI Assisted Workflow',
    icon: <Sparkles size={20} className="cat-icon-amber" />,
    description: 'Leveraging cutting-edge AI models to accelerate development and creative assets.',
    skills: [
      { name: 'Claude & Sonnet', level: 'Architecture & Coding' },
      { name: 'ChatGPT & Gemini', level: 'Ideation & Prompting' },
      { name: 'Antigravity IDE', level: 'Agentic Workflows' },
      { name: 'Prompt Engineering', level: 'Workflow Automation' },
    ]
  }
];

const educationData = [
  {
    id: 1,
    title: 'B.Sc. in Computer Science & Engineering',
    institution: 'Varendra University, Rajshahi',
    period: '2023 – 2026 (Undergraduate)',
    type: 'Academic Degree',
    highlight: 'Key Focus: Algorithms, Data Structures, OOP, Database Systems, Computer Networks.',
    badge: 'Undergraduate Program'
  },
  {
    id: 2,
    title: 'Executive Member — Varendra University Chapter',
    institution: 'BASIS Students\' Forum',
    period: 'July 2023 – December 2023',
    type: 'Leadership & Community',
    highlight: 'Served as an active executive member, organizing tech events, workshops, and student networking.',
    badge: 'Leadership Certificate'
  },
  {
    id: 3,
    title: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Fakirhat Shahid Smriti College',
    period: 'Passing Year: 2020',
    type: 'Academic College',
    highlight: 'Academic Result: GPA 4.58 / 5.00 in Science division.',
    badge: 'GPA: 4.58 / 5.00'
  }
];

const SkillsEducation = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="skills-edu section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge-pill mono">
              <span className="badge-dot"></span> 02 • BACKGROUND & CAPABILITIES
            </div>
            <h2 className="section-heading">
              Skills, <span className="accent-gradient-text">Experience</span> & Education
            </h2>
            <p className="section-desc">
              Strong technical proficiency built on rigorous algorithmic foundations and real development experience.
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <div className="tab-switcher">
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <Code2 size={16} />
              <span>Technical Skills</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={16} />
              <span>Education & Leadership</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Skills */}
        <AnimatePresence mode="wait">
          {activeTab === 'skills' ? (
            <motion.div 
              key="skills-tab"
              className="skills-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {skillCategories.map((cat, idx) => (
                <div key={cat.id} className="skill-cat-card">
                  <div className="skill-cat-header">
                    <div className="skill-cat-icon-box">{cat.icon}</div>
                    <div>
                      <h3 className="skill-cat-title">{cat.title}</h3>
                      <p className="skill-cat-desc">{cat.description}</p>
                    </div>
                  </div>

                  <div className="skills-pill-cloud">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-pill-interactive">
                        <span className="skill-pill-name">{skill.name}</span>
                        <span className="skill-pill-level mono">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="education-tab"
              className="timeline-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="timeline-track">
                {educationData.map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    className="timeline-card"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className="timeline-node"></div>
                    <div className="timeline-inner">
                      <div className="timeline-header">
                        <span className="timeline-badge mono">{item.badge}</span>
                        <span className="timeline-date mono">{item.period}</span>
                      </div>
                      
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-institution">{item.institution}</p>
                      <p className="timeline-highlight">{item.highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsEducation;
