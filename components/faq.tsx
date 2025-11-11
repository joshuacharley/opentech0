"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does OpenTech offer?",
    answer:
      "OpenTech provides comprehensive technology solutions including UI/UX design, web and mobile app development, DevOps, AI solutions, GPS tracking software, system architecture, IT support, and digital transformation consulting.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple mobile app might take 2-3 months, while enterprise solutions can take 6-12 months. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "We work with businesses of all sizes, from startups to enterprise organizations. We offer flexible engagement models and pricing to accommodate different budgets and requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with regular sprints, continuous feedback, and iterative development. This includes discovery, design, development, testing, deployment, and ongoing support phases.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, updates, performance monitoring, and feature enhancements to ensure your solution continues to perform optimally.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We specialize in API development and system integration. Our team has experience integrating with various third-party services, legacy systems, and modern cloud platforms.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern tech stacks including React, Next.js, React Native, Flutter, Node.js, Python, AWS, Azure, Google Cloud, and various AI/ML frameworks. We choose technologies based on your specific needs.",
  },
  {
    question: "How do you ensure project security and data protection?",
    answer:
      "Security is our top priority. We implement industry-standard security practices, conduct regular security audits, use encrypted communications, and comply with GDPR and other relevant regulations.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically work with milestone-based payments: 30% upfront, 40% at mid-project milestones, and 30% upon completion. We're flexible and can discuss custom payment arrangements based on project scope.",
  },
  {
    question: "How do I get started with OpenTech?",
    answer:
      "Simply schedule a free consultation through our contact form or call us directly. We'll discuss your requirements, provide recommendations, and create a customized proposal for your project.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-pretty">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-pretty">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-pretty">{faq.answer}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
