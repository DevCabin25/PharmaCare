import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Pill, AlertTriangle, Calendar } from "lucide-react"

export default function  dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back to your pharmacy management system</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Today's Sales */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{"Today's Sales"}</p>
                  <p className="text-2xl font-bold text-gray-900">$56.00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Total Medicines */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Pill className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Medicines</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Low Stock */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Low Stock</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expiring Soon */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts Section */}
        <div className="space-y-4">
          {/* Low Stock Alert */}
          <Card className="bg-white border-l-4 border-l-yellow-500">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-yellow-700">
                <AlertTriangle className="h-5 w-5" />
                <span>Low Stock Alert</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Omeprazole 20mg</p>
                  <p className="text-sm text-gray-600 flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span>Shelf 2B</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">5 left</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expiring Soon Alert */}
          <Card className="bg-white border-l-4 border-l-red-500">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <Calendar className="h-5 w-5" />
                <span>Expiring Soon</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Omeprazole 20mg</p>
                  <p className="text-sm text-gray-600">Beximco</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">6/30/2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
