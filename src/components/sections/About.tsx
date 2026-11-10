"use client";

import LanyardCard from "./LanyardCard";
import { PROFILE } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import { TRANSLATIONS } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="about"
      className="py-24 border-t border-[var(--line)] relative bg-[var(--paper)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[var(--mute)]">01 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            {lang === "fr" ? "À propos & Profil" : "About & Identity"}
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* 3-Column Grid: minmax(0, 1fr) 320px minmax(0, 1fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px_1fr] gap-8 xl:gap-12 items-stretch">
          {/* ================= COLUMN 1: LEFT (Bio + Resume Summary + Buttons) ================= */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[var(--mute)] uppercase tracking-wider block">
                {lang === "fr" ? "Profil & Mission" : "Profile & Mission"}
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink)] leading-tight">
                {lang === "fr" ? "Bonjour, je suis " : "Hi, I'm "}
                {PROFILE.name}.
              </h2>

              <p className="text-sm sm:text-base text-[var(--ink-2)] leading-relaxed font-normal">
                {t.about.summary}
              </p>

              <p className="text-sm text-[var(--mute)] leading-relaxed">
                {t.about.subSummary}
              </p>
            </div>

            {/* Action buttons strictly from resume: Résumé, LinkedIn */}
            <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[var(--ink)] text-[var(--paper)] text-xs font-mono font-medium hover:bg-[var(--ink-2)] transition-all flex items-center gap-2 shadow-xs"
              >
                <span>{lang === "fr" ? "Mon CV" : "Résumé"}</span>
                <span>↓</span>
              </a>

              {PROFILE.linkedin && (
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs font-mono text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>

          {/* ================= COLUMN 2: CENTRE (Realistic Hanging Lanyard Card) ================= */}
          <div className="flex flex-col items-center justify-start pt-2">
            <LanyardCard />
          </div>

          {/* ================= COLUMN 3: RIGHT (Quick facts + Quote) ================= */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[var(--mute)] uppercase tracking-wider block">
                {t.about.quickFactsTitle}
              </span>

              {/* Quick facts rows */}
              <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                <div className="py-3 flex flex-col">
                  <span className="font-mono text-[10px] text-[var(--mute)] uppercase">
                    {lang === "fr" ? "Localisation" : "Location"}
                  </span>
                  <span className="text-sm font-medium text-[var(--ink)] mt-0.5">
                    {PROFILE.location}
                  </span>
                </div>

                <div className="py-3 flex flex-col">
                  <span className="font-mono text-[10px] text-[var(--mute)] uppercase">
                    {lang === "fr" ? "Formation & École" : "Education & Alma Mater"}
                  </span>
                  <span className="text-sm font-medium text-[var(--ink)] mt-0.5">
                    {PROFILE.idCard.degree}
                  </span>
                  <span className="text-xs text-[var(--mute)] mt-0.5">
                    Sorbonne Université (Polytech Paris)
                  </span>
                </div>

                <div className="py-3 flex flex-col">
                  <span className="font-mono text-[10px] text-[var(--mute)] uppercase">
                    {lang === "fr" ? "Rôle industriel actuel" : "Current Industrial Role"}
                  </span>
                  <span className="text-sm font-medium text-[var(--ink)] mt-0.5">
                    Alstom — Project Configuration & Change Manager
                  </span>
                  <span className="text-xs text-[var(--mute)] mt-0.5">
                    {lang === "fr"
                      ? "Modernisation Métro de Marseille (Neomma GoA4 CBTC)"
                      : "Marseille Metro GoA4 CBTC Modernization"}
                  </span>
                </div>

                <div className="py-3 flex flex-col">
                  <span className="font-mono text-[10px] text-[var(--mute)] uppercase">
                    {lang === "fr" ? "E-mail direct" : "Direct Email"}
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-mono text-[var(--ink)] hover:underline mt-0.5"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Verbatim quote from resume */}
            <div className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs">
              <p className="font-serif italic text-sm text-[var(--ink-2)] leading-relaxed">
                {t.about.quote}
              </p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)] block mt-2">
                — Hani IZEM, {lang === "fr" ? "Ingénieur Systèmes Embarqués" : "Embedded Systems Engineer"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
