"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const pages = [
  { title: "Team Members", href: "/pages/team", description: "Meet our professional real estate agents" },
  { title: "Shop", href: "/pages/shop", description: "Browse real estate tools and services" },
  { title: "Error Page", href: "/pages/error", description: "404 error page" },
  { title: "Pricing Page", href: "/pages/pricing", description: "View our service pricing plans" },
]

export default function PagesIndex() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Additional Pages</h1>
        <p className="text-muted-foreground text-lg mb-12">Explore our other pages and services</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pages.map((page) => (
            <Link href={page.href} key={page.href}>
              <div className="bg-card p-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 animate-fade-in">
                <h3 className="text-2xl font-bold mb-2">{page.title}</h3>
                <p className="text-muted-foreground mb-6">{page.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  View Page <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
