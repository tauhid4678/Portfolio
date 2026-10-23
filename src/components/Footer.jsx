import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ArrowUp, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './components.css';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('tauhid4678@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:tauhid4678@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Tauhid,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3500);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-editorial" id="contact">
      <div className="container">
        {/* Contact Section Header */}
        <div className="section-header-editorial">
          <div className="section-label-group">
            <span className="section-index-pill mono">INDEX / 04</span>
            <span className="section-divider-dot" />
            <span className="mono section-meta-note">INITIATE CONTACT</span>
          </div>

          <h2 className="section-editorial-heading">
            Let's Start a <span className="serif section-serif-italic">Conversation</span>
          </h2>
        </div>

        {/* Contact Split Grid */}
        <div className="contact-editorial-grid">
          {/* Left Column: Direct Inquiries & Channels */}
          <div className="contact-left-column">
            <p className="contact-editorial-intro">
              Whether you are looking to hire a dedicated frontend/software engineer, discuss a competitive programming problem, or collaborate on a project, I would love to hear from you.
            </p>

            {/* Email Direct Copy Block */}
            <div className="editorial-email-card">
              <div className="email-meta-text">
                <span className="mono email-card-label">DIRECT EMAIL INQUIRY</span>
                <span className="email-card-address">tauhid4678@gmail.com</span>
              </div>
              <button 
                onClick={handleCopy}
                className="email-copy-action mono"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Meta Specifications */}
            <div className="contact-specs-list">
              <div className="spec-item">
                <span className="spec-label mono">LOCATION</span>
                <span className="spec-value">Rajshahi, Bangladesh (Available Worldwide Remotely)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label mono">AVAILABILITY</span>
                <span className="spec-value">Full-time Roles, Internships & Selective Freelance</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="contact-channels-strip">
              <span className="channels-label mono">CHANNELS:</span>
              <div className="channels-row mono">
                <a 
                  href="https://linkedin.com/in/md-tauhid-hasan" 
                  target="_blank" 
                  rel="noreferrer"
                  className="channel-link"
                >
                  <FaLinkedin size={13} /> LinkedIn <ArrowUpRight size={11} />
                </a>
                <span className="channel-sep">/</span>
                <a 
                  href="https://github.com/tauhid4678" 
                  target="_blank" 
                  rel="noreferrer"
                  className="channel-link"
                >
                  <FaGithub size={13} /> GitHub <ArrowUpRight size={11} />
                </a>
                <span className="channel-sep">/</span>
                <a 
                  href="mailto:tauhid4678@gmail.com" 
                  className="channel-link"
                >
                  <FaEnvelope size={13} /> Mail App <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Restrained Contact Form */}
          <div className="contact-right-column">
            <div className="editorial-form-panel">
              <div className="form-panel-header">
                <span className="mono form-panel-title">TRANSMIT A MESSAGE</span>
              </div>

              {submitted ? (
                <div className="form-submitted-feedback">
                  <div className="feedback-check-badge">
                    <Check size={24} />
                  </div>
                  <h3>Message Dispatched</h3>
                  <p>
                    Your mail client has been opened with your pre-filled inquiry. You can also write directly to <strong>tauhid4678@gmail.com</strong>.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="editorial-btn secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="editorial-form">
                  <div className="form-double-row">
                    <div className="editorial-form-field">
                      <label htmlFor="name" className="field-label mono">NAME *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required 
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="field-input"
                      />
                    </div>

                    <div className="editorial-form-field">
                      <label htmlFor="email" className="field-label mono">EMAIL *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required 
                        placeholder="your@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="field-input"
                      />
                    </div>
                  </div>

                  <div className="editorial-form-field">
                    <label htmlFor="subject" className="field-label mono">SUBJECT</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      placeholder="Project opportunity or inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>

                  <div className="editorial-form-field">
                    <label htmlFor="message" className="field-label mono">MESSAGE *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      required 
                      rows="4"
                      placeholder="Share details regarding your timeline, scope, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      className="field-textarea"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="editorial-btn primary form-submit-btn"
                    disabled={sending}
                  >
                    <span>{sending ? 'Preparing...' : 'Send Message'}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Understated Bottom Bar */}
        <div className="footer-bottom-editorial">
          <div className="footer-colophon mono">
            <span>© {new Date().getFullYear()} Md. Tauhid Hasan</span>
            <span className="colophon-sep">—</span>
            <span>Crafted with React & Motion</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-editorial mono"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
