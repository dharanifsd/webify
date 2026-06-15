import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import CaseStudies from "@/components/home/CaseStudies";
import WhyChooseWebify from "@/components/home/WhyChooseWebify";
import WorkShowcase from "@/components/home/WorkShowcase";
import Testimonials from "@/components/home/Testimonials";
import Process from "@/components/home/Process";
import Founder from "@/components/home/Founder";
import CtaSection from "@/components/home/CtaSection";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Services />
      <CaseStudies />
      <WhyChooseWebify />
      <WorkShowcase />
      <Testimonials />
      <Process />
      <Founder />
      <CtaSection />
      <Contact />
    </>
  );
}
