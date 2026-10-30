import React, { useState } from 'react';
import { ExternalLink, Award, X } from 'lucide-react';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "Cloud Computing with AWS",
      description: "Successfully completed the certification program requirements covering cloud architecture and AWS services.",
      issuer: "Edjumantra Ed-Tech Services",
      date: "May 20, 2025",
      center: "RR Institute of Management Studies, Bangalore",
      usn: "U03JF24S0080",
      tech: ["AWS", "Cloud Computing", "EC2", "S3"],
      credentialUrl: "https://drive.google.com/file/d/155DkoCgFxPMeUnkGL4hl8O_KJKKd6njR/preview",
      status: "Verified Credential"
    },
    {
      title: "Hackathon Achievement",
      description: "Successfully participated and built an innovative solution during the competitive coding hackathon.",
      issuer: "Tech Organization / College",
      date: "2025/2026",
      center: "Bangalore",
      usn: "U03JF24S0080",
      tech: ["Problem Solving", "Collaboration", "Rapid Prototyping"],
      credentialUrl: "https://drive.google.com/file/d/1vrYuyGB_PP0fWjsRJ6GD1Q0VYfQyIBbu/preview",
      status: "Competition"
    },
    {
      title: "Python Programming Certification",
      description: "Demonstrated proficiency in core Python programming principles, data structures, and script development.",
      issuer: "Training Provider",
      date: "2025/2026",
      center: "Bangalore",
      usn: "U03JF24S0080",
      tech: ["Python", "Scripting", "Data Structures"],
      credentialUrl: "https://drive.google.com/file/d/1qonGJk6OJJ-A6hadEE_xtqBLD8dUiGcn/preview",
      status: "Verified Credential"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-slate-50 dark:bg-[#05080F] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-teal-950/60 border border-teal-500/30 text-teal-700 dark:text-teal-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Award size={14} />
            <span>sys_credentials // certifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-cyan-600 dark:from-teal-300 dark:to-cyan-400">Certifications</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-slate-100 dark:bg-[#0B132B]/80 border border-teal-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 font-mono text-xs">
                    {cert.status}
                  </span>
                  <Award size={18} className="text-teal-600 dark:text-teal-400" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-teal-600 dark:text-teal-400 mb-3">
                  Issued by: {cert.issuer} ({cert.date})
                </p>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-4 font-sans">
                  {cert.description}
                </p>

                <div className="text-xs text-slate-500 dark:text-gray-400 space-y-1 mb-6 font-mono">
                  <p>Center: {cert.center}</p>
                  <p>USN: {cert.usn}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-200 dark:bg-teal-950/60 text-[11px] font-mono text-slate-800 dark:text-teal-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-teal-500/20">
                  <button 
                    onClick={() => setSelectedImage(cert.credentialUrl)}
                    className="w-full py-2.5 rounded-xl bg-teal-600 dark:bg-teal-500 text-white dark:text-slate-950 font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-teal-500 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={14} /> View Certificate
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative max-w-4xl w-full h-[85vh] bg-slate-900 border border-teal-500/40 rounded-3xl p-4 shadow-2xl flex flex-col">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-teal-400 hover:bg-teal-500 hover:text-slate-950 transition-colors z-10"
            >
              <X size={20} />
            </button>
            <div className="mt-8 flex-1 w-full h-full">
              <iframe 
                src={selectedImage} 
                title="Certificate Preview" 
                className="w-full h-full rounded-xl border border-teal-500/20"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}