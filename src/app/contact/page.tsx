import { Metadata } from "next";
import { SITE_CONFIG } from "@/data/config";
import ConsultationForm from "@/components/ConsultationForm";
import {
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Grandpa Derek | Sacred Consultation & Spell Services",
  description:
    "Get in touch with Grandpa Derek for urgent love spell casting, court case resolution, and spiritual consultations. Available 24/7 on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Direct Line to Grandpa Derek</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Contact Grandpa Derek
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            Reach out in complete confidentiality. Grandpa Derek provides personal consultations for relationship crises, urgent court hearings, and spiritual protection worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-3xl p-8 space-y-8 shadow-xl">
              <h2 className="text-2xl font-bold text-amber-300 border-b border-gray-800 pb-4">
                Sacred Communication Channels
              </h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MessageCircle className="w-6 h-6 fill-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">
                      Primary WhatsApp (Fastest)
                    </span>
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-white hover:text-emerald-400 transition-colors block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <span className="text-xs text-emerald-400/90 block">
                      Active 24/7 for emergency cases
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">
                      Direct Telephone Call
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-bold text-white hover:text-amber-400 transition-colors block"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <span className="text-xs text-gray-400 block">
                      Direct line for confidential consultation
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">
                      Email Consultations
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors block break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <span className="text-xs text-gray-400 block">
                      Replies typically within 2 to 4 hours
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">
                      Hours of Operation
                    </span>
                    <span className="text-base font-bold text-white block">
                      24 Hours / 7 Days a Week
                    </span>
                    <span className="text-xs text-gray-400 block">
                      Spiritual crises require round-the-clock attention
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800 space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality Guarantee</span>
                </div>
                <p>
                  No personal names, photos, or ritual details are ever shared with any third party. Your consultation is sacred and private.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Form Column */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
