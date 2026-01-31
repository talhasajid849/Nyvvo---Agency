"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { MessageSquareText, Settings, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Discovery Call",
    description:
      "We analyze your business processes, identify automation opportunities, and design a custom solution tailored to your needs.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Custom Build",
    description:
      "Our team builds and trains your AI assistants, integrates with your existing tools, and configures automated workflows.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Train",
    description:
      "We deploy your system, run thorough testing, and fine-tune the AI to match your brand voice and processes perfectly.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Scale & Optimize",
    description:
      "Monitor performance in real-time, receive continuous improvements, and scale your automation as your business grows.",
  },
]

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted/50 overflow-hidden"
      id="how-it-works"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our Process
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            From Concept to Automation in Weeks
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our proven 4-step process ensures a smooth implementation with
            minimal disruption to your operations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20">
            <div
              className={cn(
                "absolute inset-0 bg-primary transition-all duration-1500 ease-out origin-left",
                isInView ? "scale-x-100" : "scale-x-0"
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "relative transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                {/* Step Number & Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mx-auto lg:mx-0 group hover:border-primary/50 hover:shadow-md transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 lg:right-auto lg:-left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
