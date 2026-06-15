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
        className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-transparent" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-heading font-bold tracking-tighter relative z-50">
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
            className="md:hidden relative z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-heading font-bold text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 w-[80%] max-w-xs">
              <ContactModalTrigger>
                <button className="w-full bg-white text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors">
                  Start Project
                </button>
              </ContactModalTrigger>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
