"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";
import CaseStudiesCarousel from "@/components/ui/CaseStudiesCarousel";

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 relative bg-secondary/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="heading-section mb-6">We Measure Success in Revenue</h2>
            <p className="text-body">
              Don&apos;t just take our word for it. Explore how our digital systems have transformed businesses and delivered quantifiable ROI.
            </p>
          </div>
          <Link href="/case-studies" className="flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors group pb-4">
            View All Case Studies <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* We pass a sliced array or the full array. Usually home page might show all in the carousel, or just a few featured. We'll pass top 5. */}
          <CaseStudiesCarousel studies={caseStudies.slice(0, 5)} />
        </motion.div>
      </div>
    </section>
  );
}
