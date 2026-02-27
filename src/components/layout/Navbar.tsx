"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

// Navigation links
const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

// Navigation bar
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkElement, setIsOverDarkElement] = useState(false);

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

  // Close when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = () => setIsMobileMenuOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      const navbarCenterY = navbarRect.top + navbarRect.height / 2;

      const darkElements = document.querySelectorAll(
        "[data-navbar-contrast='dark']"
      );

      let overlapping = false;

      darkElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (
          navbarCenterY >= rect.top &&
          navbarCenterY <= rect.bottom
        ) {
          overlapping = true;
        }
      });

      setIsOverDarkElement(overlapping);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarTextColor = isOverDarkElement ? "text-white" : "text-slate-900";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      {/* Navigation container */}
      <nav className="container mx-auto px-6">
        {/* Navigation bar */}
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between border-white/40 transition-all ${navbarTextColor} ${scrolled ? 'shadow-lg' : 'shadow-none'}`}>
          {/* Logo / Name */}
          <Link href="#hero" className={`${navbarTextColor === 'text-white' ? 'text-white lg:text-slate-900' : 'text-slate-900'} text-xl font-display font-bold dark:text-white`}>
            KJA <span className="text-teal-500">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    `
                    ${navbarTextColor === 'text-white' && (link.href === '#hero' || link.href === '#about') ? '2xl:text-white' : 'text-slate-900'} 
                    ${navbarTextColor === 'text-white' && (link.href === '#skills' || link.href === '#projects' || link.href === '#hero' || link.href === '#about') ? 'max-2xl:text-white' : 'text-slate-900'} 
                    ${navbarTextColor === 'text-white' && (link.href === '#contact') ? 'max-xl:text-white' : 'text-slate-900'}
                    text-sm font-semibold dark:text-slate-400 hover:text-teal-600 transition-colors`
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            className="p-2 rounded-md dark:text-white text-muted-foreground md:hidden hover:text-foreground hover:bg-surface transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {/* Hamburger / Close icon */}
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300 origin-center",
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                )}
              />
              <span
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                )}
              />
              <span
                className={cn(
                  "block h-0.5 bg-current transition-all duration-300 origin-center",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                )}
              />
            </div>
          </button>
        </div>
      </nav>
      <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 px-6 pt-2 md:hidden"
              >
                <div className={`glass rounded-2xl p-6 flex flex-col gap-4 shadow-2xl border-white/40 ${navbarTextColor}`}>
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`${navbarTextColor === 'text-white' ? 'text-slate-400' : 'text-slate-600'} text-lg font-semibold dark:text-slate-600 hover:text-teal-600 transition-colors`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>  
    </header>
  )
}