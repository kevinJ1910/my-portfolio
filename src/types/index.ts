import { IconType } from "react-icons";

// Types
export interface Project {
    id: string;
    title: string;
    company: string;
    date: string;
    description: string;
    image: string;
    technologies: string[];
    role: string;
    repoUrl: string;
    liveUrl: string;
    featured: boolean;
  }
  
  export interface Skill {
    name: string;
    category: "language" | "frontend" | "backend" | "tools" | "other";
    icon: IconType;
  }

  export interface AboutData {
    title: string;
    bio: string;
    stats: { value: string; label: string }[];
    chatbot: {
      suggestedQuestions: { q: string; a: string }[];
    };
  }

  export interface ContactData {
    email: { name: string; user: string; url: string };
    github: { name: string; user: string; url: string };
    linkedin: { name: string; user: string; url: string };
    instagram: { name: string; user: string; url: string };
  }