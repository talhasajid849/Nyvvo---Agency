"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
    fbq?: (...args: unknown[]) => void;
  }
}

type Variant = "default" | "secondary" | "ghost" | "outline" | "destructive" | null | undefined;

export function CalendlyPopupButton({
  url = "https://calendly.com/nyvvo/30min",
  children = "Book Call",
  className,
  variant = "default",
}: {
  url?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const openCalendly = () => {
    window.fbq?.("track", "Lead", {
      content_name: "Calendly booking opened",
    });
    if (!window.Calendly?.initPopupWidget) return;
    window.Calendly.initPopupWidget({ url });
  };

  return (
    <Button size="lg" onClick={openCalendly} className={className} variant={variant}>
      {children}
    </Button>
  );
}
