"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowLeft, Wrench, SlidersHorizontal, Shield, FileText, Phone } from "lucide-react"

export default function TechnicalServicesPage() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-brand-green" />,
      title: "Fuel Storage Maintenance",
      description: "Tank cleaning, integrity testing, and compliance checks for safe fuel storage.",
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8 text-brand-green" />,
      title: "Dispensing Pump Calibration",
      description: "Accurate calibration and maintenance of fuel pumps to prevent losses.",
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-green" />,
      title: "HSE Audits & Training",
      description: "Comprehensive Health, Safety & Environment audits and staff training.",
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-green" />,
      title: "Project Management",
      description: "End-to-end management for energy projects, from planning to execution.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Technical & Engineering Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              Ensuring operational excellence, safety, and compliance with our specialized technical support.
            </p>
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/#contact">Consult Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Our Technical Expertise</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              We provide a wide range of technical services to support the downstream oil and gas sector.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Technical Assistance?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our certified engineers and technicians are ready to help you solve your most complex operational
            challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/#contact">Request Technical Support</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
            >
              <Link href="tel:+2348012345678">
                <Phone className="h-5 w-5 mr-2" />
                Speak to an Engineer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
