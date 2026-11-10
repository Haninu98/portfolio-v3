"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang") as Language;
      if (saved === "en" || saved === "fr") {
        setLang(saved);
      }
    } catch {}
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {}
  };

  const toggleLang = () => {
    handleSetLang(lang === "en" ? "fr" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
