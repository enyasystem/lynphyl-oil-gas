"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, Truck, Building, Target } from "lucide-react"

export function CompanyHistory() {
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "Lynphyl Oil & Gas Limited was established in Lekki, Lagos with a vision to become Nigeria's leading indigenous petroleum marketing company.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-brand-blue-dark",
    },
    {
      year: "2015",
      title: "First Major Contract",
      description:
        "Secured our first major fuel supply contract with Lagos State Transport Corporation, delivering 500,000 liters of AGO monthly.",
      icon: <Target className="h-6 w-6" />,
      color: "bg-brand-green",
    },
    {
      year: "2016",
      title: "Fleet Expansion",
      description:
        "Expanded our fleet to 15 trucks with GPS tracking systems, enabling real-time monitoring and improved customer service.",
      icon: <Truck className="h-6 w-6" />,
      color: "bg-brand-orange",
    },
    {
      year: "2017",
      title: "Nationwide Coverage",
      description:
        "Achieved coverage across all 36 states through strategic partnerships and depot relationships nationwide.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-brand-blue-dark",
    },
    {
      year: "2019",
      title: "DPR Certification",
      description:
        "Obtained full DPR certification and compliance, reinforcing our commitment to quality and regulatory standards.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-brand-green",
    },
    {
      year: "2021",
      title: "Technical Services Launch",
      description:
        "Launched comprehensive technical services division, offering HSE consulting, equipment leasing, and field logistics support.",
      icon: <Target className="h-6 w-6" />,
      color: "bg-brand-orange",
    },
    {
      year: "2023",
      title: "500+ Deliveries Milestone",
      description:
        "Celebrated successful completion of over 500 major fuel deliveries with 98% customer satisfaction rate.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-brand-blue-dark",
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description:
        "Launched digital platforms for real-time tracking, online quotes, and enhanced customer experience across all touchpoints.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-brand-green",
    },
  ]

  const values = [
    {
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards, ensuring transparency in all our operations.",
      icon: <Award className="h-8 w-8 text-brand-green" />,
    },
    {
      title: "Excellence",
      description: "We strive for operational excellence in every delivery, maintaining the highest quality standards.",
      icon: <Target className="h-8 w-8 text-brand-green" />,
    },
    {
      title: "Innovation",
      description: "We embrace technology and innovative solutions to improve efficiency and customer experience.",
      icon: <Building className="h-8 w-8 text-brand-green" />,
    },
    {
      title: "Safety",
      description: "Safety is paramount in all our operations, from transportation to storage and delivery.",
      icon: <Users className="h-8 w-8 text-brand-green" />,
    },
  ]

  return (
    <div className="space-y-16">

      {/* Company Values */}
      <div className="bg-brand-gray-light rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-4">Our Core Values</h3>
          <p className="text-lg text-brand-gray-dark">
            The principles that guide our operations and define our commitment to excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-blue-dark mb-3">{value.title}</h4>
              <p className="text-brand-gray-dark">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Message */}
      <Card className="bg-brand-blue-dark text-white">
        <CardContent className="p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
            "Our vision is to be the most trusted and reliable indigenous petroleum marketing company in Nigeria,
            setting the standard for excellence in fuel supply and logistics services."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CEO</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Chief Executive Officer</p>
              <p className="text-gray-300">Lynphyl Oil & Gas Limited</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
