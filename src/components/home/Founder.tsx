"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section id="about" className="py-32 bg-secondary/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden bg-primary border border-white/10 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
               <img 
                 src="/Dd.jpeg" 
                 alt="Dharanidharan AKA Dd" 
                 className="absolute inset-0 w-full h-full object-cover object-[center_top]"
               />
               <div className="absolute bottom-8 left-8 z-20">
                 <div className="text-2xl font-heading font-bold text-white">Dharanidharan AKA Dd</div>
                 <div className="text-accent font-medium">Founder & Technical Director</div>
               </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-[60px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section mb-8">We treat your business like it's our own.</h2>
            
            <div className="space-y-6 text-body text-gray-300 mb-10">
              <p>
                "I started Webify because I noticed a massive gap in the agency world. Most agencies either write beautiful code that doesn't convert, or they build clunky funnels that ruin brand perception."
              </p>
              <p>
                "We built Webify to be the bridge. An enterprise-grade engineering team paired with world-class conversion rate optimization."
              </p>
              <p>
                "When you partner with us, you're not just getting a vendor. You're getting a dedicated technology partner committed to scaling your revenue through sophisticated digital systems."
              </p>
            </div>
            
            <div className="text-5xl font-signature text-accent/90 -rotate-2 ml-4">
              Dd
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
