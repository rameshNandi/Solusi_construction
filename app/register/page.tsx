"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, User, Phone, MapPin } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    agreeTerms: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName) newErrors.fullName = "Full name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.phone) newErrors.phone = "Phone is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match"
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          address: "",
          agreeTerms: false,
        })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join us and start your real estate journey</p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary text-primary rounded-lg animate-fade-in">
              Account created successfully! Redirecting...
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card p-8 rounded-lg border border-border animate-fade-in"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full bg-background border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 ${
                    errors.fullName ? "border-destructive focus:ring-destructive" : "border-border focus:ring-primary"
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full bg-background border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 ${
                    errors.email ? "border-destructive focus:ring-destructive" : "border-border focus:ring-primary"
                  }`}
                />
              </div>
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <div className="relative">
                <Phone size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className={`w-full bg-background border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 ${
                    errors.phone ? "border-destructive focus:ring-destructive" : "border-border focus:ring-primary"
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className={`w-full bg-background border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 ${
                    errors.password ? "border-destructive focus:ring-destructive" : "border-border focus:ring-primary"
                  }`}
                />
              </div>
              {errors.password && <p className="text-xs text-destructive mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className={`w-full bg-background border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 ${
                    errors.confirmPassword
                      ? "border-destructive focus:ring-destructive"
                      : "border-border focus:ring-primary"
                  }`}
                />
              </div>
              {errors.confirmPassword && <p className="text-xs text-destructive mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-4 h-4 rounded border-border cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-muted-foreground">
                I agree to the{" "}
                <Link href="#" className="text-primary hover:text-primary/80">
                  Terms & Conditions
                </Link>
              </label>
            </div>
            {errors.agreeTerms && <p className="text-xs text-destructive">{errors.agreeTerms}</p>}

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
