import { ImageResponse } from "next/og";
import { getProject } from "@/lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  const bg = project?.bg || "#1A1714";
  const fg = project?.fg || "#F7F3EC";
  const name = project?.name || "YourLogo";
  const sector = project?.sector?.en || "Identity";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          color: fg,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 68px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 3 }}>
          <span>YOURLOGO</span>
          <span>{project?.year || ""}</span>
        </div>
        <div style={{ display: "flex", fontSize: 88, lineHeight: 0.95 }}>{name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <span>{sector}</span>
          <span>{project?.place?.en || "Dhaka"}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
