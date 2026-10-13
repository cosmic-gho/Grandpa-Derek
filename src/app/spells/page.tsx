"use client";

import { useState, useMemo } from "react";
import { getAllSpells } from "@/lib/spells";
import SpellCard from "@/components/SpellCard";
import { Sparkles, Search, Filter } from "lucide-react";

const CATEGORIES = [
  "All Spells",
  "Love & Relationship Spells",
  "Court & Legal Cases",
  "Marriage & Separation",
  "Cleansing & Protection",
  "Wealth & Business",
  "Ancient Magic & Rituals",
];

export default function SpellsLibraryPage() {
  const allSpells = useMemo(() => getAllSpells(), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Spells");

  const filteredSpells = useMemo(() => {
    return allSpells.filter((spell) => {
      const matchesSearch =
        searchQuery === "" ||
        spell.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spell.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spell.slug.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === "All Spells" ||
        spell.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [allSpells, searchQuery, selectedCategory]);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Complete Sacred Library ({allSpells.length} Rituals & Guides)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Spells, Charms & Ancient Guides
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Search our comprehensive archives of ancient African rituals, love reconnection chants, legal victory spells, and spiritual cleansing methodologies.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-[#0c101d] border border-amber-900/30 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search spells (e.g. bring back ex, court case, divorce, curse removal, win lottery)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121727] border border-gray-700 focus:border-amber-500 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-gray-400 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all font-medium ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-black font-bold shadow-md shadow-amber-950/40"
                    : "bg-[#151b2e] text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-400 px-1">
          <span>Showing {filteredSpells.length} results</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-amber-400 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Spells Grid */}
        {filteredSpells.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpells.map((spell) => (
              <SpellCard key={spell.slug} spell={spell} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#0c101d] rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-base mb-2">
              No spells found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Spells");
              }}
              className="text-amber-400 font-semibold text-sm hover:underline"
            >
              Reset filters & search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
