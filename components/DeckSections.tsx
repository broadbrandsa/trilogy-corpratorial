import Image from "next/image";
import BrandWall from "@/components/BrandWall";
import TechStack from "@/components/TechStack";
import SavingsCalculator from "@/components/SavingsCalculator";
import {
  teamIntro,
  execTeam,
  brands,
  savings,
  evp,
  evpPillars,
  jointVenture,
  locations,
  memberships,
  membershipsIntro,
  awardsIntro,
  accreditationLogos,
  awards,
  operate,
  achievements,
  aiOpportunities,
  techStack,
  pointSolutions,
  whySA,
} from "@/lib/content";

/* ------------------------------------------------------------------ *
 * Shared, theme-aware deck-content sections.
 * The editorial / warmth / motion homes drop these in to tell the
 * full deck story while keeping each direction's own aesthetic.
 * ------------------------------------------------------------------ */

export type DeckVariant = "editorial" | "warmth" | "motion" | "corporate";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

type Tokens = {
  maxW: number;
  text: string;
  muted: string;
  accent: string; // mask / highlight colour visible on the section background
  accentFill: string; // fill colour for solid accent blocks
  onAccent: string; // text colour on accentFill
  onAccentMuted: string; // secondary text colour on accentFill
  surface: string;
  surfaceBorder: string;
  band: string; // strong contrasting band (EVP only) — sets its own text
  tint: string; // soft alternating section background, default text stays legible
  bandText: string;
  bandMuted: string;
  kicker: string;
  radius: number;
  headWeight: number;
  hairline: string;
};

const T: Record<DeckVariant, Tokens> = {
  editorial: {
    maxW: 1180,
    text: "#F7F5F0",
    muted: "rgba(247,245,240,.66)",
    accent: "#2FE85C",
    accentFill: "#2FE85C",
    onAccent: "#0A0A0A",
    onAccentMuted: "rgba(10,10,10,.78)",
    surface: "rgba(255,255,255,.03)",
    surfaceBorder: "rgba(255,255,255,.12)",
    band: "rgba(255,255,255,.04)",
    tint: "rgba(255,255,255,.025)",
    bandText: "#F7F5F0",
    bandMuted: "rgba(247,245,240,.66)",
    kicker: "rgba(247,245,240,.45)",
    radius: 12,
    headWeight: 200,
    hairline: "rgba(255,255,255,.1)",
  },
  motion: {
    maxW: 1320,
    text: "#F7F5F0",
    muted: "rgba(247,245,240,.66)",
    accent: "#2FE85C",
    accentFill: "#2FE85C",
    onAccent: "#0A0A0A",
    onAccentMuted: "rgba(10,10,10,.78)",
    surface: "rgba(255,255,255,.03)",
    surfaceBorder: "rgba(255,255,255,.12)",
    band: "rgba(255,255,255,.04)",
    tint: "rgba(255,255,255,.025)",
    bandText: "#F7F5F0",
    bandMuted: "rgba(247,245,240,.66)",
    kicker: "rgba(247,245,240,.45)",
    radius: 12,
    headWeight: 200,
    hairline: "rgba(255,255,255,.1)",
  },
  warmth: {
    maxW: 1180,
    text: "#20201C",
    muted: "rgba(32,32,28,.66)",
    accent: "#15473A",
    accentFill: "#15473A",
    onAccent: "#FBF8F3",
    onAccentMuted: "rgba(251,248,243,.82)",
    surface: "#ffffff",
    surfaceBorder: "rgba(32,32,28,.1)",
    band: "#15473A",
    tint: "rgba(21,71,58,.05)",
    bandText: "#FBF8F3",
    bandMuted: "rgba(251,248,243,.72)",
    kicker: "rgba(32,32,28,.5)",
    radius: 16,
    headWeight: 400,
    hairline: "rgba(32,32,28,.1)",
  },
  // Corpratorial: editorial layout + thin type, recoloured in the corporate
  // palette (white / navy / deep-green). Light main background; the EVP band
  // flips to navy.
  corporate: {
    maxW: 1180,
    text: "#0E1B2A",
    muted: "rgba(14,27,42,.64)",
    accent: "#0E7C46",
    accentFill: "#0E7C46",
    onAccent: "#ffffff",
    onAccentMuted: "rgba(255,255,255,.85)",
    surface: "#ffffff",
    surfaceBorder: "rgba(14,27,42,.1)",
    band: "#0E1B2A",
    tint: "#F4F7F9",
    bandText: "#ffffff",
    bandMuted: "rgba(255,255,255,.7)",
    kicker: "rgba(14,27,42,.5)",
    radius: 12,
    headWeight: 200,
    hairline: "rgba(14,27,42,.1)",
  },
};

function wrap(t: Tokens, extra?: React.CSSProperties): React.CSSProperties {
  return { maxWidth: t.maxW, margin: "0 auto", padding: "92px 28px", ...extra };
}

function Head({
  t,
  kicker,
  title,
  intro,
  onBand,
}: {
  t: Tokens;
  kicker: string;
  title: string;
  intro?: string;
  onBand?: boolean;
}) {
  return (
    <div className="rise">
      <div style={mono({ fontSize: 13, letterSpacing: ".18em", color: t.accent })}>{kicker}</div>
      <h2
        style={{
          margin: "16px 0 0",
          maxWidth: "20ch",
          fontSize: "clamp(30px,4.4vw,56px)",
          fontWeight: t.headWeight,
          lineHeight: 1.04,
          letterSpacing: "-.02em",
          color: onBand ? t.bandText : t.text,
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
      {intro ? (
        <p
          style={{
            margin: "22px 0 0",
            maxWidth: "62ch",
            fontSize: 16.5,
            fontWeight: t.headWeight <= 300 ? 300 : 400,
            lineHeight: 1.7,
            color: onBand ? t.bandMuted : t.muted,
            textWrap: "pretty",
          }}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function IconMask({ src, color, size = 38 }: { src: string; color: string; size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        display: "block",
        width: size,
        height: size,
        marginBottom: 16,
        background: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/* ---- slide 3 · executive team ---- */
export function ExecTeamSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="Leadership" title="A team that has built this before." intro={teamIntro} />
        <div
          className="rise t-4"
          style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
        >
          {execTeam.map((m) => (
            <div key={m.name} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  borderRadius: t.radius,
                  overflow: "hidden",
                  background: t.surface,
                  border: `1px solid ${t.surfaceBorder}`,
                }}
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="person-photo"
                  sizes="(max-width: 680px) 100vw, 280px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 16, fontWeight: 600, color: t.text }}>{m.name}</h3>
              <div style={mono({ marginTop: 6, fontSize: 11, letterSpacing: ".1em", color: t.accent })}>{m.role}</div>
              <p style={{ margin: "10px 0 0", fontSize: 13.5, lineHeight: 1.55, color: t.muted }}>{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 4 · savings ---- */
export function SavingsSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="The economics" title="Stack the savings, layer by layer." />
        {/* Corpratorial: interactive calculator in place of the static cards. */}
        {variant === "corporate" ? (
          <div style={{ marginTop: 44 }}>
            <SavingsCalculator />
          </div>
        ) : (
        <div className="rise t-3" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {savings.map((s, i) => (
            <div
              key={s.label}
              style={{
                borderRadius: t.radius,
                padding: "32px 28px",
                background: i === 0 ? t.accentFill : t.surface,
                border: i === 0 ? "none" : `1px solid ${t.surfaceBorder}`,
                color: i === 0 ? t.onAccent : t.text,
              }}
            >
              <div style={mono({ fontSize: "clamp(34px,4vw,52px)", fontWeight: 700, letterSpacing: "-.02em" })}>{s.value}</div>
              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: i === 0 ? t.onAccentMuted : t.muted,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

/* ---- slide 5 · employee value proposition (band + six pillars) ---- */
const EVP_ICON_PATHS: Record<string, React.ReactNode> = {
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 14.6c2.2.2 3.9 1.7 4.5 4.4" />
    </>
  ),
  inclusive: (
    <>
      <circle cx="12" cy="5.5" r="2.2" />
      <circle cx="5.5" cy="17" r="2.2" />
      <circle cx="18.5" cy="17" r="2.2" />
      <path d="M10.7 7.4 6.6 15m6.7-7.6 4.1 7.6M7.7 17h8.6" />
    </>
  ),
  salary: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9.2c-.6-1-1.6-1.5-3-1.5-1.8 0-3 .9-3 2.2 0 3 6 1.6 6 4.5 0 1.3-1.2 2.2-3 2.2-1.4 0-2.4-.5-3-1.5M12 6v1.7M12 16.6v1.7" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 9 5.5c1.3 0 2.4.6 3 1.6.6-1 1.7-1.6 3-1.6a4.4 4.4 0 0 1 4.5 4.5c0 5.4-7.5 10-7.5 10Z" />
  ),
  growth: (
    <>
      <path d="M4 19 10 13l3.5 3.5L20 10" />
      <path d="M14.5 10H20v5.5" />
    </>
  ),
  star: (
    <path d="m12 4 2.4 5 5.6.7-4.1 3.8 1 5.5-4.9-2.7-4.9 2.7 1-5.5L4 9.7 9.6 9 12 4Z" />
  ),
};

export function EvpIcon({ kind, color }: { kind: string; color: string }) {
  return (
    <svg
      aria-hidden
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block", marginBottom: 14 }}
    >
      {EVP_ICON_PATHS[kind]}
    </svg>
  );
}

export function EvpSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  const pillarAccent = variant === "warmth" ? "#9FE7C0" : variant === "corporate" ? "#2FE85C" : t.accent;
  const onBandSurface = variant === "warmth" || variant === "corporate";
  return (
    <section style={{ background: t.band }}>
      <div style={wrap(t, { textAlign: "center" })}>
        <div className="rise">
          <div style={mono({ fontSize: 13, letterSpacing: ".18em", color: pillarAccent })}>{evp.kicker}</div>
          <h2
            style={{
              margin: "18px auto 0",
              maxWidth: "18ch",
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: t.headWeight,
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              color: t.bandText,
              textWrap: "balance",
            }}
          >
            {evp.headline}
          </h2>
          <p style={{ margin: "24px auto 0", maxWidth: "60ch", fontSize: 17, lineHeight: 1.7, color: t.bandMuted }}>{evp.body}</p>
        </div>
        <div
          className="rise t-3"
          style={{ marginTop: 52, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, textAlign: "left" }}
        >
          {evpPillars.map((p) => (
            <div
              key={p.name}
              style={{
                borderRadius: t.radius,
                padding: 24,
                background: onBandSurface ? "rgba(255,255,255,.07)" : t.surface,
                border: `1px solid ${onBandSurface ? "rgba(255,255,255,.16)" : t.surfaceBorder}`,
              }}
            >
              <EvpIcon kind={p.icon} color={pillarAccent} />
              <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 600, color: t.bandText }}>{p.name}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: t.bandMuted }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 6 · joint venture: two company cards with stats ---- */
export function JointVentureSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker={jointVenture.kicker} title={jointVenture.headline} intro={jointVenture.body} />
        <div className="rise t-2" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {jointVenture.companies.map((c) => (
            <div
              key={c.name}
              style={{
                borderRadius: t.radius,
                background: t.surface,
                border: `1px solid ${t.surfaceBorder}`,
                borderTop: `3px solid ${c.accent === "green" ? t.accent : "#E23B3B"}`,
                padding: 28,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 20, minHeight: 34, marginBottom: 16 }}>
                {c.logos.map((src) => (
                  <Image key={src} src={src} alt={c.name} width={220} height={64} style={{ height: 30, width: "auto", objectFit: "contain" }} />
                ))}
              </div>
              <h3 style={{ margin: 0, fontSize: 21, fontWeight: 700, color: t.text }}>{c.name}</h3>
              <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.65, color: t.muted }}>{c.body}</p>
              <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {c.stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      borderRadius: Math.max(8, t.radius - 4),
                      padding: "14px 16px",
                      background: variant === "warmth" ? "rgba(21,71,58,.05)" : variant === "corporate" ? "#F4F7F9" : "rgba(255,255,255,.04)",
                      border: `1px solid ${t.surfaceBorder}`,
                    }}
                  >
                    <div style={mono({ fontSize: 22, fontWeight: 700, letterSpacing: "-.01em", color: t.accent })}>{s.value}</div>
                    <div style={{ marginTop: 4, fontSize: 12.5, color: t.muted }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 8 · locations ---- */
export function LocationsSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="Where we operate" title="Four delivery centres. Over 2,450 seats." />
        <div className="rise t-4" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {locations.map((l) => (
            <div key={l.name} style={{ borderRadius: t.radius, overflow: "hidden", background: t.surface, border: `1px solid ${t.surfaceBorder}` }}>
              <div style={{ position: "relative", aspectRatio: "4 / 3" }}>
                <Image src={l.image} alt={l.name} fill loading="lazy" sizes="(max-width: 680px) 100vw, 280px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "18px 20px" }}>
                <h3 style={{ fontSize: 15.5, fontWeight: 600, color: t.text }}>{l.name}</h3>
                <div style={{ marginTop: 4, fontSize: 13.5, color: t.muted }}>{l.city}</div>
                <div style={mono({ marginTop: 10, fontSize: 12, letterSpacing: ".08em", color: t.accent })}>{l.seats}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 9 · accreditations + awards ---- */
export function AccreditationsSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}`, background: t.tint }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="Recognised by the industry" title="Accredited, awarded, trusted." intro={membershipsIntro} />
        <div className="rise" style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center" }}>
          {accreditationLogos.map((a) => (
            <div
              key={a.name}
              style={{ background: "#fff", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "center", width: 150, height: 84 }}
            >
              <Image src={a.src} alt={a.name} width={150} height={56} style={{ height: 52, width: "100%", objectFit: "contain" }} />
            </div>
          ))}
          <div style={mono({ fontSize: 12, letterSpacing: ".1em", color: t.muted })}>
            Member: {memberships.join(" · ")}
          </div>
        </div>
        <p className="rise" style={{ margin: "44px 0 0", maxWidth: "62ch", fontSize: 15, lineHeight: 1.65, color: t.muted }}>{awardsIntro}</p>
        <div className="rise t-award" style={{ marginTop: 20, display: "grid", gap: 0 }}>
          {awards.map((a) => (
            <div
              key={a.year}
              className="t-award-row"
              style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, padding: "18px 0", borderTop: `1px solid ${t.hairline}` }}
            >
              <div style={mono({ fontSize: 14, letterSpacing: ".06em", color: t.accent, fontWeight: 600 })}>{a.year}</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.6, color: t.muted }}>{a.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 10 · how + where we operate ---- */
export function OperateSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  const cols = [operate.geographies, operate.verticals, operate.functions];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="How and where we operate" title="Deep expertise, focused delivery." />
        <div className="rise t-3" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {cols.map((c) => (
            <div key={c.title} style={{ borderRadius: t.radius, padding: 28, background: t.surface, border: `1px solid ${t.surfaceBorder}` }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: t.text }}>{c.title}</h3>
              <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.6, color: t.muted }}>{c.body}</p>
              {"items" in c && Array.isArray(c.items) ? (
                <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: 10, fontSize: 13.5, lineHeight: 1.5, color: t.text }}>
                      <span style={{ marginTop: 7, flex: "none", width: 6, height: 6, borderRadius: 999, background: t.accent }} />
                      {it}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 11 · achievements ---- */
export function AchievementsSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}`, background: t.tint }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="Two decades of impact" title="Results at scale." intro={achievements.body} />
        <div className="rise t-4" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {achievements.stats.map((s) => (
            <div key={s.label} style={{ borderRadius: t.radius, padding: 26, background: t.surface, border: `1px solid ${t.surfaceBorder}` }}>
              <div style={mono({ fontSize: "clamp(34px,4vw,48px)", fontWeight: 700, letterSpacing: "-.02em", color: t.accent })}>{s.value}</div>
              <div style={{ marginTop: 10, fontSize: 15, fontWeight: 600, color: t.text }}>{s.label}</div>
              <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.55, color: t.muted }}>{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 12 · AI opportunities (icon hub) ---- */
export function AiOpportunitiesSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="Trilogy Ai" title="Opportunities for AI across the customer journey." />
        <div className="rise t-3" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {aiOpportunities.map((o) => (
            <div key={o.name} className="lift" style={{ borderRadius: t.radius, padding: 24, background: t.surface, border: `1px solid ${t.surfaceBorder}` }}>
              <IconMask src={o.icon} color={t.accent} />
              <div style={{ fontSize: 17, fontWeight: 600, color: t.text }}>{o.name}</div>
              <div style={{ marginTop: 8, fontSize: 14.5, color: t.accent, fontWeight: 500 }}>{o.benefit}</div>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: t.muted }}>{o.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 13 · technology stack (carousel, per the client's note) ---- */
export function TechStackSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker={techStack.kicker} title={techStack.headline} />
        <div className="rise" style={{ marginTop: 44 }}>
          <TechStack variant={variant} />
        </div>
      </div>
    </section>
  );
}

/* ---- slide 14 · point solutions ---- */
export function PointSolutionsSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}`, background: t.tint }}>
      <div style={wrap(t)}>
        <Head t={t} kicker="Our AI-enabled point solutions" title="A platform of proven .ai products." />
        <div className="rise t-3" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {pointSolutions.map((p) => (
            <div key={p.name} className="lift" style={{ borderRadius: t.radius, overflow: "hidden", background: t.surface, border: `1px solid ${t.surfaceBorder}` }}>
              {/* The .ai names are AI-platform brands, not web domains — keep the
                  branded accent chip. */}
              <div style={mono({ background: t.accentFill, color: t.onAccent, padding: "12px 18px", fontSize: 14, letterSpacing: ".02em", textTransform: "none" })}>{p.name}</div>
              <div style={{ padding: 22 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: t.text }}>{p.tagline}</div>
                <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: t.muted }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- slide 7 · brand wall ---- */
export function BrandWallSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker={brands.kicker} title="25 years behind the world's brands." intro={brands.body} />
        <BrandWall variant={variant} />
      </div>
    </section>
  );
}

/* ---- slide 15 · why South Africa ---- */
export function WhySaSection({ variant }: { variant: DeckVariant }) {
  const t = T[variant];
  return (
    <section style={{ borderTop: `1px solid ${t.hairline}` }}>
      <div style={wrap(t)}>
        <Head t={t} kicker={whySA.kicker} title={whySA.headline} intro={whySA.source} />
        <div className="rise t-2" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <div style={{ borderRadius: t.radius, padding: "34px 32px", background: t.accentFill, color: t.onAccent }}>
            <div style={mono({ fontSize: 40, fontWeight: 700, letterSpacing: "-.02em" })}>60%</div>
            <h3 style={{ margin: "6px 0 0", fontSize: 20, fontWeight: 700 }}>{whySA.points[0].title}</h3>
            <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: t.onAccentMuted }}>{whySA.points[0].body}</p>
          </div>
          <div style={{ borderRadius: t.radius, padding: "34px 32px", background: t.surface, border: `1px solid ${t.surfaceBorder}` }}>
            <div style={mono({ fontSize: 40, fontWeight: 700, letterSpacing: "-.02em", color: t.accent })}>#1</div>
            <h3 style={{ margin: "6px 0 0", fontSize: 20, fontWeight: 700, color: t.text }}>{whySA.points[1].title}</h3>
            <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: t.muted }}>{whySA.points[1].body}</p>
          </div>
        </div>
        <div className="rise t-4" style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {whySA.points.slice(2).map((p) => (
            <div key={p.title} style={{ borderRadius: t.radius, padding: 24, background: t.surface, border: `1px solid ${t.surfaceBorder}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: t.text }}>{p.title}</h3>
              <p style={{ margin: "10px 0 0", fontSize: 13.5, lineHeight: 1.6, color: t.muted }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- composite: the full deck story in slide order, for one-point insertion.
 *      ExecTeamSection is omitted because the page-level People component
 *      already renders the leadership + board. ---- */
export default function DeckBody({ variant }: { variant: DeckVariant }) {
  return (
    <>
      <SavingsSection variant={variant} />
      <EvpSection variant={variant} />
      {/* Corpratorial moves the JV + locations onto the Trilogy Digital page. */}
      {variant === "corporate" ? null : <JointVentureSection variant={variant} />}
      <BrandWallSection variant={variant} />
      {variant === "corporate" ? null : <LocationsSection variant={variant} />}
      <AccreditationsSection variant={variant} />
      {/* Corpratorial moves operate + achievements onto the About page. */}
      {variant === "corporate" ? null : <OperateSection variant={variant} />}
      {variant === "corporate" ? null : <AchievementsSection variant={variant} />}
      <AiOpportunitiesSection variant={variant} />
      {/* Corpratorial drops the technology-stack section per client note. */}
      {variant === "corporate" ? null : <TechStackSection variant={variant} />}
      <PointSolutionsSection variant={variant} />
      {/* Corpratorial renders Why South Africa page-level, over the Cape Town photo. */}
      {variant === "corporate" ? null : <WhySaSection variant={variant} />}
    </>
  );
}
