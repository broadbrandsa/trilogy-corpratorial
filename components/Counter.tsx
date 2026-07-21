"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to a numeric value the first time it scrolls into view.
 * Accepts the display string from content (e.g. "10,000+", "6 wks",
 * "25+ yrs") and animates the leading number while preserving any
 * prefix/suffix. Respects reduced-motion.
 */
export default function Counter({
  value,
  className,
  style,
}: {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/[\d,]+(?:\.\d+)?/);
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!match || reduced) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[0].replace(/,/g, ""));
    const at = match.index ?? 0;
    const prefix = value.slice(0, at);
    const suffix = value.slice(at + match[0].length);

    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const dur = 1300;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(
          prefix + Math.floor(eased * target).toLocaleString("en-US") + suffix,
        );
        if (p < 1) requestAnimationFrame(step);
        else setDisplay(value);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
