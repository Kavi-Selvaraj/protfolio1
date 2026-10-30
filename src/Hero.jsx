import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Terminal } from 'lucide-react';
import kaviPhoto from './assets/kavi.png';

export default function Hero() {
  // Typewriter effect states for your roles
  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Python Developer",
    "C++ Developer",
    "Cybersecurity Analyst",
    "Cloud Computing"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-16 px-6 bg-slate-50 dark:bg-[#05080F] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Background Deep-Sea Glow Grid Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* RIGHT COLUMN ON DESKTOP, FIRST ON MOBILE: Blended Photo Section */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center w-full">
          
          <div className="relative w-full max-w-sm sm:max-w-md flex justify-center items-center">
            
            {/* Ambient Glow behind photo */}
            <div className="absolute w-72 h-72 bg-teal-500/20 blur-[90px] rounded-full pointer-events-none"></div>

            {/* Borderless Blended Photo Container */}
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden flex items-center justify-center rounded-3xl border border-teal-500/30 bg-[#0B132B]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(20,184,166,0.15)]">
              
              <img 
                src={kaviPhoto} 
                alt="Kavi" 
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
                }}
              />

              {/* Bottom fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>

            {/* Floating Stats Badge Overlay */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#05080F]/90 border border-teal-500/40 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-md shadow-xl text-right font-mono z-10">
              <span className="block text-teal-400 font-bold text-xs sm:text-sm">Fresher</span>
              <span className="text-[10px] text-gray-400">Available</span>
            </div>

          </div>

        </div>

        {/* LEFT COLUMN ON DESKTOP, SECOND ON MOBILE: Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start text-left">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-2">
            Hi, It's <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400">Kavi</span>
          </h1>

          {/* Typewriter Role Header */}
          <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-6 flex items-center gap-2 min-h-[48px] flex-wrap">
            <span className="text-gray-300">I'm a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400">{currentText}</span>
            <span className="w-1 h-7 sm:h-9 bg-teal-400 animate-pulse ml-[-2px]"></span>
          </div>

          {/* Bio / Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-sans">
            Passionate student and tech fresher eager to build scalable web apps, robust backend systems, and secure solutions. Combining modern engineering with clean, efficient code.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] w-full sm:w-auto"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>
            
            <a
              href="/resume.pdf"
              download="Kavi_Resume.pdf"
              className="px-6 py-3.5 rounded-xl bg-[#0B132B]/90 hover:bg-teal-950/50 border border-teal-500/40 text-teal-300 font-semibold text-sm flex items-center justify-center gap-2 backdrop-blur-xl transition-all duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] hover:border-teal-400"
            >
              <Download size={18} className="text-teal-400 animate-bounce" />
              Download CV
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-3.5 border-t border-teal-500/20 pt-6 w-full flex-wrap">
            
            {/* GitHub */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl backdrop-blur-xl bg-teal-950/30 border border-teal-500/30 text-teal-300 hover:text-white hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 flex items-center justify-center"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current text-teal-400" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/kavitha-s-bbb0b9333?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl backdrop-blur-xl bg-teal-950/30 border border-teal-500/30 text-teal-300 hover:text-white hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 flex items-center justify-center"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current text-teal-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/Kaviafu" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl backdrop-blur-xl bg-teal-950/30 border border-teal-500/30 text-teal-300 hover:text-white hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 flex items-center justify-center"
              title="X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current text-teal-400" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/qr/5LTDN5PQUGJYG1" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl backdrop-blur-xl bg-teal-950/30 border border-teal-500/30 text-teal-300 hover:text-white hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 flex items-center justify-center"
              title="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current text-teal-400" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}