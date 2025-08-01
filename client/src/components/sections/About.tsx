export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono section-underline">
            <span className="text-neon-teal">01.</span>
            <span className="text-white dark:text-white">About Me</span>
          </h2>
          <div className="font-mono text-neon-green text-lg mb-6">$ cat about.txt</div>

          <div className="glow-border rounded-lg p-8 space-y-6">
            <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-300">
              Hey there! I’m a final year <span className="text-neon-teal font-semibold">Computer Science & Engineering</span> student at PES University with a GPA of <span className="text-neon-green font-bold">9.1/10.0</span>. My curiosity thrives at the intersection of <span className="text-neon-teal font-semibold">AI/ML</span>, <span className="text-neon-teal font-semibold">Cloud Infrastructure</span>, and <span className="text-neon-teal font-semibold">CyberSecurity</span>.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-300">
              I’m a hands-on builder; whether it’s training models, debugging backend systems, or deploying scalable apps to the cloud. I’ve explored a diverse range of domains, from <span className="text-neon-green font-semibold">Generative AI</span> to <span className="text-neon-green font-semibold">Log Analysis</span>, and love translating ideas into impactful code.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-300">
              Beyond code, I enjoy guiding others, organizing hackathons, and diving into the <span className="text-neon-teal font-semibold">technical know-hows</span> behind every system. Always learning, always building.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Philosophy */}
              <div>
                <h3 className="text-xl font-semibold text-neon-teal mb-3 font-mono">~/philosophy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">💡</span>
                    Think deep. Build clean. Learn relentlessly.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">🛠️</span>
                    Break things often, fix them even better.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">⚙️</span>
                    Debug with curiosity, not frustration — every bug is a disguised mentor.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">🧩</span>
                    Simplicity scales. Complexity fails.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">📦</span>
                    Build systems that survive real-world chaos.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">🌌</span>
                    Believe in meaningful systems, clean abstractions, and code that tells a story.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">📚</span>
                    If not coding, I’m probably reading thought-provoking nonfiction, diving into a sci-fi rabbit hole, or playing a game of badminton.
                  </li>
                </ul>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-semibold text-neon-teal mb-3 font-mono">~/interests</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">🧠</span>
                    Machine Learning & AI — fascinated by models that adapt & learn
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">☁️</span>
                    Cloud Computing & DevOps — automating infrastructure, deploying smarter.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">🗄️</span>
                    Scalable & Distributed Architectures — monoliths to microservices.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">📊</span>
                    Data Systems & Query Engines — everything that speaks SQL or NoSQL.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">⚡</span>
                    Backend Systems & APIs — building things that just work, & scale.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">🔐</span>
                    Applied Cybersecurity & Forensics — securing systems & digging into traces.
                  </li>
                  <li className="flex items-start text-gray-300 dark:text-gray-300">
                    <span className="text-neon-green mr-3">🎛️</span>
                    System Monitoring & Log Analysis — because observability wins.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
