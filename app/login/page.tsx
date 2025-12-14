"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
  }

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card p-8 rounded-lg border border-border animate-fade-in"
          >
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
                  className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
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
                  className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-border cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>
              <Link href="#" className="text-sm text-primary hover:text-primary/80">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary hover:text-primary/80 font-medium">
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
