import type { ReactNode } from "react";
import RevealManager from "@/components/RevealManager";
import Counter from "@/components/Counter";
import { CorpratorialHeader, CorpratorialFooter } from "@/components/CorpratorialChrome";

/**
 * Trilogy Digital — content is taken verbatim from the client's
 * "Trilogy Digital Overview" document. Nothing on this page is sourced from
 * other pages of the site; only the visual styling (icons, animated stat
 * counters, cards, hover, timeline) has been designed around that copy.
 * Palette: white / navy #0E1B2A / deep-green #0E7C46, bright green #2FE85C on dark.
 */

const INK = "#0E1B2A";
const GREEN = "#0E7C46";
const BRIGHT = "#2FE85C";
const MIST = "#F4F7F9";
const BORDER = "rgba(14,27,42,.1)";
const MUTED = "rgba(14,27,42,.64)";

// Verbatim copy from the "Trilogy Digital Overview" document.
const td = {
  tagline: "A Trilogy Group Company · Human Led · Ai-enabled",
  overview: {
    title: "Company Overview",
    body: [
      "Trilogy Digital (Pty) Ltd is a purpose-built customer experience (CX) joint venture between Trilogy BPO and CXG. Operating as a single integrated entity, the partnership marries CXG's 27-year operational tenure and scale within the South African market to Trilogy's deep expertise in managing UK campaigns and delivering advanced digital and AI capabilities. Purpose-built to serve the UK outsourcing market from South Africa, the venture effectively combines the distinct strengths of both organizations to deliver a superior offering.",
      "The combined leadership team brings over 25 years of industry expertise, having previously established and successfully exited two major BPOs. Over their careers, they have managed more than 36 contact centre operations, scaled over 10,000 seats globally, and delivered CX programs for iconic brands like John Lewis & Partners, British Gas, Vodafone UK, Aldi UK, and Virgin. Today, Trilogy Digital deploys over 1,000 CX specialists across five operational sites in South Africa, anchored by its flagship campus at Mutual Park in Cape Town.",
      "Despite this impressive scale and proven track record, Trilogy Digital prides itself on remaining an owner-led, high-touch business. Clients collaborate directly with the seasoned executives who built the company, guaranteeing a highly personalized approach. This ensures that every partner receives world-class, innovative solutions without losing the valuable personal touch that drives successful customer relationships.",
    ],
    stats: [
      { value: "25+ Years", label: "UK-market heritage" },
      { value: "1,000+ / 1,400+", label: "Current / 24-mo scalable FTE" },
      { value: "40–60%", label: "Cost saving vs UK onshore" },
      { value: "6", label: "Proprietary AI platforms" },
    ],
  },
  why: {
    kicker: "Why Trilogy",
    title: "Human Empathy, with Ai Efficiency.",
    points: [
      "Premium (Boutique) Customer Service, Back Office and Tech Support BPO partner.",
      "Enterprise ready, Ai-enabled.",
      "High-quality, owner-led, high-touch delivery partner that competes on quality first and cost second.",
      "Scale, technology, and client portfolio to prove it.",
    ],
  },
  whatWeDo: {
    title: "What We Do — Full-Spectrum CX",
    body: "We operate across the entire CX spectrum — inbound service, complaints, back-office, sales and retention. Every programme moves contacts from voice to digital to AI-autonomous.",
    points: [
      "Omnichannel — voice, WhatsApp, chat, email, social",
      "Complaints Intelligence — 5-layer root cause model",
      "RPA back-office — 40–60% labour reduction",
      "AI-assisted retention — automated save & churn prevention",
      "ITIL 4 helpdesk — L1/L2/L3 tiered support",
    ],
  },
  footprint: {
    title: "Our Footprint — Five Sites, Two Cities",
    sites: [
      { name: "Mutual Park, Cape Town", detail: "primary UK site, 5-star green campus" },
      { name: "Century City, Cape Town", detail: "150+ FTE, scalable to 300" },
      { name: "Rosebank Quarters, Johannesburg", detail: "200+ FTE, scalable to 400" },
      { name: "Maharishi Institute, Johannesburg", detail: "scalable to 200 FTE" },
      { name: "National work-from-home layer", detail: "flexible surge capacity" },
    ],
  },
  offerings: [
    { name: "Trilogy BPO", tagline: "Your Contract, Your Choice", body: "Outsource your contact centre to Trilogy in South Africa. Modern technology platforms in a ready state — just add humans — spanning voice, digital channels and AI-powered automation at significantly reduced cost." },
    { name: "Trilogy GCC", tagline: "Build Your Own", body: "Build your own capability centre in South Africa with our guidance. Our DBIT (Design, Build, Innovate, Transfer) model delivers 20–30% savings vs. traditional outsourcing while you retain complete control." },
    { name: "Trilogy Ai", tagline: "Platform Access", body: 'License our award-winning AI-enabled digital and autonomous platforms for service, sales, marketing and collections — always deployed "human in the loop."' },
  ],
  aiSuite: {
    title: "Proprietary AI Suite — Built In-House",
    intro: "Six AI platforms developed and owned by Trilogy — not white-labelled third-party tools.",
    platforms: [
      { name: "guruvoice.ai", body: "autonomous AI voice (inbound & outbound)" },
      { name: "agentpilot.ai", body: "real-time agent assist & guidance" },
      { name: "acwa.ai", body: "after-call work automation" },
      { name: "retain.ai", body: "automated churn & retention offers" },
      { name: "collect.ai", body: "digital autonomous collections" },
      { name: "hire.ai", body: "intelligent recruitment & onboarding" },
    ],
  },
  security: {
    title: "Technology, AI & Security",
    body: "We are technology-agnostic and provide a virtual operational extension of your existing operations and technology platform as an offshore service offering. Our systems are 100% cloud hosting on Microsoft Azure (UK South/West).",
    points: [
      "We are ISO 27001 and PCI DSS certified",
      "Cyber Essentials+ aligned with Huntress EPP for all our end points",
      "Fully compliant with UK GDPR and POPIA",
      "Technology strategic partnerships with InfoBip, AWS, Azure, Zendesk",
      "System integration and dev partnership with BBD and Codified",
    ],
  },
  awards: [
    { year: "2016", items: "CCMG Best Outsourced Partnership Winner · BPESA Best Outsourced Winner" },
    { year: "2017", items: "BPESA / CCMG Best Outsourced Contact Centre, Best Use of Social Media & Technology Innovation" },
    { year: "2018–2019", items: "Best Outsourced Contact Centre Finalist · Best Outsourced Partnership (Engage UK) Finalist · BPESA Best Impact Sourcing & Service Provider Winner" },
    { year: "2021", items: "Contact Centre World, Best Partnership. Ranked #1 EMEA and #2 globally" },
    { year: "2022–2023", items: "BPESA Best Partnership & Shared Services Finalist · Cape BPO Top Technical Innovation Finalist · BPESA & Cape BPO National Top Service Provider Award Winner" },
    { year: "2025", items: "Cape BPO & BPESA Top Support Service Provider Finalist · BPESA Top BPO Operator Finalist & Runner-Up" },
  ],
} as const;

// Decorative inline SVG icons (styling only) — no emoji, consistent 1.6 stroke.
const ICONS: Record<string, ReactNode> = {
  gem: (
    <>
      <path d="M6 3h12l3 6-9 12L3 9z" />
      <path d="M3 9h18" />
      <path d="M9.5 3 8 9l4 12 4-12-1.5-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 14.6c2.2.2 3.9 1.7 4.5 4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21V11" />
      <path d="M12 21V4" />
      <path d="M18 21v-7" />
    </>
  ),
  channels: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </>
  ),
  insight: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.6-3.6" />
      <path d="M8.5 9h5M8.5 11h5M8.5 13h3" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  retention: <path d="M12 20S4 15 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z" />,
  headset: (
    <>
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <path d="M6 11h1v5H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z" />
      <path d="M18 11h-1v5h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z" />
      <path d="M18 16v1a3 3 0 0 1-3 3h-3" />
    </>
  ),
  voice: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </>
  ),
  assist: <path d="M4 4l6 16 2.5-6.5L19 11z" />,
  checklist: (
    <>
      <path d="M4 6l1.5 1.5L8 5" />
      <path d="M4 12l1.5 1.5L8 11" />
      <path d="M4 18l1.5 1.5L8 17" />
      <path d="M11 6h9M11 12h9M11 18h6" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  hire: (
    <>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M4 19c.6-3.4 2.9-5.2 6-5.2 1 0 1.9.2 2.7.5" />
      <path d="M18 14v6M15 17h6" />
    </>
  ),
};

const WHY_ICONS = ["gem", "shield", "people", "chart"];
const DO_ICONS = ["channels", "insight", "automation", "retention", "headset"];
const AI_ICONS = ["voice", "assist", "checklist", "retention", "coins", "hire"];

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      {ICONS[name]}
    </svg>
  );
}

function FeaturedIcon({ name, dark = false, size = 48 }: { name: string; dark?: boolean; size?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: 12,
        flex: "none",
        background: dark ? "rgba(47,232,92,.12)" : "rgba(14,124,70,.09)",
        color: dark ? BRIGHT : GREEN,
      }}
    >
      <Icon name={name} size={Math.round(size * 0.48)} />
    </span>
  );
}

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

const wrap: React.CSSProperties = { maxWidth: 1180, margin: "0 auto", padding: "104px 28px" };
const h2Style = (onDark = false): React.CSSProperties => ({
  margin: "18px 0 0",
  maxWidth: "22ch",
  fontSize: "clamp(30px,4vw,48px)",
  fontWeight: 200,
  lineHeight: 1.05,
  letterSpacing: "-.025em",
  color: onDark ? "#fff" : INK,
  textWrap: "balance",
});

function Head({ kicker, title, intro, onDark = false }: { kicker?: string; title: string; intro?: string; onDark?: boolean }) {
  return (
    <div className="rise">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span aria-hidden style={{ width: 30, height: 2, borderRadius: 2, background: onDark ? BRIGHT : GREEN }} />
        {kicker ? <div style={mono({ fontSize: 13, letterSpacing: ".2em", color: onDark ? BRIGHT : GREEN })}>{kicker}</div> : null}
      </div>
      <h2 style={h2Style(onDark)}>{title}</h2>
      {intro ? (
        <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 16.5, fontWeight: 300, lineHeight: 1.7, color: onDark ? "rgba(255,255,255,.72)" : MUTED }}>{intro}</p>
      ) : null}
    </div>
  );
}

// Page-local layout + interaction styling (styling only; no copy).
const pageCss = `
.td-overview { display:grid; grid-template-columns:1fr 1fr; gap:28px 44px; }
.td-why { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.td-do { display:grid; grid-template-columns:repeat(5,1fr); gap:16px; }
.td-offer { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.td-ai { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.td-check { display:grid; grid-template-columns:1fr 1fr; gap:12px; }

.td-stats { display:grid; grid-template-columns:repeat(4,1fr); border:1px solid rgba(14,27,42,.1); border-radius:16px; overflow:hidden; background:#fff; }
.td-stats > div { padding:30px 26px; border-left:1px solid rgba(14,27,42,.1); }
.td-stats > div:first-child { border-left:none; }

.td-card { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.td-card:hover { border-color: rgba(14,124,70,.4); }
.td-ai .td-card:hover { border-color: rgba(47,232,92,.45); }
@media (prefers-reduced-motion: no-preference) {
  .td-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(14,27,42,.10); }
  .td-ai .td-card:hover { box-shadow: 0 18px 40px rgba(0,0,0,.35); }
}

.td-site { position:relative; transition: background .2s ease; }
.td-site:hover { background: rgba(14,124,70,.05); }
.td-site::before { content:""; position:absolute; left:0; top:0; bottom:0; width:3px; background:#0E7C46; transform:scaleY(0); transform-origin:center; transition:transform .2s ease; }
.td-site:hover::before { transform:scaleY(1); }

.td-timeline { position:relative; margin-top:36px; padding-left:30px; }
.td-timeline::before { content:""; position:absolute; left:5px; top:12px; bottom:12px; width:2px; background:rgba(14,124,70,.22); }
.td-tl-item { position:relative; display:grid; grid-template-columns:160px 1fr; gap:24px; padding:22px 0; border-top:1px solid rgba(14,27,42,.1); }
.td-tl-item:first-child { border-top:none; }
.td-tl-dot { position:absolute; left:-30px; top:26px; width:12px; height:12px; border-radius:999px; background:#fff; border:2px solid #0E7C46; }

@media (max-width:900px){ .td-do{grid-template-columns:repeat(2,1fr);} .td-ai{grid-template-columns:repeat(2,1fr);} .td-offer{grid-template-columns:1fr;} }
@media (max-width:760px){
  .td-overview{grid-template-columns:1fr;} .td-why{grid-template-columns:1fr;} .td-check{grid-template-columns:1fr;}
  .td-stats{grid-template-columns:repeat(2,1fr);}
  .td-stats > div{ border-left:none; }
  .td-stats > div:nth-child(2){ border-left:1px solid rgba(14,27,42,.1); }
  .td-stats > div:nth-child(4){ border-left:1px solid rgba(14,27,42,.1); }
  .td-stats > div:nth-child(3), .td-stats > div:nth-child(4){ border-top:1px solid rgba(14,27,42,.1); }
  .td-tl-item{ grid-template-columns:1fr; gap:6px; }
}
@media (max-width:560px){ .td-do{grid-template-columns:1fr;} .td-ai{grid-template-columns:1fr;} }
@media (max-width:420px){ .td-stats{grid-template-columns:1fr;} .td-stats > div{border-left:none !important; border-top:1px solid rgba(14,27,42,.1);} .td-stats > div:first-child{border-top:none;} }
`;

export default function TrilogyDigitalPage() {
  return (
    <main style={{ position: "relative", minHeight: "100dvh", background: "#fff", color: INK, overflowX: "clip", fontFamily: "var(--font-sans)" }}>
      <style>{pageCss}</style>
      <RevealManager />
      <CorpratorialHeader />

      {/* hero */}
      <section style={{ position: "relative", zIndex: 10, background: INK, color: "#fff", overflow: "hidden" }}>
        <span aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(58% 75% at 82% 8%, rgba(47,232,92,.12), transparent 60%)" }} />
        <span
          aria-hidden
          className="anim-floaty"
          style={{ position: "absolute", right: "-8vw", top: "-6vh", zIndex: 0, userSelect: "none", pointerEvents: "none", fontFamily: "var(--font-mono)", fontSize: "40vw", lineHeight: 1, color: "rgba(255,255,255,.035)", animation: "trilogy-floaty 12s ease-in-out infinite" }}
        >
          三
        </span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "132px 28px 112px" }}>
          <div className="rise" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span aria-hidden style={{ width: 30, height: 2, borderRadius: 2, background: BRIGHT }} />
            <div style={mono({ fontSize: 13, letterSpacing: ".22em", color: BRIGHT })}>{td.tagline}</div>
          </div>
          <h1 className="rise" style={{ margin: "26px 0 0", maxWidth: "14ch", fontSize: "clamp(46px,8.5vw,96px)", fontWeight: 200, lineHeight: 0.96, letterSpacing: "-.035em", color: "#fff", textWrap: "balance" }}>
            Trilogy <span style={{ color: BRIGHT }}>Digital.</span>
          </h1>
        </div>
      </section>

      {/* company overview + stats */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <Head title={td.overview.title} />
          <p className="rise" style={{ margin: "36px 0 0", maxWidth: "68ch", fontSize: "clamp(18px,1.9vw,21px)", fontWeight: 300, lineHeight: 1.62, color: INK }}>
            {td.overview.body[0]}
          </p>
          <div className="rise td-overview" style={{ marginTop: 32 }}>
            {td.overview.body.slice(1).map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 15.5, fontWeight: 300, lineHeight: 1.7, color: MUTED }}>{p}</p>
            ))}
          </div>
          <div className="rise td-stats" style={{ marginTop: 52 }}>
            {td.overview.stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} style={{ ...mono({ fontSize: "clamp(26px,3vw,40px)", fontWeight: 700, letterSpacing: "-.02em", color: GREEN }), display: "block" }} />
                <div style={{ marginTop: 12, fontSize: 13.5, lineHeight: 1.45, color: MUTED }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why Trilogy */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <Head kicker={td.why.kicker} title={td.why.title} />
          <div className="rise td-why" style={{ marginTop: 44 }}>
            {td.why.points.map((p, i) => (
              <div key={p} className="td-card" style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: 28, borderRadius: 16, background: "#fff", border: `1px solid ${BORDER}` }}>
                <FeaturedIcon name={WHY_ICONS[i]} />
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.62, color: INK }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we do */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <Head title={td.whatWeDo.title} intro={td.whatWeDo.body} />
          <div className="rise td-do" style={{ marginTop: 44 }}>
            {td.whatWeDo.points.map((p, i) => (
              <div key={p} className="td-card" style={{ display: "flex", flexDirection: "column", padding: 24, borderRadius: 16, background: MIST, border: `1px solid ${BORDER}` }}>
                <FeaturedIcon name={DO_ICONS[i]} size={44} />
                <div style={{ marginTop: 18, fontSize: 14.5, lineHeight: 1.55, color: INK }}>{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our footprint */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <Head title={td.footprint.title} />
          <div className="rise" style={{ marginTop: 40, borderTop: `1px solid ${BORDER}` }}>
            {td.footprint.sites.map((s, i) => (
              <div key={s.name} className="td-site" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, alignItems: "center", padding: "26px 20px", borderBottom: `1px solid ${BORDER}` }}>
                <div style={mono({ fontSize: 26, fontWeight: 700, letterSpacing: "-.02em", color: "rgba(14,124,70,.3)", width: 40 })}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
                  <span style={{ fontSize: "clamp(20px,2.2vw,27px)", fontWeight: 400, letterSpacing: "-.015em", color: INK }}>{s.name}</span>
                  <span style={mono({ fontSize: 12, letterSpacing: ".08em", color: GREEN, background: "rgba(14,124,70,.08)", border: `1px solid rgba(14,124,70,.18)`, borderRadius: 999, padding: "6px 14px" })}>{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our offerings */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <Head title="Our Offerings" />
          <div className="rise td-offer" style={{ marginTop: 44 }}>
            {td.offerings.map((o, i) => (
              <div key={o.name} className="td-card" style={{ position: "relative", borderRadius: 16, overflow: "hidden", background: "#fff", border: `1px solid ${BORDER}`, borderTop: `3px solid ${GREEN}` }}>
                <div style={{ padding: "30px 28px 34px" }}>
                  <div aria-hidden style={mono({ position: "absolute", top: 20, right: 24, fontSize: 44, fontWeight: 700, lineHeight: 1, color: "rgba(14,124,70,.1)" })}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ margin: 0, fontSize: 24, fontWeight: 500, letterSpacing: "-.015em", color: INK }}>{o.name}</h3>
                  <div style={mono({ display: "inline-block", marginTop: 12, fontSize: 11.5, letterSpacing: ".1em", color: GREEN, background: "rgba(14,124,70,.08)", border: "1px solid rgba(14,124,70,.18)", borderRadius: 999, padding: "6px 12px" })}>{o.tagline}</div>
                  <p style={{ margin: "18px 0 0", fontSize: 14.5, lineHeight: 1.65, color: MUTED }}>{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* proprietary AI suite — navy band */}
      <section style={{ position: "relative", background: INK, color: "#fff", overflow: "hidden" }}>
        <span aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(50% 60% at 15% 0%, rgba(47,232,92,.08), transparent 60%)" }} />
        <div style={{ ...wrap, position: "relative", zIndex: 1 }}>
          <Head title={td.aiSuite.title} intro={td.aiSuite.intro} onDark />
          <div className="rise td-ai" style={{ marginTop: 48 }}>
            {td.aiSuite.platforms.map((p, i) => (
              <div key={p.name} className="td-card" style={{ borderRadius: 16, padding: 26, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)" }}>
                <FeaturedIcon name={AI_ICONS[i]} dark />
                <div style={mono({ marginTop: 18, fontSize: 16, letterSpacing: ".01em", color: BRIGHT, textTransform: "none", fontWeight: 600 })}>{p.name}</div>
                <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* technology, AI & security */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <Head title={td.security.title} intro={td.security.body} />
          <div className="rise td-check" style={{ marginTop: 44 }}>
            {td.security.points.map((p) => (
              <div key={p} className="td-card" style={{ display: "flex", gap: 16, alignItems: "center", padding: "20px 22px", borderRadius: 14, background: MIST, border: `1px solid ${BORDER}` }}>
                <FeaturedIcon name="shield" size={40} />
                <span style={{ fontSize: 15.5, lineHeight: 1.5, color: INK }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* awards */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <Head title="Awards" />
          <div className="rise td-timeline">
            {td.awards.map((a) => (
              <div key={a.year} className="td-tl-item">
                <span aria-hidden className="td-tl-dot" />
                <div style={mono({ fontSize: 14, letterSpacing: ".06em", color: GREEN, fontWeight: 600 })}>{a.year}</div>
                <div style={{ fontSize: 14.5, lineHeight: 1.6, color: MUTED }}>{a.items}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CorpratorialFooter />
    </main>
  );
}
