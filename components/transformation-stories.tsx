"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Star, ArrowRight, Calendar, Target, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function TransformationStories() {
  const [activeStory, setActiveStory] = useState(0)

  const stories = [
    {
      client: "Lagos State Transport Corporation",
      industry: "Public Transportation",
      challenge: "Unreliable fuel supply causing frequent service disruptions",
      solution: "24/7 emergency fuel supply with GPS tracking and predictive delivery",
      timeline: "6 months",
      results: {
        before: {
          title: "Before Partnership",
          metrics: [
            { label: "Service Disruptions", value: "15-20/month", negative: true },
            { label: "Fuel Shortage Days", value: "8-12/month", negative: true },
            { label: "Emergency Purchases", value: "40% premium", negative: true },
            { label: "Fleet Utilization", value: "65%", negative: true },
          ],
          image: "/placeholder.svg?width=400&height=300",
        },
        after: {
          title: "After Partnership",
          metrics: [
            { label: "Service Disruptions", value: "1-2/month", positive: true },
            { label: "Fuel Shortage Days", value: "0/month", positive: true },
            { label: "Cost Savings", value: "25% reduction", positive: true },
            { label: "Fleet Utilization", value: "92%", positive: true },
          ],
          image: "/placeholder.svg?width=400&height=300",
        },
      },
      impact: "Improved public transportation reliability for 2.5 million daily commuters",
      testimonial: "Lynphyl transformed our fuel supply chain. We went from constant shortages to seamless operations.",
      author: "Adebayo Ogundimu, Operations Manager",
    },
    {
      client: "Northern Industries Manufacturing",
      industry: "Manufacturing",
      challenge: "High fuel costs and delivery delays affecting production schedules",
      solution: "Bulk supply contracts with predictive analytics and cost optimization",
      timeline: "4 months",
      results: {
        before: {
          title: "Previous Supplier",
          metrics: [
            { label: "Delivery Delays", value: "30% of orders", negative: true },
            { label: "Fuel Costs", value: "₦850/liter", negative: true },
            { label: "Production Downtime", value: "48 hours/month", negative: true },
            { label: "Supplier Reliability", value: "70%", negative: true },
          ],
          image: "/placeholder.svg?width=400&height=300",
        },
        after: {
          title: "With Lynphyl",
          metrics: [
            { label: "On-Time Delivery", value: "98% success", positive: true },
            { label: "Fuel Costs", value: "₦780/liter", positive: true },
            { label: "Production Downtime", value: "6 hours/month", positive: true },
            { label: "Supplier Reliability", value: "99%", positive: true },
          ],
          image: "/placeholder.svg?width=400&height=300",
        },
      },
      impact: "Increased production efficiency by 35% and reduced operational costs by ₦15M annually",
      testimonial: "The reliability and cost savings have been game-changing for our manufacturing operations.",
      author: "Fatima Abdullahi, Procurement Head",
    },
    {
      client: "Southeast Logistics Network",
      industry: "Logistics & Distribution",
      challenge: "Managing fuel supply across multiple locations with inconsistent quality",
      solution: "Centralized fuel management with quality assurance and real-time monitoring",
      timeline: "8 months",
      results: {
        before: {
          title: "Multiple Suppliers",
          metrics: [
            { label: "Quality Issues", value: "12% of deliveries", negative: true },
            { label: "Administrative Overhead", value: "40 hours/week", negative: true },
            { label: "Fuel Variance", value: "15% price difference", negative: true },
            { label: "Coverage Gaps", value: "3-4 states", negative: true },
          ],
          image: "/placeholder.svg?width=400&height=300",
        },
        after: {
          title: "Unified Solution",
          metrics: [
            { label: "Quality Consistency", value: "99.8% standard", positive: true },
            { label: "Admin Efficiency", value: "8 hours/week", positive: true },
            { label: "Price Stability", value: "2% variance max", positive: true },
            { label: "Full Coverage", value: "All 36 states", positive: true },
          ],
          image: "/placeholder.svg?width=400&height=300",
        },
      },
      impact: "Streamlined operations across 15 distribution centers with 60% reduction in fuel-related issues",
      testimonial: "One supplier, consistent quality, nationwide coverage - exactly what we needed for growth.",
      author: "Chinedu Okwu, Fleet Manager",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Story Selector */}
      <div className="flex flex-col lg:flex-row gap-4">
        {stories.map((story, index) => (
          <Button
            key={index}
            onClick={() => setActiveStory(index)}
            variant={activeStory === index ? "default" : "outline"}
            className={`flex-1 p-4 h-auto text-left ${
              activeStory === index ? "bg-brand-green hover:bg-brand-green/90" : ""
            }`}
          >
            <div>
              <div className="font-semibold">{story.client}</div>
              <div className="text-sm opacity-75">{story.industry}</div>
            </div>
          </Button>
        ))}
      </div>

      {/* Active Story */}
      <motion.div
        key={activeStory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-2 border-brand-green-light">
          <CardHeader className="bg-gradient-to-r from-brand-green-light to-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-brand-blue-dark">{stories[activeStory].client}</CardTitle>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="secondary" className="bg-brand-blue-dark text-white">
                    {stories[activeStory].industry}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-brand-gray-dark">
                    <Calendar className="h-4 w-4" />
                    {stories[activeStory].timeline} transformation
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-brand-green" />
                <span className="text-sm font-medium text-brand-green">Success Story</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  The Challenge
                </h3>
                <p className="text-brand-gray-dark leading-relaxed">{stories[activeStory].challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-green mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Our Solution
                </h3>
                <p className="text-brand-gray-dark leading-relaxed">{stories[activeStory].solution}</p>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Before */}
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader className="bg-red-100">
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 rotate-180" />
                    {stories[activeStory].results.before.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Image
                      src={stories[activeStory].results.before.image || "/placeholder.svg"}
                      alt="Before transformation"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    {stories[activeStory].results.before.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{metric.label}:</span>
                        <span className="font-bold text-red-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* After */}
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader className="bg-green-100">
                  <CardTitle className="text-green-700 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {stories[activeStory].results.after.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Image
                      src={stories[activeStory].results.after.image || "/placeholder.svg"}
                      alt="After transformation"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    {stories[activeStory].results.after.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{metric.label}:</span>
                        <span className="font-bold text-green-600">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact & Testimonial */}
            <div className="bg-brand-blue-dark text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Star className="h-6 w-6 text-brand-green" />
                    Business Impact
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{stories[activeStory].impact}</p>
                </div>
                <div>
                  <blockquote className="text-lg italic mb-4">"{stories[activeStory].testimonial}"</blockquote>
                  <cite className="text-brand-green font-medium">— {stories[activeStory].author}</cite>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <a href="#contact">
                  Start Your Transformation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Metrics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="text-2xl font-bold text-green-700">98%</div>
          <div className="text-sm text-green-600">Client Satisfaction</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="text-2xl font-bold text-blue-700">25%</div>
          <div className="text-sm text-blue-600">Average Cost Savings</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="text-2xl font-bold text-orange-700">90%</div>
          <div className="text-sm text-orange-600">Efficiency Improvement</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="text-2xl font-bold text-purple-700">36</div>
          <div className="text-sm text-purple-600">States Covered</div>
        </Card>
      </div>
    </div>
  )
}
