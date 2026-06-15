"use client";

import { motion } from "framer-motion";
import { Monitor, Code2, Smartphone, Workflow, LayoutTemplate, PenTool, Bot, Database } from "lucide-react";

const services = [
  { icon: Monitor, title: "High Converting Websites", desc: "Digital storefronts engineered for maximum lead generation and brand authority." },
  { icon: Code2, title: "Custom SaaS Development", desc: "Scalable software products built from scratch to solve complex business problems." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences that users love to engage with." },
  { icon: Workflow, title: "Business Automation Systems", desc: "Streamline operations and reduce overhead with custom internal tools." },
  { icon: PenTool, title: "UI UX Design", desc: "Frictionless user journeys designed through deep psychological research." },
  { icon: LayoutTemplate, title: "Website Redesign Services", desc: "Transform underperforming websites into revenue-generating assets." },
  { icon: Bot, title: "AI Automation Solutions", desc: "Integrate cutting-edge LLMs to automate customer support and data processing." },
  { icon: Database, title: "CRM & Workflow Automation", desc: "Connect your entire tech stack to eliminate manual data entry." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center md:text-left max-w-3xl">
          <h2 className="heading-section mb-6">Capabilities Engineered For Growth</h2>
          <p className="text-body">
            We don't just write code. We build holistic digital ecosystems designed to scale your operations and multiply your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-accent/20 rounded-full blur-2xl" />
                </div>
                
                <div className="mb-6 inline-block p-4 rounded-xl bg-white/5 text-accent group-hover:scale-110 transition-transform">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-4 text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
