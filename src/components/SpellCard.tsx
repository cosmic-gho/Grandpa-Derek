import Link from "next/link";
import { SpellItem } from "@/lib/spells";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface SpellCardProps {
  spell: SpellItem;
}

export default function SpellCard({ spell }: SpellCardProps) {
  // Strip raw HTML tags from excerpt if any
  const cleanExcerpt = spell.excerpt
    ? spell.excerpt.replace(/<[^>]+>/g, "").slice(0, 140) + "..."
    : spell.content
    ? spell.content.replace(/<[^>]+>/g, "").slice(0, 140) + "..."
    : "Ancient ritual guidance and sacred traditional spell crafted by Grandpa Derek.";

  const imgSrc = spell.featured_image || "/images/lostloves-1030x438.jpg";

  return (
    <div className="group bg-[#0d121f] border border-amber-900/30 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between">
      <div>
        {/* Card Image Banner */}
        <div className="relative w-full h-48 overflow-hidden bg-black/60 border-b border-amber-900/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={spell.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-black/30" />
          <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-sm">
            {spell.category || "Sacred Ritual"}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-3 line-clamp-2 leading-snug">
            {spell.title}
          </h3>

          <p className="text-sm text-slate-100 leading-relaxed line-clamp-3 font-normal">
            {cleanExcerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs font-semibold">
        <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Ancestral Safe</span>
        </span>
        <Link
          href={`/spells/${spell.slug}`}
          className="inline-flex items-center gap-1.5 text-amber-400 group-hover:text-amber-300 hover:underline font-bold"
        >
          <span>Read Full Ritual</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
