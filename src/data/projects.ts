import { Project } from "@/types"

// Projects Data
export const projects: Project[] = [
  {
    id: "terra-quest",
    title: "TerraQuest",
    company: "Personal Project",
    date: "2024",
    description:
      "Immersive web platform for environmental education with 3D interaction, authentication and a gamified progress system.",
    image: "/images/projects/3d-web.png",
    role: "Front-end Developer",
    repoUrl: "https://github.com/kevinJ1910/TerraQuest",
    liveUrl: "https://terra-quest.vercel.app/",
    featured: true,
  },
  {
    id: "sgs-movil",
    title: "SGS MÓVIL — Computer Equipment Management",
    company: "Global System Solutions S.A.S.",
    date: "2025",
    description:
      "Android app for field technicians to manage deliveries, returns and requests in real time via a corporate REST API. Includes auth, photos, digital signature and color-coded prioritization.",
    image: "/images/projects/sgs-movil.png",
    role: "Mobile Developer · Scrum Team Member",
    repoUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "anti-burnout-habits",
    title: "Anti-Burnout Micro-Habits App",
    company: "Personal Project",
    date: "2025",
    description:
      "MVP for university students focused on short habits, adaptive plans and light gamification to improve wellbeing and productivity. Validated with real users.",
    image: "/images/projects/habits-app.png",
    role: "Product & Software Designer / Developer",
    repoUrl: "https://github.com/kevinJ1910",
    liveUrl: "",
    featured: true,
  },
]