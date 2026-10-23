import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import './components.css';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills & Edu', href: '#skills', id: 'skills' },
    { name: 'Credentials', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          {/* Logo / Monogram */}
          <a href="#home" className="navbar-brand">
            <span className="brand-badge">
              <span className="brand-code">&lt;TH /&gt;</span>
            </span>
            <span className="brand-name">
              <span>Tauhid</span>
              <span className="brand-dot"></span>
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <div className="navbar-pill-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="navbar-actions">
            <button 
              onClick={onOpenResume}
              className="nav-btn nav-btn-outline"
              title="View Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            <a href="#contact" className="nav-btn nav-btn-primary">
              <span>Let's Talk</span>
              <Send size={14} />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className="mobile-menu-panel"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-links">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mobile-cta-group">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="mobile-cta-btn secondary"
                >
                  <FileText size={16} /> View Resume
                </button>
                <a 
                  href="#contact" 
                  className="mobile-cta-btn primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Send size={16} /> Get In Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
