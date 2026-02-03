"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Zap, Bot, Phone, MessageSquare, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeWorkflow, setActiveWorkflow] = useState(0)

  // Cycle through workflow animations
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkflow((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // useEffect(() => {
  //   const hero = heroRef.current
  //   if (!hero) return

  //   // const handleMouseMove = (e: MouseEvent) => {
  //   //   const rect = hero.getBoundingClientRect()
  //   //   const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
  //   //   const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20

  //   //   const cards = hero.querySelectorAll(".floating-card")
  //   //   cards.forEach((card, index) => {
  //   //     const element = card as HTMLElement
  //   //     const factor = (index + 1) * 0.5
  //   //     element.style.transform = `translate(${x * factor}px, ${y * factor}px)`
  //   //   })
  //   // }

  //   hero.addEventListener("mousemove", handleMouseMove)
  //   return () => hero.removeEventListener("mousemove", handleMouseMove)
  // }, [])

  return (
    <section
      // ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Enterprise-Grade AI Security
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight animate-fade-in-up">
              <span className="text-balance">Secure. Smart.</span>
              <br />
              <span className="text-primary">Automated.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty animate-fade-in-up delay-100">
              We build intelligent AI assistants and workflow systems that
              automatically handle calls, chats, bookings, and business
              operations for your company — 24/7.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
              <Button size="lg" asChild className="rounded-full px-8 group">
                <Link href="#demo">
                  Book Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-8 group bg-transparent"
              >
                <Link href="#how-it-works">
                  <Play className="mr-2 w-4 h-4" />
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start animate-fade-in-up delay-300">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>50+ businesses automated</span>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Workflow Visualization */}
          <div className="relative h-[400px] lg:h-[550px] hidden lg:block">
            {/* Central AI Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Rotating ring */}
              <div className="absolute inset-0 -m-16 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 -m-28 border border-primary/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              {/* Core hub */}
              <div className="floating-card relative w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-2xl shadow-primary/30 flex items-center justify-center">
                <Bot className="w-10 h-10 text-primary-foreground" />
                <div className=" absolute inset-0 rounded-full bg-primary/50 animate-ping" />
              </div>
            </div>

            {/* Workflow nodes - positioned around the hub */}
            {/* Incoming Call Node */}
            <div 
              className={`floating-card absolute top-8 left-8 transition-all duration-500 ${activeWorkflow === 0 ? 'scale-110 shadow-xl shadow-primary/20 rounded-full' : 'scale-100'}`}
            >
              <div className="w-44 bg-card/90 backdrop-blur-xl rounded-xl border border-border shadow-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeWorkflow === 0 ? 'bg-green-500' : 'bg-green-500/20'}`}>
                    <Phone className={`w-5 h-5 ${activeWorkflow === 0 ? 'text-white' : 'text-green-500'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">Incoming Call</div>
                    <div className="text-xs text-muted-foreground">Auto-answered</div>
                  </div>
                </div>
                {activeWorkflow === 0 && (
                  <div className="flex items-center gap-2 text-xs text-green-500 animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Processing...
                  </div>
                )}
              </div>
              {/* Connection line to hub */}
              <svg className="absolute -right-8 top-1/2 w-8 h-2 overflow-visible">
                <line x1="0" y1="4" x2="32" y2="4" stroke="currentColor" strokeWidth="2" className="text-primary/30" strokeDasharray="4 4" />
                {activeWorkflow === 0 && (
                  <circle r="4" fill="currentColor" className="text-primary animate-[moveRight_1s_ease-in-out_infinite]">
                    <animateMotion dur="1s" repeatCount="indefinite" path="M0,4 L32,4" />
                  </circle>
                )}
              </svg>
            </div>

            {/* Chat Message Node */}
            <div 
              className={`floating-card absolute top-8 right-4 transition-all duration-500 ${activeWorkflow === 1 ? 'scale-110 shadow-xl shadow-primary/20 rounded-full' : 'scale-100'}`}
            >
              <div className="w-44 bg-card/90 backdrop-blur-xl rounded-xl border border-border shadow-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeWorkflow === 1 ? 'bg-primary' : 'bg-primary/20'}`}>
                    <MessageSquare className={`w-5 h-5 ${activeWorkflow === 1 ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">New Message</div>
                    <div className="text-xs text-muted-foreground">WhatsApp</div>
                  </div>
                </div>
                {activeWorkflow === 1 && (
                  <div className="flex items-center gap-2 text-xs text-primary animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Responding...
                  </div>
                )}
              </div>
            </div>

            {/* Booking Node */}
            <div 
              className={`floating-card absolute bottom-20 left-4 transition-all duration-500 ${activeWorkflow === 2 ? 'scale-110 shadow-xl shadow-primary/20 rounded-full' : 'scale-100'}`}
            >
              <div className="w-44 bg-card/90 backdrop-blur-xl rounded-xl border border-border shadow-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeWorkflow === 2 ? 'bg-amber-500' : 'bg-amber-500/20'}`}>
                    <Calendar className={`w-5 h-5 ${activeWorkflow === 2 ? 'text-white' : 'text-amber-500'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">Booking</div>
                    <div className="text-xs text-muted-foreground">Scheduled</div>
                  </div>
                </div>
                {activeWorkflow === 2 && (
                  <div className="flex items-center gap-2 text-xs text-amber-500 animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Confirming...
                  </div>
                )}
              </div>
            </div>

            {/* Completed Task Node */}
            <div 
              className={`floating-card absolute bottom-20 right-8 transition-all duration-500 ${activeWorkflow === 3 ? 'scale-110 shadow-xl shadow-primary/20 rounded-full' : 'scale-100'}`}
            >
              <div className="w-44 bg-card/90 backdrop-blur-xl rounded-xl border border-border shadow-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeWorkflow === 3 ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}>
                    <CheckCircle2 className={`w-5 h-5 ${activeWorkflow === 3 ? 'text-white' : 'text-emerald-500'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-card-foreground">Task Done</div>
                    <div className="text-xs text-muted-foreground">Automated</div>
                  </div>
                </div>
                {activeWorkflow === 3 && (
                  <div className="flex items-center gap-2 text-xs text-emerald-500 animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Completed!
                  </div>
                )}
              </div>
            </div>

            {/* Stats Counter */}
            <div className="floating-card absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-xl rounded-xl border border-border shadow-lg px-6 py-3">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-card-foreground">24.8k</div>
                  <div className="text-xs text-muted-foreground">Tasks/day</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{"<"}2s</div>
                  <div className="text-xs text-muted-foreground">Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
