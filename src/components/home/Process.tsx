"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery & Analysis", desc: "Deep dive into your business model, competitors, and revenue bottlenecks." },
  { num: "02", title: "Strategy Blueprint", desc: "Architecting the perfect digital ecosystem to solve your specific challenges." },
  { num: "03", title: "Design Phase", desc: "Creating high-fidelity, conversion-optimized interfaces that command premium pricing." },
  { num: "04", title: "Development Phase", desc: "Enterprise-grade engineering with modern, scalable technologies." },
  { num: "05", title: "Testing & Launch", desc: "Rigorous QA, performance optimization, and strategic deployment." },
  { num: "06", title: "Growth Optimization", desc: "Continuous iteration based on real user data and conversion metrics." }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="heading-section mb-6">Our Engineered Process</h2>
          <p className="text-body max-w-2xl mx-auto">
            We don't leave success to chance. Our proven methodology ensures predictable, high-impact results for every project.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full block" />
          <motion.div 
            className="absolute left-5 md:left-1/2 top-0 w-1 bg-accent -translate-x-1/2 rounded-full block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-col md:flex-row items-center relative md:h-64">
                  
                  {/* Left Content (Desktop Only for Even items) */}
                  <div className={`hidden md:flex md:w-1/2 w-full ${isEven ? 'justify-end pr-16' : ''}`}>
                    {isEven && (
                      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-md">
                        <div className="text-accent font-heading text-xl font-bold mb-2">{step.num}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Node (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary border-4 border-white/10 hidden md:flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                  </div>
                  
                  {/* Mobile Node (Mobile) */}
                  <div className="absolute left-5 top-8 w-10 h-10 -translate-x-1/2 rounded-full bg-primary border-2 border-white/10 flex md:hidden items-center justify-center z-10">
                     <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>

                  {/* Right Content (Desktop for Odd items, Mobile for ALL items) */}
                  <div className={`w-full flex md:w-1/2 ${!isEven ? 'md:justify-start md:pl-16' : 'md:hidden'} pl-16 md:pl-0`}>
                    <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl w-full max-w-md">
                      <div className="text-accent font-heading text-xl font-bold mb-2">{step.num}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
