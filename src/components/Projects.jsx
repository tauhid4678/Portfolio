import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Layers, Sparkles, CheckCircle2, X, ArrowUpRight } from 'lucide-react';
import './components.css';

import treeplantImg from '../assets/treeplantshop.png';
import heroapp from '../assets/heroapp.png';
import drawarcImg from '../assets/drawarc.png';

const projectsList = [
  {
    id: 1,
    title: 'TreePlantShop (GreenNest)',
    category: 'React Web App',
    filterTag: 'react',
    type: '🛒 E-COMMERCE & CARE PLATFORM',
    tagline: 'Modern botanical discovery and plant care web application',
    description: 'Designed and built a responsive e-commerce platform for indoor plant exploration, interactive botanical care guides, and dynamic product catalog browsing. Engineered with component-driven architecture for rapid browsing.',
    highlights: [
      'Interactive care guide and watering instructions for indoor plants',
      'Dynamic catalog categorization with responsive filtering',
      'Seamless checkout exploration and mobile-first responsive layout',
      'Fluid transitions and micro-interactions'
    ],
    tech: ['React.js', 'JavaScript (ES6+)', 'CSS3 Modules', 'Netlify', 'Framer Motion'],
    link: 'https://treeplantguide.netlify.app/',
    image: treeplantImg,
    featured: true
  },
  {
    id: 2,
    title: 'Hero-App',
    category: 'React Web App',
    filterTag: 'react',
    type: '🌐 PRODUCTIVITY DIRECTORY',
    tagline: 'Trending software & digital tools showcase directory',
    description: 'Built a high-performance web app curated for discovering trending mobile and web applications with ratings, verified download counts, developer metadata, and installation links.',
    highlights: [
      'Comprehensive app cards with rating scores and download statistics',
      'Category browsing for productivity, education, and utilities',
      'Sleek modern UI with dark-theme accents and responsive layout',
      'Instant responsive state updates and quick previews'
    ],
    tech: ['React.js', 'Vite', 'Modern CSS', 'Responsive Design', 'Netlify'],
    link: 'https://herroapp.netlify.app/',
    image: heroapp,
    featured: true
  },
  {
    id: 3,
    title: 'DrawArc',
    category: 'Client Works',
    filterTag: 'client',
    type: '🏢 COMMERCIAL CLIENT PROJECT',
    tagline: 'Professional architectural drafting and CAD services platform',
    description: 'Developed a clean, commercial web presence for an architectural drafting and 3D modeling client. Features service breakdowns, portfolio blueprints, and streamlined WhatsApp / email inquiry pathways.',
    highlights: [
      'High-conversion client landing page with clear service catalog',
      'Curated AI-assisted concept drafting imagery and blueprint diagrams',
      'Direct WhatsApp and email consultation triggers',
      'Ultra-fast loading static performance and cross-browser reliability'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'CAD Portfolio', 'Netlify'],
    link: 'https://drawarc.netlify.app/',
    image: drawarcImg,
    featured: true
  }
];

const ProjectCard = ({ project, index, onSelectProject }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className="project-card-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
    >
      <motion.div 
        className="project-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Card Header & Badge */}
        <div className="project-card-top">
          <span className="project-type-badge mono">{project.type}</span>
          <span className="project-index mono">0{index + 1}</span>
        </div>

        {/* Project Visual Showcase */}
        <div className="project-image-box" onClick={() => onSelectProject(project)}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-img" 
            loading="lazy"
          />
          <div className="project-overlay-glass">
            <span className="overlay-view-btn">
              <span>View Overview</span>
              <Sparkles size={16} />
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="project-body">
          <div className="project-category-row">
            <span className="project-category-pill mono">{project.category}</span>
          </div>

          <h3 className="project-title" onClick={() => onSelectProject(project)}>
            {project.title}
          </h3>

          <p className="project-tagline">{project.tagline}</p>

          <p className="project-desc">{project.description}</p>

          {/* Tech Badges */}
          <div className="project-tech-tags">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-tag mono">{t}</span>
            ))}
          </div>

          {/* Action Links */}
          <div className="project-links-row">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn-primary"
            >
              <span>Live Website</span>
              <ExternalLink size={15} />
            </a>

            <button 
              onClick={() => onSelectProject(project)}
              className="project-btn-secondary"
            >
              <span>Details</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsList.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'react') return p.filterTag === 'react';
    if (filter === 'client') return p.filterTag === 'client';
    return true;
  });

  return (
    <section className="projects section" id="projects">
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
              <span className="badge-dot"></span> 01 • PORTFOLIO
            </div>
            <h2 className="section-heading">
              Selected <span className="accent-gradient-text">Works</span> & Client Projects
            </h2>
            <p className="section-desc">
              Real-world digital applications built with focus on responsiveness, intuitive design, and clean architecture.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div 
            className="projects-filter-bar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({projectsList.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
              onClick={() => setFilter('react')}
            >
              React Web Apps
            </button>
            <button 
              className={`filter-btn ${filter === 'client' ? 'active' : ''}`}
              onClick={() => setFilter('client')}
            >
              Client Projects
            </button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Quick View Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="project-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="project-modal-img-wrap">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="project-modal-content">
                <span className="mono project-type-badge">{selectedProject.type}</span>
                <h3 className="project-modal-title">{selectedProject.title}</h3>
                <p className="project-modal-desc">{selectedProject.description}</p>

                <div className="project-modal-features">
                  <h4 className="mono modal-subhead">Key Highlights:</h4>
                  <ul>
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="feature-check-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-modal-tech">
                  <h4 className="mono modal-subhead">Technologies Used:</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="tech-tag mono">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-modal-actions">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
