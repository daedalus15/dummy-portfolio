const achievements = [
  {
    icon: "🎯",
    title: "IBM Z Datathon 2024",
    description: "Raffle Prize Winner among 466 teams in Sustainable Development Track"
  },
  {
    icon: "🏅",
    title: "People's Conference '23",
    description: "Honorable Mention as Russia Delegate in Continuous Crisis Committee"
  },
  {
    icon: "🧠",
    title: "EPOCH Datathon",
    description: "Top 7 out of 40 teams in AI/ML competition hosted by university club"
  },
  {
    icon: "🔓",
    title: "University CTF",
    description: "7th place out of 52 teams in Capture The Flag by Cyber Security Club"
  },
  {
    icon: "💻",
    title: "Great Bengaluru Hackathon",
    description: "Top 9 out of 27 teams in Multilingual Loan Advisory Track"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono">
            <span className="text-neon-teal">08.</span> 
            <span className="text-white dark:text-white section-underline">Achievements</span>
          </h2>
          <div className="font-mono text-neon-green text-sm mb-6">$ cat awards.log</div>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="glow-border rounded-lg p-6 flex items-center">
                <div className="text-3xl mr-4">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-neon-teal">{achievement.title}</h3>
                  <p className="text-gray-300 dark:text-gray-300">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
