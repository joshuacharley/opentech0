"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Palette,
  Globe,
  Smartphone,
  Server,
  MapPin,
  Brain,
  Cloud,
  BarChart3,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { CaseStudyModal } from "@/components/case-study-modal"
import { ImageWatermark } from "@/components/image-watermark"

const projects = [
  {
    title: "FinanceFlow - Banking Dashboard",
    client: "Global Finance Corp",
    category: "Web Application & UI/UX",
    description:
      "A comprehensive banking dashboard with real-time analytics, transaction management, and AI-powered insights for financial advisors.",
    image: "/modern-banking-dashboard.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AI Analytics"],
    services: ["UI/UX Design", "Web Application Development", "AI Solutions", "Data Analytics & BI"],
    outcomes: [
      "40% increase in user engagement",
      "Reduced transaction processing time by 60%",
      "99.9% uptime achieved",
      "Improved customer satisfaction by 45%",
    ],
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    challenge:
      "Global Finance Corp was struggling with an outdated banking interface that led to poor user engagement and slow transaction processing. Financial advisors needed real-time insights but were hampered by legacy systems that couldn't handle modern data analytics requirements.",
    solution:
      "We designed and developed a modern, intuitive banking dashboard using Next.js and React, integrated with AI-powered analytics to provide real-time insights. The solution included a complete UI/UX overhaul, optimized database architecture, and machine learning models for predictive analytics.",
    implementation: [
      "Conducted comprehensive user research and stakeholder interviews to understand pain points",
      "Designed wireframes and prototypes with iterative feedback from financial advisors",
      "Developed the frontend using Next.js with TypeScript for type safety and scalability",
      "Implemented real-time data synchronization using WebSockets and optimized PostgreSQL queries",
      "Integrated AI models for transaction pattern analysis and fraud detection",
      "Conducted extensive testing and deployed with zero downtime migration strategy",
    ],
    timeline: "6 months",
    teamSize: "8 professionals (2 UI/UX, 3 developers, 1 AI specialist, 2 QA)",
    testimonial: {
      quote:
        "OpenTech transformed our banking platform beyond our expectations. The new dashboard has significantly improved our advisors' productivity and our clients love the modern interface. The AI insights have been game-changing for our business.",
      author: "Sarah Mitchell",
      position: "CTO, Global Finance Corp",
    },
    metrics: [
      { label: "User Engagement", value: "+40%", description: "Increase in daily active users" },
      { label: "Processing Speed", value: "60%", description: "Faster transaction processing" },
      { label: "System Uptime", value: "99.9%", description: "Reliability achieved" },
    ],
  },
  {
    title: "FleetTrack Pro - GPS Management",
    client: "LogiTrans Solutions",
    category: "GPS Tracking & Mobile App",
    description:
      "Real-time fleet tracking system with route optimization, driver behavior monitoring, and predictive maintenance alerts.",
    image: "/gps-fleet-tracking-map-interface.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "WebSocket", "ML Models"],
    services: ["GPS Tracking Software", "Mobile App Development", "System Architecture", "Cloud Solutions"],
    outcomes: [
      "30% reduction in fuel costs",
      "Tracking 5,000+ vehicles in real-time",
      "95% customer satisfaction rate",
      "Reduced maintenance costs by 25%",
    ],
    icon: MapPin,
    color: "from-green-500 to-emerald-500",
    challenge:
      "LogiTrans Solutions needed a scalable GPS tracking solution to manage their growing fleet of 5,000+ vehicles. Their existing system couldn't provide real-time updates, lacked route optimization, and had no predictive maintenance capabilities, leading to high operational costs.",
    solution:
      "We built a comprehensive GPS tracking platform with real-time vehicle monitoring, AI-powered route optimization, and predictive maintenance alerts. The solution included mobile apps for drivers and a web dashboard for fleet managers, all connected through a robust cloud infrastructure.",
    implementation: [
      "Architected a scalable microservices backend using Node.js and MongoDB",
      "Developed cross-platform mobile apps using React Native for iOS and Android",
      "Integrated Google Maps API with custom overlays for real-time vehicle tracking",
      "Implemented WebSocket connections for instant location updates",
      "Built machine learning models for route optimization and maintenance prediction",
      "Deployed on AWS with auto-scaling capabilities to handle peak loads",
    ],
    timeline: "8 months",
    teamSize: "10 professionals (3 mobile devs, 3 backend devs, 2 ML engineers, 2 DevOps)",
    testimonial: {
      quote:
        "FleetTrack Pro has revolutionized our operations. The real-time tracking and route optimization have saved us millions in fuel costs, and the predictive maintenance feature has prevented countless breakdowns. OpenTech delivered exactly what we needed.",
      author: "Michael Chen",
      position: "Operations Director, LogiTrans Solutions",
    },
    metrics: [
      { label: "Fuel Savings", value: "30%", description: "Cost reduction achieved" },
      { label: "Vehicles Tracked", value: "5,000+", description: "Real-time monitoring" },
      { label: "Customer Satisfaction", value: "95%", description: "Client approval rating" },
    ],
  },
  {
    title: "HealthCare AI Assistant",
    client: "MediCare Plus",
    category: "AI & Mobile Application",
    description:
      "AI-powered healthcare assistant app that provides symptom analysis, appointment scheduling, and personalized health recommendations.",
    image: "/healthcare-ai-mobile-app-interface.jpg",
    technologies: ["Flutter", "Python", "TensorFlow", "Firebase", "OpenAI API", "HIPAA Compliant"],
    services: ["AI Solutions", "Mobile App Development", "Cybersecurity & Compliance", "API Development"],
    outcomes: [
      "100,000+ active users",
      "85% accuracy in symptom analysis",
      "HIPAA compliance certified",
      "4.7-star app rating",
    ],
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    challenge:
      "MediCare Plus wanted to provide 24/7 healthcare assistance to their patients but faced challenges with staff availability and patient engagement. They needed a HIPAA-compliant solution that could provide accurate symptom analysis while maintaining patient privacy and data security.",
    solution:
      "We developed an AI-powered healthcare assistant using Flutter for cross-platform compatibility and integrated advanced machine learning models for symptom analysis. The app includes secure appointment scheduling, personalized health recommendations, and full HIPAA compliance with end-to-end encryption.",
    implementation: [
      "Designed user-friendly interface following healthcare accessibility guidelines",
      "Developed the app using Flutter for iOS and Android with shared codebase",
      "Trained custom TensorFlow models on medical datasets for symptom analysis",
      "Integrated OpenAI API for natural language processing and conversational AI",
      "Implemented HIPAA-compliant data storage and encryption using Firebase",
      "Conducted rigorous security audits and obtained HIPAA certification",
    ],
    timeline: "10 months",
    teamSize: "12 professionals (2 UI/UX, 3 mobile devs, 3 AI/ML engineers, 2 security specialists, 2 QA)",
    testimonial: {
      quote:
        "The HealthCare AI Assistant has transformed how we engage with our patients. The AI accuracy is impressive, and our patients love the convenience of 24/7 access to health guidance. OpenTech's attention to HIPAA compliance gave us complete confidence in the solution.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer, MediCare Plus",
    },
    metrics: [
      { label: "Active Users", value: "100K+", description: "Monthly active users" },
      { label: "AI Accuracy", value: "85%", description: "Symptom analysis precision" },
      { label: "App Rating", value: "4.7★", description: "User satisfaction score" },
    ],
  },
  {
    title: "E-Commerce Platform Redesign",
    client: "ShopSmart Retail",
    category: "UI/UX & Web Development",
    description:
      "Complete redesign and development of an e-commerce platform with improved user experience, faster checkout, and personalized recommendations.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "Stripe", "Redis", "Vercel", "Tailwind CSS", "Recommendation Engine"],
    services: ["UI/UX Design", "Web Application Development", "API Integration", "Quality Assurance"],
    outcomes: [
      "150% increase in conversion rate",
      "Page load time reduced by 70%",
      "Mobile sales increased by 200%",
      "Cart abandonment reduced by 40%",
    ],
    icon: Palette,
    color: "from-orange-500 to-red-500",
    challenge:
      "ShopSmart Retail's e-commerce platform had a 75% cart abandonment rate, slow page loads, and poor mobile experience. They were losing customers to competitors and needed a complete overhaul to stay competitive in the market.",
    solution:
      "We redesigned the entire e-commerce experience with a mobile-first approach, implemented a lightning-fast checkout process, and integrated AI-powered product recommendations. The new platform uses Next.js for optimal performance and Stripe for seamless payment processing.",
    implementation: [
      "Conducted user testing to identify friction points in the customer journey",
      "Created modern, conversion-optimized designs with A/B testing",
      "Built the platform using Next.js with server-side rendering for speed",
      "Implemented Redis caching for instant page loads and product searches",
      "Integrated Stripe for secure, one-click checkout experience",
      "Deployed on Vercel with edge functions for global performance",
    ],
    timeline: "5 months",
    teamSize: "7 professionals (2 UI/UX, 3 developers, 1 QA, 1 DevOps)",
    testimonial: {
      quote:
        "Our sales have skyrocketed since the redesign. The new platform is incredibly fast, and our customers love the streamlined checkout process. OpenTech's expertise in e-commerce UX has been invaluable to our business growth.",
      author: "Jennifer Park",
      position: "CEO, ShopSmart Retail",
    },
    metrics: [
      { label: "Conversion Rate", value: "+150%", description: "Increase in completed purchases" },
      { label: "Load Time", value: "-70%", description: "Faster page performance" },
      { label: "Mobile Sales", value: "+200%", description: "Growth in mobile revenue" },
    ],
  },
  {
    title: "CloudMigrate Enterprise",
    client: "TechCorp Industries",
    category: "DevOps & Cloud Migration",
    description:
      "Complete cloud migration from on-premise infrastructure to AWS with zero downtime, automated CI/CD pipelines, and cost optimization.",
    image: "/cloud-infrastructure-dashboard.png",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring Tools"],
    services: ["Cloud Solutions & Migration", "DevOps & CI/CD", "System Architecture", "IT Support"],
    outcomes: [
      "Zero downtime during migration",
      "50% reduction in infrastructure costs",
      "Deployment time reduced from days to minutes",
      "99.99% system availability",
    ],
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
    challenge:
      "TechCorp Industries was running on expensive on-premise infrastructure with slow deployment cycles and frequent downtime. They needed to migrate to the cloud without disrupting their business operations or losing any data.",
    solution:
      "We executed a comprehensive cloud migration strategy using AWS, containerized all applications with Docker and Kubernetes, and implemented automated CI/CD pipelines. The migration was completed with zero downtime using a phased approach with continuous monitoring.",
    implementation: [
      "Assessed existing infrastructure and created detailed migration roadmap",
      "Containerized applications using Docker for portability and scalability",
      "Set up Kubernetes clusters on AWS EKS for orchestration",
      "Implemented infrastructure as code using Terraform for reproducibility",
      "Built automated CI/CD pipelines with Jenkins and AWS CodePipeline",
      "Executed phased migration with real-time monitoring and rollback capabilities",
    ],
    timeline: "7 months",
    teamSize: "9 professionals (3 DevOps engineers, 2 cloud architects, 2 developers, 2 support)",
    testimonial: {
      quote:
        "The cloud migration was flawless. OpenTech's team managed the entire process with zero downtime, and we're now saving 50% on infrastructure costs while deploying updates in minutes instead of days. Their expertise in DevOps is world-class.",
      author: "David Thompson",
      position: "VP of Engineering, TechCorp Industries",
    },
    metrics: [
      { label: "Cost Savings", value: "50%", description: "Infrastructure cost reduction" },
      { label: "Deployment Speed", value: "99%", description: "Faster release cycles" },
      { label: "System Uptime", value: "99.99%", description: "Availability achieved" },
    ],
  },
  {
    title: "DataInsight Analytics Platform",
    client: "RetailChain Group",
    category: "Data Analytics & BI",
    description:
      "Enterprise business intelligence platform with real-time dashboards, predictive analytics, and automated reporting for retail operations.",
    image: "/business-intelligence-analytics-dashboard.jpg",
    technologies: ["Python", "Apache Spark", "Tableau", "PostgreSQL", "Machine Learning", "REST API"],
    services: ["Data Analytics & BI", "API Development", "System Architecture", "Digital Transformation"],
    outcomes: [
      "Processing 10M+ transactions daily",
      "Inventory optimization saved $2M annually",
      "Decision-making time reduced by 65%",
      "Forecast accuracy improved by 40%",
    ],
    icon: BarChart3,
    color: "from-teal-500 to-green-500",
    challenge:
      "RetailChain Group had data scattered across multiple systems with no unified view of their operations. Decision-making was slow, inventory management was inefficient, and they lacked predictive capabilities to forecast demand.",
    solution:
      "We built a comprehensive business intelligence platform that consolidates data from all sources, provides real-time dashboards, and uses machine learning for predictive analytics. The platform processes millions of transactions daily and delivers actionable insights to stakeholders.",
    implementation: [
      "Designed data warehouse architecture to consolidate multiple data sources",
      "Built ETL pipelines using Apache Spark for processing large datasets",
      "Developed machine learning models for demand forecasting and inventory optimization",
      "Created interactive dashboards using Tableau for real-time visualization",
      "Implemented REST APIs for seamless integration with existing systems",
      "Deployed automated reporting system with scheduled insights delivery",
    ],
    timeline: "9 months",
    teamSize: "11 professionals (2 data architects, 3 data engineers, 3 ML engineers, 2 BI developers, 1 PM)",
    testimonial: {
      quote:
        "DataInsight has transformed how we run our business. We now have real-time visibility into all our operations, and the predictive analytics have saved us millions in inventory costs. OpenTech delivered a solution that exceeded our expectations.",
      author: "Robert Martinez",
      position: "Chief Data Officer, RetailChain Group",
    },
    metrics: [
      { label: "Daily Transactions", value: "10M+", description: "Data processing capacity" },
      { label: "Annual Savings", value: "$2M", description: "Inventory optimization" },
      { label: "Decision Speed", value: "+65%", description: "Faster insights delivery" },
    ],
  },
  {
    title: "FitLife - Fitness & Wellness App",
    client: "WellnessHub Inc",
    category: "Mobile App & AI",
    description:
      "Comprehensive fitness app with AI-powered workout plans, nutrition tracking, and social features for community engagement.",
    image: "/fitness-mobile-app-workout-interface.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "AI/ML", "Push Notifications", "Payment Gateway"],
    services: ["Mobile App Development", "AI Solutions", "UI/UX Design", "API Development"],
    outcomes: [
      "500,000+ downloads in 6 months",
      "4.8-star rating on app stores",
      "80% user retention rate",
      "Featured on App Store",
    ],
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    challenge:
      "WellnessHub Inc wanted to create a fitness app that stands out in a crowded market. They needed personalized workout plans, nutrition tracking, and social features to keep users engaged, but lacked the technical expertise to build it.",
    solution:
      "We developed FitLife, a comprehensive fitness app with AI-powered personalization that adapts workout plans based on user progress. The app includes nutrition tracking, social features for community support, and gamification elements to boost engagement and retention.",
    implementation: [
      "Designed intuitive UI/UX with focus on user engagement and motivation",
      "Built cross-platform app using React Native for iOS and Android",
      "Developed AI algorithms for personalized workout and nutrition recommendations",
      "Implemented social features including challenges, leaderboards, and community forums",
      "Integrated payment gateway for premium subscriptions and in-app purchases",
      "Set up push notification system for workout reminders and motivational messages",
    ],
    timeline: "6 months",
    teamSize: "8 professionals (2 UI/UX, 3 mobile devs, 2 AI engineers, 1 backend dev)",
    testimonial: {
      quote:
        "FitLife has been a massive success. The AI personalization keeps users coming back, and the social features have created an amazing community. OpenTech's team understood our vision and delivered a product that users absolutely love.",
      author: "Amanda Foster",
      position: "Founder & CEO, WellnessHub Inc",
    },
    metrics: [
      { label: "Downloads", value: "500K+", description: "In first 6 months" },
      { label: "App Rating", value: "4.8★", description: "User satisfaction" },
      { label: "Retention Rate", value: "80%", description: "Monthly active users" },
    ],
  },
  {
    title: "SecureBank API Gateway",
    client: "National Bank",
    category: "API Development & Security",
    description:
      "Enterprise-grade API gateway with advanced security features, rate limiting, and comprehensive monitoring for banking services.",
    image: "/api-gateway-security-dashboard.jpg",
    technologies: ["Kong", "OAuth 2.0", "JWT", "Redis", "Elasticsearch", "Grafana"],
    services: ["API Development & Integration", "Cybersecurity & Compliance", "System Architecture", "DevOps"],
    outcomes: ["Handling 1M+ API calls per day", "Zero security breaches", "99.99% API uptime", "PCI DSS compliant"],
    icon: Server,
    color: "from-violet-500 to-purple-500",
    challenge:
      "National Bank needed a secure, scalable API gateway to manage their banking services across multiple channels. Their existing system had security vulnerabilities, lacked proper monitoring, and couldn't handle peak traffic loads.",
    solution:
      "We implemented an enterprise-grade API gateway using Kong with advanced security features including OAuth 2.0, JWT authentication, and rate limiting. The solution includes comprehensive monitoring, logging, and alerting to ensure maximum security and reliability.",
    implementation: [
      "Architected API gateway infrastructure using Kong for high performance",
      "Implemented multi-layer security with OAuth 2.0, JWT, and API key authentication",
      "Set up Redis for caching and rate limiting to handle traffic spikes",
      "Configured Elasticsearch for centralized logging and audit trails",
      "Built monitoring dashboards using Grafana for real-time visibility",
      "Achieved PCI DSS compliance through rigorous security audits",
    ],
    timeline: "8 months",
    teamSize: "10 professionals (3 backend devs, 3 security engineers, 2 DevOps, 2 QA)",
    testimonial: {
      quote:
        "The API gateway has been rock solid since deployment. OpenTech's security expertise gave us confidence in handling sensitive banking data, and the monitoring capabilities have been invaluable. We've had zero security incidents and excellent performance.",
      author: "James Wilson",
      position: "Chief Information Security Officer, National Bank",
    },
    metrics: [
      { label: "API Calls", value: "1M+", description: "Daily request volume" },
      { label: "Security", value: "0", description: "Breaches since launch" },
      { label: "Uptime", value: "99.99%", description: "API availability" },
    ],
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category.split(" & ")[0])))]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category.includes(selectedCategory))

  const openCaseStudy = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsCaseStudyOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Portfolio</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Projects Delivered</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries. Each project showcases our
              expertise in delivering innovative solutions that drive real business results.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-in-up animation-delay-200">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-accent/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <ImageWatermark position="top-right" size="sm" />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-background/80 backdrop-blur-sm">{project.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{project.client}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-accent" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Server className="h-4 w-4 text-accent" />
                        Services Provided
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-accent/30">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Case Study Button */}
                    <Button
                      variant="outline"
                      className="w-full group/btn hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
                      onClick={() => openCaseStudy(project)}
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal isOpen={isCaseStudyOpen} onClose={() => setIsCaseStudyOpen(false)} project={selectedProject} />
      )}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Let's discuss how we can help transform your ideas into successful digital solutions. Our team is ready to
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <a href="/contact">
                  <span>Start Your Project</span>
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#services">View All Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
