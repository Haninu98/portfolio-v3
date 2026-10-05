"use client";

import WorkAccordion from "./WorkAccordion";

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[var(--mute)]">03 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Selected Engineering Projects
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[var(--ink)]">
              Expanding Case <span className="font-serif-italic">Studies</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] mt-2 max-w-2xl">
              From railway signaling baselines at Alstom to automotive ECU cybersecurity
              pipelines at Renault and embedded hardware prototypes at Polytech Sorbonne.
              Hover or click panels to reveal technical breakdowns and interactive telemetry simulations.
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
