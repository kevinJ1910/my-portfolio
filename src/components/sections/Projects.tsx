'use client';

import { projects } from "@/data/projectsData";
import Link from "next/link";
import { motion } from 'motion/react';
import { ExternalLink, Calendar, Briefcase } from 'lucide-react';
import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
      aria-label="Projects section"
    >
      <SectionTitle
        label="Projects"
        title="What I create"
        subtitle="Take a look at the applications I’ve brought to life."
      />
      {/* Projects Section */}
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Showcase</h2>
            <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full"/>
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true}}
                transition={{ delay: index * 0.1}}
                className="group relative"
              >
                {/* Project Card */}
                <div className="glass rounded-3xl border-white/60 dark:border-white/10 hover:border-teal-300 transition-all hover:shadow-2xl overflow-hidden">
                  
                  {/* Image Preview (clickable) */}
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block relative w-full h-48 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Preview of ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 w-full">
                      {/* Company */}
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Briefcase size={16} className="text-teal-500"/>
                        <span className="text-sm font-medium">{project.company}</span>
                      </div>
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Calendar size={16} className="text-teal-500"/>
                        <span className="text-sm font-bold">{project.date}</span>
                      </div>
                    </div>

                    {/* Project Role */}
                    <p className="text-teal-600 dark:text-teal-400 font-bold text-sm mb-4 uppercase tracking-wider">{project.role}</p>

                    {/* Project Description */}
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"/>
                        <span className="text-sm md:text-base leading-relaxed">{project.description}</span>
                      </li>
                    </ul>

                    {/* Technologies & Link */}
                    <div className="mt-8 pt-6 border-t border-slate-300 dark:border-white/5 flex flex-col md:flex-row md:items-center gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-3 py-1 rounded-full bg-teal-500/10 dark:bg-teal-400/10 text-teal-700 dark:text-teal-300 font-medium border border-teal-500/20 dark:border-teal-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center md:justify-end gap-2 text-slate-400 hover:text-teal-600 transition-colors text-sm font-bold md:ml-auto max-md:mt-2"
                      >
                        Details of project
                        <ExternalLink size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-20 ">
        {/* GitHub CTA */}
        <div className="flex justify-center mt-15">
          <Link
            href="https://github.com/kevinJ1910"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono text-muted hover:text-primary transition-all duration-200 hover:scale-110"
            aria-label="View more projects on GitHub"
          >
            {/* GitHub Icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current "
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View more on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}