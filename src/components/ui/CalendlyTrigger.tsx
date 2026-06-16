"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

interface CalendlyTriggerProps {
  children: React.ReactNode;
  url?: string;
}

export default function CalendlyTrigger({ 
  children, 
  url = "https://calendly.com/ddomverse" // Default fallback URL based on email username
}: CalendlyTriggerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoaded && typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ 
        url,
        prefill: {},
        pageSettings: {
          backgroundColor: '0A0A0A',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '4F46E5',
          textColor: 'ffffff'
        }
      });
    } else {
      // Fallback if script hasn't loaded
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
        onLoad={() => setIsLoaded(true)}
      />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <div onClick={handleClick} className="inline-block w-full sm:w-auto cursor-pointer">
        {children}
      </div>
    </>
  );
}

