"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { directions } from "@/lib/content";

/**
 * Floating control to hop between the three design directions while comparing.
 * Neutral ink/paper styling so it reads on both dark and light pages.
 */
export default function DirectionSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 px-4">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-ink/90 p-1 font-mono text-[11px] tracking-[0.14em] uppercase text-paper shadow-2xl backdrop-blur">
        <Link
          href="/"
          className="hidden rounded-full px-3 py-2 text-stone transition-colors hover:text-paper sm:block"
          aria-label="All directions"
        >
          三
        </Link>
        {directions.map((d) => {
          const href = `/${d.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={d.slug}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3 py-2 transition-colors ${
                active ? "bg-green text-ink" : "text-paper/70 hover:text-paper"
              }`}
            >
              {d.name.split(" ")[0]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
