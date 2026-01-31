"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I get started with Nyvvo?",
    answer:
      "Most businesses are up and running within 7-14 days. Our rapid deployment process includes discovery, custom configuration, testing, and launch. For complex enterprise solutions, implementation typically takes 4-6 weeks.",
  },
  {
    question: "Will the AI sound robotic to my customers?",
    answer:
      "Not at all. Our AI voice agents use advanced natural language processing and speech synthesis to deliver human-like conversations. Most callers can't tell they're speaking with an AI. We also customize the voice, tone, and personality to match your brand.",
  },
  {
    question: "What happens if the AI can't handle a question?",
    answer:
      "Our AI is trained to recognize when it needs human assistance. It can seamlessly transfer calls to your team, schedule callbacks, or escalate issues based on your preferences. You maintain full control over the escalation rules.",
  },
  {
    question: "Is my data secure with Nyvvo?",
    answer:
      "Absolutely. We maintain SOC 2 Type II certification and are GDPR and HIPAA compliant. All data is encrypted at rest and in transit. We never use your data to train our models without explicit consent, and you can request data deletion at any time.",
  },
  {
    question: "Can I integrate Nyvvo with my existing tools?",
    answer:
      "Yes! We integrate with 100+ popular tools including CRMs (Salesforce, HubSpot), calendars (Google, Outlook), communication platforms (Slack, WhatsApp), and more. We also offer custom API integrations for enterprise clients.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with responses within 24 hours. Professional plans get priority support with faster response times. Enterprise clients receive a dedicated account manager and 24/7 phone support with guaranteed SLAs.",
  },
  {
    question: "Can I try Nyvvo before committing?",
    answer:
      "Absolutely! We offer a 14-day free trial on all plans so you can experience the power of AI automation risk-free. We also have a 30-day money-back guarantee if you're not completely satisfied.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer monthly and annual billing options. Annual plans come with a 20% discount. You can upgrade, downgrade, or cancel your plan at any time. There are no hidden fees or long-term contracts required.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={cn(
              "inline-block text-sm font-medium text-primary mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            FAQ
          </span>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-200 text-pretty",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Everything you need to know about Nyvvo and AI automation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={cn(
                "rounded-xl border border-border bg-card overflow-hidden transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-card-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
