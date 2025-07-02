"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2, Calendar, Package, MapPin } from "lucide-react"

interface Medicine {
  id: string
  name: string
  dosage: string
  brand: string
  batch: string
  expiryDate: string
  quantity: number
  stockLevel: number
  shelf: string
  status: "In Stock" | "Low Stock" | "Out of Stock"
}

const medicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol",
    dosage: "500mg",
    brand: "Square",
    batch: "SO2024001",
    expiryDate: "12/31/2025",
    quantity: 100,
    stockLevel: 53,
    shelf: "1A",
    status: "In Stock",
  },
  {
    id: "2",
    name: "Omeprazole",
    dosage: "20mg",
    brand: "Beximco",
    batch: "BX2024002",
    expiryDate: "6/30/2024",
    quantity: 5,
    stockLevel: 6,
    shelf: "2B",
    status: "Low Stock",
  },
]

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800 border-green-200"
      case "Low Stock":
        return "bg-red-100 text-red-800 border-red-200"
      case "Out of Stock":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.brand.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Inventory</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Medicine
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white border-gray-200"
          />
        </div>

        {/* Medicine Cards */}
        <div className="space-y-4">
          {filteredMedicines.map((medicine) => (
            <Card key={medicine.id} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {medicine.name} {medicine.dosage}
                        </h3>
                        <p className="text-sm text-gray-600">{medicine.brand}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Package className="w-4 h-4 mr-2" />
                        <span>Batch: {medicine.batch}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Expires: {medicine.expiryDate}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Package className="w-4 h-4 mr-2" />
                        <span>Qty: {medicine.quantity}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Shelf {medicine.shelf}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">{medicine.stockLevel}</div>
                      <Badge variant="outline" className={`${getStatusColor(medicine.status)} font-medium`}>
                        {medicine.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No medicines found</h3>
            <p className="text-gray-600">Try adjusting your search terms or add a new medicine.</p>
          </div>
        )}
      </div>
    </div>
  )
}
