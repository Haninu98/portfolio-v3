"use client";

import { useState } from "react";
import { SKILL_GROUPS, SkillItem } from "@/lib/data";
import TechLogo from "@/components/ui/TechLogo";

const FAMILIES: Array<SkillItem["family"] | "All"> = [
  "All",
  "Languages",
  "Systems & Hardware",
  "PLM & Configuration",
  "DevOps & Tools",
];

// Tonal color mapping matching the authentic periodic table in the Instagram reel
// Languages: deep graphite slate | Systems & Hardware: warm stone medium | PLM: lighter stone | DevOps: paper stone
const FAMILY_DEFAULT_STYLES: Record<SkillItem["family"], { bg: string; text: string; dot: string }> = {
  Languages: {
    bg: "bg-[#2b2a28] hover:bg-[#0d0d0d]",
    text: "text-[#f4f2ee]",
    dot: "bg-blue-400",
  },
  "Systems & Hardware": {
    bg: "bg-[#cfc9bf] hover:bg-[#0d0d0d]",
    text: "text-[#1a1917]",
    dot: "bg-emerald-500",
  },
  "PLM & Configuration": {
    bg: "bg-[#ded8ce] hover:bg-[#0d0d0d]",
    text: "text-[#22211f]",
    dot: "bg-amber-500",
  },
  "DevOps & Tools": {
    bg: "bg-[#eae5dc] hover:bg-[#0d0d0d]",
    text: "text-[#2d2b27]",
    dot: "bg-purple-500",
  },
};

export default function Skills() {
  const [selectedFamily, setSelectedFamily] = useState<SkillItem["family"] | "All">("All");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[var(--mute)]">02 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Technical Stack
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* Title Matching Reel Exactly: "The periodic table of my stack." */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            The periodic table <span className="font-serif italic font-normal text-[var(--mute)]">of my stack.</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--mute)] mt-3 max-w-2xl font-normal">
            32 elements in four families. Hover a tile to see its logo, or pick a family to light it up.
          </p>

          {/* Family Filter Chips Matching Reel */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {FAMILIES.map((family) => {
              const isSelected = selectedFamily === family;
              return (
                <button
                  key={family}
                  onClick={() => setSelectedFamily(isSelected && family !== "All" ? "All" : family)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? "bg-[#0d0d0d] text-[#ffffff] border-[#0d0d0d] shadow-sm font-medium"
                      : "bg-[#ffffff] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--ink)] hover:bg-[var(--soft)]"
                  }`}
                >
                  {family !== "All" && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        family === "Languages"
                          ? "bg-blue-500"
                          : family === "Systems & Hardware"
                          ? "bg-emerald-500"
                          : family === "PLM & Configuration"
                          ? "bg-amber-500"
                          : "bg-purple-500"
                      }`}
                    />
                  )}
                  <span>{family}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid + Sticky Inspector (Matching Reel frame_06 to frame_08) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Periodic Table Grid (8 Columns Desktop, 4 Columns Mobile) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
              {SKILL_GROUPS.map((item, idx) => {
                const familyStyle = FAMILY_DEFAULT_STYLES[item.family];
                const matchesFilter = selectedFamily === "All" || item.family === selectedFamily;
                const isHovered = hoveredSkill?.number === item.number;
                const isFilterActive = selectedFamily !== "All";

                // Styling logic matching the Instagram reel:
                // 1. If hovered: solid black, white text, scaled up, elevated
                // 2. If filtered and matches: solid black, white text
                // 3. If filtered and doesn't match: dimmed down (opacity 25%)
                // 4. If no filter ("All"): authentic tonal shading by family!
                let tileClass = "aspect-square rounded-2xl p-2.5 flex flex-col justify-between text-left transition-all duration-300 cursor-pointer relative group ";

                if (isHovered) {
                  tileClass += "bg-[#0d0d0d] text-white shadow-xl scale-[1.05] ring-2 ring-black z-20";
                } else if (isFilterActive) {
                  if (matchesFilter) {
                    tileClass += "bg-[#0d0d0d] text-white shadow-sm hover:scale-[1.04]";
                  } else {
                    tileClass += "bg-[#e8e4db] text-zinc-400 opacity-25 hover:opacity-100 hover:bg-[#0d0d0d] hover:text-white border border-transparent";
                  }
                } else {
                  // Default state ("All"): Tonal family palette from reel
                  tileClass += `${familyStyle.bg} ${familyStyle.text} shadow-xs hover:text-white hover:scale-[1.04] hover:shadow-md`;
                }

                return (
                  <button
                    key={`${item.number}-${item.symbol}`}
                    onMouseEnter={() => setHoveredSkill(item)}
                    onFocus={() => setHoveredSkill(item)}
                    onClick={() => setHoveredSkill(item)}
                    className={tileClass}
                    style={{
                      transitionDelay: isFilterActive && matchesFilter ? `${(idx % 8) * 20}ms` : "0ms",
                    }}
                  >
                    {/* Top Row: Atomic Number + Family Dot */}
                    <div className="flex items-center justify-between w-full">
                      <span className={`font-mono text-[9px] ${isHovered || (isFilterActive && matchesFilter) || item.family === 'Languages' ? 'opacity-70 text-white' : 'opacity-70 text-[var(--ink)]'}`}>
                        {String(item.number).padStart(2, "0")}
                      </span>
                      <span
                        className={`w-1 h-1 rounded-full ${familyStyle.dot}`}
                      />
                    </div>

                    {/* Chemical Symbol (2-3 chars, bold display) */}
                    <div className="font-mono text-lg sm:text-xl font-bold tracking-tight text-center my-auto transition-transform group-hover:scale-105">
                      {item.symbol}
                    </div>

                    {/* Element Full Name */}
                    <div className="text-[9px] font-medium truncate w-full text-center opacity-85">
                      {item.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Family Legend */}
            <div className="mt-6 pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-6 text-[11px] font-mono text-[var(--mute)]">
              <span className="text-[var(--ink)] font-semibold">FAMILIES:</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Languages
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Systems & Hardware
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> PLM & Configuration
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> DevOps & Tools
              </span>
            </div>
          </div>

          {/* Sticky Inspector Panel (320px Wide Desktop, Matching Reel frame_07 and frame_08) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 rounded-3xl bg-[var(--card)] border border-[var(--line)] shadow-sm space-y-6 min-h-[460px] flex flex-col justify-between">
              {hoveredSkill ? (
                <>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)]">
                      ELEMENT INSPECTOR
                    </span>
                    <span className="font-mono text-xs font-semibold text-[var(--ink)]">
                      #{String(hoveredSkill.number).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Logo Center Stage with Soft Glow (Matching Reel frame_07_14.0s.jpg) */}
                  <div className="relative py-4 flex flex-col items-center justify-center">
                    {/* Soft ambient brand glow */}
                    <div className="absolute inset-0 max-w-[160px] max-h-[160px] m-auto rounded-full bg-zinc-200/60 blur-2xl -z-10" />

                    {/* Official TechLogo */}
                    <div className="transition-transform duration-300 hover:scale-105">
                      <TechLogo
                        name={hoveredSkill.name}
                        symbol={hoveredSkill.symbol}
                        className="w-28 h-28 drop-shadow-sm"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--ink)] text-center">
                      {hoveredSkill.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-[var(--soft)] text-[10px] font-mono text-[var(--ink-2)]">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          FAMILY_DEFAULT_STYLES[hoveredSkill.family].dot
                        }`}
                      />
                      {hoveredSkill.family}
                    </div>
                  </div>

                  {/* Description from CV */}
                  <div className="space-y-3 border-t border-[var(--line)] pt-4 text-xs text-[var(--mute)] leading-relaxed">
                    <p>{hoveredSkill.description}</p>
                  </div>

                  {/* Projects using this skill */}
                  {hoveredSkill.projects.length > 0 && (
                    <div className="border-t border-[var(--line)] pt-3">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--mute)] block mb-2">
                        Applied in Projects
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {hoveredSkill.projects.map((proj) => (
                          <span
                            key={proj}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--paper)] text-[var(--ink-2)] border border-[var(--line)]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Empty Default State matching Reel frame_08_16.0s.jpg: "Hover any element to see its logo" */
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--paper)] border border-[var(--line)] flex items-center justify-center text-[var(--mute)]">
                    <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--ink)]">
                      ↖ Hover any element to see its logo
                    </p>
                    <p className="text-xs text-[var(--mute)] mt-1 max-w-[200px] mx-auto">
                      Explore 32 technologies, standards & tools across embedded railway engineering.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
