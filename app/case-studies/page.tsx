"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "Major Construction Co.",
      title: "24/7 Fuel Supply for a Critical Infrastructure Project",
      summary:
        "Ensured uninterrupted operations for a major bridge construction by providing timely, round-the-clock AGO delivery, overcoming logistical challenges in a remote location.",
      image: "/placeholder.svg?width=600&height=400",
      category: "Fuel Supply",
    },
    {
      client: "Nationwide Logistics Inc.",
      title: "Optimizing a Fleet of 200+ Trucks with a Centralized Fueling Solution",
      summary:
        "Implemented a custom fleet fueling program that reduced downtime by 30% and cut annual fuel costs by 15% through strategic on-site refueling and management.",
      image: "/placeholder.svg?width=600&height=400",
      category: "Logistics",
    },
    {
      client: "Leading Manufacturing Plant",
      title: "Upgrading Fuel Storage Infrastructure to Meet New HSE Standards",
      summary:
        "Conducted a full-scale audit and upgrade of a manufacturing plant's fuel storage tanks and systems, ensuring 100% compliance with new regulations without any operational downtime.",
      image: "/placeholder.svg?width=600&height=400",
      category: "Technical Services",
    },
  ]

  return (
    <div className="min-h-screen bg-brand-gray-light">
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/placeholder.svg?width=40&height=40" width={40} height={40} alt="Lynphyl Oil & Gas Logo" />
              <span className="font-bold text-xl text-brand-blue-dark">Lynphyl O&G</span>
            </Link>
            <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-6">Our Success Stories</h1>
          <p className="text-xl text-brand-gray-dark mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across Nigeria overcome their energy and logistics challenges.
          </p>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden grid md:grid-cols-2 group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <p className="text-brand-green font-semibold mb-2">{study.category}</p>
                  <h2 className="text-2xl font-bold text-brand-blue-dark mb-4">{study.title}</h2>
                  <p className="text-brand-gray-dark mb-6 flex-grow">{study.summary}</p>
                  <p className="font-bold text-brand-blue-dark mb-6">Client: {study.client}</p>
                  <Button asChild variant="link" className="p-0 self-start text-brand-green">
                    <Link href="#">
                      Read Full Case Study <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
