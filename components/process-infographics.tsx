"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, FileText, Truck, MapPin, CheckCircle, Clock, Shield, Fuel, ArrowRight, Play, Pause } from "lucide-react"
import { motion } from "framer-motion"

export function ProcessInfographics() {
  const [activeProcess, setActiveProcess] = useState<"order" | "delivery" | "safety">("order")
  const [isAnimating, setIsAnimating] = useState(false)

  const processes = {
    order: {
      title: "Order Process Flow",
      description: "From inquiry to delivery confirmation in 6 simple steps",
      steps: [
        {
          icon: <Phone className="h-8 w-8" />,
          title: "Initial Contact",
          description: "Call, WhatsApp, or submit online quote request",
          duration: "5 minutes",
          color: "bg-blue-500",
        },
        {
          icon: <FileText className="h-8 w-8" />,
          title: "Quote Generation",
          description: "Receive detailed pricing and delivery timeline",
          duration: "30 minutes",
          color: "bg-green-500",
        },
        {
          icon: <CheckCircle className="h-8 w-8" />,
          title: "Order Confirmation",
          description: "Approve quote and provide delivery details",
          duration: "15 minutes",
          color: "bg-orange-500",
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: "Dispatch & Loading",
          description: "Truck assigned, fuel loaded with quality checks",
          duration: "2-4 hours",
          color: "bg-purple-500",
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          title: "Real-time Tracking",
          description: "GPS tracking with live updates to customer",
          duration: "In transit",
          color: "bg-red-500",
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Delivery & Confirmation",
          description: "Safe delivery with documentation and payment",
          duration: "30 minutes",
          color: "bg-brand-green",
        },
      ],
    },
    delivery: {
      title: "Nationwide Delivery Network",
      description: "How we ensure reliable fuel supply across all 36 states",
      steps: [
        {
          icon: <Fuel className="h-8 w-8" />,
          title: "Depot Sourcing",
          description: "Strategic partnerships with certified fuel depots",
          duration: "24/7 Access",
          color: "bg-blue-600",
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: "Fleet Management",
          description: "30+ trucks with GPS tracking and safety systems",
          duration: "Real-time",
          color: "bg-green-600",
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          title: "Route Optimization",
          description: "AI-powered routing for fastest delivery times",
          duration: "Dynamic",
          color: "bg-orange-600",
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Safety Protocols",
          description: "HSE compliance and emergency response systems",
          duration: "Continuous",
          color: "bg-purple-600",
        },
        {
          icon: <CheckCircle className="h-8 w-8" />,
          title: "Quality Assurance",
          description: "Pre-delivery testing and certification",
          duration: "Every load",
          color: "bg-red-600",
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: "Customer Support",
          description: "24/7 emergency response and customer service",
          duration: "Always on",
          color: "bg-brand-green",
        },
      ],
    },
    safety: {
      title: "Safety & Compliance Framework",
      description: "Our comprehensive approach to safe fuel transportation",
      steps: [
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Driver Certification",
          description: "Hazmat certified drivers with regular training",
          duration: "Annual",
          color: "bg-red-600",
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: "Vehicle Inspection",
          description: "Daily safety checks and maintenance schedules",
          duration: "Daily",
          color: "bg-orange-600",
        },
        {
          icon: <FileText className="h-8 w-8" />,
          title: "Documentation",
          description: "Complete regulatory compliance and permits",
          duration: "Updated",
          color: "bg-blue-600",
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          title: "Route Planning",
          description: "Safe route selection avoiding high-risk areas",
          duration: "Pre-trip",
          color: "bg-green-600",
        },
        {
          icon: <Phone className="h-8 w-8" />,
          title: "Emergency Response",
          description: "24/7 emergency hotline and response team",
          duration: "24/7",
          color: "bg-purple-600",
        },
        {
          icon: <CheckCircle className="h-8 w-8" />,
          title: "Incident Reporting",
          description: "Comprehensive reporting and continuous improvement",
          duration: "Immediate",
          color: "bg-brand-green",
        },
      ],
    },
  }

  const startAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 6000) // 6 seconds for full cycle
  }

  return (
    <div className="space-y-8">
      {/* Process Selector */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => setActiveProcess("order")}
          variant={activeProcess === "order" ? "default" : "outline"}
          className={`${activeProcess === "order" ? "bg-brand-green hover:bg-brand-green/90" : ""}`}
        >
          Order Process
        </Button>
        <Button
          onClick={() => setActiveProcess("delivery")}
          variant={activeProcess === "delivery" ? "default" : "outline"}
          className={`${activeProcess === "delivery" ? "bg-brand-green hover:bg-brand-green/90" : ""}`}
        >
          Delivery Network
        </Button>
        <Button
          onClick={() => setActiveProcess("safety")}
          variant={activeProcess === "safety" ? "default" : "outline"}
          className={`${activeProcess === "safety" ? "bg-brand-green hover:bg-brand-green/90" : ""}`}
        >
          Safety Framework
        </Button>
      </div>

      {/* Animation Control */}
      <div className="text-center">
        <Button
          onClick={startAnimation}
          disabled={isAnimating}
          className="bg-brand-blue-dark hover:bg-brand-blue text-white"
        >
          {isAnimating ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Animation Running...
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Watch Process Flow
            </>
          )}
        </Button>
      </div>

      {/* Process Flow Diagram */}
      <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">{processes[activeProcess].title}</h3>
          <p className="text-brand-gray-dark">{processes[activeProcess].description}</p>
        </div>

        {/* Desktop Flow - Horizontal */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />

            {processes[activeProcess].steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center max-w-[150px]">
                <motion.div
                  className={`${step.color} text-white p-4 rounded-full mb-4 shadow-lg`}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={
                    isAnimating
                      ? {
                          scale: [0.8, 1.1, 1],
                          opacity: [0.5, 1, 1],
                        }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{
                    delay: isAnimating ? index * 0.8 : 0,
                    duration: 0.6,
                  }}
                >
                  {step.icon}
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isAnimating
                      ? {
                          y: [20, 0],
                          opacity: [0, 1],
                        }
                      : { y: 0, opacity: 1 }
                  }
                  transition={{
                    delay: isAnimating ? index * 0.8 + 0.3 : 0,
                    duration: 0.4,
                  }}
                >
                  <h4 className="font-bold text-brand-blue-dark mb-2 text-sm">{step.title}</h4>
                  <p className="text-xs text-brand-gray-dark mb-2">{step.description}</p>
                  <span className="text-xs bg-brand-green-light text-brand-green px-2 py-1 rounded-full">
                    {step.duration}
                  </span>
                </motion.div>

                {/* Arrow */}
                {index < processes[activeProcess].steps.length - 1 && (
                  <motion.div
                    className="absolute -right-6 top-8 text-brand-green"
                    initial={{ x: -10, opacity: 0 }}
                    animate={
                      isAnimating
                        ? {
                            x: [-10, 0],
                            opacity: [0, 1],
                          }
                        : { x: 0, opacity: 1 }
                    }
                    transition={{
                      delay: isAnimating ? index * 0.8 + 0.5 : 0,
                      duration: 0.3,
                    }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Flow - Vertical */}
        <div className="md:hidden space-y-6">
          {processes[activeProcess].steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={
                isAnimating
                  ? {
                      x: [-20, 0],
                      opacity: [0, 1],
                    }
                  : { x: 0, opacity: 1 }
              }
              transition={{
                delay: isAnimating ? index * 0.5 : 0,
                duration: 0.4,
              }}
            >
              <div className={`${step.color} text-white p-3 rounded-full flex-shrink-0`}>{step.icon}</div>
              <div className="flex-1">
                <h4 className="font-bold text-brand-blue-dark mb-1">{step.title}</h4>
                <p className="text-sm text-brand-gray-dark mb-2">{step.description}</p>
                <span className="text-xs bg-brand-green-light text-brand-green px-2 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>

              {/* Vertical Arrow */}
              {index < processes[activeProcess].steps.length - 1 && (
                <div className="absolute left-6 mt-16 text-brand-green">
                  <div className="w-1 h-6 bg-brand-green-light" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Process Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center border-l-4 border-brand-green">
          <div className="text-2xl font-bold text-brand-blue-dark">98%</div>
          <div className="text-sm text-brand-gray-dark">On-Time Delivery</div>
        </Card>
        <Card className="p-4 text-center border-l-4 border-brand-orange">
          <div className="text-2xl font-bold text-brand-blue-dark">4-6hrs</div>
          <div className="text-sm text-brand-gray-dark">Lagos Response</div>
        </Card>
        <Card className="p-4 text-center border-l-4 border-blue-500">
          <div className="text-2xl font-bold text-brand-blue-dark">24/7</div>
          <div className="text-sm text-brand-gray-dark">Emergency Support</div>
        </Card>
        <Card className="p-4 text-center border-l-4 border-purple-500">
          <div className="text-2xl font-bold text-brand-blue-dark">100%</div>
          <div className="text-sm text-brand-gray-dark">Safety Compliance</div>
        </Card>
      </div>
    </div>
  )
}
