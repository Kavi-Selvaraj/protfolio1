import React from "react";
import { Terminal, Shield, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "BCA Student & Aspiring Cybersecurity Professional",
    "Hands-on with Python, JS, React, Node.js & Linux",
    "Focused on secure, reliable, & user-centric software",
    "Driven by continuous learning & real-world problem solving"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-[#05080F] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Terminal size={14} />
            <span>sys_profile // about_me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400">Me</span>
          </h2>
        </div>

        {/* Narrative & Details */}
        <div className="flex flex-col items-start text-left max-w-4xl mx-auto">
          
          <p className="text-lg sm:text-xl font-medium text-teal-200 mb-4 font-mono">
            I’m Kavi — a BCA student, developer, and aspiring cybersecurity professional.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-6 font-sans">
            I enjoy turning ideas into practical digital experiences, from web applications and interactive interfaces to IoT and security-focused projects. My current focus is building strong foundations in Python, JavaScript, React, Node.js, databases, Linux, and cybersecurity while continuously exploring how technology works beneath the surface.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-8 font-sans">
            What drives me is simple: I like understanding how things work, finding where they can be improved, and building better solutions. I believe good software should not only look clean and work smoothly — it should also be designed with security, reliability, and real-world usability in mind.
          </p>

          {/* Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-teal-950/20 border border-teal-500/20 p-3 rounded-xl backdrop-blur-sm">
                <CheckCircle2 size={18} className="text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200 font-mono">{item}</span>
              </div>
            ))}
          </div>

          {/* Mantra Callout Box */}
          <div className="w-full bg-[#0B132B]/90 border border-teal-500/30 p-4 sm:p-5 rounded-2xl backdrop-blur-xl shadow-[0_0_25px_rgba(20,184,166,0.1)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Shield size={20} />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-teal-400/70 uppercase tracking-wider">Core Philosophy</span>
                <span className="text-sm sm:text-base font-mono font-bold text-white tracking-wide">Learn. Build. Break. Secure. Repeat.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}