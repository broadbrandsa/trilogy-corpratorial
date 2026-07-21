import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/corporate/about" },
      { label: "Team", href: "/corporate/team" },
      { label: "Why South Africa", href: "/corporate/why-south-africa" },
    ],
  },
  {
    title: "What we do",
    links: [
      { label: "Services", href: "/corporate/services" },
      { label: "AI & Technology", href: "/corporate/ai" },
      { label: "Insights", href: "/corporate#insights" },
    ],
  },
];

export default function CorpFooter() {
  return (
    <footer style={{ position: "relative", zIndex: 10, background: "#0E1B2A", color: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 28px 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }} className="t-footer">
        <div style={{ maxWidth: "34ch" }}>
          <Image src="/logo/trilogy-deck-dark.png" alt="Trilogy" width={768} height={192} style={{ height: 25, width: "auto" }} />
          <p style={{ margin: "22px 0 0", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.6)" }}>
            Human empathy meets AI efficiency. Customer experience operations built, staffed and run from Cape Town, South Africa.
          </p>
          <div style={mono({ marginTop: 22, fontSize: 12, letterSpacing: ".1em", color: "rgba(255,255,255,.5)", lineHeight: 1.9 })}>
            UK {brand.phones.uk}
            <br />
            SA {brand.phones.sa}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div style={mono({ fontSize: 11, letterSpacing: ".16em", color: "#2FE85C" })}>{c.title}</div>
            <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="nav-link nav-acc-green" style={{ color: "rgba(255,255,255,.78)", textDecoration: "none", fontSize: 14 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={mono({ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "24px 28px", borderTop: "1px solid rgba(255,255,255,.1)", fontSize: 10, letterSpacing: ".16em", color: "rgba(255,255,255,.45)" })}>
        <span>© 2026 Trilogy · {brand.location}</span>
        <span>三 · AI-enabled BPO</span>
      </div>
    </footer>
  );
}
