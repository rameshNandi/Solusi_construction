import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for new agents",
    features: ["5 Active Listings", "Basic Analytics", "Email Support", "Standard Templates"],
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    description: "For established agencies",
    features: [
      "Unlimited Listings",
      "Advanced Analytics",
      "Priority Support",
      "Custom Templates",
      "Social Media Tools",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$999",
    period: "per month",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Integration",
      "24/7 Phone Support",
      "White Label Solution",
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing Plans</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your real estate business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground scale-105"
                    : "bg-card border border-border hover:border-primary"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {plan.description}
                </p>

                <div className="my-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {" "}
                    {plan.period}
                  </span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={20} className={plan.highlighted ? "text-primary-foreground" : "text-primary"} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
