"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calculator, Fuel, Truck, MapPin } from "lucide-react"

export function FuelCalculator() {
  const [fuelType, setFuelType] = useState("")
  const [quantity, setQuantity] = useState("")
  const [location, setLocation] = useState("")
  const [estimate, setEstimate] = useState<{
    fuelCost: number
    deliveryCost: number
    total: number
    deliveryTime: string
  } | null>(null)

  // Sample pricing (in real app, this would come from API)
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

  const deliveryTimes = {
    lagos: "4-6 hours",
    southwest: "12-24 hours",
    southeast: "24-48 hours",
    northcentral: "24-48 hours",
    northeast: "48-72 hours",
    northwest: "48-72 hours",
  }

  const calculateEstimate = () => {
    if (!fuelType || !quantity || !location) return

    const qty = Number.parseInt(quantity)
    const fuelPrice = fuelPrices[fuelType as keyof typeof fuelPrices]
    const deliveryRate = deliveryRates[location as keyof typeof deliveryRates]
    const deliveryTime = deliveryTimes[location as keyof typeof deliveryTimes]

    const fuelCost = qty * fuelPrice
    const deliveryCost = deliveryRate
    const total = fuelCost + deliveryCost

    setEstimate({
      fuelCost,
      deliveryCost,
      total,
      deliveryTime,
    })
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-2xl border-t-4 border-brand-green">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-brand-blue-dark flex items-center justify-center gap-3">
          <Calculator className="h-6 w-6 text-brand-green" />
          Fuel Cost Calculator
        </CardTitle>
        <p className="text-brand-gray-dark">Get instant pricing estimates for your fuel requirements</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-blue-dark mb-2">
              <Fuel className="h-4 w-4 inline mr-1" />
              Fuel Type
            </label>
            <Select value={fuelType} onValueChange={setFuelType}>
              <SelectTrigger>
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ago">AGO (Diesel) - ₦850/L</SelectItem>
                <SelectItem value="pms">PMS (Petrol) - ₦650/L</SelectItem>
                <SelectItem value="dpk">DPK (Kerosene) - ₦750/L</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-blue-dark mb-2">Quantity (Liters)</label>
            <Input
              type="number"
              placeholder="e.g., 10000"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-blue-dark mb-2">
            <MapPin className="h-4 w-4 inline mr-1" />
            Delivery Location
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select delivery region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lagos">Lagos & Ogun States</SelectItem>
              <SelectItem value="southwest">Southwest (Oyo, Osun, Ondo, Ekiti)</SelectItem>
              <SelectItem value="southeast">Southeast (Anambra, Imo, Abia, Enugu, Ebonyi)</SelectItem>
              <SelectItem value="northcentral">
                North Central (FCT, Niger, Kwara, Kogi, Plateau, Nasarawa, Benue)
              </SelectItem>
              <SelectItem value="northeast">Northeast (Adamawa, Bauchi, Borno, Gombe, Taraba, Yobe)</SelectItem>
              <SelectItem value="northwest">
                Northwest (Kaduna, Kano, Katsina, Kebbi, Sokoto, Zamfara, Jigawa)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculateEstimate}
          className="w-full bg-brand-green hover:bg-brand-green/90 text-white text-lg py-3"
          disabled={!fuelType || !quantity || !location}
        >
          Calculate Estimate
        </Button>

        {estimate && (
          <div className="bg-brand-gray-light p-6 rounded-lg space-y-4">
            <h3 className="font-bold text-brand-blue-dark text-lg">Cost Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Fuel Cost ({quantity}L):</span>
                <span className="font-bold">₦{estimate.fuelCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Cost:</span>
                <span className="font-bold">₦{estimate.deliveryCost.toLocaleString()}</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg">
                <span className="font-bold">Total Estimate:</span>
                <span className="font-bold text-brand-green">₦{estimate.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-brand-gray-dark">
                <span>Estimated Delivery Time:</span>
                <span className="font-medium">{estimate.deliveryTime}</span>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-brand-gray-dark mb-4">
                *Prices are estimates and may vary based on current market rates and specific requirements.
              </p>
              <Button asChild className="w-full bg-brand-blue-dark hover:bg-brand-blue text-white">
                <a href="tel:+2348012345678">
                  <Truck className="h-4 w-4 mr-2" />
                  Call to Confirm Order: +234 801 234 5678
                </a>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
