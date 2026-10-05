"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/data";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setIsPlaying(false);
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("play", onPlay);

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("play", onPlay);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn("Audio autoplay blocked or failed:", err);
      });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[95vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Ghost Outline Word HANI */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] font-black uppercase tracking-tighter opacity-[0.04] text-[var(--ink)] block text-center leading-none"
          style={{
            WebkitTextStroke: "1.5px var(--ink)",
            color: "transparent",
          }}
        >
          HANI
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center items-center text-center">
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--line)] shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse-dot" />
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-2)]">
            Open for Engineering Missions • Paris & Remote
          </span>
        </div>

        {/* 3D Character Stage */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 my-2 mx-auto flex items-center justify-center">
          {/* Subtle soft backdrop ring */}
          <div className="absolute inset-4 rounded-full border border-[var(--line)] bg-[var(--card)]/40 -z-10" />

          {/* Centered 3D Character Render with Multiply Blend */}
          <div className="relative w-full h-full mix-blend-multiply flex items-center justify-center">
            <Image
              src="/hero/hero.webp"
              alt="Hani IZEM - 3D Character Avatar"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 256px, (max-width: 1200px) 384px, 420px"
            />
          </div>

          {/* 46px Round Voice Button */}
          <button
            onClick={toggleAudio}
            className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--ink)] text-[var(--ink)] shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 group"
            title={isPlaying ? "Pause voice greeting" : "Listen to Hani's spoken intro"}
            aria-label={isPlaying ? "Pause voice greeting" : "Listen to Hani's voice greeting"}
          >
            {isPlaying ? (
              <span className="flex items-center gap-0.5 h-3.5">
                <span className="w-1 h-3.5 bg-[var(--ink)] rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1 h-3.5 bg-[var(--ink)] rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1 h-3.5 bg-[var(--ink)] rounded-full animate-bounce" />
              </span>
            ) : (
              <div className="flex items-center justify-center ml-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
            {/* Spinning decorative orbit */}
            <span
              className={`absolute inset-[-4px] rounded-full border border-dashed border-[var(--mute)]/50 ${
                isPlaying ? "animate-spin" : "opacity-0 group-hover:opacity-100"
              } transition-opacity duration-300 pointer-events-none`}
            />
          </button>

          {/* Hidden HTML5 Audio Element */}
          <audio ref={audioRef} src="/hero/hero_intro.mp3" preload="metadata" />
        </div>

        {/* Hero Headlines */}
        <div className="max-w-3xl mx-auto mt-4 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--ink)] leading-[1.12]">
            Electronics & <span className="font-serif-italic">Embedded</span> Systems
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[var(--mute)] leading-relaxed max-w-2xl mx-auto font-normal">
            Specialized in mission-critical railway signaling, PLM enterprise architecture,
            and high-reliability embedded hardware. Bridging rigorous safety standards
            with modern automation pipelines.
          </p>
        </div>

        {/* CTA Actions */}
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
            <span className="font-mono text-xs opacity-60">↗</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-3 rounded-full bg-transparent border border-[var(--line)] text-sm font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-all cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Bottom Proof Strip / Key Sectors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-[var(--line)]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--mute)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
            <span className="text-[var(--ink)] font-medium">CORE DOMAINS:</span>
            <span>Railway Signaling (ERTMS/CBTC)</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>• PLM 3DEXPERIENCE</span>
            <span>• Embedded C/C++ & RTOS</span>
            <span>• Python Test Automation</span>
            <span>• Safety SIL4 & ISO 26262</span>
          </div>
          <div className="text-[var(--ink-2)] font-mono">
            PARIS, FRANCE • ESIGELEC M.Sc.
          </div>
        </div>
      </div>
    </section>
  );
}
