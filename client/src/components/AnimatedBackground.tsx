import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: i * 1000,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <>
      {/* Animated Grid Background */}
      <div className="fixed inset-0 animated-grid opacity-20 pointer-events-none z-0" />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle animate-float"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}ms`,
            }}
          />
        ))}
      </div>
    </>
  );
}
