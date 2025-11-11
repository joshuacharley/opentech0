"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ImageWatermark } from "@/components/image-watermark"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    image: "/ai-artificial-intelligence-coding-development.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Best practices and architectural patterns for creating high-performance mobile applications.",
    author: "Michael Chen",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Mobile Development",
    image: "/mobile-app-development-react-native.jpg",
  },
  {
    id: 3,
    title: "DevOps Best Practices for 2025",
    excerpt: "Learn the latest DevOps strategies to streamline your development and deployment processes.",
    author: "David Williams",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "DevOps",
    image: "/devops-automation-cloud-infrastructure.jpg",
  },
  {
    id: 4,
    title: "UI/UX Design Trends Shaping User Experience",
    excerpt: "Discover the design principles and trends that are defining modern user interfaces.",
    author: "Emily Rodriguez",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "UI/UX Design",
    image: "/ui-ux-design-modern-interface.jpg",
  },
  {
    id: 5,
    title: "GPS Tracking Solutions for Fleet Management",
    excerpt: "How real-time GPS tracking software is transforming logistics and fleet operations.",
    author: "James Anderson",
    date: "2024-12-20",
    readTime: "5 min read",
    category: "GPS & Tracking",
    image: "/gps-tracking-fleet-management-map.jpg",
  },
  {
    id: 6,
    title: "Cybersecurity Essentials for Modern Applications",
    excerpt: "Protect your applications with these critical security practices and tools.",
    author: "Sarah Johnson",
    date: "2024-12-15",
    readTime: "9 min read",
    category: "Security",
    image: "/cybersecurity-protection-shield-lock.jpg",
  },
]

const categories = [
  "All",
  "AI & Machine Learning",
  "Mobile Development",
  "DevOps",
  "UI/UX Design",
  "GPS & Tracking",
  "Security",
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Insights & <span className="text-primary">Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay updated with the latest trends, best practices, and insights from the OpenTech team.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === "All" && !searchQuery && (
            <Card className="mb-12 overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-up">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <ImageWatermark src={featuredPost.image || "/placeholder.svg"} alt={featuredPost.title} />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-primary mb-2">FEATURED</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured || selectedCategory !== "All" || searchQuery)
              .map((post, index) => (
                <Card
                  key={post.id}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWatermark src={post.image || "/placeholder.svg"} alt={post.title} />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary mb-2 block">{post.category}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3 text-pretty">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full group/btn bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
