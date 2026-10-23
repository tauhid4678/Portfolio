import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Eye, X, ArrowUpRight } from 'lucide-react';
import './components.css';

import national17Img from '../assets/national17.jpg';
import national18Img from '../assets/national18.jpg';
import blockchainImg from '../assets/blockchain.jpg';
import basisImg from '../assets/basis.jpg';
import solidityImg from '../assets/solidity.jpg';
import sqlImg from '../assets/sql.png';
import cppImg from '../assets/c++.jpg';
import cImg from '../assets/c.jpg';
import javaImg from '../assets/java.jpg';
import harborImg from '../assets/code_harbor.jpg';

const certsList = [
  {
    id: 1,
    title: 'Code Harbor Season 01 — 1st Runner Up',
    issuer: 'VUPC (Varendra University Programming Club)',
    type: 'Competitive Programming',
    category: 'contest',
    year: 'Spring 2024',
    featured: true,
    badge: '1st Runner Up Trophy',
    image: harborImg
  },
  {
    id: 2,
    title: 'Executive Member Certificate of Appreciation',
    issuer: 'BASIS Students\' Forum (VU Chapter)',
    type: 'Leadership & Community',
    category: 'contest',
    year: '2023',
    featured: true,
    badge: 'Executive Council',
    image: basisImg
  },
  {
    id: 3,
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    type: 'Relational Database Querying',
    category: 'web3',
    year: 'Verified',
    badge: 'DataCamp Verified',
    image: sqlImg
  },
  {
    id: 4,
    title: 'Solidity For Beginners',
    issuer: 'codedamn',
    type: 'Smart Contracts Development',
    category: 'web3',
    year: 'Verified',
    badge: 'Web3 & EVM',
    image: solidityImg
  },
  {
    id: 5,
    title: 'Blockchain Basics',
    issuer: 'Great Learning',
    type: 'Decentralized Architecture',
    category: 'web3',
    year: 'Verified',
    badge: 'Foundations',
    image: blockchainImg
  },
  {
    id: 6,
    title: 'Programming in Java Certification',
    issuer: 'Programming Hero',
    type: 'Object-Oriented Programming',
    category: 'languages',
    year: 'Verified',
    badge: 'Java Core',
    image: javaImg
  },
  {
    id: 7,
    title: 'C++ Programming Mastery',
    issuer: 'Programming Hero',
    type: 'Algorithms & Competitive Core',
    category: 'languages',
    year: 'Verified',
    badge: 'C++ Systems',
    image: cppImg
  },
  {
    id: 8,
    title: 'Programming in C Certification',
    issuer: 'Programming Hero',
    type: 'Foundational Programming',
    category: 'languages',
    year: 'Verified',
    badge: 'C Language',
    image: cImg
  },
  {
    id: 9,
    title: 'National Skill Standard Course 2018',
    issuer: 'BTEB (Bangladesh Technical Education Board)',
    type: 'Database Programming',
    category: 'national',
    year: 'Government Accredited',
    badge: 'BTEB Certified',
    image: national18Img
  },
  {
    id: 10,
    title: 'National Skill Standard Course 2017',
    issuer: 'BTEB (Bangladesh Technical Education Board)',
    type: 'Office Application & IT Foundations',
    category: 'national',
    year: 'Government Accredited',
    badge: 'BTEB Certified',
    image: national17Img
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedCert]);

  const filtered = certsList.filter((c) => {
    if (activeCategory === 'all') return true;
    return c.category === activeCategory;
  });

  return (
    <section className="certifications-editorial section" id="certifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="section-index-pill mono">INDEX / 03</span>
            <span className="section-divider-dot" />
            <span className="mono section-meta-note">HONORS & CREDENTIALS</span>
          </div>

          <div className="section-title-row">
            <h2 className="section-editorial-heading">
              Certifications & <span className="serif section-serif-italic">Achievements</span>
            </h2>

            {/* Filter Tabs */}
            <div className="editorial-filter-tabs">
              <button 
                className={`filter-tab-btn mono ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All ({certsList.length})
              </button>
              <button 
                className={`filter-tab-btn mono ${activeCategory === 'contest' ? 'active' : ''}`}
                onClick={() => setActiveCategory('contest')}
              >
                Contests & Leadership
              </button>
              <button 
                className={`filter-tab-btn mono ${activeCategory === 'web3' ? 'active' : ''}`}
                onClick={() => setActiveCategory('web3')}
              >
                SQL & Web3
              </button>
              <button 
                className={`filter-tab-btn mono ${activeCategory === 'languages' ? 'active' : ''}`}
                onClick={() => setActiveCategory('languages')}
              >
                Languages
              </button>
              <button 
                className={`filter-tab-btn mono ${activeCategory === 'national' ? 'active' : ''}`}
                onClick={() => setActiveCategory('national')}
              >
                National Diplomas
              </button>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="certs-editorial-grid">
          {filtered.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className={`cert-editorial-card ${cert.featured ? 'featured-credential' : ''}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Document Thumbnail Preview */}
              <div className="cert-preview-frame">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="cert-preview-img"
                  loading="lazy" 
                />
                <div className="cert-hover-mask">
                  <span className="mask-view-trigger mono">
                    <Eye size={14} /> Inspect Document
                  </span>
                </div>
                {cert.featured && (
                  <span className="featured-trophy-badge mono">
                    <Trophy size={12} /> {cert.badge}
                  </span>
                )}
              </div>

              {/* Card Meta & Details */}
              <div className="cert-text-meta">
                <div className="cert-meta-top mono">
                  <span className="cert-type-label">{cert.type}</span>
                  <span className="cert-year-label">{cert.year}</span>
                </div>

                <h3 className="cert-headline">{cert.title}</h3>

                <div className="cert-issuer-line mono">
                  <Award size={13} className="issuer-icon" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <div className="editorial-modal-backdrop" onClick={() => setSelectedCert(null)}>
              <motion.div 
                className="cert-lightbox-frame"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lightbox-top-bar">
                  <span className="mono lightbox-meta-tag">{selectedCert.type} // {selectedCert.year}</span>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="modal-close-trigger"
                    aria-label="Close certificate inspection"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="lightbox-document-view">
                  <img src={selectedCert.image} alt={selectedCert.title} />
                </div>

                <div className="lightbox-footer-caption">
                  <div>
                    <h3 className="lightbox-cert-title">{selectedCert.title}</h3>
                    <p className="lightbox-cert-issuer mono">
                      Issued by <strong>{selectedCert.issuer}</strong>
                    </p>
                  </div>

                  <a 
                    href={selectedCert.image} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="editorial-btn secondary"
                  >
                    <span>Open Full Document</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Certifications;
