"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Palette,
  Globe,
  Smartphone,
  Server,
  Users,
  Briefcase,
  Network,
  Headphones,
  MapPin,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Plug,
  TestTube,
  Wrench,
} from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences with modern design principles and user-centered methodologies.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Build scalable, high-performance web applications using cutting-edge technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Develop native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
  },
  {
    icon: Server,
    title: "DevOps & CI/CD",
    description:
      "Streamline your development pipeline with automated testing, deployment, and infrastructure management.",
  },
  {
    icon: Users,
    title: "Agile & Scrum Management",
    description: "Implement agile methodologies and scrum frameworks to deliver projects efficiently and iteratively.",
  },
  {
    icon: Briefcase,
    title: "IT Project Engineering",
    description: "End-to-end project management from conception to delivery, ensuring quality and timely execution.",
  },
  {
    icon: Network,
    title: "System Architecture",
    description:
      "Design robust, scalable system architectures that support your business growth and technical requirements.",
  },
  {
    icon: Headphones,
    title: "IT Support & Maintenance",
    description: "24/7 technical support and proactive maintenance to keep your systems running smoothly.",
  },
  {
    icon: MapPin,
    title: "GPS Tracking Software",
    description: "Custom GPS tracking solutions for fleet management, asset tracking, and location-based services.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Integrate existing AI technologies or develop custom AI solutions to automate and enhance your operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description:
      "Migrate to the cloud or optimize your existing cloud infrastructure for better performance and cost efficiency.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Protect your digital assets with comprehensive security audits, implementation, and compliance management.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description: "Build robust APIs and integrate third-party services to extend your application capabilities.",
  },
  {
    icon: TestTube,
    title: "Quality Assurance & Testing",
    description: "Comprehensive testing strategies including automated, manual, and performance testing.",
  },
  {
    icon: Wrench,
    title: "Digital Transformation",
    description: "Guide your organization through digital transformation with strategic consulting and implementation.",
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 sm:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our collection of tech services spans various needs at every stage of the transformation process. Explore
            how we help businesses transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:border-accent/50 bg-card hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Icon
                      className={`h-6 w-6 text-accent transition-transform duration-300 ${hoveredIndex === index ? "scale-110 rotate-6" : ""}`}
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
