"use client"

import type React from "react"
import { useState, useActionState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { AnimatedSection } from "@/components/animated-section"
import { submitContactForm, type FormState } from "./actions"
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
  Star,
  Users,
  Globe,
  BotMessageSquare,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react"
import { motion } from "framer-motion"
import { FuelCalculator } from "@/components/fuel-calculator"
import { CompanyHistory } from "@/components/company-history"
import { InteractiveMap } from "@/components/interactive-map"
import { SwipeableServiceCards } from "@/components/swipeable-service-cards"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { StickyMobileCTAs } from "@/components/sticky-mobile-ctas"
import { EnhancedClickToCall } from "@/components/enhanced-click-to-call"
import { ProcessInfographics } from "@/components/process-infographics"
import { TransformationStories } from "@/components/transformation-stories"
import { TeamCulture } from "@/components/team-culture"

// Add these imports at the top
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { OfflineIndicator } from "@/components/offline-indicator"

export default function LynphylWebsiteRedesign() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "#credibility", label: "Credibility" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
    // { href: "/quote", label: "Get Quote" },
  ]

  const initialState: FormState = { message: "", status: "idle" }
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-gray-dark font-sans pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg">
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
            <div className="flex items-center gap-6 text-sm">
              <a
                href="mailto:info@lynphyloilandgas.com"
                className="flex items-center gap-2 text-brand-gray hover:text-brand-blue-dark transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">info@lynphyloilandgas.com</span>
              </a>
              <span className="hidden md:flex items-center gap-2 text-brand-gray">
                <Clock className="h-4 w-4" />
                <span>Mon–Fri: 8:00am–6:00pm</span>
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-brand-orange">24/7 Emergency</p>
              <a
                href="tel:+2348012345678"
                className="text-base font-bold text-brand-blue-dark hover:text-brand-green transition-colors"
              >
                +234 801 234 5678
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_Oil_and_Gas.png" width={48} height={48} alt="Lynphyl Oil & Gas Logo" />
              <span className="font-bold text-2xl text-brand-blue-dark tracking-tight">Lynphyl O&G</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-brand-gray-dark hover:text-brand-green transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden lg:inline-flex bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6"
              >
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm p-0">
                  <div className="flex flex-col h-full bg-brand-blue-dark text-white">
                    <div className="p-6 border-b border-brand-blue">
                      <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                        <Image
                          src="/images/lynphyl-logo.jpg"
                          width={40}
                          height={40}
                          alt="Lynphyl Oil & Gas Logo"
                        />
                        <span className="font-bold text-xl">Lynphyl O&G</span>
                      </Link>
                    </div>
                    <nav className="flex flex-col gap-2 p-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-xl font-medium p-3 rounded-lg hover:bg-brand-blue transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto p-6 border-t border-brand-blue">
                      <EnhancedClickToCall />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Mobile CTAs */}
      <StickyMobileCTAs />

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue-dark/60 to-brand-blue-dark/30 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="Lynphyl Oil & Gas Operations"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="max-w-2xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                  Powering Nigeria, One Delivery at a Time
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  Your indigenous, professional partner for reliable petroleum marketing, logistics, and technical
                  services across all 36 states.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-green hover:bg-brand-green/90 text-white text-lg px-8 py-6 rounded-full"
                  >
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-brand-blue-dark text-lg px-8 py-6 rounded-full bg-transparent backdrop-blur-sm"
                  >
                    <a href="tel:+2348012345678">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AnimatedSection id="about" className="py-20 md:py-28 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">
                  Indigenous. Innovative. Impactful.
                </h2>
                <p className="text-lg text-brand-gray-dark">
                  Lynphyl Oil & Gas Limited is a proudly Nigerian company dedicated to excellence in the downstream
                  sector. From our operational base in Lekki, Lagos, we leverage cutting-edge logistics and deep
                  industry knowledge to deliver petroleum products and technical services nationwide.
                </p>
                <p className="text-lg text-brand-gray-dark">
                  Our mission is built on integrity, speed, and an unwavering commitment to safety and customer
                  satisfaction. We are not just a supplier; we are a strategic partner in your success.
                </p>
                <Button asChild className="bg-brand-green hover:bg-brand-green/90 text-white">
                  <Link href="/about">
                    Learn More About Us <ChevronRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                  alt="Lynphyl Team Meeting"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Company History Section */}
        <AnimatedSection className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CompanyHistory />
          </div>
        </AnimatedSection>

        {/* Team & Company Culture */}
        <AnimatedSection className="py-20 md:py-28 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">The People Behind Our Success</h2>
              <p className="mt-4 text-lg text-brand-gray-dark">
                Meet the dedicated professionals who make Lynphyl Nigeria's trusted partner in energy solutions.
              </p>
            </div>
            <TeamCulture />
          </div>
        </AnimatedSection>

        {/* Services Section with Swipeable Cards */}
        <AnimatedSection id="services" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Our Comprehensive Services</h2>
              <p className="mt-4 text-lg text-brand-gray-dark">
                We offer a complete suite of services to meet the diverse needs of the Nigerian energy sector.
              </p>
            </div>
            <SwipeableServiceCards />
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="/services">
                  View All Services <ChevronRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Flow Infographics */}
        <AnimatedSection className="py-20 md:py-28 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">How We Work</h2>
              <p className="mt-4 text-lg text-brand-gray-dark">
                Discover our streamlined processes that ensure reliable, safe, and efficient fuel delivery across
                Nigeria.
              </p>
            </div>
            <ProcessInfographics />
          </div>
        </AnimatedSection>

        {/* Credibility Section */}
        <AnimatedSection
          id="credibility"
          className="py-20 md:py-28 bg-brand-blue-dark text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Trusted by Industry Leaders</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Our commitment to quality, safety, and reliability has made us a preferred partner for businesses
                  across Nigeria.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
                <StatItem
                  icon={<ShieldCheck className="h-10 w-10 text-brand-green" />}
                  value="500+"
                  label="Successful Deliveries"
                />
                <StatItem icon={<Globe className="h-10 w-10 text-brand-green" />} value="36" label="States Covered" />
                <StatItem
                  icon={<Star className="h-10 w-10 text-brand-green" />}
                  value="10+"
                  label="Years in Operation"
                />
                <StatItem
                  icon={<Users className="h-10 w-10 text-brand-green" />}
                  value="98%"
                  label="Client Satisfaction"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8">Our Certifications & Compliance</h3>
                <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                  <CertificationLogo name="DPR" />
                  <CertificationLogo name="SON" />
                  <CertificationLogo name="HSE" />
                  <CertificationLogo name="NUPRC" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>


        {/* Client Testimonials Section */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-brand-gray-dark">
                Trusted by leading businesses across Nigeria for reliable fuel supply and logistics services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Lynphyl has been our trusted fuel supplier for over 3 years. Their reliability and professionalism in AGO delivery across Lagos has been exceptional."
                author="Adebayo Ogundimu"
                position="Operations Manager"
                company="Lagos Transport Company"
                rating={5}
              />
              <TestimonialCard
                quote="The GPS tracking system gives us complete visibility of our fuel deliveries. Their 24/7 emergency service saved our operations during a critical shortage."
                author="Fatima Abdullahi"
                position="Procurement Head"
                company="Northern Industries Ltd"
                rating={5}
              />
              <TestimonialCard
                quote="Professional service delivery and competitive pricing. Lynphyl understands the Nigerian market and delivers consistently across all 36 states."
                author="Chinedu Okwu"
                position="Fleet Manager"
                company="Southeast Logistics"
                rating={5}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="py-20 md:py-28 bg-brand-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-brand-gray-dark">
                Get answers to common questions about our fuel supply and logistics services.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion />
            </div>
          </div>
        </AnimatedSection>

        {/* Interactive Coverage Map */}
        <AnimatedSection className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Our Coverage Network</h2>
              <p className="mt-4 text-lg text-brand-gray-dark">
                Explore our nationwide delivery network and see how we can serve your location with reliable fuel supply
                services.
              </p>
            </div>
            <InteractiveMap />
          </div>
        </AnimatedSection>

        {/* Interactive Fuel Calculator */}
        <AnimatedSection id="calculator" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Get Instant Fuel Quotes</h2>
              <p className="mt-4 text-lg text-brand-gray-dark">
                Calculate your fuel costs instantly with our interactive pricing calculator.
              </p>
            </div>
            <FuelCalculator />
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark">Get in Touch</h2>
                <p className="text-lg text-brand-gray-dark">
                  Contact us today for a quote, partnership inquiries, or emergency fuel needs. Our team is ready to
                  assist you 24/7.
                </p>

                {/* Enhanced Click-to-Call for Mobile */}
                <div className="md:hidden">
                  <EnhancedClickToCall />
                </div>

                <div className="space-y-6 hidden md:block">
                  <ContactInfo
                    icon={<MapPin className="h-6 w-6 text-brand-green" />}
                    title="Primary Business Address"
                    content="59A Muritala Eletu Way, Osapa London, Lekki, Lagos"
                  />
                  <ContactInfo
                    icon={<Phone className="h-6 w-6 text-brand-green" />}
                    title="Business Phone"
                    content={
                      <a href="tel:+2348012345678" className="hover:underline">
                        +234 801 234 5678
                      </a>
                    }
                  />
                  <ContactInfo
                    icon={<Mail className="h-6 w-6 text-brand-green" />}
                    title="General Inquiries"
                    content={
                      <a href="mailto:info@lynphyloilandgas.com" className="hover:underline">
                        info@lynphyloilandgas.com
                      </a>
                    }
                  />
                </div>
              </div>
              <div className="lg:col-span-3">
                <Card className="shadow-2xl border-t-4 border-brand-green rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-blue-dark">Request a Quote or Service</CardTitle>
                    <CardDescription>Fill out the form and we'll get back to you promptly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form action={formAction} className="space-y-6">
                      <Input name="name" placeholder="Your Full Name" required />
                      <Input name="email" type="email" placeholder="Email Address" required />
                      <Select name="service_type" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Service Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fuel-supply">Fuel Supply (AGO/PMS/DPK)</SelectItem>
                          <SelectItem value="logistics">Logistics & Transport</SelectItem>
                          <SelectItem value="technical">Technical Services</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Textarea name="message" placeholder="Your Message / Requirements" rows={4} required />
                      <Button
                        type="submit"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-lg py-3 rounded-full flex items-center justify-center gap-2"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <>
                            <Loader className="h-5 w-5 animate-spin" /> Sending...
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
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image src="/images/lynphyl-logo.jpg" width={40} height={40} alt="Lynphyl Oil & Gas Logo" />
                <span className="font-bold text-xl text-white">Lynphyl Oil & Gas</span>
              </Link>
              <p className="text-gray-300 max-w-md mb-6">
                Your trusted partner in powering Nigeria's growth through reliable energy solutions and logistics.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-brand-green p-2 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">24/7 Emergency Hotline</p>
                  <a href="tel:+2348012345678" className="text-lg font-bold text-white hover:text-brand-green">
                    +234 801 234 5678
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="/about">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/case-studies">Case Studies</FooterLink>
                </li>
                <li>
                  <FooterLink href="/careers">Careers</FooterLink>
                </li>
                <li>
                  <FooterLink href="/contact">Contact Us</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="/services/fuel-supply">Fuel Supply</FooterLink>
                </li>
                <li>
                  <FooterLink href="/services/logistics-transport">Logistics & Transport</FooterLink>
                </li>
                <li>
                  <FooterLink href="/services/technical-services">Technical Services</FooterLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-brand-blue text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Lynphyl Oil & Gas Limited. All Rights Reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Safety Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* PWA Components */}
      <PWAInstallPrompt />
      <OfflineIndicator />

      {/* Floating WhatsApp Button - Desktop Only */}
      <a
        href="https://wa.me/2348012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 z-50 items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.661 1.934 6.661L4 29l7.661-1.934A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.89-.573-5.537-1.658l-.395-.247-4.547 1.15 1.15-4.547-.247-.395A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.43c-.276-.138-1.633-.805-1.886-.897-.253-.092-.437-.138-.62.138-.184.276-.713.897-.874 1.083-.161.184-.322.207-.598.069-.276-.138-1.165-.429-2.22-1.366-.82-.731-1.375-1.634-1.537-1.91-.161-.276-.017-.425.121-.563.124-.123.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.069-.138-.62-1.497-.849-2.051-.224-.54-.452-.467-.62-.476l-.529-.009c-.184 0-.483.069-.737.345-.253.276-.966.945-.966 2.304s.99 2.667 1.128 2.853c.138.184 1.949 2.983 4.727 4.062.661.285 1.176.456 1.578.583.663.211 1.267.181 1.744.11.532-.079 1.633-.667 1.867-1.312.23-.645.23-1.198.161-1.312-.069-.115-.253-.184-.529-.322z"/>
          </g>
        </svg>
      </a>
    </div>
  )
}

// Helper Components
const StatItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex flex-col items-center">
    {icon}
    <p className="text-4xl font-bold mt-2">{value}</p>
    <p className="text-gray-300 mt-1">{label}</p>
  </div>
)

const CertificationLogo = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
    <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center">
      <Image
        src={`/placeholder.svg?width=48&height=48&query=${name}+certification+logo+white`}
        width={48}
        height={48}
        alt={`${name} Certification`}
      />
    </div>
    <p className="font-semibold text-sm">{name}</p>
  </div>
)

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-brand-blue-dark">{title}</h3>
      <div className="text-brand-gray-dark">{content}</div>
    </div>
  </div>
)

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  rating,
}: {
  quote: string
  author: string
  position: string
  company: string
  rating: number
}) => (
  <Card className="p-6 border-2 border-gray-100 hover:border-brand-green hover:shadow-xl transition-all duration-300 rounded-xl bg-white relative">
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <blockquote className="text-brand-gray-dark mb-6 italic">"{quote}"</blockquote>
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 bg-brand-green-light rounded-full flex items-center justify-center">
        <span className="text-brand-green font-bold text-lg">{author.charAt(0)}</span>
      </div>
      <div>
        <p className="font-bold text-brand-blue-dark">{author}</p>
        <p className="text-sm text-brand-gray">{position}</p>
        <p className="text-sm text-brand-green font-medium">{company}</p>
      </div>
    </div>
  </Card>
)

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqs = [
    {
      question: "What petroleum products do you supply?",
      answer:
        "We supply AGO (Automotive Gas Oil/Diesel), PMS (Premium Motor Spirit/Petrol), and DPK (Dual Purpose Kerosene) across all 36 states in Nigeria. All products meet DPR specifications and quality standards.",
    },
    {
      question: "What is your minimum order quantity for fuel delivery?",
      answer:
        "Our minimum order quantity is 10,000 liters for AGO and PMS, and 5,000 liters for DPK. We have trucks with capacities ranging from 10,000L to 45,000L to meet various customer needs.",
    },
    {
      question: "How do you ensure fuel quality and safety during transport?",
      answer:
        "All our products are sourced from certified depots and undergo quality testing. Our fleet is equipped with GPS tracking, safety equipment, and operated by certified drivers. We maintain full HSE compliance and insurance coverage.",
    },
    {
      question: "What areas do you cover for fuel delivery?",
      answer:
        "We provide nationwide coverage across all 36 states in Nigeria. Our primary operational base is in Lekki, Lagos, with strategic partnerships enabling efficient delivery to any location in the country.",
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg bg-white">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => setOpenItem(openItem === index ? null : index)}
          >
            <span className="font-semibold text-brand-blue-dark">{faq.question}</span>
            <ChevronRight
              className={`h-5 w-5 text-brand-green transition-transform ${openItem === index ? "rotate-90" : ""}`}
            />
          </button>
          {openItem === index && (
            <div className="px-6 pb-4">
              <p className="text-brand-gray-dark leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-300 hover:text-brand-green transition-colors flex items-center gap-2">
    <ChevronRight className="h-4 w-4" />
    {children}
  </Link>
)
