import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsEducation from './components/SkillsEducation';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Dynamic ambient canvas & glow mesh */}
      <BackgroundEffects />

      {/* Main interactive application content */}
      <div className="main-content">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <SkillsEducation />
          <Certifications />
        </main>
        <Footer />
      </div>

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
