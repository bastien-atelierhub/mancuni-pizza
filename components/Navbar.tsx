"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Il Menù", href: "#menu" },
    { name: "La Storia", href: "#storia" },
    { name: "Reserva", href: "#reserva" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 transition-all duration-300 ${
          scrolled || isOpen ? "border-b border-amber/[0.12] bg-background/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <a href="#hero" className="font-sans font-bold text-foreground text-xl tracking-wider">MANCUSI</a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm text-foreground/70 uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-amber transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-[70]"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-[1.5px] bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
          <span className={`w-6 h-[1.5px] bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[1.5px] bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 font-sans text-xl text-foreground uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-amber transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
