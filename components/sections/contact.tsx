"use client"

import React from "react"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    window.fbq?.("track", "Contact")
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-muted/50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span
              className={cn(
                "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Get In Touch
            </span>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Let{"'"}s Build Something Amazing Together
            </h2>
            <p
              className={cn(
                "text-lg text-muted-foreground mb-8 transition-all duration-700 delay-200 text-pretty",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Have a question or ready to get started? Reach out and our team
              will get back to you within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div
                className={cn(
                  "flex items-center gap-4 transition-all duration-700 delay-300",
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us</div>
                  <a
                    href="mailto:hello@nyvvo.com"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    hello@nyvvo.com
                  </a>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-center gap-4 transition-all duration-700 delay-400",
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us</div>
                  <a
                    href="tel:+1234567890"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-center gap-4 transition-all duration-700 delay-500",
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="font-medium text-foreground">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "p-6 lg:p-8 rounded-2xl bg-card border border-border transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. We{"'"}ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and automation needs..."
                    rows={4}
                    required
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
