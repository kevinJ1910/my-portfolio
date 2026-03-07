'use client';

import SectionTitle from "@/components/ui/SectionTitle";
import { useMotionValue } from "motion/react";
import { skills } from "@/data/skillsData";
import { Bubble } from "../ui/Bubble";

export default function Skills() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const allSkills = [...skills];
  
  return (
    <section 
      id="skills" 
      className="relative py-24 px-6" 
      aria-label="Skills section"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onMouseLeave={() => {
        mouseX.set(-1000);
        mouseY.set(-1000);
      }}
      
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <SectionTitle
          label="Skills"
          title="What I work with"
          subtitle="Technologies and tools I use to build products from idea to production."
        />

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-6xl mx-auto">
          {allSkills.slice(0, 17).map((skill, index) => (
            <Bubble key={skill.name} skill={skill} mouseX={mouseX} mouseY={mouseY} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
