"use client"

import { useState, useEffect } from "react"
import { Phone, Calculator, Home, Menu } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MobileBottomNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down hide the navbar
          setIsVisible(false)
        } else {
          // if scroll up show the navbar
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const navItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Home",
      href: "#",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      label: "Quote",
      href: "#calculator",
      action: () => {
        const element = document.getElementById("calculator")
        element?.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call",
      href: "tel:+2348012345678",
      action: null,
      primary: true,
    },
    {
      icon: <FaWhatsapp className="h-5 w-5 text-green-500" />,
      label: "WhatsApp",
      href: "https://wa.me/2348012345678",
      action: null,
      external: true,
    },
    {
      icon: <Menu className="h-5 w-5" />,
      label: "Menu",
      href: "#",
      action: () => setIsMenuOpen(true),
    },
  ]

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#credibility", label: "Credibility" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Bottom Navigation - Mobile Only */}
      <nav
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-around py-2 px-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex-1">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center py-2 px-1 text-xs transition-colors ${
                    item.primary
                      ? "text-white bg-brand-green rounded-lg mx-1"
                      : "text-brand-gray-dark hover:text-brand-green"
                  }`}
                >
                  {item.icon}
                  <span className="mt-1 text-xs">{item.label}</span>
                </a>
              ) : (
                <button
                  onClick={item.action || (() => {})}
                  className={`w-full flex flex-col items-center py-2 px-1 text-xs transition-colors ${
                    item.primary
                      ? "text-white bg-brand-green rounded-lg mx-1"
                      : "text-brand-gray-dark hover:text-brand-green"
                  }`}
                >
                  {item.icon}
                  <span className="mt-1 text-xs">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Menu Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-full max-w-sm p-0">
          <div className="flex flex-col h-full bg-brand-blue-dark text-white">
            <div className="p-6 border-b border-brand-blue">
              <div className="flex items-center gap-3">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_Oil_and_Gas.png" width={40} height={40} alt="Lynphyl Oil & Gas Logo" />
                <span className="font-bold text-xl">Lynphyl O&G</span>
              </div>
            </div>
            <nav className="flex flex-col gap-2 p-6">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    element?.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                  className="text-xl font-medium p-3 rounded-lg hover:bg-brand-blue transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto p-6 border-t border-brand-blue">
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-lg py-6 rounded-full"
                >
                  <a href="tel:+2348012345678">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Emergency Line
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-brand-blue-dark text-lg py-6 rounded-full bg-transparent"
                >
                  <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-5 w-5 mr-2 text-green-500" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
