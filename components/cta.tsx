"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Rocket, Calendar, CheckCircle, Clock, Users, Zap, Target, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ConsultationDatePicker } from "./consultation-date-picker"

export function CTA() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [consultationDate, setConsultationDate] = useState<Date | null>(null)
  const [consultationTime, setConsultationTime] = useState<string>("")

  const handleDateSelect = (date: Date, time: string) => {
    setConsultationDate(date)
    setConsultationTime(time)
  }

  const projectDetails = {
    title: "Start Your Project",
    description: "Launch your next big idea with our comprehensive development services",
    icon: Rocket,
    benefits: [
      { icon: Target, text: "Clear project roadmap and milestones" },
      { icon: Users, text: "Dedicated team of experts" },
      { icon: Zap, text: "Agile development methodology" },
      { icon: CheckCircle, text: "Quality assurance at every stage" },
    ],
    process: [
      "Share your project requirements and goals",
      "Receive a detailed proposal and timeline",
      "Get matched with the perfect team",
      "Start building within 48 hours",
    ],
    cta: "Ready to build? Let's get started!",
  }

  const consultationDetails = {
    title: "Schedule a Consultation",
    description: "Get expert advice tailored to your specific business needs",
    icon: Calendar,
    benefits: [
      { icon: MessageSquare, text: "Free 30-minute strategy session" },
      { icon: Target, text: "Personalized technology recommendations" },
      { icon: Clock, text: "Flexible scheduling options" },
      { icon: CheckCircle, text: "No obligation or commitment" },
    ],
    process: [
      "Choose your preferred date and time",
      "Brief us on your business challenges",
      "Meet with our senior consultants",
      "Receive actionable insights and next steps",
    ],
    cta: "Book your free consultation today!",
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Choose the path that best fits your needs. Whether you're ready to start building or need expert guidance
              first, we're here to help you succeed.
            </p>
          </div>

          {/* Two-Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Start Your Project Card */}
            <Card
              className={`p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl cursor-pointer border-2 ${
                expandedCard === "project"
                  ? "border-primary scale-[1.02]"
                  : "border-transparent hover:border-primary/50"
              } animate-slide-in-left`}
              onClick={() => setExpandedCard(expandedCard === "project" ? null : "project")}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{projectDetails.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{projectDetails.description}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">What You Get</h4>
                  <div className="grid gap-3">
                    {projectDetails.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <benefit.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Process */}
                {expandedCard === "project" && (
                  <div className="space-y-3 pt-4 border-t animate-fade-in">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">How It Works</h4>
                    <ol className="space-y-2">
                      {projectDetails.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="text-sm font-medium text-primary pt-2">{projectDetails.cta}</p>
                  </div>
                )}

                {/* CTA Button */}
                <Link href="/contact" className="block">
                  <Button size="lg" className="w-full group transition-all duration-300 hover:scale-[1.02]">
                    {projectDetails.title}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Expand hint */}
                {expandedCard !== "project" && (
                  <p className="text-xs text-center text-muted-foreground">Click to see how it works</p>
                )}
              </div>
            </Card>

            {/* Schedule Consultation Card */}
            <Card
              className={`p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl border-2 ${
                expandedCard === "consultation"
                  ? "border-primary scale-[1.02]"
                  : "border-transparent hover:border-primary/50"
              } animate-slide-in-right`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div
                  className="flex items-start gap-4 cursor-pointer"
                  onClick={() => setExpandedCard(expandedCard === "consultation" ? null : "consultation")}
                >
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{consultationDetails.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{consultationDetails.description}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div
                  className="space-y-3 cursor-pointer"
                  onClick={() => setExpandedCard(expandedCard === "consultation" ? null : "consultation")}
                >
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">What You Get</h4>
                  <div className="grid gap-3">
                    {consultationDetails.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <benefit.icon className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Process & Date Picker */}
                {expandedCard === "consultation" && (
                  <div className="space-y-4 pt-4 border-t animate-fade-in">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">How It Works</h4>
                    <ol className="space-y-2">
                      {consultationDetails.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="pt-4 border-t">
                      <ConsultationDatePicker
                        onDateSelect={handleDateSelect}
                        selectedDate={consultationDate}
                        selectedTime={consultationTime}
                      />
                    </div>

                    <p className="text-sm font-medium text-accent pt-2">{consultationDetails.cta}</p>
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  href={
                    consultationDate && consultationTime
                      ? `/contact?type=consultation&date=${consultationDate.toISOString()}&time=${encodeURIComponent(consultationTime)}`
                      : "/contact?type=consultation"
                  }
                  className="block"
                  onClick={(e) => {
                    if (expandedCard !== "consultation") {
                      e.preventDefault()
                      setExpandedCard("consultation")
                    }
                  }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full group transition-all duration-300 hover:scale-[1.02] bg-transparent border-2"
                    disabled={expandedCard === "consultation" && (!consultationDate || !consultationTime)}
                  >
                    {expandedCard === "consultation" && consultationDate && consultationTime
                      ? "Confirm Consultation"
                      : consultationDetails.title}
                    <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>

                {/* Expand hint */}
                {expandedCard !== "consultation" && (
                  <p className="text-xs text-center text-muted-foreground">Click to select date & time</p>
                )}
              </div>
            </Card>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
