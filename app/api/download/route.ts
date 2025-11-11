import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get("type") || ""
    const file = searchParams.get("file") || ""
    const format = searchParams.get("format") || "txt"

    const content = generateSimpleContent(type, file, format)
    const filename = `${file}.${format}`

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    console.error("[v0] Download API error:", error)
    return new NextResponse("Download failed", { status: 500 })
  }
}

function generateSimpleContent(type: string, file: string, format: string): string {
  const title = file
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return `
╔════════════════════════════════════════════════════════════════╗
║                         OPENTECH                               ║
║                  Professional Technology Solutions              ║
╚════════════════════════════════════════════════════════════════╝

${title.toUpperCase()}
Category: ${type.toUpperCase()}
Format: ${format.toUpperCase()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOCUMENT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This comprehensive ${type} document provides detailed information about
${title}. OpenTech has prepared this resource to help you understand
best practices, implementation strategies, and real-world applications.

KEY HIGHLIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Industry-leading insights and expertise
✓ Proven methodologies and frameworks
✓ Real-world case studies and examples
✓ Actionable recommendations
✓ Best practices from 150+ successful projects

MAIN CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${getDetailedContent(type, file)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ABOUT OPENTECH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OpenTech is a leading technology solutions provider specializing in:

• Custom Software Development
• Cloud Solutions & Migration
• AI & Machine Learning Integration
• Mobile App Development
• DevOps & Infrastructure
• UI/UX Design

With 6+ years of experience and 150+ successful projects delivered,
we help businesses transform through technology.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email: info@opentech.com
📞 Phone: +1 (555) 123-4567
🌐 Website: www.opentech.com
📍 Address: 123 Tech Street, Silicon Valley, CA 94025

Schedule a free consultation: www.opentech.com/contact

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

© ${new Date().getFullYear()} OpenTech. All Rights Reserved.
This document is proprietary and confidential.

Document ID: OT-${type.toUpperCase()}-${Date.now()}
Generated: ${new Date().toLocaleString()}
Format: ${format.toUpperCase()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
}

function getDetailedContent(type: string, file: string): string {
  if (type === "whitepapers") {
    return `
EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This whitepaper explores cutting-edge strategies and methodologies for
modern technology implementation. Based on our extensive experience with
150+ successful projects, we provide actionable insights that drive
business transformation.

INTRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In today's rapidly evolving digital landscape, organizations must adapt
quickly to remain competitive. This document provides a comprehensive
framework for successful technology adoption and implementation.

KEY TOPICS COVERED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Strategic Planning
   • Assessment and analysis
   • Goal setting and KPIs
   • Roadmap development

2. Technology Selection
   • Evaluation criteria
   • Vendor assessment
   • Cost-benefit analysis

3. Implementation Strategy
   • Phased approach
   • Risk mitigation
   • Change management

4. Best Practices
   • Industry standards
   • Security considerations
   • Performance optimization

5. Measuring Success
   • Key metrics
   • ROI calculation
   • Continuous improvement

CONCLUSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Successful technology implementation requires careful planning, expert
execution, and ongoing optimization. OpenTech has the expertise and
experience to guide your organization through this journey.
`
  }

  if (type === "case-studies") {
    return `
CLIENT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Industry: Technology Services
Project Duration: 6-12 months
Team Size: 10-15 professionals
Budget: Enterprise-level investment

THE CHALLENGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Our client faced significant challenges with their legacy systems:
• Scalability limitations
• Poor user experience
• High maintenance costs
• Security vulnerabilities
• Integration difficulties

OUR SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We implemented a comprehensive modernization strategy:

Technology Stack:
• Frontend: React, Next.js, TypeScript
• Backend: Node.js, Python
• Database: PostgreSQL, Redis
• Cloud: AWS/Azure
• DevOps: Docker, Kubernetes

Key Features:
✓ Modern, responsive UI/UX
✓ Scalable microservices architecture
✓ Real-time data processing
✓ Advanced security measures
✓ Comprehensive API integration
✓ Mobile applications

RESULTS ACHIEVED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 300% increase in user engagement
⚡ 5x improvement in performance
💰 40% reduction in operational costs
🔒 Zero security incidents
⭐ 95% customer satisfaction rating
🚀 Successful launch on schedule

CLIENT TESTIMONIAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"OpenTech exceeded our expectations in every way. Their expertise,
professionalism, and commitment to our success made this project
a tremendous achievement for our organization."

LESSONS LEARNED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Clear communication is essential
• Agile methodology enables flexibility
• User feedback drives improvement
• Security must be built-in from the start
• Continuous testing ensures quality
`
  }

  if (type === "technical-guides") {
    return `
INTRODUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This technical guide provides comprehensive instructions and best
practices for implementing modern software solutions. Based on our
extensive experience, we share proven methodologies that ensure success.

PREREQUISITES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Basic understanding of software development
• Familiarity with modern web technologies
• Access to development environment
• Understanding of version control (Git)

STEP-BY-STEP GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Environment Setup
• Install required tools and dependencies
• Configure development environment
• Set up version control
• Establish coding standards

Step 2: Architecture Design
• Define system components
• Plan data models
• Design API structure
• Consider scalability

Step 3: Implementation
• Follow coding best practices
• Write clean, maintainable code
• Implement proper error handling
• Add comprehensive logging

Step 4: Testing
• Unit testing
• Integration testing
• End-to-end testing
• Performance testing

Step 5: Deployment
• Prepare production environment
• Configure CI/CD pipeline
• Deploy application
• Monitor and optimize

BEST PRACTICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Write self-documenting code
✓ Follow SOLID principles
✓ Implement proper security measures
✓ Use design patterns appropriately
✓ Optimize for performance
✓ Plan for scalability
✓ Document thoroughly

COMMON PITFALLS TO AVOID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Premature optimization
✗ Ignoring security
✗ Poor error handling
✗ Inadequate testing
✗ Lack of documentation
✗ Tight coupling
✗ Ignoring scalability

TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Common issues and solutions:
• Performance problems → Profile and optimize
• Security vulnerabilities → Regular audits
• Scaling issues → Horizontal scaling
• Integration failures → Proper error handling

ADDITIONAL RESOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Official documentation
• Community forums
• Video tutorials
• Code examples
• Support channels
`
  }

  if (type === "templates") {
    return `
TEMPLATE INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This template provides a structured format for creating professional
documentation. Fill in the sections below with your specific information.

HOW TO USE THIS TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Review all sections
2. Replace placeholder text with your content
3. Remove sections that don't apply
4. Add additional sections as needed
5. Review and finalize

TEMPLATE SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[SECTION 1: OVERVIEW]
Replace this with your overview content...

[SECTION 2: DETAILS]
Replace this with detailed information...

[SECTION 3: REQUIREMENTS]
List your requirements here...

[SECTION 4: SPECIFICATIONS]
Add technical specifications...

[SECTION 5: TIMELINE]
Include project timeline...

[SECTION 6: RESOURCES]
List required resources...

[SECTION 7: APPROVAL]
Add approval section...

CUSTOMIZATION TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Adapt sections to your needs
• Use consistent formatting
• Include relevant examples
• Add visual elements if helpful
• Keep it concise and clear

SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Need help customizing this template?
Contact OpenTech for assistance:
Email: info@opentech.com
Phone: +1 (555) 123-4567
`
  }

  if (type === "videos") {
    return `
VIDEO TUTORIAL TRANSCRIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Video Title: ${file
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")}
Duration: 30-60 minutes
Format: MP4 (1080p)
Language: English with subtitles

VIDEO OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This comprehensive video tutorial covers essential topics and provides
hands-on demonstrations of key concepts. Perfect for both beginners
and experienced professionals.

WHAT YOU'LL LEARN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Core concepts and fundamentals
✓ Practical implementation techniques
✓ Best practices and patterns
✓ Real-world examples
✓ Common pitfalls to avoid
✓ Tips and tricks from experts

VIDEO CHAPTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

00:00 - Introduction and Overview
05:00 - Getting Started
15:00 - Core Concepts
25:00 - Practical Examples
35:00 - Advanced Topics
45:00 - Best Practices
55:00 - Q&A and Conclusion

KEY TAKEAWAYS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Understanding fundamental principles
• Implementing solutions effectively
• Following industry best practices
• Avoiding common mistakes
• Optimizing for performance
• Ensuring security and reliability

RESOURCES MENTIONED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Documentation links
• Code examples
• Additional tutorials
• Community forums
• Support channels

NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Practice the concepts covered
2. Explore additional resources
3. Join our community
4. Contact us for consultation

For more tutorials and resources, visit:
Website: www.opentech.com
Email: info@opentech.com
`
  }

  // Default content
  return `
PROFESSIONAL RESOURCE DOCUMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This document provides valuable insights and information to help you
succeed in your technology initiatives. OpenTech is committed to
sharing knowledge and expertise with our clients and partners.

CONTENT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Comprehensive coverage of key topics
• Practical examples and case studies
• Best practices from industry experts
• Actionable recommendations
• Real-world applications

WHY THIS MATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Understanding these concepts is crucial for:
✓ Making informed decisions
✓ Implementing effective solutions
✓ Avoiding common pitfalls
✓ Achieving business objectives
✓ Staying competitive

GET STARTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ready to transform your business with technology?
Contact OpenTech for a free consultation.

We'll help you:
• Assess your current situation
• Define clear objectives
• Develop a strategic roadmap
• Implement effective solutions
• Achieve measurable results
`
}
