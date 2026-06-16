"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactModalTrigger from "@/components/ui/ContactModalTrigger";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "/#services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Process", href: "/#process" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <>
      <motion.header
        className={`absolute top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
          scrolled ? "bg-transparent" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-heading font-bold tracking-tighter relative z-[60] text-white">
            WEBIFY<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <ContactModalTrigger>
              <button className="bg-white text-primary px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
                Start Project
              </button>
            </ContactModalTrigger>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-[60] p-2 -mr-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-[320px] z-50 bg-primary border-l border-white/10 shadow-2xl flex flex-col px-8 pt-28 pb-8 md:hidden"
            >
              <div className="flex flex-col gap-8">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => {
                        // Small delay to allow navigation to start before unmounting
                        setTimeout(() => setMobileMenuOpen(false), 150);
                      }}
                      className="text-2xl font-heading font-semibold text-gray-300 hover:text-white hover:pl-2 transition-all block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <ContactModalTrigger>
                  <button 
                    onClick={() => setTimeout(() => setMobileMenuOpen(false), 150)}
                    className="w-full bg-white text-primary px-6 py-4 rounded-xl font-medium text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    Start Project
                  </button>
                </ContactModalTrigger>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
