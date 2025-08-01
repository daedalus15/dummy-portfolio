export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 font-mono section-underline">
            <span className="text-neon-teal">02.</span> 
            <span className="text-white dark:text-white">Education</span>
          </h2>
          <div className="font-mono text-neon-green text-lg mb-6">$ cat education.txt</div>
          
          <div className="space-y-6">
            {/* University */}
            <div className="glow-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-neon-teal">PES University</h3>
                  <p className="text-lg text-gray-300 dark:text-gray-300">BTech - Computer Science and Engineering</p>
                </div>
                <div className="text-right">
                  <p className="text-neon-green font-mono">Nov 2022 – May 2026</p>
                  <p className="text-xl font-bold text-white dark:text-white">GPA: 9.1/10.0</p>
                </div>
              </div>
              <p className="text-gray-400 dark:text-gray-400 mb-3">
                <span className="text-neon-teal font-semibold">Relevant Courses : </span> 
                Data Structures and Algorithms, OOP with C++, Web Technologies, Statistics, Computer Networks, Operating Systems, Linear Algebra,
Database Management Systems, Machine Learning, Augmented & Virtual Reality, Graph Theory, Cloud Computing, Generative AI
              </p>
            </div>

            {/* School */}
            <div className="glow-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-neon-teal mb-3">Venkat International Public School</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300 dark:text-gray-300">CBSE 12th Board Exam</p>
                  <p className="text-neon-green font-mono">Jun 2020 - Jul 2022</p>
                  <p className="text-lg font-bold text-white dark:text-white">GPA: 9.58/10.0</p>
                </div>
                <div>
                  <p className="text-gray-300 dark:text-gray-300">CBSE 10th Board Exam</p>
                  <p className="text-neon-green font-mono">May 2019 - Mar 2020</p>
                  <p className="text-lg font-bold text-white dark:text-white">GPA: 9.74/10.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
