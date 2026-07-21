"use client";

import { useEffect, useRef, useState } from "react";
import LoopVideo from "@/components/LoopVideo";
import { offerings } from "@/lib/content";

type Variant = "editorial" | "warmth" | "corporate";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

export default function Offerings({ variant }: { variant: Variant }) {
  const [active, setActive] = useState(0);
  const [hoverTab, setHoverTab] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const o = offerings[active];

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "trilogy-offerin .5s cubic-bezier(.16,.84,.44,1) both";
  }, [active]);

  /* ---------------------------------------------------------------- EDITORIAL */
  if (variant === "editorial") {
    return (
      <div>
        <div
          className="rise"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          {offerings.map((it, i) => (
            <button
              key={it.key}
              onClick={() => setActive(i)}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "14px 4px 18px",
                marginRight: 24,
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(18px,2vw,22px)",
                fontWeight: 300,
                letterSpacing: "-.01em",
                color: "#F7F5F0",
                opacity: i === active ? 1 : 0.62,
                transition: "opacity .25s",
              }}
            >
              <span
                style={mono({
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "#2FE85C",
                  marginRight: 10,
                })}
              >
                {it.index}
              </span>
              {it.name}
              {i === active ? (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: -1,
                    height: 2,
                    width: "100%",
                    background: "#2FE85C",
                  }}
                />
              ) : null}
            </button>
          ))}
        </div>

        <div
          ref={panelRef}
          className="t-offer-ed"
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "1.05fr 0.95fr",
            alignItems: "stretch",
            padding: "36px 0 0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={mono({
                fontSize: 13,
                letterSpacing: ".14em",
                color: "rgba(247,245,240,.45)",
              })}
            >
              {o.kicker}
            </div>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "clamp(24px,2.9vw,34px)",
                fontWeight: 300,
                lineHeight: 1.18,
                letterSpacing: "-.01em",
                color: "#F7F5F0",
              }}
            >
              {o.headline}
            </p>
            <p
              style={{
                margin: "18px 0 0",
                maxWidth: "46ch",
                fontSize: 16.5,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "rgba(247,245,240,.64)",
              }}
            >
              {o.body}
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "22px 0 0",
                padding: "16px 0 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 11,
                borderTop: "1px solid rgba(255,255,255,.1)",
              }}
            >
              {o.points.map((p) => (
                <li
                  key={p}
                  style={mono({
                    display: "flex",
                    gap: 10,
                    fontSize: 13,
                    letterSpacing: ".1em",
                    lineHeight: 1.55,
                    color: "rgba(247,245,240,.6)",
                  })}
                >
                  <span
                    style={{
                      marginTop: 5,
                      flex: "none",
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: "#2FE85C",
                    }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              position: "relative",
              minHeight: 340,
              width: "100%",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,.1)",
              background: "#0A0A0A",
            }}
          >
            <LoopVideo
              key={o.video}
              src={o.video}
              poster={o.image}
              videoKey={o.video}
            />
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0) 55%, rgba(10,10,10,.55) 100%)",
              }}
            />
            <span
              aria-hidden
              style={mono({
                position: "absolute",
                left: 14,
                bottom: 12,
                fontSize: 12,
                letterSpacing: ".18em",
                color: "#2FE85C",
              })}
            >
              {o.index} · {o.name}
            </span>
          </div>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------- WARMTH */
  if (variant === "warmth") {
    return (
      <div>
        <div
          className="rise t-offer-wtabs"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
          }}
        >
          {offerings.map((it, i) => {
            const on = i === active;
            const hov = hoverTab === i;
            return (
              <button
                key={it.key}
                onClick={() => setActive(i)}
                onMouseEnter={() => setHoverTab(i)}
                onMouseLeave={() => setHoverTab(null)}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  padding: 24,
                  borderRadius: 22,
                  border: on ? "1px solid #15473A" : "1px solid rgba(32,32,28,.08)",
                  background: on ? "#FFFFFF" : "rgba(255,255,255,.55)",
                  boxShadow: on
                    ? "0 18px 44px rgba(21,71,58,.18)"
                    : "0 2px 8px rgba(32,32,28,.04)",
                  fontFamily: "var(--font-sans)",
                  transform: hov ? "translateY(-4px)" : "none",
                  transition:
                    "background .3s, box-shadow .3s, transform .3s, border-color .3s",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={mono({ fontSize: 13, color: "rgba(32,32,28,.5)" })}>
                    {it.index}
                  </span>
                  <span
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 999,
                      background: on ? "#2FE85C" : "rgba(32,32,28,.16)",
                      transition: "background .3s",
                    }}
                  />
                </span>
                <span
                  style={{
                    display: "block",
                    marginTop: 26,
                    fontSize: "clamp(18px,2vw,23px)",
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                    color: "#20201C",
                  }}
                >
                  {it.name}
                </span>
                <span
                  style={mono({
                    display: "block",
                    marginTop: 5,
                    fontSize: 12,
                    letterSpacing: ".14em",
                    color: "rgba(32,32,28,.5)",
                  })}
                >
                  {it.kicker}
                </span>
              </button>
            );
          })}
        </div>

        <div
          ref={panelRef}
          className="t-offer-wpanel"
          style={{
            marginTop: 18,
            background: "#fff",
            border: "1px solid rgba(32,32,28,.07)",
            borderRadius: 26,
            boxShadow: "0 20px 56px rgba(21,71,58,.08)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
          }}
        >
          <div style={{ padding: 44 }}>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(22px,2.6vw,32px)",
                fontWeight: 400,
                lineHeight: 1.18,
                letterSpacing: "-.01em",
                color: "#20201C",
              }}
            >
              {o.headline}
            </p>
            <p
              style={{
                margin: "20px 0 0",
                maxWidth: "46ch",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(32,32,28,.62)",
              }}
            >
              {o.body}
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "26px 0 0",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {o.points.map((p) => (
                <li
                  key={p}
                  style={mono({
                    display: "flex",
                    gap: 11,
                    alignItems: "flex-start",
                    padding: "13px 16px",
                    borderRadius: 14,
                    background: "rgba(21,71,58,.06)",
                    fontSize: 13,
                    letterSpacing: ".08em",
                    lineHeight: 1.5,
                    color: "#15473A",
                  })}
                >
                  <span
                    style={{
                      marginTop: 4,
                      flex: "none",
                      width: 7,
                      height: 7,
                      borderRadius: 999,
                      background: "#2FE85C",
                    }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: "relative", minHeight: 360, background: "#15473A" }}>
            <LoopVideo key={o.video} src={o.video} poster={o.image} videoKey={o.video} />
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- CORPORATE */
  return (
    <div
      className="rise t-offer-corp"
      style={{
        display: "grid",
        gridTemplateColumns: "0.85fr 1.4fr 1.05fr",
        alignItems: "stretch",
        border: "1px solid rgba(14,27,42,.1)",
        borderRadius: 14,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* tab rail · buttons fill the column height */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid rgba(14,27,42,.1)",
        }}
      >
        {offerings.map((it, i) => {
          const on = i === active;
          const hov = hoverTab === i;
          return (
            <button
              key={it.key}
              onClick={() => setActive(i)}
              onMouseEnter={() => setHoverTab(i)}
              onMouseLeave={() => setHoverTab(null)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                cursor: "pointer",
                padding: "24px 26px",
                border: "none",
                borderBottom: i < offerings.length - 1 ? "1px solid rgba(14,27,42,.08)" : "none",
                borderLeft: `3px solid ${on ? "#0E7C46" : "transparent"}`,
                background: on ? "#FFFFFF" : hov ? "#F4F7F9" : "transparent",
                fontFamily: "var(--font-sans)",
                transition: "background .25s, border-color .25s",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={mono({ fontSize: 13, color: on ? "#0E7C46" : "rgba(14,27,42,.4)" })}>
                  {it.index}
                </span>
                <span
                  style={{
                    fontSize: "clamp(17px,1.6vw,21px)",
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                    color: on ? "#0E1B2A" : "rgba(14,27,42,.62)",
                  }}
                >
                  {it.name}
                </span>
              </span>
              <span style={mono({ display: "block", marginTop: 6, paddingLeft: 30, fontSize: 12, letterSpacing: ".12em", color: "rgba(14,27,42,.5)" })}>
                {it.kicker}
              </span>
            </button>
          );
        })}
      </div>

      {/* detail copy */}
      <div ref={panelRef} style={{ padding: 44, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ margin: 0, fontSize: "clamp(22px,2.4vw,30px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-.01em", color: "#0E1B2A" }}>
          {o.headline}
        </p>
        <p style={{ margin: "18px 0 0", fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "rgba(14,27,42,.62)" }}>
          {o.body}
        </p>
        <ul style={{ listStyle: "none", margin: "26px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {o.points.map((p) => (
            <li
              key={p}
              style={mono({
                display: "flex",
                gap: 11,
                alignItems: "center",
                fontSize: 13,
                letterSpacing: ".08em",
                lineHeight: 1.5,
                color: "#0E1B2A",
              })}
            >
              <span style={{ flex: "none", color: "#0E7C46", fontWeight: 700 }}>+</span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* media */}
      <div className="t-offer-corp-media" style={{ position: "relative", minHeight: 420, borderLeft: "1px solid rgba(14,27,42,.1)", background: "#0E1B2A" }}>
        <LoopVideo key={o.video} src={o.video} poster={o.image} videoKey={o.video} />
        <span
          aria-hidden
          style={mono({ position: "absolute", left: 16, bottom: 14, fontSize: 12, letterSpacing: ".16em", color: "#2FE85C" })}
        >
          {o.index} · {o.name}
        </span>
      </div>
    </div>
  );
}
