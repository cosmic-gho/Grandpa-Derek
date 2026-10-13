import siteContentRaw from "@/data/site_content.json";

export interface SpellItem {
  slug: string;
  type: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  featured_media_url?: string;
  category?: string;
}

const siteContent = siteContentRaw as Record<string, SpellItem>;

export function categorizeSlug(slug: string, title: string): string {
  const text = (slug + " " + title).toLowerCase();
  if (
    text.includes("court") ||
    text.includes("case") ||
    text.includes("prison") ||
    text.includes("jail") ||
    text.includes("sentance") ||
    text.includes("justice")
  ) {
    return "Court & Legal Cases";
  }
  if (
    text.includes("money") ||
    text.includes("wealth") ||
    text.includes("lottery") ||
    text.includes("gambling") ||
    text.includes("business") ||
    text.includes("rich")
  ) {
    return "Wealth & Business";
  }
  if (
    text.includes("protect") ||
    text.includes("curse") ||
    text.includes("clean") ||
    text.includes("evil") ||
    text.includes("bad-luck")
  ) {
    return "Cleansing & Protection";
  }
  if (
    text.includes("voodoo") ||
    text.includes("black-magic") ||
    text.includes("white-magic") ||
    text.includes("wicca") ||
    text.includes("muti") ||
    text.includes("hoodoo")
  ) {
    return "Ancient Magic & Rituals";
  }
  if (
    text.includes("divorce") ||
    text.includes("separation") ||
    text.includes("breakup") ||
    text.includes("marriage")
  ) {
    return "Marriage & Separation";
  }
  return "Love & Relationship Spells";
}

export function getAllSpells(): SpellItem[] {
  return Object.values(siteContent).map((item) => ({
    ...item,
    category: categorizeSlug(item.slug, item.title),
  }));
}

export function getSpellBySlug(slug: string): SpellItem | null {
  const item = siteContent[slug];
  if (!item) return null;
  return {
    ...item,
    category: categorizeSlug(item.slug, item.title),
  };
}

export function getFeaturedSpells(limit = 6): SpellItem[] {
  const spells = getAllSpells();
  // Filter for key high-priority titles
  const prioritized = spells.filter((s) => {
    const sl = s.slug.toLowerCase();
    return (
      sl.includes("bring-back") ||
      sl.includes("love-spell") ||
      sl.includes("court-case") ||
      sl.includes("divorce") ||
      sl.includes("remove-curse") ||
      sl.includes("commitment")
    );
  });
  return (prioritized.length >= limit ? prioritized : spells).slice(0, limit);
}

export function getSpellsByCategory(category: string): SpellItem[] {
  return getAllSpells().filter(
    (item) => item.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedSpells(currentSlug: string, limit = 3): SpellItem[] {
  const current = getSpellBySlug(currentSlug);
  if (!current) return getAllSpells().slice(0, limit);
  const spells = getAllSpells().filter((s) => s.slug !== currentSlug);
  const sameCat = spells.filter((s) => s.category === current.category);
  return (sameCat.length >= limit ? sameCat : spells).slice(0, limit);
}
