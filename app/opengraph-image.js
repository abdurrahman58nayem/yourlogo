import { ImageResponse } from "next/og";

export const alt = "YourLogo — A logo should feel inevitable.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#EFE8DC",
          color: "#1A1714",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 68px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            fontFamily: "sans-serif",
          }}
        >
          <span>YOURLOGO</span>
          <span>DHAKA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 0.95 }}>
          <span>A logo should feel</span>
          <span style={{ fontStyle: "italic", color: "#C4371B" }}>inevitable.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontFamily: "sans-serif",
          }}
        >
          <span>Identity studio</span>
          <span>Marks · Systems · Rebrands</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
