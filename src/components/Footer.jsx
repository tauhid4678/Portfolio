import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Copy, Check, Send, 
  ArrowUp, Sparkles, MessageSquare, Clock 
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './components.css';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
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

    setIsSubmitting(true);
    
    // Simulate interactive dispatch & create mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      const mailtoUrl = `mailto:tauhid4678@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Tauhid,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
      
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 700);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        {/* Section Head */}
        <div className="section-head-wrapper">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge-pill mono">
              <span className="badge-dot"></span> 04 • GET IN TOUCH
            </div>
            <h2 className="section-heading">
              Let's <span className="accent-gradient-text">Connect</span> & Build Something Great
            </h2>
            <p className="section-desc">
              Have an opportunity, project idea, or just want to chat about tech? Feel free to reach out directly.
            </p>
          </motion.div>
        </div>

        {/* Contact Split Grid */}
        <div className="contact-grid">
          {/* Left Side: Contact Information */}
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Email Copy Card */}
            <div className="contact-card email-copy-card">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div className="contact-card-text">
                <span className="mono contact-subhead">Direct Email</span>
                <span className="contact-email-addr">tauhid4678@gmail.com</span>
              </div>
              <button 
                onClick={handleCopyEmail}
                className={`copy-btn ${copied ? 'copied' : ''}`}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Availability */}
            <div className="contact-card-row">
              <div className="contact-card mini-card">
                <div className="mini-card-icon cyan"><MapPin size={18} /></div>
                <div>
                  <div className="mono mini-label">Location</div>
                  <div className="mini-val">Rajshahi, Bangladesh</div>
                  <div className="mini-sub mono">Available Worldwide (Remote)</div>
                </div>
              </div>

              <div className="contact-card mini-card">
                <div className="mini-card-icon emerald"><Clock size={18} /></div>
                <div>
                  <div className="mono mini-label">Response Time</div>
                  <div className="mini-val">Within 24 Hours</div>
                  <div className="mini-sub mono">Mon – Sun Active</div>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="contact-socials-grid">
              <a 
                href="https://linkedin.com/in/md-tauhid-hasan" 
                target="_blank" 
                rel="noreferrer"
                className="social-contact-btn linkedin"
              >
                <FaLinkedin size={20} />
                <div>
                  <span className="social-btn-title">LinkedIn</span>
                  <span className="social-btn-handle mono">/in/md-tauhid-hasan</span>
                </div>
              </a>

              <a 
                href="https://github.com/tauhid4678" 
                target="_blank" 
                rel="noreferrer"
                className="social-contact-btn github"
              >
                <FaGithub size={20} />
                <div>
                  <span className="social-btn-title">GitHub</span>
                  <span className="social-btn-handle mono">@tauhid4678</span>
                </div>
              </a>

              <a 
                href="mailto:tauhid4678@gmail.com" 
                className="social-contact-btn mail"
              >
                <FaEnvelope size={20} />
                <div>
                  <span className="social-btn-title">Mail Client</span>
                  <span className="social-btn-handle mono">Open Default App</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Interactive Message Form */}
          <motion.div 
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-glass-card">
              <div className="form-card-header">
                <MessageSquare size={20} className="cat-icon-indigo" />
                <h3 className="form-card-title">Send a Quick Message</h3>
              </div>

              {formSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon-wrap">
                    <Check size={32} />
                  </div>
                  <h4>Message Initiated!</h4>
                  <p>
                    Thank you! Your email client has been opened with your message. If it didn't open automatically, feel free to email directly at <strong>tauhid4678@gmail.com</strong>.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)} 
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label mono">YOUR NAME *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required 
                        placeholder="e.g. Alex Johnson"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label mono">YOUR EMAIL *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required 
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label mono">SUBJECT</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      placeholder="e.g. Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label mono">MESSAGE *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      required 
                      rows="4"
                      placeholder="Hello Tauhid, I'd like to discuss..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-brand-meta">
            <span className="brand-code mono">&lt;TH /&gt;</span>
            <span className="footer-copy mono">
              © {new Date().getFullYear()} Md. Tauhid Hasan. Built with React & Vite.
            </span>
          </div>

          <div className="footer-links-right">
            <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
