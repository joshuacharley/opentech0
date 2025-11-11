"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 16, suffix: "+", label: "Projects Completed" },
  { value: 13, suffix: "+", label: "Happy Clients" },
  { value: 6, suffix: "+", label: "Team Members" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
]

export function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                setCounts((prev) => {
                  const newCounts = [...prev]
                  newCounts[index] = stat.value
                  return newCounts
                })
                clearInterval(timer)
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.floor(current)
                  return newCounts
                })
              }
            }, 30)
          })
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="stats-section" className="py-16 sm:py-20 bg-accent/5 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse-slow" />

      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent transition-transform group-hover:scale-110">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
