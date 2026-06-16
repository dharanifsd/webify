export interface CaseStudy {
  slug: string;
  industry: string;
  clientName: string;
  heroImage: string;
  challenge: string;
  solution: string;
  longDescription: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "zenith-real-estate",
    industry: "Real Estate",
    clientName: "Zenith Brokerage",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    challenge: "Zenith Brokerage was losing high-net-worth leads to competitors due to an outdated, slow-loading property portal that failed to convey luxury.",
    solution: "We engineered a premium, headless CMS architecture with lightning-fast image delivery and a bespoke lead qualification funnel.",
    longDescription: [
      "In the ultra-competitive luxury real estate market, first impressions dictate the caliber of clientele a brokerage attracts. Zenith Brokerage was struggling with a bloated legacy WordPress site that took over 6 seconds to load high-resolution property imagery. This friction resulted in a 65% bounce rate on premium listings.",
      "Webify was brought in to architect a ground-up digital transformation. We abandoned the monolithic structure in favor of a modern Headless CMS powered by Next.js and Sanity. This allowed for decoupled front-end rendering, dropping page load times to under 0.8 seconds.",
      "Furthermore, we implemented a dynamic, multi-step lead qualification funnel. Instead of a generic 'Contact Us' form, potential buyers were guided through an interactive preference questionnaire, filtering out window-shoppers and delivering highly qualified, data-rich leads directly into Zenith's CRM."
    ],
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Framer Motion", "Salesforce API"],
    metrics: [
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Qualified Leads", value: "+142%" },
      { label: "Bounce Rate", value: "-45%" }
    ],
    testimonial: {
      quote: "Webify didn't just build us a website; they built a scalable lead engine. Our agents are now closing deals faster because the leads coming in are already pre-qualified and highly motivated.",
      author: "David Chen",
      role: "Founder, Zenith Real Estate"
    }
  },
  {
    slug: "verdant-landscaping",
    industry: "Landscaping",
    clientName: "Verdant Outdoor Design",
    heroImage: "/landscaping.jpg",
    challenge: "Verdant relied heavily on word-of-mouth and struggled to predictably scale commercial landscaping contracts.",
    solution: "A conversion-optimized corporate portal with integrated local SEO structuring and an automated quote estimation tool.",
    longDescription: [
      "Verdant Outdoor Design had a stellar reputation for high-end residential and commercial landscaping, but their digital presence was practically non-existent. They were losing massive commercial bids to less qualified competitors simply because their website lacked corporate authority.",
      "We developed a sophisticated digital platform tailored for high-ticket B2B conversions. We integrated an interactive 'Project Estimator' tool that allowed commercial clients to input their property dimensions and requirements to receive a baseline estimate, capturing their contact data in the process.",
      "Coupled with an aggressive programmatic local SEO architecture, Verdant began dominating search results for commercial landscaping terms across three major metropolitan areas, fundamentally shifting their acquisition model from passive to highly predictable."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Google Maps API"],
    metrics: [
      { label: "Commercial Bids", value: "+310%" },
      { label: "Organic Traffic", value: "4.5x" },
      { label: "Quote Conversion", value: "28%" }
    ],
    testimonial: {
      quote: "The interactive estimator tool Webify built completely changed our sales process. It weeded out unqualified tire-kickers and doubled our commercial contract close rate.",
      author: "Sarah Jenkins",
      role: "Operations Director"
    }
  },
  {
    slug: "apex-auto-detailing",
    industry: "Auto Detailing",
    clientName: "Apex Premium Detailing",
    heroImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1600&auto=format&fit=crop",
    challenge: "High volume of low-ticket inquiries, manual booking processes causing operational bottlenecks.",
    solution: "A self-serve, dynamic booking engine with automated upsell pathways for premium ceramic coating packages.",
    longDescription: [
      "Apex Premium Detailing was trapped in a cycle of manual admin work. The owner was spending over 20 hours a week just answering DMs and scheduling appointments for basic washes, leaving no time to sell their high-margin ceramic coating services.",
      "We architected a bespoke web application featuring a dynamic scheduling system. The system evaluated the customer's vehicle type and condition, intelligently recommending higher-tier packages before checkout.",
      "By removing the friction of manual booking and implementing psychological pricing architecture within the user flow, Apex saw a massive surge in average order value without spending a single dollar more on advertising."
    ],
    technologies: ["Next.js", "Stripe API", "Twilio", "Tailwind CSS"],
    metrics: [
      { label: "Average Order Value", value: "+65%" },
      { label: "Admin Hours Saved", value: "85hrs/mo" },
      { label: "Premium Upsells", value: "3.2x" }
    ],
    testimonial: {
      quote: "I used to spend half my day on the phone. Now, customers book themselves, and the system automatically upsells them. It's like having a top-tier sales rep working 24/7.",
      author: "Marcus Vance",
      role: "Owner, Apex Detailing"
    }
  },
  {
    slug: "lumina-dental",
    industry: "Dental",
    clientName: "Lumina Advanced Dentistry",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop",
    challenge: "Failing to attract high-ticket cosmetic dentistry patients, competing purely on price for basic cleanings.",
    solution: "A luxury brand repositioning with an immersive 'Smile Gallery' and frictionless patient onboarding portal.",
    longDescription: [
      "Lumina Dentistry possessed state-of-the-art cosmetic technology, but their website looked exactly like the budget clinic down the street. They wanted to transition their practice from insurance-driven basic care to high-ticket cosmetic procedures.",
      "We executed a complete digital brand overhaul. We designed a 'minimal luxury' interface that visually aligned Lumina with high-end medical spas rather than traditional dental offices. A custom-built, interactive 'Smile Gallery' allowed prospective patients to see high-definition before-and-after cases tailored to their specific dental insecurities.",
      "We also digitized their entire patient intake process, allowing for secure HIPAA-compliant form submissions prior to the visit, elevating the in-office experience from the moment the patient walked through the door."
    ],
    technologies: ["Next.js", "Vercel", "Tailwind", "HIPAA-Compliant DB"],
    metrics: [
      { label: "Cosmetic Consults", value: "+215%" },
      { label: "Patient Retention", value: "94%" },
      { label: "New Patient ROI", value: "6.8x" }
    ],
    testimonial: {
      quote: "The brand elevation was immediate. Patients now walk in expecting a premium service, which has completely eliminated price resistance on our cosmetic procedures.",
      author: "Dr. Elena Rostova",
      role: "Lead Cosmetic Dentist"
    }
  },
  {
    slug: "vitality-health",
    industry: "Healthcare",
    clientName: "Vitality Medical Group",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop",
    challenge: "Fragmented patient communication and a clunky legacy portal resulting in a poor telemedicine experience.",
    solution: "A unified, accessible patient dashboard integrating telehealth scheduling and secure messaging.",
    longDescription: [
      "As telemedicine became the norm, Vitality Medical Group found themselves hindered by an outdated digital infrastructure. Patients were frustrated by confusing navigation, leading to a high volume of support calls and missed virtual appointments.",
      "Webify completely reimagined the patient journey. We built a highly accessible, WCAG-compliant web portal focused on extreme usability for all demographics. The architecture integrated directly with their existing EHR (Electronic Health Record) system via API.",
      "The new dashboard provided a seamless, one-click telehealth join experience, secure messaging with practitioners, and automated SMS reminders, drastically reducing operational drag and improving patient health outcomes."
    ],
    technologies: ["React", "WebRTC", "EHR Integration", "Twilio SMS"],
    metrics: [
      { label: "Missed Appointments", value: "-42%" },
      { label: "Support Call Volume", value: "-60%" },
      { label: "Patient Satisfaction", value: "4.9/5" }
    ],
    testimonial: {
      quote: "The interface is so intuitive that our elderly patients are using the telemedicine features without calling the desk for help. It's a massive operational victory.",
      author: "Dr. James Aris",
      role: "Chief Medical Officer"
    }
  },
  {
    slug: "brew-roasters",
    industry: "Cafe & E-Commerce",
    clientName: "Brew Artisan Roasters",
    heroImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop",
    challenge: "High offline brand loyalty but zero online recurring revenue; unable to scale coffee bean subscriptions.",
    solution: "A high-performance e-commerce platform with a bespoke, frictionless subscription engine.",
    longDescription: [
      "Brew Artisan Roasters had lines out the door at their physical locations, but their online store was practically dead. They were using a generic Shopify template that failed to convey the premium nature of their roasts and made subscribing to recurring deliveries confusing.",
      "We engineered a custom headless e-commerce solution. By decoupling the frontend, we achieved sub-second page loads, making the mobile shopping experience feel like a native app. We designed a 'Coffee Match' quiz that guided users to their perfect roast, culminating in an effortless 1-click subscription checkout.",
      "The strategic shift from one-off purchases to a recurring revenue model stabilized their cash flow and allowed them to expand their roasting operations nationwide."
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Framer Motion", "Tailwind CSS"],
    metrics: [
      { label: "Active Subscriptions", value: "+450%" },
      { label: "Mobile Conv. Rate", value: "4.2%" },
      { label: "Customer LTV", value: "+185%" }
    ],
    testimonial: {
      quote: "Webify turned our local cafe into a national e-commerce brand. The recurring subscription revenue has allowed us to open two new roasting facilities.",
      author: "Thomas Wright",
      role: "Co-Founder, Brew Roasters"
    }
  },
  {
    slug: "iron-core-gym",
    industry: "Fitness & Gym",
    clientName: "Iron Core Athletics",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
    challenge: "High member churn and inability to track lead attribution from social media campaigns.",
    solution: "A centralized digital ecosystem integrating CRM, member portals, and aggressive local conversion funnels.",
    longDescription: [
      "Iron Core Athletics was bleeding members to franchised competitors. They were spending $10,000 a month on Facebook ads but had no idea which campaigns were actually resulting in physical walk-ins and memberships.",
      "We built a robust digital conversion ecosystem. At the top of the funnel, we deployed hyper-targeted landing pages offering a '7-Day Elite Pass' optimized for mobile. This was integrated directly into a custom CRM we deployed, automatically tracking the lead from first click to final contract signature.",
      "Additionally, we built a progressive web app (PWA) for existing members to track workouts and book personal training sessions, drastically improving retention through digital engagement."
    ],
    technologies: ["React", "HubSpot API", "PWA Architecture", "Tailwind"],
    metrics: [
      { label: "CPA (Cost Per Acq.)", value: "-38%" },
      { label: "Member Churn", value: "-15%" },
      { label: "Personal Training Rev", value: "+42%" }
    ],
    testimonial: {
      quote: "For the first time, we know exactly where our marketing dollars are going. The member app also created a massive spike in our personal training upsells.",
      author: "Derek Stone",
      role: "Owner, Iron Core"
    }
  },
  {
    slug: "build-tech-construction",
    industry: "Construction",
    clientName: "BuildTech Commercial",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    challenge: "Viewed as a commodity contractor, struggling to win highly lucrative, multi-million dollar institutional bids.",
    solution: "A high-authority digital presence featuring 3D project walk-throughs and an enterprise capability portfolio.",
    longDescription: [
      "In commercial construction, trust and capability are everything. BuildTech was bidding on $50M+ institutional projects but their digital presence looked like a residential handyman service. Procurement officers were dismissing them during the initial vetting phase.",
      "We executed an enterprise-grade digital repositioning. The core of the new platform was the 'Capabilities Showcase', a highly interactive portfolio featuring WebGL-powered 3D fly-throughs of their completed projects, drone footage integrations, and detailed case studies of their engineering feats.",
      "We also implemented a secure 'Bid Room' portal where subcontractors could securely download blueprints and submit tenders, streamlining their internal operations and proving their technological superiority to clients."
    ],
    technologies: ["Next.js", "Three.js (WebGL)", "AWS S3", "Tailwind"],
    metrics: [
      { label: "Enterprise Bids Won", value: "+22%" },
      { label: "Avg Contract Value", value: "3.5x" },
      { label: "Subcontractor Efficiency", value: "+40%" }
    ],
    testimonial: {
      quote: "The digital authority we now project matches the actual quality of our engineering. We've won three institutional bids this quarter largely because of the trust our new platform instantly builds.",
      author: "Robert Vance",
      role: "CEO, BuildTech"
    }
  },
  {
    slug: "oak-and-iron-furniture",
    industry: "Furniture & Retail",
    clientName: "Oak & Iron Supply",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    challenge: "High cart abandonment rate due to lack of spatial visualization and clunky mobile checkout.",
    solution: "An immersive e-commerce experience featuring AR (Augmented Reality) product viewing and 1-click checkout.",
    longDescription: [
      "Selling high-ticket, handcrafted furniture online is notoriously difficult. Customers hesitated to drop $4,000 on a dining table without seeing it in their space. Oak & Iron Supply was suffering from a massive 78% cart abandonment rate at the final checkout step.",
      "We revolutionized their shopping experience by integrating web-based Augmented Reality (AR). Using Apple's ARKit and Google's ARCore directly in the browser, users could project 3D models of the furniture directly into their living rooms using their smartphone cameras—no app required.",
      "We paired this immersive experience with a frictionless, headless checkout flow utilizing Stripe's latest APIs, dropping the time-to-purchase from 3 minutes to under 30 seconds."
    ],
    technologies: ["Next.js", "WebXR", "Stripe Checkout", "Sanity CMS"],
    metrics: [
      { label: "Cart Abandonment", value: "-45%" },
      { label: "Conversion Rate", value: "+110%" },
      { label: "Return Rate", value: "-28%" }
    ],
    testimonial: {
      quote: "The AR feature completely removed the 'will it fit?' hesitation. Our sales skyrocketed within weeks of launch, and our return rate plummeted because customers knew exactly what they were getting.",
      author: "Amanda Cole",
      role: "E-Commerce Director"
    }
  },
  {
    slug: "stratosphere-consulting",
    industry: "Consulting",
    clientName: "Stratosphere Advisory",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    challenge: "Poor lead generation for their B2B services, relying solely on outbound cold outreach.",
    solution: "An inbound content engine and interactive ROI calculators designed to capture C-suite data.",
    longDescription: [
      "Stratosphere Advisory had brilliant consultants but a terrible inbound pipeline. They were relying entirely on exhausting outbound sales tactics because their website was essentially a digital brochure that did nothing to capture intent.",
      "We shifted their model to an aggressive inbound strategy. We engineered a suite of interactive 'ROI Calculators' specific to their target industries. C-suite executives could input their company metrics to see potential revenue leakage, gating the final comprehensive report behind an email capture.",
      "This proprietary software-as-a-lead-magnet approach fundamentally changed their business. Instead of cold-calling, Stratosphere's sales team was now taking warm meetings with executives who had already self-identified their financial pain points using the digital tools we built."
    ],
    technologies: ["React", "D3.js (Data Vis)", "HubSpot Integration", "Tailwind CSS"],
    metrics: [
      { label: "Inbound Leads", value: "+600%" },
      { label: "Cost Per Lead", value: "-75%" },
      { label: "Sales Cycle Time", value: "-30%" }
    ],
    testimonial: {
      quote: "The calculators Webify engineered are the best lead generation assets we have ever deployed. We now have a predictable pipeline of warm, highly qualified C-suite leads.",
      author: "Jonathan Pierce",
      role: "Managing Partner"
    }
  },
  {
    slug: "luxe-salon",
    industry: "Salon & Beauty",
    clientName: "Luxe Studio",
    heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop",
    challenge: "Over-reliance on third-party booking apps taking massive percentage cuts from every appointment.",
    solution: "A custom, proprietary booking web-app with integrated loyalty programs and SMS marketing.",
    longDescription: [
      "Luxe Studio was a thriving high-end salon, but they were bleeding margins to third-party marketplace booking apps that took up to 20% of every new client booking. They needed to own their platform and their customer data.",
      "We engineered a custom web-app that brought the entire booking experience in-house. The platform was designed with a mobile-first, app-like interface. We integrated a digital wallet and loyalty points system to heavily incentivize clients to book directly through the proprietary system rather than the third-party app.",
      "Furthermore, we built an automated SMS retention engine. If a client who usually booked every 4 weeks hit the 6-week mark, the system automatically sent a personalized text with a frictionless 1-click rebooking link."
    ],
    technologies: ["Next.js", "Twilio API", "Stripe API", "Tailwind CSS"],
    metrics: [
      { label: "Direct Bookings", value: "85% of total" },
      { label: "Third-party Fees", value: "Eliminated" },
      { label: "Rebooking Rate", value: "+34%" }
    ],
    testimonial: {
      quote: "Owning our own booking system instantly added thousands of dollars back to our bottom line every month. The automated SMS rebooking is pure genius.",
      author: "Chloe Martinez",
      role: "Owner, Luxe Studio"
    }
  }
];
