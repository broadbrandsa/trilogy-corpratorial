"use client";

import { useEffect } from "react";

/**
 * Adds `.is-in` to every `.rise` element as it scrolls into view.
 * One instance per page is enough. Respects reduced-motion via CSS.
 */
export default function RevealManager() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rise"));
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
