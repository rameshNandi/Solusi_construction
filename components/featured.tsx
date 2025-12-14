"use client"

import { Bed, Bath, Ruler, Heart } from "lucide-react"
import Link from "next/link"

export default function Featured() {
  const properties = [
    {
      id: 1,
      title: "Alpine House",
      description: "Spacious alpine-style home with modern amenities and stunning views",
      price: "$350,000",
      beds: 4,
      baths: 3,
      area: "3200 sqft",
      image: "/modern-alpine-house-with-pool.jpg",
    },
    {
      id: 2,
      title: "Apartments Auckland",
      description: "Contemporary apartment building with premium finishes and city views",
      price: "$250,000",
      beds: 3,
      baths: 2,
      area: "2100 sqft",
      image: "/contemporary-apartment-building.jpg",
    },
    {
      id: 3,
      title: "Holiday Luxury House",
      description: "Luxury villa perfect for holiday rentals with beachfront access",
      price: "$450,000",
      beds: 5,
      baths: 4,
      area: "4500 sqft",
      image: "/luxury-villa-pool.png",
    },
    {
      id: 4,
      title: "Modern Townhouse",
      description: "Contemporary townhouse in prime location with modern architecture",
      price: "$320,000",
      beds: 3,
      baths: 2,
      area: "2800 sqft",
      image: "/modern-townhouse.png",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-background" id="properties">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12 animate-fade-in">
          <div>
            <span className="text-primary text-sm font-semibold">FEATURED PROPERTY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Select Your Next Home</h2>
          </div>
          <Link
            href="/properties"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Explore More
          </Link>
        </div>

        <div className="grid gap-8">
          {properties.map((property, idx) => (
            <Link href={`/properties/${property.id}`} key={idx}>
              <div
                className="bg-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-102 cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-64 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{property.title}</h3>
                      <button
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart size={20} className="text-primary" />
                      </button>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{property.description}</p>
                    <p className="text-3xl font-bold text-primary mb-4">{property.price}</p>

                    {/* Stats */}
                    <div className="flex gap-6 mb-6 py-4 border-y border-border">
                      <div className="flex items-center gap-2">
                        <Bed size={20} className="text-primary" />
                        <span className="text-foreground">{property.beds} Bed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath size={20} className="text-primary" />
                        <span className="text-foreground">{property.baths} Bath</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler size={20} className="text-primary" />
                        <span className="text-foreground">{property.area}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      className="bg-secondary text-foreground px-6 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-all hover:scale-105"
                      onClick={(e) => e.preventDefault()}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="mt-20 pt-12 border-t border-border animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-10">Solusi Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🏊", name: "Swimming" },
              { icon: "🏋️", name: "Gym" },
              { icon: "🌳", name: "Garden" },
              { icon: "🎾", name: "Court" },
              { icon: "🍽️", name: "Dining" },
              { icon: "📚", name: "Library" },
            ].map((amenity, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-lg text-center hover:bg-secondary transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">{amenity.icon}</div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
