import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dark/light class on the root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-50/90 dark:bg-[#05080F]/80 border-b border-teal-500/20 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <a href="#home" className="text-xl font-bold font-mono tracking-wider flex items-center gap-2">
          <span className="text-teal-500 dark:text-teal-400">KAVI</span>.dev
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-gray-300">
          <a href="#home" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Contact</a>
        </div>

        {/* Right Action: Glass Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          
          {/* Glassmorphism Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-16 h-8 rounded-full p-1 backdrop-blur-md bg-teal-100/60 dark:bg-teal-950/40 border border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.15)] flex items-center transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Toggle Theme"
          >
            <div
              className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                darkMode ? 'translate-x-8 bg-teal-400 text-slate-950' : 'translate-x-0 bg-amber-400 text-slate-950'
              }`}
            >
              {darkMode ? <Moon size={14} /> : <Sun size={14} />}
            </div>
          </button>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-slate-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-50/95 dark:bg-[#05080F]/95 backdrop-blur-xl border-b border-teal-500/20 py-6 px-6 flex flex-col gap-4 text-slate-700 dark:text-gray-300 font-medium transition-colors">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-teal-500 dark:hover:text-teal-400">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-teal-500 dark:hover:text-teal-400">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-teal-500 dark:hover:text-teal-400">Projects</a>
          <a href="#certifications" onClick={() => setIsOpen(false)} className="hover:text-teal-500 dark:hover:text-teal-400">Certifications</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-teal-500 dark:hover:text-teal-400">Contact</a>
        </div>
      )}
    </nav>
  );
}