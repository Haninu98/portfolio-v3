"use client";

import { useState } from "react";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hoppingText = "LET'S CONNECT";

  return (
    <section id="contact" className="pt-24 pb-12 border-t border-[var(--line)] bg-[var(--paper)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[var(--mute)]">07 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Initiate Collaboration
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* Hopping Letters Headline */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-x-2 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-[var(--ink)] select-none">
            {hoppingText.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-200 hover:-translate-y-3 cursor-default"
                style={{
                  transitionDelay: `${(i % 5) * 20}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[var(--mute)] mt-4 max-w-xl font-normal">
            Whether for railway signaling programs, safety-critical embedded systems,
            or enterprise PLM transformation, let&apos;s engineer dependable solutions together.
          </p>
        </div>

        {/* Interactive Copyable Email Block & Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Main Email Capsule (8 cols) */}
          <div className="lg:col-span-8 p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--mute)] block">
              Direct Inquiries
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal font-mono text-[var(--ink)] break-all select-all">
                {PROFILE.email}
              </span>

              <button
                onClick={copyEmail}
                className="px-5 py-2.5 rounded-full bg-[var(--ink)] text-[var(--paper)] text-xs font-mono font-medium hover:bg-[var(--ink-2)] transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto shrink-0 shadow-xs"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-400">✓</span> Copied to clipboard!
                  </>
                ) : (
                  <>
                    <span>📋</span> Copy Address
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)]">
              <div>
                <span className="font-mono text-[10px] uppercase text-[var(--mute)] block">
                  Telephone
                </span>
                <a
                  href={PROFILE.phoneHref}
                  className="font-mono text-sm text-[var(--ink)] hover:underline"
                >
                  {PROFILE.phone}
                </a>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase text-[var(--mute)] block">
                  Location
                </span>
                <span className="font-mono text-sm text-[var(--ink)]">
                  {PROFILE.location}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase text-[var(--mute)] block">
                  Availability
                </span>
                <span className="font-mono text-sm text-emerald-600 font-medium">
                  Immediate / 2025
                </span>
              </div>
            </div>
          </div>

          {/* Socials & Spinning Badge (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--mute)] block">
                Network & Repositories
              </span>

              <div className="flex flex-col gap-2">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-xs font-mono text-[var(--ink)] flex items-center justify-between hover:border-[var(--ink)] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <span>↗</span>
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-xs font-mono text-[var(--ink)] flex items-center justify-between hover:border-[var(--ink)] transition-colors"
                >
                  <span>GitHub Repositories</span>
                  <span>↗</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-xs font-mono text-[var(--ink)] flex items-center justify-between hover:border-[var(--ink)] transition-colors"
                >
                  <span>Download Résumé (PDF)</span>
                  <span>↓</span>
                </a>

                <a
                  href={PROFILE.portfolioV1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[var(--paper)] border border-[var(--line)] text-xs font-mono text-[var(--mute)] hover:text-[var(--ink)] flex items-center justify-between hover:border-[var(--ink)] transition-colors"
                >
                  <span>Portfolio V1 Archive</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Spinning Circular "Say Hello" Stamp */}
            <div className="pt-2 flex items-center justify-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg
                  className="w-full h-full animate-spin-slow origin-center"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="textPathCircle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-mono uppercase tracking-widest fill-[var(--ink)]">
                    <textPath href="#textPathCircle" startOffset="0%">
                      • HANI IZEM • SAY HELLO • 2025 •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--paper)] flex items-center justify-center font-mono text-xs font-bold text-[var(--ink)]">
                  HI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Footer */}
        <div className="pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--mute)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--ink)]">HANI IZEM</span>
            <span>—</span>
            <span>ELECTRONICS & EMBEDDED SYSTEMS ENGINEER</span>
          </div>

          <div className="flex items-center gap-6">
            <span>PARIS, FRANCE</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[var(--ink)] cursor-pointer transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
