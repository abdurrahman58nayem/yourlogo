/** সাইটের সব SVG মার্ক ও আইকন — নতুন নেভি-গোল্ড ব্র্যান্ড। */

export function StudioMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="var(--navy-2, #16233B)" />
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="8.25" stroke="#C9A24B" strokeOpacity="0.55" strokeWidth="1.5" />
      {/* scales of justice */}
      <g stroke="#F2EAD9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 8.6v21" />
        <path d="M14.6 29.9h10.8" />
        <path d="M10.4 12.2h19.2" />
        <path d="M20 8.6l0-2" />
        <circle cx="20" cy="5.9" r="1.15" fill="#C9A24B" stroke="none" />
      </g>
      <g stroke="#C9A24B" strokeWidth="1.5" strokeLinecap="round">
        <path d="M10.4 12.2v3.4M29.6 12.2v3.4" />
        <path d="M6.6 15.6h7.6a3.8 3.8 0 0 1-7.6 0Z" fill="none" />
        <path d="M25.8 15.6h7.6a3.8 3.8 0 0 1-7.6 0Z" fill="none" />
      </g>
    </svg>
  );
}

const paths = {
  shield: (
    <>
      <path d="M12 3.2 20.5 6.4v6.1c0 5.2-3.6 9.4-8.5 11.3-4.9-1.9-8.5-6.1-8.5-11.3V6.4L12 3.2Z" />
      <path d="M8.4 11.8l2.7 2.7 4.6-4.9" />
    </>
  ),
  land: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M12 3.8 3.5 8.9v1.9h17V8.9L12 3.8Z" />
      <path d="M5.6 10.8v6.4M12 10.8v6.4M18.4 10.8v6.4" />
      <path d="M2 23.4h20" />
    </>
  ),
  family: (
    <>
      <circle cx="7.4" cy="7.4" r="3.1" />
      <circle cx="16.6" cy="7.4" r="3.1" />
      <path d="M2.4 20.6c0-3.4 2.3-6.2 5-6.2s5 2.8 5 6.2" />
      <path d="M12.7 14.9c.9-.8 2.1-1.3 3.3-1.3 2.9 0 5.6 2.6 5.6 6.2" />
    </>
  ),
  pillar: (
    <>
      <path d="M12 3 3.6 8h16.8L12 3Z" />
      <path d="M5.8 8v9.4M12 8v9.4M18.2 8v9.4" />
      <path d="M3.4 17.4h17.2M2 20.8h20" />
    </>
  ),
  handshake: (
    <>
      <path d="M2.6 8.4h3.8l4.4 4.3c.9.9.4 2.4-.8 2.6-.5.1-1.1-.1-1.5-.5l-2.2-2" />
      <path d="M21.4 8.4h-3.8l-4.9 4.8" />
      <path d="M8.9 17.2l1.7 1.6c.8.7 2 .7 2.7-.1" />
      <path d="M13.3 18.7c.8.7 2 .6 2.7-.2l3.7-3.9" />
      <path d="M2.6 8.4v7l3.8 3.9" />
      <path d="M21.4 8.4v7l-1.7 1.8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v15" />
      <path d="M7 19h10" />
      <path d="M4.8 7h14.4" />
      <path d="M4.8 7v2.6M19.2 7v2.6" />
      <path d="M2 9.6h5.6a2.8 2.8 0 0 1-5.6 0Z" />
      <path d="M16.4 9.6H22a2.8 2.8 0 0 1-5.6 0Z" />
      <path d="M12 4l0-.2" />
    </>
  ),
  check: <path d="M4.2 12.6l5 5L19.8 6.4" />,
  arrow: <path d="M4 12h15M13.4 5.8 19.6 12l-6.2 6.2" />,
  phone: (
    <path d="M7.1 3.2c.6 0 1.1.4 1.3 1l.9 2.9c.2.6 0 1.2-.5 1.6l-1.5 1.2c1.1 2.3 3 4.2 5.3 5.3l1.2-1.5c.4-.5 1-.7 1.6-.5l2.9.9c.6.2 1 .7 1 1.3v2.4c0 .8-.7 1.5-1.5 1.4C9.5 18.6 5.4 14.5 4.8 6.2 4.7 5.4 5.4 4.7 6.2 4.7l.9.1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.4" width="18" height="13.2" rx="2.2" />
      <path d="m3.8 6.6 8.2 6.6 8.2-6.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.6V12l3.6 2.2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.4s-7-6.4-7-11.4a7 7 0 0 1 14 0c0 5-7 11.4-7 11.4Z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3.4a8.6 8.6 0 0 0-7.4 12.9L3.4 20.6l4.4-1.1A8.6 8.6 0 1 0 12 3.4Z" />
      <path d="M9.2 8.4c.3-.1.5 0 .7.3l.8 1.4c.1.3.1.5-.1.7l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.2.5-.2.7-.1l1.4.8c.3.2.4.4.3.7-.2.9-1.1 1.5-2 1.3-2.9-.6-5.2-2.9-5.8-5.8-.2-.9.4-1.7 1.3-2Z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
};

export function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.scale}
    </svg>
  );
}

export function Quote({ size = 40 }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 40 30" fill="currentColor" aria-hidden="true">
      <path d="M0 30V16.8C0 7.2 5.4 1.4 15.2 0l1.9 4.6C11 6.4 8.2 9.8 8 14h7.6v16H0Zm22.4 0V16.8C22.4 7.2 27.8 1.4 37.6 0l1.9 4.6C33.4 6.4 30.6 9.8 30.4 14H38v16H22.4Z" />
    </svg>
  );
}
