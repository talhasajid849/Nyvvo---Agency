"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { TrendingUp, Clock, DollarSign, Shield, Headphones, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a lead again. Your AI assistants work around the clock, handling inquiries even while you sleep.",
    stat: "24/7",
    statLabel: "Always On",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs by 70%",
    description: "Replace expensive call centers and manual processes with intelligent automation that scales infinitely.",
    stat: "70%",
    statLabel: "Cost Reduction",
  },
  {
    icon: TrendingUp,
    title: "Increase Conversions",
    description: "Instant responses and personalized interactions dramatically improve your lead conversion rates.",
    stat: "3x",
    statLabel: "More Conversions",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards protect your data.",
    stat: "100%",
    statLabel: "Compliant",
  },
  {
    icon: Headphones,
    title: "Human-Like Experience",
    description: "Advanced AI that understands context, handles objections, and delivers natural conversations.",
    stat: "98%",
    statLabel: "Satisfaction",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Go live in days, not months. Our rapid deployment gets you automating faster than ever.",
    stat: "7",
    statLabel: "Days to Launch",
  },
]

export function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-muted/50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Why Nyvvo
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            The Competitive Edge Your Business Needs
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Join hundreds of forward-thinking businesses that have transformed
            their operations with Nyvvo{"'"}s AI automation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                  <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
