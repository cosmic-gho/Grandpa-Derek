import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { getFeaturedSpells } from "@/lib/spells";
import SpellCard from "@/components/SpellCard";
import ConsultationForm from "@/components/ConsultationForm";
import {
  Sparkles,
  Heart,
  Scale,
  ShieldCheck,
  Flame,
  Award,
  Clock,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Users,
  Compass,
} from "lucide-react";

export default function HomePage() {
  const featuredSpells = getFeaturedSpells(6);

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-28">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs md:text-sm font-semibold tracking-wide shadow-lg shadow-amber-950/50">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Ancient Baganda & African Spiritual Healing Power</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Bring Back Your Lost Lover & Overcome Any{" "}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Court Battle
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Authentic spiritual spell casting and psychic consultations by{" "}
              <strong className="text-amber-400 font-bold">Grandpa Derek</strong>. Whether your partner walked away, divorce is looming, or a complex court battle threatens your freedom, sacred ancestral forces work at any distance.
            </p>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-950/40 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp: {SITE_CONFIG.phone}</span>
              </a>

              <a
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-600 hover:bg-amber-500 text-black font-bold text-base shadow-xl shadow-amber-950/40 transition-all hover:scale-105"
              >
                <span>Request Ritual Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-gray-800/80">
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
                <Flame className="w-5 h-5 text-amber-400 shrink-0" />
                <span>No Negative Backfires</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Fast Remote Results</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
                <Compass className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Worldwide Casting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SACRED PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0b0f1a] border border-amber-900/30 rounded-2xl p-7 relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/20">
              <Heart className="w-6 h-6 fill-amber-400/20" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ancestral Understanding
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover the spiritual binding from your ancestral roots and understand the spiritual contracts that may be causing heartbreak, distance, or third-party intrusion in your relationship.
            </p>
          </div>

          <div className="bg-[#0b0f1a] border border-amber-900/30 rounded-2xl p-7 relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/20">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Justice & Court Resolution
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ancient sacred chants and rituals designed to soften harsh judges, dismiss severe court cases even when evidence exists, and protect loved ones from heavy prison sentences.
            </p>
          </div>

          <div className="bg-[#0b0f1a] border border-amber-900/30 rounded-2xl p-7 relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ancestral Cleanse & Protection
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Formulated according to sacred ancestral heritage. Breaks persistent generational curses, cleanses bad luck, removes witchcraft, and restores natural fortune.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES ACCORDION / SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Sacred Specializations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Primary Spiritual Services by Grandpa Derek
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Every ritual is individually tailored using ancient herbs, sacred invocations, and ancestral divination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Bring Back Lost Lover */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-amber-300">
                Bring Back Lost Lover Spell
              </h3>
              <span className="text-xs px-3 py-1 bg-amber-950 text-amber-400 rounded-full border border-amber-800">
                Most Requested
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Crafted to rekindle lost emotions and feelings in your ex-partner. This spell triggers deep remembrance and longing, causing the person who walked away to return looking for you with affectionate devotion. It does not matter whether they have started another relationship or claimed they will never return—Grandpa Derek establishes a spiritual connection that melts resentment and brings them back faithful and honest.
            </p>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Works regardless of distance or time apart</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Banishes rival lovers and third-party interference</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Restores deep commitment and mutual devotion</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20the%20Bring%20Back%20Lost%20Lover%20Spell`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
            >
              <span>Consult on Lost Lover Spell</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Service 2: Win Court Case & Dismissal */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-amber-300">
                Court Case Victory & Sentence Dismissal
              </h3>
              <span className="text-xs px-3 py-1 bg-amber-950 text-amber-400 rounded-full border border-amber-800">
                Legal Protection
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Are you or a loved one facing court charges, an unfair lawsuit, or an imminent prison sentence? Grandpa Derek&apos;s ancient legal chants influence courtroom dynamics, confuse opposing witnesses, bring favor in the eyes of judges and prosecutors, and work towards complete case withdrawal or reduced penalties.
            </p>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dismiss criminal & civil court battles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Relief and sentence reduction for incarcerated loved ones</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Favorable child custody & divorce settlement outcomes</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20assistance%20with%20a%20Court%20Case`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
            >
              <span>Consult on Court Case Spell</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Service 3: Marriage, Commitment & Stop Cheating */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-amber-300">
                Marriage, Commitment & Stop Cheating
              </h3>
              <span className="text-xs px-3 py-1 bg-amber-950 text-amber-400 rounded-full border border-amber-800">
                Relationship Bond
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Anchor your partner’s wandering eyes and create unbreakable fidelity. This sacred commitment spell removes outside temptations, clears old betrayals, and makes your lover prioritize you and your family above everyone else.
            </p>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Binds both partners in mutual passion & fidelity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Neutralizes outside seduction & infidelity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Prompts marriage proposals and long-term devotion</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20a%20Commitment%20and%20Marriage%20Spell`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
            >
              <span>Consult on Marriage Spells</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Service 4: Curse Removal & Cleansing */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-amber-300">
                Curse Removal & Bad Luck Cleansing
              </h3>
              <span className="text-xs px-3 py-1 bg-amber-950 text-amber-400 rounded-full border border-amber-800">
                Spiritual Cleansing
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              If your life is plagued by recurring misfortunes, failed ventures, strange illnesses, or unexplained barriers in love and finance, you may be carrying an active curse or generational hex. Grandpa Derek’s cleansing ritual breaks negative chains and restores spiritual brightness.
            </p>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Destroys black magic, evil eye, and ancestral curses</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Creates an impenetrable spiritual armor around you</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Opens gates for wealth, lottery luck, and prosperity</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20Spiritual%20Cleansing%20and%20Curse%20Removal`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
            >
              <span>Consult on Curse Removal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT GRANDPA DEREK HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0c101d] via-[#101426] to-[#0a0d16] border border-amber-900/40 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Ancestral Healer & Lineage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                About Grandpa Derek
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Grandpa Derek was born into a storied family of ancient healers in the mountains of Kigoma. Coming from a dual lineage where his father healed through holy scriptures and his mother mastered sacred roots and herbs, Grandpa Derek inherited profound ancestral powers.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Over decades of spiritual devotion, Grandpa Derek has assisted thousands across the USA, UK, Canada, Australia, and Africa to overcome seemingly hopeless romantic separations, contentious court cases, and chronic spiritual attacks.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-black font-bold text-sm shadow-lg shadow-amber-950/40 transition-all"
                >
                  <span>Read Full Bio & History</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500/40 text-amber-300 hover:bg-amber-950/40 text-sm font-semibold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Grandpa Derek</span>
                </a>
              </div>
            </div>

            <div className="bg-[#080b13] border border-amber-900/50 rounded-2xl p-6 md:p-8 space-y-5">
              <h3 className="text-lg font-bold text-amber-300 border-b border-gray-800 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>The Sacred Promises of Grandpa Derek</span>
              </h3>
              <div className="space-y-4 text-xs md:text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Zero Negative Repercussions:</strong>
                    Spells work in harmony with cosmic balance, leaving no backfires or spiritual harm.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Absolute Confidentiality:</strong>
                    Your identities, private conversations, and requests are protected by sacred oath.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Direct Personal Consultation:</strong>
                    You communicate directly with Grandpa Derek via WhatsApp or phone.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES / SPELLS FROM LIBRARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Sacred Knowledge
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Featured Spells & Ancient Guides
            </h2>
          </div>
          <Link
            href="/spells"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:underline"
          >
            <span>View All 280+ Spells & Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSpells.map((spell) => (
            <SpellCard key={spell.slug} spell={spell} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Real Proof & Manifestations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Client Testimonies & Success Stories
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Real people who restored their relationships and won life-defining legal victories with Grandpa Derek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0c101c] border border-amber-900/30 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-300 italic mb-6 leading-relaxed">
              &ldquo;My husband moved out after 12 years of marriage and had blocked me on every channel. A friend recommended Grandpa Derek. Within 5 days of his love reunion ritual, my husband called me in tears asking if we could talk. We are living together happily once again.&rdquo;
            </p>
            <div>
              <div className="font-bold text-white text-sm">Winnie Nambi</div>
              <div className="text-xs text-amber-400">Restored Marriage • Toronto, Canada</div>
            </div>
          </div>

          <div className="bg-[#0c101c] border border-amber-900/30 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-300 italic mb-6 leading-relaxed">
              &ldquo;I was facing serious legal charges with heavy penalties in California. Grandpa Derek performed the Court Case Justice ritual for me. At the preliminary hearing, the prosecution unexpectedly dropped key charges due to conflicting evidence. Grandpa Derek gave me my life back.&rdquo;
            </p>
            <div>
              <div className="font-bold text-white text-sm">Marcus D.</div>
              <div className="text-xs text-amber-400">Court Case Dismissal • Los Angeles, USA</div>
            </div>
          </div>

          <div className="bg-[#0c101c] border border-amber-900/30 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-300 italic mb-6 leading-relaxed">
              &ldquo;Grandpa Derek is genuine. He listened to my heartbreak with patience and gave me peace immediately. The commitment spell worked wonders—my partner cut off ties with his side partner and proposed to me last month!&rdquo;
            </p>
            <div>
              <div className="font-bold text-white text-sm">Elena K.</div>
              <div className="text-xs text-amber-400">Commitment & Engagement • London, UK</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:underline"
          >
            <span>Read more reviews and see client WhatsApp proofs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CONSULTATION FORM SECTION */}
      <section id="consultation" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationForm />
      </section>
    </div>
  );
}
