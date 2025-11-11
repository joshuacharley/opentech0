"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { ImageWatermark } from "@/components/image-watermark"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, FinanceHub",
    company: "FinanceHub",
    image: "/professional-businessman-portrait.png",
    rating: 5,
    text: "OpenTech transformed our banking platform with exceptional UI/UX design and robust security. The team's expertise in fintech is unmatched. Our user engagement increased by 85% after the redesign.",
    project: "Banking Platform Redesign",
  },
  {
    id: 2,
    name: "Dr. Sarah Williams",
    position: "CTO, HealthCare Plus",
    company: "HealthCare Plus",
    image: "/professional-woman-doctor.png",
    rating: 5,
    text: "The AI-powered diagnostic app developed by OpenTech has revolutionized our patient care. Their attention to detail and understanding of healthcare compliance was impressive.",
    project: "AI Diagnostic Mobile App",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Founder, RetailMax",
    company: "RetailMax",
    image: "/face-1.png",
    rating: 5,
    text: "Our e-commerce platform handles 10,000+ daily transactions seamlessly thanks to OpenTech's scalable architecture. The DevOps implementation reduced our deployment time by 70%.",
    project: "E-commerce Platform",
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Operations Manager, LogiTrack",
    company: "LogiTrack",
    image: "/professional-hispanic-man-portrait.jpg",
    rating: 5,
    text: "The GPS tracking solution has given us real-time visibility of our entire fleet. OpenTech delivered a powerful system that's both user-friendly and feature-rich.",
    project: "Fleet Management System",
  },
  {
    id: 5,
    name: "Emily Johnson",
    position: "Director, EduLearn",
    company: "EduLearn",
    image: "/professional-teacher-portrait.png",
    rating: 5,
    text: "OpenTech built our learning management system with incredible attention to user experience. Students and teachers love the intuitive interface. Engagement is up 120%.",
    project: "Learning Management Platform",
  },
  {
    id: 6,
    name: "James Anderson",
    position: "Owner, FitnessPro",
    company: "FitnessPro",
    image: "/professional-fitness-trainer.png",
    rating: 5,
    text: "The mobile app OpenTech created for our gym has been a game-changer. Members can book classes, track workouts, and connect with trainers seamlessly. 5-star experience!",
    project: "Fitness Mobile App",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Client <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hear what our clients say about working with OpenTech and the results we've delivered.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "5-Star Reviews", value: "100%" },
              { label: "Happy Clients", value: "13+" },
              { label: "Projects Delivered", value: "21+" },
              { label: "Client Retention", value: "95%" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWatermark
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-xs text-primary font-semibold">{testimonial.company}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{testimonial.text}</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-semibold text-primary">PROJECT: {testimonial.project}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
