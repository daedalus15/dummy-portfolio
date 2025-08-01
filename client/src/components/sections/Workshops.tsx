const workshops = [
  {
    icon: "💻",
    title: "AlgoMania Host",
    description: "Organized competitive programming contest for all CSE students",
    role: "Event Organizer"
  },
  {
    icon: "📄",
    title: "Inquisitio Mentor",
    description: "Guided students in research paper writing and academic methodology",
    role: "Research Mentor"
  },
  {
    icon: "🚀",
    title: "Kodikon 2.0 Organizer",
    description: "Led organization of nationwide hackathon with 500+ participants",
    role: "Hackathon Lead"
  },
  {
    icon: "🛡️",
    title: "Web Security Workshop",
    description: "Presented Burp Suite and web vulnerabilities at Geek Girl Program",
    role: "Aug 2024"
  }
];

export function Workshops() {
  return (
    <section id="workshops" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono">
            <span className="text-neon-teal">06.</span> 
            <span className="text-white dark:text-white section-underline">Workshops</span>
          </h2>
          <div className="font-mono text-neon-green text-sm mb-6">$ cat talks.txt</div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="glow-border rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{workshop.icon}</span>
                  <h3 className="text-xl font-bold text-white dark:text-white">{workshop.title}</h3>
                </div>
                <p className="text-gray-300 dark:text-gray-300 mb-2">{workshop.description}</p>
                <span className="text-neon-green font-mono text-sm">{workshop.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
