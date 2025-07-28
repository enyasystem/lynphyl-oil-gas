"use client"
import Link from "next/link"
import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowLeft, Truck, MapPin, ShieldCheck, Zap, Route, Warehouse, Users, Phone } from "lucide-react"

export default function LogisticsTransportPage() {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-brand-green" />,
      title: "Bulk Haulage",
      description: "Secure and efficient transportation of petroleum products and other bulk goods nationwide.",
    },
    {
      icon: <Route className="h-8 w-8 text-brand-green" />,
      title: "Fleet Management",
      description: "Comprehensive management of your vehicle fleet to optimize performance and reduce costs.",
    },
    {
      icon: <Warehouse className="h-8 w-8 text-brand-green" />,
      title: "Warehousing & Storage",
      description: "Safe and secure warehousing solutions for short-term and long-term storage needs.",
    },
    {
      icon: <Users className="h-8 w-8 text-brand-green" />,
      title: "Supply Chain Consulting",
      description: "Expert advice to streamline your supply chain for maximum efficiency and reliability.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
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

      <section className="relative py-20 bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Efficient Logistics & Transport</h1>
            <p className="text-xl text-gray-200 mb-8">
              Connecting Nigeria with reliable, safe, and technology-driven logistics solutions for businesses of all
              sizes.
            </p>
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/#contact">Request Logistics Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Benefit
              icon={<MapPin className="h-8 w-8 text-brand-green" />}
              title="Real-time GPS Tracking"
              description="Complete visibility of your shipment from start to finish."
            />
            <Benefit
              icon={<ShieldCheck className="h-8 w-8 text-brand-green" />}
              title="Safety & Compliance"
              description="Adherence to the highest safety standards and regulations."
            />
            <Benefit
              icon={<Route className="h-8 w-8 text-brand-green" />}
              title="Optimized Routing"
              description="Intelligent route planning for faster and cost-effective deliveries."
            />
            <Benefit
              icon={<Zap className="h-8 w-8 text-brand-green" />}
              title="24/7 Operations"
              description="Our logistics team is available around the clock to support your needs."
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Our Logistics Services</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              A comprehensive suite of services to manage your entire supply chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-brand-green-light p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl text-brand-blue-dark mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-brand-gray-dark">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section id="quote" className="py-20 bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Optimize Your Supply Chain</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts design a logistics solution that drives efficiency and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/#contact">Get a Custom Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
            >
              <Link href="tel:+2348012345678">
                <Phone className="h-5 w-5 mr-2" />
                Speak to a Logistics Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const Benefit = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="text-center">
    <div className="bg-brand-green-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="font-bold text-brand-blue-dark mb-2">{title}</h3>
    <p className="text-brand-gray-dark">{description}</p>
  </div>
)
