import { Metadata } from "next";
import { getSpellsByCategory } from "@/lib/spells";
import SpellCard from "@/components/SpellCard";
import ConsultationForm from "@/components/ConsultationForm";
import { SITE_CONFIG } from "@/data/config";
import { Scale, Sparkles, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Court Case & Legal Justice Spells | Grandpa Derek",
  description:
    "Ancient spells and prayers to win court cases, dismiss charges, reduce jail sentences, and protect your freedom with Grandpa Derek.",
};

export default function CourtCasesPage() {
  const spells = getSpellsByCategory("Court & Legal Cases");

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Divine Courtroom Intervention</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Win Court Cases & Dismiss Severe Charges
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            Ancient Baganda prayers for justice, courtroom protection, and legal victory. Influence judges, soften prosecutors, and dismantle hostile evidence with Grandpa Derek.
          </p>
        </div>

        {/* Feature Overview */}
        <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">
              Spiritual Powers Inside The Courtroom
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              When facing judges, juries, and prosecutors, the courtroom is not merely a legal venue—it is a crucible of heavy energies, intentions, and adversarial spirits. Grandpa Derek&apos;s ancient legal prayers create spiritual confusion among your accusers, cast favor onto your legal defense, and work toward the complete dismissal or drastic reduction of charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-800">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dismissal of Charges</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Rituals to provoke lack of evidence, missing witnesses, or sudden procedural errors that lead to case drop.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sentence Reduction & Release</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Appeals and early parole invocations to relieve incarcerated loved ones and achieve clemency.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Civil & Custody Favour</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Turn contentious financial disputes, divorce property settlements, and child custody battles in your direction.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20have%20an%20urgent%20Court%20Case%20matter.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Discuss Court Case on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Spells Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Court Case Guides & Rituals</span>
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
