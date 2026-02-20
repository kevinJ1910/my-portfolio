export interface Project {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    repoUrl?: string
    liveUrl?: string
    featured: boolean
  }
  
  export interface Skill {
    name: string
    category: "frontend" | "backend" | "tools" | "other"
    icon?: string
  }
  
  export interface Experience {
    id: string
    title: string
    organization: string
    period: string
    description: string
    type: "education" | "project" | "work"
  }