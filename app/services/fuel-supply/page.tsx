"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowLeft, Fuel, ShieldCheck, Truck, Clock, MapPin, CheckCircle, Phone } from "lucide-react"

export default function FuelSupplyPage() {
  const fuelTypes = [
    {
      name: "AGO (Automotive Gas Oil)",
      description: "High-quality diesel fuel for commercial vehicles, generators, and industrial equipment",
      specifications: ["Sulphur Content: ≤ 50ppm", "Cetane Number: ≥ 51", "Flash Point: ≥ 55°C"],
      applications: ["Commercial Transport", "Power Generation", "Industrial Equipment", "Marine Engines"],
    },
    {
      name: "PMS (Premium Motor Spirit)",
      description: "Premium petrol for passenger vehicles and light commercial vehicles",
      specifications: ["Octane Rating: ≥ 91", "Lead Content: Nil", "Benzene: ≤ 1% vol"],
      applications: ["Passenger Cars", "Motorcycles", "Light Commercial Vehicles", "Small Generators"],
    },
    {
      name: "DPK (Dual Purpose Kerosene)",
      description: "Clean-burning kerosene for domestic and commercial applications",
      specifications: ["Flash Point: ≥ 38°C", "Smoke Point: ≥ 18mm", "Sulphur: ≤ 0.25% mass"],
      applications: ["Domestic Cooking", "Lighting", "Space Heating", "Industrial Processes"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reliable Fuel Supply Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium petroleum products delivered nationwide with guaranteed quality, safety, and reliability across
              all 36 states of Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="#quote">Get Instant Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
              >
                <Link href="tel:+2348012345678">Call Emergency Hotline</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <AnimatedSection className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-green-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-blue-dark mb-2">Quality Assured</h3>
              <p className="text-brand-gray-dark">DPR certified products meeting international standards</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-green-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-blue-dark mb-2">Nationwide Delivery</h3>
              <p className="text-brand-gray-dark">Coverage across all 36 states with GPS tracking</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-green-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-blue-dark mb-2">24/7 Emergency</h3>
              <p className="text-brand-gray-dark">Round-the-clock support for urgent fuel needs</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-green-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-blue-dark mb-2">Strategic Location</h3>
              <p className="text-brand-gray-dark">Lekki base with nationwide distribution network</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Fuel Types */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Our Fuel Products</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              We supply premium petroleum products that meet and exceed Nigerian regulatory standards
            </p>
          </div>
          <div className="space-y-8">
            {fuelTypes.map((fuel, index) => (
              <Card key={index} className="p-8 border-l-4 border-brand-green">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-brand-blue-dark flex items-center gap-3">
                        <Fuel className="h-6 w-6 text-brand-green" />
                        {fuel.name}
                      </CardTitle>
                    </CardHeader>
                    <p className="text-brand-gray-dark mb-6">{fuel.description}</p>
                    <div>
                      <h4 className="font-bold text-brand-blue-dark mb-3">Technical Specifications:</h4>
                      <ul className="space-y-2">
                        {fuel.specifications.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-brand-green" />
                            <span className="text-brand-gray-dark">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue-dark mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {fuel.applications.map((app, i) => (
                        <div key={i} className="bg-brand-gray-light p-3 rounded-lg text-center">
                          <span className="text-brand-gray-dark font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable fuel supply solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/#contact">Request Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
            >
              <Link href="tel:+2348012345678">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +234 801 234 5678
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
