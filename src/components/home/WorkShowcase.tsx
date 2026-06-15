"use client";

import { motion } from "framer-motion";

const projects = [
  { name: "FinTech Dashboard", category: "Web App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
  { name: "Luxury E-Commerce", category: "Website", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" },
  { name: "Healthcare Portal", category: "SaaS", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" },
  { name: "AI Marketing Agent", category: "Software", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" }
];

export default function WorkShowcase() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="heading-section text-center mb-20">Selected Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (index % 2) * 0.2, duration: 0.7 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div>
                <div className="text-accent text-sm font-semibold mb-2 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-gray-300 transition-colors">{project.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
