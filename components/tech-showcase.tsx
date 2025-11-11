"use client"

import { useState } from "react"

const technologies = [
  { name: "React", logo: "/react-logo.png" },
  { name: "Next.js", logo: "/nextjs-logo.png" },
  { name: "TypeScript", logo: "/typescript-logo.png" },
  { name: "Node.js", logo: "/nodejs-logo.png" },
  { name: "Python", logo: "/python-logo.png" },
  { name: "AWS", logo: "/aws-logo.png" },
  { name: "Docker", logo: "/docker-logo.png" },
  { name: "Kubernetes", logo: "/kubernetes-logo.png" },
  { name: "TensorFlow", logo: "/tensorflow-logo.png" },
  { name: "PostgreSQL", logo: "/postgresql-logo.png" },
  { name: "MongoDB", logo: "/mongodb-logo.png" },
  { name: "GraphQL", logo: "/graphql-logo.png" },
]

export function TechShowcase() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="py-16 sm:py-20 bg-muted/50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Technologies We Master</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We work with cutting-edge technologies to deliver robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className={`transition-transform duration-300 ${hoveredTech === tech.name ? "scale-110 rotate-6" : ""}`}
              >
                <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-16 h-16 object-contain" />
              </div>
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
