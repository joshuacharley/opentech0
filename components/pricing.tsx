"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$2,999",
    period: "/month",
    description: "Perfect for startups and small businesses getting started with digital transformation",
    features: [
      "Up to 3 active projects",
      "Web or Mobile App Development",
      "Basic UI/UX Design",
      "Standard Support (48h response)",
      "Monthly Progress Reports",
      "Source Code Access",
      "3 Months Maintenance",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    icon: Sparkles,
    price: "$7,999",
    period: "/month",
    description: "Ideal for growing businesses requiring comprehensive software solutions",
    features: [
      "Up to 8 active projects",
      "Web & Mobile App Development",
      "Advanced UI/UX Design",
      "DevOps & CI/CD Setup",
      "Priority Support (24h response)",
      "Bi-weekly Progress Reports",
      "Source Code & Documentation",
      "6 Months Maintenance",
      "Cloud Infrastructure Setup",
      "API Development & Integration",
    ],
    cta: "Start Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex requirements",
    features: [
      "Unlimited active projects",
      "Full-Stack Development Team",
      "Enterprise UI/UX & Branding",
      "Complete DevOps & Infrastructure",
      "24/7 Dedicated Support",
      "Real-time Progress Tracking",
      "Complete Documentation & Training",
      "12 Months Maintenance",
      "AI & Machine Learning Integration",
      "GPS Tracking Solutions",
      "System Architecture Consulting",
      "Dedicated Project Manager",
      "SLA Guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              Flexible Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Choose Your Subscription Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transparent pricing with no hidden fees. Scale up or down as your business needs change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative bg-card border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                  plan.popular ? "ring-2 ring-accent shadow-xl scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent to-primary text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${plan.popular ? "bg-accent" : "bg-primary"}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button
                    className={`w-full mb-6 ${
                      plan.popular ? "bg-gradient-to-r from-accent to-primary hover:opacity-90" : ""
                    }`}
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
          <p className="text-muted-foreground mb-4">
            All plans include secure hosting, SSL certificates, and regular security updates
          </p>
          <Link href="/contact" className="text-accent hover:underline font-medium">
            Need a custom solution? Contact our sales team →
          </Link>
        </div>
      </div>
    </section>
  )
}
