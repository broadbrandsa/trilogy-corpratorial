import Image from "next/image";
import { brand } from "@/lib/content";

/**
 * Shared header + footer for the site, used by the single-page home and by
 * routed subpages (e.g. Trilogy Digital). Nav links are absolute to the site
 * root so anchors resolve from any subpage.
 */

const INK = "#0E1B2A";
const BRIGHT = "#2FE85C";
const BORDER = "rgba(14,27,42,.1)";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

export const corpratorialNav = [
  { label: "Offerings", href: "/#offerings" },
  { label: "Team", href: "/#team" },
  { label: "Trilogy Digital", href: "/trilogy-digital" },
  { label: "Partners", href: "/#partners" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

export function CorpratorialHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${BORDER}`,
        background: "rgba(255,255,255,.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 28px",
        }}
      >
        <a href="/" aria-label="Trilogy home" style={{ display: "inline-flex", flex: "none" }}>
          <Image
            src="/logo/trilogy-deck-light.png"
            alt="Trilogy"
            width={768}
            height={192}
            priority
            style={{ height: 26, width: "auto" }}
          />
        </a>
        <nav
          className="t-nav"
          style={mono({
            display: "flex",
            gap: 26,
            fontSize: 12.5,
            letterSpacing: ".16em",
            color: "rgba(14,27,42,.6)",
          })}
        >
          {corpratorialNav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link nav-acc-navy" style={{ color: "inherit", textDecoration: "none" }}>
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="/#contact"
          className="nav-cta"
          style={mono({
            flex: "none",
            background: INK,
            color: "#fff",
            padding: "9px 20px",
            borderRadius: 999,
            fontSize: 12.5,
            fontWeight: 500,
            letterSpacing: ".14em",
            textDecoration: "none",
          })}
        >
          Book a session
        </a>
      </div>
    </header>
  );
}

export function CorpratorialFooter() {
  return (
    <footer style={{ position: "relative", zIndex: 10, background: INK, color: "#fff" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "72px 28px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        <div style={{ maxWidth: "32ch" }}>
          <Image
            src="/logo/trilogy-deck-dark.png"
            alt="Trilogy"
            width={768}
            height={192}
            style={{ height: 26, width: "auto" }}
          />
          <p
            style={{
              margin: "22px 0 0",
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.6,
              color: "rgba(255,255,255,.55)",
            }}
          >
            {brand.promise.line1} {brand.promise.line2} Customer experience
            operations built, staffed and run from Cape Town, South Africa.
          </p>
          <div
            style={mono({
              marginTop: 18,
              fontSize: 12,
              letterSpacing: ".1em",
              lineHeight: 1.9,
              color: "rgba(255,255,255,.6)",
            })}
          >
            <a href={`mailto:${brand.email}`} style={{ color: BRIGHT, textDecoration: "none" }}>{brand.email}</a>
            <br />
            UK {brand.phones.uk}
            <br />
            SA {brand.phones.sa}
          </div>
        </div>
        <nav
          style={mono({
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            fontSize: 13,
            letterSpacing: ".14em",
            color: "rgba(255,255,255,.6)",
          })}
        >
          {corpratorialNav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link nav-acc-green" style={{ color: "inherit", textDecoration: "none" }}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
      <div
        style={mono({
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          padding: "24px 28px",
          borderTop: "1px solid rgba(255,255,255,.1)",
          fontSize: 12,
          letterSpacing: ".16em",
          color: "rgba(255,255,255,.45)",
        })}
      >
        <span>© 2026 {brand.legalName} · {brand.location}</span>
        <span>三 · {brand.tagline}</span>
      </div>
    </footer>
  );
}
