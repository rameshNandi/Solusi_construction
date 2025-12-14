"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Star, Users, Home } from "lucide-react"

interface Agency {
  id: number
  name: string
  location: string
  properties: number
  agents: number
  image: string
  rating: number
  reviews: number
}

export default function AgenciesPage() {
  const [agencies, setAgencies] = useState<Agency[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/agencies")
      .then((res) => res.json())
      .then((data) => {
        setAgencies(data)
        setLoading(false)
      })
  }, [])

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Agencies</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Connect with top-rated real estate agencies across the country.
          </p>
        </div>

        {/* Agencies Grid */}
        {loading ? (
          <div className="text-center py-12">Loading agencies...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((agency, index) => (
              <Link href={`/agencies/${agency.id}`} key={agency.id}>
                <div
                  className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={agency.image || "/placeholder.svg"}
                      alt={agency.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{agency.name}</h3>
                    <p className="text-muted-foreground mb-4">{agency.location}</p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(agency.rating) ? "fill-primary text-primary" : "text-muted"}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">({agency.reviews})</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Home size={16} className="text-primary" />
                          <span className="text-2xl font-bold">{agency.properties}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Properties</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Users size={16} className="text-primary" />
                          <span className="text-2xl font-bold">{agency.agents}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Agents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
