import {TerminalHero} from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { InteractiveBackground } from '@/components/ui/InteractiveBackground';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <InteractiveBackground />
      <TerminalHero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
