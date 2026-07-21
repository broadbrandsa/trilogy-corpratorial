"use client";

import { useEffect, useRef, useState } from "react";
import LoopVideo from "@/components/LoopVideo";
import { offerings } from "@/lib/content";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

/**
 * Hugo-style pinned horizontal gallery: while the tall outer section scrolls,
 * the inner viewport stays pinned and the offering panels slide sideways.
 * Disabled (plain vertical stack) on narrow screens and when the user prefers
 * reduced motion.
 */
export default function PinnedGallery() {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const decide = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setPinned(window.innerWidth >= 900 && !reduce);
    };
    decide();
    window.addEventListener("resize", decide);
    return () => window.removeEventListener("resize", decide);
  }, []);

  useEffect(() => {
    if (!pinned) {
      if (track.current) track.current.style.transform = "";
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const sec = outer.current;
        const tr = track.current;
        if (!sec || !tr) return;
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / total));
        const dist = tr.scrollWidth - window.innerWidth;
        tr.style.transform = `translate3d(${-p * dist}px,0,0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pinned]);

  const panels = offerings.map((o, i) => (
    <article
      key={o.key}
      style={{
        flex: pinned ? "0 0 100vw" : "1 1 auto",
        minWidth: 0,
        height: pinned ? "100vh" : "auto",
        display: "grid",
        gridTemplateColumns: pinned ? "1.05fr 0.95fr" : "1fr",
        gap: pinned ? 56 : 28,
        alignItems: "center",
        padding: pinned ? "0 7vw" : "0",
        borderTop: pinned ? "none" : "1px solid rgba(255,255,255,.12)",
        paddingTop: pinned ? 0 : 56,
        marginTop: pinned ? 0 : 56,
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span style={{ fontSize: "clamp(40px,5vw,72px)", fontWeight: 700, lineHeight: 1, color: "#2FE85C", letterSpacing: "-.03em" }}>
            {o.index}
          </span>
          <span style={mono({ fontSize: 13, letterSpacing: ".18em", color: "rgba(247,245,240,.5)" })}>
            {o.kicker}
          </span>
        </div>
        <h3 style={{ margin: "18px 0 0", maxWidth: "16ch", fontSize: "clamp(30px,4vw,56px)", fontWeight: 300, lineHeight: 1.04, letterSpacing: "-.02em", color: "#F7F5F0" }}>
          {o.name}. {o.headline}
        </h3>
        <p style={{ margin: "20px 0 0", maxWidth: "46ch", fontSize: 17, fontWeight: 300, lineHeight: 1.7, color: "rgba(247,245,240,.62)" }}>
          {o.body}
        </p>
        <ul style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "flex", flexWrap: "wrap", gap: "10px 12px" }}>
          {o.points.map((p) => (
            <li key={p} style={mono({ fontSize: 12, letterSpacing: ".08em", color: "#2FE85C", border: "1px solid rgba(47,232,92,.3)", borderRadius: 999, padding: "8px 14px" })}>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="lift"
        style={{
          position: "relative",
          aspectRatio: pinned ? "4 / 5" : "16 / 10",
          width: "100%",
          maxHeight: pinned ? "76vh" : "none",
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,.12)",
          background: "#0A0A0A",
        }}
      >
        <LoopVideo key={o.video} src={o.video} poster={o.image} videoKey={o.video} />
        <span aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0) 60%, rgba(10,10,10,.5) 100%)" }} />
      </div>
    </article>
  ));

  if (!pinned) {
    return <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>{panels}</div>;
  }

  return (
    <div ref={outer} style={{ position: "relative", height: `${offerings.length * 100}vh` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div ref={track} style={{ display: "flex", willChange: "transform", transition: "transform 0.1s linear" }}>
          {panels}
        </div>
      </div>
    </div>
  );
}
