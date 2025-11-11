export function sanitizeInput(input: string): string {
  // Remove potentially dangerous characters
  return input
    .replace(/[<>]/g, "") // Remove < and >
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim()
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

export function validatePhone(phone: string): boolean {
  // Allow international phone numbers
  const phoneRegex = /^\+?[\d\s\-()]{10,20}$/
  return phoneRegex.test(phone)
}

export function validateName(name: string): boolean {
  // Allow letters, spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/
  return nameRegex.test(name)
}

export function validateMessage(message: string): boolean {
  // Check length and basic content
  return message.length >= 10 && message.length <= 5000
}

export function detectSuspiciousContent(text: string): boolean {
  const suspiciousPatterns = [/<script/i, /javascript:/i, /on\w+=/i, /<iframe/i, /eval\(/i, /document\./i, /window\./i]

  return suspiciousPatterns.some((pattern) => pattern.test(text))
}

export function hashIP(ip: string): string {
  // Simple hash for IP addresses (in production, use crypto)
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash.toString(36)
}

export function logSecurityEvent(event: {
  type: string
  ip: string
  details: string
  timestamp: Date
}): void {
  // In production, send to security monitoring service
  console.log("[SECURITY]", {
    type: event.type,
    ip: hashIP(event.ip),
    details: event.details,
    timestamp: event.timestamp.toISOString(),
  })
}
