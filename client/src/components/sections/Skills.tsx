import { ProgressBar } from "@/components/ui/progress-bar";

const skillCategories = [
  {
    title: "~/languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C++", level: 75 }
    ]
  },
  {
    title: "~/frameworks",
    skills: [
      { name: "React/Next.js", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Flask/FastAPI", level: 85 }
    ]
  },
  {
    title: "~/cloud & tools",
    skills: [
      { name: "GCP/AWS", level: 75 },
      { name: "Docker/K8s", level: 70 },
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code/Vim", level: 85 }
    ]
  },
  {
    title: "~/databases",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "ScyllaDB", level: 60 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono">
            <span className="text-neon-teal">05.</span> 
            <span className="text-white dark:text-white section-underline">Skills</span>
          </h2>
          <div className="font-mono text-neon-green text-sm mb-6">$ skill --proficiency</div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glow-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-neon-teal mb-4 font-mono">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar
                      key={skillIndex}
                      label={skill.name}
                      value={skill.level}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
