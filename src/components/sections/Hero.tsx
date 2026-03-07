'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { m } from "motion/react";
import { Terminal as TerminalIcon, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TERMINAL_COMMANDS } from "@/data/heroData";
import { contacData } from "@/data/contactData";

// Social links
const SOCIAL_LINKS = [
  { label: contacData.github.name, href: contacData.github.url, icon: <FaGithub size={22} /> },
  { label: contacData.linkedin.name, href: contacData.linkedin.url, icon: <FaLinkedin size={22} /> },
  { label: contacData.email.name, href: contacData.email.url, icon: <SiGmail size={22} /> },
  { label: contacData.instagram.name, href: contacData.instagram.url, icon: <FaInstagram size={22} /> },
];

// Terminal hero component
export const TerminalHero = () => {
  const [input, setInput] = useState('');
  const nextIdRef = useRef(0);
  const [history, setHistory] = useState<Array<{id: number; text: string}>>([{ id: 0, text: 'Welcome to Kevin\u2019s terminal. Type "help" to get started.' }]);
  const [displayText, setDisplayText] = useState('');
  const fullText = `const developer = {
  name: "Kevin Jordan Alzate",
  role: "Systems Engineering student",
  location: "Santiago de Cali, CO",
  status: "Looking for new challenges",
  motto: "Transforming ideas into digital experiences"
};`

// Typing effect for the terminal text
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i += 1;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [fullText]);

  // Command handling
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd === 'cv') {
      setHistory(prev => [...prev, { id: ++nextIdRef.current, text: `> ${input}` }, { id: ++nextIdRef.current, text: TERMINAL_COMMANDS.cv }]);
      const link = document.createElement('a');
      link.href = '/CV.pdf';
      link.download = 'CV.pdf';
      link.click();
    } else if (TERMINAL_COMMANDS[cmd]) {
      setHistory(prev => [...prev, { id: ++nextIdRef.current, text: `> ${input}` }, { id: ++nextIdRef.current, text: TERMINAL_COMMANDS[cmd] }]);
    } else if (cmd !== '') {
      setHistory(prev => [...prev, { id: ++nextIdRef.current, text: `> ${input}` }, { id: ++nextIdRef.current, text: `Command not found: ${cmd}. Type "help" to see options.` }]);
    }
    setInput('');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        <m.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="space-y-4">
            <m.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block mb-0 mt-1 px-4 py-2 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-bold border border-teal-500/20 "
            >
              Available for projects
            </m.span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Hi, I'm <span className="text-teal-500">Kevin</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg">
              Frontend Developer focused on building  <span className="text-slate-900 dark:text-white font-bold">scalable</span>, <span className="text-slate-900 dark:text-white font-bold">optimized</span>, <span className="text-slate-900 dark:text-white font-bold">production-ready web applications</span>, with a strong emphasis on architecture, performance, accessibility and user experience.
            </p>
          </div>

          {/*Social Links*/}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 mb-8 w-full">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-primary hover:scale-175 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
            >
              View Projects
            </Link>
            <Link
              href="/CV.pdf"
              download="CV.pdf"
              className="px-8 py-4 glass rounded-2xl font-bold flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all"
            >
              Download CV
              <Download size={20} />
            </Link>
          </div>
        </m.div>

        {/* Terminal */}
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-linear-to-tr from-teal-500/20 to-blue-500/20 rounded-2xl blur-2xl -z-10" />
          <div
            className="glass rounded-2xl overflow-hidden border-white/30 dark:border-white/10 shadow-2xl"
            data-navbar-contrast="dark"
          >
            {/* Terminal Header */}
            <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-mono text-slate-400 flex items-center justify-center gap-1">
                  <TerminalIcon size={12} />
                  kevin-jordan — bash
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm h-[400px] overflow-y-auto bg-slate-950/90 text-teal-500/90 no-scrollbar">
              <div className="mb-4 whitespace-pre-wrap text-blue-400">
                {displayText}
                <span className="terminal-cursor" />
              </div>

              <div className="space-y-1">
                {history.map((line) => (
                  <div key={line.id} className={line.text.startsWith('>') ? 'text-white' : 'text-slate-400'}>
                    {line.text}
                  </div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white"
                />
              </form>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}