import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <span className="text-primary text-sm font-semibold">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
              We are a real estate firm with over 20 years of expertise.
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Our main goal is to provide amazing locations to our partners.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src="/luxury-home-with-pool.png"
              alt="Modern home with pool"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300 animate-zoom-in"
            />
            <img
              src="/modern-house-exterior.png"
              alt="Contemporary house"
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300 mt-8 animate-zoom-in"
              style={{ animationDelay: "0.1s" }}
            />
          </div>
        </div>

        {/* Feature Text */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl mx-auto text-balance">
            All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of
            your properties.
          </h3>
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full gradient-navy-to-mustard p-1 hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/professional-male-real-estate-agent.png"
                  alt="Agent portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-4 max-w-xs mx-auto">Solusi Living Expert</p>
        </div>
      </div>
    </section>
  )
}
