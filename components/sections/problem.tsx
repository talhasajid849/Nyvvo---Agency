"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Clock, PhoneOff, Users, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls = Missed Revenue",
    description:
      "Every unanswered call is a potential customer walking away. Studies show 85% of callers won't call back.",
  },
  {
    icon: Clock,
    title: "24/7 Availability is Expensive",
    description:
      "Hiring round-the-clock staff costs a fortune. Most businesses can't afford true 24/7 coverage.",
  },
  {
    icon: Users,
    title: "Scaling Support is Hard",
    description:
      "As you grow, support costs explode. Training new staff takes months and quality suffers.",
  },
  {
    icon: TrendingDown,
    title: "Manual Tasks Drain Resources",
    description:
      "Your team spends hours on repetitive tasks that could be automated, reducing productivity.",
  },
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted/50"
      id="problem"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            The Challenge
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            Your Business Never Sleeps. Neither Should Your Support.
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            Most businesses lose thousands of dollars every month due to missed
            opportunities, slow response times, and manual processes.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={cn(
                "group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
