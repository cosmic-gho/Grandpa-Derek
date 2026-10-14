import Image from "next/image";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/data/config";
import ConsultationForm from "@/components/ConsultationForm";
import { Sparkles, Star, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonies & Reviews | Grandpa Derek Love Spell",
  description:
    "Real reviews, client experiences, and success stories from people whose relationships and court cases were transformed by Grandpa Derek.",
};

const TESTIMONIALS = [
  {
    name: "Winnie Nambi",
    location: "Toronto, Canada",
    category: "Restored Marriage & Ex Husband Return",
    image: "/images/woman-1912909_960_720.jpg",
    quote:
      "When my husband walked out on our family, I thought everything was lost. A close acquaintance told me about Grandpa Derek. I reached out via WhatsApp with skepticism, but Grandpa Derek gave me hope and immediately initiated the sacred ancestral love spell. Within days, my husband sent an emotional message apologizing for leaving. We are now closer than we have been in a decade. Grandpa Derek is truly blessed.",
  },
  {
    name: "David M.",
    location: "Atlanta, GA, USA",
    category: "Felony Court Case Dismissal",
    image: "/images/adult-balloons-celebration-1756632.jpg",
    quote:
      "I was facing severe accusations and an aggressive prosecution that threatened my freedom and career. Grandpa Derek performed the Court Case Justice & Witness Confusion ritual. When our hearing arrived, key prosecution witnesses contradicted their statements and the judge dismissed the indictment without prejudice. God bless Grandpa Derek.",
  },
  {
    name: "Chloe & Liam",
    location: "London, UK",
    category: "Commitment & Stop Cheating",
    image: "/images/affection-boyfriend-couple-2220442.jpg",
    quote:
      "My fiancé was chronically cheating and delaying our wedding date indefinitely. Grandpa Derek cast his commitment and loyalty spell. Almost instantly, my partner severed contact with the other woman, confessed everything openly, and we finalized our wedding preparations without any tension.",
  },
  {
    name: "Jackson T. & Wife",
    location: "Sydney, Australia",
    category: "Divorce Prevention",
    image: "/images/married-black-couple.jpg",
    quote:
      "My wife had already retained divorce attorneys and demanded separation. Grandpa Derek cast his sacred marriage binding ritual. The hostility melted away within a week. She tore up the papers and we are now healing in counseling together.",
  },
  {
    name: "Patricia S.",
    location: "Houston, TX, USA",
    category: "Curse Removal & Bad Luck Cleansing",
    image: "/images/photo-of-smiling-woman-talking-on-phone-2559050.jpg",
    quote:
      "For four straight years, every business I started collapsed and my personal relationships ended abruptly in bitter fights. Grandpa Derek performed a full spiritual diagnosis and identified an active jealousy curse. After the ancestral cleansing, my energy shifted completely. My new store is thriving and I feel genuine inner peace.",
  },
  {
    name: "Amara K.",
    location: "Nairobi, Kenya",
    category: "Lost Lover Reunion",
    image: "/images/woman-and-man-hugging-each-other-under-cloudy-sky-1390221.jpg",
    quote:
      "He had blocked my phone number and social media accounts for over 8 months. Grandpa Derek told me to remain patient while he performed the ancestral shrine invocations. On the fourth evening, he unblocked me and called at 2 AM crying. We are reunited!",
  },
];

// Screenshot images from public/images
const WHATSAPP_PROOFS = [
  "/images/WhatsApp-Image-2025-12-26-at-10.42.02-PM-150x300.jpg",
  "/images/WhatsApp-Image-2025-12-26-at-10.42.26-PM-133x300.jpg",
  "/images/WhatsApp-Image-2025-12-26-at-10.42.53-PM-146x300.jpg",
  "/images/WhatsApp-Image-2025-12-26-at-10.43.10-PM-149x300.jpg",
];

export default function TestimonialsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Verified Results & Client Stories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Client Testimonies & Reviews
          </h1>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
            Read heartfelt stories and see verified client photos from individuals around the world whose relationships were restored and court cases resolved through Grandpa Derek&apos;s sacred rituals.
          </p>
        </div>

        {/* Testimonials Grid with Client Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0c101c] border border-amber-900/30 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl group"
            >
              {/* Client Photo Banner Header */}
              <div className="relative h-48 w-full overflow-hidden bg-black/60 border-b border-amber-900/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={`${t.name} - Grandpa Derek Client Testimonial`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-[#0c101c]/30 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-semibold text-amber-300 bg-black/80 px-2.5 py-1 rounded-full border border-amber-500/40 backdrop-blur-sm">
                  {t.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-100 leading-relaxed italic font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Client Profile Footer with Avatar */}
                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-md shrink-0 bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.name}</h4>
                      <span className="text-xs text-slate-300 font-medium block">
                        {t.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40 shrink-0 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Chat Proofs */}
        <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">
              WhatsApp Client Conversations & Proofs
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Screenshots sent by grateful clients testifying to the speedy manifestation of Grandpa Derek&apos;s spells.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {WHATSAPP_PROOFS.map((src, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-amber-900/50 bg-black/40 shadow-lg group hover:scale-105 transition-transform"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`WhatsApp proof ${i + 1}`}
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Start Your Story with Grandpa Derek</span>
            </a>
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
