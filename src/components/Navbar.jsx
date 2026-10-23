import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './components.css';
import profileImg from '../assets/profileimg.jpg';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 180;

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
    { name: 'Works', href: '#projects', id: 'projects' },
    { name: 'About & Skills', href: '#skills', id: 'skills' },
    { name: 'Credentials', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Editorial Brand Identity with Photo Icon */}
          <a href="#home" className="header-logo">
            <div className="header-avatar-frame">
              <img src={profileImg} alt="Md. Tauhid Hasan" className="header-avatar-img" />
            </div>
            <div className="header-brand-info">
              <span className="logo-text">Tauhid Hasan</span>
              <span className="logo-sub mono">Rajshahi, BD</span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`header-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="editorialNavIndicator"
                    className="nav-active-line"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Contact */}
          <div className="header-actions">
            <button 
              onClick={onOpenResume} 
              className="header-text-btn mono"
              title="View Curriculum Vitae"
            >
              Resume
            </button>

            <a href="#contact" className="header-cta-pill mono">
              <span>Get in touch</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Toggle */}
            <button 
              className="header-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className="mobile-drawer-card"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-links">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`mobile-drawer-item ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} className="mobile-item-arrow" />
                  </a>
                ))}
              </div>

              <div className="mobile-drawer-footer">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="mobile-btn-outline mono"
                >
                  View Resume
                </button>
                <a 
                  href="#contact"
                  className="mobile-btn-filled mono"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in touch
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
