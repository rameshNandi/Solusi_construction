import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ShoppingCart } from "lucide-react"

const products = [
  { title: "Real Estate CRM", price: "$49/mo" },
  { title: "Virtual Tour Software", price: "$79/mo" },
  { title: "Lead Generation Tool", price: "$99/mo" },
  { title: "Property Analytics", price: "$59/mo" },
]

export default function ShopPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Tools & Services</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Enhance your real estate business with our premium tools and services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.title} className="bg-card p-6 rounded-lg hover:shadow-lg transition-all hover:scale-105">
              <div className="mb-4 h-32 bg-gradient-navy-to-mustard rounded-lg flex items-center justify-center">
                <ShoppingCart size={40} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-primary font-semibold mb-4">{product.price}</p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
