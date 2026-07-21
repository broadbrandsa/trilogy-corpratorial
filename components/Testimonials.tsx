"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";

type Variant = "editorial" | "warmth" | "corporate";

type CarouselTheme = {
  label: string;
  arrow: React.CSSProperties;
  arrowHoverBorder: string;
  arrowHoverColor: string;
  wrapper?: React.CSSProperties;
  quoteColor: string;
  quoteWeight: number;
  mark: string;
  name: string;
  org: string;
  dotTrack: string;
  dotActive: string;
  dotStyle: "bar" | "pill";
};

const THEMES: Record<Variant, CarouselTheme> = {
  editorial: {
    label: "#5B5A55",
    arrow: {
      border: "1px solid rgba(255,255,255,.2)",
      background: "none",
      color: "#F7F5F0",
      borderRadius: 999,
    },
    arrowHoverBorder: "#2FE85C",
    arrowHoverColor: "#2FE85C",
    quoteColor: "#F7F5F0",
    quoteWeight: 200,
    mark: "#2FE85C",
    name: "rgba(247,245,240,.6)",
    org: "rgba(247,245,240,.35)",
    dotTrack: "rgba(255,255,255,.15)",
    dotActive: "#2FE85C",
    dotStyle: "bar",
  },
  warmth: {
    label: "#15473A",
    arrow: {
      border: "1px solid rgba(32,32,28,.14)",
      background: "#fff",
      color: "#20201C",
      borderRadius: 999,
    },
    arrowHoverBorder: "#15473A",
    arrowHoverColor: "#15473A",
    wrapper: {
      background: "#fff",
      border: "1px solid rgba(32,32,28,.07)",
      borderRadius: 26,
      boxShadow: "0 20px 56px rgba(21,71,58,.08)",
      padding: 48,
    },
    quoteColor: "#20201C",
    quoteWeight: 300,
    mark: "#15473A",
    name: "#15473A",
    org: "rgba(32,32,28,.4)",
    dotTrack: "rgba(32,32,28,.16)",
    dotActive: "#15473A",
    dotStyle: "pill",
  },
  corporate: {
    label: "#0E7C46",
    arrow: {
      border: "1px solid rgba(14,27,42,.16)",
      background: "#fff",
      color: "#0E1B2A",
      borderRadius: 8,
    },
    arrowHoverBorder: "#0E7C46",
    arrowHoverColor: "#0E7C46",
    wrapper: {
      background: "#fff",
      border: "1px solid rgba(14,27,42,.1)",
      borderRadius: 16,
      padding: 48,
    },
    quoteColor: "#0E1B2A",
    quoteWeight: 400,
    mark: "#0E7C46",
    name: "#0E7C46",
    org: "rgba(14,27,42,.4)",
    dotTrack: "rgba(14,27,42,.16)",
    dotActive: "#0E7C46",
    dotStyle: "bar",
  },
};

export default function Testimonials({ variant }: { variant: Variant }) {
  const t = THEMES[variant];
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<"prev" | "next" | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = testimonials.length;

  const go = (i: number) => setActive(((i % n) + n) % n);

  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    timer.current = setInterval(() => setActive((a) => (a + 1) % n), 5200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [n]);

  const stopAuto = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const monoLabel: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: ".22em",
  };

  const arrowBtn = (dir: "prev" | "next") => {
    const hovered = hover === dir;
    return {
      width: 48,
      height: 48,
      cursor: "pointer",
      fontSize: 18,
      transition: "border-color .25s, color .25s, transform .25s",
      transform: hovered ? "translateY(-2px)" : "none",
      ...t.arrow,
      ...(hovered
        ? { borderColor: t.arrowHoverBorder, color: t.arrowHoverColor }
        : null),
    } as React.CSSProperties;
  };

  const track = (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transform: `translateX(-${active * 100}%)`,
          transition: "transform .6s cubic-bezier(.16,.84,.44,1)",
        }}
      >
        {testimonials.map((q) => (
          <figure key={q.name + q.org} style={{ flex: "0 0 100%", margin: 0, padding: "0 1px" }}>
            <blockquote
              style={{
                margin: 0,
                fontSize: "clamp(22px,2.8vw,36px)",
                fontWeight: t.quoteWeight,
                lineHeight: 1.34,
                letterSpacing: "-.01em",
                color: t.quoteColor,
                maxWidth: "26ch",
              }}
            >
              <span style={{ color: t.mark }}>“</span>
              {q.quote}
            </blockquote>
            <figcaption
              style={{
                marginTop: 30,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 48,
                  height: 48,
                  borderRadius: 999,
                  overflow: "hidden",
                  position: "relative",
                  border: `1px solid ${t.dotTrack}`,
                }}
              >
                <Image
                  src={q.avatar}
                  alt={`${q.name}, ${q.org}`}
                  fill
                  sizes="48px"
                  style={{ objectFit: "cover" }}
                />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: ".12em",
                  color: t.name,
                }}
              >
                {q.name}
                <span style={{ display: "block", color: t.org, marginTop: 4 }}>
                  {q.org}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );

  return (
    <div className="rise">
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ ...monoLabel, color: t.label }}>
          Trusted across UK · US · EMEA
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            aria-label="Previous testimonial"
            onClick={() => {
              stopAuto();
              go(active - 1);
            }}
            onMouseEnter={() => setHover("prev")}
            onMouseLeave={() => setHover(null)}
            style={arrowBtn("prev")}
          >
            ←
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => {
              stopAuto();
              go(active + 1);
            }}
            onMouseEnter={() => setHover("next")}
            onMouseLeave={() => setHover(null)}
            style={arrowBtn("next")}
          >
            →
          </button>
        </div>
      </div>

      <div style={{ marginTop: 36 }}>
        {t.wrapper ? <div style={t.wrapper}>{track}</div> : track}
      </div>

      <div style={{ marginTop: 28, display: "flex", gap: 10 }}>
        {testimonials.map((q, i) => {
          const on = i === active;
          if (t.dotStyle === "pill") {
            return (
              <button
                key={q.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  stopAuto();
                  go(i);
                }}
                style={{
                  height: 6,
                  width: on ? 42 : 6,
                  borderRadius: 999,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: on ? t.dotActive : t.dotTrack,
                  transition: "width .3s, background .3s",
                }}
              />
            );
          }
          return (
            <button
              key={q.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                stopAuto();
                go(i);
              }}
              style={{
                height: 3,
                width: 48,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: on ? t.dotActive : t.dotTrack,
                transition: "background .3s",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
