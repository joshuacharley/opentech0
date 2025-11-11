"use client"

import { useEffect } from "react"
import { Shield } from "lucide-react"

export function ContentProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable keyboard shortcuts for copying
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+C, Cmd+C, Ctrl+X, Cmd+X, Ctrl+S, Cmd+S, Ctrl+P, Cmd+P
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "c" || e.key === "x" || e.key === "s" || e.key === "p" || e.key === "u")
      ) {
        e.preventDefault()
        return false
      }

      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools)
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C"))
      ) {
        e.preventDefault()
        return false
      }

      // Disable PrintScreen
      if (e.key === "PrintScreen") {
        e.preventDefault()
        return false
      }
    }

    // Disable drag and drop for images
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection on specific elements
    const handleSelectStart = (e: Event) => {
      const target = e.target as Node

      // Check if target is an Element (has closest method)
      if (target instanceof Element) {
        if (target.closest(".protected-content") || target.tagName === "IMG" || target.closest("img")) {
          e.preventDefault()
          return false
        }
      } else if (target.parentElement) {
        // If target is a text node, check its parent element
        if (
          target.parentElement.closest(".protected-content") ||
          target.parentElement.tagName === "IMG" ||
          target.parentElement.closest("img")
        ) {
          e.preventDefault()
          return false
        }
      }
    }

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("dragstart", handleDragStart)
    document.addEventListener("selectstart", handleSelectStart)

    // Disable copy event
    document.addEventListener("copy", (e) => {
      e.preventDefault()
      return false
    })

    // Disable cut event
    document.addEventListener("cut", (e) => {
      e.preventDefault()
      return false
    })

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("selectstart", handleSelectStart)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 flex items-center gap-2 text-xs text-primary pointer-events-none">
      <Shield className="h-3 w-3" />
      <span>Content Protected</span>
    </div>
  )
}
