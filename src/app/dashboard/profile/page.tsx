"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function PharmacyProfile() {
  const [pharmacy] = useState({
    name: "GreenLeaf Pharmacy",
    regNo: "PHM-202543",
    owner: "Dr. Fardin Ahmed",
    location: "123/A Mirpur, Dhaka, Bangladesh",
    description: "Serving community healthcare with quality medicines since 2010.",
    totalMedicines: 148,
    facebook: "https://facebook.com/greenleafpharmacy",
    instagram: "https://instagram.com/greenleafpharmacy",
    whatsapp: "https://wa.me/8801234567890",
    qrImage: "/images/pharmacy-qr.png",
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      {/* Pharmacy Info */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">🏥 Pharmacy Information</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <Label>Pharmacy Name</Label>
            <Input value={pharmacy.name} readOnly />
          </div>
          <div>
            <Label>Registration No</Label>
            <Input value={pharmacy.regNo} readOnly />
          </div>
          <div>
            <Label>Owner Name</Label>
            <Input value={pharmacy.owner} readOnly />
          </div>
          <div className="md:col-span-2">
            <Label>About Pharmacy</Label>
            <Textarea value={pharmacy.description} readOnly />
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">📍 Location</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Address</Label>
          <Textarea value={pharmacy.location} readOnly />
        </CardContent>
      </Card>

      {/* Medicine Summary */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">📦 Medicine Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 rounded-xl shadow-sm py-6">
            <p className="text-3xl font-bold text-primary">{pharmacy.totalMedicines}</p>
            <p className="text-sm text-gray-500">Total Medicines</p>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">🌐 Social Media</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <Label>Facebook</Label>
            <Input value={pharmacy.facebook} readOnly />
            <Link href={pharmacy.facebook} target="_blank" className="text-blue-600 text-sm mt-1 inline-block hover:underline">
              Visit Page
            </Link>
          </div>
          <div>
            <Label>Instagram</Label>
            <Input value={pharmacy.instagram} readOnly />
            <Link href={pharmacy.instagram} target="_blank" className="text-pink-500 text-sm mt-1 inline-block hover:underline">
              Visit Profile
            </Link>
          </div>
          <div>
            <Label>WhatsApp</Label>
            <Input value={pharmacy.whatsapp} readOnly />
            <Link href={pharmacy.whatsapp} target="_blank" className="text-green-600 text-sm mt-1 inline-block hover:underline">
              Chat on WhatsApp
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* QR Code */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">🔲 Pharmacy QR Code</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Image
            src={pharmacy.qrImage}
            alt="Pharmacy QR Code"
            width={180}
            height={180}
            className="rounded-lg border shadow-md"
          />
        </CardContent>
      </Card>
    </div>
  );
}
