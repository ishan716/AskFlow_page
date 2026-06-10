// ============ BOTTOM SECTIONS ============

function Location() {
  return (
    <section id="location">
      <div className="container">
        <div className="loc">
          <div className="loc-inner">
            <div>
              <span className="badge-new">★ New Feature</span>
              <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>Location-Based Attendance</span>
              <h2>Attendance that marks itself.</h2>
              <p>Join a room, share location once — if you're near the venue, you're marked <b style={{ color: "#fff" }}>present</b>. No roll call.</p>
              <ul className="loc-points">
                {LOC_POINTS.map((p, i) => (
                  <li key={i}>
                    <span className="n"><Icon name={p.icon} size={15} stroke={2.2} /></span>
                    <span>
                      <b>{p.title}</b><br />
                      <span className="t">{p.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="loc-visual">
              <div className="phone">
                <div className="phone-screen">
                  <div className="map">
                    <div className="geo"></div>
                    <div className="pin">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="#fff" strokeWidth="1.5">
                        <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
                        <circle cx="12" cy="9" r="2.5" fill="#fff" stroke="none" />
                      </svg>
                    </div>
                  </div>
                  <div className="phone-body">
                    <div className="ttl">Engineering Lecture · Hall B</div>
                    <div className="sub">Within 50 m of the venue</div>
                    <div className="checkin">
                      <span className="ck"><Icon name="check" size={16} stroke={2.6} /></span>
                      <div className="ct"><b>You're marked present</b><span>Checked in at 10:02 AM</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" style={{ background: "var(--slate-50)", borderBlock: "1px solid var(--slate-200)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From room code to live engagement in four steps.</h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={i}>
              <div className="si"><Icon name={s.icon} size={20} /></div>
              <div className="sn">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Requirements() {
  const [expanded, setExpanded] = useState({});
  const totalFR = FUNCTIONAL.reduce((sum, g) => sum + g.items.length, 0);
  
  const toggleGroup = (i) => {
    setExpanded(prev => ({
      ...prev,
      [i]: !prev[i]
    }));
  };
  
  return (
    <section id="functional" className="req-zone">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Project Requirements</span>
          <h2>What we'll build — and how well it performs.</h2>
          <p>The complete functional and non-functional scope for AskFlow, written so clients can verify every commitment.</p>
        </div>
        <div className="req-zone-stats">
          <div className="rs"><div className="n">{totalFR}</div><div className="l">Functional requirements</div></div>
          <div className="rs"><div className="n">{FUNCTIONAL.length}</div><div className="l">Functional modules</div></div>
          <div className="rs"><div className="n">{NFR.length}</div><div className="l">Quality attributes</div></div>
        </div>

        {/* Functional */}
        <div className="req-subhead">
          <span className="si"><Icon name="grid" size={22} /></span>
          <div>
            <div className="ix">Part A · Functional</div>
            <h3>What the system does</h3>
          </div>
          <span className="rule"></span>
        </div>
        <div className="req-wrap">
          {FUNCTIONAL.map((g, i) => (
            <div className="req-group" key={i}>
              <div className="req-head" style={{ cursor: 'pointer' }} onClick={() => toggleGroup(i)}>
                <span className="ic"><Icon name={g.icon} size={20} /></span>
                <div>
                  <div className="tag">{g.tag}</div>
                  <h3>{g.title}</h3>
                </div>
                <span className="count-pill">{g.items.length} requirements</span>
                <span style={{ marginLeft: 'auto', fontSize: '20px', transition: 'transform 0.3s' }}>
                  {expanded[i] ? '−' : '+'}
                </span>
              </div>
              {expanded[i] && (
                <div className="req-list">
                  {g.items.map(([id, html]) => (
                    <div className="ritem" key={id}>
                      <span className="rid">{id}</span>
                      <span className="rtx" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Non-functional */}
        <div id="nonfunctional" className="req-subhead">
          <span className="si"><Icon name="shield" size={22} /></span>
          <div>
            <div className="ix">Part B · Non-Functional</div>
            <h3>How well the system performs</h3>
          </div>
          <span className="rule"></span>
        </div>
        <div className="nfr-grid">
          {NFR.map((n, i) => (
            <div className="nfr" key={i}>
              <div className="ic"><Icon name={n.icon} size={22} /></div>
              <div className="tag">{n.tag}</div>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Under the hood</span>
          <h2>A modern, production-ready stack.</h2>
        </div>
        <div className="tech">
          <div className="tech-grid">
            {TECH.map((col, i) => (
              <div className="tech-col" key={i}>
                <h4>{col.h}</h4>
                <div className="chips">
                  {col.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="usecases" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Where AskFlow fits</span>
          <h2>One platform, many rooms.</h2>
        </div>
        <div className="uc-grid">
          {USE_CASES.map((u, i) => (
            <div className="uc" key={i}>
              <span className="ic"><Icon name={u.icon} size={20} /></span>
              <div>
                <b>{u.title}</b>
                <span className="t">{u.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-inner">
            <h2>Ready to make your next session interactive?</h2>
            <p>Bring AskFlow to your classroom, conference or event — engagement and attendance, handled in one place.</p>
            <div className="actions">
              <a className="btn" href="#contact" style={{ background: "#fff", color: "var(--indigo-700)", borderColor: "#fff" }}>Request a demo</a>
              <a className="btn btn-light" href="#features">See all features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark"><Icon name="mic" size={18} /></span>
              AskFlow
            </a>
            <p>Real-time Q&amp;A, polls, quizzes, word clouds and location-based attendance for classrooms, seminars and events.</p>
          </div>
          <div className="foot-col">
            <h5>Product</h5>
            <a href="#features">Features</a>
            <a href="#location">Attendance</a>
            <a href="#how">How it works</a>
            <a href="#stack">Tech stack</a>
          </div>
          <div className="foot-col">
            <h5>Requirements</h5>
            <a href="#functional">Functional</a>
            <a href="#nonfunctional">Non-functional</a>
            <a href="#usecases">Use cases</a>
          </div>
          <div className="foot-col">
            <h5>Get in touch</h5>
            <a href="#cta">Request a demo</a>
            <a href="mailto:hello@askflow.app">hello@askflow.app</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="mono">© 2026 AskFlow · Live Audience Interaction Platform</span>
          <span>Built for classrooms, seminars, workshops &amp; conferences.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Location, HowItWorks, Requirements, TechStack, UseCases, CTA, Footer,
});
