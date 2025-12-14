import { ArrowRight } from "lucide-react"

export default function Buying() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0f1a25]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Get A Luxury Home It's Easy</h2>
            <p className="text-gray-400 text-lg mb-8">Appropriately create interactive infrastructures</p>
            <button className="inline-flex items-center gap-2 bg-[#f4d03f] text-[#1a2b3a] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Started <ArrowRight size={20} />
            </button>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96 bg-black rounded-3xl p-3 shadow-2xl border-8 border-gray-800">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10" />
              <div className="w-full h-full bg-gradient-to-br from-[#1a2b3a] to-[#0f1a25] rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/mobile-app-real-estate-ui.jpg"
                  alt="Mobile app interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
