import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "collaborative-3d-web",
    title: "Collaborative 3D Environmental Awareness Web",
    description:
      "Immersive web platform for environmental education with 3D interaction, authentication and a gamified progress system.",
    image: "/images/projects/3d-web.png",
    tags: ["React", "React Three Fiber", "Drei", "Firebase", "OAuth"],
    repoUrl: "https://github.com/kevinJ1910",
    liveUrl: "",
    featured: true,
  },
  {
    id: "sgs-movil",
    title: "SGS MÓVIL — Computer Equipment Management",
    description:
      "Android app for field technicians to manage deliveries, returns and requests in real time via a corporate REST API. Includes auth, photos, digital signature and color-coded prioritization.",
    image: "/images/projects/sgs-movil.png",
    tags: ["Ionic", "Angular", "REST API", "Android"],
    repoUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "anti-burnout-habits",
    title: "Anti-Burnout Micro-Habits App",
    description:
      "MVP for university students focused on short habits, adaptive plans and light gamification to improve wellbeing and productivity. Validated with real users.",
    image: "/images/projects/habits-app.png",
    tags: ["JavaScript", "Product Design", "Prototyping", "Software Architecture"],
    repoUrl: "https://github.com/kevinJ1910",
    liveUrl: "",
    featured: true,
  },
]