"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    name: "FinTech Dashboard",
    category: "Web App",
    image: "finTech.jpg",
  },
  {
    name: "Luxury E-Commerce",
    category: "Website",
    image: "ecommerce.png",
  },
  {
    name: "Healthcare Portal",
    category: "SaaS",
    image: "healthcare.png",
  },
  {
    name: "AI Marketing Agent",
    category: "Software",
    image: "marketingAgent.png",
  }
];

export default function WorkShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate the draggable width
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-32 relative bg-primary z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Digital experiences that drive measurable results.
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-lg">
            We don&apos;t just build websites. We engineer high-performing digital systems designed for maximum ROI.
          </p>
        </div>
      </div>

      <div className="pl-6 md:pl-0">
        <motion.div 
          ref={carouselRef} 
          className="cursor-grab active:cursor-grabbing overflow-hidden md:container md:mx-auto md:px-6 md:max-w-7xl"
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            className="flex gap-6 md:gap-8 w-max"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-[85vw] sm:w-[500px] lg:w-[650px] shrink-0 block"
              >
                <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden bg-secondary border border-white/10 pointer-events-none">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-semibold text-white mb-4 uppercase tracking-wider">
                        {project.category}
                      </div>
                      <h4 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                        {project.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator for desktop */}
      <div className="container mx-auto px-6 max-w-7xl mt-12 hidden md:flex justify-end">
        <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
          <span>&larr; Drag to explore &rarr;</span>
        </div>
      </div>
    </section>
  );
}
