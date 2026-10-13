import { Metadata } from "next";
import { getSpellsByCategory } from "@/lib/spells";
import SpellCard from "@/components/SpellCard";
import ConsultationForm from "@/components/ConsultationForm";
import { SITE_CONFIG } from "@/data/config";
import { Heart, Sparkles, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Love & Bring Back Lost Lover Spells | Grandpa Derek",
  description:
    "Powerful ancestral love spells to bring back your ex-lover, stop divorce, stop cheating, and create permanent commitment.",
};

export default function LoveSpellsPage() {
  const spells = getSpellsByCategory("Love & Relationship Spells");

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20" />
            <span>Master African Love Invocations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Bring Back Lost Lover & Sacred Love Spells
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            Rekindle the flame of love, heal traumatic breakups, stop divorce proceedings, and eliminate outside interference with Grandpa Derek&apos;s proven ancestral love rituals.
          </p>
        </div>

        {/* Feature Overview */}
        <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">
              How Grandpa Derek&apos;s Love Spells Work
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              When a lover walks away, communication breaks down or third parties intrude, negative spiritual energy forms a barrier between souls. The <strong className="text-amber-400">Bring Back Lost Lover Spell</strong> is crafted with ancient ingredients to dissolve that barrier, awaken loving memories, and compel your partner to return with deeper loyalty, honesty, and passion than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-800">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Ex Return Ritual</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Reignites dormant passion and longing, prompting your ex to initiate contact, apologize, and seek emotional reunion.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Stop Cheating & Third Parties</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Breaks spiritual ties with mistresses, side lovers, and toxic influencers, binding your partner solely to you.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Marriage & Commitment</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transforms hesitation into devotion, prompting marriage proposals, halting divorce paperwork, and building stability.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20urgent%20help%20with%20my%20love%20life.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Discuss Your Case on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Spells Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Articles & Spell Guides in Love ({spells.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spells.slice(0, 30).map((spell) => (
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
