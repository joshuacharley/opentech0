"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubscribed(true)
    setLoading(false)
    setEmail("")

    // Reset after 5 seconds
    setTimeout(() => setSubscribed(false), 5000)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Subscribe to our newsletter for the latest tech insights, project updates, and exclusive offers from
              OpenTech.
            </p>
          </div>

          {subscribed ? (
            <div className="flex flex-col items-center gap-4 animate-fade-in">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <p className="text-lg font-semibold">Thank you for subscribing!</p>
              <p className="text-sm text-muted-foreground">Check your inbox for a confirmation email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" disabled={loading} className="whitespace-nowrap">
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
