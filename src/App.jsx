import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsEducation from './components/SkillsEducation';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import './App.css';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Dynamic ambient canvas & glow mesh */}
      <BackgroundEffects />

      {/* Main interactive application content */}
      <div className="main-content">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <Projects />
          <SkillsEducation />
          <Certifications />
        </main>
        <Footer />
      </div>

      {/* Interactive & Printable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}

export default App;
