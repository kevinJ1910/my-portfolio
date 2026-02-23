'use client'

import { useEffect, useRef, useState } from "react"
//import Matter from 'matter.js'
import { motion, AnimatePresence} from 'motion/react'
import SectionTitle from "@/components/ui/SectionTitle"
import { skills } from "@/data/skills"


const CATEGORIES = ["Frontend", "Backend"]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6"
      aria-label="Skills section"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="Skills"
          title="What I work with"
          subtitle="Technologies and tools I use to build products from idea to production."
        />

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden py-10">
          <div
            className="
              flex w-max gap-16
              whitespace-nowrap
              animate-marquee
              hover:[animation-play-state:paused]
            "
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon

              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="
                    group
                    shrink-0
                    w-27.5
                    h-27.5
                    flex items-center justify-center
                    rounded-2xl
                    backdrop-blur-lg
                    bg-white/5 dark:bg-white/10
                    border border-white/10
                    transition-all duration-300 ease-out
                    hover:-translate-y-2
                    hover:scale-105
                    hover:border-white/30
                  "
                >
                  <Icon
                    size={44}
                    className="
                      transition-all duration-300
                      text-slate-600 dark:text-slate-300
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:drop-shadow-[0_0_14px_rgba(20,184,166,0.7)]
                    "
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
