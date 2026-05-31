"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const APP_URL = "https://app.tooltrail.com.au";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
              <TrailIcon />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Tool<span className="text-orange-500">Trail</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_URL}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Sign in
            </a>
            <a
              href={`${APP_URL}/signup`}
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Start free trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-white py-2.5 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href={APP_URL}
                className="block text-center text-slate-300 hover:text-white py-2.5 text-base font-medium transition-colors"
              >
                Sign in
              </a>
              <a
                href={`${APP_URL}/signup`}
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold px-4 py-3 rounded-lg transition-colors"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function TrailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
      <circle cx="4" cy="16" r="2.5" fill="white" />
      <circle cx="10" cy="10" r="2.5" fill="white" opacity="0.7" />
      <circle cx="16" cy="4" r="2.5" fill="white" opacity="0.4" />
      <path
        d="M4 16 Q7 13 10 10 Q13 7 16 4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
