import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OpenTech
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming businesses through innovative technology solutions and human-centric design.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4 text-accent" />
              <span>Certified & Professional</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#services" className="hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-foreground transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-foreground transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-foreground transition-colors">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/team" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-foreground transition-colors">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info.opentech0@gmail.com
                </li>
                <li>+232 79 949 614</li>
                <li>81a Kaningo Road, Western Area</li>
                <li>Freetown 01232, Sierra Leone</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} OpenTech. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/security" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/security" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Secured by OpenTech
              </span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center md:text-left mt-4">
            All content, images, videos, and materials are property of OpenTech and protected by copyright law.
            Unauthorized use is prohibited.
          </p>
        </div>
      </div>
    </footer>
  )
}
