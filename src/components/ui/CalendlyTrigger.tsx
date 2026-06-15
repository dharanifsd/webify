"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

interface CalendlyTriggerProps {
  children: React.ReactNode;
  url?: string;
}

export default function CalendlyTrigger({ 
  children, 
  url = "https://calendly.com/ddomverse" // Default fallback URL based on email username
}: CalendlyTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Make sure we only set this on the client
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="inline-block w-full sm:w-auto cursor-pointer">
        {children}
      </div>
      
      {rootElement && (
        <PopupModal
          url={url}
          pageSettings={{
            backgroundColor: '0A0A0A',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '4F46E5',
            textColor: 'ffffff'
          }}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={rootElement}
        />
      )}
    </>
  );
}
