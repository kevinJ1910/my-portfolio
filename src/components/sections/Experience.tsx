import SectionTitle from "@/components/ui/SectionTitle"
import { experiences } from "@/data/experience"
import type { Experience } from "@/types"
import { cn } from "@/lib/utils"

const TYPE_CONFIG: Record<
  Experience["type"],
  { label: string; color: string; dot: string }
> = {
  education: {
    label: "Education",
    color: "rgba(6,182,212,0.15)",
    dot: "#06b6d4",
  },
  work: {
    label: "Work",
    color: "rgba(99,102,241,0.15)",
    dot: "#6366f1",
  },
  project: {
    label: "Project",
    color: "rgba(139,92,246,0.15)",
    dot: "#8b5cf6",
  },
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6"
      aria-label="Experience section"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <SectionTitle
          label="Experience"
          title="My journey"
          subtitle="Education, work and projects that have shaped my skills."
        />

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] top-3 bottom-3 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #6366f1 15%, #8b5cf6 50%, #06b6d4 85%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Timeline Item ────────────────────────────────────────────────────────────

interface TimelineItemProps {
  experience: Experience
  isLast: boolean
}

function TimelineItem({ experience, isLast }: TimelineItemProps) {
  const config = TYPE_CONFIG[experience.type]

  return (
    <div
      className={cn(
        "relative flex gap-6 group",
        !isLast && "pb-8"
      )}
    >
      {/* Dot */}
      <div className="relative z-10 flex-shrink-0 mt-1">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background: config.color,
            border: `1px solid ${config.dot}40`,
            boxShadow: `0 0 12px ${config.dot}30`,
          }}
          aria-hidden="true"
        >
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse-glow"
            style={{ background: config.dot }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="glass glass-hover rounded-2xl p-5 flex flex-col gap-3 flex-1 min-w-0">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-sm font-semibold text-foreground leading-snug">
              {experience.title}
            </h3>
            <p className="text-xs font-mono text-primary">
              {experience.organization}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Type badge */}
            <span
              className="px-2 py-0.5 rounded-full text-xs font-mono"
              style={{
                background: config.color,
                border: `1px solid ${config.dot}30`,
                color: config.dot,
              }}
            >
              {config.label}
            </span>

            {/* Period */}
            <span className="text-xs font-mono text-muted-foreground">
              {experience.period}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, ${config.dot}30 0%, transparent 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  )
}