import Link from "next/link";
import { whitePapers, posts } from "@/lib/content";

type Variant = "editorial" | "warmth" | "corporate" | "motion";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

type Theme = {
  text: string;
  muted: string;
  accent: string;
  border: string;
  cardBg: string;
  cardHover: string;
  radius: number;
  weight: number;
};

const THEMES: Record<Variant, Theme> = {
  editorial: {
    text: "#F7F5F0",
    muted: "rgba(247,245,240,.6)",
    accent: "#2FE85C",
    border: "rgba(255,255,255,.1)",
    cardBg: "rgba(255,255,255,.02)",
    cardHover: "rgba(255,255,255,.05)",
    radius: 14,
    weight: 300,
  },
  motion: {
    text: "#F7F5F0",
    muted: "rgba(247,245,240,.6)",
    accent: "#2FE85C",
    border: "rgba(255,255,255,.1)",
    cardBg: "rgba(255,255,255,.02)",
    cardHover: "rgba(255,255,255,.05)",
    radius: 14,
    weight: 300,
  },
  warmth: {
    text: "#20201C",
    muted: "rgba(32,32,28,.62)",
    accent: "#15473A",
    border: "rgba(32,32,28,.08)",
    cardBg: "#fff",
    cardHover: "#fff",
    radius: 22,
    weight: 400,
  },
  corporate: {
    text: "#0E1B2A",
    muted: "rgba(14,27,42,.62)",
    accent: "#0E7C46",
    border: "rgba(14,27,42,.1)",
    cardBg: "#fff",
    cardHover: "#F4F7F9",
    radius: 12,
    weight: 400,
  },
};

export default function Insights({ variant }: { variant: Variant }) {
  const t = THEMES[variant];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 28px" }}>
      <div className="rise" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <div>
          <div style={mono({ fontSize: 13, letterSpacing: ".22em", color: t.accent })}>
            Industry insights
          </div>
          <h2
            style={{
              margin: "16px 0 0",
              maxWidth: "20ch",
              fontSize: "clamp(30px,4vw,50px)",
              fontWeight: t.weight === 400 ? 400 : 200,
              lineHeight: 1.05,
              letterSpacing: "-.02em",
              color: t.text,
            }}
          >
            White papers and perspectives.
          </h2>
        </div>
        <Link
          href="/corporate/insights"
          style={mono({
            fontSize: 12,
            letterSpacing: ".14em",
            color: t.accent,
            textDecoration: "none",
            paddingBottom: 6,
          })}
        >
          View all →
        </Link>
      </div>

      {/* white papers */}
      <div className="rise" style={{ marginTop: 40, borderTop: `1px solid ${t.border}` }}>
        {whitePapers.map((w) => (
          <a
            key={w.title}
            href="#"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 24,
              alignItems: "center",
              padding: "26px 4px",
              borderBottom: `1px solid ${t.border}`,
              textDecoration: "none",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={mono({ fontSize: 11, letterSpacing: ".14em", color: t.accent })}>
                  {w.meta}
                </span>
                <span style={mono({ fontSize: 11, letterSpacing: ".12em", color: t.muted })}>
                  {w.pages}
                </span>
              </div>
              <h3 style={{ margin: "10px 0 0", fontSize: "clamp(19px,2vw,24px)", fontWeight: t.weight, letterSpacing: "-.01em", color: t.text }}>
                {w.title}
              </h3>
              <p style={{ margin: "8px 0 0", maxWidth: "62ch", fontSize: 15, fontWeight: t.weight, lineHeight: 1.6, color: t.muted }}>
                {w.summary}
              </p>
            </div>
            <span
              aria-hidden
              style={mono({
                fontSize: 11,
                letterSpacing: ".14em",
                color: t.accent,
                whiteSpace: "nowrap",
              })}
            >
              Download ↓
            </span>
          </a>
        ))}
      </div>

      {/* blog / perspectives */}
      <div className="rise" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {posts.slice(0, 3).map((p) => (
          <Link
            key={p.title}
            href={`/corporate/insights/${p.slug}`}
            className="lift"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 24,
              borderRadius: t.radius,
              border: `1px solid ${t.border}`,
              background: t.cardBg,
              textDecoration: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <span style={mono({ fontSize: 11, letterSpacing: ".14em", color: t.accent })}>
                {p.category}
              </span>
              <span style={mono({ fontSize: 11, letterSpacing: ".1em", color: t.muted })}>
                {p.read}
              </span>
            </div>
            <h3 style={{ margin: "20px 0 0", flex: 1, fontSize: 19, fontWeight: t.weight, lineHeight: 1.3, letterSpacing: "-.01em", color: t.text }}>
              {p.title}
            </h3>
            <p style={{ margin: "12px 0 0", fontSize: 14, fontWeight: t.weight, lineHeight: 1.6, color: t.muted }}>
              {p.excerpt}
            </p>
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={mono({ fontSize: 11, letterSpacing: ".1em", color: t.muted })}>
                {p.date}
              </span>
              <span style={mono({ fontSize: 11, letterSpacing: ".14em", color: t.accent })}>
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
