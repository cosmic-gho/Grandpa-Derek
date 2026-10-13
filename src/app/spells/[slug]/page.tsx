import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getSpellBySlug, getAllSpells, getRelatedSpells } from "@/lib/spells";
import { SITE_CONFIG } from "@/data/config";
import SpellCard from "@/components/SpellCard";
import ConsultationForm from "@/components/ConsultationForm";
import {
  Sparkles,
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  Calendar,
  Tag,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const spells = getAllSpells();
  return spells.slice(0, 50).map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spell = getSpellBySlug(slug);
  if (!spell) {
    return {
      title: "Spell Not Found",
    };
  }

  const cleanDescription = spell.excerpt
    ? spell.excerpt.replace(/<[^>]+>/g, "").slice(0, 160)
    : spell.content
    ? spell.content.replace(/<[^>]+>/g, "").slice(0, 160)
    : SITE_CONFIG.description;

  return {
    title: `${spell.title} | ${SITE_CONFIG.name}`,
    description: cleanDescription,
    openGraph: {
      title: `${spell.title} | ${SITE_CONFIG.name}`,
      description: cleanDescription,
    },
  };
}

export default async function SpellDetailPage({ params }: Props) {
  const { slug } = await params;
  const spell = getSpellBySlug(slug);

  if (!spell) {
    notFound();
  }

  const related = getRelatedSpells(slug, 3);

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/spells" className="hover:text-amber-400">
            Spells & Guides
          </Link>
          <span>/</span>
          <span className="text-amber-300 truncate max-w-xs">{spell.title}</span>
        </div>

        {/* Back link */}
        <Link
          href="/spells"
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Spells & Guides</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 border-b border-gray-800 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 text-xs font-semibold border border-amber-800/50">
              <Tag className="w-3.5 h-3.5" />
              <span>{spell.category || "Sacred African Ritual"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Casted by Grandpa Derek</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {spell.title}
          </h1>

          {/* Featured Article Banner Image */}
          {spell.featured_image && (
            <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden border border-amber-900/40 shadow-2xl my-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={spell.featured_image}
                alt={spell.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e19] via-transparent to-transparent" />
            </div>
          )}
        </header>

        {/* Callout box for immediate help */}
        <div className="bg-gradient-to-r from-amber-950/60 via-[#101424] to-emerald-950/40 border border-amber-600/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Direct Ritual Guidance</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Do You Need Grandpa Derek to Cast This Spell For You?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Distance rituals are customized to your specific astrological and ancestral alignment. Connect directly with Grandpa Derek right now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(
                `Hello Grandpa Derek, I am reading "${spell.title}" and need your help.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Grandpa</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-amber-500/50 text-amber-300 hover:bg-amber-950/40 font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>

        {/* Main Content Body */}
        <article className="prose prose-invert prose-amber max-w-none prose-headings:text-amber-200 prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-a:text-amber-400 hover:prose-a:underline prose-strong:text-white bg-[#0a0e19] border border-amber-900/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div
            dangerouslySetInnerHTML={{ __html: spell.content }}
            className="space-y-6 [&>p]:mb-4 [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-amber-300 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-amber-400 [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>img]:rounded-2xl [&>img]:my-6 [&>img]:border [&>img]:border-amber-900/40"
          />
        </article>

        {/* Consultation form right below article */}
        <section className="pt-8">
          <ConsultationForm />
        </section>

        {/* Related Spells Section */}
        {related.length > 0 && (
          <section className="space-y-6 pt-10 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Related Spells & Teachings</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <SpellCard key={item.slug} spell={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
