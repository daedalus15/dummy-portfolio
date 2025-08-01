const experiences = [
  {
    icon: ">>",
    title: "Project Intern - Hewlett Packard Enterprise",
    period: "Jan 2025 – June 2025",
    tasks: [
      "Developed AI-driven LLM agent framework for automated issue diagnosis using contextual log analysis & root cause analysis",
      "Built Python-based REST API simulator with real-time metrics tracking (latency, capacity, saturation)",
      "Implemented optional UI for storage system visualization"
    ]
  },
  {
    icon: ">>",
    title: "Research Intern - Centre For InfoSec & Forensics, PESU",
    period: "Jun 2024 – Aug 2024",
    tasks: [
      "Researched applications of AI/ML for cybersecurity : Digital Forensics, Malware Detection, DDoS Mitigation etc.",
      "Authored a research paper comparing LLMs vs LSTMs for system log analysis performance",
      "Developed ML models for threat detection and system security enhancement"
    ]
  },
  {
    icon: ">>",
    title: "Backend Engineering Intern - Dyashin Technosoft Pvt Ltd",
    period: "Jun 2024 – Jul 2024",
    tasks: [
      "Developed Banking Database Management System using Java Spring Boot framework",
      "Implemented comprehensive API testing using Postman for HTTP request validation",
      "Deployed the production application on AWS EC2 instances with optimized performance"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono section-underline">
            <span className="text-neon-teal">03.</span> 
            <span className="text-white dark:text-white">Experience</span>
          </h2>
          <div className="font-mono text-neon-green text-lg mb-6">$ cat experience.txt</div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="glow-border rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-bold text-neon-teal">{exp.title}</h3>
                      <span className="text-neon-green font-mono text-sm">{exp.period}</span>
                    </div>
                    <ul className="text-gray-300 dark:text-gray-300 space-y-2">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
