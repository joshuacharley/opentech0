"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { ImageWatermark } from "@/components/image-watermark"

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse-slow" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block animate-fade-in">
              <span className="text-sm font-medium text-accent px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                Enterprise Software Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up animation-delay-200">
              Where deep tech meets{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                human innovation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-in-up animation-delay-400">
              We are a collective of passionate technologists united by our deep tech knowledge, human-centric mindset,
              and a passion for using technology and digital solutions to drive business transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 animate-fade-in-up animation-delay-600">
              <Link href="#services">
                <Button size="lg" className="text-base px-8 group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent backdrop-blur-sm group"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <ImageWatermark position="bottom-right" size="md" />
              <img
                src="/modern-tech-workspace-with-developers-coding-on-mu.jpg"
                alt="Modern tech workspace with developers"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md p-6 rounded-xl shadow-xl border animate-slide-in-left animation-delay-800">
              <div className="text-3xl font-bold text-accent">21+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md p-6 rounded-xl shadow-xl border animate-slide-in-right animation-delay-1000">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-scale-in border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-md flex items-center gap-2 z-20">
              <span className="font-bold text-lg">OpenTech</span>
              <span className="text-xs text-white/70">© 2025</span>
            </div>
            <video
              className="w-full h-full"
              controls
              autoPlay
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zVOBCRvrUq-jGhLOsBIlRdcjfJdDc2JRTOZj76ImA.mp4"
            >
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute top-4 right-4 text-white bg-black/70 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-110 z-10 border border-white/20"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
