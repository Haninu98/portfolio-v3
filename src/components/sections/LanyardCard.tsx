"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";

export default function LanyardCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateOffset, setRotateOffset] = useState({ x: 0, y: 0, r: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle tilt & pendulum rotation calculation
    const rotX = -(y / rect.height) * 12;
    const rotY = (x / rect.width) * 14;
    const rotZ = (x / rect.width) * 4;

    setRotateOffset({ x: rotX, y: rotY, r: rotZ });
  };

  const handleMouseLeave = () => {
    setRotateOffset({ x: 0, y: 0, r: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center select-none pt-2"
    >
      {/* Lanyard Fabric Strap with Repeating Marquee */}
      <div className="relative w-12 h-24 overflow-hidden rounded-t-sm shadow-xs border-x border-[var(--line)] bg-[var(--ink)] flex flex-col items-center">
        <div className="text-[9px] font-mono tracking-widest text-[var(--paper)] opacity-85 rotate-90 whitespace-nowrap uppercase py-4 select-none">
          HANI IZEM • EMBEDDED SYSTEMS • ALSTOM •
        </div>
      </div>

      {/* Metal Clip & Ring Assembly */}
      <div className="relative flex flex-col items-center -mt-1 z-10">
        {/* Metal Carabiner Clip */}
        <div className="w-8 h-4 rounded-xs border-2 border-zinc-400 bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-300 shadow-xs" />
        {/* Clip connector */}
        <div className="w-2.5 h-3 bg-zinc-600 rounded-xs" />
        {/* Metal ring into card hole */}
        <div className="w-6 h-6 rounded-full border-2 border-zinc-400 -mt-1 flex items-center justify-center bg-transparent" />
      </div>

      {/* Hanging Badge Card with 3D Flip */}
      <div
        className="w-full max-w-[290px] sm:max-w-[310px] perspective-[1000px] cursor-pointer mt-1"
        onClick={() => setIsFlipped(!isFlipped)}
        title="Click or tap to flip credential card"
      >
        <div
          className="relative w-full aspect-[1/1.48] transition-transform duration-700 [transform-style:preserve-3d] rounded-2xl shadow-xl border border-[var(--line)]"
          style={{
            transform: `rotateZ(${rotateOffset.r}deg) rotateX(${rotateOffset.x}deg) rotateY(${
              (isFlipped ? 180 : 0) + rotateOffset.y
            }deg)`,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Card Slot Opening at Top */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-2 rounded-full bg-zinc-300/80 border border-zinc-400 z-30" />

          {/* FRONT OF BADGE */}
          <div
            className="absolute inset-0 w-full h-full bg-[var(--card)] rounded-2xl p-5 flex flex-col justify-between [backface-visibility:hidden] overflow-hidden border border-[var(--line)]"
          >
            {/* Subtle holographic foil strip */}
            <div className="absolute top-0 right-6 w-8 h-full bg-linear-to-b from-transparent via-zinc-100 to-transparent opacity-40 pointer-events-none" />

            {/* Top Badge Header */}
            <div className="pt-2 flex items-center justify-between border-b border-[var(--line)] pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[var(--ink)] flex items-center justify-center text-[7px] text-[var(--paper)] font-mono font-bold">
                  HI
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[var(--ink)]">
                  ENGINEERING CORPS
                </span>
              </div>
              <span className="font-mono text-[9px] text-[var(--mute)]">
                {PROFILE.idCard.idNo}
              </span>
            </div>

            {/* Middle: Portrait Bust Photo + Core Role */}
            <div className="flex flex-col items-center text-center my-auto">
              <div className="relative w-24 h-28 rounded-xl overflow-hidden border border-[var(--line)] shadow-xs bg-[var(--paper)] mb-3">
                <Image
                  src="/portrait-bust.webp"
                  alt="Hani IZEM Identification Photo"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>

              <h3 className="text-base font-semibold tracking-tight text-[var(--ink)]">
                {PROFILE.name}
              </h3>
              <p className="text-[11px] text-[var(--mute)] font-mono mt-0.5 max-w-[200px] leading-tight">
                {PROFILE.role}
              </p>

              {/* Department pill */}
              <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-[9px] font-mono text-[var(--ink-2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{PROFILE.idCard.dept}</span>
              </div>
            </div>

            {/* Bottom Barcode / Security Strip */}
            <div className="border-t border-[var(--line)] pt-3 flex items-center justify-between">
              <div className="space-y-0.5 text-left">
                <div className="text-[8px] font-mono uppercase text-[var(--mute)]">
                  VALIDITY
                </div>
                <div className="text-[10px] font-mono font-medium text-[var(--ink)]">
                  {PROFILE.idCard.validTill}
                </div>
              </div>

              {/* Barcode graphic */}
              <div className="flex items-center gap-0.5 h-5 px-1 bg-white border border-[var(--line)] rounded-xs">
                <span className="w-0.5 h-4 bg-zinc-900" />
                <span className="w-1 h-4 bg-zinc-900" />
                <span className="w-0.5 h-4 bg-zinc-900" />
                <span className="w-1.5 h-4 bg-zinc-900" />
                <span className="w-0.5 h-4 bg-zinc-900" />
                <span className="w-1 h-4 bg-zinc-900" />
                <span className="w-0.5 h-4 bg-zinc-900" />
                <span className="w-0.5 h-4 bg-zinc-900" />
                <span className="w-1.5 h-4 bg-zinc-900" />
              </div>
            </div>

            {/* Flip hint chip */}
            <div className="text-center text-[9px] font-mono text-[var(--mute)] pt-1 flex items-center justify-center gap-1">
              <span>↻ Click to view credentials</span>
            </div>
          </div>

          {/* BACK OF BADGE */}
          <div
            className="absolute inset-0 w-full h-full bg-[var(--card)] rounded-2xl p-5 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-[var(--line)]"
          >
            {/* Top Header */}
            <div className="pt-2 flex items-center justify-between border-b border-[var(--line)] pb-2.5">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[var(--ink)]">
                ACADEMIC & CLEARANCES
              </span>
              <span className="text-[9px] font-mono text-[var(--mute)]">
                PARIS • ROUEN
              </span>
            </div>

            {/* Body */}
            <div className="space-y-3 my-auto text-left">
              <div>
                <span className="text-[9px] font-mono uppercase text-[var(--mute)] block">
                  Degree & Alma Mater
                </span>
                <span className="text-xs font-semibold text-[var(--ink)] block">
                  {PROFILE.idCard.degree}
                </span>
                <span className="text-[10px] text-[var(--mute)] font-mono">
                  Major: Embedded Systems (Automotive/Aeronautics)
                </span>
              </div>

              <div>
                <span className="text-[9px] font-mono uppercase text-[var(--mute)] block mb-1">
                  Core Competencies
                </span>
                <div className="flex flex-wrap gap-1">
                  {PROFILE.idCard.keySkills.map((s) => (
                    <span
                      key={s}
                      className="px-1.5 py-0.5 rounded-xs bg-[var(--paper)] border border-[var(--line)] text-[9px] font-mono text-[var(--ink)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[9px] font-mono uppercase text-[var(--mute)] block">
                  Language Proficiency
                </span>
                <span className="text-[10px] font-mono text-[var(--ink-2)]">
                  French: Bilingual • English: TOEIC 850 • Arabic: Native
                </span>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[var(--line)] pt-2.5 flex items-center justify-between text-[9px] font-mono text-[var(--mute)]">
              <span>SECURITY LEVEL 01</span>
              <span>↻ Click to return</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
