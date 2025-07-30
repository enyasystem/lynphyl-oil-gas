"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { CompanyHistory } from "@/components/company-history"
import { TeamCulture } from "@/components/team-culture"
import { ArrowLeft, Target, Eye, Award, Users, Globe, ShieldCheck, Phone } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-brand-green" />,
      title: "Excellence",
      description:
        "We strive for operational excellence in every delivery, maintaining the highest quality standards in the industry.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-green" />,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards, ensuring transparency in all our operations.",
    },
    {
      icon: <Users className="h-8 w-8 text-brand-green" />,
      title: "Safety",
      description:
        "Safety is paramount in all our operations, from transportation to storage and delivery of petroleum products.",
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-green" />,
      title: "Innovation",
      description: "We embrace technology and innovative solutions to improve efficiency and customer experience.",
    },
  ]

  const achievements = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "Established in Lekki, Lagos with a vision to become Nigeria's leading indigenous petroleum marketing company.",
    },
    {
      year: "2017",
      title: "Nationwide Expansion",
      description: "Achieved coverage across all 36 states through strategic partnerships and depot relationships.",
    },
    {
      year: "2019",
      title: "DPR Certification",
      description: "Obtained full DPR certification and compliance, reinforcing our commitment to quality standards.",
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Launched digital platforms for real-time tracking and enhanced customer experience.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/lynphyl-logo.jpg" width={40} height={40} alt="Lynphyl Oil & Gas Logo" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lynphyl Oil & Gas Limited</h1>
            <p className="text-xl text-gray-200 mb-8">
              Proudly Nigerian. Professionally Driven. Powering the nation's growth through reliable energy solutions
              since 2014.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="#mission">Our Mission & Vision</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
              >
                <Link href="#team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <AnimatedSection className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-6">
                Indigenous Excellence in Energy Solutions
              </h2>
              <div className="space-y-6 text-lg text-brand-gray-dark">
                <p>
                  Lynphyl Oil & Gas Limited stands as a testament to Nigerian entrepreneurship and excellence in the
                  downstream petroleum sector. Founded in 2014 with a clear vision to transform Nigeria's fuel supply
                  landscape, we have grown from a local Lagos-based operation to a nationwide leader in petroleum
                  marketing and logistics.
                </p>
                <p>
                  Our journey is rooted in understanding the unique challenges of the Nigerian market and developing
                  innovative solutions that address real business needs. From our strategic operational base in Lekki,
                  Lagos, we leverage cutting-edge technology, deep industry expertise, and an unwavering commitment to
                  safety to deliver exceptional value to our clients.
                </p>
                <p>
                  Today, we proudly serve businesses across all 36 states, having completed over 500 successful
                  deliveries with a 98% customer satisfaction rate. Our success is built on the foundation of integrity,
                  innovation, and an indigenous understanding of Nigeria's energy landscape.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/placeholder.svg?width=600&height=400"
                alt="Lynphyl Operations Center"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center border-l-4 border-brand-green">
                  <div className="text-2xl font-bold text-brand-blue-dark">10+</div>
                  <div className="text-sm text-brand-gray-dark">Years of Excellence</div>
                </Card>
                <Card className="p-4 text-center border-l-4 border-brand-orange">
                  <div className="text-2xl font-bold text-brand-blue-dark">500+</div>
                  <div className="text-sm text-brand-gray-dark">Successful Deliveries</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission, Vision & Values */}
      <AnimatedSection id="mission" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Our Purpose & Direction</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Guided by clear principles and driven by a vision for Nigeria's energy future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <Card className="p-8 border-l-4 border-brand-green hover:shadow-xl transition-shadow">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-green-light p-3 rounded-full">
                    <Target className="h-6 w-6 text-brand-green" />
                  </div>
                  <CardTitle className="text-2xl text-brand-blue-dark">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-brand-gray-dark leading-relaxed">
                  To be Nigeria's most trusted indigenous petroleum marketing company, delivering reliable, safe, and
                  cost-effective fuel supply and logistics solutions that power businesses and communities across all 36
                  states, while maintaining the highest standards of safety, quality, and customer service.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="p-8 border-l-4 border-brand-blue hover:shadow-xl transition-shadow">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-brand-blue" />
                  </div>
                  <CardTitle className="text-2xl text-brand-blue-dark">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-brand-gray-dark leading-relaxed">
                  To become the leading indigenous petroleum marketing and logistics company in West Africa, recognized
                  for operational excellence, technological innovation, and unwavering commitment to powering Nigeria's
                  economic growth through reliable energy solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-4">Our Core Values</h3>
            <p className="text-lg text-brand-gray-dark">
              The principles that guide every decision and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-brand-green-light p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  {value.icon}
                </div>
                <CardTitle className="text-xl text-brand-blue-dark mb-4">{value.title}</CardTitle>
                <p className="text-brand-gray-dark">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Company History */}
      <AnimatedSection className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompanyHistory />
        </div>
      </AnimatedSection>

      {/* Leadership & Team */}

      {/* Certifications & Compliance */}
      <AnimatedSection className="py-20 bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our commitment to regulatory compliance and industry standards ensures safe, reliable operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { name: "DPR", description: "Department of Petroleum Resources Certified" },
              { name: "SON", description: "Standards Organisation of Nigeria Compliant" },
              { name: "HSE", description: "Health, Safety & Environment Certified" },
              { name: "NUPRC", description: "Nigerian Upstream Petroleum Regulatory Commission" },
            ].map((cert, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white p-6 text-center">
                <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-brand-green" />
                </div>
                <CardTitle className="text-lg mb-2">{cert.name}</CardTitle>
                <p className="text-sm text-gray-300">{cert.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              All certifications are current and regularly audited to ensure continued compliance with Nigerian
              regulatory standards.
            </p>
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="#contact">Verify Our Certifications</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact CTA */}
      <section className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl border-t-4 border-brand-green">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-brand-blue-dark mb-6">Ready to Partner with Us?</h2>
              <p className="text-lg text-brand-gray-dark mb-8 max-w-2xl mx-auto">
                Join the growing list of businesses that trust Lynphyl for their fuel supply and logistics needs. Let's
                discuss how we can power your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                  <Link href="/#contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-brand-blue-dark text-brand-blue-dark hover:bg-brand-blue-dark hover:text-white bg-transparent"
                >
                  <Link href="tel:+2348012345678">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: +234 801 234 5678
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
