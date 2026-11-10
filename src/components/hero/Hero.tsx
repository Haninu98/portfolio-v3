"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { TRANSLATIONS } from "@/lib/translations";

export default function Hero() {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

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

  // When language switches, reload video source and play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [lang]);

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
      className="relative min-h-[100svh] pt-24 pb-8 flex flex-col justify-between overflow-hidden bg-[var(--paper)] select-none"
    >
      {/* 1. Giant Outlined Ghost Word "HANI" Directly Behind Character with High Contrast */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span
          className="text-[24vw] font-black uppercase tracking-tighter block text-center leading-none select-none"
          style={{
            WebkitTextStroke: "1.5px rgba(13, 13, 13, 0.09)",
            color: "rgba(13, 13, 13, 0.045)",
          }}
        >
          {t.hero.ghostName}
        </span>
      </div>

      {/* 2. Top Bar Availability Badge & Sound Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--line)] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse-dot" />
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--ink-2)]">
            {t.hero.statusBadge}
          </span>
        </div>

        {/* 46px Round Solid Ink Sound Control Button */}
        <button
          onClick={toggleSound}
          aria-label={isPlayingSound ? t.hero.audioMuteAria : t.hero.audioPlayAria}
          className="relative w-[46px] h-[46px] rounded-full bg-[var(--ink)] text-[var(--paper)] shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 group"
        >
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

          {isAutoplayBlocked && (
            <span className="absolute -inset-1 rounded-full border-2 border-[var(--ink)] animate-ping opacity-60 pointer-events-none" />
          )}
        </button>
      </div>

      {/* 3. Centered 3D Character Video Stage (Upright, Seamless Transparent Alpha onto Paper Background) */}
      <div className="absolute inset-0 max-w-[840px] h-[78svh] sm:h-[82svh] md:h-[86svh] m-auto flex items-center justify-center z-10 pointer-events-none select-none">
        <video
          key={lang}
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="w-full h-full object-contain pointer-events-none select-none scale-105 sm:scale-115 md:scale-120 origin-bottom"
          style={{
            aspectRatio: "640/800",
          }}
        >
          <source src={t.hero.videoSrcWebm} type="video/webm" />
          <source src={t.hero.videoSrcMp4} type="video/mp4" />
        </video>
      </div>

      {/* 4. Bottom Row: Left Headlines + Right Buttons (Exact Reel Layout frame_01_2.0s.jpg) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 md:pb-4">
        {/* Bottom-Left: Role Headline */}
        <div className="space-y-1.5 max-w-xl text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mute)] block">
            {t.hero.roleTag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] leading-[1.08]">
            {t.hero.titlePrimary} <span className="font-serif italic font-normal text-[var(--mute)]">{t.hero.titleAccent}</span> {t.hero.titleSuffix}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--mute)] font-normal pt-1">
            {t.hero.description}
          </p>
        </div>

        {/* Bottom-Right: 3 CTAs Cluster */}
        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-end shrink-0">
          <button
            onClick={() => scrollToSection("work")}
            className="px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--paper)] text-xs font-mono font-medium hover:bg-[var(--ink-2)] transition-all cursor-pointer shadow-xs"
          >
            {t.hero.ctaExplore}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-3 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs font-mono font-medium text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--soft)] transition-all cursor-pointer"
          >
            {t.hero.ctaTalk}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[var(--card)] border border-[var(--line)] text-xs font-mono font-medium text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--soft)] transition-all flex items-center gap-1.5"
          >
            <span>{lang === "fr" ? "Mon CV" : "Resume"}</span>
            <span className="font-mono text-xs opacity-60">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
