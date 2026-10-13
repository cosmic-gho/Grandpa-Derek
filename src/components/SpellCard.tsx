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

  return (
    <div className="group bg-[#0d121f] border border-amber-900/30 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between">
      <div className="p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/40">
            {spell.category || "Sacred Ritual"}
          </span>
          <Sparkles className="w-4 h-4 text-amber-500/60 group-hover:text-amber-400 group-hover:scale-110 transition-transform" />
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2 line-clamp-2">
          {spell.title}
        </h3>

        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
          {cleanExcerpt}
        </p>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-gray-800/60 flex items-center justify-between text-xs font-semibold">
        <span className="text-gray-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ancestral Safe</span>
        </span>
        <Link
          href={`/spells/${spell.slug}`}
          className="inline-flex items-center gap-1.5 text-amber-400 group-hover:text-amber-300 hover:underline"
        >
          <span>Read Full Ritual</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
