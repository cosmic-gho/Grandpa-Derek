"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Phone, MessageCircle, Menu, X, Sparkles, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/95 backdrop-blur-md border-b border-amber-900/30 text-white">
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-black py-1.5 px-4 text-xs md:text-sm font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-950 animate-pulse" />
            <span>Spiritual Consultations Available Worldwide • 100% Confidential</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/80 text-amber-300 px-2.5 py-0.5 rounded-full hover:bg-black transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Live</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-900/40 border border-amber-400/40 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Grandpa Derek
              </span>
              <span className="block text-[10px] md:text-xs text-amber-400/80 uppercase tracking-widest font-medium">
                Sacred Love Spells & Rituals
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-200">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link
              href="/services/love-spells"
              className="hover:text-amber-400 transition-colors"
            >
              Love & Ex Spells
            </Link>
            <Link
              href="/services/court-cases"
              className="hover:text-amber-400 transition-colors"
            >
              Court Cases
            </Link>
            <Link
              href="/services/protection-cleansing"
              className="hover:text-amber-400 transition-colors"
            >
              Cleansing & Protection
            </Link>
            <Link
              href="/spells"
              className="hover:text-amber-400 transition-colors"
            >
              All Spells Library
            </Link>
            <Link
              href="/testimonials"
              className="hover:text-amber-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">
              About Grandpa Derek
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium shadow-lg shadow-emerald-900/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c101a] border-b border-amber-900/30 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            href="/services/love-spells"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            Love & Bring Back Ex Spells
          </Link>
          <Link
            href="/services/court-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            Court Case & Justice Spells
          </Link>
          <Link
            href="/services/protection-cleansing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            Spiritual Cleansing & Curse Removal
          </Link>
          <Link
            href="/spells"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            All Spells & Articles (280+)
          </Link>
          <Link
            href="/testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            Client Testimonials
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            About Grandpa Derek
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-amber-950/40 hover:text-amber-400"
          >
            Contact & Consultation
          </Link>

          <div className="pt-4 border-t border-gray-800 space-y-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: {SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-amber-600/40 text-amber-300 font-medium text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
