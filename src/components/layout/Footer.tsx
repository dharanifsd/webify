import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactModalTrigger from "@/components/ui/ContactModalTrigger";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-24 pb-12 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 max-w-md">
              Ready to scale your business?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Partner with WEBIFY to engineer digital systems that increase revenue and drive growth.
            </p>
            <ContactModalTrigger>
              <button className="group flex items-center gap-4 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-all">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </ContactModalTrigger>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#process" className="text-gray-400 hover:text-white transition-colors">Process</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company & Social</h4>
            <ul className="space-y-4">
              <li>
                <ContactModalTrigger>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</span>
                </ContactModalTrigger>
              </li>
              <li><a href="https://www.instagram.com/dd_webify/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/dharaniaurcm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} WEBIFY Digital Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
