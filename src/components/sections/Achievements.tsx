"use client";

import { useEffect, useRef, useState } from "react";
import { ACHIEVEMENTS } from "@/lib/data";

function CountUpNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    const duration = 1400; // ms (Spec: 1.4s)

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCurrent(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <span ref={ref} className="font-mono font-bold tracking-tight">
      {current}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section id="achievements" className="py-24 border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[var(--mute)]">06 //</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            Achievements
          </span>
          <div className="flex-1 h-[1px] bg-[var(--line)]" />
        </div>

        {/* Heading Matching Reel frame_14_28.0s.jpg: Proud moments. */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
              Proud <span className="font-serif italic font-normal text-[var(--mute)]">moments.</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--mute)] mt-3 max-w-xl font-normal">
              Quantifiable operational outcomes achieved across industrial railway programs,
              continuous testing environments, and multi-tier configuration baselines.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--card)] hover:border-[var(--ink)] flex items-center justify-center font-mono text-xs text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Previous achievement"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--card)] hover:border-[var(--ink)] flex items-center justify-center font-mono text-xs text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Next achievement"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.index}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[420px] snap-start rounded-3xl bg-[var(--card)] border border-[var(--line)] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[var(--ink)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Header: Platform Tag + Index */}
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 mb-6">
                <span className="font-mono text-xs text-[var(--mute)]">
                  {item.index}
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--paper)] border border-[var(--line)] font-mono text-[10px] text-[var(--ink)] font-medium">
                  {item.platform}
                </span>
              </div>

              {/* Number Count-Up (Large font on bottom right) */}
              <div className="space-y-2 my-auto py-4">
                <div className="text-5xl sm:text-6xl text-[var(--ink)]">
                  <CountUpNumber
                    target={item.targetValue}
                    suffix={item.suffix}
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] leading-snug">
                  {item.label}
                </h3>
                <span className="font-mono text-xs text-[var(--mute)] block">
                  {item.caption}
                </span>
              </div>

              {/* Detail paragraph */}
              <div className="pt-4 border-t border-[var(--line)]">
                <p className="text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
