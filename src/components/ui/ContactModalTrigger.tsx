"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";

// Native SVG for Instagram since it's missing in this lucide-react version
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface ContactModalTriggerProps {
  children: React.ReactNode;
}

export default function ContactModalTrigger({ children }: ContactModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");

  const defaultMessage = "Hi Dd! I'm interested in working with Webify to scale my business. Let's connect.";

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await fetch("https://formsubmit.co/ajax/ddomverse@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Quick Project Inquiry from Modal",
          email: email,
          message: defaultMessage,
        }),
      });
      setIsSent(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="inline-block w-full sm:w-auto cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-secondary border border-white/10 rounded-3xl p-8 max-w-sm w-full shadow-2xl overflow-hidden"
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-heading font-bold mb-2 text-white">
                {isSent ? "Message Sent!" : "Start Your Project"}
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                {isSent 
                  ? "We'll get back to you at the email provided shortly." 
                  : "Choose how you'd like to connect."}
              </p>

              {isSent ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <button 
                    onClick={() => { setIsOpen(false); setTimeout(() => setIsSent(false), 500); }}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                <a
                  href={`https://ig.me/m/dd_webify?text=${encodeURIComponent(defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 w-full bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <div className="bg-[#E1306C]/20 p-3 rounded-lg text-[#E1306C] group-hover:scale-110 transition-transform">
                    <InstagramIcon />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">Instagram DM</div>
                    <div className="text-xs text-gray-400">@dd_webify</div>
                  </div>
                </a>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-secondary px-2 text-gray-500 uppercase">Or send an email</span>
                  </div>
                </div>

                <form onSubmit={handleSendEmail} className="flex flex-col gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-gray-300 italic">
                    "{defaultMessage}"
                  </div>
                  <input 
                    type="email" 
                    required 
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white font-semibold py-3 rounded-xl transition-all"
                  >
                    {isSending ? "Sending..." : "Send Default Message"}
                  </button>
                </form>
              </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
