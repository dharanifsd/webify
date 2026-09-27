"use client";

import { motion } from "framer-motion";

const projects = [
  { 
    name: "FinTech Dashboard", 
    category: "Web App", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2"
  },
  { 
    name: "Luxury E-Commerce", 
    category: "Website", 
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop", // updated to a better working unsplash image
    span: "col-span-1"
  },
  { 
    name: "Healthcare Portal", 
    category: "SaaS", 
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1"
  },
  { 
    name: "AI Marketing Agent", 
    category: "Software", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2"
  }
];

export default function WorkShowcase() {
  return (
    <section className="py-32 relative bg-primary z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className={`group cursor-pointer block relative ${project.span}`}
            >
              <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden bg-secondary border border-white/10">
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex justify-between items-end gap-4">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
