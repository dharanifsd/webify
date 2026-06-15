"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Revenue Focused Strategy",
  "Conversion Driven Design",
  "Enterprise Grade Development",
  "Fast Delivery Cycles",
  "Long-Term Technology Partnership",
  "Business Growth Systems"
];

export default function WhyChooseWebify() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute -left-[400px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="heading-section mb-6">Why Industry Leaders Choose Us</h2>
            <p className="text-body mb-12">
              We aren't just order-takers. We act as your fractional CTO and digital growth team, ensuring every line of code serves a business purpose.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-lg font-medium text-white">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-secondary/30"
          >
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
               alt="Digital Growth" 
               className="absolute inset-0 w-full h-full object-cover opacity-80"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
