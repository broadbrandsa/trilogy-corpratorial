import type { ReactNode } from "react";
import RevealManager from "@/components/RevealManager";
import Counter from "@/components/Counter";
import { CorpratorialHeader, CorpratorialFooter } from "@/components/CorpratorialChrome";

/**
 * Trilogy Digital — content is taken verbatim from the client's
 * "Trilogy Digital Overview" document. Nothing on this page is sourced from
 * other pages of the site; only the visual styling (icons, animated stat
 * counters, cards, hover) has been designed around that copy.
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

function FeaturedIcon({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        borderRadius: 12,
        flex: "none",
        background: dark ? "rgba(47,232,92,.12)" : "rgba(14,124,70,.09)",
        color: dark ? BRIGHT : GREEN,
      }}
    >
      <Icon name={name} />
    </span>
  );
}

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

const wrap: React.CSSProperties = { maxWidth: 1180, margin: "0 auto", padding: "92px 28px" };
const h2Style = (onDark = false): React.CSSProperties => ({
  margin: "16px 0 0",
  maxWidth: "22ch",
  fontSize: "clamp(28px,3.8vw,46px)",
  fontWeight: 200,
  lineHeight: 1.06,
  letterSpacing: "-.02em",
  color: onDark ? "#fff" : INK,
  textWrap: "balance",
});

function Head({ kicker, title, intro, onDark = false }: { kicker?: string; title: string; intro?: string; onDark?: boolean }) {
  return (
    <div className="rise">
      {kicker ? <div style={mono({ fontSize: 13, letterSpacing: ".18em", color: onDark ? BRIGHT : GREEN })}>{kicker}</div> : null}
      <h2 style={h2Style(onDark)}>{title}</h2>
      {intro ? (
        <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 16.5, fontWeight: 300, lineHeight: 1.7, color: onDark ? "rgba(255,255,255,.72)" : MUTED }}>{intro}</p>
      ) : null}
    </div>
  );
}

// Page-local responsive grids + card hover (styling only).
const pageCss = `
.td-overview { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
.td-do { display: grid; grid-template-columns: repeat(5,1fr); gap: 14px; }
.td-card { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
@media (prefers-reduced-motion: no-preference) {
  .td-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(14,27,42,.1); }
}
.td-site { transition: background .2s ease; }
.td-site:hover { background: rgba(14,124,70,.05); }
@media (max-width: 900px) { .td-do { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 760px) { .td-overview { grid-template-columns: 1fr; } }
@media (max-width: 560px) { .td-do { grid-template-columns: 1fr; } }
`;

export default function TrilogyDigitalPage() {
  return (
    <main style={{ position: "relative", minHeight: "100dvh", background: "#fff", color: INK, overflowX: "clip", fontFamily: "var(--font-sans)" }}>
      <style>{pageCss}</style>
      <RevealManager />
      <CorpratorialHeader />

      {/* hero */}
      <section style={{ position: "relative", zIndex: 10, background: INK, color: "#fff", overflow: "hidden" }}>
        <span
          aria-hidden
          className="anim-floaty"
          style={{ position: "absolute", right: "-8vw", top: "-6vh", zIndex: 0, userSelect: "none", pointerEvents: "none", fontFamily: "var(--font-mono)", fontSize: "40vw", lineHeight: 1, color: "rgba(255,255,255,.03)", animation: "trilogy-floaty 12s ease-in-out infinite" }}
        >
          三
        </span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "128px 28px 104px" }}>
          <div className="rise" style={mono({ fontSize: 13, letterSpacing: ".22em", color: BRIGHT })}>{td.tagline}</div>
          <h1 className="rise" style={{ margin: "22px 0 0", maxWidth: "14ch", fontSize: "clamp(44px,8vw,92px)", fontWeight: 200, lineHeight: 0.98, letterSpacing: "-.03em", color: "#fff", textWrap: "balance" }}>
            Trilogy <span style={{ color: BRIGHT }}>Digital.</span>
          </h1>
        </div>
      </section>

      {/* company overview + stats */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <Head title={td.overview.title} />
          <div className="rise td-overview" style={{ marginTop: 40 }}>
            {td.overview.body.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 15.5, fontWeight: 300, lineHeight: 1.7, color: MUTED }}>{p}</p>
            ))}
          </div>
          <div className="rise t-4" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {td.overview.stats.map((s) => (
              <div key={s.label} className="td-card" style={{ borderRadius: 12, padding: "26px 22px", background: MIST, border: `1px solid ${BORDER}` }}>
                <Counter value={s.value} style={{ ...mono({ fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 700, letterSpacing: "-.02em", color: GREEN }), display: "block" }} />
                <div style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.45, color: MUTED }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why Trilogy */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <Head kicker={td.why.kicker} title={td.why.title} />
          <div className="rise t-2" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {td.why.points.map((p, i) => (
              <div key={p} className="td-card" style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: 26, borderRadius: 14, background: "#fff", border: `1px solid ${BORDER}` }}>
                <FeaturedIcon name={WHY_ICONS[i]} />
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: INK }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we do */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <Head title={td.whatWeDo.title} intro={td.whatWeDo.body} />
          <div className="rise td-do" style={{ marginTop: 40 }}>
            {td.whatWeDo.points.map((p, i) => (
              <div key={p} className="td-card" style={{ padding: 22, borderRadius: 14, background: MIST, border: `1px solid ${BORDER}` }}>
                <span style={{ color: GREEN, display: "block" }}><Icon name={DO_ICONS[i]} size={24} /></span>
                <div style={{ marginTop: 16, fontSize: 14.5, lineHeight: 1.55, color: INK }}>{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our footprint */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <Head title={td.footprint.title} />
          <div className="rise" style={{ marginTop: 36, borderTop: `1px solid ${BORDER}` }}>
            {td.footprint.sites.map((s, i) => (
              <div key={s.name} className="td-site" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "baseline", padding: "22px 16px", borderBottom: `1px solid ${BORDER}` }}>
                <div style={mono({ fontSize: 13, letterSpacing: ".06em", color: GREEN, fontWeight: 600 })}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ fontSize: "clamp(19px,2.2vw,26px)", fontWeight: 400, letterSpacing: "-.01em", color: INK }}>{s.name}</span>
                  <span style={{ fontSize: 14.5, color: MUTED }}>{s.detail}</span>
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
          <div className="rise t-3" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {td.offerings.map((o, i) => (
              <div key={o.name} className="td-card" style={{ borderRadius: 14, overflow: "hidden", background: "#fff", border: `1px solid ${BORDER}`, borderTop: `3px solid ${GREEN}` }}>
                <div style={{ padding: 28 }}>
                  <div style={mono({ fontSize: 12, letterSpacing: ".14em", color: GREEN })}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ margin: "14px 0 0", fontSize: 22, fontWeight: 500, letterSpacing: "-.01em", color: INK }}>{o.name}</h3>
                  <div style={{ marginTop: 6, fontSize: 15, fontWeight: 600, color: GREEN }}>{o.tagline}</div>
                  <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.65, color: MUTED }}>{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* proprietary AI suite — navy band */}
      <section style={{ background: INK, color: "#fff" }}>
        <div style={wrap}>
          <Head title={td.aiSuite.title} intro={td.aiSuite.intro} onDark />
          <div className="rise t-3" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {td.aiSuite.platforms.map((p, i) => (
              <div key={p.name} className="td-card" style={{ borderRadius: 14, padding: 24, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)" }}>
                <FeaturedIcon name={AI_ICONS[i]} dark />
                <div style={mono({ marginTop: 16, fontSize: 16, letterSpacing: ".01em", color: BRIGHT, textTransform: "none", fontWeight: 600 })}>{p.name}</div>
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
          <ul className="rise" style={{ listStyle: "none", margin: "36px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
            {td.security.points.map((p, i) => (
              <li key={p} style={{ display: "flex", gap: 14, alignItems: "center", padding: "16px 0", borderTop: i === 0 ? "none" : `1px solid ${BORDER}`, fontSize: 15.5, lineHeight: 1.5, color: INK }}>
                <span style={{ flex: "none", color: GREEN }}><Icon name="shield" size={20} /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* awards */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <Head title="Awards" />
          <div className="rise" style={{ marginTop: 32, display: "grid", gap: 0 }}>
            {td.awards.map((a) => (
              <div key={a.year} className="t-award-row" style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, padding: "18px 0", borderTop: `1px solid ${BORDER}` }}>
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
