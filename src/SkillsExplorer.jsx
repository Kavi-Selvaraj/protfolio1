import React, { useState } from 'react';
import { Terminal, Code2, Globe, Shield, Cpu, ArrowRight, CheckCircle2, Layers, CpuIcon } from 'lucide-react';

export default function SkillsExplorer({ onSelectProject }) {
  // Navigation states: 'categories' -> 'technologies' -> 'projects'
  const [activeTab, setActiveTab] = useState('coding');
  const [selectedTech, setSelectedTech] = useState(null);

  // Data mapping your blueprint
  const skillCategories = {
    coding: {
      title: "💻 CODING",
      description: "Core programming languages and logic building.",
      icon: <Code2 className="text-teal-400" size={24} />,
      technologies: [
        { 
          name: "Python", 
          projects: [
            { name: "Flask REST API", desc: "Beginner-friendly REST API with endpoints and JSON responses.", type: "Backend / API" },
            { name: "Python / Data Analysis", desc: "Data processing, problem-solving, and internship analytical tasks.", type: "Data Work" }
          ]
        },
        { 
          name: "JavaScript", 
          projects: [
            { name: "Smart Library Management System", desc: "MERN-stack application featuring QR-based functionality.", type: "Web App" }
          ]
        },
        { name: "C", projects: [{ name: "Systems & Logic Practice", desc: "Core computer science fundamentals and algorithmic problem solving.", type: "Core" }] },
        { name: "PHP", projects: [{ name: "Dynamic Web Scripting", desc: "Backend database handling and form processing scripts.", type: "Backend" }] },
        { name: "HTML & CSS", projects: [{ name: "Responsive Portfolio Layouts", desc: "Clean UI interfaces with Tailwind CSS and modern styling.", type: "Frontend" }] }
      ]
    },
    development: {
      title: "🌐 DEVELOPMENT",
      description: "Frontend, backend, APIs, and modern web applications.",
      icon: <Globe className="text-teal-400" size={24} />,
      technologies: [
        { 
          name: "React & Vite", 
          projects: [
            { name: "Smart Library Management System", desc: "Component-driven digital library frontend with JWT auth.", type: "Frontend" }
          ]
        },
        { 
          name: "Node.js & Express", 
          projects: [
            { name: "MERN Backend API", desc: "RESTful server architecture connected with MongoDB Atlas.", type: "Backend" }
          ]
        },
        { 
          name: "REST APIs", 
          projects: [
            { name: "Flask & Node APIs", desc: "Endpoint routing, data exchange, and local server integration.", type: "API" }
          ]
        }
      ]
    },
    cybersecurity: {
      title: "🔐 CYBERSECURITY",
      description: "Security fundamentals, networking, Linux, and analysis tools.",
      icon: <Shield className="text-teal-400" size={24} />,
      technologies: [
        { 
          name: "Linux & Terminal", 
          projects: [
            { name: "Linux Environment Setup", desc: "Command-line administration, file permissions, and process management.", type: "OS / Systems" }
          ]
        },
        { 
          name: "Computer Networks", 
          projects: [
            { name: "Network Packet Analysis", desc: "Cisco Packet Tracer simulation, Wireshark traffic inspection, and OSI layering.", type: "Networking" }
          ]
        },
        { 
          name: "Wireshark & Packet Tracer", 
          projects: [
            { name: "ARP & VLAN Labs", desc: "Hands-on analysis of ARP spoofing concepts, subnetting, and VLAN configurations.", type: "Security Lab" }
          ]
        }
      ]
    },
    practical: {
      title: "⚡ PRACTICAL SKILLS",
      description: "IoT hardware, simulation platforms, and data pipelines.",
      icon: <Cpu className="text-teal-400" size={24} />,
      technologies: [
        { 
          name: "ESP32 & Arduino", 
          projects: [
            { name: "Cybernerd IoT System", desc: "Security and monitoring system built with DHT22, PIR sensor, and MQ gas sensor.", type: "IoT Hardware" }
          ]
        },
        { 
          name: "Wokwi & ThingSpeak", 
          projects: [
            { name: "Sensor Data Visualization", desc: "Cloud logging and real-time telemetry display for microcontrollers.", type: "Cloud / IoT" }
          ]
        }
      ]
    }
  };

  const currentCategoryData = skillCategories[activeTab];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-[#05080F] text-slate-900 dark:text-white transition-colors duration-300 relative">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Terminal size={14} />
            <span>kavi@portfolio:~$ explore skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400">Skills Explorer</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-mono">
            Don't just read what I know. Click a category, inspect the technology, and discover the evidence behind it.
          </p>
        </div>

        {/* Main Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {Object.entries(skillCategories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setSelectedTech(null); // Reset tech drilldown on category switch
              }}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group ${
                activeTab === key
                  ? 'bg-teal-950/50 border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.2)]'
                  : 'bg-[#0B132B]/80 border-teal-500/20 hover:border-teal-500/40 hover:bg-teal-950/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                  activeTab === key ? 'bg-teal-500/20 border-teal-400 text-teal-300' : 'bg-teal-950/40 border-teal-500/20 text-teal-400'
                }`}>
                  {cat.icon}
                </div>
                <span className="text-xs font-mono text-gray-500 group-hover:text-teal-400 transition-colors">Select &rarr;</span>
              </div>
              <div>
                <h3 className="font-mono font-bold text-white text-sm sm:text-base mb-1">{cat.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{cat.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Drilldown Display Box */}
        <div className="bg-[#0B132B]/90 border border-teal-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(20,184,166,0.1)]">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-teal-500/20 gap-4">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block mb-1">Active Domain Filter</span>
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center gap-2">
                {currentCategoryData.title}
              </h3>
            </div>
            <span className="text-xs font-mono bg-teal-950/60 border border-teal-500/30 px-3 py-1.5 rounded-xl text-teal-300">
              {currentCategoryData.technologies.length} Technologies Available
            </span>
          </div>

          {/* Technology Buttons Grid */}
          <div className="mb-8">
            <p className="text-xs font-mono text-gray-400 mb-3">STEP 2: Select a technology to inspect connected projects &amp; work</p>
            <div className="flex flex-wrap gap-2.5">
              {currentCategoryData.technologies.map((tech, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm border transition-all duration-300 flex items-center gap-2 ${
                    selectedTech?.name === tech.name
                      ? 'bg-teal-500 text-slate-950 font-bold border-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.4)]'
                      : 'bg-teal-950/30 border-teal-500/30 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  {tech.name}
                  <span className="text-[10px] opacity-70 bg-black/30 px-1.5 py-0.5 rounded">
                    {tech.projects.length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Connected Evidence / Projects View */}
          <div className="bg-[#05080F]/80 border border-teal-500/20 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-teal-400 flex items-center gap-1.5">
                <Layers size={14} /> 
                {selectedTech ? `Evidence Connected to [${selectedTech.name}]` : "Select a technology above to view connected practical work"}
              </span>
            </div>

            {selectedTech ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTech.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="bg-[#0B132B]/70 border border-teal-500/30 p-4 rounded-xl flex flex-col justify-between hover:border-teal-400 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono bg-teal-950 border border-teal-500/30 px-2 py-0.5 rounded text-teal-300">
                          {proj.type}
                        </span>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                      </div>
                      <h4 className="font-bold text-white text-base mb-1">{proj.name}</h4>
                      <p className="text-xs text-gray-300 font-sans mb-4">{proj.desc}</p>
                    </div>
                    <a
                      href="#projects"
                      onClick={() => {
                        if (onSelectProject) onSelectProject(proj.name);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-400 hover:text-teal-300 transition-colors pt-2 border-t border-teal-500/10"
                    >
                      View Full Project Details <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 font-mono text-xs sm:text-sm">
                &gt; Waiting for user selection... Click any technology button above to reveal real evidence.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}