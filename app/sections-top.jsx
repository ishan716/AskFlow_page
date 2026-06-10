// ============ TOP SECTIONS ============
const { useState, useEffect } = React;

function Nav() {
  const [open, setOpen] = useState(false);

  // Close menu on resize up to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <React.Fragment>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="brand-mark"><img src="app/img/AF.svg" alt="AskFlow" style={{width: '24px', height: '24px'}} /></span>
            AskFlow
          </a>
          <nav className="nav-links">
            {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="#contact">Talk to us</a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={"mobile-menu" + (open ? " open" : "")}>
        <div className="container mm-inner">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="mm-link" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <div className="mm-cta">
            <a className="btn btn-ghost" href="#contact" onClick={() => setOpen(false)}>Talk to us</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Live Audience Interaction Platform</span>
          <h1>Break the <span className="grad">one-way barrier</span>.</h1>
          <p className="lead">
            AskFlow is a real-time engagement platform for classrooms, seminars, conferences and events — live Q&amp;A, polls, quizzes, word clouds and now <b>location-based attendance</b>, all from a single room code.
          </p>
          <div className="hero-actions">
            <a className="btn btn-ghost" href="#features">Explore features</a>
          </div>
          <div className="hero-meta">
            <div className="item"><span className="dot"></span> Real-time, zero page refresh</div>
            <div className="item"><span className="dot" style={{ background: "var(--indigo-500)", boxShadow: "0 0 0 4px rgba(99,102,241,.16)" }}></span> Anonymous or named join</div>
          </div>
        </div>
        <div className="hero-visual">
          <HeroMock />
        </div>
      </div>
    </section>
  );
}

function HeroMock() {
  const bars = [
    { label: "Hands-on workshop", pct: 62, win: true },
    { label: "Panel discussion", pct: 26 },
    { label: "Lightning talks", pct: 12 },
  ];
  return (
    <div className="mock">
      <div className="float-card float-1">
        <span className="ic" style={{ background: "var(--indigo-50)", color: "var(--indigo-600)" }}><Icon name="thumbsUp" size={18} stroke={2.2} /></span>
        <div><div className="ft">Live votes</div><div className="fv">1,284</div></div>
      </div>
      <div className="float-card float-2">
        <span className="ic" style={{ background: "#f0fdf4", color: "#16a34a" }}><Icon name="check" size={18} stroke={2.2} /></span>
        <div><div className="ft">Checked in</div><div className="fv">96 present</div></div>
      </div>

      <div className="mock-top">
        <span className="mock-room">ROOM · <b>482 9137</b></span>
        <span className="mock-live"><span className="dot"></span> 142 live</span>
      </div>
      <div className="mock-q">
        <span className="label">Live Poll</span>
        <h4>Which session should we run next?</h4>
        <div className="bars">
          {bars.map((b, i) => (
            <div key={i} className={"bar" + (b.win ? " win" : "")}>
              <div className="fill" style={{ right: (100 - b.pct) + "%" }}></div>
              <div className="row"><span>{b.label}</span><span>{b.pct}%</span></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mock-foot">
        <div className="mock-input">Ask a question…</div>
        <div className="mock-send"><Icon name="send" size={18} stroke={2.2} /></div>
      </div>
    </div>
  );
}

function Strip() {
  return (
    <div className="strip">
      <div className="container strip-inner">
        <span className="lbl">Built for</span>
        {STRIP.map((s) => <span key={s}>{s}</span>)}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro-grid">
          <div className="section-head">
            <span className="eyebrow">What is AskFlow</span>
            <h2>Engagement that doesn't interrupt the speaker.</h2>
            <p>Participants join in seconds with a room code or QR — no app, no signup — then ask, vote and answer live while the host runs everything from one dashboard.</p>
          </div>
          <figure className="media-frame tag-frame" data-cap="Live participation, in the room">
            <img src="app/img/hands-up.jpg" alt="Students raising hands to participate in a classroom session" loading="lazy" />
          </figure>
        </div>
        <div className="stats">
          {STATS.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="lab">{s.lab}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="overview">
      <div className="container">
        <div className="showcase-head">
          <span className="eyebrow">One workspace</span>
          <h2>Every interaction, on one dashboard.</h2>
          <p>Q&amp;A, polls, quizzes, word clouds, QR join, leaderboards and location-based attendance — the host runs it all from a single live view.</p>
        </div>
        <figure className="showcase-frame">
          <img src="app/img/platform-overview.png" alt="AskFlow dashboard surrounded by its core features: live Q&amp;A, polls, quizzes, QR join, location attendance and leaderboards" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="mv-grid">
          <div className="mv-card">
            <div className="mv-ic" style={{ background: "var(--indigo-50)", color: "var(--indigo-600)" }}><Icon name="target" size={24} /></div>
            <h3>Our Mission</h3>
            <p>Make every presentation a two-way conversation — every participant heard, every presenter informed in real time.</p>
          </div>
          <div className="mv-card dark">
            <div className="mv-ic" style={{ background: "rgba(99,102,241,.22)", color: "#c7d2fe" }}><Icon name="eye" size={24} /></div>
            <h3>Our Vision</h3>
            <p>A world where engagement is measurable, inclusive and effortless — for any room, anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" style={{ background: "var(--slate-50)", borderBlock: "1px solid var(--slate-200)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Core Features</span>
          <h2>Everything you need to run a live, interactive session.</h2>
        </div>
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div className="feat" key={i}>
              <div className="ic"><Icon name={f.icon} size={22} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Strip, Intro, Showcase, Mission, Features });
