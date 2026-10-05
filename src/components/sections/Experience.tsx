"use client";

import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[var(--mute)]">05 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Career & Academic Trajectory
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[var(--ink)]">
              Unified Vertical <span className="font-serif-italic">Timeline</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] mt-2 max-w-xl">
              An unbroken progression of industrial apprenticeships, safety engineering roles,
              and academic degrees across France&apos;s leading institutions.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[var(--mute)]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--ink)]" /> Industry & Rail
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-400" /> Academic & Degrees
            </span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Spine Line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-16 -translate-x-1/2 w-[2px] bg-[var(--line)]"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--card)] border-2 border-[var(--ink)] group-hover:scale-125 group-hover:bg-[var(--ink)] transition-all z-10 top-1 shadow-xs" />

                  {/* Content Card (Half width on desktop) */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs group-hover:border-[var(--ink)] group-hover:shadow-sm transition-all duration-300">
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 border-b border-[var(--line)] pb-3 mb-3">
                        <span className="font-mono text-xs font-semibold text-[var(--ink)]">
                          {item.year}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                            item.type === "experience"
                              ? "bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)]"
                              : "bg-[var(--ink)] text-[var(--paper)]"
                          }`}
                        >
                          {item.badge || item.type}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--ink)]">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--mute)] mt-1 mb-3">
                        <span className="text-[var(--ink-2)] font-medium">
                          {item.organization}
                        </span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>

                      {/* Detail Text */}
                      <p className="text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal Final Node: "Next — Your Team?" */}
          <div className="relative pt-16 flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full border-2 border-dashed border-[var(--ink)] bg-[var(--card)] flex items-center justify-center font-mono text-xs text-[var(--ink)] mb-4">
              ↓
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] max-w-md w-full shadow-sm space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)] block">
                Next Chapter
              </span>
              <h3 className="text-xl font-normal text-[var(--ink)]">
                Your Project or Engineering Team?
              </h3>
              <p className="text-xs text-[var(--mute)] leading-relaxed">
                Available for mission-critical railway signaling, embedded systems engineering,
                or automated PLM configuration roles.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-5 py-2.5 rounded-full bg-[var(--ink)] text-[var(--paper)] text-xs font-medium hover:bg-[var(--ink-2)] transition-colors cursor-pointer"
                >
                  Initiate Discussion →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
