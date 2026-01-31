"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI automation.",
    price: "$997",
    period: "/month",
    features: [
      "1 AI Voice Agent",
      "1 Chatbot Integration",
      "Up to 500 calls/month",
      "Basic workflow automation",
      "Email support",
      "Standard integrations",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses ready to scale their automation.",
    price: "$2,497",
    period: "/month",
    features: [
      "3 AI Voice Agents",
      "Unlimited Chatbots",
      "Up to 2,500 calls/month",
      "Advanced workflow automation",
      "Priority support",
      "Custom integrations",
      "Analytics dashboard",
      "A/B testing",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations with complex needs.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited AI Agents",
      "Unlimited everything",
      "Custom call volume",
      "Enterprise workflow automation",
      "Dedicated account manager",
      "Custom AI training",
      "SLA guarantees",
      "On-premise option",
      "White-label available",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-muted/50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Pricing
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Choose the plan that fits your business. All plans include a 14-day
            free trial and 30-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 lg:p-8 rounded-2xl bg-card border transition-all duration-500",
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10 scale-105"
                  : "border-border hover:border-primary/50",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={cn(
                  "w-full rounded-full group",
                  plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                variant={plan.popular ? "default" : "secondary"}
              >
                <Link href="#demo">
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div
          className={cn(
            "mt-12 text-center transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link href="#contact" className="text-primary font-medium hover:underline">
              Let{"'"}s talk about your specific needs
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
