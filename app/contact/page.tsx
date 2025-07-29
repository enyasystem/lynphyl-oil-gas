"use client"
import { useActionState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedClickToCall } from "@/components/enhanced-click-to-call"
import { submitContactForm, type FormState } from "../actions"
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  XCircle,
  Loader,
  Building,
  Users,
  Headphones,
  FileText,
} from "lucide-react"

export default function ContactPage() {
  const initialState: FormState = { message: "", status: "idle" }
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-brand-green" />,
      title: "24/7 Emergency Hotline",
      description: "For urgent fuel supply needs and emergency situations",
      contact: "+234 801 234 5678",
      action: "tel:+2348012345678",
      available: "Available 24/7",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: <Phone className="h-8 w-8 text-brand-green" />,
      title: "Business Line",
      description: "General inquiries, quotes, and business discussions",
      contact: "+234 801 234 5678",
      action: "tel:+2348012345678",
      available: "Mon-Fri: 8AM-6PM",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: <Mail className="h-8 w-8 text-brand-green" />,
      title: "Email Support",
      description: "Send detailed inquiries and receive comprehensive responses",
      contact: "info@lynphyloilandgas.com",
      action: "mailto:info@lynphyloilandgas.com",
      available: "Response within 2 hours",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-brand-green" />,
      title: "WhatsApp Business",
      description: "Quick messages, quotes, and real-time communication",
      contact: "+234 801 234 5678",
      action: "https://wa.me/2348012345678",
      available: "Mon-Fri: 8AM-8PM",
      color: "border-green-200 bg-green-50",
    },
  ]

  const departments = [
    {
      icon: <Building className="h-6 w-6 text-brand-green" />,
      title: "Sales & Business Development",
      email: "sales@lynphyloilandgas.com",
      description: "New partnerships, bulk orders, and business inquiries",
    },
    {
      icon: <Users className="h-6 w-6 text-brand-green" />,
      title: "Operations & Logistics",
      email: "operations@lynphyloilandgas.com",
      description: "Delivery tracking, logistics support, and operational queries",
    },
    {
      icon: <Headphones className="h-6 w-6 text-brand-green" />,
      title: "Customer Support",
      email: "support@lynphyloilandgas.com",
      description: "General support, complaints, and service assistance",
    },
    {
      icon: <FileText className="h-6 w-6 text-brand-green" />,
      title: "Technical Services",
      email: "technical@lynphyloilandgas.com",
      description: "HSE consulting, equipment services, and technical support",
    },
  ]

  const officeLocations = [
    {
      title: "Head Office - Lagos",
      address: "59A Muritala Eletu Way, Osapa London, Lekki, Lagos State",
      phone: "+234 801 234 5678",
      email: "lagos@lynphyloilandgas.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      services: ["Fuel Supply", "Logistics", "Technical Services", "Customer Support"],
      isPrimary: true,
    },
    {
      title: "Regional Office - Port Harcourt",
      address: "Plot 123 Trans Amadi Industrial Layout, Port Harcourt, Rivers State",
      phone: "+234 801 234 5679",
      email: "portharcourt@lynphyloilandgas.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      services: ["Fuel Supply", "Logistics", "Regional Support"],
      isPrimary: false,
    },
    {
      title: "Regional Office - Abuja",
      address: "Suite 45, Central Business District, Abuja, FCT",
      phone: "+234 801 234 5680",
      email: "abuja@lynphyloilandgas.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      services: ["Business Development", "Government Relations", "Regional Support"],
      isPrimary: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_Oil_and_Gas.png" width={40} height={40} alt="Lynphyl Oil & Gas Logo" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              Ready to power your business with reliable fuel supply? Our team is here to help you 24/7 with
              professional service and expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="#contact-form">Send Us a Message</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
              >
                <a href="tel:+2348012345678">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency Line
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <AnimatedSection className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're committed to responding quickly and
              professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 ${method.color}`}
              >
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  {method.icon}
                </div>
                <CardTitle className="text-lg text-brand-blue-dark mb-3">{method.title}</CardTitle>
                <p className="text-brand-gray-dark text-sm mb-4">{method.description}</p>
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-sm"
                    size="sm"
                  >
                    <a href={method.action} target={method.action.startsWith("http") ? "_blank" : undefined}>
                      {method.contact}
                    </a>
                  </Button>
                  <p className="text-xs text-brand-gray-dark">{method.available}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form & Info */}
      <AnimatedSection id="contact-form" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-6">Send Us a Message</h2>
                <p className="text-lg text-brand-gray-dark">
                  Fill out the form with your requirements and we'll get back to you with a detailed response within 2
                  hours during business hours.
                </p>
              </div>

              {/* Enhanced Click-to-Call for Mobile */}
              <div className="md:hidden">
                <EnhancedClickToCall />
              </div>

              {/* Department Contacts */}
              <div className="hidden md:block space-y-6">
                <h3 className="text-xl font-bold text-brand-blue-dark">Department Contacts</h3>
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-brand-gray-light rounded-lg">
                    <div className="flex-shrink-0 mt-1">{dept.icon}</div>
                    <div>
                      <h4 className="font-bold text-brand-blue-dark">{dept.title}</h4>
                      <p className="text-sm text-brand-gray-dark mb-2">{dept.description}</p>
                      <a href={`mailto:${dept.email}`} className="text-brand-green hover:underline text-sm">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="shadow-2xl border-t-4 border-brand-green rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-blue-dark">Contact Form</CardTitle>
                  <p className="text-brand-gray-dark">
                    Please provide as much detail as possible to help us serve you better.
                  </p>
                </CardHeader>
                <CardContent>
                  <form action={formAction} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="name" placeholder="Your Full Name" required />
                      <Input name="email" type="email" placeholder="Email Address" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="phone" type="tel" placeholder="Phone Number" />
                      <Input name="company" placeholder="Company Name" />
                    </div>
                    <Select name="service_type" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Service Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fuel-supply">Fuel Supply (AGO/PMS/DPK)</SelectItem>
                        <SelectItem value="logistics">Logistics & Transport</SelectItem>
                        <SelectItem value="technical">Technical Services</SelectItem>
                        <SelectItem value="emergency">Emergency Fuel Supply</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="complaint">Complaint/Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select name="urgency">
                      <SelectTrigger>
                        <SelectValue placeholder="Urgency Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency (Immediate Response)</SelectItem>
                        <SelectItem value="urgent">Urgent (Within 2 hours)</SelectItem>
                        <SelectItem value="normal">Normal (Within 24 hours)</SelectItem>
                        <SelectItem value="low">Low Priority</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      name="message"
                      placeholder="Please describe your requirements, location, quantity needed, or any specific details..."
                      rows={5}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-lg py-3 rounded-full flex items-center justify-center gap-2"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" /> Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                    {state.status === "success" && (
                      <p className="text-sm text-brand-green flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {state.message}
                      </p>
                    )}
                    {state.status === "error" && (
                      <p className="text-sm text-red-600 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />
                        {state.message}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Office Locations */}
      <AnimatedSection className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Our Office Locations</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Visit us at any of our strategically located offices across Nigeria for in-person consultations and
              support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-shadow ${
                  office.isPrimary ? "border-2 border-brand-green bg-brand-green-light" : ""
                }`}
              >
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-6 w-6 text-brand-green" />
                    <CardTitle className="text-xl text-brand-blue-dark">{office.title}</CardTitle>
                    {office.isPrimary && (
                      <span className="bg-brand-green text-white text-xs px-2 py-1 rounded-full">Primary</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div>
                    <p className="text-brand-gray-dark">{office.address}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-green" />
                      <a href={`tel:${office.phone}`} className="text-brand-blue-dark hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-green" />
                      <a href={`mailto:${office.email}`} className="text-brand-blue-dark hover:underline">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-green" />
                      <span className="text-brand-gray-dark">{office.hours}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue-dark mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-brand-blue-dark text-white text-xs px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Contact FAQs</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Quick answers to common questions about contacting us and our response times.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3">How quickly do you respond?</CardTitle>
              <p className="text-brand-gray-dark">
                Emergency calls are answered immediately 24/7. Email inquiries receive responses within 2 hours during
                business hours, and within 24 hours on weekends.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3">What information should I include?</CardTitle>
              <p className="text-brand-gray-dark">
                Please include your location, fuel type needed, quantity, delivery timeline, and any specific
                requirements to help us provide accurate quotes.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3">Do you provide emergency services?</CardTitle>
              <p className="text-brand-gray-dark">
                Yes! Our 24/7 emergency hotline +234 801 234 5678 is always available for urgent fuel supply needs
                across all 36 states.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3">Can I visit your offices?</CardTitle>
              <p className="text-brand-gray-dark">
                We welcome visits to any of our offices. We recommend calling ahead to ensure the right team members are
                available to assist you.
              </p>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for fuel shortages. Contact us today and experience the reliability that has made us Nigeria's
            trusted energy partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <a href="tel:+2348012345678">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +234 801 234 5678
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
            >
              <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
