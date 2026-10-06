"use client";

import WorkAccordion from "./WorkAccordion";

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[var(--mute)]">03 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Selected Work
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* Heading Matching Reel: Things I've built. */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
              Things I&apos;ve <span className="font-serif italic font-normal text-[var(--mute)]">built.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] mt-3 max-w-2xl font-normal">
              Mission-critical railway signaling, automated continuous integration pipelines,
              and safety-compliant embedded hardware architectures.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[var(--mute)]">
            <span className="w-2 h-2 rounded-full bg-[var(--ink)]" />
            <span>6 Systems Documented</span>
          </div>
        </div>

        {/* Accordion Component */}
        <WorkAccordion />
      </div>
    </section>
  );
}
