import Image from "next/image";
import { people, COMPANY_LINKEDIN } from "@/lib/content";

type Variant = "editorial" | "warmth" | "corporate";

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

export default function People({ variant }: { variant: Variant }) {
  const dark = variant === "editorial";
  const nameColor = dark ? "#F7F5F0" : variant === "corporate" ? "#0E1B2A" : "#20201C";
  const roleColor = dark ? "#2FE85C" : variant === "corporate" ? "#0E7C46" : "#15473A";
  const border = dark ? "1px solid rgba(255,255,255,.1)" : "1px solid rgba(14,27,42,.1)";

  // One continuous grid: the executive team flows into the board on the same
  // rows rather than starting a separate block.
  return (
    <div
      style={{
        marginTop: 48,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 20,
      }}
    >
      {people.map((p) => {
        // Personal profile where we have it; otherwise the company page.
        const href = "linkedin" in p && p.linkedin ? p.linkedin : COMPANY_LINKEDIN;
        return (
          <a
            key={p.name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name} on LinkedIn`}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            {/* Static card (no hover animation): click through to LinkedIn. */}
            <figure className="rise" style={{ margin: 0 }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  borderRadius: 12,
                  overflow: "hidden",
                  border,
                  background: dark ? "#0A0A0A" : "#ECE9E2",
                }}
              >
                <Image
                  src={p.image}
                  alt={`${p.name}, ${p.role}`}
                  fill
                  sizes="(max-width: 760px) 45vw, 200px"
                  style={{ objectFit: "cover", objectPosition: "center 18%" }}
                />
                {dark ? (
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(10,10,10,0) 60%, rgba(10,10,10,.5) 100%)",
                    }}
                  />
                ) : null}
              </div>
              <figcaption>
                <div
                  style={{
                    marginTop: 14,
                    fontSize: 16,
                    fontWeight: dark ? 300 : 500,
                    letterSpacing: "-.01em",
                    color: nameColor,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={mono({
                    marginTop: 4,
                    fontSize: 12,
                    letterSpacing: ".1em",
                    lineHeight: 1.4,
                    color: roleColor,
                  })}
                >
                  {p.role}
                </div>
              </figcaption>
            </figure>
          </a>
        );
      })}
    </div>
  );
}
