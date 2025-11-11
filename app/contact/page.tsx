"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Calendar } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { sendContactEmail } from "@/app/actions/send-email"
import { useSearchParams } from "next/navigation"

const MapBox = dynamic(() => import("@/components/mapbox"), { ssr: false })

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [consultationInfo, setConsultationInfo] = useState<{
    date: string
    time: string
  } | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const type = searchParams.get("type")
    const date = searchParams.get("date")
    const time = searchParams.get("time")

    if (type === "consultation" && date && time) {
      const consultDate = new Date(date)
      setConsultationInfo({
        date: consultDate.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        time: time,
      })

      // Pre-fill the message with consultation details
      setFormData((prev) => ({
        ...prev,
        service: "consulting",
        message: `I would like to schedule a consultation on ${consultDate.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })} at ${time}.\n\n`,
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            service: "",
            message: "",
          })
          setConsultationInfo(null)
        }, 5000)
      } else {
        setError(result.message || "Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error("[v0] Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how OpenTech can help
              bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4 animate-slide-in-left">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to answer any questions you may have about our services. Reach out to us and we'll respond
                  as soon as we can.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <Card
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info.opentech0@gmail.com"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        info.opentech0@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+23279949614"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +232 79 949 614
                      </a>
                    </div>
                  </div>
                </Card>

                <Card
                  className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-left"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        81a Kaningo Road
                        <br />
                        Western Area, Freetown 01232
                        <br />
                        Sierra Leone
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-6 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <Card className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-green-500/10 animate-scale-in">
                        <CheckCircle2 className="h-12 w-12 text-green-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours at info.opentech0@gmail.com
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Send us a Message</h2>
                      <p className="text-muted-foreground">Fill out the form below and we'll be in touch soon.</p>
                    </div>

                    {consultationInfo && (
                      <Card className="p-4 bg-accent/10 border-accent/20 animate-fade-in">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-sm mb-1">Consultation Request</h3>
                            <p className="text-sm text-muted-foreground">
                              {consultationInfo.date} at {consultationInfo.time}
                            </p>
                          </div>
                        </div>
                      </Card>
                    )}

                    {error && (
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3 animate-fade-in">
                        <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-destructive">{error}</p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+232 79 949 614"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 focus:scale-[1.02] disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="devops">DevOps</option>
                        <option value="ai">AI Solutions</option>
                        <option value="gps">GPS Tracking Software</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        rows={6}
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full group transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service. Your message will
                      be sent to info.opentech0@gmail.com
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold mb-2">Visit Our Office</h2>
              <p className="text-muted-foreground">Find us in Freetown, Sierra Leone</p>
            </div>
            <Card className="overflow-hidden animate-scale-in">
              <MapBox />
            </Card>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/">
            <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
