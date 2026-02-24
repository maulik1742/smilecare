"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking a link or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-colors duration-300 ${isOpen ? "bg-[#020617]" : "bg-[#020617]/80 backdrop-blur-xl"}`}
    >
      <div className="section-container flex items-center justify-between py-3 md:py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/white_logo.png"
            alt="Smile Care Dental Clinic logo"
            className="h-8 w-auto object-contain sm:h-10 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition hover:text-lime-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/contact"
            className="btn-primary flex items-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-wider sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
          >
            <Calendar size={14} className="sm:hidden" />
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Solid background fix */}
      <div
        className={`fixed inset-0 z-40 bg-[#020617] transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col p-6 pt-24">
          <nav className="flex flex-col gap-5 text-xl font-bold text-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-white/10 pb-5 hover:text-lime-300"
              >
                {link.label}
                <span className="text-lime-400 opacity-40">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pb-10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary flex w-full items-center justify-center gap-2 py-4 text-base font-bold shadow-2xl"
            >
              <Calendar size={20} />
              Book Appointment
            </Link>
            <a
              href="tel:09970279892"
              className="btn-ghost flex w-full items-center justify-center gap-2 py-4 text-base font-bold"
            >
              <Phone size={20} />
              Call 099702 79892
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
