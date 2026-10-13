"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Heart, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05070c] border-t border-amber-900/30 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-800 flex items-center justify-center text-white border border-amber-400/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-amber-300">
                Grandpa Derek
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Grandpa Derek is a revered African traditional spiritual healer, master love spell caster, and psychic consultant with ancestral roots in ancient Baganda healing and spiritual divination.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/40 border border-amber-900/40 p-2.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Safe rituals • Zero negative backfires • 100% Confidential</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-4">
              Sacred Spell Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/love-spells"
                  className="hover:text-amber-400 transition-colors"
                >
                  Bring Back Lost Lover Spells
                </Link>
              </li>
              <li>
                <Link
                  href="/services/love-spells"
                  className="hover:text-amber-400 transition-colors"
                >
                  Commitment & Marriage Spells
                </Link>
              </li>
              <li>
                <Link
                  href="/services/court-cases"
                  className="hover:text-amber-400 transition-colors"
                >
                  Win & Dismiss Court Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/services/protection-cleansing"
                  className="hover:text-amber-400 transition-colors"
                >
                  Spiritual Cleansing & Curse Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/love-spells"
                  className="hover:text-amber-400 transition-colors"
                >
                  Stop Cheating & Third-Party Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/spells"
                  className="hover:text-amber-400 transition-colors"
                >
                  Browse All 280+ Spells & Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust and navigation */}
          <div>
            <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-4">
              Explore & About
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Grandpa Derek&apos;s Lineage
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-amber-400 transition-colors"
                >
                  Client Testimonies & Results
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Request Sacred Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/spells/muti-baganda-healing-african-witch-craft"
                  className="hover:text-amber-400 transition-colors"
                >
                  Baganda Ancestral Healing
                </Link>
              </li>
              <li>
                <Link
                  href="/spells/african-magic-spells"
                  className="hover:text-amber-400 transition-colors"
                >
                  Effective Magic Spells
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct contact */}
          <div>
            <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500">Phone / WhatsApp</span>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-white hover:text-amber-400 font-medium"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500">Direct Email</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-white hover:text-amber-400 break-all"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500">Consultation Availability</span>
                  <span className="text-gray-300">{SITE_CONFIG.workingHours}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs">
                  Worldwide Remote Consultations (USA, UK, Canada, Australia, Europe & Africa)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            &copy; 2026 {SITE_CONFIG.name}. All ancestral rights reserved.
          </p>
          <p className="text-center md:text-right">
            Traditional spiritual healing & spell casting services. Consultations are strictly confidential.
          </p>
        </div>
      </div>
    </footer>
  );
}
