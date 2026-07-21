import { teamIntro } from "@/lib/content";
import RevealManager from "@/components/RevealManager";
import { AchievementsSection, OperateSection } from "@/components/DeckSections";
import { CorpratorialHeader, CorpratorialFooter } from "@/components/CorpratorialChrome";

/**
 * About — the company story, carrying the two sections moved off the home:
 * the "25+ years / results at scale" achievements and "How and where we operate".
 */

const INK = "#0E1B2A";
const BRIGHT = "#2FE85C";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

export default function AboutPage() {
  return (
    <main style={{ position: "relative", minHeight: "100dvh", background: "#fff", color: INK, overflowX: "clip", fontFamily: "var(--font-sans)" }}>
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
            About Trilogy
          </div>
          <h1
            className="rise"
            style={{
              margin: "22px 0 0",
              maxWidth: "16ch",
              fontSize: "clamp(40px,7vw,84px)",
              fontWeight: 200,
              lineHeight: 0.99,
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            Operators who have <span style={{ color: BRIGHT }}>built this before.</span>
          </h1>
          <p
            className="rise"
            style={{ margin: "26px 0 0", maxWidth: "62ch", fontSize: 18, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,.78)" }}
          >
            {teamIntro}
          </p>
        </div>
      </section>

      {/* the two sections moved from the home page */}
      <AchievementsSection variant="corporate" />
      <OperateSection variant="corporate" />

      <CorpratorialFooter />
    </main>
  );
}
