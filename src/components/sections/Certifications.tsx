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
            Accreditations & Training
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[var(--ink)]">
              Ink-Flood <span className="font-serif-italic">Index</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] mt-2 max-w-xl">
              Professional accreditations in high-voltage track safety, railway engineering,
              quality gate compliance, and international communications.
            </p>
          </div>

          <span className="font-mono text-xs text-[var(--mute)]">
            7 Official Certifications Verified
          </span>
        </div>

        {/* Ink-Flood Rows List */}
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.index}
              onClick={() => setSelectedCert(cert)}
              className="group relative overflow-hidden py-6 sm:py-7 px-4 -mx-4 transition-all duration-300 cursor-pointer"
            >
              {/* Ink-Flood Background Layer */}
              <div
                className="absolute inset-0 bg-[var(--ink)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[var(--ease)] -z-0"
                aria-hidden="true"
              />

              {/* Row Content */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Left: Index + Title + Issuer */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-[var(--mute)] group-hover:text-zinc-400 transition-colors w-6">
                    {cert.index}
                  </span>

                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-[var(--ink)] group-hover:text-[var(--paper)] transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-[var(--mute)] group-hover:text-zinc-400 transition-colors">
                      <span className="font-mono">{cert.issuer}</span>
                      <span>•</span>
                      <span className="font-mono">{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Badge Pill + Arrow */}
                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--card)] group-hover:bg-zinc-800 border border-[var(--line)] group-hover:border-zinc-700 text-[var(--ink-2)] group-hover:text-[var(--paper)] transition-all">
                    {cert.badge}
                  </span>

                  <span className="w-8 h-8 rounded-full border border-[var(--line)] group-hover:border-zinc-700 flex items-center justify-center font-mono text-xs text-[var(--ink)] group-hover:text-[var(--paper)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Details Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-[var(--ink)]/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg bg-[var(--card)] rounded-2xl border border-[var(--line)] p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[var(--mute)]">
                  CREDENTIAL #{selectedCert.index}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-xs text-[var(--ink)] hover:bg-[var(--soft)] cursor-pointer"
                aria-label="Close credential details"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--paper)] border border-[var(--line)] font-mono text-xs text-[var(--ink-2)]">
                {selectedCert.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[var(--ink)]">
                {selectedCert.title}
              </h3>
              <div className="text-xs font-mono text-[var(--mute)]">
                Issuer: <strong className="text-[var(--ink)]">{selectedCert.issuer}</strong> • Year: {selectedCert.date}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--paper)] border border-[var(--line)]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)] block mb-1">
                Curriculum & Professional Application
              </span>
              <p className="text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">
                {selectedCert.details}
              </p>
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
