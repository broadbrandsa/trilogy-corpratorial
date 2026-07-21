"use client";

import { useEffect, useRef, useState } from "react";
import { demoConversation } from "@/lib/content";

type Variant = "editorial" | "warmth" | "corporate";

type Msg = { role: "customer" | "ai"; text: string; approved?: boolean; approvalText?: string };

type DemoTheme = {
  card: React.CSSProperties;
  headerBorder: string;
  headerLabel: string;
  customer: React.CSSProperties;
  avatar: React.CSSProperties;
  aiBubble: React.CSSProperties;
  accent: string;
  resolvedMuted: string;
  dot: string;
  footerBorder: string;
};

const THEMES: Record<Variant, DemoTheme> = {
  editorial: {
    card: {
      border: "1px solid rgba(255,255,255,.12)",
      borderRadius: 18,
      background: "#0E0E0E",
      boxShadow: "0 30px 70px rgba(0,0,0,.5)",
    },
    headerBorder: "rgba(255,255,255,.08)",
    headerLabel: "rgba(247,245,240,.6)",
    customer: {
      background: "#F7F5F0",
      color: "#0A0A0A",
      borderRadius: "16px 16px 4px 16px",
    },
    avatar: { background: "rgba(47,232,92,.15)", color: "#2FE85C", borderRadius: 999 },
    aiBubble: {
      background: "rgba(255,255,255,.06)",
      border: "1px solid rgba(255,255,255,.08)",
      color: "#F7F5F0",
      borderRadius: "4px 16px 16px 16px",
    },
    accent: "#2FE85C",
    resolvedMuted: "rgba(247,245,240,.5)",
    dot: "#2FE85C",
    footerBorder: "rgba(255,255,255,.08)",
  },
  warmth: {
    card: {
      border: "1px solid rgba(32,32,28,.07)",
      borderRadius: 24,
      background: "#FFFFFF",
      boxShadow: "0 30px 70px rgba(21,71,58,.12)",
    },
    headerBorder: "rgba(32,32,28,.07)",
    headerLabel: "rgba(32,32,28,.55)",
    customer: {
      background: "#15473A",
      color: "#FBF8F3",
      borderRadius: "18px 18px 5px 18px",
    },
    avatar: { background: "rgba(21,71,58,.1)", color: "#15473A", borderRadius: 999 },
    aiBubble: {
      background: "#F3ECE1",
      border: "1px solid rgba(32,32,28,.06)",
      color: "#20201C",
      borderRadius: "5px 18px 18px 18px",
    },
    accent: "#15473A",
    resolvedMuted: "rgba(32,32,28,.5)",
    dot: "#15473A",
    footerBorder: "rgba(32,32,28,.07)",
  },
  corporate: {
    card: {
      border: "1px solid rgba(14,27,42,.1)",
      borderRadius: 14,
      background: "#FFFFFF",
      boxShadow: "0 30px 70px rgba(14,27,42,.1)",
    },
    headerBorder: "rgba(14,27,42,.08)",
    headerLabel: "rgba(14,27,42,.55)",
    customer: {
      background: "#0E1B2A",
      color: "#FFFFFF",
      borderRadius: "14px 14px 4px 14px",
    },
    avatar: { background: "rgba(14,124,70,.1)", color: "#0E7C46", borderRadius: 8 },
    aiBubble: {
      background: "#F4F7F9",
      border: "1px solid rgba(14,27,42,.07)",
      color: "#0E1B2A",
      borderRadius: "4px 14px 14px 14px",
    },
    accent: "#0E7C46",
    resolvedMuted: "rgba(14,27,42,.5)",
    dot: "#0E7C46",
    footerBorder: "rgba(14,27,42,.08)",
  },
};

export default function AiDemo({ variant }: { variant: Variant }) {
  const t = THEMES[variant];
  const rootRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const playing = useRef(false);

  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [resolved, setResolved] = useState(false);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Data-driven playback so the scripted conversation can be any length.
  const play = () => {
    clear();
    playing.current = true;
    setMessages([]);
    setTyping(false);
    setResolved(false);
    const at = (ms: number, fn: () => void) =>
      timers.current.push(setTimeout(fn, ms));
    let cursor = 450;
    demoConversation.forEach((line) => {
      const approval = "approval" in line ? line.approval : undefined;
      if (line.role === "ai") {
        at(cursor, () => setTyping(true));
        cursor += 1200;
        at(cursor, () => {
          setTyping(false);
          setMessages((m) => [
            ...m,
            { role: "ai", text: line.text, approved: false, approvalText: approval },
          ]);
        });
        if (approval) {
          cursor += 800;
          at(cursor, () =>
            setMessages((m) =>
              m.map((msg, i) => (i === m.length - 1 ? { ...msg, approved: true } : msg)),
            ),
          );
        }
        cursor += 700;
      } else {
        at(cursor, () =>
          setMessages((m) => [...m, { role: "customer", text: line.text }]),
        );
        cursor += 900;
      }
    });
    at(cursor, () => setResolved(true));
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = () => {
      if (playing.current) return;
      play();
    };
    if (reduced || !("IntersectionObserver" in window)) {
      // Show the resolved end-state immediately.
      setMessages(
        demoConversation.map((line) => {
          const approval = "approval" in line ? line.approval : undefined;
          return {
            role: line.role,
            text: line.text,
            approved: !!approval,
            approvalText: approval,
          };
        }),
      );
      setResolved(true);
      playing.current = true;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing, resolved]);

  const monoLabel: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: ".14em",
  };

  return (
    <div
      ref={rootRef}
      className="rise"
      style={{ ...t.card, overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "15px 20px",
          borderBottom: `1px solid ${t.headerBorder}`,
        }}
      >
        <span
          className="anim-pulse"
          style={{
            width: 9,
            height: 9,
            borderRadius: 999,
            background: "#2FE85C",
            animation: "trilogy-pulse 2s ease-in-out infinite",
          }}
        />
        <span style={{ ...monoLabel, color: t.headerLabel }}>
          Live conversation · #4821
        </span>
      </div>

      <div
        ref={chatRef}
        style={{
          height: 340,
          overflowY: "auto",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {messages.map((m, i) =>
          m.role === "customer" ? (
            <div
              key={i}
              style={{
                alignSelf: "flex-end",
                maxWidth: "78%",
                animation: "trilogy-msgin .4s ease both",
              }}
            >
              <div
                style={{
                  ...t.customer,
                  padding: "12px 16px",
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                {m.text}
              </div>
            </div>
          ) : (
            <div
              key={i}
              style={{
                alignSelf: "flex-start",
                maxWidth: "84%",
                animation: "trilogy-msgin .4s ease both",
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span
                  style={{
                    ...t.avatar,
                    flex: "none",
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                  }}
                >
                  三
                </span>
                <div>
                  <div
                    style={{
                      ...t.aiBubble,
                      padding: "12px 16px",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {m.text}
                  </div>
                  {m.approved ? (
                    <div
                      style={{
                        marginTop: 8,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: ".12em",
                        color: t.accent,
                        animation: "trilogy-chip .35s ease both",
                      }}
                    >
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 999,
                          background: "#2FE85C",
                          color: "#0A1F12",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                        }}
                      >
                        ✓
                      </span>
                      {m.approvalText}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ),
        )}

        {typing ? (
          <div
            style={{
              alignSelf: "flex-start",
              display: "flex",
              gap: 10,
              alignItems: "center",
              animation: "trilogy-msgin .3s ease both",
            }}
          >
            <span
              style={{
                ...t.avatar,
                flex: "none",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
              }}
            >
              三
            </span>
            <div
              style={{
                ...t.aiBubble,
                padding: "13px 16px",
                display: "flex",
                gap: 5,
              }}
            >
              {[0, 0.2, 0.4].map((d) => (
                <span
                  key={d}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: t.dot,
                    animation: `trilogy-typed 1.2s infinite ${d}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {resolved ? (
        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            padding: "14px 20px",
            borderTop: `1px solid ${t.footerBorder}`,
            animation: "trilogy-chip .4s ease both",
          }}
        >
          {[
            ["Resolved in", "38s"],
            ["CSAT", "5.0 ★"],
            ["Human touch", "1 tap"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                color: t.resolvedMuted,
              }}
            >
              {k} <span style={{ color: t.accent, fontWeight: 700 }}>{v}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
