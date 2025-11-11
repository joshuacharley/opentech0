import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting store (in production, use Redis/Upstash)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get client IP
  const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

  // Rate limiting for API routes and form submissions
  if (
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.includes("/contact") ||
    request.nextUrl.pathname.includes("/careers")
  ) {
    const now = Date.now()
    const limit = 10 // requests per window
    const windowMs = 60000 // 1 minute

    const clientData = rateLimitStore.get(ip)

    if (clientData) {
      if (now < clientData.resetTime) {
        if (clientData.count >= limit) {
          return new NextResponse("Too many requests. Please try again later.", {
            status: 429,
            headers: {
              "Retry-After": String(Math.ceil((clientData.resetTime - now) / 1000)),
            },
          })
        }
        clientData.count++
      } else {
        rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
      }
    } else {
      rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    }

    // Clean up old entries
    if (rateLimitStore.size > 1000) {
      for (const [key, value] of rateLimitStore.entries()) {
        if (now > value.resetTime) {
          rateLimitStore.delete(key)
        }
      }
    }
  }

  // Security Headers
  const headers = response.headers

  // Content Security Policy
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://api.mapbox.com https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://api.mapbox.com https://fonts.googleapis.com",
      "img-src 'self' data: blob: https: http:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://api.mapbox.com https://events.mapbox.com https://api.web3forms.com https://*.tiles.mapbox.com",
      "frame-src 'self' https:",
      "worker-src 'self' blob:",
      "media-src 'self' blob: https:",
    ].join("; "),
  )

  // Strict Transport Security (HTTPS only)
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")

  // Prevent clickjacking
  headers.set("X-Frame-Options", "SAMEORIGIN")

  // Prevent MIME type sniffing
  headers.set("X-Content-Type-Options", "nosniff")

  // XSS Protection
  headers.set("X-XSS-Protection", "1; mode=block")

  // Referrer Policy
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Permissions Policy
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(self), interest-cohort=()")

  // Prevent embedding in iframes from other domains
  headers.set("X-Permitted-Cross-Domain-Policies", "none")

  // Disable client-side caching for sensitive pages
  if (request.nextUrl.pathname.includes("/resources") || request.nextUrl.pathname.includes("/projects")) {
    headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate")
    headers.set("Pragma", "no-cache")
    headers.set("Expires", "0")
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
