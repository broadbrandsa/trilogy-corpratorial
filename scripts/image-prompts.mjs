// Nano Banana prompt manifest for the Trilogy editorial direction.
// Shared cinematic-duotone-+-green treatment so every frame reads as one shoot.

export const STYLE =
  "Photoreal cinematic still, shot on 35mm with shallow depth of field. " +
  "The environment is deep ink black (#0A0A0A) with crushed shadows. A single " +
  "electric-green (#2FE85C) rim light or practical light is the ONLY saturated " +
  "colour in the frame. Neutral paper-toned skin and surfaces, very high contrast, " +
  "fine film grain, subtle vignette. Restrained, premium, enterprise-grade mood. " +
  "No text, no logos, no watermarks, no UI overlays, no captions, no purple, no teal, no pink.";

// aspect: passed to imageConfig.aspectRatio and also stated in the prompt.
export const IMAGES = [
  // ---- Hero variants (pick one) ----
  {
    id: "hero-01",
    filename: "hero-01",
    aspect: "16:9",
    group: "hero",
    alt: "A human contact-centre operator working alongside a humanoid android at a dark workstation, lit by electric-green light.",
    prompt:
      "Calm wide two-shot. A human contact-centre operator in their mid-30s wearing a slim headset, focused and warm, sits at a dark workstation beside a sleek humanoid android with a smooth matte-white face and softly glowing green eyes. They study the same unseen screen just off-frame, working as equals. A green rim light traces the android's profile. Generous empty negative space on the LEFT third of the frame for headline text. Human and machine, partnership.",
  },
  {
    id: "hero-02",
    filename: "hero-02",
    aspect: "16:9",
    group: "hero",
    alt: "Profile two-shot of a human and a humanoid android facing each other, separated by a thin green edge light.",
    prompt:
      "Tight cinematic profile two-shot: a human and a humanoid android facing each other in low-key light, a thin electric-green edge light separating both from the ink-black background. Mutual attention and trust between them. Empty negative space at frame-left for text.",
  },
  {
    id: "hero-03",
    filename: "hero-03",
    aspect: "16:9",
    group: "hero",
    alt: "Over-the-shoulder view of a human operator at a dark desk as a humanoid android leans in to assist.",
    prompt:
      "Over-the-shoulder shot of a human operator at a dark desk; a humanoid android leans in from the side to assist. A soft green screen glow lights both faces. Deep black surroundings, quiet and collaborative. Negative space in the upper-left for text.",
  },
  {
    id: "hero-fem",
    filename: "hero-fem",
    aspect: "16:9",
    group: "hero",
    alt: "A female contact-centre operator working alongside a humanoid android at a dark workstation, lit by electric-green light.",
    prompt:
      "Calm wide two-shot. A female contact-centre operator in her early 30s wearing a slim headset, composed, warm and capable, sits at a dark workstation beside a sleek humanoid android with a smooth matte-white face and softly glowing green eyes. She leads; they study the same unseen screen just off-frame, working as equals. A green rim light traces the android's profile. Generous empty negative space on the LEFT third of the frame for headline text. Human and machine, partnership and trust.",
  },
  // ---- Offerings ----
  {
    id: "offer-bpo",
    filename: "offer-bpo",
    aspect: "4:5",
    group: "offer",
    alt: "A contact-centre floor at night, rows of human agents in headsets lit by the green glow of their monitors.",
    prompt:
      "A modern contact-centre floor at night seen in deep shadow. Rows of human agents in headsets, lit only by the soft electric-green glow of their monitors. One subtle humanoid android present among them. Cinematic depth and falloff, ink-black ceiling and walls.",
  },
  {
    id: "offer-gcc",
    filename: "offer-gcc",
    aspect: "4:5",
    group: "offer",
    alt: "A small team reviewing a glowing green holographic building floorplate in a dark space.",
    prompt:
      "A Global Capability Centre being designed and built: a small team of professionals gathered around a glowing electric-green holographic architectural floorplate of a building, in a dark fit-out space with faint scaffolding and facility hints in shadow. The 'design and build' of an operation, deliberate and expert.",
  },
  {
    id: "offer-ai",
    filename: "offer-ai",
    aspect: "4:5",
    group: "offer",
    alt: "Close-up of a human hand and a humanoid android hand near a single glowing green approval control.",
    prompt:
      "Extreme close two-shot, agent-in-the-loop. A human hand and a humanoid android hand both reach toward a single floating electric-green approval control (an abstract glowing dot, no text) in ink-black space. The human is in command; the machine proposes. Intimate and decisive.",
  },
  // ---- AI demo backdrop (darker, low detail, sits behind UI) ----
  {
    id: "ai-demo",
    filename: "ai-demo",
    aspect: "16:9",
    group: "ai",
    alt: "A human supervisor in silhouette watching a softly green-lit humanoid android conduct a conversation.",
    prompt:
      "A human supervisor in near-silhouette watches a humanoid android conduct a conversation. The android is lit by a soft green key light; the background is very dark and low in detail, with lots of quiet negative space so the image can sit behind on-screen text. Observational and calm.",
  },
  {
    id: "hero-services",
    filename: "hero-services",
    aspect: "16:9",
    group: "hero",
    alt: "A human customer-service operator in a headset working beside a humanoid android at a dark desk with green-lit screens.",
    prompt:
      "Wide cinematic shot: a human customer-service operator wearing a headset works beside a sleek humanoid android at a long dark desk with several screens glowing soft electric green. Collaborative, calm, ink-black environment. Generous empty negative space on the left for headline text.",
  },
  {
    id: "hero-about",
    filename: "hero-about",
    aspect: "16:9",
    group: "hero",
    alt: "A wide establishing shot of an empty modern contact-centre floor at night, rows of workstations lit by green monitor glow, no people.",
    prompt:
      "Wide cinematic establishing shot of an empty modern contact-centre operations floor at night. Long rows of unoccupied workstations and monitors glowing soft electric green, conveying scale and infrastructure. Absolutely no people in the frame. Deep ink-black ceiling and walls, cinematic depth and falloff. Empty negative space in the upper-left for text.",
  },
  {
    id: "hero-team",
    filename: "hero-team",
    aspect: "16:9",
    group: "hero",
    alt: "An empty modern executive boardroom in low light with a soft green glow, no people.",
    prompt:
      "Wide cinematic shot of an empty modern executive boardroom in low light: a long table, empty chairs, a soft electric-green glow from a screen on the far wall. Absolutely no people in the frame. Deep ink-black surroundings, shallow depth of field, calm and premium. Empty negative space on the left for text.",
  },
];
