"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";

export default function CaseStudiesCarousel({ studies }: { studies: CaseStudy[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % studies.length);
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? studies.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="hidden md:flex justify-end gap-4 mb-8">
        <button 
          onClick={handlePrev}
          className="p-4 rounded-full border border-white/10 bg-primary hover:bg-white/5 transition-colors text-white group"
          aria-label="Previous case study"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={handleNext}
          className="p-4 rounded-full border border-white/10 bg-primary hover:bg-white/5 transition-colors text-white group"
          aria-label="Next case study"
        >
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative h-[800px] md:h-[600px] w-full overflow-hidden rounded-3xl bg-secondary/50 border border-white/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x < -100 || velocity.x < -500) {
                handleNext();
              } else if (offset.x > 100 || velocity.x > 500) {
                handlePrev();
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Image Side */}
              <div className="relative h-64 md:h-full w-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 md:bg-gradient-to-r md:from-transparent md:to-secondary/50" />
                <img 
                  src={studies[currentIndex].heroImage} 
                  alt={studies[currentIndex].clientName} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs font-semibold text-white uppercase tracking-wider">
                    {studies[currentIndex].industry}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full bg-primary relative z-20 overflow-y-auto">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                  {studies[currentIndex].clientName}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-semibold">The Challenge</h4>
                  <p className="text-lg text-gray-300 line-clamp-3">{studies[currentIndex].challenge}</p>
                </div>

                <div className="mb-10">
                  <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-semibold">The Impact</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {studies[currentIndex].metrics.map((metric, i) => (
                      <div key={i} className="border-l-2 border-accent pl-4">
                        <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/case-studies/${studies[currentIndex].slug}`}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors mt-auto w-max group"
                >
                  <span className="relative overflow-hidden">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Read Full Case Study</span>
                    <span className="block absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">Read Full Case Study</span>
                  </span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {studies.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-accent w-8" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
