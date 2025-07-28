"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calculator, X } from "lucide-react"

export function StickyMobileCTAs() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTAs after scrolling past hero section
      const heroHeight = window.innerHeight * 0.8
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      {/* Main CTA Button */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full p-4 shadow-lg"
          size="icon"
        >
          {isExpanded ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
        </Button>

        {/* Expanded Menu */}
        {isExpanded && (
          <div className="absolute right-0 top-16 bg-white rounded-lg shadow-xl border p-2 min-w-[200px]">
            <div className="space-y-2">
              <Button
                asChild
                className="w-full bg-red-600 hover:bg-red-700 text-white justify-start"
                onClick={() => setIsExpanded(false)}
              >
                <a href="tel:+2348012345678">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Hotline
                </a>
              </Button>
              <Button
                asChild
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white justify-start"
                onClick={() => setIsExpanded(false)}
              >
                <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </a>
              </Button>
              <Button
                className="w-full bg-brand-blue-dark hover:bg-brand-blue text-white justify-start"
                onClick={() => {
                  const element = document.getElementById("calculator")
                  element?.scrollIntoView({ behavior: "smooth" })
                  setIsExpanded(false)
                }}
              >
                <Calculator className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
