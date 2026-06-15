"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const metrics = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Industries Served" },
    { value: "Enterprise", label: "Grade Development" },
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
