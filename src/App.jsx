import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import SkillsExplorer from './SkillsExplorer';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';

export default function App() {
  const [selectedProjectFromSkill, setSelectedProjectFromSkill] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  // Sync theme state with the <html> root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSelectProject = (projectName) => {
    setSelectedProjectFromSkill(projectName);
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#05080F] text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <SkillsExplorer onSelectProject={handleSelectProject} />
      <Projects 
        selectedProjectFromSkill={selectedProjectFromSkill}
        onClearSelectedProject={() => setSelectedProjectFromSkill(null)}
      />
      <Certificates />
      <Contact />
    </div>
  );
}