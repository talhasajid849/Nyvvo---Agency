"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Nyvvo transformed our clinic. We went from missing 40% of calls to capturing every single lead. Our booking rate increased by 300% in the first month.",
    author: "Dr. Sarah Chen",
    role: "Founder, MedCare Clinic",
    industry: "Healthcare",
    rating: 5,
  },
  {
    quote: "The AI receptionist handles our property inquiries flawlessly. It qualifies leads, schedules viewings, and even follows up — all automatically. Game changer.",
    author: "Marcus Williams",
    role: "CEO, Premier Realty",
    industry: "Real Estate",
    rating: 5,
  },
  {
    quote: "We replaced our entire call center with Nyvvo's solution. Better customer satisfaction scores and 70% cost reduction. The ROI was immediate.",
    author: "Jennifer Park",
    role: "Operations Director, TechFlow",
    industry: "SaaS",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Success Stories
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            See how businesses across industries are transforming their
            operations with Nyvvo{"'"}s AI automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-card-foreground leading-relaxed mb-6">
                {'"'}{testimonial.quote}{'"'}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Industry Tag */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {testimonial.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Businesses Automated</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-foreground">2k+</div>
              <div className="text-sm text-muted-foreground">Calls Handled Monthly</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
