import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col selection:bg-[var(--ink)] selection:text-[var(--paper)]">
        {/* Fixed Navigation & 2px Top Scroll Bar */}
        <Navigation />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          <Hero />
          <About />
          <Skills />
          <Work />
          <Certifications />
          <Experience />
          <Achievements />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}
