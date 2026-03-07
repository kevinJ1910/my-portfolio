'use client';

import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { useState, useRef } from "react";
import { contacData } from "@/data/contactData";
import { m, AnimatePresence } from "motion/react";
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin, FaInstagram  } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const [isTyping, setIsTyping] = useState(false);
  const [isSend, setIsSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [planePos, setPlanePos] = useState({ x: 0, y: 0 });

  //Handle Form Submit
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    // Capturar la posición del botón para el despegue
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPlanePos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }

    setIsSent(true);

    //Create FormData
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    
    //Send Email
    const result = await sendEmail(data);
    
    //Handle Result
    if (result.success) {
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', message: '' });
        setIsTyping(false);
      }, 2000); // Sincronizado con la duración de la animación (2s)
    } else {
      alert("Error al enviar el mensaje");
      setIsSent(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      aria-label="Contact section"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle
          label="Contact"
          title="Let's work together"
          subtitle="I'm open to new opportunities, collaborations or just a good conversation. Reach out through any of these."
        />
        {/*Contact Form*/}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <m.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/*Information*/}
            <div className="glass-card break-all text-sm md:text-base p-8 rounded-4xl space-y-6">
              <h3 className="text-2xl font-bold mb-4">Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Link href={`mailto:${contacData.email.user}`} className="w-12 h-12 shrink-0 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <FaEnvelope size={20}/>
                  </Link>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
                    <p className="font-semibold">{contacData.email.user}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Link href={contacData.linkedin.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <FaLinkedin size={20} />
                  </Link>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">LinkedIn</p>
                    <p className="font-semibold">{contacData.linkedin.user}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href={contacData.github.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-500/10 text-slate-600 flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <FaGithub size={20} />
                    </Link>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">GitHub</p>
                      <p className="font-semibold">{contacData.github.user}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href={contacData.instagram.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <FaInstagram size={20} />
                    </Link>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Instagram</p>
                      <p className="font-semibold">{contacData.instagram.user}</p>
                    </div>
                  </div>
              </div>
            </div>
          </m.div>

          {/* Right Side: Envelope Form */}
          <div className="relative">
            <AnimatePresence>
              {isSend && (
                <m.div
                  initial={{ 
                    opacity: 0, 
                    scale: 0.2, // Empieza pequeño desde el botón
                    x: planePos.x, 
                    y: planePos.y 
                  }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0.2, 1, 1.2], 
                    x: planePos.x + 1000, // Vuela hacia la derecha
                    y: planePos.y - 1000  // Vuela hacia arriba
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeIn", // Empieza rápido desde el click
                    times: [0, 0.1, 0.8, 1] 
                  }}
                  className="fixed top-0 left-0 z-9999 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="text-teal-500">
                    <FaPaperPlane size={80} className="rotate-45 drop-shadow-2xl"/>
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            {/*Form*/}
            <div className="glass rounded-4xl p-8 border-white/40 dark:border-white/10 shadow-2xl relative z-10 pt-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase ml-1">Nombre</label>
                  <input 
                    type="text" 
                    required
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      setIsTyping(true);
                    }}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-white/80 dark:border-white/10 outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      setIsTyping(true);
                    }}
                    placeholder="your@email"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-white/80 dark:border-white/10 outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase ml-1">Message</label>
                  <textarea
                    required
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({...formData, message: e.target.value});
                      setIsTyping(true);
                    }}
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-white/80 dark:border-white/10 outline-none focus:ring-2 focus:ring-teal-500/50 transition-all resize-none"
                  />
                </div>

                {/*Send Button*/}
                <button 
                  ref={buttonRef}
                  className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-4 rounded-xl cursor-pointer font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50"
                  type="submit"
                  disabled={isSend}
                >
                  {isSend ? 'Sending...' : 'Send Message'}
                  <GrSend  size={18}/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom note */}
      <p className="text-center text-xs font-mono text-muted-foreground mt-10">
        I usually respond within{" "}
        <span className="text-primary">24 hours</span> ✦
      </p>
    </section>
  )
}