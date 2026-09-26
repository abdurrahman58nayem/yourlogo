"use client";

import { useId } from "react";
import { brands } from "@/lib/brands";

function Svg({ className, children }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

function Nokshi({ className, variant }) {
  const c = brands.nokshi;
  const petal = variant === "color" ? c.fg : "currentColor";
  const center = variant === "color" ? c.accent : "currentColor";
  const ring = variant === "color" ? c.accent : "currentColor";
  return (
    <Svg className={className}>
      <g transform="translate(50 50)">
        <circle r="36" fill="none" stroke={ring} strokeWidth="1.6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
          <ellipse key={d} cx="0" cy="-17.5" rx="5.4" ry="12.5" transform={`rotate(${d})`} fill={petal} />
        ))}
        <circle r="5.2" fill={center} />
      </g>
    </Svg>
  );
}

function Ember({ className, variant }) {
  const c = brands.ember;
  const flame = variant === "color" ? c.fg : "currentColor";
  const core = variant === "color" ? c.accent : "none";
  return (
    <Svg className={className}>
      <path
        fill={flame}
        d="M50 10c8 16 24 26 24 46 0 16-10 28-24 32C36 84 26 72 26 56 26 36 42 26 50 10z"
      />
      {variant === "color" ? (
        <path fill={core} d="M50 34c4 10 12 14 12 26 0 8-5 14-12 16-7-2-12-8-12-16 0-12 8-16 12-26z" />
      ) : (
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0"
          d="M50 38c3 8 9 12 9 22 0 6-4 11-9 13"
        />
      )}
    </Svg>
  );
}

function Vela({ className, variant }) {
  const c = brands.vela;
  const left = variant === "color" ? c.fg : "currentColor";
  const right = variant === "color" ? c.accent : "currentColor";
  return (
    <Svg className={className}>
      <polygon points="14,84 46,12 46,84" fill={left} />
      <polygon points="54,28 88,84 54,84" fill={right} opacity={variant === "color" ? 1 : 0.42} />
    </Svg>
  );
}

function Lunara({ className, variant, uid }) {
  const ink = variant === "color" ? brands.lunara.fg : "currentColor";
  return (
    <Svg className={className}>
      <defs>
        <mask id={`crescent-${uid}`}>
          <rect width="100" height="100" fill="white" />
          <circle cx="60" cy="46" r="20" fill="black" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="38" fill="none" stroke={ink} strokeWidth="1.35" />
      <circle cx="44" cy="52" r="20" fill={ink} mask={`url(#crescent-${uid})`} />
    </Svg>
  );
}

function Meridian({ className, variant }) {
  const c = brands.meridian;
  const ink = variant === "color" ? c.fg : "currentColor";
  const brass = variant === "color" ? c.accent : "currentColor";
  return (
    <Svg className={className}>
      <path
        fill={ink}
        d="M14 80V26h12l24 28 24-28h12v54H74V46L50 68 26 46v34H14z"
      />
      <rect x="14" y="86" width="72" height="3.2" fill={brass} opacity={variant === "color" ? 1 : 0.7} />
    </Svg>
  );
}

function Stride({ className, variant }) {
  const c = brands.stride;
  const ink = variant === "color" ? c.fg : "currentColor";
  const volt = variant === "color" ? c.accent : "currentColor";
  const common = {
    fill: "none",
    strokeWidth: 7.5,
    strokeLinejoin: "miter",
    strokeLinecap: "square",
  };
  return (
    <Svg className={className}>
      <path d="M18 28 44 50 18 72" stroke={ink} {...common} />
      <path d="M38 28 64 50 38 72" stroke={ink} opacity={variant === "color" ? 0.55 : 0.45} {...common} />
      <path d="M58 28 84 50 58 72" stroke={volt} opacity={variant === "color" ? 1 : 0.28} {...common} />
    </Svg>
  );
}

function Saffron({ className, variant }) {
  const c = brands.saffron;
  const petal = variant === "color" ? c.accent : "currentColor";
  const heart = variant === "color" ? c.fg : "currentColor";
  return (
    <Svg className={className}>
      <g transform="translate(50 54)">
        {[0, 120, 240].map((a) => (
          <path
            key={a}
            transform={`rotate(${a})`}
            fill={petal}
            d="M0 4C10-4 15-18 0-40C-15-18-10-4 0 4Z"
          />
        ))}
        <circle r="5.4" fill={heart} />
      </g>
    </Svg>
  );
}

function Hale({ className, variant }) {
  const c = brands.hale;
  const ink = variant === "color" ? c.fg : "currentColor";
  const brass = variant === "color" ? c.accent : "currentColor";
  return (
    <Svg className={className}>
      <polygon points="12,32 50,12 88,32" fill={brass} />
      <rect x="20" y="32" width="11" height="50" fill={ink} />
      <rect x="69" y="32" width="11" height="50" fill={ink} />
      <rect x="20" y="50" width="60" height="9" fill={ink} />
      <rect x="16" y="82" width="68" height="4" fill={ink} />
    </Svg>
  );
}

function Orbit({ className, variant }) {
  const c = brands.orbit;
  const star = variant === "color" ? c.accent : "currentColor";
  const ring = variant === "color" ? c.fg : "currentColor";
  const moon = variant === "color" ? "#E07A5F" : "currentColor";
  return (
    <Svg className={className}>
      <ellipse
        cx="50"
        cy="50"
        rx="38"
        ry="14"
        fill="none"
        stroke={ring}
        strokeWidth="3.4"
        transform="rotate(-28 50 50)"
      />
      <circle cx="50" cy="50" r="13.5" fill={star} />
      <circle cx="80" cy="34" r="4.2" fill={moon} opacity={variant === "color" ? 1 : 0.55} />
    </Svg>
  );
}

function Atelier({ className, variant }) {
  const c = brands.atelier;
  const ink = variant === "color" ? c.fg : "currentColor";
  const rust = variant === "color" ? c.accent : "currentColor";
  return (
    <Svg className={className}>
      <path fill={ink} d="M22 82V24h12l34 40V24h12v58H68L34 42v40H22z" />
      <rect x="22" y="12" width="13" height="13" fill={rust} />
    </Svg>
  );
}

function Kin({ className, variant }) {
  const c = brands.kin;
  const ink = variant === "color" ? c.fg : "currentColor";
  const coral = variant === "color" ? c.accent : "currentColor";
  return (
    <Svg className={className}>
      <rect x="16" y="14" width="34" height="72" rx="17" fill={ink} />
      <rect
        x="50"
        y="14"
        width="34"
        height="72"
        rx="17"
        fill={coral}
        opacity={variant === "color" ? 1 : 0.4}
      />
    </Svg>
  );
}

function Fieldnote({ className, variant }) {
  const c = brands.fieldnote;
  const ink = variant === "color" ? c.fg : "currentColor";
  const red = variant === "color" ? c.accent : "currentColor";
  return (
    <Svg className={className}>
      <path d="M24 16h36l20 20v50H24V16z" fill="none" stroke={ink} strokeWidth="3.2" />
      <path d="M60 16v20h20" fill="none" stroke={ink} strokeWidth="3.2" />
      <path d="M60 16 80 36 60 36Z" fill={red} />
    </Svg>
  );
}

const MARKS = {
  nokshi: Nokshi,
  ember: Ember,
  vela: Vela,
  lunara: Lunara,
  meridian: Meridian,
  stride: Stride,
  saffron: Saffron,
  hale: Hale,
  orbit: Orbit,
  atelier: Atelier,
  kin: Kin,
  fieldnote: Fieldnote,
};

export function Mark({ id, variant = "color", className = "" }) {
  const uid = useId().replace(/:/g, "");
  const Comp = MARKS[id] || Nokshi;
  return <Comp uid={uid} variant={variant} className={`mark mark-${id} ${className}`} />;
}

export function StudioMark({ className = "" }) {
  return (
    <svg className={`studio-mark ${className}`} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M16 3.2v5.4M16 23.4V28.8M3.2 16h5.4M23.4 16H28.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
      <circle cx="16" cy="16" r="2.15" fill="#E14A2A" />
    </svg>
  );
}

export function BeforeHale({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="16" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M50 22v54M16 40h68" stroke="currentColor" strokeWidth="2" />
      <path d="M16 40 28 62H6Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M84 40 96 62H74Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M32 78h36M40 86h20" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="50" r="1.8" fill="currentColor" />
      <circle cx="80" cy="50" r="1.8" fill="currentColor" />
      <path d="M22 54h8M74 54h8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
