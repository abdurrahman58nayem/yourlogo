import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const base = siteUrl();
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/start`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
