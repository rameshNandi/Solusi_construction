"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Upload } from "lucide-react"

export default function AddListingPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Add Your Property</h1>
        <p className="text-muted-foreground mb-12">List your property and reach thousands of potential buyers</p>

        <form className="space-y-6 bg-card p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Property Title</label>
              <input
                type="text"
                placeholder="e.g., Modern House with Pool"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Property Type</label>
              <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground">
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              placeholder="Describe your property..."
              rows={4}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                placeholder="0"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bedrooms</label>
              <input
                type="number"
                placeholder="0"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bathrooms</label>
              <input
                type="number"
                placeholder="0"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Area (sqft)</label>
            <input
              type="number"
              placeholder="0"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-4">Property Images</label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="mx-auto mb-2 text-muted-foreground" size={32} />
              <p className="text-foreground font-medium">Drag and drop images here</p>
              <p className="text-sm text-muted-foreground">or click to select files</p>
            </div>
          </div>

          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            List Property
          </button>
        </form>
      </div>

      <Footer />
    </main>
  )
}
