"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

const links = [
  { label: "Services", href: "/corporate/services" },
  { label: "AI & Technology", href: "/corporate/ai" },
  { label: "Why South Africa", href: "/corporate/why-south-africa" },
  { label: "Market Insights", href: "/corporate/insights" },
  { label: "About", href: "/corporate/about" },
  { label: "Team", href: "/corporate/team" },
];

export default function CorpHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // close the mobile menu on navigation
  useEffect(() => setOpen(false), [path]);

  const isActive = (href: string) => path === href || path.startsWith(`${href}/`);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(14,27,42,.09)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "16px 28px",
        }}
      >
        <Link href="/corporate" aria-label="Trilogy home" style={{ display: "inline-flex", flex: "none" }}>
          <Image
            src="/logo/trilogy-deck-light.png"
            alt="Trilogy"
            width={768}
            height={192}
            priority
            style={{ height: 25, width: "auto" }}
          />
        </Link>
        <nav className="t-nav" style={mono({ display: "flex", gap: 26, fontSize: 12.5, letterSpacing: ".12em", color: "rgba(14,27,42,.6)" })}>
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className="nav-link nav-acc-navy"
                style={{ color: active ? "#0E7C46" : "inherit", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            href="/corporate#contact"
            className="nav-cta"
            style={mono({ flex: "none", background: "#0E1B2A", color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 12.5, fontWeight: 500, letterSpacing: ".1em", textDecoration: "none" })}
          >
            Book a session
          </Link>
          {/* mobile menu toggle: only visible when .t-nav is hidden */}
          <button
            type="button"
            className="t-nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              display: "none",
              flex: "none",
              width: 42,
              height: 42,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              border: "1px solid rgba(14,27,42,.14)",
              background: "#fff",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
              color: "#0E1B2A",
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      {open ? (
        <nav
          className="t-nav-mobile"
          style={{
            display: "none",
            flexDirection: "column",
            borderTop: "1px solid rgba(14,27,42,.09)",
            background: "#fff",
            padding: "10px 16px 18px",
          }}
        >
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                style={mono({
                  padding: "14px 12px",
                  fontSize: 13.5,
                  letterSpacing: ".12em",
                  color: active ? "#0E7C46" : "#0E1B2A",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(14,27,42,.06)",
                })}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
