"use client";

import { useState } from "react";
import Link from "next/link";
import Tx from "./Tx";
import { Mark } from "./Marks";
import { filters, projects } from "@/lib/projects";

export default function WorkGrid({ labelled = true }) {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.filter === filter);

  return (
    <div>
      <div className="filters" role="tablist" aria-label="Filter work">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={`filter ${filter === f.id ? "on" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            <Tx en={f.en} bn={f.bn} />
          </button>
        ))}
      </div>
      <div className={`work-grid ${filter === "all" ? "" : "is-filtered"}`}>
        {shown.map((p) => {
          const index = projects.findIndex((item) => item.slug === p.slug);
          const light = ["lunara", "hale", "atelier", "kin", "fieldnote"].includes(p.slug);
          return (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`tile ${p.layout} ${light ? "tile-light" : ""}`}
              style={{ background: p.bg, color: p.fg }}
            >
              <span className="tile-index latin">{String(index + 1).padStart(2, "0")}</span>
              <span className="tile-mark">
                <Mark id={p.slug} />
              </span>
              <span className="tile-meta">
                <span className="tile-name latin">{p.name}</span>
                <span className="tile-sector">
                  {labelled ? <Tx en={p.sector.en} bn={p.sector.bn} /> : p.sector.en}
                </span>
              </span>
              <span className="tile-go" aria-hidden="true">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
