"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Have a question? We'd love to hear from you. Send us a message!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Phone className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+01 234 567 890</p>
                <p className="text-muted-foreground">+09 876 543 210</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">mailinfo00@solusi.com</p>
                <p className="text-muted-foreground">support24@solusi.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-muted-foreground">789 Inner Lane, Holy park, California, USA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary text-primary rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
