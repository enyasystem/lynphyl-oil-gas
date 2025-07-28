"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, Briefcase, GraduationCap, Calendar, Star, Coffee, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function TeamCulture() {
  const [activeSection, setActiveSection] = useState<"leadership" | "team" | "culture">("leadership")

  const leadership = [
    {
      name: "Adebayo Johnson",
      position: "Chief Executive Officer",
      experience: "15+ years in Oil & Gas",
      education: "MBA, University of Lagos",
      specialization: "Strategic Planning & Business Development",
      quote: "Our vision is to be Nigeria's most trusted indigenous petroleum marketing company.",
      image: "/placeholder.svg?width=300&height=400",
      achievements: ["Led 300% company growth", "Expanded to all 36 states", "Built strategic partnerships"],
    },
    {
      name: "Fatima Abdullahi",
      position: "Chief Operations Officer",
      experience: "12+ years in Logistics",
      education: "B.Eng Petroleum Engineering, ABU",
      specialization: "Supply Chain & Fleet Management",
      quote: "Excellence in operations is the foundation of customer trust and satisfaction.",
      image: "/placeholder.svg?width=300&height=400",
      achievements: ["Implemented GPS tracking", "Achieved 98% on-time delivery", "Built safety protocols"],
    },
    {
      name: "Chinedu Okwu",
      position: "Head of Business Development",
      experience: "10+ years in Sales",
      education: "B.Sc Business Administration, UI",
      specialization: "Client Relations & Market Expansion",
      quote: "Every client partnership is built on trust, reliability, and mutual success.",
      image: "/placeholder.svg?width=300&height=400",
      achievements: ["500+ successful deliveries", "Built client network", "Expanded market reach"],
    },
  ]

  const teamMembers = [
    {
      department: "Operations Team",
      description: "The backbone of our daily operations, ensuring safe and efficient fuel delivery",
      members: [
        {
          name: "Ibrahim Hassan",
          role: "Fleet Manager",
          image: "/placeholder.svg?width=200&height=250",
          experience: "8 years",
        },
        {
          name: "Grace Okafor",
          role: "Quality Control Specialist",
          image: "/placeholder.svg?width=200&height=250",
          experience: "6 years",
        },
        {
          name: "Musa Garba",
          role: "Safety Coordinator",
          image: "/placeholder.svg?width=200&height=250",
          experience: "10 years",
        },
        {
          name: "Blessing Eze",
          role: "Logistics Coordinator",
          image: "/placeholder.svg?width=200&height=250",
          experience: "5 years",
        },
      ],
    },
    {
      department: "Customer Service",
      description: "Dedicated to providing exceptional 24/7 support and building lasting relationships",
      members: [
        {
          name: "Kemi Adebayo",
          role: "Customer Success Manager",
          image: "/placeholder.svg?width=200&height=250",
          experience: "7 years",
        },
        {
          name: "Ahmed Bello",
          role: "Emergency Response Coordinator",
          image: "/placeholder.svg?width=200&height=250",
          experience: "9 years",
        },
        {
          name: "Chioma Nwankwo",
          role: "Client Relations Specialist",
          image: "/placeholder.svg?width=200&height=250",
          experience: "4 years",
        },
      ],
    },
    {
      department: "Technical Services",
      description: "Expert engineers and technicians providing specialized oil & gas solutions",
      members: [
        {
          name: "Olumide Ajayi",
          role: "Senior Technical Engineer",
          image: "/placeholder.svg?width=200&height=250",
          experience: "12 years",
        },
        {
          name: "Aisha Mohammed",
          role: "HSE Specialist",
          image: "/placeholder.svg?width=200&height=250",
          experience: "8 years",
        },
        {
          name: "Emeka Okonkwo",
          role: "Equipment Specialist",
          image: "/placeholder.svg?width=200&height=250",
          experience: "6 years",
        },
      ],
    },
  ]

  const cultureValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "People First",
      description: "We prioritize the wellbeing, growth, and success of our team members",
      color: "bg-red-500",
      examples: [
        "Comprehensive health insurance",
        "Professional development programs",
        "Work-life balance initiatives",
      ],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence Driven",
      description: "We strive for the highest standards in everything we do",
      color: "bg-blue-500",
      examples: ["Continuous training programs", "Quality management systems", "Performance recognition"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "We believe in the power of working together towards common goals",
      color: "bg-green-500",
      examples: ["Cross-functional projects", "Team building activities", "Open communication culture"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation Focus",
      description: "We embrace new technologies and creative solutions",
      color: "bg-orange-500",
      examples: ["GPS tracking systems", "Digital transformation", "Process optimization"],
    },
  ]

  const workLifeImages = [
    {
      src: "/placeholder.svg?width=400&height=300",
      caption: "Strategic planning session at our Lekki headquarters",
    },
    {
      src: "/placeholder.svg?width=400&height=300",
      caption: "Daily safety briefing with our professional drivers",
    },
    {
      src: "/placeholder.svg?width=400&height=300",
      caption: "Celebrating another successful quarter with the team",
    },
    {
      src: "/placeholder.svg?width=400&height=300",
      caption: "Continuous learning through professional development programs",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Section Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => setActiveSection("leadership")}
          variant={activeSection === "leadership" ? "default" : "outline"}
          className={`${activeSection === "leadership" ? "bg-brand-green hover:bg-brand-green/90" : ""}`}
        >
          <Briefcase className="h-4 w-4 mr-2" />
          Leadership
        </Button>
        <Button
          onClick={() => setActiveSection("team")}
          variant={activeSection === "team" ? "default" : "outline"}
          className={`${activeSection === "team" ? "bg-brand-green hover:bg-brand-green/90" : ""}`}
        >
          <Users className="h-4 w-4 mr-2" />
          Our Team
        </Button>
        <Button
          onClick={() => setActiveSection("culture")}
          variant={activeSection === "culture" ? "default" : "outline"}
          className={`${activeSection === "culture" ? "bg-brand-green hover:bg-brand-green/90" : ""}`}
        >
          <Heart className="h-4 w-4 mr-2" />
          Culture & Values
        </Button>
      </div>

      {/* Leadership Section */}
      {activeSection === "leadership" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue-dark mb-4">Executive Leadership</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Meet the experienced leaders driving Lynphyl's vision of becoming Nigeria's most trusted indigenous
              petroleum marketing company.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-brand-green">{leader.position}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-brand-gray-dark">
                      <Briefcase className="h-4 w-4" />
                      {leader.experience}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-gray-dark">
                      <GraduationCap className="h-4 w-4" />
                      {leader.education}
                    </div>
                    <div>
                      <Badge variant="secondary" className="bg-brand-green-light text-brand-green">
                        {leader.specialization}
                      </Badge>
                    </div>

                    <blockquote className="italic text-brand-gray-dark border-l-4 border-brand-green pl-4">
                      "{leader.quote}"
                    </blockquote>

                    <div>
                      <h4 className="font-semibold text-brand-blue-dark mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {leader.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-brand-gray-dark">
                            <Star className="h-3 w-3 text-brand-green" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}

      {/* Team Section */}
      {activeSection === "team" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue-dark mb-4">Meet Our Team</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              Our diverse team of professionals brings together expertise from across Nigeria's energy sector to deliver
              exceptional service.
            </p>
          </div>

          <div className="space-y-12">
            {teamMembers.map((department, deptIndex) => (
              <div key={deptIndex}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">{department.department}</h3>
                  <p className="text-brand-gray-dark">{department.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {department.members.map((member, memberIndex) => (
                    <Card key={memberIndex} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="relative mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={200}
                            height={250}
                            className="w-32 h-40 object-cover rounded-lg mx-auto"
                          />
                        </div>
                        <h4 className="font-bold text-brand-blue-dark mb-1">{member.name}</h4>
                        <p className="text-brand-green font-medium mb-2">{member.role}</p>
                        <div className="flex items-center justify-center gap-1 text-sm text-brand-gray-dark">
                          <Calendar className="h-3 w-3" />
                          {member.experience} experience
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Culture Section */}
      {activeSection === "culture" && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue-dark mb-4">Our Culture & Values</h2>
            <p className="text-lg text-brand-gray-dark max-w-3xl mx-auto">
              At Lynphyl, our culture is built on strong values that guide how we work, serve our clients, and
              contribute to Nigeria's energy sector.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cultureValues.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div
                  className={`${value.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                >
                  {value.icon}
                </div>
                <h3 className="font-bold text-brand-blue-dark mb-3">{value.title}</h3>
                <p className="text-brand-gray-dark mb-4 text-sm">{value.description}</p>
                <div className="space-y-2">
                  {value.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-gray-dark">
                      <div className="w-1 h-1 bg-brand-green rounded-full" />
                      {example}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Work Life Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brand-blue-dark text-center mb-8">Life at Lynphyl</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {workLifeImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.caption}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Our Team CTA */}
          <Card className="bg-brand-blue-dark text-white text-center p-8">
            <div className="max-w-2xl mx-auto">
              <Coffee className="h-12 w-12 text-brand-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals who share our passion for excellence and want to
                contribute to Nigeria's energy future.
              </p>
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <a href="mailto:careers@lynphyloilandgas.com">
                  <Users className="h-5 w-5 mr-2" />
                  Explore Careers
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
