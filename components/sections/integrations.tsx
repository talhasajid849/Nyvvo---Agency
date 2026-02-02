"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { integrationsData } from "@/data"
import Image from "next/image"


export function IntegrationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Integrations
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Connects With Your Entire Stack
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Seamlessly integrate with 100+ tools you already use. No switching
            costs, no disruption — just pure automation power.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {integrationsData.map((integration, index) => (
            <div
              key={integration.name}
              className={cn(
                "group relative p-4 rounded-xl bg-card border border-border hover:border-primary/50 shadow-primary/50 hover:shadow-[0_0_10px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center",
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: `${(index % 8) * 50}ms` }}
            >
              {/* Logo */}
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:shadow-md group-hover:bg-primary/10 transition-colors">
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={22}
                  height={22}
                  className={cn(
                    "transition ",
                  )}
                />
              </div>
              <span className="text-xs font-medium text-card-foreground">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        {/* More Integrations */}
        <div
          className={cn(
            "text-center mt-8 transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-muted-foreground">
            And 100+ more integrations via APIs and webhooks
          </p>
        </div>
      </div>
    </section>
  )
}
