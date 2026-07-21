import Image from "next/image";
import { brandWall } from "@/lib/content";

type Variant = "editorial" | "warmth" | "corporate" | "motion";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

const THEME: Record<Variant, { label: string }> = {
  editorial: { label: "rgba(247,245,240,.45)" },
  motion: { label: "rgba(247,245,240,.45)" },
  warmth: { label: "rgba(32,32,28,.5)" },
  corporate: { label: "rgba(14,27,42,.55)" },
};

function Row({ logos }: { logos: readonly { name: string; src: string }[] }) {
  // Every logo sits on its own white tile so dark marks stay legible on any
  // section background. Tight grid, uniform tile height.
  return (
    <div
      className="t-logo-grid"
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(126px, 1fr))", gap: 10 }}
    >
      {logos.map((l) => (
        <div
          key={l.name}
          title={l.name}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 64,
            background: "#fff",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,.07)",
            padding: "10px 14px",
          }}
        >
          <Image src={l.src} alt={l.name} width={150} height={44} style={{ height: 36, width: "100%", objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}

export default function BrandWall({ variant }: { variant: Variant }) {
  const t = THEME[variant];
  return (
    <div className="rise" style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 26 }}>
      {brandWall.groups.map((g) => (
        <div key={g.label}>
          <div style={mono({ fontSize: 12, letterSpacing: ".18em", color: t.label, marginBottom: 12 })}>{g.label}</div>
          <Row logos={g.logos} />
        </div>
      ))}
    </div>
  );
}
