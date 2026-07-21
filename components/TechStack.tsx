"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { techStack } from "@/lib/content";

/* Tech-stack providers (deck slide 13), rendered as a horizontal carousel
 * per the client's note on the slide: "Do a carousel rather". */

type Variant = "editorial" | "warmth" | "motion" | "corporate";

const TOKENS: Record<
  Variant,
  {
    text: string;
    muted: string;
    accent: string;
    onAccent: string;
    surface: string;
    surfaceBorder: string;
    chipBg: string;
    radius: number;
  }
> = {
  editorial: {
    text: "#F7F5F0",
    muted: "rgba(247,245,240,.66)",
    accent: "#2FE85C",
    onAccent: "#0A0A0A",
    surface: "rgba(255,255,255,.03)",
    surfaceBorder: "rgba(255,255,255,.12)",
    chipBg: "rgba(255,255,255,.06)",
    radius: 12,
  },
  motion: {
    text: "#F7F5F0",
    muted: "rgba(247,245,240,.66)",
    accent: "#2FE85C",
    onAccent: "#0A0A0A",
    surface: "rgba(255,255,255,.03)",
    surfaceBorder: "rgba(255,255,255,.12)",
    chipBg: "rgba(255,255,255,.06)",
    radius: 12,
  },
  warmth: {
    text: "#20201C",
    muted: "rgba(32,32,28,.66)",
    accent: "#15473A",
    onAccent: "#FBF8F3",
    surface: "#ffffff",
    surfaceBorder: "rgba(32,32,28,.1)",
    chipBg: "rgba(21,71,58,.06)",
    radius: 16,
  },
  corporate: {
    text: "#0E1B2A",
    muted: "rgba(14,27,42,.64)",
    accent: "#0E7C46",
    onAccent: "#ffffff",
    surface: "#ffffff",
    surfaceBorder: "rgba(14,27,42,.1)",
    chipBg: "rgba(14,27,42,.045)",
    radius: 12,
  },
};

export default function TechStack({ variant }: { variant: Variant }) {
  const t = TOKENS[variant];
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const nudge = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-stack-card]");
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowStyle = (enabled: boolean): React.CSSProperties => ({
    width: 42,
    height: 42,
    borderRadius: 999,
    border: `1px solid ${t.surfaceBorder}`,
    background: t.surface,
    color: enabled ? t.text : t.muted,
    opacity: enabled ? 1 : 0.4,
    cursor: enabled ? "pointer" : "default",
    fontSize: 18,
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div>
      <div
        ref={track}
        className="stack-track"
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: 8,
          scrollbarWidth: "none",
        }}
      >
        {techStack.categories.map((c, i) => (
          <div
            key={c.key}
            data-stack-card
            style={{
              flex: "0 0 auto",
              width: "min(300px, 78vw)",
              scrollSnapAlign: "start",
              borderRadius: t.radius,
              background: t.surface,
              border: `1px solid ${t.surfaceBorder}`,
              padding: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: i === 0 ? t.accent : t.chipBg,
                  color: i === 0 ? t.onAccent : t.text,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                {c.key.replace(/[0-9]/g, "")}
              </span>
              <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 600, color: t.text }}>{c.name}</h3>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "18px 0 0",
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {c.providers.map((p) => (
                <li
                  key={p}
                  style={{
                    padding: "7px 13px",
                    borderRadius: 999,
                    background: t.chipBg,
                    border: `1px solid ${t.surfaceBorder}`,
                    fontSize: 13.5,
                    color: t.text,
                    whiteSpace: "nowrap",
                  }}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              fontSize: 11.5,
              letterSpacing: ".14em",
              color: t.muted,
            }}
          >
            {techStack.discovery.label}
          </span>
          {techStack.discovery.engines.map((e) => (
            <span
              key={e}
              style={{
                padding: "7px 14px",
                borderRadius: 999,
                background: t.accent,
                color: t.onAccent,
                fontSize: 13.5,
                fontWeight: 600,
              }}
            >
              {e}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button type="button" aria-label="Previous" onClick={() => nudge(-1)} disabled={!canPrev} style={arrowStyle(canPrev)}>
            ←
          </button>
          <button type="button" aria-label="Next" onClick={() => nudge(1)} disabled={!canNext} style={arrowStyle(canNext)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
