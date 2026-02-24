'use client'

import Link from "next/link"
import SectionTitle from "@/components/ui/SectionTitle"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { contacData } from "@/data/contactData"
import { motion, AnimatePresence } from "motion/react"
import { FaPaperPlane, FaEnvelope, FaPhone, FaGithub, FaMapPin } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { Mail } from "lucide-react"

export default function Contact() {
  const [isTyping, setIsTyping] = useState(false)
  const [isSend, setIsSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
      setFormData({ name: '', email: '', message: ''})
      setIsTyping(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6"
      aria-label="Contact section"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <SectionTitle
          label="Contact"
          title="Let's work together"
          subtitle="I'm open to new opportunities, collaborations or just a good conversation. Reach out through any of these."
        />

        <div>
          <motion.div>
            <div>
              <h3></h3>
              <div>
                <div>
                  <div>
                    <Mail/>
                  </div>
                  <div>
                    <p>Email</p>
                    <p>{}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        

        {/* Bottom note */}
        <p className="text-center text-xs font-mono text-muted-foreground">
          I usually respond within{" "}
          <span className="text-primary">24 hours</span> ✦
        </p>
      </div>
    </section>
  )
}

// ─── Contact Card ─────────────────────────────────────────────────────────────

interface ContactCardProps {
  link: {
    label: string
    value: string
    href: string
    description: string
    icon: React.ReactNode
    color: string
  }
}

function ContactCard({ link }: ContactCardProps) {
  const isExternal = !link.href.startsWith("mailto")

  return (
    <Link
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group"
      aria-label={`Contact via ${link.label}`}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${link.color}18`,
          border: `1px solid ${link.color}30`,
          color: link.color,
        }}
      >
        {link.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <span className="text-xs font-mono text-muted-foreground">
          {link.label}
        </span>
        <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors duration-200">
          {link.value}
        </span>
        <span className="text-xs text-muted">
          {link.description}
        </span>
      </div>

      {/* Arrow */}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-current text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0"
        aria-hidden="true"
      >
        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
      </svg>
    </Link>
  )
}