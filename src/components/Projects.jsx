import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, X, Check } from 'lucide-react';
import './components.css';

import roamvistaImg from '../assets/RoamVista.png';
import treeplantImg from '../assets/treeplantshop.png';
import heroappImg from '../assets/heroapp.png';
import drawarcImg from '../assets/drawarc.png';

const projectsList = [
  {
    id: 1,
    num: '01',
    title: 'RoamVista',
    subtitle: 'Extraordinary Journeys & Expedition Discovery',
    category: 'Web Application',
    filterTag: 'webapp',
    type: 'TRAVEL & ADVENTURE PLATFORM',
    description: 'A curated exploration platform for small-group expeditions across seven continents. Features destination filters, bespoke experience types, budget tiering, and an atmospheric dark aesthetic.',
    highlights: [
      'Interactive destination and cultural experience discovery system',
      'Dynamic budget and activity filtering with responsive layout',
      'Editorial travel typography with immersive mountain landscape imagery',
      'Optimized performance with reactive component state'
    ],
    tech: ['React.js', 'Vite', 'Modern CSS', 'Framer Motion'],
    link: 'https://roam-vista.vercel.app/', // Safe working fallback
    image: roamvistaImg,
    year: '2025'
  },
  {
    id: 2,
    num: '02',
    title: 'DrawArc Studio',
    subtitle: 'Architectural CAD & Drafting Services Site',
    category: 'Client Work',
    filterTag: 'client',
    type: 'COMMERCIAL FREELANCE PROJECT',
    description: 'A commercial website built for an architectural drafting and 3D modeling client. Highlights precision blueprints, CAD conversion workflows, and direct consultation pathways.',
    highlights: [
      'Commercial client delivery showcasing drafting and CAD portfolios',
      'Technical blueprint graphics and service scope breakdowns',
      'Integrated WhatsApp and direct email consultation touchpoints',
      'Fast-loading static architecture with zero performance bottlenecks'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'CAD Portfolio'],
    link: 'https://drawarc.netlify.app/',
    image: drawarcImg,
    year: '2024'
  },
  {
    id: 3,
    num: '03',
    title: 'GreenNest (TreePlantShop)',
    subtitle: 'Botanical E-Commerce & Plant Care Platform',
    category: 'E-Commerce',
    filterTag: 'ecommerce',
    type: 'E-COMMERCE & CARE GUIDES',
    description: 'A responsive digital store for indoor air-purifying plants with built-in horticultural care instructions, light/watering guides, and smooth shopping experience.',
    highlights: [
      'Interactive botanical care guides for indoor air purifiers',
      'Dynamic plant catalog with reactive state filtering',
      'Seamless mobile-first browsing and checkout discovery',
      'Lightweight styling with fluid micro-interactions'
    ],
    tech: ['React.js', 'JavaScript', 'CSS3 Modules', 'Netlify'],
    link: 'https://treeplantguide.netlify.app/',
    image: treeplantImg,
    year: '2024'
  },
  {
    id: 4,
    num: '04',
    title: 'Hero-App',
    subtitle: 'Curated Software & Productivity Directory',
    category: 'Web Application',
    filterTag: 'webapp',
    type: 'SOFTWARE SHOWCASE DIRECTORY',
    description: 'A web portal curated for discovering trending mobile and web tools. Displays verified ratings, download statistics, category metadata, and installation links.',
    highlights: [
      'Structured app metadata with verified ratings and user downloads',
      'Productivity and educational category breakdown',
      'High-contrast card views and rapid instant search simulation',
      'Robust mobile responsiveness across varied screen ratios'
    ],
    tech: ['React.js', 'Vite', 'Modern CSS', 'Netlify'],
    link: 'https://herroapp.netlify.app/',
    image: heroappImg,
    year: '2024'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projectsList.filter((p) => {
    if (filter === 'all') return true;
    return p.filterTag === filter;
  });

  return (
    <section className="projects-editorial section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="section-index-pill mono">INDEX / 01</span>
            <span className="section-divider-dot" />
            <span className="mono section-meta-note">SELECTED PORTFOLIO</span>
          </div>

          <div className="section-title-row">
            <h2 className="section-editorial-heading">
              Featured <span className="serif section-serif-italic">Projects</span>
            </h2>
            
            {/* Filter Tabs */}
            <div className="editorial-filter-tabs">
              <button 
                className={`filter-tab-btn mono ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({projectsList.length})
              </button>
              <button 
                className={`filter-tab-btn mono ${filter === 'webapp' ? 'active' : ''}`}
                onClick={() => setFilter('webapp')}
              >
                Web Apps
              </button>
              <button 
                className={`filter-tab-btn mono ${filter === 'ecommerce' ? 'active' : ''}`}
                onClick={() => setFilter('ecommerce')}
              >
                E-Commerce
              </button>
              <button 
                className={`filter-tab-btn mono ${filter === 'client' ? 'active' : ''}`}
                onClick={() => setFilter('client')}
              >
                Client Work
              </button>
            </div>
          </div>
        </div>

        {/* Project Showcase List (Editorial Asymmetric Presentation) */}
        <div className="projects-editorial-list">
          {filtered.map((project, idx) => (
            <motion.article 
              key={project.id}
              className={`project-editorial-item ${idx % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Media Preview */}
              <div 
                className="project-editorial-media"
                onClick={() => setSelectedProject(project)}
              >
                <div className="media-inner-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-editorial-image" 
                    loading="lazy"
                  />
                  <div className="media-overlay-badge mono">
                    <span>Inspect details</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>

              {/* Editorial Project Info */}
              <div className="project-editorial-details">
                <div className="project-number-row mono">
                  <span className="project-editorial-num serif">{project.num}</span>
                  <span className="project-editorial-category">{project.type}</span>
                  <span className="project-editorial-year">{project.year}</span>
                </div>

                <h3 
                  className="project-editorial-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="project-editorial-subtitle">{project.subtitle}</p>

                <p className="project-editorial-summary">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-editorial-tech">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-editorial-tag mono">{t}</span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-editorial-links">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="editorial-project-link primary"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={14} />
                  </a>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="editorial-project-link secondary"
                  >
                    <span>View Overview</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Overview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="editorial-modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="editorial-modal-window"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top-bar">
                <span className="mono modal-project-num">PROJECT // {selectedProject.num}</span>
                <button 
                  className="modal-close-trigger"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="modal-banner-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-body-content">
                <div className="modal-title-wrap">
                  <span className="mono modal-category-pill">{selectedProject.type}</span>
                  <h3 className="modal-main-title">{selectedProject.title}</h3>
                  <p className="modal-sub-tagline">{selectedProject.subtitle}</p>
                </div>

                <p className="modal-desc-body">{selectedProject.description}</p>

                <div className="modal-section-block">
                  <h4 className="mono modal-block-label">KEY ARCHITECTURAL HIGHLIGHTS</h4>
                  <ul className="modal-bullet-list">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>
                        <Check size={14} className="bullet-check-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section-block">
                  <h4 className="mono modal-block-label">TECHNOLOGY STACK</h4>
                  <div className="modal-tags-cloud">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="tech-editorial-tag mono">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-action-row">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="editorial-btn primary"
                  >
                    <span>Launch Live Website</span>
                    <ExternalLink size={14} />
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
