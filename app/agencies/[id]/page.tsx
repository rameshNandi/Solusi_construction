"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"
import { Star, Mail, Phone, MapPin } from "lucide-react"

interface Agency {
  id: number
  name: string
  location: string
  properties: number
  agents: number
  founded: number
  image: string
  description: string
  phone: string
  email: string
  rating: number
  reviews: number
}

export default function AgencyDetailPage() {
  const params = useParams()
  const [agency, setAgency] = useState<Agency | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/agencies")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a: Agency) => a.id === Number.parseInt(params.id as string))
        setAgency(found)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return <div className="text-center py-12">Loading...</div>
  if (!agency) return <div className="text-center py-12">Agency not found</div>

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden h-80">
              <img src={agency.image || "/placeholder.svg"} alt={agency.name} className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{agency.name}</h1>
              <p className="text-muted-foreground mb-6">{agency.description}</p>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(agency.rating) ? "fill-primary text-primary" : "text-muted"}
                  />
                ))}
                <span className="text-sm ml-2">({agency.reviews} reviews)</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{agency.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">{agency.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{agency.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-card p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-2">{agency.properties}</p>
              <p className="text-muted-foreground">Active Listings</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-2">{agency.agents}</p>
              <p className="text-muted-foreground">Agents</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-2">{new Date().getFullYear() - agency.founded}</p>
              <p className="text-muted-foreground">Years Active</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-primary mb-2">{agency.rating}</p>
              <p className="text-muted-foreground">Rating</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/10 p-8 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground"
              />
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
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
