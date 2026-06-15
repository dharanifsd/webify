"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactModalTrigger from "@/components/ui/ContactModalTrigger";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Premium Digital Agency</span>
          </motion.div>

          <h1 className="heading-hero mb-8">
            We Build Revenue-Generating <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Digital Systems
            </span> For Modern Businesses
          </h1>

          <p className="text-body max-w-2xl mx-auto mb-12">
            From high-converting websites to custom software and automation systems engineered to help ambitious businesses scale faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactModalTrigger>
              <button className="group relative px-8 py-4 bg-white text-primary font-bold rounded-full overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </ContactModalTrigger>
            <Link href="/case-studies" className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-center">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
