import SectionTitle from "@/components/ui/SectionTitle"
import { skills } from "@/data/skills"
import { Skill } from "@/types"

const CATEGORIES: { key: Skill["category"]; label: string; icon: string }[] = [
  { key: "frontend", label: "Frontend", icon: "◈" },
  { key: "backend", label: "Backend & Database", icon: "◎" },
  { key: "tools", label: "Tools & Workflow", icon: "◆" },
  { key: "other", label: "Languages", icon: "◉" },
]

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CATEGORIES.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.key
            )

            if (categorySkills.length === 0) return null

            return (
              <SkillCard
                key={category.key}
                label={category.label}
                icon={category.icon}
                skills={categorySkills}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Skill Card ───────────────────────────────────────────────────────────────

interface SkillCardProps {
  label: string
  icon: string
  skills: Skill[]
}

function SkillCard({ label, icon, skills }: SkillCardProps) {
  return (
    <div className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-primary text-lg" aria-hidden="true">
          {icon}
        </span>
        <h3 className="text-sm font-mono font-semibold text-foreground tracking-wide">
          {label}
        </h3>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(99,102,241,0.4) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

// ─── Skill Badge ──────────────────────────────────────────────────────────────

function SkillBadge({ name }: { name: string }) {
  return (
    <span
      className="
        group relative px-3 py-1.5 rounded-lg text-xs font-mono
        text-muted transition-all duration-300 cursor-default
        border border-white/5 overflow-hidden
      "
      style={{
        background: "rgba(255,255,255,0.04)",
      }}
    >
      {/* Shimmer on hover */}
      <span
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-300 pointer-events-none
        "
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(99,102,241,0.15) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Glow border on hover */}
      <span
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          rounded-lg transition-opacity duration-300 pointer-events-none
        "
        style={{
          boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.4)",
        }}
        aria-hidden="true"
      />

      <span className="relative group-hover:text-primary transition-colors duration-300">
        {name}
      </span>
    </span>
  )
}