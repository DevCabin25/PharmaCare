"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pill, Globe } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("admin@pharmacy.com")
  const [password, setPassword] = useState("password")
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      if (
        (email === "admin@pharmacy.com" && password === "password") ||
        (email === "staff@pharmacy.com" && password === "password")
      ) {
        alert({
          title: "Login Successful",
          description: `Welcome ${email === "admin@pharmacy.com" ? "Owner" : "Staff"}!`,
        })
      } else {
        alert({
          title: "Login Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  const fillDemoCredentials = (type: "owner" | "staff") => {
    if (type === "owner") {
      setEmail("admin@pharmacy.com")
      setPassword("password")
    } else {
      setEmail("staff@pharmacy.com")
      setPassword("password")
    }
  }

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
            <p className="text-slate-600 mt-1">Pharmacy Management System</p>
          </div>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg border-0">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold">Sign In</CardTitle>
              <Button variant="ghost" size="sm" className="text-slate-500">
                <Globe className="w-4 h-4 mr-1" />
                বাং
              </Button>
            </div>
            <CardDescription>Enter your credentials to access your pharmacy dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@pharmacy.com"
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                  className="h-11"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Accounts */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <p className="text-sm font-medium text-slate-700 mb-3">Demo Accounts:</p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Owner: admin@pharmacy.com / password</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => fillDemoCredentials("owner")}
                    className="text-xs h-6 px-2"
                  >
                    Use
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Staff: staff@pharmacy.com / password</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => fillDemoCredentials("staff")}
                    className="text-xs h-6 px-2"
                  >
                    Use
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
