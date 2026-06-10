// ============ CONTENT DATA ============

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#location", label: "Attendance" },
  { href: "#how", label: "How it works" },
  { href: "#functional", label: "Requirements" },
  { href: "#stack", label: "Tech" },
];

const STRIP = ["University Lectures", "Tech Meetups", "Workshops", "Conferences", "Community Events"];

const STATS = [
  { num: "7-digit", lab: "Room code or QR to join" },
  { num: "0", lab: "Page refreshes — fully live" },
  { num: "4-in-1", lab: "Q\u0026A · Polls · Quiz · Word cloud" },
  { num: "100%", lab: "Web-based, cross-device" },
];

const FEATURES = [
  { icon: "chat", title: "Live Q\u0026A with Voting", text: "Questions asked live, named or anonymous — upvoted so the best rise to the top." },
  { icon: "bars", title: "Live Polls", text: "Multiple-choice polls with live counts and one vote per person." },
  { icon: "trophy", title: "Timed Quizzes", text: "Countdown timers, auto-grading and a live ranked leaderboard." },
  { icon: "cloud", title: "Word Cloud", text: "Open-ended answers, visualised live for the whole room." },
  { icon: "lock", title: "Flexible Authentication", text: "Hosts sign in with email, Google or GitHub. Members join in one tap." },
  { icon: "bolt", title: "Real-Time Everything", text: "WebSockets keep every vote, score and count in sync instantly." },
];

const LOC_POINTS = [
  { icon: "lock", title: "Permission on join", text: "Location is requested the moment a member enters the code." },
  { icon: "target", title: "Geofence check", text: "Position is matched against the venue and its allowed radius." },
  { icon: "check", title: "Auto check-in", text: "In range? Instantly marked present in the host's report." },
];

const STEPS = [
  { icon: "grid", n: "STEP 01", title: "Host creates a room", text: "Sign in, spin up a room and share the 7-digit code or QR for the venue." },
  { icon: "users", n: "STEP 02", title: "Members join \u0026 check in", text: "Participants enter the code, grant location, and are auto-marked present if in range." },
  { icon: "chat", n: "STEP 03", title: "Interact in real time", text: "Switch between Q\u0026A, polls, quizzes and word clouds — everyone follows live." },
  { icon: "bars", n: "STEP 04", title: "Review the insights", text: "Host sees votes, scores, leaderboards and a full attendance report in one dashboard." },
];

const FUNCTIONAL = [
  {
    icon: "lock", tag: "Module · FR-AUTH", title: "Authentication \u0026 Access",
    items: [
      ["FR-1.1", "Hosts can <b>register and log in</b> via email \u0026 password with secure hashing."],
      ["FR-1.2", "Hosts can authenticate with <b>Google or GitHub OAuth</b>."],
      ["FR-1.3", "Members join <b>anonymously or named</b> — no password required."],
      ["FR-1.4", "Members enter via a <b>7-digit room code or QR token</b>."],
      ["FR-1.5", "Each member gets a <b>device fingerprint</b> to prevent vote abuse."],
      ["FR-1.6", "Host sessions are maintained with <b>JWT tokens</b> (24-hour expiry)."],
    ],
  },
  {
    icon: "panels", tag: "Module · FR-ROOM", title: "Room \u0026 Interaction Management",
    items: [
      ["FR-2.1", "Hosts can <b>create, edit, archive and delete</b> multiple rooms."],
      ["FR-2.2", "System <b>generates unique room codes</b> and QR tokens per room."],
      ["FR-2.3", "Hosts set room <b>start and end dates</b>."],
      ["FR-2.4", "Hosts <b>switch the active interaction</b> (Q\u0026A / poll / quiz / word cloud) live."],
      ["FR-2.5", "System shows a <b>live participant count</b> per room."],
      ["FR-2.6", "Everything is controlled from a single <b>host dashboard</b>."],
    ],
  },
  {
    icon: "chat", tag: "Module · FR-INTERACT", title: "Audience Interactions",
    items: [
      ["FR-3.1", "Members submit questions and <b>upvote / downvote</b>; list sorts by popularity."],
      ["FR-3.2", "Hosts run <b>multiple-choice polls</b> with live results and one vote per person."],
      ["FR-3.3", "Hosts build <b>timed quizzes</b> with marked answers and auto-grading."],
      ["FR-3.4", "System produces a <b>ranked leaderboard</b> by accuracy then time."],
      ["FR-3.5", "Members submit open text to a <b>live word cloud</b> with character limits."],
      ["FR-3.6", "Optional <b>profanity filtering</b> across questions and answers."],
    ],
  },
  {
    icon: "pinFill", tag: "Module · FR-ATTEND · New", title: "Location-Based Attendance",
    items: [
      ["FR-4.1", "System <b>requests location permission</b> when a member joins a room."],
      ["FR-4.2", "Host defines a <b>venue location and allowed radius</b> for the room."],
      ["FR-4.3", "System <b>verifies the member is within range</b> of the venue."],
      ["FR-4.4", "Members in range are <b>automatically marked present</b> with a timestamp."],
      ["FR-4.5", "Out-of-range or denied-permission joins are <b>flagged accordingly</b>."],
      ["FR-4.6", "Hosts view and <b>export an attendance report</b> per session."],
    ],
  },
  {
    icon: "bolt", tag: "Module · FR-RT", title: "Real-Time Communication",
    items: [
      ["FR-5.1", "All interactions update via a <b>bidirectional WebSocket</b> channel."],
      ["FR-5.2", "Votes, results, scores and counts refresh <b>without page reloads</b>."],
      ["FR-5.3", "System <b>broadcasts updates</b> to all members of a room simultaneously."],
      ["FR-5.4", "Connections <b>recover gracefully</b> after drops or network changes."],
    ],
  },
];

const NFR = [
  { icon: "flash", tag: "NFR-01", title: "Performance", text: "Near-instant WebSocket updates with no page refresh." },
  { icon: "chart", tag: "NFR-02", title: "Scalability", text: "Many concurrent rooms via an efficient ASGI broadcast layer." },
  { icon: "shield", tag: "NFR-03", title: "Security", text: "Bcrypt hashing, JWT, OAuth 2.0 and device fingerprinting." },
  { icon: "clock", tag: "NFR-04", title: "Reliability", text: "Graceful recovery; polls and quizzes archived, never lost." },
  { icon: "device", tag: "NFR-05", title: "Usability \u0026 Accessibility", text: "No app install, responsive and accessible on any device." },
  { icon: "pinFill", tag: "NFR-06", title: "Privacy \u0026 Consent", text: "Location used only with consent, only for attendance." },
  { icon: "code", tag: "NFR-07", title: "Maintainability", text: "Modular, typed React + FastAPI codebase, easy to extend." },
  { icon: "globe", tag: "NFR-08", title: "Compatibility", text: "Runs in any modern browser, PWA-ready." },
  { icon: "database", tag: "NFR-09", title: "Data Integrity", text: "Relational schema enforces one-vote-per-person rules." },
];

const TECH = [
  { h: "Frontend", chips: ["React 18", "TypeScript", "Redux Toolkit", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "WebSocket API"] },
  { h: "Backend", chips: ["FastAPI", "Uvicorn", "SQLAlchemy", "Pydantic", "Python-jose (JWT)", "Bcrypt", "Authlib OAuth2", "WebSockets"] },
  { h: "Data \u0026 Auth", chips: ["PostgreSQL", "SQLite (dev)", "JWT", "Google OAuth", "GitHub OAuth", "Device Fingerprint", "Geolocation API"] },
];

const USE_CASES = [
  { icon: "graduation", title: "University Lectures", text: "Q\u0026A, quizzes \u0026 auto attendance" },
  { icon: "community", title: "Tech Meetups", text: "Live polls \u0026 audience questions" },
  { icon: "presentation", title: "Workshops \u0026 Seminars", text: "Word clouds \u0026 hands-on feedback" },
  { icon: "building", title: "Conferences", text: "Multi-room, large-audience Q\u0026A" },
  { icon: "user", title: "Clubs \u0026 Communities", text: "Engagement with presence tracking" },
  { icon: "pinFill", title: "Training \u0026 Exams", text: "Verified location-based attendance" },
];

Object.assign(window, {
  NAV_LINKS, STRIP, STATS, FEATURES, LOC_POINTS, STEPS,
  FUNCTIONAL, NFR, TECH, USE_CASES,
});
