import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LiveChat } from "@/components/live-chat"
import { ContentProtection } from "@/components/content-protection"
import { SecurityNotice } from "@/components/security-notice"
import "./globals.css"

export const metadata: Metadata = {
  title: "OpenTech - Enterprise Software Development & IT Services",
  description:
    "Leading software development company specializing in web apps, mobile apps, AI solutions, DevOps, and digital transformation services.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <LiveChat />
        <ContentProtection />
        <SecurityNotice />
        <Analytics />
      </body>
    </html>
  )
}
