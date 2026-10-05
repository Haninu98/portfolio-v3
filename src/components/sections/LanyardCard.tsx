"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";

export default function LanyardCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [swayAngle, setSwayAngle] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const currentAngleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const velocityRef = useRef(0);

  // Physics-based spring-damped pendulum loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Spring physics: F = -k * x - c * v
      const springK = 35.0; // Spring stiffness
      const damping = 4.5; // Damping ratio
      const force = -springK * (currentAngleRef.current - targetAngleRef.current) - damping * velocityRef.current;
      velocityRef.current += force * dt;
      currentAngleRef.current += velocityRef.current * dt;

      setSwayAngle(currentAngleRef.current);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const deltaX = e.clientX - centerX;
    // Map deltaX (-150px to +150px) to angle (-12deg to +12deg)
    const angle = Math.max(-12, Math.min(12, (deltaX / 150) * 12));
    targetAngleRef.current = angle;
  };

  const handleMouseLeave = () => {
    targetAngleRef.current = 0;
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-start select-none w-[320px] mx-auto"
      style={{
        transformOrigin: "top center",
        transform: `rotate(${swayAngle}deg)`,
        transition: "transform 0.05s ease-out",
      }}
    >
      {/* 1. LANYARD STRAP (Spec: 30px x 56px with scrolling text) */}
      <div className="relative w-[30px] h-[56px] bg-[#141414] overflow-hidden rounded-t-sm shadow-sm flex flex-col items-center border-x border-black/20">
        {/* Subtle woven texture overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />

        {/* Marquee text scrolling vertically down the strap */}
        <div className="flex flex-col items-center text-[8px] font-mono tracking-widest text-[#f4f2ee]/90 font-medium rotate-90 whitespace-nowrap uppercase py-3 animate-marquee-vertical">
          <span>HANI IZEM • EMBEDDED SYSTEMS • ALSTOM • </span>
          <span>HANI IZEM • EMBEDDED SYSTEMS • ALSTOM • </span>
        </div>
      </div>

      {/* 2. METAL CLUSTER (Buckle + Swivel Clip + Ring) */}
      <div className="flex flex-col items-center -mt-[1px] z-20">
        {/* Metal buckle clamp (30x8mm) */}
        <div className="w-[30px] h-[9px] rounded-[1px] bg-gradient-to-b from-[#d4d4d8] via-[#a1a1aa] to-[#71717a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.3)] border border-[#71717a]" />
        {/* Swivel neck */}
        <div className="w-[8px] h-[6px] bg-gradient-to-r from-[#71717a] via-[#e4e4e7] to-[#71717a]" />
        {/* Metal key ring connecting to slot */}
        <div className="w-[20px] h-[20px] rounded-full border-[2.5px] border-[#a1a1aa] -mt-[2px] bg-transparent shadow-xs" />
      </div>

      {/* 3. REALISTIC ID BADGE CARD (Spec: 300px x 404px, 3D flip) */}
      <div
        tabIndex={0}
        role="button"
        aria-label="Developer ID Card. Press Enter or Space to flip"
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        className="w-[300px] h-[404px] -mt-[8px] cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[var(--ink)] rounded-[24px]"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative w-full h-full rounded-[24px] shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ===================== FRONT OF BADGE ===================== */}
          <div
            className="absolute inset-0 w-full h-full bg-[#ffffff] rounded-[24px] border border-[rgba(13,13,13,0.12)] p-5 flex flex-col justify-between overflow-hidden shadow-lg"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Top slot hole punch cutout for the metal ring */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[28px] h-[5px] rounded-full bg-[#f4f2ee] border border-[rgba(13,13,13,0.18)] shadow-inner z-30" />

            {/* Top black header band (Spec: "DEVELOPER ID" / "ENGINEER ID") */}
            <div className="pt-2">
              <div className="bg-[#0d0d0d] text-[#ffffff] rounded-lg py-1.5 px-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                    ENGINEER ID
                  </span>
                </div>
                <span className="font-mono text-[9px] tracking-wider text-zinc-400">
                  {PROFILE.idCard.idNo}
                </span>
              </div>
            </div>

            {/* Photo frame (Spec: 128x156 frame with gray gradient ring, soft halo, hover zoom) */}
            <div className="flex flex-col items-center my-auto">
              <div className="relative w-[128px] h-[156px] rounded-[16px] p-[3px] bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 shadow-md group-hover:scale-[1.03] transition-transform duration-300">
                <div className="relative w-full h-full rounded-[13px] overflow-hidden bg-[#f4f2ee]">
                  <Image
                    src="/portrait-bust.webp"
                    alt="Hani IZEM - Engineer Badge Portrait"
                    fill
                    priority
                    className="object-cover"
                    sizes="128px"
                  />
                  {/* Soft highlight glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mt-3 space-y-0.5">
                <h3 className="text-lg font-bold text-[#0d0d0d] tracking-tight uppercase">
                  {PROFILE.name}
                </h3>
                <p className="font-mono text-[10px] text-[#77756f] max-w-[240px] leading-tight">
                  {PROFILE.role}
                </p>
              </div>

              {/* Data Table: ID No / Dept / Valid Till */}
              <div className="w-full mt-3 grid grid-cols-3 gap-1 bg-[#f4f2ee] rounded-lg p-2 text-center border border-[rgba(13,13,13,0.06)]">
                <div>
                  <span className="text-[7.5px] font-mono text-[#77756f] block uppercase">
                    ID NO.
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#0d0d0d]">
                    {PROFILE.idCard.idNo}
                  </span>
                </div>
                <div>
                  <span className="text-[7.5px] font-mono text-[#77756f] block uppercase">
                    DEPT.
                  </span>
                  <span className="text-[9.5px] font-mono font-semibold text-[#0d0d0d] truncate block">
                    Rail & PLM
                  </span>
                </div>
                <div>
                  <span className="text-[7.5px] font-mono text-[#77756f] block uppercase">
                    VALID TILL
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#0d0d0d]">
                    {PROFILE.idCard.validTill}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Barcode & Holographic Security Foil (Spec: gray barcode + holographic sticker) */}
            <div className="pt-2 border-t border-[rgba(13,13,13,0.08)] flex items-center justify-between">
              {/* Barcode */}
              <div className="flex items-center gap-[2px] h-7 py-0.5">
                {[2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2].map((w, idx) => (
                  <span
                    key={idx}
                    className="bg-[#0d0d0d] h-full rounded-[0.5px]"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>

              {/* Holographic sticker */}
              <div className="relative w-10 h-7 rounded-sm border border-zinc-300 overflow-hidden bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-300 shadow-xs flex items-center justify-center">
                <span className="font-mono text-[7px] font-extrabold tracking-tighter text-zinc-500 uppercase select-none">
                  VALID
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse" />
              </div>

              {/* Flip prompt */}
              <span className="font-mono text-[8px] text-[#77756f] flex items-center gap-1">
                <span>↻ FLIP</span>
              </span>
            </div>
          </div>

          {/* ===================== BACK OF BADGE ===================== */}
          <div
            className="absolute inset-0 w-full h-full bg-[#ffffff] rounded-[24px] border border-[rgba(13,13,13,0.12)] p-5 flex flex-col justify-between overflow-hidden shadow-lg"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Top slot cutout */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[28px] h-[5px] rounded-full bg-[#f4f2ee] border border-[rgba(13,13,13,0.18)] shadow-inner z-30" />

            {/* Back Header */}
            <div className="pt-2 border-b border-[rgba(13,13,13,0.08)] pb-2">
              <span className="font-mono text-[9px] font-bold tracking-wider uppercase text-[#0d0d0d] block">
                WHAT I AM // CREDENTIALS
              </span>
              <span className="font-mono text-[8px] text-[#77756f]">
                OFFICIAL RECORD & CLEARANCE
              </span>
            </div>

            {/* Body: 4-5 lines drawn strictly from resume */}
            <div className="my-auto space-y-2.5 text-left">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#77756f] block">
                  Degree & Alma Mater
                </span>
                <span className="text-xs font-bold text-[#0d0d0d] block">
                  {PROFILE.idCard.degree}
                </span>
                <span className="font-mono text-[9px] text-[#3a3a3a] block">
                  Specialization: Embedded Systems & Rail
                </span>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#77756f] block">
                  Industrial Experience
                </span>
                <span className="text-[10px] text-[#0d0d0d] font-medium block">
                  • Alstom: Project Configuration & Change Manager (CBTC GoA4)
                </span>
                <span className="text-[10px] text-[#0d0d0d] font-medium block">
                  • Renault Group: 3 yrs Embedded Systems (ISO 26262 ASIL-D)
                </span>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#77756f] block">
                  Core Problem-Solving & Tooling
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {PROFILE.idCard.keySkills.map((sk) => (
                    <span
                      key={sk}
                      className="px-1.5 py-0.5 rounded-[3px] bg-[#f4f2ee] border border-[rgba(13,13,13,0.08)] text-[8px] font-mono text-[#0d0d0d]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Signature Line */}
              <div className="pt-1">
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#77756f] block">
                  Holder Signature
                </span>
                <div className="h-6 flex items-end">
                  <span className="font-serif italic text-base text-[#0d0d0d] tracking-wider select-none">
                    Hani Izem
                  </span>
                </div>
                <div className="w-full h-[1px] bg-zinc-300 mt-0.5" />
              </div>
            </div>

            {/* Back Footer: "If found, say hello · [email]" */}
            <div className="pt-2 border-t border-[rgba(13,13,13,0.08)] flex items-center justify-between text-[8.5px] font-mono text-[#77756f]">
              <span className="truncate">If found, say hello · {PROFILE.email}</span>
              <span className="shrink-0 ml-1">↻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
