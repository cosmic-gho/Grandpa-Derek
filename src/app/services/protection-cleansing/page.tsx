import { Metadata } from "next";
import { getSpellsByCategory } from "@/lib/spells";
import SpellCard from "@/components/SpellCard";
import ConsultationForm from "@/components/ConsultationForm";
import { SITE_CONFIG } from "@/data/config";
import { ShieldCheck, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Spiritual Cleansing & Curse Removal Spells | Grandpa Derek",
  description:
    "Break black magic curses, hexes, evil eye, and bad luck with Grandpa Derek's ancestral spiritual cleansing rituals.",
};

export default function ProtectionCleansingPage() {
  const spells = getSpellsByCategory("Cleansing & Protection");

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Spiritual Cleansing & Immunity</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Spiritual Cleansing & Curse Removal
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            Eradicate negative spiritual obstacles, break generational curses, cleanse toxic auras, and erect an ancestral shield around your home and family.
          </p>
        </div>

        {/* Feature Overview */}
        <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">
              Signs You May Require Spiritual Cleansing
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Formed in 1863 by the late grand Jaja Khalidi Zabumba and carrying the powers of ancestor Jaja Kayizi, Grandpa Derek&apos;s cleansing ritual is designed to remove lingering hexes, evil spirits, and heavy spiritual fatigue. It resets your spiritual vibration, ensuring your hard work manifests rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-800">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Banish Bad Luck</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Clears chronic setbacks in finance, business, career stagnation, and unfulfilled relationships.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hex & Curse Neutralization</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Dismantles black magic or jealousy curses cast against you by hidden adversaries or former partners.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Ancestral Protection Shield</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Establishes a spiritual boundary around you, your children, and your home to repel dark forces permanently.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20Spiritual%20Cleansing%20and%20Protection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Request Cleansing on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Spells Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Cleansing & Protection Guides</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spells.map((spell) => (
              <SpellCard key={spell.slug} spell={spell} />
            ))}
          </div>
        </div>

        {/* Consultation Form */}
        <section className="max-w-4xl mx-auto pt-6">
          <ConsultationForm />
        </section>
      </div>
    </div>
  );
}
