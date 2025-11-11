"use client"

import { CheckCircle2, Users, Target, Lightbulb, Award } from "lucide-react"
import { useState } from "react"

const values = [
  "Deep technical expertise across modern tech stacks",
  "Human-centric approach to technology solutions",
  "Agile and transparent project management",
  "Commitment to quality and best practices",
  "Continuous innovation and learning",
  "Long-term partnership mindset",
]

const highlights = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with diverse backgrounds",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering measurable results",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leveraging cutting-edge technologies",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Excellence in every project we deliver",
  },
]

export function About() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-gradient" />

      <div className="particle particle-2" />
      <div className="particle particle-4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate team of technologists transforming businesses through innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="animate-fade-in-up animation-delay-400">
                We are a collective of passionate technologists, designers, and strategists who believe in the power of
                technology to transform businesses and improve lives.
              </p>
              <p className="animate-fade-in-up animation-delay-600">
                With decades of combined experience across various industries, we bring deep technical knowledge, a
                human-centric mindset, and a passion for using technology and digital solutions to drive meaningful
                business transformation.
              </p>
              <p className="animate-fade-in-up animation-delay-800">
                Our team has successfully delivered projects for startups, mid-size companies, and enterprise
                organizations, always focusing on creating solutions that are not just technically excellent but also
                aligned with business goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg animate-scale-in group"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <highlight.icon className="h-8 w-8 text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up animation-delay-400">
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-fade-in-up animation-delay-600 group">
              <img
                src="/diverse-tech-team-collaborating-in-modern-office--.jpg"
                alt="Our diverse tech team collaborating"
                className={`w-full h-auto transition-all duration-700 group-hover:scale-105 ${imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold animate-fade-in-up animation-delay-800">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 group animate-fade-in-left"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
