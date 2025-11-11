"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Palette, Globe, Smartphone, Cloud, MapPin, Brain, ChevronRight } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable and performant web solutions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile development",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Automated deployment and infrastructure management",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent systems and machine learning integration",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time location tracking software solutions",
    color: "from-teal-500 to-cyan-500",
  },
]

export function DemoShowcase() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="w-full h-full bg-gradient-to-br from-background via-muted/30 to-background p-8 flex flex-col">
      <div className="text-center mb-8 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          OpenTech Services Demo
        </h2>
        <p className="text-muted-foreground text-lg">Transforming businesses through innovative technology solutions</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        {services.map((service, index) => {
          const Icon = service.icon
          const isActive = activeService === index

          return (
            <Card
              key={index}
              className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isActive ? "ring-2 ring-primary shadow-2xl scale-105" : ""
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setActiveService(index)}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <div className="flex items-center text-primary text-sm font-medium">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          )
        })}
      </div>

      <div className="mt-8 text-center animate-fade-in-up animation-delay-600">
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-6">
          <div>
            <div className="text-3xl font-bold text-accent mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
          </div>
        </div>
        <p className="text-muted-foreground">
          Trusted by leading companies worldwide to deliver exceptional digital solutions
        </p>
      </div>
    </div>
  )
}
