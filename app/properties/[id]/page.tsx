"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Star, Bed, Bath, Ruler, Share2, Heart } from "lucide-react"
import { useParams } from "next/navigation"

interface Property {
  id: number
  title: string
  price: number
  beds: number
  baths: number
  area: number
  image: string
  rating: number
  reviews: number
  type: string
  description: string
  location: string
}

export default function PropertyDetailPage() {
  const params = useParams()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/properties/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return <div className="text-center py-12">Loading...</div>
  if (!property) return <div className="text-center py-12">Property not found</div>

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden h-96">
            <img
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Property Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
              <p className="text-muted-foreground mb-6">{property.location}</p>

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(property.rating) ? "fill-primary text-primary" : "text-muted"}
                    />
                  ))}
                  <span className="ml-2 text-sm">({property.reviews} reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-muted-foreground mb-2">Bedrooms</p>
                  <div className="flex items-center gap-2 text-2xl font-bold">
                    <Bed className="text-primary" />
                    {property.beds}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Bathrooms</p>
                  <div className="flex items-center gap-2 text-2xl font-bold">
                    <Bath className="text-primary" />
                    {property.baths}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Area</p>
                  <div className="flex items-center gap-2 text-2xl font-bold">
                    <Ruler className="text-primary" />
                    {property.area} sqft
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About this property</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card p-8 rounded-lg sticky top-32">
                <div className="text-4xl font-bold text-primary mb-6">${property.price.toLocaleString()}</div>

                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold mb-3 hover:bg-primary/90 transition-colors">
                  Schedule Tour
                </button>
                <button className="w-full bg-secondary text-foreground py-3 rounded-lg font-semibold mb-6 hover:bg-secondary/80 transition-colors">
                  Make an Offer
                </button>

                <div className="flex gap-3 mb-8">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-card transition-colors">
                    <Share2 size={18} />
                    Share
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-card transition-colors">
                    <Heart size={18} />
                    Save
                  </button>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-bold mb-4">Contact Agent</h3>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Have questions about this property?</p>
                    <button className="w-full py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                      Contact Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
