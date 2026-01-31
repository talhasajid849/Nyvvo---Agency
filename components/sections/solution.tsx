"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Bot, Workflow, MessageSquare, Calendar, Phone, Sparkles } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Receptionists",
    description: "Intelligent voice agents that answer calls, qualify leads, and book appointments 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Smart Chatbots",
    description: "Conversational AI that handles customer inquiries across web, WhatsApp, and social media.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Custom automation flows that connect your tools and eliminate repetitive manual tasks.",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description: "Automated scheduling that syncs with your calendar and sends confirmations.",
  },
  {
    icon: Phone,
    title: "Outbound Campaigns",
    description: "AI-powered calling campaigns for follow-ups, reminders, and lead nurturing.",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Tailored AI systems designed specifically for your unique business processes.",
  },
]

export function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            The Nyvvo Platform
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            AI That Works While You Sleep
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our intelligent automation platform handles customer interactions,
            streamlines operations, and scales with your business — automatically.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
