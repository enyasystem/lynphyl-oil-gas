"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  GraduationCap,
  Shield,
  Zap,
  Star,
  Upload,
  Send,
  CheckCircle,
} from "lucide-react"

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const openPositions = [
    {
      id: 1,
      title: "Senior Logistics Coordinator",
      department: "Operations",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₦200,000 - ₦350,000",
      posted: "2 days ago",
      description:
        "We are seeking an experienced Logistics Coordinator to manage our nationwide fuel distribution network. The ideal candidate will have strong organizational skills and experience in petroleum logistics.",
      responsibilities: [
        "Coordinate fuel deliveries across multiple states",
        "Manage relationships with depot partners",
        "Optimize delivery routes and schedules",
        "Ensure compliance with safety regulations",
        "Monitor GPS tracking systems",
        "Prepare logistics reports and analytics",
      ],
      requirements: [
        "Bachelor's degree in Logistics, Supply Chain, or related field",
        "3-5 years experience in petroleum or logistics industry",
        "Strong knowledge of Nigerian geography and road networks",
        "Proficiency in logistics software and GPS systems",
        "Excellent communication and problem-solving skills",
        "Valid driver's license and willingness to travel",
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health insurance",
        "Professional development opportunities",
        "Company vehicle allowance",
      ],
    },
    {
      id: 2,
      title: "HSE Officer",
      department: "Safety & Compliance",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₦180,000 - ₦280,000",
      posted: "5 days ago",
      description:
        "Join our safety team to ensure all operations meet the highest HSE standards. This role involves conducting safety audits, training staff, and maintaining compliance with regulatory requirements.",
      responsibilities: [
        "Conduct regular HSE audits and inspections",
        "Develop and implement safety procedures",
        "Provide HSE training to staff and drivers",
        "Investigate incidents and prepare reports",
        "Ensure regulatory compliance (DPR, NUPRC)",
        "Maintain safety documentation and records",
      ],
      requirements: [
        "Bachelor's degree in Engineering, Environmental Science, or related field",
        "2-4 years HSE experience in oil & gas industry",
        "Professional HSE certifications (NEBOSH preferred)",
        "Knowledge of Nigerian petroleum regulations",
        "Strong analytical and reporting skills",
        "Excellent presentation and training abilities",
      ],
      benefits: [
        "Professional certification sponsorship",
        "Health and safety insurance",
        "Career advancement opportunities",
        "Training and development programs",
      ],
    },
    {
      id: 3,
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Abuja, FCT",
      type: "Full-time",
      experience: "4-7 years",
      salary: "₦300,000 - ₦500,000",
      posted: "1 week ago",
      description:
        "Drive business growth by identifying new opportunities, building client relationships, and expanding our market presence across Northern Nigeria.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Prepare proposals and negotiate contracts",
        "Conduct market research and analysis",
        "Represent company at industry events",
        "Achieve monthly and quarterly sales targets",
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "4-7 years business development experience",
        "Proven track record in B2B sales",
        "Strong network in Nigerian business community",
        "Excellent negotiation and presentation skills",
        "Willingness to travel extensively",
      ],
      benefits: [
        "Attractive commission structure",
        "Company car and fuel allowance",
        "Travel and entertainment allowance",
        "Performance-based bonuses",
      ],
    },
    {
      id: 4,
      title: "Fleet Maintenance Technician",
      department: "Technical Services",
      location: "Lagos, Nigeria",
      type: "Contract",
      experience: "2-3 years",
      salary: "₦120,000 - ₦200,000",
      posted: "3 days ago",
      description:
        "Maintain our fleet of fuel tankers and support vehicles to ensure optimal performance and safety standards. This hands-on role requires strong mechanical skills.",
      responsibilities: [
        "Perform routine maintenance on fuel tankers",
        "Diagnose and repair mechanical issues",
        "Conduct pre-trip and post-trip inspections",
        "Maintain maintenance records and schedules",
        "Ensure compliance with safety standards",
        "Coordinate with external service providers",
      ],
      requirements: [
        "Technical diploma in Mechanical Engineering or Automotive",
        "2-3 years experience in heavy vehicle maintenance",
        "Knowledge of diesel engines and hydraulic systems",
        "Ability to work with diagnostic equipment",
        "Strong problem-solving skills",
        "Physical fitness for hands-on work",
      ],
      benefits: [
        "Skills development programs",
        "Safety equipment provided",
        "Overtime compensation",
        "Health insurance coverage",
      ],
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-brand-green" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance-based bonuses and annual reviews",
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-green" />,
      title: "Comprehensive Health Benefits",
      description: "Full medical, dental, and vision coverage for you and your family",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-brand-green" />,
      title: "Professional Development",
      description: "Training programs, certifications, and career advancement opportunities",
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-green" />,
      title: "Job Security & Stability",
      description: "Stable employment with a growing indigenous Nigerian company",
    },
    {
      icon: <Users className="h-8 w-8 text-brand-green" />,
      title: "Team Environment",
      description: "Collaborative culture with supportive colleagues and leadership",
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-green" />,
      title: "Innovation & Growth",
      description: "Be part of Nigeria's energy transformation with cutting-edge technology",
    },
  ]

  const companyValues = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
      icon: <Star className="h-6 w-6 text-brand-green" />,
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical business practices",
      icon: <Shield className="h-6 w-6 text-brand-green" />,
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and creative solutions",
      icon: <Zap className="h-6 w-6 text-brand-green" />,
    },
    {
      title: "Teamwork",
      description: "Collaborative approach to achieving common goals",
      icon: <Users className="h-6 w-6 text-brand-green" />,
    },
  ]

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setApplicationSubmitted(true)
    setTimeout(() => setApplicationSubmitted(false), 5000)
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Career with Lynphyl</h1>
            <p className="text-xl text-gray-200 mb-8">
              Join Nigeria's leading indigenous oil and gas company and be part of a team that's powering the nation's
              growth. We offer exciting opportunities, competitive benefits, and a culture of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="#open-positions">View Open Positions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
              >
                <Link href="#company-culture">Learn About Our Culture</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <AnimatedSection className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">50+</div>
              <div className="text-brand-gray-dark">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">10+</div>
              <div className="text-brand-gray-dark">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">36</div>
              <div className="text-brand-gray-dark">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue-dark">98%</div>
              <div className="text-brand-gray-dark">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection id="open-positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Current Openings</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Discover exciting career opportunities across our operations. We're always looking for talented
              individuals to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-brand-blue-dark">{job.title}</CardTitle>
                        <Badge variant="secondary" className="bg-brand-green-light text-brand-green">
                          {job.department}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-gray">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" /> {job.experience}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <DollarSign className="h-4 w-4" /> {job.salary}
                        </span>
                      </div>
                      <p className="text-brand-gray-dark mt-3">{job.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm text-brand-gray">Posted {job.posted}</span>
                      <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
                        {selectedJob === job.id ? "Hide Details" : "View Details"}
                      </Button>
                    </div>
                  </div>

                  {/* Job Details */}
                  {selectedJob === job.id && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-brand-blue-dark mb-4">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((responsibility, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                                <span className="text-brand-gray-dark text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-blue-dark mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                                <span className="text-brand-gray-dark text-sm">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="font-bold text-brand-blue-dark mb-4">Benefits & Perks</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, index) => (
                            <Badge key={index} variant="outline" className="border-brand-green text-brand-green">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <Button asChild size="lg" className="bg-brand-blue-dark hover:bg-brand-blue text-white mr-4">
                          <Link href="#apply">Apply for This Position</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                          <a href="mailto:careers@lynphyloilandgas.com">Ask Questions</a>
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits & Perks */}
      <AnimatedSection className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Why Work With Us?</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and a supportive work
              environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-brand-green-light p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg text-brand-blue-dark mb-3">{benefit.title}</CardTitle>
                <p className="text-brand-gray-dark">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Company Culture */}
      <AnimatedSection id="company-culture" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Our Company Culture</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Built on strong values and a commitment to excellence, our culture fosters growth, innovation, and
              collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center border-2 border-gray-100 hover:border-brand-green transition-colors"
              >
                <div className="bg-brand-green-light p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {value.icon}
                </div>
                <CardTitle className="text-lg text-brand-blue-dark mb-3">{value.title}</CardTitle>
                <p className="text-brand-gray-dark text-sm">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-6">Life at Lynphyl</h3>
              <div className="space-y-4 text-brand-gray-dark">
                <p>
                  At Lynphyl, we believe that our people are our greatest asset. We've created an environment where
                  innovation thrives, ideas are valued, and every team member has the opportunity to make a meaningful
                  impact.
                </p>
                <p>
                  Our collaborative culture encourages open communication, continuous learning, and professional growth.
                  Whether you're just starting your career or looking to take the next step, we provide the support and
                  resources you need to succeed.
                </p>
                <p>
                  Join us in our mission to power Nigeria's growth while building a rewarding career in one of the
                  country's most dynamic industries.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?width=600&height=400"
                alt="Team collaboration at Lynphyl"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Application Form */}
      <AnimatedSection id="apply" className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-4">Apply Now</h2>
              <p className="text-lg text-brand-gray-dark">
                Ready to join our team? Submit your application and we'll get back to you within 48 hours.
              </p>
            </div>

            <Card className="shadow-2xl border-t-4 border-brand-green">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-blue-dark">Job Application Form</CardTitle>
                <p className="text-brand-gray-dark">
                  Please fill out all required fields and attach your resume and cover letter.
                </p>
              </CardHeader>
              <CardContent>
                {applicationSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-brand-green mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-brand-blue-dark mb-4">Application Submitted!</h3>
                    <p className="text-brand-gray-dark">
                      Thank you for your interest in joining Lynphyl. We'll review your application and get back to you
                      within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplicationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" required />
                      <Input placeholder="Last Name" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input type="email" placeholder="Email Address" required />
                      <Input type="tel" placeholder="Phone Number" required />
                    </div>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Position Applying For" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map((job) => (
                          <SelectItem key={job.id} value={job.title}>
                            {job.title} - {job.location}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other Position</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Years of Experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Preferred Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                          <SelectItem value="any">Any Location</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Textarea
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for Lynphyl..."
                      rows={4}
                      required
                    />
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-blue-dark mb-2">
                          Upload Resume (PDF, DOC, DOCX)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-green transition-colors">
                          <Upload className="h-8 w-8 text-brand-gray mx-auto mb-2" />
                          <p className="text-brand-gray-dark">Click to upload or drag and drop</p>
                          <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-blue-dark mb-2">
                          Upload Cover Letter (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-green transition-colors">
                          <Upload className="h-8 w-8 text-brand-gray mx-auto mb-2" />
                          <p className="text-brand-gray-dark">Click to upload or drag and drop</p>
                          <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-lg py-3 rounded-full"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Submit Application
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-transparent border-white/20 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Don't See the Right Position?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always interested in hearing from talented professionals who share our passion for excellence.
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-blue-dark bg-transparent"
                >
                  <a href="mailto:careers@lynphyloilandgas.com">
                    <Send className="h-5 w-5 mr-2" />
                    Send Your Resume
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                  <Link href="/contact">Contact HR Department</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
