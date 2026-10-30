import React from 'react';
import { ExternalLink, Code2, Shield, Database, Compass, Server, Cpu } from 'lucide-react';

// Inline GitHub icon component to avoid version/export issues with lucide-react
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Library Management System",
      description: "A robust system designed to manage book records, student borrowing histories, inventory tracking, and database operations.",
      tech: ["Python", "Database", "Management", "Backend"],
      icon: <Database className="text-teal-600 dark:text-teal-400" size={24} />,
      githubUrl: "https://github.com/Kavi-Selvaraj/library-management-project",
      status: "System Architecture",
      isUpcoming: false
    },
    {
      title: "TripBuddy AI Travel Planner",
      description: "An intelligent travel assistant application built to streamline itinerary curation, recommendations, and destination planning.",
      tech: ["AI", "Travel Planning", "UI/UX", "API"],
      icon: <Compass className="text-teal-600 dark:text-teal-400" size={24} />,
      githubUrl: "https://github.com/Kavi-Selvaraj/tripbuddy-ai-travel-planner",
      status: "AI Application",
      isUpcoming: false
    },
    {
      title: "SSH Brute Force Detection",
      description: "A cybersecurity and network packet analysis tool engineered to detect, log, and alert unauthorized brute-force login attempts over SSH.",
      tech: ["Cybersecurity", "Networking", "Python", "Security Logs"],
      icon: <Shield className="text-teal-600 dark:text-teal-400" size={24} />,
      githubUrl: "https://github.com/Kavi-Selvaraj/ssh-brute-force-detection",
      status: "Security Tool",
      isUpcoming: false
    },
    {
      title: "CourtWatch",
      description: "Backend web application infrastructure utilizing FastAPI, Uvicorn, and Pydantic for structured tracking and data processing.",
      tech: ["FastAPI", "Python", "Pydantic", "Backend"],
      icon: <Server className="text-teal-600 dark:text-teal-400" size={24} />,
      status: "In Development",
      isUpcoming: true
    },
    {
      title: "CyberNedrs",
      description: "Advanced network defense and security telemetry analysis tool focusing on protocol monitoring and threat hunting.",
      tech: ["Cybersecurity", "Networking", "Python", "EDR"],
      icon: <Shield className="text-teal-600 dark:text-teal-400" size={24} />,
      status: "Upcoming",
      isUpcoming: true
    },
    {
      title: "Sentinel AI",
      description: "Intelligent automated threat detection and security event monitoring system combining machine learning logic with security operations.",
      tech: ["AI", "Security", "Automation", "Threat Intel"],
      icon: <Cpu className="text-teal-600 dark:text-teal-400" size={24} />,
      status: "Research & Planning",
      isUpcoming: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-[#05080F] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-teal-950/60 border border-teal-500/30 text-teal-700 dark:text-teal-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Code2 size={14} />
            <span>sys_portfolio // active_ & _upcoming_projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured & Upcoming <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-cyan-600 dark:from-teal-300 dark:to-cyan-400">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-[#0B132B]/80 border border-slate-200 dark:border-teal-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 font-mono text-xs">
                    {project.status}
                  </span>
                  <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-200 dark:bg-teal-950/60 text-[11px] font-mono text-slate-800 dark:text-teal-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-teal-500/20">
                  {project.isUpcoming ? (
                    <div className="w-full py-2.5 rounded-xl bg-slate-200 dark:bg-teal-950/30 text-slate-500 dark:text-teal-400/60 font-mono text-xs font-bold text-center border border-slate-300 dark:border-teal-500/10">
                      In Development // Roadmap
                    </div>
                  ) : (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-teal-600 dark:bg-teal-500 text-white dark:text-slate-950 font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-teal-500 transition-colors cursor-pointer"
                    >
                      <GithubIcon size={16} /> View Repository <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}