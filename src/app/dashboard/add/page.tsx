import React from 'react'
import CreateProductForm from '@/components/dashboard/Product/CreateProductForm'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from 'lucide-react'

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Page Heading */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-800">Add New Medicine</h1>
        <p className="text-slate-600">Fill out the form below to add a new product to your pharmacy inventory.</p>
      </div>

      <Separator />


       {/* Product Form */}
      <div>
        <CreateProductForm />
      </div>

      {/* Instructions / Notes */}
      <Alert variant="default" className="bg-blue-50 border-blue-300">
        <Info className="h-5 w-5 text-blue-500" />
        <AlertTitle className="text-blue-800 font-semibold">Instructions:</AlertTitle>
        <AlertDescription className="text-slate-700">
          <ul className="list-disc pl-5 space-y-1">
            <li>All fields marked with <span className="text-red-500">*</span> are required.</li>
            <li>Make sure the expiry date is in the future.</li>
            <li>For location, you can either select from suggestions like “Fridge” or enter your own like “Shelf A1”.</li>
            <li>Use accurate dosage and strength values (e.g., Tablet / 500mg).</li>
            <li>The product image is optional but highly recommended.</li>
          </ul>
        </AlertDescription>
      </Alert>

     
    </div>
  )
}
