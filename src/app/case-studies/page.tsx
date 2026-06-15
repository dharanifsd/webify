import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CalendlyTrigger from "@/components/ui/CalendlyTrigger";

export const metadata = {
  title: "Case Studies | Webify Digital Agency",
  description: "Explore how we have engineered predictable growth and scaled revenue for industry-leading companies.",
};

export default function CaseStudiesIndex() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Our Work</h1>
          <p className="text-xl text-gray-400">
            We don't just build software. We engineer digital systems that solve complex business bottlenecks and multiply revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link 
              key={study.slug} 
              href={`/case-studies/${study.slug}`}
              className="group block bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={study.heroImage} 
                  alt={study.clientName} 
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider">{study.industry}</span>
                  <ArrowUpRight className="text-gray-500 group-hover:text-accent transition-colors" size={20} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {study.clientName}
                </h2>
                <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            </Link>
          ))}
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
