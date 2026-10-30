import React, { useState } from 'react';
import { Terminal, Send, Mail, MapPin, Phone, CheckCircle2, Shield } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', website: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', website: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-[#05080F] text-slate-900 dark:text-white transition-colors duration-300 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-400 text-xs font-mono mb-4 backdrop-blur-md">
            <Shield size={14} />
            <span>sys_comm // secure_transmission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-lg mx-auto font-mono">
            Open to entry-level roles, internships, and collaborative projects. Always ready to build, learn, and secure innovative solutions with a dedicated team.</p>
        </div>

        {/* Two Glass Cards Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Contact Info Section */}
          <div className="bg-[#0B132B]/70 border border-teal-500/20 rounded-[2.5rem] p-8 sm:p-10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden flex flex-col justify-between group hover:border-teal-400/40 transition-all duration-300">
            
            {/* Glossy top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"></div>

            <div>
              <h3 className="text-3xl font-bold font-sans text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 text-sm font-sans leading-relaxed mb-10">
                We're here to discuss your project and bring your ideas to life with premium design &amp; development.
              </p>

              <div className="space-y-6 font-sans text-sm text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="font-mono text-xs sm:text-sm">mk.kavitha2006@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="font-mono text-xs sm:text-sm">Peenya 2nd stage , Bangalore</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="font-mono text-xs sm:text-sm">+91 8618287756</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-teal-500/10 text-xs font-mono text-teal-400/60">
              SECURE_CHANNEL // ONLINE
            </div>

          </div>

          {/* Right Card: Contact Form */}
          <div className="bg-[#0B132B]/70 border border-teal-500/20 rounded-[2.5rem] p-8 sm:p-10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden flex flex-col justify-between group hover:border-teal-400/40 transition-all duration-300">
            
            {/* Glossy top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"></div>

            <div>
              <h3 className="text-xl font-bold font-sans text-white mb-6">Contact Form</h3>

              {submitted ? (
                <div className="py-16 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 size={48} className="mx-auto text-emerald-400 animate-bounce" />
                  <h4 className="text-xl font-bold font-mono text-white">Transmission Successful</h4>
                  <p className="text-gray-400 text-xs font-mono">
                    Your message packet has been securely dispatched.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#05080F]/60 border border-teal-500/20 focus:border-teal-400/60 rounded-2xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#05080F]/60 border border-teal-500/20 focus:border-teal-400/60 rounded-2xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Website (Optional)"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      className="w-full bg-[#05080F]/60 border border-teal-500/20 focus:border-teal-400/60 rounded-2xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <textarea 
                      rows="3" 
                      required
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#05080F]/60 border border-teal-500/20 focus:border-teal-400/60 rounded-2xl p-5 text-white text-sm outline-none transition-all resize-none placeholder:text-gray-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold hover:from-teal-300 hover:to-cyan-400 transition-all font-sans text-sm shadow-[0_0_25px_rgba(20,184,166,0.3)] mt-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}