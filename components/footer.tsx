"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      alert("Please enter your email")
      return
    }

    try {
      // Send to contact API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Newsletter Subscription",
          message: `Subscribe newsletter for email: ${email}`,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail("")
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert("Failed to subscribe. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <footer className="bg-[#0f1a25] border-t border-white border-opacity-10 py-16 px-4 md:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-[#f4d03f] mb-4">SOLUSI</h3>
            <p className="text-gray-400 text-sm mb-6">
              Rapidly disseminate customized e-business solutions for user-friendly content strategy
            </p>
            <div className="flex gap-3">
              {["f", "t", "in", "ig"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a2b3a] flex items-center justify-center text-[#f4d03f] hover:bg-[#f4d03f] hover:text-[#1a2b3a] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Useful Link</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["All Property", "My Property", "Our Services", "Become Agent", "Blog", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#f4d03f] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["All Property", "Our Services", "Pricing Plan", "Privacy Policy", "Terms & Condition"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#f4d03f] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#1a2b3a] rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex gap-3">
              <MapPin size={24} className="text-[#f4d03f] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-400 text-sm">789 Inner Lane, Holy park, California, USA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone size={24} className="text-[#f4d03f] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-400 text-sm">+01 234 567 890</p>
                <p className="text-gray-400 text-sm">+09 876 543 210</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={24} className="text-[#f4d03f] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-400 text-sm">mailinfo00@solusi.com</p>
                <p className="text-gray-400 text-sm">support24@solusi.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-gradient-to-r from-[#1a2b3a] to-[#0f1a25] p-8 rounded-xl">
          <div>
            <h4 className="text-white font-bold mb-1">Subscribe Now</h4>
            <p className="text-gray-400 text-sm">Get Latest News Update</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-[#0f1a25] text-white placeholder-gray-500 border border-white border-opacity-20 focus:outline-none focus:border-[#f4d03f] flex-1 md:flex-initial"
            />
            <button
              type="submit"
              className="bg-[#f4d03f] text-[#1a2b3a] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {submitted && (
          <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-400 p-4 rounded-lg text-center mb-4">
            ✓ Successfully subscribed to newsletter!
          </div>
        )}

        {/* Copyright */}
        <div className="border-t border-white border-opacity-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Solusi Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
