'use client';

import { m, AnimatePresence } from 'motion/react';
import { X, Shield, MapPin, Briefcase } from 'lucide-react';
import type { Project } from '@/types';

interface CaseStudyModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  if (!project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl no-scrollbar"
          >
            {/* Header gradient bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-teal-500 to-blue-500 rounded-t-3xl" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 p-2 text-slate-800 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10 pt-10">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-6 pr-10">
                {project.title}
              </h3>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-black dark:text-slate-400">
                  <Briefcase size={14} className="text-teal-500" />
                  <span className="font-medium">{project.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-black dark:text-slate-400">
                  <MapPin size={14} className="text-teal-500" />
                  <span className="font-medium">{caseStudy.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield size={14} className="text-amber-500" />
                  <span className="font-medium text-amber-600 dark:text-amber-400">Confidential Project</span>
                </div>
              </div>

              {/* Role */}
              <p className="text-teal-500 dark:text-teal-400 font-bold text-sm mb-6 uppercase tracking-wider">
                {project.role}
              </p>

              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Overview</h4>
                {caseStudy.overview.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 30)} className="text-black dark:text-slate-400 leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Contributions */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Key Contributions</h4>
                <ul className="space-y-3">
                  {caseStudy.contributions.map((contribution) => (
                    <li key={contribution.slice(0, 40)} className="flex items-start gap-3 text-black dark:text-slate-400">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span className="text-sm leading-relaxed">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Impact</h4>
                <p className="text-black dark:text-slate-400 leading-relaxed">{caseStudy.impact}</p>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-teal-700/10 dark:bg-teal-400/10 text-teal-500 dark:text-teal-300 font-medium border border-teal-500/20 dark:border-teal-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Confidentiality notice */}
              <div className="pt-6 border-t border-black/20 dark:border-white/5">
                <p className="text-xs text-slate-900 dark:text-slate-500 italic flex items-center gap-2">
                  <Shield size={12} className="text-amber-500/60" />
                  This project was developed for a private company. Source code and live application cannot be publicly shared due to confidentiality agreements.
                </p>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}