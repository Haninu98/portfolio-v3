"use client";

import { useState } from "react";
import { PROJECTS, ProjectItem } from "@/lib/data";
import IllustrativeUI from "./IllustrativeUI";

export default function WorkAccordion() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
    <div>
      {/* Desktop Horizontal Accordion (hidden on < lg) */}
      <div className="hidden lg:flex w-full min-h-[580px] gap-2.5">
        {PROJECTS.map((proj) => {
          const isOpen = proj.id === activeId;

          return (
            <div
              key={proj.id}
              onClick={() => setActiveId(proj.id)}
              className={`rounded-2xl border border-[var(--line)] bg-[var(--card)] transition-all duration-500 ease-[var(--ease)] overflow-hidden cursor-pointer relative ${
                isOpen
                  ? "flex-[8] shadow-md border-[var(--ink)] cursor-default p-8"
                  : "flex-[1] hover:border-[var(--ink)] hover:bg-[var(--soft)] p-4 flex flex-col justify-between items-center"
              }`}
            >
              {isOpen ? (
                /* OPEN PANEL CONTENT */
                <div className="w-full h-full flex flex-col justify-between animate-in fade-in duration-300">
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-[var(--mute)]">
                          {proj.index} //
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink-2)]">
                          {proj.kicker}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[var(--paper)] border border-[var(--line)] font-mono text-xs text-[var(--ink)]">
                        {proj.period}
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-8 items-start">
                      {/* Left: Text & Features (7 cols) */}
                      <div className="col-span-7 space-y-4">
                        <h3 className="text-2xl font-normal text-[var(--ink)] tracking-tight">
                          {proj.title}
                        </h3>

                        <div className="flex items-center gap-3 text-xs font-mono text-[var(--mute)]">
                          <span className="text-[var(--ink)] font-semibold">{proj.role}</span>
                          <span>•</span>
                          <span>{proj.location}</span>
                        </div>

                        <p className="text-sm text-[var(--ink-2)] leading-relaxed font-normal">
                          {proj.description}
                        </p>

                        <div className="space-y-2 pt-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)] block">
                            Key Deliverables & Verification
                          </span>
                          <ul className="space-y-1.5 text-xs text-[var(--ink-2)]">
                            {proj.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[var(--ink)] font-bold mt-0.5">↳</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Technical Mini-UI Graphic (5 cols) */}
                      <div className="col-span-5 flex flex-col justify-between h-full space-y-4">
                        <IllustrativeUI type={proj.illustrativeType} />

                        {/* Impact pill */}
                        <div className="p-3 rounded-xl bg-[var(--paper)] border border-[var(--line)] flex items-center justify-between text-xs font-mono">
                          <span className="text-[var(--mute)]">VERIFIED IMPACT:</span>
                          <span className="text-[var(--ink)] font-bold">{proj.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Tech Stack Tags */}
                  <div className="pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-[var(--paper)] border border-[var(--line)] font-mono text-[11px] text-[var(--ink-2)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-[10px] text-[var(--mute)]">
                      CONFIDENTIAL / SYSTEM INTEGRATION
                    </span>
                  </div>
                </div>
              ) : (
                /* CLOSED VERTICAL PANEL SLICE */
                <div className="w-full h-full flex flex-col justify-between items-center py-2 select-none">
                  <span className="font-mono text-sm font-bold text-[var(--mute)]">
                    {proj.index}
                  </span>

                  <div className="rotate-90 whitespace-nowrap font-medium text-xs text-[var(--ink)] tracking-tight my-auto origin-center w-48 text-center truncate">
                    {proj.title}
                  </div>

                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Stacked Accordion (hidden on >= lg) */}
      <div className="lg:hidden flex flex-col gap-4">
        {PROJECTS.map((proj) => {
          const isOpen = proj.id === activeId;

          return (
            <div
              key={proj.id}
              className={`rounded-2xl border bg-[var(--card)] overflow-hidden transition-all duration-300 ${
                isOpen ? "border-[var(--ink)] shadow-md" : "border-[var(--line)]"
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                onClick={() => setActiveId(isOpen ? "" : proj.id)}
                className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[var(--mute)]">
                    {proj.index}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      {proj.title}
                    </h3>
                    <span className="font-mono text-[10px] text-[var(--mute)]">
                      {proj.kicker}
                    </span>
                  </div>
                </div>

                <span className="text-sm font-mono text-[var(--mute)] ml-2">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Expand Body */}
              {isOpen && (
                <div className="px-5 pb-6 pt-2 border-t border-[var(--line)] space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--mute)]">
                    <span className="text-[var(--ink)] font-semibold">{proj.role}</span>
                    <span>{proj.period}</span>
                  </div>

                  <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                    {proj.description}
                  </p>

                  <IllustrativeUI type={proj.illustrativeType} />

                  <div className="p-3 rounded-lg bg-[var(--paper)] border border-[var(--line)] text-xs font-mono flex items-center justify-between">
                    <span className="text-[var(--mute)]">IMPACT:</span>
                    <span className="font-bold text-[var(--ink)]">{proj.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-sm bg-[var(--paper)] border border-[var(--line)] text-[10px] font-mono text-[var(--ink-2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
