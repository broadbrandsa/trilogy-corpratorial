"use client";

import { useState } from "react";

/**
 * Interactive economics calculator for the Corpratorial "The economics"
 * section. Layers the savings model from the deck:
 *   • 40–60% offshoring saving vs a UK operation  (midpoint 50%)
 *   • a further 20–30% via a GCC structure         (midpoint 25%, on the SA cost)
 *   • plus further digital + AI deflection (shown qualitatively, not invented)
 * Seats and the UK cost-per-seat are user-adjustable; the baseline is an input,
 * not a hard-coded figure.
 */

const INK = "#0E1B2A";
const GREEN = "#0E7C46";
const MIST = "#F4F7F9";
const BORDER = "rgba(14,27,42,.1)";
const MUTED = "rgba(14,27,42,.64)";

const SA_SAVING = 0.5; // mid of 40–60%
const GCC_SAVING = 0.25; // mid of 20–30%, applied on the SA cost

const GBP0 = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

// Summarise large annual figures in thousands so the width stays stable as the
// sliders move (e.g. £12,960,000 → £12,960k).
const GBPk = (v: number) => `£${Math.round(v / 1000).toLocaleString("en-GB")}k`;

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  ...extra,
});

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <span style={mono({ fontSize: 12, letterSpacing: ".14em", color: MUTED })}>{label}</span>
        <span style={{ fontSize: 22, fontWeight: 300, letterSpacing: "-.01em", color: INK, fontVariantNumeric: "tabular-nums" }}>
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", marginTop: 14, accentColor: GREEN, cursor: "pointer" }}
      />
    </label>
  );
}

export default function SavingsCalculator() {
  const [seats, setSeats] = useState(50);
  const [costPerSeat, setCostPerSeat] = useState(3000); // £ / seat / month, UK fully-loaded

  const baseline = seats * costPerSeat * 12;
  const saCost = baseline * (1 - SA_SAVING);
  const gccCost = saCost * (1 - GCC_SAVING);
  const saPct = Math.round(SA_SAVING * 100);
  const gccTotalPct = Math.round((1 - gccCost / baseline) * 100);

  const card: React.CSSProperties = {
    background: "#fff",
    border: `1px solid ${BORDER}`,
    borderRadius: 14,
    padding: "26px 24px",
  };
  const cardLabel = mono({ fontSize: 11.5, letterSpacing: ".14em", color: MUTED });
  const cardValue: React.CSSProperties = {
    margin: "12px 0 0",
    fontSize: "clamp(26px,3vw,38px)",
    fontWeight: 300,
    letterSpacing: "-.02em",
    color: INK,
    fontVariantNumeric: "tabular-nums",
  };
  const badge = (bg: string, color: string): React.CSSProperties =>
    mono({ display: "inline-block", marginTop: 12, padding: "5px 12px", borderRadius: 999, background: bg, color, fontSize: 11.5, letterSpacing: ".08em" });

  return (
    <div className="rise" style={{ display: "grid", gridTemplateColumns: "340px minmax(0, 1fr)", gap: 28, alignItems: "start" }} data-calc>
      {/* controls */}
      <div style={{ background: MIST, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 30 }}>
        <Slider
          label="Seats"
          value={seats}
          min={10}
          max={1000}
          step={10}
          display={`${seats}`}
          onChange={setSeats}
        />
        <Slider
          label="UK cost / seat / month"
          value={costPerSeat}
          min={1500}
          max={5000}
          step={100}
          display={GBP0.format(costPerSeat)}
          onChange={setCostPerSeat}
        />
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: MUTED }}>
          Adjust the sliders for your operation. Figures are illustrative annual costs based on the deck&apos;s savings model.
        </p>
      </div>

      {/* results */}
      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }} className="t-3">
          <div style={card}>
            <div style={cardLabel}>Your UK baseline</div>
            <div style={cardValue}>{GBPk(baseline)}</div>
            <div style={{ marginTop: 8, fontSize: 13, color: MUTED }}>per year · {seats} seats</div>
          </div>
          <div style={card}>
            <div style={cardLabel}>Outsourced to South Africa</div>
            <div style={cardValue}>{GBPk(saCost)}</div>
            <div style={badge("rgba(14,124,70,.1)", GREEN)}>Save ~{saPct}%</div>
          </div>
          <div style={{ ...card, background: INK, border: "none", color: "#fff" }}>
            <div style={mono({ fontSize: 11.5, letterSpacing: ".14em", color: "rgba(255,255,255,.6)" })}>As a GCC</div>
            <div style={{ ...cardValue, color: "#fff" }}>{GBPk(gccCost)}</div>
            <div style={badge("#2FE85C", "#0A1F12")}>Save ~{gccTotalPct}% total</div>
          </div>
        </div>
        <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.65, color: MUTED }}>
          Offshoring saves 40–60% versus a UK operation; a GCC structure adds a further 20–30%, and digital plus AI deflection compounds from there.
        </p>
      </div>
    </div>
  );
}
