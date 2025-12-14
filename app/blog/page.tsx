"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  category: string
  date: string
  image: string
  excerpt: string
  author: string
  readTime: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Insights</h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest trends and insights in real estate.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading blog posts...</div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="md:col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                        Read More <ArrowRight size={16} />
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
