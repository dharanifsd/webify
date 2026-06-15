"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 relative bg-secondary/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="heading-section mb-6">We Measure Success in Revenue</h2>
            <p className="text-body">
              Don't just take our word for it. Explore how our digital systems have transformed businesses and delivered quantifiable ROI.
            </p>
          </div>
          <Link href="/case-studies" className="flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors">
            View All Case Studies <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="flex flex-col gap-12">
          {caseStudies.slice(0, 2).map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-primary relative block"
              >
              {/* Image / Visual Side */}
              <div className="bg-white/5 relative aspect-square lg:aspect-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                <img 
                  src={study.heroImage} 
                  alt={study.industry} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="inline-block px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-gray-400 mb-8 w-max uppercase tracking-wider">
                  {study.industry}
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">The Challenge</h4>
                  <p className="text-lg md:text-xl font-medium text-white line-clamp-3">{study.challenge}</p>
                </div>
                
                <div className="mb-12">
                  <h4 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Our Solution</h4>
                  <p className="text-lg md:text-xl font-medium text-gray-300">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-white/10">
                  {study.metrics.map((res, i) => (
                    <div key={i}>
                      <div className="text-2xl md:text-4xl font-heading font-bold text-accent mb-1">
                        {res.value}
                      </div>
                      <div className="text-xs md:text-sm font-medium text-gray-500">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
