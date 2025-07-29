"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Truck, Clock, Phone } from "lucide-react"
import Image from "next/image"

export function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const regions = {
    lagos: {
      name: "Lagos & Ogun States",
      deliveryTime: "4-6 hours",
      coverage: "Lagos, Ogun",
      description: "Our primary operational base with fastest delivery times",
      color: "#008753",
      position: { x: "12%", y: "75%" }, // Lagos position on the map
    },
    southwest: {
      name: "Southwest Region",
      deliveryTime: "12-24 hours",
      coverage: "Oyo, Osun, Ondo, Ekiti",
      description: "Comprehensive coverage across Southwest Nigeria",
      color: "#1A5A9A",
      position: { x: "20%", y: "65%" }, // Southwest region
    },
    southeast: {
      name: "Southeast Region",
      deliveryTime: "24-48 hours",
      coverage: "Anambra, Imo, Abia, Enugu, Ebonyi",
      description: "Reliable service to major commercial centers",
      color: "#F7941D",
      position: { x: "55%", y: "70%" }, // Southeast region
    },
    southsouth: {
      name: "South-South Region",
      deliveryTime: "24-48 hours",
      coverage: "Rivers, Delta, Bayelsa, Cross River, Akwa Ibom, Edo",
      description: "Strategic partnerships for oil-rich region coverage",
      color: "#6C757D",
      position: { x: "40%", y: "80%" }, // South-South region
    },
    northcentral: {
      name: "North Central Region",
      deliveryTime: "24-48 hours",
      coverage: "FCT, Niger, Kwara, Kogi, Plateau, Nasarawa, Benue",
      description: "Federal capital territory and surrounding states",
      color: "#0D2C54",
      position: { x: "45%", y: "45%" }, // North Central region
    },
    northeast: {
      name: "Northeast Region",
      deliveryTime: "48-72 hours",
      coverage: "Adamawa, Bauchi, Borno, Gombe, Taraba, Yobe",
      description: "Extended reach to northeastern commercial hubs",
      color: "#8B5CF6",
      position: { x: "75%", y: "25%" }, // Northeast region
    },
    northwest: {
      name: "Northwest Region",
      deliveryTime: "48-72 hours",
      coverage: "Kaduna, Kano, Katsina, Kebbi, Sokoto, Zamfara, Jigawa",
      description: "Comprehensive northern Nigeria coverage",
      color: "#EF4444",
      position: { x: "25%", y: "20%" }, // Northwest region
    },
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Map Visualization */}
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-blue-dark">
              <MapPin className="h-6 w-6 text-brand-green" />
              Nigeria Coverage Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-white rounded-lg p-4 min-h-[500px] flex items-center justify-center border-2 border-gray-100">
              {/* Actual Nigeria Map */}
              <div className="relative w-full max-w-2xl">
                <Image
                  src="images/nigeria-map.png"
                  alt="Nigeria Map with States"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />

                {/* Interactive Regional Markers Overlaid on the Map */}
                {Object.entries(regions).map(([key, region]) => (
                  <div
                    key={key}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: region.position.x,
                      top: region.position.y,
                    }}
                    onClick={() => setSelectedRegion(selectedRegion === key ? null : key)}
                  >
                    {/* Regional Marker */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:scale-125 ${
                        selectedRegion === key ? "scale-125 ring-4 ring-white ring-opacity-50" : ""
                      }`}
                      style={{
                        backgroundColor: selectedRegion === key ? region.color : "#e5e7eb",
                      }}
                    />

                    {/* Region Label */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {region.name}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Headquarters Marker - Lagos */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: "12%", top: "75%" }}
                >
                  <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">HQ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-brand-gray-dark">
                Click on any colored region marker to view delivery details • Red dot indicates our Lekki headquarters
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Region Details */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-blue-dark">Coverage Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-brand-green-light p-2 rounded-full">
                <MapPin className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <p className="font-semibold text-brand-blue-dark">36 States + FCT</p>
                <p className="text-sm text-brand-gray-dark">Complete Nigeria coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-brand-green-light p-2 rounded-full">
                <Truck className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <p className="font-semibold text-brand-blue-dark">500+ Deliveries</p>
                <p className="text-sm text-brand-gray-dark">Successful nationwide</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-brand-green-light p-2 rounded-full">
                <Clock className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <p className="font-semibold text-brand-blue-dark">24/7 Service</p>
                <p className="text-sm text-brand-gray-dark">Emergency response</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Legend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-blue-dark text-lg">Regional Coverage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(regions).map(([key, region]) => (
              <div
                key={key}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  selectedRegion === key ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                onClick={() => setSelectedRegion(selectedRegion === key ? null : key)}
              >
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: region.color }}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-brand-blue-dark">{region.name}</p>
                  <p className="text-xs text-brand-gray-dark">{region.deliveryTime}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {selectedRegion && (
          <Card className="border-l-4 border-brand-green">
            <CardHeader>
              <CardTitle className="text-lg text-brand-blue-dark">
                {regions[selectedRegion as keyof typeof regions].name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium text-brand-gray-dark">Coverage:</p>
                <p className="text-brand-blue-dark">{regions[selectedRegion as keyof typeof regions].coverage}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-gray-dark">Delivery Time:</p>
                <p className="text-brand-green font-semibold">
                  {regions[selectedRegion as keyof typeof regions].deliveryTime}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-gray-dark">Description:</p>
                <p className="text-brand-gray-dark text-sm">
                  {regions[selectedRegion as keyof typeof regions].description}
                </p>
              </div>
              <Button asChild className="w-full bg-brand-green hover:bg-brand-green/90 text-white mt-4">
                <a href="tel:+2348012345678">
                  <Phone className="h-4 w-4 mr-2" />
                  Request Delivery
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        {!selectedRegion && (
          <Card className="bg-brand-blue-dark text-white">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Select a Region</h3>
              <p className="text-gray-300 text-sm">
                Click on any colored marker on the map to view detailed delivery information and coverage areas.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
