"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactModalTrigger from "@/components/ui/ContactModalTrigger";

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
            Ready To Scale Your <br /> Business Faster?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Stop losing revenue to underperforming digital assets. Let's engineer a system that drives predictable growth for your company.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactModalTrigger>
              <button className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-primary font-semibold rounded-full hover:scale-105 active:scale-95 transition-all">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </ContactModalTrigger>
            <ContactModalTrigger>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
                Get Free Website Audit
              </button>
            </ContactModalTrigger>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
