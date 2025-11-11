import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  TrendingUp,
  Coffee,
  Laptop,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Freetown, Sierra Leone",
      type: "Full-time",
      salary: "$40,000 - $60,000",
      description:
        "We're looking for an experienced full-stack developer to join our growing team. You'll work on cutting-edge projects using React, Next.js, Node.js, and modern cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expert in React, Next.js, and Node.js",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving and communication skills",
      ],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Freetown, Sierra Leone / Remote",
      type: "Full-time",
      salary: "$35,000 - $50,000",
      description:
        "Join our design team to create beautiful, user-centered experiences for our clients. You'll work closely with developers and stakeholders to bring ideas to life.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Strong portfolio demonstrating design thinking",
        "Understanding of web and mobile design principles",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Freetown, Sierra Leone",
      type: "Full-time",
      salary: "$45,000 - $65,000",
      description:
        "Help us build and maintain robust CI/CD pipelines and infrastructure. You'll work with modern DevOps tools and practices to ensure smooth deployments and operations.",
      requirements: [
        "4+ years of DevOps experience",
        "Experience with Docker, Kubernetes, and CI/CD tools",
        "Knowledge of cloud infrastructure (AWS, Azure, GCP)",
        "Strong scripting skills (Bash, Python, etc.)",
      ],
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Freetown, Sierra Leone / Remote",
      type: "Full-time",
      salary: "$38,000 - $55,000",
      description:
        "Build amazing mobile experiences for iOS and Android. You'll work with React Native or Flutter to create cross-platform applications for our diverse client base.",
      requirements: [
        "3+ years of mobile development experience",
        "Proficiency in React Native or Flutter",
        "Experience with native iOS/Android development",
        "Understanding of mobile UI/UX best practices",
      ],
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "Freetown, Sierra Leone",
      type: "Full-time",
      salary: "$42,000 - $58,000",
      description:
        "Lead project teams to deliver exceptional results for our clients. You'll manage timelines, resources, and stakeholder communications using Agile methodologies.",
      requirements: [
        "4+ years of project management experience",
        "PMP or Scrum Master certification preferred",
        "Experience with Agile/Scrum methodologies",
        "Excellent communication and leadership skills",
      ],
    },
    {
      title: "AI/ML Engineer (Intern)",
      department: "Engineering",
      location: "Freetown, Sierra Leone",
      type: "Internship",
      salary: "$15,000 - $20,000",
      description:
        "Join our AI team as an intern to work on exciting machine learning projects. You'll gain hands-on experience with modern AI tools and frameworks.",
      requirements: [
        "Currently pursuing or recently completed degree in CS/AI",
        "Basic knowledge of Python and ML frameworks",
        "Passion for AI and machine learning",
        "Willingness to learn and grow",
      ],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: Laptop,
      title: "Remote Work",
      description: "Flexible work arrangements with remote options",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths and mentorship",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and books",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours and generous vacation policy",
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team building activities and social events",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <Badge className="mb-4">We're Hiring</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Join the OpenTech Team</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Build the future of technology with us. We're looking for talented individuals who are passionate about
                creating innovative solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-4">Why Work at OpenTech?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in creating an environment where talented people can thrive and do their best work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <benefit.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our current openings and find the perfect role for you.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0">
                      Open
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{position.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full md:w-auto">
                      <Zap className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can
                contribute to OpenTech.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  <Users className="h-5 w-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
