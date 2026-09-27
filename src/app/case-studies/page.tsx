import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CalendlyTrigger from "@/components/ui/CalendlyTrigger";
import CaseStudiesCarousel from "@/components/ui/CaseStudiesCarousel";

export const metadata = {
  title: "Case Studies | Webify systems",
  description: "Explore how we have engineered predictable growth and scaled revenue for industry-leading companies.",
};

export default function CaseStudiesIndex() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Our Work</h1>
          <p className="text-xl text-gray-400">
            We don&apos;t just build software. We engineer digital systems that solve complex business bottlenecks and multiply revenue.
          </p>
        </div>

        <div className="mb-32">
          <CaseStudiesCarousel studies={caseStudies} />
        </div>

        <div className="mt-32 text-center bg-secondary/50 rounded-3xl p-12 border border-white/5">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to be our next success story?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop losing revenue to underperforming digital assets. Let's engineer a system that drives predictable growth for your company.
          </p>
          <CalendlyTrigger>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all">
              Book Your Strategy Call
            </button>
          </CalendlyTrigger>
        </div>
      </div>
    </main>
  );
}
