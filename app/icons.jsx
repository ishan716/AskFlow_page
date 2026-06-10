// ============ ICON LIBRARY ============
// A single <Icon name="..." /> component. All icons share stroke styling
// unless they're "filled" (pin, bolt). Keeps markup clean across sections.

const ICON_PATHS = {
  mic: <React.Fragment><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></React.Fragment>,
  arrowRight: <React.Fragment><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></React.Fragment>,
  send: <React.Fragment><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></React.Fragment>,
  thumbsUp: <React.Fragment><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></React.Fragment>,
  check: <polyline points="20 6 9 17 4 12"/>,
  target: <React.Fragment><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></React.Fragment>,
  eye: <React.Fragment><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></React.Fragment>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
  bars: <React.Fragment><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></React.Fragment>,
  trophy: <React.Fragment><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h2a2 2 0 0 1 0 4h-2"/><path d="M7 5H5a2 2 0 0 0 0 4h2"/></React.Fragment>,
  cloud: <React.Fragment><path d="M3 7h18"/><path d="M6 12h12"/><path d="M9 17h6"/></React.Fragment>,
  lock: <React.Fragment><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></React.Fragment>,
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9z"/>,
  grid: <React.Fragment><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></React.Fragment>,
  users: <React.Fragment><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></React.Fragment>,
  panels: <React.Fragment><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h6"/></React.Fragment>,
  pinFill: <React.Fragment><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></React.Fragment>,
  flash: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  chart: <React.Fragment><path d="M3 3v18h18"/><path d="m7 16 4-4 4 4 5-6"/></React.Fragment>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  clock: <React.Fragment><path d="M12 22a10 10 0 1 0-10-10"/><path d="M2 12h4"/><polyline points="12 6 12 12 16 14"/></React.Fragment>,
  device: <React.Fragment><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></React.Fragment>,
  code: <React.Fragment><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></React.Fragment>,
  globe: <React.Fragment><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></React.Fragment>,
  database: <React.Fragment><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></React.Fragment>,
  graduation: <React.Fragment><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></React.Fragment>,
  community: <React.Fragment><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></React.Fragment>,
  presentation: <React.Fragment><path d="M2 3h20v14H2z"/><path d="M8 21h8M12 17v4"/></React.Fragment>,
  building: <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>,
  user: <React.Fragment><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></React.Fragment>,
  menu: <React.Fragment><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></React.Fragment>,
  close: <React.Fragment><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></React.Fragment>,
};

const FILLED = new Set(["bolt", "flash", "shield", "building"]);

function Icon({ name, size = 22, stroke = 2, fill = false, ...rest }) {
  const isFilled = fill || FILLED.has(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {ICON_PATHS[name] || null}
    </svg>
  );
}

window.Icon = Icon;
