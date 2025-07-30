"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessInfographics } from "@/components/process-infographics"
import {
  ArrowLeft,
  Fuel,
  Truck,
  Wrench,
  ChevronRight,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Fuel className="h-12 w-12 text-brand-green" />,
      title: "Fuel Supply & Distribution",
      description:
        "Reliable nationwide delivery of premium petroleum products including AGO, PMS, and DPK with guaranteed quality and safety compliance.",
      features: [
        "AGO (Automotive Gas Oil/Diesel)",
        "PMS (Premium Motor Spirit/Petrol)",
        "DPK (Dual Purpose Kerosene)",
        "24/7 Emergency Supply",
        "GPS Tracking & Real-time Updates",
        "Quality Assurance & Testing",
      ],
      link: "/services/fuel-supply",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Truck className="h-12 w-12 text-brand-green" />,
      title: "Logistics & Transportation",
      description:
        "Comprehensive logistics solutions including bulk haulage, fleet management, and supply chain optimization across Nigeria.",
      features: [
        "Bulk Petroleum Haulage",
        "Fleet Management Services",
        "Warehousing & Storage",
        "Supply Chain Consulting",
        "Route Optimization",
        "Inventory Management",
      ],
      link: "/services/logistics-transport",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Wrench className="h-12 w-12 text-brand-green" />,
      title: "Technical & Engineering Services",
      description:
        "Expert technical support including fuel infrastructure maintenance, HSE compliance, and project management services.",
      features: [
        "Fuel Storage Tank Maintenance",
        "Dispensing Pump Calibration",
        "HSE Audits & Training",
        "Project Management",
        "Equipment Installation",
        "Compliance Consulting",
      ],
      link: "/services/technical-services",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    },
  ]

  const additionalServices = [
    {
      title: "Emergency Fuel Supply",
      description: "24/7 emergency response for critical fuel shortages",
      icon: <Clock className="h-6 w-6 text-brand-green" />,
    },
    {
      title: "Depot Lifting Services",
      description: "Efficient fuel lifting from major depots nationwide",
      icon: <MapPin className="h-6 w-6 text-brand-green" />,
    },
    {
      title: "Quality Testing & Certification",
      description: "Comprehensive fuel quality testing and certification",
      icon: <ShieldCheck className="h-6 w-6 text-brand-green" />,
    },
    {
      title: "Custom Logistics Solutions",
      description: "Tailored logistics solutions for unique business needs",
      icon: <Truck className="h-6 w-6 text-brand-green" />,
    },
  ]

  const serviceAreas = [
    { region: "Lagos & Southwest", states: "Lagos, Ogun, Oyo, Osun, Ondo, Ekiti", deliveryTime: "4-24 hours" },
    { region: "Southeast", states: "Anambra, Imo, Abia, Enugu, Ebonyi", deliveryTime: "24-48 hours" },
    {
      region: "South-South",
      states: "Rivers, Delta, Bayelsa, Cross River, Akwa Ibom, Edo",
      deliveryTime: "24-48 hours",
    },
    {
      region: "North Central",
      states: "FCT, Niger, Kwara, Kogi, Plateau, Nasarawa, Benue",
      deliveryTime: "24-48 hours",
    },
    { region: "Northeast", states: "Adamawa, Bauchi, Borno, Gombe, Taraba, Yobe", deliveryTime: "48-72 hours" },
    {
      region: "Northwest",
      states: "Kaduna, Kano, Katsina, Kebbi, Sokoto, Zamfara, Jigawa",
      deliveryTime: "48-72 hours",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-6">
          <Image src="/images/lynphyl-logo.jpg" width={40} height={40} alt="Lynphyl Oil & Gas Logo" />
          <Link href="/" className="flex items-center gap-3">
            <span className="font-bold text-xl text-brand-blue-dark">Lynphyl O&G</span>
          </Link>
          <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent ml-auto">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-2xl flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Energy Solutions</h1>
            <p className="text-xl text-gray-200 mb-8">
              From fuel supply to logistics and technical services, we provide end-to-end solutions that power Nigeria's
              businesses and communities across all 36 states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="#services">Explore Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
              >
                <Link href="#quote">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Oil and Gas Industry"
              width={500}
              height={350}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Service Overview Stats */}
      <AnimatedSection className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">500+</div>
              <div className="text-brand-gray-dark">Successful Deliveries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">36</div>
              <div className="text-brand-gray-dark">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">24/7</div>
              <div className="text-brand-gray-dark">Emergency Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">98%</div>
              <div className="text-brand-gray-dark">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Services */}
      <AnimatedSection id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Our Core Services</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Comprehensive solutions designed to meet all your energy and logistics needs with professional excellence.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="h-full border-2 border-gray-100 hover:border-brand-green hover:shadow-xl transition-all duration-300">
                    <CardHeader className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-brand-green-light p-3 rounded-full">{service.icon}</div>
                        <CardTitle className="text-2xl text-brand-blue-dark">{service.title}</CardTitle>
                      </div>
                      <p className="text-lg text-brand-gray-dark">{service.description}</p>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0" />
                            <span className="text-brand-gray-dark">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="w-full bg-brand-green hover:bg-brand-green/90 text-white">
                        <Link href={service.link}>
                          Learn More <ChevronRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Services */}
      <AnimatedSection className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Additional Services</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Specialized services to complement our core offerings and provide complete energy solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-brand-green-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-brand-blue-dark mb-3">{service.title}</CardTitle>
                <p className="text-brand-gray-dark text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Service Process */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">How We Deliver Excellence</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Our proven processes ensure reliable, safe, and efficient service delivery across all our offerings.
            </p>
          </div>
          <ProcessInfographics />
        </div>
      </AnimatedSection>

      {/* Service Coverage Areas */}
      <AnimatedSection className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Nationwide Coverage</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              We serve all 36 states of Nigeria with reliable delivery times and professional service standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="p-6 border-l-4 border-brand-green hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg text-brand-blue-dark flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-green" />
                    {area.region}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div>
                    <p className="text-sm font-medium text-brand-gray-dark">Coverage:</p>
                    <p className="text-brand-gray-dark text-sm">{area.states}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-gray-dark">Delivery Time:</p>
                    <p className="text-brand-green font-semibold">{area.deliveryTime}</p>
                  </div>
                </CardContent>
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
            Contact us today to discuss your specific requirements and get a customized solution that meets your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/#contact">Request Custom Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
            >
              <Link href="tel:+2348012345678">
                <Phone className="h-5 w-5 mr-2" />
                Call: +234 801 234 5678
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
