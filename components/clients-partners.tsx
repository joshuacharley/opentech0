"use client"

import { Building2, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ImageWatermark } from "@/components/image-watermark"

const clients = [
  {
    name: "FinanceHub",
    industry: "Financial Services",
    image: "/clients/financehub.jpg",
    description: "Digital banking platform",
    project: {
      title: "Next-Gen Digital Banking Platform",
      details:
        "Built a comprehensive digital banking solution with real-time transactions, AI-powered fraud detection, and seamless mobile experience.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AI/ML"],
      outcomes: ["500K+ active users", "99.9% uptime achieved", "40% reduction in fraud cases"],
      duration: "8 months",
    },
  },
  {
    name: "HealthCare Plus",
    industry: "Healthcare",
    image: "/clients/healthcare-plus.jpg",
    description: "Patient management system",
    project: {
      title: "Integrated Patient Management System",
      details:
        "Developed a HIPAA-compliant patient management platform with telemedicine capabilities, electronic health records, and appointment scheduling.",
      technologies: ["React", "Python", "MongoDB", "WebRTC"],
      outcomes: ["200+ healthcare providers", "50K+ patients managed", "60% faster appointment booking"],
      duration: "10 months",
    },
  },
  {
    name: "RetailMax",
    industry: "E-commerce",
    image: "/clients/retailmax.jpg",
    description: "Multi-vendor marketplace",
    project: {
      title: "Multi-Vendor E-Commerce Marketplace",
      details:
        "Created a scalable marketplace platform with vendor management, real-time inventory tracking, and AI-powered product recommendations.",
      technologies: ["Next.js", "Stripe", "Redis", "AWS"],
      outcomes: ["1000+ vendors onboarded", "$5M+ monthly transactions", "35% increase in conversion"],
      duration: "6 months",
    },
  },
  {
    name: "LogiTrack",
    industry: "Logistics",
    image: "/clients/logitrack.jpg",
    description: "Fleet tracking solution",
    project: {
      title: "Real-Time Fleet Tracking System",
      details:
        "Engineered a GPS-based fleet management solution with route optimization, driver behavior analytics, and predictive maintenance alerts.",
      technologies: ["Vue.js", "Google Maps API", "IoT", "Machine Learning"],
      outcomes: ["5000+ vehicles tracked", "25% fuel cost reduction", "Real-time location accuracy"],
      duration: "7 months",
    },
  },
  {
    name: "EduLearn",
    industry: "Education",
    image: "/clients/edulearn.jpg",
    description: "E-learning platform",
    project: {
      title: "Interactive E-Learning Platform",
      details:
        "Built an engaging online learning platform with live classes, interactive assessments, progress tracking, and AI-powered personalized learning paths.",
      technologies: ["React", "WebRTC", "GraphQL", "TensorFlow"],
      outcomes: ["100K+ students enrolled", "95% course completion rate", "4.8/5 user satisfaction"],
      duration: "9 months",
    },
  },
  {
    name: "FitnessPro",
    industry: "Health & Fitness",
    image: "/clients/fitnesspro.jpg",
    description: "Fitness tracking app",
    project: {
      title: "AI-Powered Fitness Tracking App",
      details:
        "Developed a comprehensive fitness app with workout tracking, nutrition planning, AI coach, and social features for community engagement.",
      technologies: ["React Native", "Firebase", "AI/ML", "HealthKit"],
      outcomes: ["300K+ downloads", "85% monthly active users", "50K+ workouts logged daily"],
      duration: "5 months",
    },
  },
  {
    name: "TravelEase",
    industry: "Travel & Tourism",
    image: "/clients/travelease.jpg",
    description: "Travel booking platform",
    project: {
      title: "All-in-One Travel Booking Platform",
      details:
        "Created a unified travel platform integrating flights, hotels, car rentals, and activities with AI-powered itinerary planning and price predictions.",
      technologies: ["Angular", "Node.js", "Elasticsearch", "Payment APIs"],
      outcomes: ["150K+ bookings processed", "30% higher booking rate", "Multi-currency support"],
      duration: "8 months",
    },
  },
  {
    name: "FoodDelivery",
    industry: "Food & Beverage",
    image: "/clients/fooddelivery.jpg",
    description: "Food delivery service",
    project: {
      title: "Smart Food Delivery Platform",
      details:
        "Built an end-to-end food delivery solution with real-time order tracking, smart routing for drivers, and integrated payment processing.",
      technologies: ["React Native", "Node.js", "Socket.io", "Google Maps"],
      outcomes: ["2000+ restaurants partnered", "100K+ orders monthly", "15-min average delivery time"],
      duration: "6 months",
    },
  },
]

export function ClientsPartners() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float animation-delay-2000" />
        <div className="particle particle-1" />
        <div className="particle particle-3" />
        <div className="particle particle-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Building2 className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Companies We've Delivered Solutions For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transforming businesses across industries with innovative software solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group bg-card border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedClient(selectedClient === index ? null : index)}
            >
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <ImageWatermark position="top-left" size="sm" />
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={`${client.name} - ${client.industry}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-bold text-2xl mb-1 text-white">{client.name}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{client.industry}</p>
                  <p className="text-sm text-white/90">{client.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg text-primary">{client.project.title}</h4>
                  <ArrowRight
                    className={`h-5 w-5 text-accent transition-transform duration-300 ${selectedClient === index ? "rotate-90" : ""}`}
                  />
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{client.project.details}</p>

                <div
                  className={`overflow-hidden transition-all duration-500 ${selectedClient === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {client.project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Key Outcomes
                      </p>
                      <div className="space-y-2">
                        {client.project.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Project Duration:</span>
                      <span className="font-semibold text-accent">{client.project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
