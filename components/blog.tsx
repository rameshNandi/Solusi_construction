import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Importance of Certificate in Real Estate",
      category: "Buying Tips",
      date: "Nov 20, 2024",
      image: "/real-estate-certificate-importance.jpg",
      excerpt:
        "Understanding the importance of certifications when purchasing property. Expert insights on what to look for.",
      author: "Alfred Smith",
    },
    {
      id: 2,
      title: "Modern Home Starting From Within The Family Valley Wines",
      category: "Lifestyle",
      date: "Nov 18, 2024",
      image: "/modern-house-family-valley.jpg",
      excerpt:
        "How modern homes are transforming family living spaces. Creating the perfect environment for your loved ones.",
      author: "Sarah Johnson",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-secondary" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12 animate-fade-in">
          <div>
            <span className="text-primary text-sm font-semibold">LATEST NEWS</span>
            <h2 className="text-4xl font-bold text-foreground">Latest Blog & News</h2>
          </div>
          <Link
            href="/blog"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Explore More
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <Link href={`/blog/${post.id}`} key={idx}>
              <article
                className="bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer animate-fade-in hover:scale-102"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">By {post.author}</span>
                    <button className="text-primary font-semibold text-sm hover:gap-2 transition-all flex items-center gap-1 group-hover:translate-x-1">
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
