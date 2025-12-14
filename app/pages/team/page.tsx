"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { FileText } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  title: string
  image: string
  bio: string
  specialization: string
  listings: number
  phone: string
  email: string
}

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data)
        setLoading(false)
      })
  }, [])

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-muted-foreground text-lg mb-12">Meet our experienced real estate professionals</p>

        {loading ? (
          <div className="text-center py-12">Loading team...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Link href={`/pages/team/${member.id}`} key={member.id}>
                <div
                  className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.title}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-primary" />
                        <span className="text-sm">{member.listings} Active Listings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {member.specialization}
                        </span>
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
