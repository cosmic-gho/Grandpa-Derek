"use client";

import { MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Floating WhatsApp bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 transition-all duration-300 hover:scale-105"
          aria-label="Chat with Grandpa Derek on WhatsApp"
        >
          {/* Pulsing glow ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
          
          <MessageCircle className="w-6 h-6 fill-white shrink-0" />
          <span className="text-sm font-bold pr-1 tracking-wide hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Floating Call Button for mobile bottom left */}
      <div className="fixed bottom-6 left-6 z-50 sm:hidden">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-2xl shadow-amber-950/60 border border-amber-400/40"
          aria-label="Call Grandpa Derek directly"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
