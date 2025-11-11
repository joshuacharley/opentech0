"use server"

import {
  sanitizeInput,
  validateEmail,
  validateName,
  validateMessage,
  detectSuspiciousContent,
  logSecurityEvent,
} from "@/lib/security"
import { headers } from "next/headers"

export async function sendContactEmail(formData: {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}) {
  try {
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown"

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company),
      phone: sanitizeInput(formData.phone),
      service: sanitizeInput(formData.service),
      message: sanitizeInput(formData.message),
    }

    if (!validateName(sanitizedData.name)) {
      logSecurityEvent({
        type: "INVALID_INPUT",
        ip,
        details: "Invalid name format",
        timestamp: new Date(),
      })
      return {
        success: false,
        message: "Invalid name format. Please use only letters, spaces, and hyphens.",
      }
    }

    if (!validateEmail(sanitizedData.email)) {
      logSecurityEvent({
        type: "INVALID_INPUT",
        ip,
        details: "Invalid email format",
        timestamp: new Date(),
      })
      return {
        success: false,
        message: "Invalid email address format.",
      }
    }

    if (!validateMessage(sanitizedData.message)) {
      logSecurityEvent({
        type: "INVALID_INPUT",
        ip,
        details: "Invalid message length",
        timestamp: new Date(),
      })
      return {
        success: false,
        message: "Message must be between 10 and 5000 characters.",
      }
    }

    if (
      detectSuspiciousContent(sanitizedData.name) ||
      detectSuspiciousContent(sanitizedData.email) ||
      detectSuspiciousContent(sanitizedData.message)
    ) {
      logSecurityEvent({
        type: "SUSPICIOUS_CONTENT",
        ip,
        details: "Potential XSS or injection attempt detected",
        timestamp: new Date(),
      })
      return {
        success: false,
        message: "Your submission contains invalid content. Please remove any special characters or code.",
      }
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      logSecurityEvent({
        type: "CONFIG_ERROR",
        ip,
        details: "Web3Forms access key not configured",
        timestamp: new Date(),
      })
      return {
        success: false,
        message: "Email service is not configured. Please contact the administrator.",
      }
    }

    const payload = {
      access_key: accessKey,
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      from_name: "OpenTech Website",
      to: "info.opentech0@gmail.com",
      name: sanitizedData.name,
      email: sanitizedData.email,
      company: sanitizedData.company || "Not provided",
      phone: sanitizedData.phone || "Not provided",
      service: sanitizedData.service,
      message: sanitizedData.message,
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

    if (!response.ok) {
      logSecurityEvent({
        type: "EMAIL_SEND_FAILED",
        ip,
        details: `Web3Forms API error: ${responseData.message}`,
        timestamp: new Date(),
      })
      return {
        success: false,
        message: `Failed to send email: ${responseData.message || "Unknown error"}`,
      }
    }

    logSecurityEvent({
      type: "EMAIL_SENT",
      ip,
      details: `Contact form submitted by ${sanitizedData.email}`,
      timestamp: new Date(),
    })

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") || "unknown"

    logSecurityEvent({
      type: "ERROR",
      ip,
      details: `Email send error: ${error instanceof Error ? error.message : "Unknown"}`,
      timestamp: new Date(),
    })

    return {
      success: false,
      message: `Failed to send email: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
