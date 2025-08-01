import { useEffect } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Workshops } from "@/components/sections/Workshops";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Portfolio() {
  useEffect(() => {
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-terminal text-gray-300 dark:text-gray-300 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Workshops />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-neon-teal/30 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="font-mono text-neon-green text-sm mb-4">$ echo "Let's work together"</div>
          <p className="text-gray-300 dark:text-gray-300 mb-2">
            Designed & Built by <span className="text-neon-teal font-semibold">Suchir M Velpanur</span>
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">© 2025 - All rights reserved</p>
        </div>
      </footer>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
