"use client";

import { useState } from "react";
import { CERTIFICATIONS, CertificationItem } from "@/lib/data";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[var(--mute)]">04 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Certifications
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* 2-Column Split Matching Reel frame_12_24.0s.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
              Always <span className="font-serif italic font-normal text-[var(--mute)]">learning.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] max-w-md font-normal leading-relaxed">
              7 certifications across high-voltage rail safety, systems engineering,
              quality compliance gates, and data science pipelines.
            </p>
          </div>

          {/* Right Column: Ink-Flood Rows List */}
          <div className="lg:col-span-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.index}
                onClick={() => setSelectedCert(cert)}
                className="group relative overflow-hidden py-5 sm:py-6 px-4 transition-all duration-300 cursor-pointer"
              >
                {/* Ink-Flood Background Layer (scaleX: 0 -> 1 on hover) */}
                <div
                  className="absolute inset-0 bg-[#0d0d0d] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[var(--ease)] -z-0"
                  aria-hidden="true"
                />

                {/* Row Content */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  {/* Left: Index + Title + Issuer */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[var(--mute)] group-hover:text-zinc-400 transition-colors w-6">
                      {cert.index}
                    </span>

                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-[var(--ink)] group-hover:text-[#ffffff] transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-[var(--mute)] group-hover:text-zinc-400 transition-colors">
                        <span className="font-mono">{cert.issuer}</span>
                        <span>•</span>
                        <span className="font-mono">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Arrow ↗ */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[var(--card)] group-hover:bg-zinc-800 border border-[var(--line)] group-hover:border-zinc-700 text-[var(--ink-2)] group-hover:text-white transition-all">
                      {cert.badge}
                    </span>
                    <span className="font-mono text-sm text-[var(--ink)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-[#0d0d0d]/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg bg-[#ffffff] rounded-3xl border border-[var(--line)] p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
              <span className="font-mono text-xs text-[var(--mute)]">
                CREDENTIAL #{selectedCert.index}
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-xs text-[var(--ink)] hover:bg-[var(--soft)] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--paper)] border border-[var(--line)] font-mono text-xs text-[var(--ink-2)]">
                {selectedCert.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--ink)]">
                {selectedCert.title}
              </h3>
              <div className="text-xs font-mono text-[var(--mute)]">
                {selectedCert.issuer} • {selectedCert.date}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">
              {selectedCert.details}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-full bg-[var(--ink)] text-[var(--paper)] text-xs font-medium hover:bg-[var(--ink-2)] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
