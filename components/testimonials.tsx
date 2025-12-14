import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Pauise",
      role: "Client",
      text: "There are so many wonderful things to say about Solusi Team. They are professional and competent.",
      image: "/client-testimonial-portrait.jpg",
      stars: 5,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-[#1a2b3a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial */}
          <div className="bg-[#0f1a25] p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#f4d03f] text-[#f4d03f]" />
              ))}
            </div>
            <p className="text-gray-300 text-lg mb-6">{testimonials[0].text}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[0].image || "/placeholder.svg"}
                alt={testimonials[0].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-bold">{testimonials[0].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Featured Property */}
          <div className="relative rounded-xl overflow-hidden h-full min-h-96">
            <img src="/luxury-home-interior.jpg" alt="Featured property" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-[#f4d03f] text-[#1a2b3a] px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                Featured
              </span>
              <h3 className="text-2xl font-bold text-white">Luxury Home Modern</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
