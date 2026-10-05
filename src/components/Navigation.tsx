"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, PROFILE } from "@/lib/data";
import { useScrollProgress } from "@/lib/hooks";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = NAV.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 2px Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[var(--ink)] z-50 pointer-events-none transition-transform duration-75 origin-left"
        style={{
          width: "100%",
          transform: `scaleX(${scrollProgress})`,
        }}
        aria-hidden="true"
      />

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[var(--paper)]/85 backdrop-blur-md border-b border-[var(--line)] shadow-xs"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram HI */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5 text-[var(--ink)]"
            aria-label="Hani IZEM - Home"
          >
            <div
              className={`w-9 h-9 rounded-full border border-[var(--ink)] flex items-center justify-center font-mono text-xs font-semibold tracking-tighter transition-all duration-300 ${
                scrolled
                  ? "bg-[var(--ink)] text-[var(--paper)]"
                  : "bg-transparent text-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)]"
              }`}
            >
              HI
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-tight uppercase">
                {PROFILE.name}
              </span>
              <span className="text-[10px] text-[var(--mute)] font-mono tracking-wider hidden sm:block">
                Electronics & Embedded Systems
              </span>
            </div>
          </Link>

          {/* Desktop Nav Pill */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--card)]/90 backdrop-blur-md border border-[var(--line)] shadow-xs"
          >
            {NAV.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`relative px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[var(--paper)] bg-[var(--ink)]"
                      : "text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--soft)]"
                  }`}
                >
                  <span className="font-mono text-[9px] mr-1 opacity-60">
                    {item.index}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Status Pill & Contact CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-[11px] font-mono text-[var(--ink-2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse-dot" />
              <span>Available for Missions</span>
            </div>

            <button
              onClick={() => handleLinkClick("#contact")}
              className="px-3.5 py-1.5 rounded-full bg-[var(--ink)] text-[var(--paper)] text-xs font-medium hover:bg-[var(--ink-2)] transition-colors cursor-pointer"
            >
              Get in touch
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full border border-[var(--line)] bg-[var(--card)] flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-4 h-[1.5px] bg-[var(--ink)] transition-transform duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-[var(--ink)] transition-transform duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[var(--paper)] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--mute)]">
              Index
            </span>
            {NAV.map((item, idx) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="flex items-center justify-between text-left py-2 border-b border-[var(--line)] text-xl font-medium text-[var(--ink)] hover:pl-2 transition-all cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[var(--mute)]">
                  {item.index}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-[var(--line)] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--ink-2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse-dot" />
              <span>{PROFILE.statusBadge}</span>
            </div>
            <p className="text-xs text-[var(--mute)] font-mono">
              {PROFILE.location} • {PROFILE.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
