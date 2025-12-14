"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"
import { Mail, Phone, Award } from "lucide-react"

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

export default function TeamDetailPage() {
  const params = useParams()
  const [member, setMember] = useState<TeamMember | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m: TeamMember) => m.id === Number.parseInt(params.id as string))
        setMember(found)
        setLoading(false)
      })
  }, [params.id])

  if (loading) return <div className="text-center py-12">Loading...</div>
  if (!member) return <div className="text-center py-12">Team member not found</div>

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="rounded-lg overflow-hidden h-96">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
              <p className="text-2xl text-primary font-semibold mb-6">{member.title}</p>

              <p className="text-muted-foreground leading-relaxed mb-8">{member.bio}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="text-primary" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="font-bold">{member.specialization}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-primary">{member.listings}</div>
                  <p className="text-muted-foreground">Active Listings</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">{member.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{member.email}</p>
                  </div>
                </a>
              </div>

              <button className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
