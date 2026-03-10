import { useState, useEffect } from "react";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`;

const css = `
${FONTS}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #FAFAFA;
  color: #111;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* ── LAYOUT ── */
.shell { min-height: 100vh; display: flex; flex-direction: column; }

/* ── NAV ── */
.nav {
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #E8E8E8;
  display: flex;
  align-items: center;
  padding: 0 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  gap: 10px;
}
.nav-brand {
  font-size: 15px;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.3px;
}
.nav-brand em { font-style: normal; color: #4F6EF7; }
.nav-pill {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
  background: #EEF1FE;
  color: #4F6EF7;
}

/* ── HERO ── */
.hero {
  padding: 72px 32px 64px;
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #666;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.hero-eyebrow::before, .hero-eyebrow::after {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: #CCC;
}
.hero h1 {
  font-size: clamp(28px, 4.5vw, 40px);
  font-weight: 800;
  color: #0D0D0D;
  letter-spacing: -0.8px;
  line-height: 1.15;
  margin-bottom: 14px;
}
.hero h1 .accent { color: #4F6EF7; }
.hero p {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 1.65;
  max-width: 420px;
  margin: 0 auto;
}

/* ── FORM ── */
.form-container {
  max-width: 560px;
  margin: 0 auto;
  padding: 0 24px 80px;
}
.form-card {
  background: #fff;
  border: 1px solid #E8E8E8;
  border-radius: 16px;
  padding: 28px;
}
.field { margin-bottom: 18px; }
.field:last-of-type { margin-bottom: 0; }
.label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 7px;
}
.label .hint { font-weight: 400; color: #999; margin-left: 4px; }
textarea.input, input.input {
  width: 100%;
  padding: 11px 14px;
  font-family: inherit;
  font-size: 14px;
  color: #111;
  background: #FAFAFA;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  resize: none;
  line-height: 1.6;
}
textarea.input::placeholder, input.input::placeholder { color: #BBB; }
textarea.input:focus, input.input:focus {
  border-color: #4F6EF7;
  box-shadow: 0 0 0 3px rgba(79,110,247,0.10);
  background: #fff;
}

.row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 20px; }

.sel-wrap { position: relative; }
.sel-wrap select {
  width: 100%;
  appearance: none;
  padding: 10px 32px 10px 12px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: #222;
  background: #FAFAFA;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s;
}
.sel-wrap select:focus { border-color: #4F6EF7; background: #fff; }
.sel-arrow {
  position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
  pointer-events: none; color: #AAA; font-size: 11px;
}
.sel-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #999;
  margin-bottom: 6px;
}

.divider { height: 1px; background: #F0F0F0; margin: 20px 0; }

.cta {
  width: 100%;
  padding: 13px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.1px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.cta:hover:not(:disabled) { background: #222; transform: translateY(-1px); }
.cta:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
.cta .cta-arrow { font-size: 16px; transition: transform 0.15s; }
.cta:hover:not(:disabled) .cta-arrow { transform: translateX(3px); }

.error-msg {
  background: #FEF2F2;
  border: 1px solid #FECACA;
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 13px;
  color: #DC2626;
  margin-bottom: 16px;
}

/* ── LOADING ── */
.loading-container {
  max-width: 440px;
  margin: 80px auto;
  padding: 0 24px;
  text-align: center;
}
.loading-track {
  width: 100%;
  height: 2px;
  background: #EBEBEB;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 24px;
}
.loading-bar {
  height: 100%;
  background: #4F6EF7;
  border-radius: 2px;
  animation: slide 1.8s ease-in-out infinite;
}
@keyframes slide {
  0% { width: 0%; margin-left: 0; }
  50% { width: 60%; margin-left: 20%; }
  100% { width: 0%; margin-left: 100%; }
}
.loading-msg {
  font-size: 15px;
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
}
.loading-sub { font-size: 13px; color: #999; }

/* ── RESULTS ── */
.results-container {
  max-width: 680px;
  margin: 0 auto;
  padding: 32px 24px 80px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  gap: 12px;
}
.back-btn {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 600; color: #666;
  background: none; border: 1px solid #E0E0E0;
  border-radius: 8px; padding: 7px 13px;
  cursor: pointer; transition: all 0.15s;
  font-family: inherit;
}
.back-btn:hover { background: #F5F5F5; color: #333; }

/* PROGRESS STRIP */
.progress-strip {
  background: #fff;
  border: 1px solid #E8E8E8;
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.progress-head {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-bottom: 10px;
}
.progress-title { font-size: 13px; font-weight: 600; color: #444; }
.progress-count { font-size: 13px; font-weight: 700; color: #4F6EF7; }
.track { height: 5px; background: #F0F0F0; border-radius: 5px; overflow: hidden; }
.fill { height: 100%; background: #4F6EF7; border-radius: 5px; transition: width 0.4s ease; }

/* PLAN HEADER */
.plan-header {
  background: #fff;
  border: 1px solid #E8E8E8;
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 16px;
}
.plan-title {
  font-size: 20px;
  font-weight: 800;
  color: #0D0D0D;
  letter-spacing: -0.3px;
  margin-bottom: 6px;
}
.plan-summary {
  font-size: 14px;
  color: #666;
  line-height: 1.65;
  margin-bottom: 16px;
}
.meta-row { display: flex; flex-wrap: wrap; gap: 8px; }
.meta-chip {
  font-size: 12px;
  font-weight: 600;
  color: #555;
  background: #F5F5F5;
  border: 1px solid #EBEBEB;
  border-radius: 6px;
  padding: 4px 10px;
}

/* STAT ROW */
.stat-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 16px; }
.stat-box {
  background: #fff;
  border: 1px solid #E8E8E8;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}
.stat-n { font-size: 26px; font-weight: 800; color: #0D0D0D; letter-spacing: -0.5px; margin-bottom: 2px; }
.stat-l { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #AAA; }

/* PHASE */
.phase {
  background: #fff;
  border: 1px solid #E8E8E8;
  border-radius: 14px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: box-shadow 0.15s;
}
.phase:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }

.phase-head {
  display: flex; align-items: center; gap: 14px;
  padding: 18px 20px;
  cursor: pointer;
  user-select: none;
}
.phase-index {
  width: 28px; height: 28px;
  border-radius: 8px;
  background: #F2F2F2;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: #555;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}
.phase-index.done { background: #ECFDF5; color: #10B981; }
.phase-meta { flex: 1; }
.phase-name { font-size: 14px; font-weight: 700; color: #111; margin-bottom: 2px; }
.phase-weeks-lbl { font-size: 12px; color: #999; font-weight: 500; }
.phase-chevron {
  color: #CCC;
  font-size: 11px;
  transition: transform 0.2s;
}
.phase-chevron.open { transform: rotate(180deg); }

.phase-body { padding: 0 20px 20px; border-top: 1px solid #F5F5F5; }
.phase-desc { font-size: 13px; color: #777; line-height: 1.65; padding: 14px 0 16px; }

/* WEEK */
.week-list { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
.week-item {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #F0F0F0;
  background: #FAFAFA;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s;
}
.week-item:hover { background: #F5F5F5; border-color: #E5E5E5; }
.week-item.done { opacity: 0.5; }
.cb {
  width: 18px; height: 18px;
  border: 1.5px solid #DCDCDC;
  border-radius: 5px;
  flex-shrink: 0; margin-top: 1px;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; color: white;
  transition: all 0.12s;
}
.week-item.done .cb { background: #10B981; border-color: #10B981; }
.wi-content { flex: 1; }
.wi-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #BBB; margin-bottom: 3px; }
.wi-title { font-size: 13px; font-weight: 600; color: #111; margin-bottom: 3px; line-height: 1.4; }
.week-item.done .wi-title { text-decoration: line-through; color: #AAA; }
.wi-topics { font-size: 12px; color: #AAA; line-height: 1.5; }

/* RESOURCES */
.res-head { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #BBB; margin-bottom: 9px; }
.res-list { display: flex; flex-wrap: wrap; gap: 7px; }
.res-tag {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 500; color: #444;
  background: #F5F5F5;
  border: 1px solid #EBEBEB;
  border-radius: 6px;
  padding: 5px 10px;
}

@media(max-width:520px){
  .row3 { grid-template-columns: 1fr; }
  .stat-row { grid-template-columns: 1fr 1fr; }
  .hero { padding: 48px 20px 40px; }
  .nav { padding: 0 20px; }
}
`;

const RESOURCE_ICON = { course:"🎓", book:"📖", tool:"🔧", video:"▶", practice:"💪" };

const LOADING_MSGS = [
  "Analyzing your goal…",
  "Mapping prerequisite skills…",
  "Structuring phases and weeks…",
  "Sourcing resources…",
  "Finalizing your plan…",
];

export default function App() {
  const [form, setForm] = useState({ goal: "", months: "3", level: "beginner", style: "balanced" });
  const [view, setView]   = useState("form");   // form | loading | result | error
  const [roadmap, setRoadmap] = useState(null);
  const [msgIdx, setMsgIdx]   = useState(0);
  const [open, setOpen]       = useState({});
  const [done, setDone]       = useState({});
  const [errMsg, setErrMsg]   = useState("");

  useEffect(() => {
    if (view !== "loading") return;
    const iv = setInterval(() => setMsgIdx(i => (i+1) % LOADING_MSGS.length), 2000);
    return () => clearInterval(iv);
  }, [view]);

  const allWeeks   = roadmap ? roadmap.phases.flatMap(p => p.weeks) : [];
  const doneCount  = allWeeks.filter(w => done[w.id]).length;
  const pct        = allWeeks.length ? Math.round((doneCount / allWeeks.length) * 100) : 0;

  async function generate() {
    if (!form.goal.trim()) return;
    setView("loading"); setMsgIdx(0); setRoadmap(null); setDone({}); setOpen({});
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 3000,
          system: `You are an expert curriculum designer. Return ONLY valid JSON — no markdown, no backticks.
Schema:
{
  "title": "string",
  "summary": "1–2 sentence description",
  "totalWeeks": number,
  "hoursPerWeek": number,
  "phases": [
    {
      "id": "p1",
      "name": "string",
      "description": "2–3 sentences",
      "startWeek": 1,
      "endWeek": 3,
      "weeks": [
        { "id": "p1w1", "weekNum": 1, "title": "string", "topics": ["topic1","topic2","topic3"] }
      ],
      "resources": [
        { "type": "course|book|tool|video|practice", "name": "string" }
      ]
    }
  ]
}
Requirements: 3–5 phases, 2–5 weeks each, 3–4 topics per week, 3–5 real resources per phase.`,
          messages: [{
            role: "user",
            content: `Goal: ${form.goal}\nTimeframe: ${form.months} months\nLevel: ${form.level}\nStyle: ${form.style}`
          }],
        }),
      });
      const data   = await res.json();
      const raw    = data.content?.find(b => b.type === "text")?.text || "";
      const parsed = JSON.parse(raw.replace(/```json|```/g,"").trim());
      const firstOpen = {};
      parsed.phases.forEach((p,i) => { firstOpen[p.id] = i === 0; });
      setOpen(firstOpen);
      setRoadmap(parsed);
      setView("result");
    } catch {
      setErrMsg("Something went wrong. Try being more specific about your goal.");
      setView("error");
    }
  }

  const setField = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <>
      <style>{css}</style>
      <div className="shell">

        {/* NAV */}
        <nav className="nav">
          <span className="nav-brand">learn<em>path</em></span>
          <span className="nav-pill">Beta</span>
        </nav>

        {/* FORM / ERROR */}
        {(view === "form" || view === "error") && (
          <>
            <div className="hero">
              <div className="hero-eyebrow">AI Curriculum Builder</div>
              <h1>Go from goal to <span className="accent">roadmap</span><br/>in seconds.</h1>
              <p>Tell us what you want to learn. We'll build a structured, week-by-week plan with the right resources.</p>
            </div>

            <div className="form-container">
              <div className="form-card">
                <div className="field">
                  <label className="label">Your learning goal <span className="hint">— be specific</span></label>
                  <textarea className="input" rows={3}
                    placeholder='e.g. "Learn backend development with Node.js and become job-ready in 3 months"'
                    value={form.goal}
                    onChange={e => setField("goal", e.target.value)}
                  />
                </div>

                <div className="row3">
                  {[
                    { key:"months", label:"Timeframe",    opts:[["1","1 month"],["2","2 months"],["3","3 months"],["4","4 months"],["6","6 months"],["12","1 year"]] },
                    { key:"level",  label:"Current level", opts:[["complete beginner","Beginner"],["intermediate","Intermediate"],["advanced","Advanced"]] },
                    { key:"style",  label:"Style",         opts:[["balanced","Balanced"],["hands-on","Hands-on"],["structured","Structured"],["fast-track","Fast-track"]] },
                  ].map(({ key, label, opts }) => (
                    <div key={key}>
                      <span className="sel-label">{label}</span>
                      <div className="sel-wrap">
                        <select value={form[key]} onChange={e => setField(key, e.target.value)}>
                          {opts.map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                        </select>
                        <span className="sel-arrow">▾</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="divider" />
                {view === "error" && <div className="error-msg">{errMsg}</div>}
                <button className="cta" onClick={generate} disabled={!form.goal.trim()}>
                  Generate my learning path <span className="cta-arrow">→</span>
                </button>
              </div>
            </div>
          </>
        )}

        {/* LOADING */}
        {view === "loading" && (
          <div className="loading-container">
            <div className="loading-track"><div className="loading-bar" /></div>
            <div className="loading-msg">{LOADING_MSGS[msgIdx]}</div>
            <div className="loading-sub">Usually takes 10–20 seconds</div>
          </div>
        )}

        {/* RESULT */}
        {view === "result" && roadmap && (
          <div className="results-container">
            <div className="top-bar">
              <button className="back-btn" onClick={() => setView("form")}>← New goal</button>
            </div>

            <div className="plan-header">
              <div className="plan-title">{roadmap.title}</div>
              <div className="plan-summary">{roadmap.summary}</div>
              <div className="meta-row">
                <span className="meta-chip">{roadmap.totalWeeks} weeks</span>
                <span className="meta-chip">~{roadmap.hoursPerWeek}h / week</span>
                <span className="meta-chip">{form.level}</span>
                <span className="meta-chip">{form.style}</span>
              </div>
            </div>

            <div className="stat-row">
              {[["Phases", roadmap.phases.length],["Weeks", allWeeks.length],["Completed", doneCount]].map(([l,v]) => (
                <div className="stat-box" key={l}>
                  <div className="stat-n">{v}</div>
                  <div className="stat-l">{l}</div>
                </div>
              ))}
            </div>

            <div className="progress-strip">
              <div className="progress-head">
                <span className="progress-title">Overall progress</span>
                <span className="progress-count">{pct}%</span>
              </div>
              <div className="track"><div className="fill" style={{ width:`${pct}%` }} /></div>
            </div>

            {roadmap.phases.map((phase, pi) => {
              const isOpen    = open[phase.id];
              const phaseDone = phase.weeks.every(w => done[w.id]);
              return (
                <div className="phase" key={phase.id}>
                  <div className="phase-head" onClick={() => setOpen(o => ({ ...o, [phase.id]: !o[phase.id] }))}>
                    <div className={`phase-index ${phaseDone ? "done" : ""}`}>
                      {phaseDone ? "✓" : pi + 1}
                    </div>
                    <div className="phase-meta">
                      <div className="phase-name">{phase.name}</div>
                      <div className="phase-weeks-lbl">Weeks {phase.startWeek}–{phase.endWeek} · {phase.weeks.length} weeks</div>
                    </div>
                    <span className={`phase-chevron ${isOpen ? "open" : ""}`}>▾</span>
                  </div>

                  {isOpen && (
                    <div className="phase-body">
                      <div className="phase-desc">{phase.description}</div>

                      <div className="week-list">
                        {phase.weeks.map(w => (
                          <div key={w.id} className={`week-item ${done[w.id] ? "done" : ""}`}
                               onClick={() => setDone(d => ({ ...d, [w.id]: !d[w.id] }))}>
                            <div className="cb">{done[w.id] && "✓"}</div>
                            <div className="wi-content">
                              <div className="wi-label">Week {w.weekNum}</div>
                              <div className="wi-title">{w.title}</div>
                              <div className="wi-topics">{w.topics.join(" · ")}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {phase.resources?.length > 0 && (
                        <>
                          <div className="res-head">Resources</div>
                          <div className="res-list">
                            {phase.resources.map((r, ri) => (
                              <div key={ri} className="res-tag">
                                <span>{RESOURCE_ICON[r.type] || "📌"}</span> {r.name}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}