"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Github, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ImageWatermark } from "@/components/image-watermark";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
  github: string;
  expertise: string[];
  phone?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Joshua Charley",
    position: "CEO, Co-Founder & Senior Software Engineer",
    bio: "Experienced software engineer and entrepreneur passionate about building innovative technology solutions. Leading OpenTech with a vision to transform businesses through cutting-edge software development.",
    image: "/professional-ceo-software-engineer-leader.jpg",
    linkedin: "https://www.linkedin.com/in/joshua-charley-63b8a0145/",
    email: "info.opentech0@gmail.com",
    github: "https://github.com/joshuacharley/",
    expertise: [
      "Leadership",
      "Full-Stack Development",
      "Software Architecture",
    ],
  },

  {
    id: 3,
    name: "Michael Chen",
    position: "CTO & Co-Founder",
    bio: "Full-stack architect with expertise in scalable systems. Led development teams at Fortune 500 companies.",
    image: "/professional-asian-man-cto-tech-expert.jpg",
    linkedin: "#",
    email: "michael@opentech.com",
    github: "#",
    expertise: ["System Architecture", "Cloud Infrastructure", "DevOps"],
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Lead UI/UX Designer",
    bio: "Award-winning designer focused on creating intuitive and beautiful user experiences that drive engagement.",
    image: "/professional-woman-designer-creative.jpg",
    linkedin: "#",
    email: "emily@opentech.com",
    github: "#",
    expertise: ["UI/UX Design", "User Research", "Prototyping"],
  },
  {
    id: 5,
    name: "David Williams",
    position: "Senior DevOps Engineer",
    bio: "Infrastructure specialist with deep knowledge of CI/CD pipelines and cloud automation.",
    image: "/professional-devops-engineer.png",
    linkedin: "#",
    email: "david@opentech.com",
    github: "#",
    expertise: ["DevOps", "Kubernetes", "AWS/Azure"],
  },
  {
    id: 6,
    name: "James Anderson",
    position: "AI/ML Engineer",
    bio: "Machine learning expert specializing in computer vision and natural language processing applications.",
    image: "/professional-man-ai-engineer-data-scientist.jpg",
    linkedin: "#",
    email: "james@opentech.com",
    github: "#",
    expertise: ["AI/ML", "Python", "TensorFlow"],
  },
  {
    id: 7,
    name: "Lisa Martinez",
    position: "Mobile Development Lead",
    bio: "Cross-platform mobile specialist with a track record of building high-performance apps for iOS and Android.",
    image: "/professional-woman-mobile-developer.jpg",
    linkedin: "#",
    email: "lisa@opentech.com",
    github: "#",
    expertise: ["React Native", "Flutter", "Mobile UX"],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A diverse group of passionate technologists dedicated to
              transforming your ideas into reality.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWatermark position="bottom-right" size="sm" />
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-pretty">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Link
                      href={member.linkedin}
                      className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </Link>
                    <Link
                      href={member.github}
                      className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                    {member.phone && (
                      <Link
                        href={`tel:${member.phone}`}
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                        aria-label="Phone"
                      >
                        <Phone className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Join Team CTA */}
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              We're always looking for talented individuals who are passionate
              about technology and innovation.
            </p>
            <Link href="/careers">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                View Open Positions
              </button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
