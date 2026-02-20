// src/components/sections/About.tsx
import SectionTitle from "@/components/ui/SectionTitle"

const STATS = [
  { value: "3+", label: "Years coding" },
  { value: "5+", label: "Projects built" },
  { value: "6+", label: "Technologies" },
] as const

const HIGHLIGHTS = [
  "React & Next.js",
  "Firebase",
  "Node.js & Django",
  "Ionic & Angular",
  "Docker",
  "Scrum",
] as const

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6"
      aria-label="About section"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="About me"
          title="Who I am"
          subtitle="A little bit about my background, what drives me and what I work with."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Glow detrás del avatar */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 scale-110"
                style={{
                  background:
                    "radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Avatar glass container */}
              <div className="glass relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl flex items-center justify-center overflow-hidden">
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Placeholder avatar */}
                <div className="flex flex-col items-center gap-3 select-none">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    }}
                  >
                    KJ
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      Kevin Jordan
                    </span>
                    <span className="text-xs font-mono text-muted">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Bio */}
            <div className="glass rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-foreground leading-relaxed">
                I&apos;m a{" "}
                <span className="text-primary font-medium">
                  Systems Engineering student
                </span>{" "}
                at Universidad del Valle, passionate about building digital
                products that are fast, accessible and well-crafted.
              </p>
              <p className="text-muted leading-relaxed text-sm">
                I focus on the full cycle — from architecture decisions to UI
                details. I enjoy working close to the product, thinking about
                both the user experience and the code quality behind it.
              </p>
              <p className="text-muted leading-relaxed text-sm">
                Outside of code, I&apos;m interested in product design,
                software architecture patterns and building tools that actually
                solve real problems.
              </p>
            </div>

            {/* Tech highlights */}
            <div className="flex flex-wrap gap-2">
              {HIGHLIGHTS.map((tech) => (
                <span
                  key={tech}
                  className="glass px-3 py-1.5 rounded-lg text-xs font-mono text-primary border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-hover rounded-2xl p-6 flex flex-col items-center gap-1 text-center"
            >
              <span className="text-3xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}