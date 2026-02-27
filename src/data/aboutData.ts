import { AboutData } from "@/types";

// About Data
export const aboutData: AboutData = {
  title: "Who I am",
  bio: "I'm a Systems Engineering student at Universidad del Valle, passionate about building digital products that are fast, accessible and well-crafted. I focus on the full cycle — from architecture decisions to UI details. I enjoy working close to the product, thinking about both the user experience and the code quality behind it. Outside of code, I'm interested in product design, software architecture patterns and building tools that actually solve real problems.",
  stats: [
    { value: "3+", label: "Years coding" },
    { value: "6+", label: "Projects built" },
    { value: "9+", label: "Techs" },
  ],
  chatbot: {
    suggestedQuestions: [
      { 
        q: "What is your favorite language?", 
        a: "I’d say Python. It feels natural and clean, almost like having a smooth conversation with the computer. That said, I also enjoy JavaScript; its unpredictability makes it interesting and creative." 
      },
      { 
        q: "What do you look for in a team?", 
        a: "I value genuine collaboration—people who share ideas openly and support one another. I’m also motivated by technical challenges that push me to grow, and a bit of humor along the way always helps." 
      },
      { 
        q: "Coffee or tea?", 
        a: "Coffee, without a doubt. It’s my constant companion during long coding sessions and productive late nights." 
      },
      { 
        q: "What is your professional goal?", 
        a: "My goal is to grow as a software development professional, lead high-impact projects, and build technological solutions that truly create value for people and organizations." 
      }
    ],
  }
};