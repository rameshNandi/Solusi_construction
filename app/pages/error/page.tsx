import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ErrorPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-40 pb-40 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
