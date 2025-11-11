import { Shield } from "lucide-react"

interface ImageWatermarkProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  size?: "sm" | "md" | "lg"
}

export function ImageWatermark({ position = "bottom-right", size = "sm" }: ImageWatermarkProps) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  }

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} bg-black/60 backdrop-blur-sm text-white rounded-md flex items-center gap-1.5 z-10 pointer-events-none select-none`}
    >
      <Shield className="h-3 w-3" />
      <span className="font-semibold">OpenTech</span>
    </div>
  )
}
