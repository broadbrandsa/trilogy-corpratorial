import Image from "next/image";
import { brand, stats, team, media, location, offshoringIntro, whySA, techStack, techLogos } from "@/lib/content";
import Counter from "@/components/Counter";
import Offerings from "@/components/Offerings";
import People from "@/components/People";
import Insights from "@/components/Insights";
import LoopVideo from "@/components/LoopVideo";
import AiDemo from "@/components/AiDemo";
import RevealManager from "@/components/RevealManager";
import DeckBody from "@/components/DeckSections";
import { CorpratorialHeader, CorpratorialFooter } from "@/components/CorpratorialChrome";

/**
 * Corpratorial — the editorial layout and thin display type, recoloured in the
 * corporate palette: white / navy #0E1B2A / deep-green #0E7C46 / mist #F4F7F9.
 * The bright green #2FE85C is used only as an accent on dark (navy / image)
 * surfaces, mirroring the corporate direction. Shared components render via
 * their `corporate` variant.
 */

const INK = "#0E1B2A"; // navy
const GREEN = "#0E7C46"; // deep green (accent on light)
const BRIGHT = "#2FE85C"; // accent on dark surfaces only
const MIST = "#F4F7F9";
const BORDER = "rgba(14,27,42,.1)";
const MUTED = "rgba(14,27,42,.64)";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

export default function CorpratorialHome() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100dvh",
        background: "#fff",
        color: INK,
        overflowX: "clip",
        fontFamily: "var(--font-sans)",
      }}
    >
      <RevealManager />

      <span
        aria-hidden
        className="anim-floaty"
        style={{
          position: "absolute",
          right: "-9vw",
          top: "8vh",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "var(--font-mono)",
          fontSize: "46vw",
          lineHeight: 1,
          color: "rgba(14,27,42,.03)",
          animation: "trilogy-floaty 11s ease-in-out infinite",
        }}
      >
        三
      </span>

      <CorpratorialHeader />

      {/* hero — dark video with a navy grade, white headline */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "min(880px, 94vh)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <LoopVideo
            src={media.hero.video}
            poster={media.hero.src}
            objectPosition="72% center"
          />
          {/* left-to-right navy scrim keeps the headline legible */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #0E1B2A 0%, rgba(14,27,42,.94) 26%, rgba(14,27,42,.62) 52%, rgba(14,27,42,.2) 82%, rgba(14,27,42,.45) 100%)",
            }}
          />
          {/* bottom fade + low-opacity green tint for cohesion */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(0deg, #0E1B2A 0%, rgba(14,27,42,0) 38%), radial-gradient(120% 80% at 78% 42%, rgba(47,232,92,.10), transparent 60%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 1180,
            margin: "0 auto",
            padding: "120px 28px 72px",
          }}
        >
          <div
            className="rise"
            style={mono({
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13,
              letterSpacing: ".22em",
              color: "rgba(255,255,255,.6)",
            })}
          >
            <span
              className="anim-pulse"
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: 999,
                background: BRIGHT,
                animation: "trilogy-pulse 2s ease-in-out infinite",
              }}
            />
            {brand.tagline} · UK · US · EMEA
          </div>
          <h1
            className="rise"
            style={{
              margin: "28px 0 0",
              maxWidth: "16ch",
              fontSize: "clamp(38px,8.5vw,96px)",
              fontWeight: 200,
              lineHeight: 0.96,
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            {brand.promise.line1}
            <br />
            <span style={{ color: BRIGHT }}>{brand.promise.line2}</span>
          </h1>
          <p
            className="rise"
            style={{
              margin: "28px 0 0",
              maxWidth: "34rem",
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.65,
              color: "rgba(255,255,255,.82)",
              textWrap: "pretty",
            }}
          >
            <strong style={{ fontWeight: 500, color: "#fff" }}>{brand.promise.sub}</strong> {offshoringIntro}
          </p>
          <div className="rise" style={{ margin: "36px 0 0", display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a
              href="#offerings"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#fff",
                color: INK,
                padding: "14px 26px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              See the three offerings <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 26px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.3)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 300,
                textDecoration: "none",
              }}
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* stats — the Warmth proof/trust card row, recoloured */}
      <section
        style={{ position: "relative", zIndex: 10, maxWidth: 1180, margin: "0 auto", padding: "56px 28px 40px" }}
      >
        <div className="t-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="rise transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                background: "#fff",
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                boxShadow: "0 8px 30px rgba(14,27,42,.05)",
                padding: "30px 24px",
              }}
            >
              <Counter
                value={s.value}
                style={{
                  fontSize: "clamp(36px,4vw,52px)",
                  fontWeight: 200,
                  letterSpacing: "-.02em",
                  color: GREEN,
                  fontVariantNumeric: "tabular-nums",
                }}
              />
              <div
                style={mono({
                  marginTop: 10,
                  fontSize: 13,
                  letterSpacing: ".1em",
                  lineHeight: 1.5,
                  color: "rgba(14,27,42,.55)",
                })}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* offerings */}
      <section
        id="offerings"
        style={{ position: "relative", zIndex: 10, maxWidth: 1180, margin: "0 auto", padding: "84px 28px" }}
      >
        <div className="rise">
          <div style={mono({ fontSize: 13, letterSpacing: ".22em", color: "rgba(14,27,42,.5)" })}>
            三 · Three offerings
          </div>
          <h2
            style={{
              margin: "14px 0 28px",
              maxWidth: "18ch",
              fontSize: "clamp(30px,4vw,44px)",
              fontWeight: 200,
              lineHeight: 1.05,
              letterSpacing: "-.02em",
            }}
          >
            Your journey, your choice.
          </h2>
        </div>
        <Offerings variant="corporate" />
      </section>

      {/* AI demo — over a dark image, so text stays light */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: `1px solid ${BORDER}`,
          background: MIST,
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src={media.ai.src}
            alt=""
            fill
            loading="lazy"
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #0E1B2A 0%, rgba(14,27,42,.9) 45%, rgba(14,27,42,.72) 100%)",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            padding: "100px 28px",
          }}
        >
          <div className="rise">
            <div style={mono({ fontSize: 13, letterSpacing: ".22em", color: BRIGHT })}>
              Trilogy Ai · Live
            </div>
            <h2
              style={{
                margin: "16px 0 0",
                maxWidth: "14ch",
                fontSize: "clamp(32px,4vw,46px)",
                fontWeight: 200,
                lineHeight: 1.06,
                letterSpacing: "-.02em",
                color: "#fff",
              }}
            >
              Agent-in-the-loop, in real time.
            </h2>
            <p
              style={{
                margin: "20px 0 0",
                maxWidth: "40ch",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.7)",
              }}
            >
              Autonomous CX handles the conversation; a human approves the moment
              judgement, escalation or compliance is needed. Watch a refund resolve
              itself.
            </p>
          </div>
          <AiDemo variant="corporate" />
        </div>
      </section>

      {/* team */}
      <section
        id="team"
        style={{ position: "relative", zIndex: 10, borderTop: `1px solid ${BORDER}` }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "100px 28px 44px",
          }}
        >
          <div className="rise" style={{ maxWidth: "62ch" }}>
            <div style={mono({ fontSize: 13, letterSpacing: ".22em", color: "rgba(14,27,42,.5)" })}>
              {team.kicker}
            </div>
            <h2
              style={{
                margin: "16px 0 0",
                maxWidth: "20ch",
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 200,
                lineHeight: 1.08,
                letterSpacing: "-.02em",
              }}
            >
              {team.headline}
            </h2>
            <p
              style={{
                margin: "24px 0 0",
                maxWidth: "56ch",
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.7,
                color: MUTED,
              }}
            >
              {team.body}
            </p>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "0 28px 100px" }}>
          <People variant="corporate" />
        </div>
      </section>

      {/* Why South Africa — set over the full-bleed Cape Town photo */}
      <section
        id="why-sa"
        style={{
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* Cape Town photo as the poster/fallback behind the video */}
          <Image
            src={location.image}
            alt=""
            fill
            loading="lazy"
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
          {/* background video for the section */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={location.image}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
          >
            <source src="/7717357-hd_1280_720_25fps.mp4" type="video/mp4" />
          </video>
          {/* navy grade so the copy and frosted cards stay legible */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #0E1B2A 0%, rgba(14,27,42,.9) 34%, rgba(14,27,42,.7) 70%, rgba(14,27,42,.6) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(0deg, rgba(14,27,42,.9) 0%, rgba(14,27,42,.2) 30%, rgba(14,27,42,.35) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 1180,
            margin: "0 auto",
            padding: "110px 28px",
          }}
        >
          <div className="rise" style={{ maxWidth: "68ch" }}>
            <div style={mono({ fontSize: 13, letterSpacing: ".22em", color: BRIGHT })}>
              {whySA.kicker}
            </div>
            <h2
              style={{
                margin: "16px 0 0",
                maxWidth: "16ch",
                fontSize: "clamp(38px,6vw,72px)",
                fontWeight: 200,
                lineHeight: 1.0,
                letterSpacing: "-.03em",
                color: "#fff",
                textWrap: "balance",
              }}
            >
              {whySA.headline}
            </h2>
            <p
              style={{
                margin: "22px 0 0",
                maxWidth: "56ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.78)",
              }}
            >
              {whySA.source}
            </p>
          </div>

          {/* two emphasis cards */}
          <div className="rise t-2" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <div style={{ borderRadius: 16, padding: "34px 32px", background: GREEN, color: "#fff" }}>
              <div style={mono({ fontSize: 44, fontWeight: 700, letterSpacing: "-.02em", color: BRIGHT })}>60%</div>
              <h3 style={{ margin: "8px 0 0", fontSize: 20, fontWeight: 700 }}>{whySA.points[0].title}</h3>
              <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.88)" }}>{whySA.points[0].body}</p>
            </div>
            <div
              style={{
                borderRadius: 16,
                padding: "34px 32px",
                background: "rgba(14,27,42,.5)",
                border: "1px solid rgba(255,255,255,.16)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                color: "#fff",
              }}
            >
              <div style={mono({ fontSize: 44, fontWeight: 700, letterSpacing: "-.02em", color: BRIGHT })}>#1</div>
              <h3 style={{ margin: "8px 0 0", fontSize: 20, fontWeight: 700 }}>{whySA.points[1].title}</h3>
              <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.78)" }}>{whySA.points[1].body}</p>
            </div>
          </div>

          {/* supporting reasons */}
          <div className="rise t-4" style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {whySA.points.slice(2).map((p) => (
              <div
                key={p.title}
                style={{
                  borderRadius: 14,
                  padding: 24,
                  background: "rgba(14,27,42,.45)",
                  border: "1px solid rgba(255,255,255,.12)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  color: "#fff",
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 600 }}>{p.title}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,.72)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <span
          style={mono({
            position: "absolute",
            right: 18,
            bottom: 14,
            zIndex: 1,
            fontSize: 12,
            letterSpacing: ".14em",
            color: "rgba(255,255,255,.4)",
          })}
        >
          Cape Town · photo {location.credit.name} / {location.credit.source}
        </span>
      </section>

      {/* deck story · slides 4-15 */}
      <DeckBody variant="corporate" />

      {/* partners — technology ecosystem, structured like the DSG partners page (dark) */}
      <section id="partners" style={{ position: "relative", zIndex: 10, borderTop: `1px solid ${BORDER}`, background: INK, color: "#fff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "92px 28px" }}>
          <div className="rise" style={{ maxWidth: "68ch" }}>
            <div style={mono({ fontSize: 13, letterSpacing: ".22em", color: BRIGHT })}>Ecosystem</div>
            <h2
              style={{
                margin: "16px 0 0",
                maxWidth: "18ch",
                fontSize: "clamp(30px,4.4vw,56px)",
                fontWeight: 200,
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                color: "#fff",
                textWrap: "balance",
              }}
            >
              Our technology partners.
            </h2>
            <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 16.5, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,.72)" }}>
              We deliver on a curated ecosystem of best-of-breed technology partners, end to end: channel, orchestration, automation, the ML engine and analytics.
            </p>
          </div>

          {techStack.categories.map((cat) => (
            <div className="rise" key={cat.key} style={{ marginTop: 40 }}>
              <h3 style={mono({ fontSize: 12, letterSpacing: ".16em", color: "rgba(255,255,255,.5)" })}>{cat.name}</h3>
              <div
                style={{
                  marginTop: 16,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: 12,
                }}
              >
                {cat.providers.map((p) => {
                  // Channel entries are capabilities, not brands — keep as text.
                  const logo = cat.key === "C" ? undefined : techLogos[p];
                  if (!logo) {
                    return (
                      <div
                        key={`${cat.key}-${p}`}
                        className="lift"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          minHeight: 66,
                          padding: "16px 18px",
                          background: "rgba(255,255,255,.05)",
                          border: "1px solid rgba(255,255,255,.14)",
                          borderRadius: 12,
                          fontSize: 14.5,
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        {p}
                      </div>
                    );
                  }
                  // Partner logo: white tile so coloured/dark marks stay legible,
                  // with the company name in small text below the logo.
                  return (
                    <div
                      key={`${cat.key}-${p}`}
                      className="lift"
                      title={p}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        minHeight: 66,
                        padding: "14px 16px",
                        background: "#fff",
                        border: "1px solid rgba(255,255,255,.14)",
                        borderRadius: 12,
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo}
                        alt={`${p} logo`}
                        loading="lazy"
                        style={{ height: 26, maxWidth: "78%", width: "auto", objectFit: "contain" }}
                      />
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: ".02em",
                          lineHeight: 1.2,
                          textAlign: "center",
                          color: "rgba(14,27,42,.72)",
                        }}
                      >
                        {p}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="rise" style={{ marginTop: 40 }}>
            <h3 style={mono({ fontSize: 12, letterSpacing: ".16em", color: "rgba(255,255,255,.5)" })}>{techStack.discovery.label}</h3>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 12 }}>
              {techStack.discovery.engines.map((e) => (
                <span
                  key={e}
                  style={mono({
                    padding: "12px 20px",
                    background: BRIGHT,
                    color: "#0A1F12",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: ".06em",
                    textTransform: "none",
                  })}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* insights */}
      <section id="insights" style={{ position: "relative", zIndex: 10, borderTop: `1px solid ${BORDER}` }}>
        <Insights variant="corporate" />
      </section>

      {/* contact — dark navy band anchoring the foot of the page */}
      <section
        id="contact"
        style={{ position: "relative", zIndex: 10, background: INK, color: "#fff", overflow: "hidden" }}
      >
        <span
          aria-hidden
          className="anim-floaty"
          style={{
            position: "absolute",
            right: "-6vw",
            bottom: "-14vh",
            zIndex: 0,
            userSelect: "none",
            pointerEvents: "none",
            fontFamily: "var(--font-mono)",
            fontSize: "34vw",
            lineHeight: 1,
            color: "rgba(47,232,92,.05)",
            animation: "trilogy-floaty 14s ease-in-out infinite",
          }}
        >
          三
        </span>
        <div
          className="rise"
          style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "120px 28px", textAlign: "center" }}
        >
          <h2
            style={{
              margin: "0 auto",
              maxWidth: "20ch",
              fontSize: "clamp(38px,5.5vw,68px)",
              fontWeight: 200,
              lineHeight: 1.02,
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            Turn customer service into a{" "}
            <span style={{ color: BRIGHT }}>competitive advantage.</span>
          </h2>
          <div style={{ margin: "40px 0 0", display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a
              href="#"
              style={{
                background: BRIGHT,
                color: "#0A1F12",
                padding: "15px 30px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Book a session
            </a>
            <a
              href="#"
              style={{
                border: "1px solid rgba(255,255,255,.3)",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              WhatsApp us
            </a>
          </div>
          <div
            style={mono({
              margin: "48px 0 0",
              display: "flex",
              flexWrap: "wrap",
              gap: 36,
              justifyContent: "center",
              fontSize: 13,
              letterSpacing: ".14em",
              color: "rgba(255,255,255,.5)",
            })}
          >
            <span>UK {brand.phones.uk}</span>
            <span>SA {brand.phones.sa}</span>
          </div>
        </div>
      </section>

      <CorpratorialFooter />
    </main>
  );
}
