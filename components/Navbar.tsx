"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 transition-all duration-300 ${
        scrolled ? "border-b border-amber/[0.12] bg-background/60 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a href="#hero" className="font-sans font-bold text-foreground text-xl tracking-wider">MANCUSI</a>
      <div className="hidden md:flex items-center gap-8 font-sans text-sm text-foreground/70 uppercase tracking-widest">
        <a href="#menu" className="hover:text-amber transition-colors duration-200">Il Menù</a>
        <a href="#storia" className="hover:text-amber transition-colors duration-200">La Storia</a>
        <a href="#reserva" className="hover:text-amber transition-colors duration-200">Reserva</a>
      </div>
    </nav>
  );
}
