"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, animate } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Fuel, Truck, Wrench, ChevronRight } from "lucide-react"

const services = [
  {
    icon: <Fuel className="h-10 w-10 text-brand-green" />,
    title: "Fuel Supply",
    description: "Reliable, nationwide delivery of AGO, PMS, and DPK with guaranteed quality and safety.",
    link: "/services/fuel-supply",
  },
  {
    icon: <Truck className="h-10 w-10 text-brand-green" />,
    title: "Logistics & Transport",
    description: "Efficient, technology-driven logistics solutions, including bulk haulage and fleet management.",
    link: "/services/logistics-transport",
  },
  {
    icon: <Wrench className="h-10 w-10 text-brand-green" />,
    title: "Technical Services",
    description: "Expert support for fuel infrastructure, including maintenance, calibration, and HSE compliance.",
    link: "/services/technical-services",
  },
]

export function SwipeableServiceCards() {
  const x = useMotionValue(0)
  const [cardIndex, setCardIndex] = useState(0)

  const handleDragEnd = (event: any, info: any) => {
    const dragThreshold = 50
    if (info.offset.x < -dragThreshold && cardIndex < services.length - 1) {
      setCardIndex(cardIndex + 1)
    } else if (info.offset.x > dragThreshold && cardIndex > 0) {
      setCardIndex(cardIndex - 1)
    }
    animate(x, 0, { type: "spring", stiffness: 300, damping: 30 })
  }

  return (
    <div>
      <div className="relative overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x,
            width: `${services.length * 100}%`,
            translateX: `-${(cardIndex / services.length) * 100}%`,
          }}
          animate={{ translateX: `-${(cardIndex / services.length) * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onDragEnd={handleDragEnd}
          className="flex"
        >
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-2 flex-shrink-0">
              <Card className="h-full flex flex-col p-8 border-2 border-gray-100 hover:border-brand-green hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
                <CardHeader className="p-0">
                  <div className="mb-6">{service.icon}</div>
                  <CardTitle className="text-2xl text-brand-blue-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow mt-4">
                  <CardDescription className="text-base text-brand-gray-dark">{service.description}</CardDescription>
                </CardContent>
                <div className="mt-8">
                  <Button asChild variant="link" className="p-0 text-brand-green font-semibold">
                    <Link href={service.link}>
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-8 gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCardIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === cardIndex ? "bg-brand-green scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
