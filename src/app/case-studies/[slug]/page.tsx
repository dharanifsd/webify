import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import ContactModalTrigger from "@/components/ui/ContactModalTrigger";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.clientName} Case Study | Webify`,
    description: study.challenge,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-32">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-semibold tracking-widest uppercase mb-6">
            {study.industry}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
            {study.clientName}
          </h1>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-20">
          <img 
            src={study.heroImage} 
            alt={study.clientName} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">The Challenge</h3>
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
              {study.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Solution</h3>
            <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl mb-24 text-center">
          {study.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Article */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-heading font-bold mb-8">The Execution</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            {study.longDescription.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Technologies Engineered</h4>
            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto p-12 bg-secondary/50 rounded-3xl border border-white/5 text-center mb-24">
          <p className="text-2xl md:text-3xl font-medium text-gray-200 italic mb-8">
            "{study.testimonial.quote}"
          </p>
          <div className="font-heading text-xl font-bold text-white">
            {study.testimonial.author}
          </div>
          <div className="text-accent text-sm uppercase tracking-widest mt-1">
            {study.testimonial.role}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Want similar results for your business?</h2>
          <ContactModalTrigger>
            <button className="bg-white hover:bg-gray-200 text-primary px-8 py-4 rounded-full font-bold transition-all">
              Start Your Project
            </button>
          </ContactModalTrigger>
        </div>

      </div>
    </main>
  );
}
