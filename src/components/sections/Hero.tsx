'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal as TerminalIcon, Download } from "lucide-react";

// Social links
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/kevinJ1910",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-jordan-alzate-192b86366/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:kevin.jordan@correounivalle.edu.co",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.909 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kevnjordn_lz/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  }
] as const;

// Command list
const COMMANDS = {
  help: 'Available commands: help, about, contact, clear, skills, cv',
  about: 'Kevin Jordan Alzate - Systems Engineering student passionate about web development.',
  contact: 'Email: kevin.jordan@correounivalle.edu.co | GitHub: kevinJ1910',
  skills: 'Python, JavaScript, React, Next.js, Docker, SQL...',
  cv: 'Starting CV download...',
  clear: ''
};

export const TerminalHero = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to Kevin’s terminal. Type "help" to get started.']);
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
      i++;
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
      setHistory([...history, `> ${input}`, COMMANDS.cv]);
      const link = document.createElement('a');
      link.href = '/CV.pdf';
      link.download = 'CV.pdf';
      link.click();
    } else if (COMMANDS[cmd as keyof typeof COMMANDS]) {
      setHistory([...history, `> ${input}`, COMMANDS[cmd as keyof typeof COMMANDS]]);
    } else if (cmd !== '') {
      setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type "help" to see options.`]);
    }
    setInput('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-2 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-bold border border-teal-500/20"
            >
              Available for projects
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Hi, I'm <span className="text-teal-500">Kevin</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg">
              Full Stack Developer specialized in modern frontend. I build <span className="text-slate-900 dark:text-white font-bold">scalable</span>, <span className="text-slate-900 dark:text-white font-bold">optimized</span>, <span className="text-slate-900 dark:text-white font-bold">production-ready web applications</span>, prioritizing architecture, performance, and user experience.
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
            <a 
              href="/CV.pdf"
              download="CV.pdf"
              className="px-8 py-4 glass rounded-2xl font-bold flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all"
            >
              Download CV
              <Download size={20} />
            </a>
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-linear-to-tr from-teal-500/20 to-blue-500/20 rounded-2xl blur-2xl -z-10" />
          <div className="glass rounded-2xl overflow-hidden border-white/30 dark:border-white/10 shadow-2xl">
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
                {history.map((line, i) => (
                  <div key={i} className={line.startsWith('>') ? 'text-white' : 'text-slate-400'}>
                    {line}
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
                  autoFocus
                />
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
