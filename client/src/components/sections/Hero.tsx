import { NeonButton } from "@/components/ui/neon-button";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="glow-border rounded-lg p-8 mb-8 max-w-4xl mx-auto glass-shards">
          <div className="font-mono text-neon-teal text-lg mb-4">$ whoami</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <span className="text-white dark:text-white"></span>
            <span className="text-white">Suchir M Velpanur</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 mb-6 typing-animation">
            Software Developer | AI/ML Researcher | Cloud & CyberSec Enthusiast
          </div>
          <div className="italic text-gray-400 dark:text-gray-400 text-md mb-8">
            “Dreaming in Vectors, Deploying in the Cloud and Defending in Bits”
          </div>
         <div className="text-lg text-neon-green mb-8 font-mono flex items-center justify-center">
            <span className="mr-2">📍</span>Based in Bangalore, India
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton onClick={() => smoothScrollTo('projects')}>
              View Projects
            </NeonButton>
            <NeonButton variant="secondary" onClick={() => smoothScrollTo('contact')}>
              Contact Me
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
