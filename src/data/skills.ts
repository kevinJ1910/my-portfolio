import { Skill } from "@/types"
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiDjango,
  SiFirebase,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
} from "react-icons/si"
import { TbBrandFirebase } from "react-icons/tb"

// Skills Data
export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "other", icon: SiPython },
  { name: "JavaScript", category: "other", icon: SiJavascript },
  { name: "TypeScript", category: "other", icon: SiTypescript },

  // Frontend
  { name: "React", category: "frontend", icon: SiReact },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
  { name: "HTML5", category: "frontend", icon: SiHtml5 },
  { name: "CSS3", category: "frontend", icon: SiCss3 },

  // Backend
  { name: "Node.js", category: "backend", icon: SiNodedotjs },
  { name: "Django", category: "backend", icon: SiDjango },
  { name: "Firebase", category: "backend", icon: SiFirebase },

  // Database
  { name: "PostgreSQL", category: "backend", icon: SiPostgresql },
  { name: "Firestore", category: "backend", icon: TbBrandFirebase },
  { name: "Supabase", category: "backend", icon: SiSupabase },

  // Tools
  { name: "Git", category: "tools", icon: SiGit },
  { name: "Docker", category: "tools", icon: SiDocker },
  { name: "Vercel", category: "tools", icon: SiVercel },
  { name: "Figma", category: "tools", icon: SiFigma },
]