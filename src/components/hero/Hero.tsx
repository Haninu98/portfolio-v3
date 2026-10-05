"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PROFILE } from "@/lib/data";

export default function Hero() {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Play video with or without sound
  const attemptPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false;
      await video.play();
      setIsPlayingSound(true);
      setIsAutoplayBlocked(false);
    } catch {
      // Browser blocked autoplay with sound; fallback to muted
      video.muted = true;
      try {
        await video.play();
        setIsPlayingSound(false);
        setIsAutoplayBlocked(true);
      } catch (err) {
        console.warn("Muted video autoplay also failed:", err);
      }
    }
  }, []);

  // Unlock sound on user interaction
  useEffect(() => {
    attemptPlay();

    const unlockSound = () => {
      const video = videoRef.current;
      if (video && isAutoplayBlocked) {
        video.muted = false;
        video.play().then(() => {
          setIsPlayingSound(true);
          setIsAutoplayBlocked(false);
        }).catch(() => {});
      }
    };

    window.addEventListener("pointerdown", unlockSound, { once: true });
    window.addEventListener("keydown", unlockSound, { once: true });
    window.addEventListener("touchend", unlockSound, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockSound);
      window.removeEventListener("keydown", unlockSound);
      window.removeEventListener("touchend", unlockSound);
    };
  }, [attemptPlay, isAutoplayBlocked]);

  // Pause video when less than 35% visible; resume when scrolled back
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.35) {
          if (!video.paused) video.pause();
        } else {
          if (video.paused) {
            video.play().catch(() => {});
          }
        }
      },
      { threshold: [0, 0.35, 0.7, 1.0] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || video.paused) {
      video.muted = false;
      video.play().then(() => {
        setIsPlayingSound(true);
        setIsAutoplayBlocked(false);
      }).catch(() => {});
    } else {
      video.muted = true;
      setIsPlayingSound(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[var(--paper)]"
    >
      {/* 1. Giant Outlined Ghost Word "HANI" Behind Character */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-black uppercase tracking-tighter opacity-[0.045] block text-center leading-none"
          style={{
            WebkitTextStroke: "2px var(--ink)",
            color: "transparent",
          }}
        >
          HANI
        </span>
      </div>

      {/* 2. Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center items-center text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--line)] shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse-dot" />
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-2)]">
            Open for Engineering Missions • Alstom Rail & Embedded
          </span>
        </div>

        {/* 3. Centered Video Stage (Aspect-Ratio 768/960, Height min(96svh, 1040px)) */}
        <div className="relative w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] h-[55vh] sm:h-[62vh] md:h-[68vh] mx-auto flex items-center justify-center my-2">
          {/* Subtle soft backdrop ring */}
          <div className="absolute inset-4 rounded-full border border-[var(--line)] bg-[var(--card)]/40 -z-10" />

          {/* HTML5 Seamless Looping Video with Multiply Blend */}
          <div className="relative w-full h-full mix-blend-multiply flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-contain"
              style={{
                aspectRatio: "768/960",
                mixBlendMode: "multiply",
              }}
            >
              <source src="/hero/hero.webm" type="video/webm" />
              <source src="/hero/hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* 4. 46px Round Solid Ink Sound Control Button */}
          <button
            onClick={toggleSound}
            aria-label={isPlayingSound ? "Mute audio" : "Play audio with voice introduction"}
            className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 w-[46px] h-[46px] rounded-full bg-[var(--ink)] text-[var(--paper)] shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 group"
          >
            {/* Show ▶ when sound is off, ❚❚ when sound is on */}
            {isPlayingSound ? (
              <span className="flex items-center gap-[3px] h-3.5">
                <span className="w-[3px] h-3.5 bg-[var(--paper)] rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-[3px] h-3.5 bg-[var(--paper)] rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-[3px] h-3.5 bg-[var(--paper)] rounded-full animate-bounce" />
              </span>
            ) : (
              <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}

            {/* Soft ping ring when autoplay is blocked */}
            {isAutoplayBlocked && (
              <span className="absolute -inset-1 rounded-full border-2 border-[var(--ink)] animate-ping opacity-60 pointer-events-none" />
            )}
          </button>
        </div>

        {/* 5. Role Heading from Resume + CTAs */}
        <div className="max-w-3xl mx-auto mt-2 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--ink)] leading-[1.12]">
            Electronics & <span className="font-serif-italic">Embedded</span> Systems Engineer
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[var(--mute)] leading-relaxed max-w-2xl mx-auto font-normal">
            Specialized in railway signaling (ERTMS / CBTC GoA4), complex PLM enterprise configuration,
            and safety-critical embedded software architectures.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollToSection("work")}
            className="px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--paper)] text-sm font-medium hover:bg-[var(--ink-2)] transition-all cursor-pointer shadow-xs"
          >
            Explore Selected Work ↓
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[var(--card)] border border-[var(--line)] text-sm font-medium text-[var(--ink)] hover:bg-[var(--soft)] hover:border-[var(--ink)] transition-all flex items-center gap-2"
          >
            <span>Read Résumé (PDF)</span>
            <span className="font-mono text-xs opacity-60">↓</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-3 rounded-full bg-transparent border border-[var(--line)] text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-all cursor-pointer"
          >
            Let&apos;s talk
          </button>
        </div>
      </div>

      {/* Bottom Proof Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-[var(--line)]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--mute)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
            <span className="text-[var(--ink)] font-medium">CORE CREDENTIALS:</span>
            <span>Alstom CBTC GoA4 • RER NG Commissioning</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>• Renault ECU Cybersecurity (ISO 26262)</span>
            <span>• Embedded C/C++ & FreeRTOS</span>
            <span>• DOORS DXL Traceability</span>
          </div>
          <div className="text-[var(--ink-2)] font-mono">
            PARIS • ESIGELEC / POLYTECH SORBONNE
          </div>
        </div>
      </div>
    </section>
  );
}
