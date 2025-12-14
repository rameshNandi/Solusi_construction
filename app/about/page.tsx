"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Solusi Construction</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a real estate firm with over 20 years of expertise, and our main goal is to provide amazing
              locations to our partners.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of
              your properties.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/luxury-home-with-pool.png" alt="Property 1" className="rounded-lg w-full h-64 object-cover" />
            <img src="/modern-house-exterior.png" alt="Property 2" className="rounded-lg w-full h-64 object-cover" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-card p-8 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary mb-2">20+</p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="bg-card p-8 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Properties Sold</p>
          </div>
          <div className="bg-card p-8 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-muted-foreground">Team Members</p>
          </div>
          <div className="bg-card p-8 rounded-lg text-center">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To deliver exceptional real estate solutions that exceed our clients' expectations, providing expert
            guidance and premium properties in thriving communities worldwide.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
