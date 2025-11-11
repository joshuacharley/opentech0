"use client"

import { useState, useEffect } from "react"
import { Search, X, FileText, Briefcase, Users, BookOpen, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface SearchResult {
  title: string
  description: string
  url: string
  type: "blog" | "project" | "team" | "service"
  icon: any
}

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Open search with Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Simulate search functionality
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    setIsSearching(true)
    const timer = setTimeout(() => {
      // Mock search results - in production, this would query your actual content
      const mockResults: SearchResult[] = [
        {
          title: "AI-Powered Solutions",
          description: "Leverage cutting-edge AI technology for your business",
          url: "/#services",
          type: "service",
          icon: FileText,
        },
        {
          title: "FinanceHub Banking Platform",
          description: "Enterprise banking solution with real-time analytics",
          url: "/projects",
          type: "project",
          icon: Briefcase,
        },
        {
          title: "The Future of AI in Software Development",
          description: "Exploring how AI is transforming the development landscape",
          url: "/blog",
          type: "blog",
          icon: BookOpen,
        },
        {
          title: "Sarah Johnson - Lead Developer",
          description: "Full-stack developer with 8+ years experience",
          url: "/team",
          type: "team",
          icon: Users,
        },
      ]

      const filtered = mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        className="hidden md:flex items-center gap-2 text-muted-foreground bg-transparent"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span className="text-sm">Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg shadow-2xl animate-slide-up">
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects, blog posts, team members..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="max-h-[400px] overflow-y-auto p-2">
            {isSearching ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-1">
                {results.map((result, index) => {
                  const Icon = result.icon
                  return (
                    <Link
                      key={index}
                      href={result.url}
                      onClick={() => setIsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">
                          {result.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{result.description}</div>
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">{result.type}</div>
                    </Link>
                  )
                })}
              </div>
            ) : query.length >= 2 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No results found for "{query}"</p>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-sm">Start typing to search...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
