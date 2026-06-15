"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Webify completely transformed our digital presence. They didn't just build a website; they built a lead generation engine that increased our sales by 40% in the first quarter.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow SaaS",
    rating: 5
  },
  {
    quote: "The level of engineering and design quality is unmatched. They act like a true technology partner rather than just an agency. Highly recommended for ambitious companies.",
    author: "David Chen",
    role: "Founder, Zenith Real Estate",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-secondary/20 border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6">Trusted by Industry Leaders</h2>
          <p className="text-body max-w-2xl mx-auto">
            Our success is measured by the growth of our clients. Here is what they have to say about partnering with Webify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-10 md:p-12 rounded-3xl bg-white/5 border border-white/10 relative"
            >
              <div className="flex gap-1 text-luxury mb-8">
                {[...Array(testimony.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-200">
                "{testimony.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold">
                  {testimony.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimony.author}</div>
                  <div className="text-sm text-gray-400">{testimony.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
