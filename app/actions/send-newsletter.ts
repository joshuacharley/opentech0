"use server"

import { sanitizeInput, validateEmail, logSecurityEvent } from "@/lib/security"
import { headers } from "next/headers"

export async function subscribeToNewsletter(email: string) {
  try {
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown"

    const sanitizedEmail = sanitizeInput(email)

    if (!validateEmail(sanitizedEmail)) {
      logSecurityEvent({
        type: "INVALID_INPUT",
        ip,
        details: "Invalid email format in newsletter subscription",
        timestamp: new Date(),
      })
      return {
        success: false,
        message: "Invalid email address format.",
      }
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      logSecurityEvent({
        type: "CONFIG_ERROR",
        ip,
        details: "Web3Forms access key not configured for newsletter",
        timestamp: new Date(),
      })
      return {
        success: false,
        message: "Newsletter service is not configured. Please contact the administrator.",
      }
    }

    const payload = {
      access_key: accessKey,
      subject: "New Newsletter Subscription",
      from_name: "OpenTech Website",
      to: "info.opentech0@gmail.com",
      email: sanitizedEmail,
      message: `New newsletter subscription from: ${sanitizedEmail}`,
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    const responseData = await response.json()

    if (!response.ok || !responseData.success) {
      logSecurityEvent({
        type: "EMAIL_SEND_FAILED",
        ip,
        details: `Newsletter subscription failed: ${responseData.message}`,
        timestamp: new Date(),
      })
      return {
        success: false,
        message: `Failed to subscribe: ${responseData.message || "Unknown error"}`,
      }
    }

    logSecurityEvent({
      type: "NEWSLETTER_SUBSCRIPTION",
      ip,
      details: `Newsletter subscription from ${sanitizedEmail}`,
      timestamp: new Date(),
    })

    return { success: true, message: "Successfully subscribed to newsletter" }
  } catch (error) {
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") || "unknown"

    logSecurityEvent({
      type: "ERROR",
      ip,
      details: `Newsletter subscription error: ${error instanceof Error ? error.message : "Unknown"}`,
      timestamp: new Date(),
    })

    return {
      success: false,
      message: `Failed to subscribe: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
