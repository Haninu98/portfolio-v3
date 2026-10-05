"use client";

import { useState } from "react";
import { SKILL_GROUPS, SkillItem } from "@/lib/data";

const FAMILIES: Array<SkillItem["family"] | "All"> = [
  "All",
  "Languages",
  "Systems & Hardware",
  "PLM & Configuration",
  "DevOps & Tools",
];

export default function Skills() {
  const [selectedFamily, setSelectedFamily] = useState<SkillItem["family"] | "All">("All");
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILL_GROUPS[0]);

  const filteredSkills =
    selectedFamily === "All"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((s) => s.family === selectedFamily);

  return (
    <section id="skills" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[var(--mute)]">02 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Technical Stack
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[var(--ink)]">
              Periodic Table of <span className="font-serif-italic">Competencies</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] mt-2 max-w-xl">
              Organized by physical hardware, software languages, industrial configuration,
              and verification pipelines. Click any element to inspect production use-cases.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-[var(--card)] border border-[var(--line)] self-start md:self-auto">
            {FAMILIES.map((family) => (
              <button
                key={family}
                onClick={() => setSelectedFamily(family)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedFamily === family
                    ? "bg-[var(--ink)] text-[var(--paper)] font-medium"
                    : "text-[var(--mute)] hover:text-[var(--ink)] hover:bg-[var(--soft)]"
                }`}
              >
                {family}
              </button>
            ))}
          </div>
        </div>

        {/* Grid + Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Periodic Table Grid (8 cols on lg) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2">
              {filteredSkills.map((item) => {
                const isSelected = activeSkill.number === item.number;

                return (
                  <button
                    key={`${item.number}-${item.symbol}`}
                    onClick={() => setActiveSkill(item)}
                    className={`aspect-square p-2.5 rounded-xl border flex flex-col justify-between text-left transition-all duration-200 cursor-pointer relative group ${
                      isSelected
                        ? "bg-[var(--card)] border-[var(--ink)] shadow-md ring-1 ring-[var(--ink)]"
                        : "bg-[var(--card)] border-[var(--line)] hover:border-[var(--ink)] hover:shadow-xs"
                    }`}
                  >
                    {/* Top Row: Atomic Number + Family Indicator */}
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[10px] text-[var(--mute)]">
                        {String(item.number).padStart(2, "0")}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.family === "Languages"
                            ? "bg-zinc-800"
                            : item.family === "Systems & Hardware"
                            ? "bg-zinc-600"
                            : item.family === "PLM & Configuration"
                            ? "bg-zinc-500"
                            : "bg-zinc-400"
                        }`}
                      />
                    </div>

                    {/* Center: 2-Letter Symbol */}
                    <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)] group-hover:scale-105 transition-transform origin-left">
                      {item.symbol}
                    </div>

                    {/* Bottom: Name */}
                    <div className="text-[10px] font-medium text-[var(--ink-2)] truncate w-full">
                      {item.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Legend Bar */}
            <div className="mt-6 pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-6 text-[11px] font-mono text-[var(--mute)]">
              <span className="text-[var(--ink)] font-semibold">FAMILIES:</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-800" /> Languages
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-600" /> Systems & Hardware
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-500" /> PLM & Configuration
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-400" /> DevOps & Tools
              </span>
            </div>
          </div>

          {/* Sticky 320px Inspector Panel (4 cols on lg) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-sm space-y-6">
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--mute)]">
                    ELEMENT INSPECTOR
                  </span>
                </div>
                <span className="font-mono text-xs text-[var(--mute)]">
                  #{String(activeSkill.number).padStart(2, "0")}
                </span>
              </div>

              {/* Big Atomic Card Preview */}
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-xl bg-[var(--paper)] border border-[var(--line)] p-2.5 flex flex-col justify-between shrink-0 shadow-xs">
                  <span className="font-mono text-[10px] text-[var(--mute)]">
                    {String(activeSkill.number).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-3xl font-bold text-[var(--ink)]">
                    {activeSkill.symbol}
                  </span>
                  <span className="text-[9px] font-medium text-[var(--mute)] truncate">
                    {activeSkill.family.split(" ")[0]}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-semibold text-[var(--ink)] leading-tight">
                    {activeSkill.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-[10px] font-mono text-[var(--ink-2)]">
                      {activeSkill.family}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[var(--ink)] text-[var(--paper)] text-[10px] font-mono font-medium">
                      {activeSkill.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)] block">
                  Production Context & Application
                </span>
                <p className="text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">
                  {activeSkill.description}
                </p>
              </div>

              {/* Related Projects */}
              {activeSkill.projects && activeSkill.projects.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[var(--line)]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)] block">
                    Associated Deployments
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {activeSkill.projects.map((proj) => (
                      <div
                        key={proj}
                        className="px-3 py-2 rounded-lg bg-[var(--paper)] border border-[var(--line)] text-xs text-[var(--ink)] font-medium flex items-center justify-between"
                      >
                        <span className="truncate">{proj}</span>
                        <span className="font-mono text-[10px] text-[var(--mute)]">DEPLOYED</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer instruction */}
              <div className="text-[11px] font-mono text-[var(--mute)] text-center pt-2">
                Click any other element to switch context
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
