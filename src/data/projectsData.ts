import { Project } from "@/types";

// Projects Data
export const projects: Project[] = [
  {
    id: "terra-quest",
    title: "TerraQuest",
    company: "Personal Project",
    date: "2024",
    description:
      "Immersive web platform for environmental education with 3D interaction, authentication and a gamified progress system.",
    image: "/images/projects/terraquest.png",
    technologies: ["React", "JavaScript", "Three.js", "React Three Fiber", "Firebase", "OAuth", "CSS3"],
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
      "Android application developed for field technicians to manage computer equipment deliveries, returns, and service requests in real time through a corporate REST API. Includes secure authentication, photo capture, digital signatures, and a color-coded prioritization system for operational efficiency.",
    image: "/images/projects/sgs-movil.png",
    technologies: ["Angular", "Ionic", "TypeScript", "Java", "SCSS", "HTML5"],
    role: "Mobile Developer · Scrum Team Member",
    repoUrl: "",
    liveUrl: "",
    featured: true,
    confidential: true,
    caseStudy: {
      location: "Santiago de Cali, Colombia",
      overview: "SGS Mobile is an internal Android application developed to support field technicians in managing the lifecycle of company computer equipment. The app enables real-time handling of equipment deliveries, returns, and incident reports, synchronized with the company's web platform.\n\nDue to confidentiality agreements, the source code and live application cannot be publicly shared.",
      contributions: [
        "Developed the Android mobile application using Ionic and Angular, integrating it with the SGS Web platform through a REST API for real-time data synchronization.",
        "Implemented secure authentication with corporate credentials, allowing technicians to access and manage assigned service requests directly from the mobile app.",
        "Designed and implemented a color-coded prioritization system (red, yellow, green) to help technicians quickly identify critical requests and improve operational efficiency in the field.",
        "Built features for capturing photos and collecting client digital signatures, ensuring proper documentation of equipment deliveries and service operations.",
      ],
      impact: "The application improved the efficiency of field operations by enabling technicians to manage equipment-related tasks directly from their mobile devices, reducing manual processes and improving real-time visibility of service requests.",
    },
  },
  {
    id: "anti-burnout-habits",
    title: "Anti-Burnout Micro-Habits App",
    company: "Personal Project",
    date: "2025",
    description:
      "MVP for university students focused on short habits, adaptive plans and light gamification to improve wellbeing and productivity. Validated with real users.",
    image: "/images/projects/habits-app.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Product & Software Designer / Developer",
    repoUrl: "https://github.com/LeninCar/micro-habits-mvp-app?tab=readme-ov-file0",
    liveUrl: "https://micro-habits-mvp-app.vercel.app/",
    featured: true,
  },
];