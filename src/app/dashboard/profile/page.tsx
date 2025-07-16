"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image"; // For QR image

export default function PharmacyProfile() {
  const [pharmacy, setPharmacy] = useState({
    name: "GreenLeaf Pharmacy",
    regNo: "PHM-202543",
    owner: "Dr. Fardin Ahmed",
    location: "123/A Mirpur, Dhaka, Bangladesh",
    description: "Serving community healthcare with quality medicines since 2010.",
    totalMedicines: 148,
    facebook: "https://facebook.com/greenleafpharmacy",
    instagram: "https://instagram.com/greenleafpharmacy",
    whatsapp: "https://wa.me/8801234567890",
    qrImage: "/images/pharmacy-qr.png", // Replace with your actual QR code image path
  });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Pharmacy Info */}
      <Card>
        <CardHeader>
          <CardTitle>🏥 Pharmacy Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
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
          <div>
            <Label>About Pharmacy</Label>
            <Textarea value={pharmacy.description} readOnly />
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle>📍 Location</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Address</Label>
          <Textarea value={pharmacy.location} readOnly />
        </CardContent>
      </Card>

      {/* Medicine Summary */}
      <Card>
        <CardHeader>
          <CardTitle>📦 Medicine Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{pharmacy.totalMedicines}</p>
            <p>Total Medicines</p>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <Card>
        <CardHeader>
          <CardTitle>🌐 Social Media</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <Label>Facebook</Label>
            <Input value={pharmacy.facebook} readOnly />
          </div>
          <div>
            <Label>Instagram</Label>
            <Input value={pharmacy.instagram} readOnly />
          </div>
          <div>
            <Label>WhatsApp</Label>
            <Input value={pharmacy.whatsapp} readOnly />
          </div>
        </CardContent>
      </Card>

      {/* QR Code */}
      <Card>
        <CardHeader>
          <CardTitle>🔲 Pharmacy QR Code</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Image
            src={pharmacy.qrImage}
            alt="Pharmacy QR Code"
            width={150}
            height={150}
            className="rounded-md border shadow-sm"
          />
        </CardContent>
      </Card>
    </div>
  );
}
