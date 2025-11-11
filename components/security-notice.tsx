"use client"

import { useState } from "react"
import { Shield, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SecurityNotice() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm bg-card border border-border rounded-lg shadow-lg p-4 animate-slide-in-right">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-sm">Content Protection Active</h3>
            <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1" onClick={() => setIsVisible(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            All content on this website is protected by copyright and intellectual property laws.
          </p>
          <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
            <AlertTriangle className="h-3 w-3 mt-0.5 flex-shrink-0" />
            <span>Copying, downloading, or unauthorized use is prohibited.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
