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
  Compass,
} from "lucide-react";

export default function HomePage() {
  const featuredSpells = getFeaturedSpells(6);

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 text-xs md:text-sm font-semibold tracking-wide shadow-lg shadow-amber-950/50">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Ancient Baganda & African Spiritual Healing Power</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Bring Back Your Lost Lover & Overcome Any{" "}
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  Court Battle
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl">
                Authentic spiritual spell casting and psychic consultations by{" "}
                <strong className="text-amber-400 font-bold">Grandpa Derek</strong>. Whether your partner walked away, divorce is looming, or a complex court battle threatens your freedom, sacred ancestral forces work at any distance with fast, permanent results.
              </p>

              {/* Direct CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-200 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-200 font-medium">
                  <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Zero Backfires</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-200 font-medium">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fast Remote Results</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-200 font-medium">
                  <Compass className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Worldwide Work</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-950/50 bg-[#0d1222] group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/calabash-1030x438.jpg"
                  alt="Grandpa Derek Sacred Shrine & Ancient Altar"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-500/30">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Sacred Ancestral Altar</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-snug">
                    Ancient spiritual shrines and herbal preparations invoked daily for clients across the US, UK, Canada, Australia and worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SACRED PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-2xl p-7 relative overflow-hidden group hover:border-amber-500/50 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/30">
              <Heart className="w-6 h-6 fill-amber-400/20" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ancestral Understanding
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Discover the spiritual binding from your ancestral roots and understand the spiritual contracts that may be causing heartbreak, distance, or third-party intrusion in your relationship.
            </p>
          </div>

          <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-2xl p-7 relative overflow-hidden group hover:border-amber-500/50 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/30">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Justice & Court Resolution
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Ancient sacred chants and rituals designed to soften harsh judges, dismiss severe court cases even when evidence exists, and protect loved ones from heavy prison sentences.
            </p>
          </div>

          <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-2xl p-7 relative overflow-hidden group hover:border-amber-500/50 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Ancestral Cleanse & Protection
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Formulated according to sacred ancestral heritage. Breaks persistent generational curses, cleanses bad luck, removes witchcraft, and restores natural fortune.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES WITH AUTHENTIC IMAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Sacred Specializations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Primary Spiritual Services by Grandpa Derek
          </h2>
          <p className="text-base text-slate-200">
            Every ritual is individually tailored using ancient herbs, sacred invocations, and ancestral divination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Bring Back Lost Lover */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all shadow-2xl flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/lostloves-1030x438.jpg"
                  alt="Bring Back Lost Lover Ritual"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-black/30" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-amber-600 text-black font-bold rounded-full shadow-lg">
                  Most Requested
                </span>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-amber-300">
                  Bring Back Lost Lover Spell
                </h3>
                <p className="text-sm text-slate-100 leading-relaxed font-normal">
                  Crafted to rekindle lost emotions and feelings in your ex-partner. This spell triggers deep remembrance and longing, causing the person who walked away to return looking for you with affectionate devotion. It does not matter whether they have started another relationship or claimed they will never return—Grandpa Derek establishes a spiritual connection that melts resentment and brings them back faithful and honest.
                </p>
                <ul className="space-y-2 text-xs text-slate-200 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Works regardless of distance or time apart</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Banishes rival lovers and third-party interference</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Restores deep commitment and mutual devotion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20the%20Bring%20Back%20Lost%20Lover%20Spell`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
              >
                <span>Consult on Lost Lover Spell</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service 2: Win Court Case & Dismissal */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all shadow-2xl flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/calabash-1030x438.jpg"
                  alt="Court Case Victory Ritual"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-black/30" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-amber-600 text-black font-bold rounded-full shadow-lg">
                  Legal Victory
                </span>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-amber-300">
                  Court Case Victory & Sentence Dismissal
                </h3>
                <p className="text-sm text-slate-100 leading-relaxed font-normal">
                  Are you or a loved one facing court charges, an unfair lawsuit, or an imminent prison sentence? Grandpa Derek&apos;s ancient legal chants influence courtroom dynamics, confuse opposing witnesses, bring favor in the eyes of judges and prosecutors, and work towards complete case withdrawal or reduced penalties.
                </p>
                <ul className="space-y-2 text-xs text-slate-200 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dismiss criminal & civil court battles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Relief and sentence reduction for incarcerated loved ones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Favorable child custody & divorce settlement outcomes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20assistance%20with%20a%20Court%20Case`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
              >
                <span>Consult on Court Case Spell</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service 3: Marriage, Commitment & Stop Cheating */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all shadow-2xl flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/real-love-640x381.jpg"
                  alt="Marriage and Commitment Ritual"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-black/30" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-amber-600 text-black font-bold rounded-full shadow-lg">
                  Fidelity & Marriage
                </span>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-amber-300">
                  Marriage, Commitment & Stop Cheating
                </h3>
                <p className="text-sm text-slate-100 leading-relaxed font-normal">
                  Anchor your partner’s wandering eyes and create unbreakable fidelity. This sacred commitment spell removes outside temptations, clears old betrayals, and makes your lover prioritize you and your family above everyone else.
                </p>
                <ul className="space-y-2 text-xs text-slate-200 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Binds both partners in mutual passion & fidelity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Neutralizes outside seduction & infidelity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Prompts marriage proposals and long-term devotion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20a%20Commitment%20and%20Marriage%20Spell`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
              >
                <span>Consult on Marriage Spells</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service 4: Curse Removal & Cleansing */}
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all shadow-2xl flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/breakupcandlespell-1-1-800x438.jpg"
                  alt="Curse Removal and Cleansing Altar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-black/30" />
                <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-amber-600 text-black font-bold rounded-full shadow-lg">
                  Spiritual Cleansing
                </span>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-amber-300">
                  Curse Removal & Bad Luck Cleansing
                </h3>
                <p className="text-sm text-slate-100 leading-relaxed font-normal">
                  If your life is plagued by recurring misfortunes, failed ventures, strange illnesses, or unexplained barriers in love and finance, you may be carrying an active curse or generational hex. Grandpa Derek’s cleansing ritual breaks negative chains and restores spiritual brightness.
                </p>
                <ul className="space-y-2 text-xs text-slate-200 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Destroys black magic, evil eye, and ancestral curses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Creates an impenetrable spiritual armor around you</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Opens gates for wealth, lottery luck, and prosperity</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 pt-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=Hello%20Grandpa%20Derek,%20I%20need%20Spiritual%20Cleansing%20and%20Curse%20Removal`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
              >
                <span>Consult on Curse Removal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT GRANDPA DEREK HIGHLIGHT WITH IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0c101d] via-[#101426] to-[#0a0d16] border border-amber-900/40 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Image Column */}
            <div className="lg:col-span-4 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/news-225x300.jpg"
                  alt="Grandpa Derek Traditional African Spiritual Master"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-center pt-3">
                <span className="text-xs text-amber-300 font-bold block uppercase tracking-wider">
                  Grandpa Derek
                </span>
                <span className="text-xs text-slate-300 block">
                  Hereditary Spiritual Healer
                </span>
              </div>
            </div>

            {/* Story text column */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Ancestral Healer & Lineage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                About Grandpa Derek
              </h2>
              <p className="text-base text-slate-100 leading-relaxed font-normal">
                Grandpa Derek was born into a storied family of ancient healers in the mountains of Kigoma. Coming from a dual lineage where his father healed through holy scriptures and his mother mastered sacred roots and herbs, Grandpa Derek inherited profound ancestral powers.
              </p>
              <p className="text-base text-slate-100 leading-relaxed font-normal">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500/50 text-amber-300 hover:bg-amber-950/40 text-sm font-semibold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Grandpa Derek</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES / SPELLS FROM LIBRARY WITH IMAGES */}
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
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline"
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

      {/* TESTIMONIALS SPOTLIGHT WITH WHATSAPP PROOF IMAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Real Proof & Manifestations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Client Testimonies & Success Stories
          </h2>
          <p className="text-base text-slate-200">
            Real people who restored their relationships and won life-defining legal victories with Grandpa Derek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0c101c] border border-amber-900/40 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-sm text-slate-100 italic mb-6 leading-relaxed font-normal">
              &ldquo;My husband moved out after 12 years of marriage and had blocked me on every channel. A friend recommended Grandpa Derek. Within 5 days of his love reunion ritual, my husband called me in tears asking if we could talk. We are living together happily once again.&rdquo;
            </p>
            <div>
              <div className="font-bold text-white text-sm">Winnie Nambi</div>
              <div className="text-xs text-amber-400 font-semibold">Restored Marriage • Toronto, Canada</div>
            </div>
          </div>

          <div className="bg-[#0c101c] border border-amber-900/40 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-sm text-slate-100 italic mb-6 leading-relaxed font-normal">
              &ldquo;I was facing serious legal charges with heavy penalties in California. Grandpa Derek performed the Court Case Justice ritual for me. At the preliminary hearing, the prosecution unexpectedly dropped key charges due to conflicting evidence. Grandpa Derek gave me my life back.&rdquo;
            </p>
            <div>
              <div className="font-bold text-white text-sm">Marcus D.</div>
              <div className="text-xs text-amber-400 font-semibold">Court Case Dismissal • Los Angeles, USA</div>
            </div>
          </div>

          <div className="bg-[#0c101c] border border-amber-900/40 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-sm text-slate-100 italic mb-6 leading-relaxed font-normal">
              &ldquo;Grandpa Derek is genuine. He listened to my heartbreak with patience and gave me peace immediately. The commitment spell worked wonders—my partner cut off ties with his side partner and proposed to me last month!&rdquo;
            </p>
            <div>
              <div className="font-bold text-white text-sm">Elena K.</div>
              <div className="text-xs text-amber-400 font-semibold">Commitment & Engagement • London, UK</div>
            </div>
          </div>
        </div>

        {/* Client WhatsApp screenshots gallery preview on Home Page */}
        <div className="mt-12 bg-[#090d18] border border-amber-900/30 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-amber-300">
              WhatsApp Confirmation Screenshots
            </h4>
            <Link
              href="/testimonials"
              className="text-xs text-amber-400 hover:underline font-semibold"
            >
              View all proofs
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden border border-amber-900/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/WhatsApp-Image-2025-12-26-at-10.42.02-PM-150x300.jpg"
                alt="WhatsApp proof 1"
                className="w-full h-auto object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-amber-900/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/WhatsApp-Image-2025-12-26-at-10.42.26-PM-133x300.jpg"
                alt="WhatsApp proof 2"
                className="w-full h-auto object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-amber-900/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/WhatsApp-Image-2025-12-26-at-10.42.53-PM-146x300.jpg"
                alt="WhatsApp proof 3"
                className="w-full h-auto object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-amber-900/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/WhatsApp-Image-2025-12-26-at-10.43.10-PM-149x300.jpg"
                alt="WhatsApp proof 4"
                className="w-full h-auto object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM SECTION */}
      <section id="consultation" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationForm />
      </section>
    </div>
  );
}
