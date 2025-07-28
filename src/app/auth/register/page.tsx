"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pill, Globe } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    profileImage: null as File | null,
    pharmacyName: "",
    pharmacyAddress: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;
    if (id === "profileImage" && files) {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated registration delay
    setTimeout(() => {
      alert("Registration submitted successfully!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center">
            <Pill className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">PharmaCare</h1>
            <p className="text-slate-600 mt-1">Create Your Pharmacy Account</p>
          </div>
        </div>

        {/* Register Card */}
        <Card className="shadow-lg border-0">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold">Register</CardTitle>
              <Button variant="ghost" size="sm" className="text-slate-500">
                <Globe className="w-4 h-4 mr-1" />
                বাং
              </Button>
            </div>
            <CardDescription>Fill in the details to create your account</CardDescription>
          </CardHeader>
          <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
  {/* Grid container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Full Name */}
    <div className="space-y-2">
      <Label htmlFor="fullName">Full Name</Label>
      <Input
        id="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="John Doe"
        required
      />
    </div>

    {/* Username */}
    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="johndoe123"
        required
      />
    </div>

    {/* Email */}
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email@pharmacy.com"
        required
      />
    </div>

    {/* Password */}
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="********"
        required
      />
    </div>

    {/* Profile Image */}
    <div className="space-y-2">
      <Label htmlFor="profileImage">Profile Image (optional)</Label>
      <Input
        id="profileImage"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </div>

    {/* Pharmacy Name */}
    <div className="space-y-2">
      <Label htmlFor="pharmacyName">Pharmacy Name</Label>
      <Input
        id="pharmacyName"
        value={formData.pharmacyName}
        onChange={handleChange}
        placeholder="PharmaPlus BD"
        required
      />
    </div>

    {/* Pharmacy Address (Full width across both columns) */}
    <div className="space-y-2 md:col-span-2">
      <Label htmlFor="pharmacyAddress">Pharmacy Address</Label>
      <Input
        id="pharmacyAddress"
        value={formData.pharmacyAddress}
        onChange={handleChange}
        placeholder="123, Dhanmondi, Dhaka"
        required
      />
    </div>
  </div>

  {/* Submit Button */}
  <Button
    type="submit"
    className="w-full h-11 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium"
    disabled={isLoading}
  >
    {isLoading ? "Registering..." : "Register"}
  </Button>
</form>


            {/* Already have an account? */}
            <div className="text-center text-sm text-slate-600 mt-4">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign in here
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
