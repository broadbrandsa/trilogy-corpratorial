import Image from "next/image";
import RevealManager from "@/components/RevealManager";

export const cmono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

export const CORP = {
  bg: "#FFFFFF",
  ink: "#0E1B2A",
  muted: "rgba(14,27,42,.64)",
  accent: "#0E7C46",
  border: "rgba(14,27,42,.1)",
  mist: "#F4F7F9",
};

/** Page-top band: eyebrow + H1 + intro. Full-bleed image hero with a navy
 *  scrim when an image is given; otherwise a clean mist text band. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  objectPosition = "72% center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  objectPosition?: string;
}) {
  if (image) {
    return (
      <section style={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${CORP.border}` }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src={image} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0E1B2A 0%, rgba(14,27,42,.92) 32%, rgba(14,27,42,.55) 62%, rgba(14,27,42,.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(14,27,42,.5) 0%, transparent 34%)" }} />
        </div>
        <div className="rise" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "124px 28px 104px", color: "#fff" }}>
          <div style={cmono({ fontSize: 12, letterSpacing: ".22em", color: "#2FE85C" })}>{eyebrow}</div>
          <h1 style={{ margin: "16px 0 0", maxWidth: "20ch", fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 400, lineHeight: 1.02, letterSpacing: "-.03em", color: "#fff" }}>
            {title}
          </h1>
          {intro ? (
            <p style={{ margin: "22px 0 0", maxWidth: "58ch", fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,.82)" }}>{intro}</p>
          ) : null}
        </div>
      </section>
    );
  }
  return (
    <section style={{ borderBottom: `1px solid ${CORP.border}`, background: CORP.mist }}>
      <div className="rise" style={{ maxWidth: 1200, margin: "0 auto", padding: "84px 28px 64px" }}>
        <div style={cmono({ fontSize: 12, letterSpacing: ".22em", color: CORP.accent })}>{eyebrow}</div>
        <h1 style={{ margin: "16px 0 0", maxWidth: "20ch", fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 400, lineHeight: 1.02, letterSpacing: "-.03em", color: CORP.ink }}>
          {title}
        </h1>
        {intro ? (
          <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 18, lineHeight: 1.65, color: CORP.muted }}>
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/** Section eyebrow + heading. */
export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="rise">
      <div style={cmono({ fontSize: 12, letterSpacing: ".2em", color: CORP.accent })}>{eyebrow}</div>
      <h2 style={{ margin: "14px 0 0", maxWidth: "22ch", fontSize: "clamp(28px,3.6vw,46px)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-.02em", color: CORP.ink }}>
        {title}
      </h2>
    </div>
  );
}

/** Page wrapper that sets the corporate canvas + mounts the reveal observer. */
export function CorpMain({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ position: "relative", background: CORP.bg, color: CORP.ink, fontFamily: "var(--font-sans)" }}>
      <RevealManager />
      {children}
    </main>
  );
}
