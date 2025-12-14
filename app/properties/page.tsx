"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Star, Bed, Bath, Ruler } from "lucide-react"

interface Property {
  id: number
  title: string
  price: number
  beds: number
  baths: number
  area: number
  image: string
  rating: number
  type: string
}

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [selectedType, setSelectedType] = useState("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data)
        setLoading(false)
      })
  }, [])

  const filteredProperties = selectedType === "All" ? properties : properties.filter((p) => p.type === selectedType)

  const types = ["All", "House", "Apartment", "Villa", "Townhouse"]

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover our extensive collection of premium properties in desirable locations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedType === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/20"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        {loading ? (
          <div className="text-center py-12">Loading properties...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <Link href={`/properties/${property.id}`} key={property.id}>
                <div
                  className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {property.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(property.rating) ? "fill-primary text-primary" : "text-muted"}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({property.rating})</span>
                    </div>

                    <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed size={16} />
                        {property.beds}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath size={16} />
                        {property.baths}
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler size={16} />
                        {property.area} sqft
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">${property.price.toLocaleString()}</span>
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                        View More
                      </button>
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
