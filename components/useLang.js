"use client";

import { useEffect, useState } from "react";
import { applyLang, readLang } from "@/lib/lang";

export function t(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || "";
}

export function useLang() {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const sync = () => setLangState(readLang());
    sync();
    window.addEventListener("yourlogo-lang", sync);
    return () => window.removeEventListener("yourlogo-lang", sync);
  }, []);

  return {
    lang,
    setLang: (next) => setLangState(applyLang(next)),
    t: (value) => t(value, lang),
  };
}
