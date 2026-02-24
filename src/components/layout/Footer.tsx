import Link from "next/link"

// Social links
const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/kevinJ1910" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-jordan-alzate-192b86366/" },
    { label: "Email", href: "mailto:kevin.jordan@correounivalle.edu.co" },
    { label: "Instagram", href: "https://www.instagram.com/kevnjordn_lz/" },
  ] as const

// Footer
export default function Footer() {
  // Get current year
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50">
      {/* Footer container */}
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {currentYear}{" "}
          <span className="text-foreground font-medium">Kevin Jordan Alzate</span>. 
          Built with Next.js & Tailwind.
        </p>

        {/* Social links */}
        <ul className="flex items-center gap-4" role="list">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`Visit my ${link.label}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}