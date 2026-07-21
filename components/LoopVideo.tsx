"use client";

import { useEffect, useState } from "react";

/**
 * Fills its (position: relative) parent with a muted, autoplaying, looping
 * cinemagraph. The poster still shows instantly (and is the LCP candidate),
 * and fully replaces the video when the user prefers reduced motion.
 */
export default function LoopVideo({
  src,
  poster,
  objectPosition = "center",
  videoKey,
}: {
  src: string;
  poster: string;
  objectPosition?: string;
  videoKey?: string;
}) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);

  const cover: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition,
  };

  if (reduced) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" aria-hidden style={cover} />;
  }

  return (
    <video
      key={videoKey ?? src}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      style={cover}
    />
  );
}
