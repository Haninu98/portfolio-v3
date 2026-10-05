"use client";

import LanyardCard from "./LanyardCard";
import { PROFILE } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--line)] relative bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[var(--mute)]">01 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            About & Credentials
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Column 1: Storytelling Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[var(--ink)] leading-[1.2]">
              Engineering high-consequence systems where <span className="font-serif-italic">precision</span> is standard.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed font-normal">
              <p>
                I am an <strong>Electronics and Embedded Systems Engineer</strong> graduated from{" "}
                <span className="text-[var(--ink)] font-medium">ESIGELEC Rouen</span>.
                My work centers on the intersection of physical hardware architectures,
                rigorous functional safety, and software test automation.
              </p>

              <p>
                At <strong>Alstom</strong>, I coordinated configuration management and automated
                verification across tier-1 railway signaling programs (ERTMS Level 2, CBTC,
                Transilien lines, SNCF Réseau, RATP). At <strong>Assystem</strong>, I architected
                collaborative PLM environments and digital transformation roadmaps for complex
                nuclear and industrial engineering environments.
              </p>

              <p>
                Whether designing RTOS-based microcontrollers in C/C++, orchestrating Python
                verification frameworks, or ensuring strict CM traceability, my goal is the same:
                delivering robust, audit-proof systems that operate flawlessly in production.
              </p>
            </div>

            {/* Quote callout */}
            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--line)] shadow-xs">
              <p className="font-serif-italic text-sm text-[var(--ink)]">
                &ldquo;{PROFILE.quote}&rdquo;
              </p>
              <span className="block mt-2 font-mono text-[10px] text-[var(--mute)] uppercase tracking-wider">
                — Core Operating Philosophy
              </span>
            </div>
          </div>

          {/* Column 2: Hanging Lanyard ID Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <LanyardCard />
          </div>

          {/* Column 3: Telemetry, Metrics & Tenets (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)] mb-2">
              System Metrics
            </div>

            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--line)] space-y-1">
              <div className="text-2xl font-mono font-semibold text-[var(--ink)]">
                100+
              </div>
              <div className="text-xs font-medium text-[var(--ink)]">
                Signaling Baselines
              </div>
              <div className="text-[11px] text-[var(--mute)] leading-tight">
                Managed across Alstom ERTMS/CBTC signaling programs without release rollbacks.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--line)] space-y-1">
              <div className="text-2xl font-mono font-semibold text-[var(--ink)]">
                300+
              </div>
              <div className="text-xs font-medium text-[var(--ink)]">
                Automated Test Scripts
              </div>
              <div className="text-[11px] text-[var(--mute)] leading-tight">
                Authored in Python & Batch, slashing baseline generation time by 60%.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--line)] space-y-1">
              <div className="text-2xl font-mono font-semibold text-[var(--ink)]">
                SIL4
              </div>
              <div className="text-xs font-medium text-[var(--ink)]">
                Safety Integrity Level
              </div>
              <div className="text-[11px] text-[var(--mute)] leading-tight">
                Familiarity with CENELEC EN 50126/50128/50129 and ISO 26262 standards.
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs font-mono text-[var(--ink)] flex items-center justify-between hover:bg-[var(--soft)] hover:border-[var(--ink)] transition-colors"
              >
                <span>Full Résumé Documentation</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
