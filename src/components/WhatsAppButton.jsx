import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X, Send, ArrowUpRight, CheckCheck } from 'lucide-react';
import profileImg from '../assets/profileimg.jpg';
import './components.css';

const WHATSAPP_USERNAME = 'tauhid4678';
const DEFAULT_PRESET = "Hi Tauhid! I came across your portfolio and would love to connect.";

const PRESET_MESSAGES = [
  { id: 'general', label: '👋 Say Hello', text: "Hi Tauhid! I came across your portfolio and would love to connect." },
  { id: 'project', label: '💼 Project', text: "Hi Tauhid! I have a project inquiry and would like to discuss working together." },
  { id: 'hire', label: '🚀 Opportunity', text: "Hi Tauhid! We have an engineering opportunity for you." },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_PRESET);
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const chatWindowRef = useRef(null);

  // Proactive greeting teaser after 4s (dismissable)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTeaser(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(e.target)) {
        const toggleBtn = document.getElementById('whatsapp-floating-trigger');
        if (toggleBtn && !toggleBtn.contains(e.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const getWhatsAppUrl = (textToSend) => {
    const cleanText = (textToSend || message || DEFAULT_PRESET).trim();
    return `https://wa.me/${WHATSAPP_USERNAME}?text=${encodeURIComponent(cleanText)}`;
  };

  const handleSendMessage = (customText) => {
    const url = getWhatsAppUrl(customText);
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowTeaser(false);
    setHasInteracted(true);
  };

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
    setShowTeaser(false);
    setHasInteracted(true);
  };

  const handleDismissTeaser = (e) => {
    e.stopPropagation();
    setShowTeaser(false);
    setHasInteracted(true);
  };

  return (
    <div className="whatsapp-floating-container" id="whatsapp-widget-root">
      {/* 1. Proactive Greeting Teaser Bubble (Slim & Compact) */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.div
            className="whatsapp-teaser-bubble"
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => {
              setIsOpen(true);
              setShowTeaser(false);
              setHasInteracted(true);
            }}
          >
            <button 
              className="whatsapp-teaser-close"
              onClick={handleDismissTeaser}
              aria-label="Dismiss notification"
            >
              <X size={11} />
            </button>
            <div className="whatsapp-teaser-header">
              <span className="teaser-status-dot" />
              <span className="teaser-author mono">Tauhid Hasan</span>
            </div>
            <p className="whatsapp-teaser-text">
              Have a question or project? Message me on WhatsApp! 👋
            </p>
            <div className="whatsapp-teaser-action mono">
              <span>Chat now</span>
              <ArrowUpRight size={11} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Compact, Low-Profile Chat Card Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            className="whatsapp-chat-card"
            initial={{ opacity: 0, y: 15, scale: 0.94, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Slim Header */}
            <div className="whatsapp-card-header">
              <div className="whatsapp-header-user">
                <div className="whatsapp-avatar-wrap">
                  <img 
                    src={profileImg} 
                    alt="Md. Tauhid Hasan" 
                    className="whatsapp-avatar-img"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Tauhid+Hasan&background=14171f&color=25D366&size=80';
                    }}
                  />
                  <span className="whatsapp-active-badge" />
                </div>
                <div className="whatsapp-user-details">
                  <h4 className="whatsapp-user-name">Md. Tauhid Hasan</h4>
                  <div className="whatsapp-user-status mono">
                    <span>Online • Quick response</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="whatsapp-card-close-btn"
                aria-label="Close chat window"
                title="Close (Esc)"
              >
                <X size={14} />
              </button>
            </div>

            {/* Compact Chat Body */}
            <div className="whatsapp-card-body">
              {/* Short Welcome Message */}
              <div className="whatsapp-msg-bubble incoming">
                <p className="whatsapp-msg-content">
                  Hi! 👋 Send me a direct WhatsApp message for projects, collaborations, or roles.
                </p>
                <div className="whatsapp-msg-meta mono">
                  <span>Now</span>
                  <CheckCheck size={12} className="whatsapp-read-ticks" />
                </div>
              </div>

              {/* Quick Template Chips */}
              <div className="whatsapp-preset-chips">
                {PRESET_MESSAGES.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    className={`whatsapp-chip mono ${message === preset.text ? 'active' : ''}`}
                    onClick={() => setMessage(preset.text)}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Single-Row Input Composer */}
              <form 
                className="whatsapp-composer-form" 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(message);
                }}
              >
                <input
                  type="text"
                  className="whatsapp-composer-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type message..."
                  maxLength={250}
                />
                <button
                  type="submit"
                  className="whatsapp-send-icon-btn"
                  title="Send to WhatsApp (tauhid4678)"
                  aria-label="Send to WhatsApp"
                >
                  <Send size={13} />
                </button>
              </form>

              {/* Slim Direct Link Footnote */}
              <div className="whatsapp-direct-link-bar mono">
                <span>Direct WhatsApp:</span>
                <a 
                  href={`https://wa.me/${WHATSAPP_USERNAME}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-direct-link"
                >
                  wa.me/{WHATSAPP_USERNAME}
                  <ArrowUpRight size={10} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Primary Floating Trigger Button (Compact 50px) */}
      <motion.button
        id="whatsapp-floating-trigger"
        className={`whatsapp-floating-btn ${isOpen ? 'active-open' : ''}`}
        onClick={handleToggleOpen}
        aria-label={isOpen ? "Close WhatsApp window" : "Chat on WhatsApp with Tauhid (tauhid4678)"}
        title="Chat on WhatsApp"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="whatsapp-pulse-ring" />
        <span className="whatsapp-pulse-ring delay" />
        
        <div className="whatsapp-icon-inner">
          {isOpen ? (
            <X size={18} className="whatsapp-btn-icon close-icon" />
          ) : (
            <>
              <FaWhatsapp className="whatsapp-btn-icon main-icon" />
              <span className="whatsapp-notification-badge" />
            </>
          )}
        </div>

        {/* Hover Pill Tooltip */}
        {!isOpen && (
          <span className="whatsapp-floating-tooltip mono">
            <span className="tooltip-dot" />
            WhatsApp
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
