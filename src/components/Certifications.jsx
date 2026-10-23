import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Trophy, Eye, X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import './components.css';

import national17Img from '../assets/national17.jpg';
import national18Img from '../assets/national18.jpg';
import blockchainImg from '../assets/blockchain.jpg';
import basisImg from '../assets/basis.jpg';
import solidityImg from '../assets/solidity.jpg';
import sql from '../assets/sql.png';
import cpp from '../assets/c++.jpg';
import c from '../assets/c.jpg';
import java from '../assets/java.jpg';
import harbor from '../assets/code_harbor.jpg';

const certsList = [
  {
    id: 1,
    title: 'Code Harbor Season 01 — 1st Runner Up',
    issuer: 'VUPC (Varendra University Programming Club)',
    type: 'Competitive Programming',
    category: 'contest',
    date: 'Spring 2024',
    badge: '🏆 1st Runner Up Trophy',
    featured: true,
    image: harbor
  },
  {
    id: 2,
    title: 'Executive Member Appreciation',
    issuer: 'BASIS Students\' Forum',
    type: 'Leadership & Community',
    category: 'contest',
    date: '2023',
    badge: 'Executive Council',
    featured: true,
    image: basisImg
  },
  {
    id: 3,
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    type: 'Database Querying',
    category: 'web3',
    date: 'Certified',
    badge: 'Verified Credential',
    image: sql
  },
  {
    id: 4,
    title: 'Solidity For Beginners',
    issuer: 'codedamn',
    type: 'Smart Contracts',
    category: 'web3',
    date: 'Certified',
    badge: 'Web3 & Blockchain',
    image: solidityImg
  },
  {
    id: 5,
    title: 'Blockchain Basics',
    issuer: 'Great Learning',
    type: 'Decentralized Architecture',
    category: 'web3',
    date: 'Certified',
    badge: 'Foundations',
    image: blockchainImg
  },
  {
    id: 6,
    title: 'Programming in Java Certification',
    issuer: 'Programming Hero',
    type: 'Object-Oriented Programming',
    category: 'languages',
    date: 'Certified',
    badge: 'Java Core',
    image: java
  },
  {
    id: 7,
    title: 'C++ Programming Mastery',
    issuer: 'Programming Hero',
    type: 'Competitive & Algorithms',
    category: 'languages',
    date: 'Certified',
    badge: 'C++ Mastery',
    image: cpp
  },
  {
    id: 8,
    title: 'Programming in C Certification',
    issuer: 'Programming Hero',
    type: 'Foundational Programming',
    category: 'languages',
    date: 'Certified',
    badge: 'C Language',
    image: c
  },
  {
    id: 9,
    title: 'National Skill Standard Course 2018',
    issuer: 'BTEB (Bangladesh Technical Education Board)',
    type: 'Database Programming',
    category: 'national',
    date: 'National Certification',
    badge: 'Government Accredited',
    image: national18Img
  },
  {
    id: 10,
    title: 'National Skill Standard Course 2017',
    issuer: 'BTEB (Bangladesh Technical Education Board)',
    type: 'Office Application & IT',
    category: 'national',
    date: 'National Certification',
    badge: 'Government Accredited',
    image: national17Img
  }
];

const CertCard = ({ cert, index, onImageClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

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
      className={`cert-card-wrapper ${cert.featured ? 'featured-cert' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div 
        className="cert-card-modern"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onImageClick(cert)}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Thumbnail Preview Area */}
        <div className="cert-thumb-box">
          <img src={cert.image} alt={cert.title} className="cert-thumb-img" loading="lazy" />
          <div className="cert-thumb-overlay">
            <span className="cert-view-badge">
              <Eye size={15} />
              <span>Inspect Certificate</span>
            </span>
          </div>
          {cert.featured && (
            <span className="cert-top-badge gold-gradient-text mono">
              <Trophy size={13} /> FEATURED
            </span>
          )}
        </div>

        {/* Certificate Details */}
        <div className="cert-info-body">
          <div className="cert-type-row">
            <span className="cert-type-tag mono">{cert.type}</span>
            <span className="cert-date mono">{cert.date}</span>
          </div>

          <h3 className="cert-title-text">{cert.title}</h3>
          
          <div className="cert-issuer-row">
            <Award size={14} className="cert-issuer-icon" />
            <span className="cert-issuer-name">{cert.issuer}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');

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

  const filteredCerts = certsList.filter((c) => {
    if (categoryFilter === 'all') return true;
    return c.category === categoryFilter;
  });

  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        {/* Section Heading */}
        <div className="section-head-wrapper">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge-pill mono">
              <span className="badge-dot"></span> 03 • CREDENTIALS & ACHIEVEMENTS
            </div>
            <h2 className="section-heading">
              Honors, <span className="accent-gradient-text">Certifications</span> & Diplomas
            </h2>
            <p className="section-desc">
              Verified recognitions in competitive programming, leadership, software engineering, and database technologies. Click any certificate to inspect full document.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="certs-filter-bar">
            <button 
              className={`filter-btn ${categoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('all')}
            >
              All ({certsList.length})
            </button>
            <button 
              className={`filter-btn ${categoryFilter === 'contest' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('contest')}
            >
              Contest & Leadership
            </button>
            <button 
              className={`filter-btn ${categoryFilter === 'web3' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('web3')}
            >
              SQL & Blockchain
            </button>
            <button 
              className={`filter-btn ${categoryFilter === 'languages' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('languages')}
            >
              Programming Languages
            </button>
            <button 
              className={`filter-btn ${categoryFilter === 'national' ? 'active' : ''}`}
              onClick={() => setCategoryFilter('national')}
            >
              National Standards
            </button>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="certs-grid-modern">
          {filteredCerts.map((cert, index) => (
            <CertCard 
              key={cert.id} 
              cert={cert} 
              index={index} 
              onImageClick={setSelectedCert} 
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Lightbox */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              className="cert-lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div 
                className="cert-lightbox-dialog"
                initial={{ scale: 0.88, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  className="cert-lightbox-close" 
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="cert-lightbox-image-box">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="cert-lightbox-img" 
                  />
                </div>

                <div className="cert-lightbox-caption">
                  <div>
                    <span className="mono cert-type-tag">{selectedCert.type}</span>
                    <h3 className="cert-lightbox-title">{selectedCert.title}</h3>
                    <p className="cert-lightbox-issuer text-muted">
                      Issued by <strong>{selectedCert.issuer}</strong> • {selectedCert.date}
                    </p>
                  </div>
                  
                  <a 
                    href={selectedCert.image} 
                    target="_blank" 
                    rel="noreferrer" 
                    download={`Certificate_${selectedCert.title.replace(/\s+/g, '_')}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Open High-Res</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Certifications;
