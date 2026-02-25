import Link from "next/link";
import { contacData } from "@/data/contactData";
// Social links
const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/kevinJ1910" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-jordan-alzate-192b86366/" },
    { label: "Email", href: "mailto:kevin.jordan@correounivalle.edu.co" },
    { label: "Instagram", href: "https://www.instagram.com/kevnjordn_lz/" },
  ] as const;

// Footer
export default function Footer() {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-slate-950 transition-colors">
      {/* Footer container */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            {/* Copyright */}
            <p className="text-xl font-display font-bold text-slate-900 dark:text-white">
              KJA<span className="text-teal-500">.</span>
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              © {currentYear}{" "}
              <span className="text-foreground font-medium">Kevin Jordan Alzate</span>. 
              All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <ul className="flex gap-8" role="list">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                    rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-teal-600 transition-colors"
                  aria-label={`Visit my ${link.label}`}
                >
                  {link.label}
                </Link>
            </li>
          ))}
        </ul>
        </div>


      </div>
    </footer>
  )
}