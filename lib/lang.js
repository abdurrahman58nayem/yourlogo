export const LANG_KEY = "yourlogo-lang";

export const langBoot = `
try {
  var l = localStorage.getItem("${LANG_KEY}");
  if (l !== "bn" && l !== "en") l = "bn"; /* বাংলাদেশ মার্কেট — ডিফল্ট বাংলা */
  document.documentElement.lang = l;
} catch (e) {}
`;

export function applyLang(next) {
  const lang = next === "bn" ? "bn" : "en";
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* private mode */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("yourlogo-lang", { detail: lang }));
  }
  return lang;
}

export function readLang() {
  if (typeof document === "undefined") return "en";
  return document.documentElement.lang === "bn" ? "bn" : "en";
}
