"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, PhoneCall } from "lucide-react"
import Link from "next/link"
import { CalendlyPopupButton } from "../ui/calendly-popup-button"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-primary overflow-hidden"
      id="demo"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/90 mb-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Calendar className="w-4 h-4" />
          Free Strategy Session
        </span>

        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 text-balance",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Ready to Automate Your Business?
        </h2>

        <p
          className={cn(
            "text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 text-pretty",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Book a free 30-minute strategy Meet. We{"'"}ll analyze your processes,
          identify automation opportunities, and show you exactly how <strong>Nyvvo</strong> can
          transform your operations.
        </p>

        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <CalendlyPopupButton
            className="rounded-full px-8 bg-white text-primary hover:bg-white/90 group"
          >
              Book Your Meeting
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </CalendlyPopupButton>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full px-8 border-white/30 text-white hover:bg-white/10 group bg-transparent"
          >
            {/* <Link href="tel:+1234567890">
              <PhoneCall className="mr-2 w-4 h-4" />
              Call Us Now
            </Link> */}
          </Button>
        </div>

        {/* Trust Badge */}
        {/* <div
          className={cn(
            "mt-12 flex items-center justify-center gap-6 text-white/60 text-sm transition-all duration-700 delay-400",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span>No credit card required</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>14-day free trial</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>Cancel anytime</span>
        </div> */}
      </div>
    </section>
  )
}
