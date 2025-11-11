import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, FileCheck, Eye, Server, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SecurityPage() {
  const securityMeasures = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "End-to-end encryption for all data in transit and at rest using industry-standard protocols.",
      features: ["AES-256 Encryption", "TLS 1.3", "Secure Key Management", "Regular Security Audits"],
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Multi-layered authentication and authorization systems to protect your resources.",
      features: ["Multi-Factor Authentication", "Role-Based Access Control", "SSO Integration", "Session Management"],
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "We adhere to international standards and regulations to ensure your data is handled properly.",
      features: ["GDPR Compliant", "ISO 27001", "SOC 2 Type II", "HIPAA Ready"],
    },
    {
      icon: Eye,
      title: "Monitoring & Logging",
      description: "24/7 security monitoring and comprehensive logging for complete visibility.",
      features: ["Real-time Threat Detection", "Audit Trails", "Incident Response", "Security Analytics"],
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Enterprise-grade infrastructure with multiple layers of security protection.",
      features: ["DDoS Protection", "Firewall Management", "Network Segmentation", "Regular Penetration Testing"],
    },
  ]

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Service Organization Control" },
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "HIPAA", description: "Health Insurance Portability" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Security & Compliance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Your Security is Our <span className="text-primary">Top Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We implement enterprise-grade security measures and maintain strict compliance standards to protect your
              data and ensure business continuity.
            </p>
          </div>

          {/* Security Measures */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{measure.title}</h3>
                      <p className="text-muted-foreground mb-4">{measure.description}</p>
                      <ul className="space-y-2">
                        {measure.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Certifications */}
          <div className="bg-accent/50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Certifications & Compliance</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Privacy & Data Handling</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h3>Data Collection</h3>
              <p>
                We collect only the minimum data necessary to provide our services. All data collection is transparent
                and requires explicit consent.
              </p>

              <h3>Data Storage</h3>
              <p>
                Your data is stored in secure, geographically distributed data centers with redundant backups and
                disaster recovery procedures.
              </p>

              <h3>Data Access</h3>
              <p>
                Access to your data is strictly controlled and limited to authorized personnel only. All access is
                logged and monitored.
              </p>

              <h3>Data Retention</h3>
              <p>
                We retain your data only as long as necessary to provide services or as required by law. You can request
                data deletion at any time.
              </p>

              <h3>Third-Party Services</h3>
              <p>
                We carefully vet all third-party services and ensure they meet our security standards. We never sell
                your data to third parties.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Have Security Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our security team is here to answer any questions about our practices and compliance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Security Team
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
