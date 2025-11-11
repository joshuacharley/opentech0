"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Calendar,
  Target,
  Lightbulb,
  Cog,
  Award,
  Quote,
  ExternalLink,
  Shield,
} from "lucide-react"
import Image from "next/image"
import { ImageWatermark } from "@/components/image-watermark"

interface CaseStudyData {
  title: string
  client: string
  category: string
  description: string
  image: string
  technologies: string[]
  services: string[]
  outcomes: string[]
  color: string
  challenge: string
  solution: string
  implementation: string[]
  timeline: string
  teamSize: string
  testimonial: {
    quote: string
    author: string
    position: string
  }
  metrics: {
    label: string
    value: string
    description: string
  }[]
}

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  project: CaseStudyData
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
            <ImageWatermark position="top-right" size="md" />
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="mb-3 bg-accent/90 backdrop-blur-sm">{project.category}</Badge>
              <DialogTitle className="text-3xl font-bold text-white drop-shadow-lg">{project.title}</DialogTitle>
              <div className="flex items-center gap-2 mt-2 text-white/90">
                <Users className="h-4 w-4" />
                <span className="text-sm">{project.client}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Overview */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              Project Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up animation-delay-100">
            <div className="p-4 rounded-lg bg-muted/50 border">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold">Timeline</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.timeline}</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 border">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold">Team Size</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.teamSize}</p>
            </div>
          </div>

          <Separator />

          {/* The Challenge */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              The Challenge
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>

          {/* Our Solution */}
          <div className="animate-fade-in-up animation-delay-300">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              Our Solution
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          {/* Implementation Process */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Cog className="h-5 w-5 text-accent" />
              Implementation Process
            </h3>
            <div className="space-y-3">
              {project.implementation.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Technologies & Services */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up animation-delay-500">
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, i) => (
                  <Badge key={i} variant="outline" className="border-accent/30">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Key Metrics & Results
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  <div className="text-3xl font-bold text-accent mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="animate-fade-in-up animation-delay-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Project Outcomes
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="animate-fade-in-up animation-delay-800">
            <div className="relative p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Quote className="h-5 w-5 text-accent" />
                Client Testimonial
              </h3>
              <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>

          {/* OpenTech Branding Footer */}
          <div className="p-4 rounded-lg bg-muted/30 border border-accent/20">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              <span>
                This case study is property of <strong className="text-foreground">OpenTech</strong>
              </span>
              <span>•</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <Button className="flex-1" asChild>
              <a href="/contact">
                Start Your Project
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
              Close Case Study
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
