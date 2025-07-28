"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function EnhancedClickToCall() {
  const [showPulse, setShowPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse(true)
      setTimeout(() => setShowPulse(false), 2000)
    }, 10000) // Pulse every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      {/* Primary Emergency Hotline */}
      <motion.div
        className="relative"
        animate={showPulse ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 1, repeat: showPulse ? 2 : 0 }}
      >
        <Button
          asChild
          size="lg"
          className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-4 rounded-full relative overflow-hidden group"
        >
          <a href="tel:+2348012345678">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center justify-center gap-3">
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="font-bold">24/7 Emergency Hotline</div>
                <div className="text-sm opacity-90">+234 801 234 5678</div>
              </div>
            </div>
          </a>
        </Button>

        {/* Pulse Ring Animation */}
        <AnimatePresence>
          {showPulse && (
            <motion.div
              className="absolute inset-0 border-2 border-red-400 rounded-full"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 1.2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: 1 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Business Hours Call */}
      <Button
        asChild
        size="lg"
        variant="outline"
        className="w-full border-brand-blue-dark text-brand-blue-dark hover:bg-brand-blue-dark hover:text-white text-lg py-4 rounded-full bg-transparent"
      >
        <a href="tel:+2348012345678">
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-5 w-5" />
            <div className="text-left">
              <div className="font-semibold">Business Hours</div>
              <div className="text-sm opacity-75">Mon-Fri: 8AM-6PM</div>
            </div>
          </div>
        </a>
      </Button>

      {/* Location-Based Call */}
      <div className="text-center">
        <p className="text-sm text-brand-gray-dark mb-2">Calling from Lagos?</p>
        <Button asChild variant="ghost" className="text-brand-green hover:text-brand-green hover:bg-brand-green-light">
          <a href="tel:+2348012345678">
            <MapPin className="h-4 w-4 mr-2" />
            Local Lagos Line: +234 801 234 5678
          </a>
        </Button>
      </div>
    </div>
  )
}
