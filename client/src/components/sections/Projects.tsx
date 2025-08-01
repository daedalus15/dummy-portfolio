import { Github } from "lucide-react";

const projects = [
  {
    title: "OptimaSQL",
    description: "SQL query optimizer that evaluates and visualizes alternative execution plans using TPC-H benchmark data for performance comparison.",
    tech: ["Flask", "React", "PostgreSQL", "Node.js"],
    delay: 0
  },
  {
    title: "DiagnoSys Bot",
    description: "Intelligent LLM assistant for identifying and debugging issues in storage system architecture, enhancing reliability through automated analysis.",
    tech: ["LangChain", "Streamlit", "Flask", "ChromaDB"],
    delay: 200
  },
  {
    title: "VAD Music Framework",
    description: "Multimodal emotion detection system using VAD scores from audio and facial imagery for personalized music recommendations.",
    tech: ["PyTorch", "Transformers", "Audiocraft", "Librosa"],
    delay: 400
  },
  {
    title: "TrafficSync",
    description: "Real-time 3D traffic simulation with dynamic congestion control using Google Maps data for Bangalore intersections.",
    tech: ["Three.js", "Node.js", "Google Maps", "JavaScript"],
    delay: 600
  },
  {
    title: "EduStream",
    description: "Azure-hosted e-learning platform with seamless course uploads and topic discovery for enhanced learning experiences.",
    tech: ["Next.js", "Django", "Azure", "PostgreSQL"],
    delay: 800
  },
  {
    title: "PseudoKube",
    description: "Lightweight Kubernetes-like cluster orchestration with pod scheduling algorithms and dynamic failure recovery.",
    tech: ["Python", "FastAPI", "Docker", "Shell"],
    delay: 1000
  }
];

const techColors = {
  Flask: "bg-neon-teal/20 text-neon-teal",
  React: "bg-neon-green/20 text-neon-green",
  PostgreSQL: "bg-cyber-purple/20 text-cyber-purple",
  "Node.js": "bg-border-glow/20 text-border-glow",
  LangChain: "bg-neon-teal/20 text-neon-teal",
  Streamlit: "bg-neon-green/20 text-neon-green",
  ChromaDB: "bg-border-glow/20 text-border-glow",
  PyTorch: "bg-neon-teal/20 text-neon-teal",
  Transformers: "bg-neon-green/20 text-neon-green",
  Audiocraft: "bg-cyber-purple/20 text-cyber-purple",
  Librosa: "bg-border-glow/20 text-border-glow",
  "Three.js": "bg-neon-teal/20 text-neon-teal",
  "Google Maps": "bg-cyber-purple/20 text-cyber-purple",
  JavaScript: "bg-border-glow/20 text-border-glow",
  "Next.js": "bg-neon-teal/20 text-neon-teal",
  Django: "bg-neon-green/20 text-neon-green",
  Azure: "bg-cyber-purple/20 text-cyber-purple",
  Python: "bg-neon-teal/20 text-neon-teal",
  FastAPI: "bg-neon-green/20 text-neon-green",
  Docker: "bg-cyber-purple/20 text-cyber-purple",
  Shell: "bg-border-glow/20 text-border-glow"
};

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono">
            <span className="text-neon-teal">04.</span> 
            <span className="text-white dark:text-white section-underline">Projects</span>
          </h2>
          <div className="font-mono text-neon-green text-lg mb-6">$ ls projects/</div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glow-border rounded-lg p-6 hover:shadow-lg hover:shadow-neon-teal/20 transition-all duration-300 animate-float"
                style={{ animationDelay: `${project.delay}ms` }}
              >
                <h3 className="text-xl font-bold text-neon-teal mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-300 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-mono ${techColors[tech as keyof typeof techColors] || 'bg-gray-600/20 text-gray-400'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-neon-teal hover:text-neon-green transition-colors flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
