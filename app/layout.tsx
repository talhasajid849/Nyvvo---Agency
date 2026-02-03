import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyvvo | AI Automation Agency - Secure. Smart. Automated.",
  description:
    "Nyvvo builds intelligent AI assistants and workflow systems that automatically handle calls, chats, bookings, and business operations 24/7. Transform your business with enterprise-grade AI automation.",
  generator: "Nyvvo",
  keywords: [
    "AI automation",
    "AI assistants",
    "workflow automation",
    "AI receptionist",
    "business automation",
    "chatbots",
    "AI calls",
    "booking automation",
    "24/7 automation",
  ],
  authors: [{ name: "Nyvvo" }],
  creator: "Nyvvo",
  publisher: "Nyvvo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nyvvo.com",
    siteName: "Nyvvo",
    title: "Nyvvo | AI Automation Agency - Secure. Smart. Automated.",
    description:
      "Nyvvo builds intelligent AI assistants and workflow systems that automatically handle calls, chats, bookings, and business operations 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyvvo | AI Automation Agency",
    description:
      "Transform your business with enterprise-grade AI automation. Secure. Smart. Automated.",
    creator: "@nyvvo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favIcon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favIcon.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favIcon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favIcon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1F3B" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
