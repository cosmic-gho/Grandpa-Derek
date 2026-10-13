import Link from "next/link";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/data/config";
import ConsultationForm from "@/components/ConsultationForm";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  Heart,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Grandpa Derek | African Traditional Spiritual Healer",
  description:
    "Learn about Grandpa Derek's sacred lineage, spiritual birth, ancestral powers, and master spell casting practice.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ancestral Gift & Hereditary Lineage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            About Grandpa Derek
          </h1>
          <p className="text-base text-gray-300">
            Master Spiritual Healer, Hereditary Spell Caster & Psychic Diviner
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-[#0b0f1b] border border-amber-900/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="prose prose-invert prose-amber max-w-none text-gray-300 space-y-6 leading-relaxed text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">
              The Birth & Calling of Grandpa Derek
            </h2>

            <p>
              Grandpa Derek was born into a family of venerable traditional healers in the sacred mountains of Kigoma, Tanzania. From the very moment of his birth, it was recognized by the elders that he carried the profound spirit and mandate of his ancestors.
            </p>

            <p>
              Growing up, his lineage was blessed with two distinct, complementary healing systems:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-[#121829] border border-amber-800/40 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-white">Sacred Spiritual Divination</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Passed down through his paternal lineage, utilizing ancient holy texts, esoteric numerology, and Quranic spiritual recitations to treat spiritual sickness and unblock destiny.
                </p>
              </div>

              <div className="bg-[#121829] border border-amber-800/40 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-white">Natural Herbal Medicine & Charms</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Passed down from his maternal lineage, mastering rare roots, barks, oils, and earth minerals to create authentic charms, love binding elixirs, and powerful curse-breaking remedies.
                </p>
              </div>
            </div>

            <p>
              Grandpa Derek began demonstrating supernatural perception at an astonishingly young age. By the time he was a young man, people from distant villages and neighboring countries travelled to his shrine seeking counsel for troubled marriages, bitter family rivalries, and grave courtroom trials.
            </p>

            <h3 className="text-xl font-bold text-amber-300 mt-8">
              Decades of Helping Clients Worldwide
            </h3>

            <p>
              Today, Grandpa Derek continues the legacy of his revered ancestor, Grand Jaja Khalidi Zabumba and ancestor Jaja Kayizi. While remaining grounded in traditional African shrine practices, he extends his sacred rituals to clients across the United States, the United Kingdom, Canada, Australia, and continental Europe through remote distance casting.
            </p>

            <p>
              Grandpa Derek takes a deep, individual interest in every client who reaches out. He does not perform one-size-fits-all magic. Instead, he first reads the ancestral contracts and astral energies surrounding your situation before executing the ritual.
            </p>
          </div>

          {/* Quick Pillars */}
          <div className="pt-6 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-[#101524] p-4 rounded-xl border border-gray-800">
              <span className="block text-2xl font-black text-amber-400 mb-1">30+</span>
              <span className="text-xs text-gray-400">Years of Hereditary Practice</span>
            </div>
            <div className="bg-[#101524] p-4 rounded-xl border border-gray-800">
              <span className="block text-2xl font-black text-emerald-400 mb-1">100%</span>
              <span className="text-xs text-gray-400">Ancestral Safe & No Side Effects</span>
            </div>
            <div className="bg-[#101524] p-4 rounded-xl border border-gray-800">
              <span className="block text-2xl font-black text-amber-400 mb-1">Worldwide</span>
              <span className="text-xs text-gray-400">Remote Distance Invocations</span>
            </div>
          </div>
        </div>

        {/* Contact CTA banner */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Have a Private Question for Grandpa Derek?
          </h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Reach out directly for an immediate spiritual appraisal of your relationship or court matter.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Message on WhatsApp ({SITE_CONFIG.phone})</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-amber-500/50 text-amber-300 hover:bg-amber-950/40 font-semibold text-sm"
            >
              <span>Email: {SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>

        {/* Consultation Form */}
        <section className="pt-6">
          <ConsultationForm />
        </section>
      </div>
    </div>
  );
}
