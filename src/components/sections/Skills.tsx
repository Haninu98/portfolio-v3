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

export default function Skills() {
  const [selectedFamily, setSelectedFamily] = useState<SkillItem["family"] | "All">("All");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(SKILL_GROUPS[0]);

  const handleTileEnter = (skill: SkillItem) => {
    setHoveredSkill(skill);
  };

  return (
    <section id="skills" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[var(--mute)]">02 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Technical Stack
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* Title Matching Reel: "The periodic table of my stack." */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            The periodic table <span className="font-serif italic font-normal text-[var(--mute)]">of my stack.</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--mute)] mt-3 max-w-2xl font-normal">
            32 elements in four families. Hover a tile to see its logo, or pick a family to light it up.
          </p>

          {/* Family Filter Chips in a Row */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {FAMILIES.map((family) => {
              const isSelected = selectedFamily === family;
              return (
                <button
                  key={family}
                  onClick={() => setSelectedFamily(isSelected && family !== "All" ? "All" : family)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? "bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)] shadow-xs font-medium"
                      : "bg-[var(--card)] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--ink)] hover:bg-[var(--soft)]"
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

        {/* Grid + Sticky Inspector (Matching Exact Reel Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Periodic Table Grid (8 Columns on Large Screens) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
              {SKILL_GROUPS.map((item, idx) => {
                const matchesFamily = selectedFamily === "All" || item.family === selectedFamily;
                const isHovered = hoveredSkill?.number === item.number;

                return (
                  <button
                    key={`${item.number}-${item.symbol}`}
                    onMouseEnter={() => handleTileEnter(item)}
                    onClick={() => handleTileEnter(item)}
                    className={`aspect-square rounded-2xl p-2.5 flex flex-col justify-between text-left transition-all duration-300 cursor-pointer relative group ${
                      matchesFamily
                        ? isHovered
                          ? "bg-[#0d0d0d] text-white shadow-xl scale-[1.05] ring-2 ring-black z-10"
                          : "bg-[#0d0d0d] text-white shadow-sm hover:scale-[1.03] hover:shadow-md"
                        : "bg-zinc-200/50 text-zinc-400 opacity-30 hover:opacity-100 hover:bg-[#0d0d0d] hover:text-white border border-transparent"
                    }`}
                    style={{
                      transitionDelay: matchesFamily ? `${(idx % 8) * 15}ms` : "0ms",
                    }}
                  >
                    {/* Top Row: Atomic Number */}
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[9px] opacity-75">
                        {String(item.number).padStart(2, "0")}
                      </span>
                      {/* Family Dot */}
                      <span
                        className={`w-1 h-1 rounded-full ${
                          item.family === "Languages"
                            ? "bg-blue-400"
                            : item.family === "Systems & Hardware"
                            ? "bg-emerald-400"
                            : item.family === "PLM & Configuration"
                            ? "bg-amber-400"
                            : "bg-purple-400"
                        }`}
                      />
                    </div>

                    {/* Chemical Symbol */}
                    <div className="font-mono text-lg sm:text-xl font-bold tracking-tight text-center my-auto">
                      {item.symbol}
                    </div>

                    {/* Element Full Name */}
                    <div className="text-[9px] font-medium truncate w-full opacity-85 text-center">
                      {item.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Family Indicators */}
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

          {/* Sticky Inspector Panel (320px Wide, with Official TechLogo at 140px & Pop Animation) */}
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
                    <div className="transition-transform duration-300 hover:scale-105 animate-in zoom-in-95 duration-200">
                      <TechLogo
                        name={hoveredSkill.name}
                        symbol={hoveredSkill.symbol}
                        className="w-28 h-28 drop-shadow-sm"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--ink)] mt-4 tracking-tight">
                      {hoveredSkill.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-[10px] font-mono text-[var(--ink-2)]">
                        {hoveredSkill.family}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--ink)] text-[var(--paper)] text-[10px] font-mono font-medium">
                        {hoveredSkill.level}
                      </span>
                    </div>
                  </div>

                  {/* Description of Application */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--mute)] block">
                      Production Context
                    </span>
                    <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                      {hoveredSkill.description}
                    </p>
                  </div>

                  {/* Associated Deployments */}
                  {hoveredSkill.projects && hoveredSkill.projects.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-[var(--line)]">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--mute)] block">
                        Verified Deployments
                      </span>
                      <div className="flex flex-col gap-1">
                        {hoveredSkill.projects.map((proj) => (
                          <div
                            key={proj}
                            className="px-2.5 py-1.5 rounded-lg bg-[var(--paper)] border border-[var(--line)] text-xs text-[var(--ink)] font-medium flex items-center justify-between"
                          >
                            <span className="truncate">{proj}</span>
                            <span className="font-mono text-[9px] text-[var(--mute)]">✓</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Empty state from Reel */
                <div className="my-auto text-center space-y-2 py-12">
                  <span className="font-mono text-3xl block opacity-40">↖</span>
                  <p className="font-mono text-xs text-[var(--mute)]">
                    Hover any element to see its logo
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
