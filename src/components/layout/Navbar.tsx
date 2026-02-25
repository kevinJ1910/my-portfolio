"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../ui/ThemeToggle";

// Navigation links
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

// Navigation bar
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    ); 

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      {/* Navigation container */}
      <nav className="container mx-auto px-6">
        {/* Navigation bar */}
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between border-white/40 transition-all ${scrolled ? 'shadow-lg' : 'shadow-none'}`}>
          {/* Logo / Name */}
          <a className="text-xl font-display font-bold text-slate-900 dark:text-white">
            KJA <span className="text-teal-500">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <ThemeToggle />
          </ul>

          {/* Mobile menu button */}
          <MobileMenu activeSection={activeSection} />
        </div>
      </nav>
    </header>
  )
}

// ─── Mobile Menu ─────────────────────────────────────────────────────────────

function MobileMenu({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClick = () => setOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {/* Hamburger / Close icon */}
        <div className="w-5 h-4 flex flex-col justify-between">
          <span
            className={cn(
              "block h-0.5 bg-current transition-all duration-300 origin-center",
              open ? "rotate-45 translate-y-[7px]" : ""
            )}
          />
          <span
            className={cn(
              "block h-0.5 bg-current transition-all duration-300",
              open ? "opacity-0 scale-x-0" : ""
            )}
          />
          <span
            className={cn(
              "block h-0.5 bg-current transition-all duration-300 origin-center",
              open ? "-rotate-45 -translate-y-[9px]" : ""
            )}
          />
        </div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 pt-2 md:hidden"
          >
            {/* Mobile menu links */}
            <ul className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-2xl border-white/40" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-slate-600 hover:text-teal-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}