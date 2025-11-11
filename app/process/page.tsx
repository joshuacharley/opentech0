import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageSquare, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ProcessPage() {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Discovery & Consultation",
      duration: "1-2 weeks",
      description: "We start by understanding your business goals, challenges, and requirements.",
      activities: [
        "Initial consultation meeting",
        "Requirements gathering",
        "Stakeholder interviews",
        "Technical feasibility analysis",
        "Project scope definition",
      ],
      deliverables: ["Project proposal", "Technical specification", "Timeline & budget estimate"],
    },
    {
      icon: Lightbulb,
      title: "Planning & Design",
      duration: "2-3 weeks",
      description: "We create detailed plans and designs that align with your vision and objectives.",
      activities: [
        "User research & personas",
        "Information architecture",
        "Wireframing & prototyping",
        "UI/UX design",
        "Technical architecture planning",
      ],
      deliverables: ["Design mockups", "Interactive prototypes", "Technical architecture document", "Project roadmap"],
    },
    {
      icon: Code,
      title: "Development",
      duration: "6-12 weeks",
      description: "Our expert developers bring your project to life using agile methodologies.",
      activities: [
        "Sprint planning",
        "Frontend development",
        "Backend development",
        "Database design & implementation",
        "API integration",
        "Regular progress reviews",
      ],
      deliverables: ["Working software increments", "Code documentation", "Sprint reports", "Demo sessions"],
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      duration: "2-3 weeks",
      description: "Rigorous testing ensures your solution is bug-free and performs optimally.",
      activities: [
        "Unit testing",
        "Integration testing",
        "Performance testing",
        "Security testing",
        "User acceptance testing",
        "Bug fixing & optimization",
      ],
      deliverables: ["Test reports", "Bug tracking logs", "Performance metrics", "Security audit results"],
    },
    {
      icon: Rocket,
      title: "Deployment",
      duration: "1 week",
      description: "We handle the entire deployment process to ensure a smooth launch.",
      activities: [
        "Environment setup",
        "Database migration",
        "Application deployment",
        "DNS configuration",
        "SSL certificate setup",
        "Final testing in production",
      ],
      deliverables: ["Live application", "Deployment documentation", "Access credentials", "Monitoring setup"],
    },
    {
      icon: HeadphonesIcon,
      title: "Support & Maintenance",
      duration: "Ongoing",
      description: "We provide continuous support to ensure your solution runs smoothly.",
      activities: [
        "24/7 monitoring",
        "Bug fixes & patches",
        "Performance optimization",
        "Security updates",
        "Feature enhancements",
        "Technical support",
      ],
      deliverables: ["Monthly reports", "Update releases", "Support tickets resolution", "Performance analytics"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Code className="h-4 w-4" />
              Our Process
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              A Proven Process for <span className="text-primary">Successful Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We follow a structured, transparent approach that ensures quality delivery and keeps you informed every
              step of the way.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-border hidden md:block" />
                  )}

                  <Card className="p-6 md:p-8 mb-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon & Number */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <span className="text-sm text-muted-foreground bg-accent px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-6">{step.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Activities */}
                          <div>
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                              Key Activities
                            </h4>
                            <ul className="space-y-2">
                              {step.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                              Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {step.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Methodology */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Agile Methodology</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Week Sprints</h3>
                <p className="text-sm text-muted-foreground">Regular iterations for continuous progress</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">24/7</span>
                </div>
                <h3 className="font-semibold mb-2">Communication</h3>
                <p className="text-sm text-muted-foreground">Always available for questions and updates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">100%</span>
                </div>
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">Full visibility into progress and decisions</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-6">Let's discuss how we can bring your vision to life.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
