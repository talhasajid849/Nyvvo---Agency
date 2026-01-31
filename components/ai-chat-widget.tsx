"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff,
  Bot,
  Sparkles,
  Volume2
} from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"chat" | "voice">("chat")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm Nyvvo AI Assistant. How can I help you automate your business today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isCallActive, setIsCallActive] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Call duration timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isCallActive])

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response (replace with actual webhook later)
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you with that! Our AI automation solutions can handle calls, chats, and bookings 24/7. Would you like to schedule a demo?",
        "Great question! Nyvvo integrates seamlessly with tools like WhatsApp, Slack, and your existing CRM. What specific workflows are you looking to automate?",
        "Our AI receptionists can handle multiple calls simultaneously without any wait times. They're trained on your business data for personalized responses.",
        "We offer custom pricing based on your needs. Book a free consultation and we'll create a tailored automation strategy for your business.",
      ]
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const toggleVoice = () => {
    setIsListening(!isListening)
    // Voice recognition will be handled by n8n webhook
  }

  const toggleCall = () => {
    if (isCallActive) {
      setIsCallActive(false)
      setCallDuration(0)
    } else {
      setIsCallActive(true)
    }
    // Call functionality will be handled by n8n webhook
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Open AI Assistant"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
            <span className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-30" />
            
            {/* Icon */}
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-300 animate-pulse" />
            </div>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-card text-card-foreground text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-border">
              Chat with AI Assistant
            </span>
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] max-h-[80vh] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300"
        >
          {/* Header */}
          <div className="relative bg-primary px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Nyvvo AI</h3>
                <p className="text-xs text-primary-foreground/70">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                activeTab === "chat"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </button>
            <button
              onClick={() => setActiveTab("voice")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                activeTab === "voice"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              Voice
            </button>
          </div>

          {/* Content */}
          {activeTab === "chat" ? (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-muted text-foreground rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.role === "user" ? "text-primary-foreground/60" : "text-muted-foreground"
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-background/50">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 pr-12 rounded-full bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button
                      type="button"
                      onClick={toggleVoice}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors ${
                        isListening ? "bg-red-500 text-white" : "hover:bg-muted-foreground/10"
                      }`}
                      aria-label={isListening ? "Stop listening" : "Start voice input"}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-muted-foreground" />}
                    </button>
                  </div>
                  <Button
                    type="submit"
                    size="icon"
                    className="rounded-full h-11 w-11"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            /* Voice Tab */
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              {/* Voice Visualization */}
              <div className="relative mb-8">
                {/* Outer rings */}
                {isCallActive && (
                  <>
                    <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/20 animate-ping" />
                    <div className="absolute inset-0 -m-8 rounded-full border border-primary/10 animate-pulse" />
                  </>
                )}
                
                {/* Main circle */}
                <div 
                  className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCallActive 
                      ? "bg-gradient-to-br from-primary to-primary/80 scale-110" 
                      : "bg-muted"
                  }`}
                >
                  {isCallActive ? (
                    <Volume2 className="w-12 h-12 text-primary-foreground animate-pulse" />
                  ) : (
                    <Phone className="w-12 h-12 text-muted-foreground" />
                  )}
                </div>

                {/* Audio waves */}
                {isCallActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-primary-foreground/60 rounded-full animate-pulse"
                          style={{
                            height: `${20 + Math.random() * 30}px`,
                            animationDelay: `${i * 100}ms`,
                            animationDuration: "0.5s",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Status */}
              <div className="text-center mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {isCallActive ? "AI Assistant Speaking" : "Voice Assistant"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {isCallActive 
                    ? `Call duration: ${formatDuration(callDuration)}` 
                    : "Click to start a voice conversation"
                  }
                </p>
              </div>

              {/* Controls */}
              <div className="flex gap-4">
                <button
                  onClick={toggleCall}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCallActive
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                  aria-label={isCallActive ? "End call" : "Start call"}
                >
                  {isCallActive ? (
                    <PhoneOff className="w-6 h-6" />
                  ) : (
                    <Phone className="w-6 h-6" />
                  )}
                </button>

                {isCallActive && (
                  <button
                    onClick={toggleVoice}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isListening
                        ? "bg-amber-500 hover:bg-amber-600 text-white"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                    aria-label={isListening ? "Mute" : "Unmute"}
                  >
                    {isListening ? (
                      <MicOff className="w-6 h-6" />
                    ) : (
                      <Mic className="w-6 h-6" />
                    )}
                  </button>
                )}
              </div>

              {/* Info */}
              <p className="mt-8 text-xs text-muted-foreground text-center max-w-[250px]">
                Voice calls are handled by our AI. You can ask questions, schedule appointments, or get support.
              </p>
            </div>
          )}

          {/* Footer branding */}
          <div className="px-4 py-2 border-t border-border bg-muted/50 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs text-muted-foreground">Powered by Nyvvo AI</span>
          </div>
        </div>
      )}
    </>
  )
}
