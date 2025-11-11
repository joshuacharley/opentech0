"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MapBox() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  // Coordinates for Freetown, Lumley, Western Area, Sierra Leone
  const latitude = 8.4657
  const longitude = -13.2317
  const address = "81a Kaningo Road, Western Area, Freetown 01232, Sierra Leone"

  // Mapbox token
  const mapboxToken =
    "pk.eyJ1Ijoiam9zaHVhc2FtYWNoYXJsZXkiLCJhIjoiY21nbjJ0eDdvMDc2OTJqcjJoeHp4ZmdtdyJ9.XuubC4KNA_RZduOLcuz2UQ"

  // Google Maps URL for opening in new tab
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`

  useEffect(() => {
    if (map.current || !mapContainer.current) return

    // Load Mapbox GL JS from CDN
    const loadMapbox = async () => {
      try {
        // Add Mapbox CSS
        if (!document.querySelector('link[href*="mapbox-gl.css"]')) {
          const link = document.createElement("link")
          link.href = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css"
          link.rel = "stylesheet"
          document.head.appendChild(link)
        }

        // Load Mapbox GL JS
        if (!(window as any).mapboxgl) {
          const script = document.createElement("script")
          script.src = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js"
          script.async = true
          document.body.appendChild(script)

          await new Promise((resolve, reject) => {
            script.onload = resolve
            script.onerror = reject
          })
        }

        const mapboxgl = (window as any).mapboxgl
        mapboxgl.accessToken = mapboxToken

        // Initialize map
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [longitude, latitude],
          zoom: 14,
          pitch: 45,
          bearing: 0,
        })

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

        // Add marker with popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2">
            <h3 class="font-semibold text-sm mb-1">OpenTech Office</h3>
            <p class="text-xs text-gray-600">${address}</p>
          </div>`,
        )

        new mapboxgl.Marker({ color: "#8b5cf6" }).setLngLat([longitude, latitude]).setPopup(popup).addTo(map.current)

        // Show popup on load
        map.current.on("load", () => {
          setIsLoaded(true)
          popup.addTo(map.current)
        })

        // Add 3D buildings
        map.current.on("load", () => {
          const layers = map.current.getStyle().layers
          const labelLayerId = layers.find((layer: any) => layer.type === "symbol" && layer.layout["text-field"])?.id

          map.current.addLayer(
            {
              id: "3d-buildings",
              source: "composite",
              "source-layer": "building",
              filter: ["==", "extrude", "true"],
              type: "fill-extrusion",
              minzoom: 15,
              paint: {
                "fill-extrusion-color": "#aaa",
                "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "height"]],
                "fill-extrusion-base": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "min_height"]],
                "fill-extrusion-opacity": 0.6,
              },
            },
            labelLayerId,
          )
        })
      } catch (error) {
        console.error("[v0] Error loading Mapbox:", error)
        setMapError(true)
        setIsLoaded(true)
      }
    }

    loadMapbox()

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [latitude, longitude, mapboxToken, address])

  if (mapError) {
    // Fallback to static map if Mapbox fails to load
    return (
      <div className="relative">
        <div className="relative h-[500px] w-full rounded-lg overflow-hidden bg-muted animate-fade-in">
          <iframe
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`}
            className="w-full h-full border-0"
            title="OpenTech Office Location - Freetown, Sierra Leone"
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border animate-slide-in-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 animate-pulse">
              <Navigation className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">OpenTech Office</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{address}</p>
              <Button variant="link" size="sm" className="h-auto p-0 mt-2 text-xs" asChild>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Map Container */}
      <div className="relative h-[500px] w-full rounded-lg overflow-hidden bg-muted animate-fade-in">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Loading interactive map...</p>
            </div>
          </div>
        )}

        <div ref={mapContainer} className="w-full h-full" />
      </div>

      {/* Location Info Overlay */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-4 border animate-slide-in-left">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 animate-pulse">
            <Navigation className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-1">OpenTech Office</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{address}</p>
            <Button variant="link" size="sm" className="h-auto p-0 mt-2 text-xs" asChild>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:gap-2 transition-all"
              >
                Open in Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
