"use client"
import { useState, useActionState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedSection } from "@/components/animated-section"
import { submitContactForm, type FormState } from "../actions"
import {
  ArrowLeft,
  Calculator,
  Fuel,
  Truck,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  Loader,
  FileText,
  Shield,
  Star,
  AlertCircle,
  Download,
  Send,
} from "lucide-react"

export default function QuotePage() {
  const [quoteType, setQuoteType] = useState<"fuel" | "logistics" | "technical" | "custom">("fuel")
  const [urgency, setUrgency] = useState<"standard" | "urgent" | "emergency">("standard")
  const [showEstimate, setShowEstimate] = useState(false)
  const [estimate, setEstimate] = useState<any>(null)

  const initialState: FormState = { message: "", status: "idle" }
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  const fuelPrices = {
    ago: 850, // per liter
    pms: 650,
    dpk: 750,
  }

  const deliveryRates = {
    lagos: 50000,
    southwest: 80000,
    southeast: 100000,
    northcentral: 120000,
    northeast: 150000,
    northwest: 140000,
  }

  const urgencyMultipliers = {
    standard: 1,
    urgent: 1.15,
    emergency: 1.3,
  }

  const calculateEstimate = (formData: any) => {
    if (quoteType === "fuel" && formData.fuelType && formData.quantity && formData.location) {
      const qty = Number.parseInt(formData.quantity)
      const fuelPrice = fuelPrices[formData.fuelType as keyof typeof fuelPrices]
      const deliveryRate = deliveryRates[formData.location as keyof typeof deliveryRates]
      const urgencyMultiplier = urgencyMultipliers[urgency]

      const baseFuelCost = qty * fuelPrice
      const baseDeliveryCost = deliveryRate
      const urgencyFee = urgency !== "standard" ? (baseFuelCost + baseDeliveryCost) * (urgencyMultiplier - 1) : 0
      const total = (baseFuelCost + baseDeliveryCost) * urgencyMultiplier

      setEstimate({
        fuelCost: baseFuelCost,
        deliveryCost: baseDeliveryCost,
        urgencyFee,
        total,
        savings: qty > 20000 ? baseFuelCost * 0.05 : 0, // 5% discount for bulk orders
      })
      setShowEstimate(true)
    }
  }

  const quoteTypes = [
    {
      id: "fuel",
      title: "Fuel Supply Quote",
      description: "AGO, PMS, DPK delivery with competitive pricing",
      icon: <Fuel className="h-8 w-8 text-brand-green" />,
    },
    {
      id: "logistics",
      title: "Logistics & Transport",
      description: "Bulk haulage and fleet management services",
      icon: <Truck className="h-8 w-8 text-brand-green" />,
    },
    {
      id: "technical",
      title: "Technical Services",
      description: "HSE consulting, maintenance, and project management",
      icon: <Shield className="h-8 w-8 text-brand-green" />,
    },
    {
      id: "custom",
      title: "Custom Solution",
      description: "Tailored energy solutions for unique requirements",
      icon: <Star className="h-8 w-8 text-brand-green" />,
    },
  ]

  const benefits = [
    "Competitive pricing with transparent breakdown",
    "24/7 emergency response capability",
    "GPS tracking and real-time updates",
    "Quality assurance and DPR compliance",
    "Flexible payment terms available",
    "Nationwide delivery coverage",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request Your Custom Quote</h1>
            <p className="text-xl text-gray-200 mb-8">
              Get competitive pricing for fuel supply, logistics, and technical services. Our team provides detailed
              quotes within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="#quote-form">Start Your Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
              >
                <a href="tel:+2348012345678">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Urgent Quotes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Benefits */}
      <AnimatedSection className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-4">Why Choose Our Quotes?</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Transparent pricing, competitive rates, and professional service guaranteed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0" />
                <span className="text-brand-gray-dark">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Type Selection */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Select Quote Type</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Choose the service you need a quote for, and we'll customize the form to get you the most accurate
              pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quoteTypes.map((type) => (
              <Card
                key={type.id}
                className={`p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  quoteType === type.id
                    ? "border-2 border-brand-green bg-brand-green-light"
                    : "border-2 border-gray-200 hover:border-brand-green"
                }`}
                onClick={() => setQuoteType(type.id as any)}
              >
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  {type.icon}
                </div>
                <CardTitle className="text-lg text-brand-blue-dark mb-3">{type.title}</CardTitle>
                <p className="text-brand-gray-dark text-sm">{type.description}</p>
                {quoteType === type.id && <Badge className="mt-3 bg-brand-green text-white">Selected</Badge>}
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Form */}
      <AnimatedSection id="quote-form" className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-2xl border-t-4 border-brand-green">
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-blue-dark flex items-center gap-3">
                      <Calculator className="h-6 w-6 text-brand-green" />
                      {quoteTypes.find((t) => t.id === quoteType)?.title}
                    </CardTitle>
                    <p className="text-brand-gray-dark">
                      Fill out the details below to receive your customized quote within 2 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form action={formAction} className="space-y-6">
                      {/* Basic Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-brand-blue-dark border-b pb-2">
                          Contact Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input name="name" placeholder="Full Name" required />
                          <Input name="email" type="email" placeholder="Email Address" required />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input name="phone" type="tel" placeholder="Phone Number" required />
                          <Input name="company" placeholder="Company Name" />
                        </div>
                      </div>

                      {/* Service-Specific Fields */}
                      {quoteType === "fuel" && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-brand-blue-dark border-b pb-2">
                            Fuel Requirements
                          </h3>
                          <div className="grid md:grid-cols-3 gap-4">
                            <Select name="fuelType" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Fuel Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ago">AGO (Diesel) - ₦850/L</SelectItem>
                                <SelectItem value="pms">PMS (Petrol) - ₦650/L</SelectItem>
                                <SelectItem value="dpk">DPK (Kerosene) - ₦750/L</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input name="quantity" type="number" placeholder="Quantity (Liters)" min="1000" required />
                            <Select name="location" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Delivery Location" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="lagos">Lagos & Ogun</SelectItem>
                                <SelectItem value="southwest">Southwest Region</SelectItem>
                                <SelectItem value="southeast">Southeast Region</SelectItem>
                                <SelectItem value="northcentral">North Central</SelectItem>
                                <SelectItem value="northeast">Northeast Region</SelectItem>
                                <SelectItem value="northwest">Northwest Region</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Input name="deliveryAddress" placeholder="Specific Delivery Address" required />
                          <div className="grid md:grid-cols-2 gap-4">
                            <Input name="deliveryDate" type="date" placeholder="Preferred Delivery Date" />
                            <Select name="frequency">
                              <SelectTrigger>
                                <SelectValue placeholder="Delivery Frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="one-time">One-time Delivery</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">Quarterly</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      )}

                      {quoteType === "logistics" && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-brand-blue-dark border-b pb-2">
                            Logistics Requirements
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <Select name="logisticsService" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Service Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bulk-haulage">Bulk Haulage</SelectItem>
                                <SelectItem value="fleet-management">Fleet Management</SelectItem>
                                <SelectItem value="warehousing">Warehousing & Storage</SelectItem>
                                <SelectItem value="supply-chain">Supply Chain Consulting</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input name="cargoType" placeholder="Cargo/Product Type" required />
                          </div>
                          <div className="grid md:grid-cols-3 gap-4">
                            <Input name="origin" placeholder="Origin Location" required />
                            <Input name="destination" placeholder="Destination" required />
                            <Input name="distance" placeholder="Distance (km)" type="number" />
                          </div>
                          <Input name="weight" placeholder="Total Weight/Volume" />
                        </div>
                      )}

                      {quoteType === "technical" && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-brand-blue-dark border-b pb-2">
                            Technical Service Requirements
                          </h3>
                          <Select name="technicalService" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Service Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hse-audit">HSE Audit & Training</SelectItem>
                              <SelectItem value="tank-maintenance">Tank Maintenance</SelectItem>
                              <SelectItem value="pump-calibration">Pump Calibration</SelectItem>
                              <SelectItem value="project-management">Project Management</SelectItem>
                              <SelectItem value="compliance">Compliance Consulting</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className="grid md:grid-cols-2 gap-4">
                            <Input name="facilityType" placeholder="Facility Type" />
                            <Input name="projectDuration" placeholder="Expected Duration" />
                          </div>
                          <Input name="siteLocation" placeholder="Site Location" required />
                        </div>
                      )}

                      {/* Urgency Level */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-brand-blue-dark border-b pb-2">Urgency & Timeline</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            {
                              id: "standard",
                              label: "Standard",
                              desc: "5-7 business days",
                              multiplier: "No extra cost",
                            },
                            { id: "urgent", label: "Urgent", desc: "2-3 business days", multiplier: "+15% fee" },
                            { id: "emergency", label: "Emergency", desc: "Within 24 hours", multiplier: "+30% fee" },
                          ].map((option) => (
                            <Card
                              key={option.id}
                              className={`p-4 cursor-pointer transition-all ${
                                urgency === option.id
                                  ? "border-2 border-brand-green bg-brand-green-light"
                                  : "border border-gray-200 hover:border-brand-green"
                              }`}
                              onClick={() => setUrgency(option.id as any)}
                            >
                              <div className="text-center">
                                <h4 className="font-semibold text-brand-blue-dark">{option.label}</h4>
                                <p className="text-sm text-brand-gray-dark">{option.desc}</p>
                                <p className="text-xs text-brand-green font-medium mt-1">{option.multiplier}</p>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Additional Requirements */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-brand-blue-dark border-b pb-2">
                          Additional Information
                        </h3>
                        <Textarea
                          name="message"
                          placeholder="Please provide any additional details, special requirements, or questions..."
                          rows={4}
                        />
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="gps-tracking" name="gpsTracking" />
                            <label htmlFor="gps-tracking" className="text-sm text-brand-gray-dark">
                              Request GPS tracking and real-time updates
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="quality-certificate" name="qualityCertificate" />
                            <label htmlFor="quality-certificate" className="text-sm text-brand-gray-dark">
                              Request quality certificate and testing report
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="payment-terms" name="paymentTerms" />
                            <label htmlFor="payment-terms" className="text-sm text-brand-gray-dark">
                              Interested in flexible payment terms
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-lg py-3 rounded-full flex items-center justify-center gap-2"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <>
                            <Loader className="h-5 w-5 animate-spin" /> Processing Quote Request...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Request Detailed Quote
                          </>
                        )}
                      </Button>

                      {state.status === "success" && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-sm text-green-700 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            {state.message}
                          </p>
                        </div>
                      )}
                      {state.status === "error" && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <p className="text-sm text-red-700 flex items-center gap-2">
                            <XCircle className="h-4 w-4" />
                            {state.message}
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Estimate */}
                {quoteType === "fuel" && (
                  <Card className="border-l-4 border-brand-green">
                    <CardHeader>
                      <CardTitle className="text-lg text-brand-blue-dark">Quick Estimate</CardTitle>
                      <p className="text-sm text-brand-gray-dark">Get an instant estimate while you fill the form</p>
                    </CardHeader>
                    <CardContent>
                      {showEstimate && estimate ? (
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Fuel Cost:</span>
                            <span className="font-semibold">₦{estimate.fuelCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Delivery Cost:</span>
                            <span className="font-semibold">₦{estimate.deliveryCost.toLocaleString()}</span>
                          </div>
                          {estimate.urgencyFee > 0 && (
                            <div className="flex justify-between text-sm">
                              <span>Urgency Fee:</span>
                              <span className="font-semibold text-orange-600">
                                ₦{estimate.urgencyFee.toLocaleString()}
                              </span>
                            </div>
                          )}
                          {estimate.savings > 0 && (
                            <div className="flex justify-between text-sm">
                              <span>Bulk Discount:</span>
                              <span className="font-semibold text-green-600">
                                -₦{estimate.savings.toLocaleString()}
                              </span>
                            </div>
                          )}
                          <div className="border-t pt-2 flex justify-between font-bold">
                            <span>Estimated Total:</span>
                            <span className="text-brand-green">
                              ₦{(estimate.total - estimate.savings).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-xs text-brand-gray-dark">
                            *Estimate only. Final quote may vary based on current market rates.
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-brand-gray-dark">
                          Fill in fuel type, quantity, and location to see an instant estimate.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-brand-blue-dark">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="font-semibold text-brand-blue-dark">Call Us</p>
                        <a href="tel:+2348012345678" className="text-sm text-brand-gray-dark hover:underline">
                          +234 801 234 5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="font-semibold text-brand-blue-dark">Email Us</p>
                        <a
                          href="mailto:quotes@lynphyloilandgas.com"
                          className="text-sm text-brand-gray-dark hover:underline"
                        >
                          quotes@lynphyloilandgas.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="font-semibold text-brand-blue-dark">Response Time</p>
                        <p className="text-sm text-brand-gray-dark">Within 2 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quote Process */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-brand-blue-dark">Quote Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-brand-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold text-brand-blue-dark text-sm">Submit Request</p>
                          <p className="text-xs text-brand-gray-dark">Fill out the detailed form</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-brand-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold text-brand-blue-dark text-sm">Review & Analysis</p>
                          <p className="text-xs text-brand-gray-dark">Our team reviews your requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-brand-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold text-brand-blue-dark text-sm">Detailed Quote</p>
                          <p className="text-xs text-brand-gray-dark">Receive comprehensive pricing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-brand-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-semibold text-brand-blue-dark text-sm">Approval & Delivery</p>
                          <p className="text-xs text-brand-gray-dark">Approve and schedule service</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Download Brochure */}
                <Card className="bg-brand-blue-dark text-white">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-brand-green mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Service Brochure</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Download our comprehensive service guide and pricing information.
                    </p>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
                    >
                      <a href="#" download>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Quote FAQs</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Common questions about our quoting process and pricing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-brand-green" />
                How accurate are your quotes?
              </CardTitle>
              <p className="text-brand-gray-dark">
                Our quotes are highly accurate and based on current market rates. Final pricing may vary by ±5% due to
                market fluctuations, but we honor our quotes for 7 days.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-green" />
                How quickly do you respond?
              </CardTitle>
              <p className="text-brand-gray-dark">
                Standard quotes are provided within 2 hours during business hours. Emergency quotes are processed
                immediately, and complex custom solutions within 24 hours.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-green" />
                Are there any hidden fees?
              </CardTitle>
              <p className="text-brand-gray-dark">
                No hidden fees. Our quotes include all costs: product, delivery, taxes, and any applicable surcharges.
                Additional services like GPS tracking are clearly itemized.
              </p>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg text-brand-blue-dark mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-green" />
                Can I modify my quote request?
              </CardTitle>
              <p className="text-brand-gray-dark">
                Yes, you can request modifications before approval. Contact us immediately if you need to change
                quantities, locations, or timing after submitting your request.
              </p>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Quote?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Lynphyl for reliable fuel supply and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="#quote-form">Start Your Quote Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
            >
              <a href="tel:+2348012345678">
                <Phone className="h-5 w-5 mr-2" />
                Call for Immediate Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
