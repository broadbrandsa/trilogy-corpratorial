import RevealManager from "@/components/RevealManager";
import { JointVentureSection } from "@/components/DeckSections";
import { CorpratorialHeader, CorpratorialFooter } from "@/components/CorpratorialChrome";
import { awards } from "@/lib/content";

/**
 * Trilogy Digital — the Trilogy BPO / CXG joint venture, on its own page.
 * Presents the client's "Trilogy Digital Overview" document (company overview,
 * why, what we do, footprint, offerings, proprietary AI suite, security,
 * awards) alongside the "Two leaders" JV block, in the Corpratorial palette:
 * white / navy #0E1B2A / deep-green #0E7C46, bright green #2FE85C on dark.
 *
 * All Trilogy-Digital-specific content and styling is kept inside this file so
 * the rest of the site is untouched.
 */

const INK = "#0E1B2A";
const GREEN = "#0E7C46";
const BRIGHT = "#2FE85C";
const MIST = "#F4F7F9";
const BORDER = "rgba(14,27,42,.1)";
const MUTED = "rgba(14,27,42,.64)";

// Content from the "Trilogy Digital Overview" document — local to this page.
const td = {
  tagline: "A Trilogy Group company · Human led · Ai-enabled",
  overview: {
    kicker: "Company overview",
    headline: "A purpose-built CX venture for the UK market.",
    body: [
      "Trilogy Digital (Pty) Ltd is a purpose-built customer experience joint venture between Trilogy BPO and CXG. Operating as a single integrated entity, it marries CXG's 27-year operational tenure and scale in the South African market with Trilogy's deep expertise in managing UK campaigns and delivering advanced digital and AI capabilities. Purpose-built to serve the UK outsourcing market from South Africa, it combines the distinct strengths of both organisations into a superior offering.",
      "The combined leadership team brings over 25 years of industry expertise, having established and successfully exited two major BPOs. Between them they have managed more than 36 contact-centre operations, scaled over 10,000 seats globally, and delivered CX programmes for iconic brands including John Lewis & Partners, British Gas, Vodafone UK, Aldi UK and Virgin. Today Trilogy Digital deploys over 1,000 CX specialists across five operational sites in South Africa, anchored by its flagship campus at Mutual Park in Cape Town.",
      "Despite this scale and proven track record, Trilogy Digital remains an owner-led, high-touch business. Clients collaborate directly with the seasoned executives who built the company, guaranteeing a highly personalised approach — world-class, innovative solutions without losing the personal touch that drives successful customer relationships.",
    ],
    stats: [
      { value: "25+ yrs", label: "UK-market heritage" },
      { value: "1,000+ / 1,400+", label: "Current / 24-mo scalable FTE" },
      { value: "40–60%", label: "Cost saving vs UK onshore" },
      { value: "6", label: "Proprietary AI platforms" },
    ],
  },
  why: {
    kicker: "Why Trilogy",
    headline: "Human empathy, with Ai efficiency.",
    points: [
      "Premium, boutique customer service, back-office and tech-support BPO partner.",
      "Enterprise-ready and Ai-enabled.",
      "High-quality, owner-led, high-touch delivery that competes on quality first and cost second.",
      "The scale, technology and client portfolio to prove it.",
    ],
  },
  whatWeDo: {
    kicker: "Full-spectrum CX",
    headline: "What we do.",
    body: "We operate across the entire CX spectrum — inbound service, complaints, back-office, sales and retention. Every programme moves contacts from voice, to digital, to AI-autonomous.",
    points: [
      "Omnichannel — voice, WhatsApp, chat, email, social",
      "Complaints intelligence — 5-layer root-cause model",
      "RPA back-office — 40–60% labour reduction",
      "AI-assisted retention — automated save & churn prevention",
      "ITIL 4 helpdesk — L1 / L2 / L3 tiered support",
    ],
  },
  footprint: {
    kicker: "Our footprint",
    headline: "Five sites, two cities.",
    sites: [
      { name: "Mutual Park, Cape Town", detail: "Primary UK site · 5-star green campus" },
      { name: "Century City, Cape Town", detail: "150+ FTE · scalable to 300" },
      { name: "Rosebank Quarters, Johannesburg", detail: "200+ FTE · scalable to 400" },
      { name: "Maharishi Institute, Johannesburg", detail: "Scalable to 200 FTE" },
      { name: "National work-from-home layer", detail: "Flexible surge capacity" },
    ],
  },
  offerings: [
    { name: "Trilogy BPO", tagline: "Your contract, your choice", body: "Outsource your contact centre to Trilogy in South Africa. Modern technology platforms in a ready state — just add humans — spanning voice, digital channels and AI-powered automation at significantly reduced cost." },
    { name: "Trilogy GCC", tagline: "Build your own", body: "Build your own capability centre in South Africa with our guidance. Our DBIT (Design, Build, Innovate, Transfer) model delivers 20–30% savings versus traditional outsourcing while you retain complete control." },
    { name: "Trilogy Ai", tagline: "Platform access", body: "License our award-winning AI-enabled digital and autonomous platforms for service, sales, marketing and collections — always deployed human-in-the-loop." },
  ],
  aiSuite: {
    kicker: "Proprietary AI suite",
    headline: "Six platforms, built in-house.",
    intro: "Six AI platforms developed and owned by Trilogy — not white-labelled third-party tools.",
    platforms: [
      { name: "guruvoice.ai", body: "Autonomous AI voice, inbound and outbound." },
      { name: "agentpilot.ai", body: "Real-time agent assist and guidance." },
      { name: "acwa.ai", body: "After-call work automation." },
      { name: "retain.ai", body: "Automated churn and retention offers." },
      { name: "collect.ai", body: "Digital, autonomous collections." },
      { name: "hire.ai", body: "Intelligent recruitment and onboarding." },
    ],
  },
  security: {
    kicker: "Technology, AI & security",
    headline: "A secure, cloud-native extension of your operation.",
    body: "We are technology-agnostic and act as a virtual operational extension of your existing operations and technology platform, delivered as an offshore service. Our systems are 100% cloud-hosted on Microsoft Azure (UK South / West).",
    points: [
      "ISO 27001 and PCI DSS certified",
      "Cyber Essentials+ aligned, with Huntress EPP across all endpoints",
      "Fully compliant with UK GDPR and POPIA",
      "Technology partnerships with Infobip, AWS, Azure and Zendesk",
      "System integration and development partnerships with BBD and Codified",
    ],
  },
} as const;

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

const wrap: React.CSSProperties = { maxWidth: 1180, margin: "0 auto", padding: "92px 28px" };
const kickerStyle = mono({ fontSize: 13, letterSpacing: ".18em", color: GREEN });
const h2Style: React.CSSProperties = {
  margin: "16px 0 0",
  maxWidth: "20ch",
  fontSize: "clamp(30px,4.4vw,52px)",
  fontWeight: 200,
  lineHeight: 1.05,
  letterSpacing: "-.02em",
  color: INK,
  textWrap: "balance",
};

// Responsive rules for this page's custom grids, kept local to the page.
const pageCss = `
.td-overview { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
.td-do { display: grid; grid-template-columns: repeat(5,1fr); gap: 14px; }
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

      {/* hero band */}
      <section style={{ position: "relative", zIndex: 10, background: INK, color: "#fff", overflow: "hidden" }}>
        <span
          aria-hidden
          className="anim-floaty"
          style={{
            position: "absolute",
            right: "-8vw",
            top: "-6vh",
            zIndex: 0,
            userSelect: "none",
            pointerEvents: "none",
            fontFamily: "var(--font-mono)",
            fontSize: "40vw",
            lineHeight: 1,
            color: "rgba(255,255,255,.03)",
            animation: "trilogy-floaty 12s ease-in-out infinite",
          }}
        >
          三
        </span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "128px 28px 104px" }}>
          <div className="rise" style={mono({ fontSize: 13, letterSpacing: ".22em", color: BRIGHT })}>
            {td.tagline}
          </div>
          <h1
            className="rise"
            style={{
              margin: "22px 0 0",
              maxWidth: "14ch",
              fontSize: "clamp(44px,8vw,92px)",
              fontWeight: 200,
              lineHeight: 0.98,
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            Trilogy <span style={{ color: BRIGHT }}>Digital.</span>
          </h1>
          <p
            className="rise"
            style={{ margin: "26px 0 0", maxWidth: "58ch", fontSize: 18, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,.78)" }}
          >
            Trilogy and DSG/CXG, together as one digital-first customer-experience operation within the Trilogy Group.
          </p>
        </div>
      </section>

      {/* company overview + headline stats */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <div className="rise">
            <div style={kickerStyle}>{td.overview.kicker}</div>
            <h2 style={h2Style}>{td.overview.headline}</h2>
          </div>
          <div className="rise td-overview" style={{ marginTop: 40 }}>
            {td.overview.body.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 15.5, fontWeight: 300, lineHeight: 1.7, color: MUTED }}>
                {p}
              </p>
            ))}
          </div>
          <div
            className="rise t-4"
            style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}
          >
            {td.overview.stats.map((s) => (
              <div key={s.label} style={{ borderRadius: 12, padding: "26px 22px", background: MIST, border: `1px solid ${BORDER}` }}>
                <div style={mono({ fontSize: "clamp(24px,2.6vw,34px)", fontWeight: 700, letterSpacing: "-.02em", color: GREEN })}>{s.value}</div>
                <div style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.45, color: MUTED }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why Trilogy */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <div className="rise">
            <div style={kickerStyle}>{td.why.kicker}</div>
            <h2 style={h2Style}>{td.why.headline}</h2>
          </div>
          <div
            className="rise t-2"
            style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {td.why.points.map((p) => (
              <div
                key={p}
                style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "20px 22px", borderRadius: 12, background: "#fff", border: `1px solid ${BORDER}` }}
              >
                <span style={{ marginTop: 8, flex: "none", width: 7, height: 7, borderRadius: 999, background: BRIGHT }} />
                <span style={{ fontSize: 15.5, lineHeight: 1.6, color: INK }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we do — full-spectrum CX */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <div className="rise">
            <div style={kickerStyle}>{td.whatWeDo.kicker}</div>
            <h2 style={h2Style}>{td.whatWeDo.headline}</h2>
            <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 16.5, fontWeight: 300, lineHeight: 1.7, color: MUTED }}>
              {td.whatWeDo.body}
            </p>
          </div>
          <ul className="rise td-do" style={{ listStyle: "none", margin: "40px 0 0", padding: 0 }}>
            {td.whatWeDo.points.map((p) => (
              <li key={p} style={{ padding: "22px 20px", borderRadius: 12, background: MIST, border: `1px solid ${BORDER}`, fontSize: 14.5, lineHeight: 1.55, color: INK }}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* the joint venture — two leaders, one purpose */}
      <JointVentureSection variant="corporate" />

      {/* our footprint — five sites, two cities */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <div className="rise">
            <div style={kickerStyle}>{td.footprint.kicker}</div>
            <h2 style={h2Style}>{td.footprint.headline}</h2>
          </div>
          <div className="rise" style={{ marginTop: 40, display: "grid", gap: 0 }}>
            {td.footprint.sites.map((s, i) => (
              <div
                key={s.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "22px 0",
                  borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
                }}
              >
                <div style={mono({ fontSize: 13, letterSpacing: ".06em", color: GREEN, fontWeight: 600 })}>
                  {String(i + 1).padStart(2, "0")}
                </div>
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
          <div className="rise">
            <div style={kickerStyle}>Our offerings</div>
            <h2 style={h2Style}>Your journey, your choice.</h2>
          </div>
          <div className="rise t-3" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {td.offerings.map((o) => (
              <div key={o.name} className="lift" style={{ borderRadius: 12, overflow: "hidden", background: "#fff", border: `1px solid ${BORDER}` }}>
                <div style={mono({ background: GREEN, color: "#fff", padding: "12px 20px", fontSize: 13.5, letterSpacing: ".04em", textTransform: "none" })}>{o.name}</div>
                <div style={{ padding: 24 }}>
                  <div style={{ fontSize: 16.5, fontWeight: 600, color: INK }}>{o.tagline}</div>
                  <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.65, color: MUTED }}>{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* proprietary AI suite — navy band for emphasis */}
      <section style={{ background: INK, color: "#fff" }}>
        <div style={wrap}>
          <div className="rise">
            <div style={mono({ fontSize: 13, letterSpacing: ".18em", color: BRIGHT })}>{td.aiSuite.kicker}</div>
            <h2 style={{ ...h2Style, color: "#fff" }}>{td.aiSuite.headline}</h2>
            <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 16.5, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,.72)" }}>
              {td.aiSuite.intro}
            </p>
          </div>
          <div className="rise t-3" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {td.aiSuite.platforms.map((p) => (
              <div key={p.name} className="lift" style={{ borderRadius: 12, padding: 24, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)" }}>
                <div style={mono({ fontSize: 16, letterSpacing: ".01em", color: BRIGHT, textTransform: "none", fontWeight: 600 })}>{p.name}</div>
                <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* technology, AI & security */}
      <section style={{ borderTop: `1px solid ${BORDER}` }}>
        <div style={wrap}>
          <div className="rise">
            <div style={kickerStyle}>{td.security.kicker}</div>
            <h2 style={h2Style}>{td.security.headline}</h2>
            <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 16.5, fontWeight: 300, lineHeight: 1.7, color: MUTED }}>
              {td.security.body}
            </p>
          </div>
          <ul
            className="rise"
            style={{ listStyle: "none", margin: "36px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 0 }}
          >
            {td.security.points.map((p, i) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  padding: "18px 0",
                  borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  color: INK,
                }}
              >
                <span aria-hidden style={{ flex: "none", color: GREEN, fontWeight: 700, fontFamily: "var(--font-mono)" }}>+</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* awards */}
      <section style={{ borderTop: `1px solid ${BORDER}`, background: MIST }}>
        <div style={wrap}>
          <div className="rise">
            <div style={kickerStyle}>Recognised by the industry</div>
            <h2 style={h2Style}>A decade of award-winning delivery.</h2>
          </div>
          <div className="rise t-award" style={{ marginTop: 32, display: "grid", gap: 0 }}>
            {awards.map((a) => (
              <div
                key={a.year}
                className="t-award-row"
                style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, padding: "18px 0", borderTop: `1px solid ${BORDER}` }}
              >
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
