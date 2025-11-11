"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Download, BookOpen, Video, Code, FileCode, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { subscribeToNewsletter } from "@/app/actions/send-newsletter"

export default function ResourcesPage() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const resources = [
    {
      category: "Whitepapers",
      icon: FileText,
      items: [
        {
          title: "Digital Transformation Guide 2025",
          description: "Complete guide to modernizing your business with technology",
          size: "2.4 MB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "digital-transformation-guide-2025",
          type: "whitepapers",
        },
        {
          title: "AI Implementation Best Practices",
          description: "How to successfully integrate AI into your operations",
          size: "1.8 MB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "ai-implementation-best-practices",
          type: "whitepapers",
        },
        {
          title: "Cloud Migration Strategy",
          description: "Step-by-step approach to moving your infrastructure to the cloud",
          size: "3.1 MB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "cloud-migration-strategy",
          type: "whitepapers",
        },
      ],
    },
    {
      category: "Case Studies",
      icon: BookOpen,
      items: [
        {
          title: "FinanceHub Success Story",
          description: "How we built a banking platform serving 100K+ users",
          size: "1.5 MB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "financehub-success-story",
          type: "case-studies",
        },
        {
          title: "HealthCare Plus Transformation",
          description: "AI-powered healthcare platform case study",
          size: "2.0 MB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "healthcare-plus-transformation",
          type: "case-studies",
        },
        {
          title: "RetailMax E-commerce Scale",
          description: "Scaling an e-commerce platform to handle 1M+ daily users",
          size: "1.7 MB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "retailmax-ecommerce-scale",
          type: "case-studies",
        },
      ],
    },
    {
      category: "Technical Guides",
      icon: Code,
      items: [
        {
          title: "API Integration Handbook",
          description: "Best practices for integrating third-party APIs",
          size: "900 KB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "api-integration-handbook",
          type: "technical-guides",
        },
        {
          title: "Security Checklist",
          description: "Essential security measures for web applications",
          size: "650 KB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "security-checklist",
          type: "technical-guides",
        },
        {
          title: "Performance Optimization Guide",
          description: "Techniques to improve application speed and efficiency",
          size: "1.2 MB",
          formats: ["PDF", "DOCX", "TXT"],
          slug: "performance-optimization-guide",
          type: "technical-guides",
        },
      ],
    },
    {
      category: "Video Tutorials",
      icon: Video,
      items: [
        {
          title: "Getting Started with OpenTech",
          description: "Introduction to our services and process",
          size: "45 min",
          formats: ["MP4"],
          slug: "getting-started-with-opentech",
          type: "videos",
        },
        {
          title: "Project Management Webinar",
          description: "How we manage projects using Agile methodology",
          size: "60 min",
          formats: ["MP4"],
          slug: "project-management-webinar",
          type: "videos",
        },
        {
          title: "Tech Stack Overview",
          description: "Technologies we use and why",
          size: "30 min",
          formats: ["MP4"],
          slug: "tech-stack-overview",
          type: "videos",
        },
      ],
    },
    {
      category: "Templates",
      icon: FileCode,
      items: [
        {
          title: "Project Requirements Template",
          description: "Template to help you define your project requirements",
          size: "120 KB",
          formats: ["DOCX", "PDF", "TXT"],
          slug: "project-requirements-template",
          type: "templates",
        },
        {
          title: "Technical Specification Template",
          description: "Standard format for technical documentation",
          size: "150 KB",
          formats: ["DOCX", "PDF", "TXT"],
          slug: "technical-specification-template",
          type: "templates",
        },
        {
          title: "API Documentation Template",
          description: "Template for documenting your APIs",
          size: "200 KB",
          formats: ["DOCX", "PDF", "TXT"],
          slug: "api-documentation-template",
          type: "templates",
        },
      ],
    },
  ]

  const handleDownload = async (type: string, slug: string, format: string, title: string) => {
    const downloadKey = `${type}-${slug}-${format}`
    setDownloading(downloadKey)

    try {
      const url = `/api/download?type=${type}&file=${slug}&format=${format.toLowerCase()}`
      const response = await fetch(url)

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Download failed: ${response.status} - ${errorText}`)
      }

      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = `${slug}.${format.toLowerCase()}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      alert(`Download failed: ${error instanceof Error ? error.message : "Unknown error"}. Please try again.`)
    } finally {
      setDownloading(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              Resource Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Free Resources to <span className="text-primary">Accelerate Your Success</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Download our comprehensive guides, templates, and case studies to help you make informed decisions about
              your technology projects.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="space-y-12">
            {resources.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div
                  key={categoryIndex}
                  className="animate-slide-up"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => {
                      const isDownloading = downloading?.startsWith(`${item.type}-${item.slug}`)
                      return (
                        <Card
                          key={itemIndex}
                          className="p-6 hover:shadow-lg transition-all duration-300 group animate-scale-in"
                          style={{ animationDelay: `${(categoryIndex * 3 + itemIndex) * 50}ms` }}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{item.size}</span>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  size="sm"
                                  className="group-hover:bg-primary group-hover:text-primary-foreground"
                                  disabled={isDownloading}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  {isDownloading ? "Downloading..." : "Download"}
                                  <ChevronDown className="h-4 w-4 ml-1" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                {item.formats.map((format) => (
                                  <DropdownMenuItem
                                    key={format}
                                    onClick={() => handleDownload(item.type, item.slug, format, item.title)}
                                  >
                                    <span className="px-2 py-1 rounded bg-accent text-xs mr-2">{format}</span>
                                    Download as {format}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <NewsletterSubscription />
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Need Custom Resources?</h2>
            <p className="text-muted-foreground mb-6">
              We can create tailored documentation and guides specific to your project needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        setIsSubmitted(true)
        setEmail("")

        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setError(result.message || "Failed to subscribe. Please try again.")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-green-500/10">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Thank You for Subscribing!</h2>
        <p className="text-muted-foreground">
          You'll be the first to receive new guides, case studies, and exclusive content.
        </p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Get New Resources First</h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Subscribe to our newsletter and be the first to receive new guides, case studies, and exclusive content.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive animate-fade-in">
            {error}
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
          <Button type="submit" disabled={isSubmitting} className="px-6 py-3">
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
      </form>
    </div>
  )
}
