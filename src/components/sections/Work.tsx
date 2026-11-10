"use client";

import WorkAccordion from "./WorkAccordion";
import { useLanguage } from "@/lib/LanguageContext";
import { TRANSLATIONS } from "@/lib/translations";

export default function Work() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <section id="work" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[var(--mute)]">03 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            {lang === "fr" ? "Projets Réalisés" : "Selected Work"}
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* Heading Matching Reel: Things I've built. */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
              {t.work.heading}{" "}
              <span className="font-serif italic font-normal text-[var(--mute)]">
                {t.work.headingAccent}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] mt-3 max-w-2xl font-normal">
              {t.work.subtitle}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[var(--mute)]">
            <span className="w-2 h-2 rounded-full bg-[var(--ink)]" />
            <span>{t.work.countLabel}</span>
          </div>
        </div>

        {/* Accordion Component */}
        <WorkAccordion />
      </div>
    </section>
  );
}

