// Single source of truth for Trilogy BPO marketing content.
// Shared across all three design directions so copy stays identical
// and only the art direction differs.

export const brand = {
  name: "Trilogy",
  full: "Trilogy BPO",
  tagline: "AI-enabled BPO",
  // The single message, per the client deck landing page:
  // "Human Empathy meets AI Efficiency" / "Making Customer Engagement Offshoring Easy!"
  promise: {
    line1: "Human empathy",
    line2: "meets AI efficiency.",
    sub: "Making customer engagement offshoring easy.",
  },
  symbol: "三", // RocknRoll One U+4E09
  colors: {
    ink: "#0A0A0A",
    green: "#2FE85C",
    paper: "#F7F5F0",
  },
  location: "Block B, Brightway Park, Salt River, Cape Town 7795",
  legalName: "Trilogy CX (Pty) Ltd",
  email: "info@trilogybpo.com",
  phones: {
    uk: "+44 7458 158591",
    sa: "+27 73 668 6096",
  },
} as const;

// Generated cinematic imagery (Nano Banana, editorial direction).
export const media = {
  hero: {
    src: "/img/hero-fem.png",
    video: "/video/hero.mp4",
    alt: "A female contact-centre operator working alongside a humanoid android at a dark workstation, lit by a single electric-green rim light.",
  },
  ai: {
    src: "/img/ai-demo.png",
    alt: "A human supervisor facing a softly green-lit humanoid android across a table in a dark room.",
  },
} as const;

export const nav = [
  { label: "Offerings", href: "#offerings" },
  { label: "Insights", href: "#insights" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

// Industry insights: white papers + blog/perspective posts.
export const whitePapers = [
  {
    title: "The agent-in-the-loop playbook",
    summary:
      "Where autonomous CX delivers, where it must defer to a person, and how to wire the handover for judgement, escalation and compliance.",
    meta: "White paper",
    pages: "16 pages",
  },
  {
    title: "Standing up a GCC in six weeks",
    summary:
      "Our DBIT method for designing, building, innovating and transferring a compliant Global Capability Centre at speed.",
    meta: "White paper",
    pages: "12 pages",
  },
  {
    title: "Offshoring to South Africa",
    summary:
      "A practical guide to talent, labour law, data protection and cost structure for UK and EMEA brands.",
    meta: "White paper",
    pages: "18 pages",
  },
] as const;

export const posts = [
  {
    slug: "human-empathy-ai-efficiency",
    category: "Perspective",
    date: "12 Jun 2026",
    read: "5 min",
    title: "Human empathy, AI efficiency: why it is not a contradiction",
    excerpt:
      "The brands winning on CX are not choosing between people and automation. They are designing the seam between them.",
    body: [
      { p: "The industry debate still frames people and automation as a trade-off: cut cost with bots, or protect experience with people. Our operating data says otherwise. The contact centres performing best on both cost and customer experience treat people and AI as one system, designed together." },
      { h: "What AI does well", p: "Routine, high-volume, predictable work. Order status, claim status, address changes, first-line triage. An AI agent answers in seconds, at any hour, in any language, and applies policy the same way every time. On the operations side, auto QA reviews 100% of interactions rather than a 2% sample, and agent assist surfaces the right answer while the conversation is still happening." },
      { h: "What people do well", p: "Judgement, exceptions and the moments that decide loyalty. A distressed customer, an ambiguous complaint, a retention conversation with real money on the table. These are precisely the interactions where empathy changes the outcome, and where a scripted response, human or machine, fails." },
      { h: "The seam is the product", p: "The design question is not which side wins; it is where the handover sits. In our agent-in-the-loop model, AI runs the conversation and a person approves the moment judgement, escalation or compliance is required. The customer gets speed with a safety net. The agent stops doing repetitive work and starts supervising outcomes." },
      { p: "Across our live deployments the pattern is consistent: faster response, lower cost to serve, higher conversion, and customer satisfaction that holds or improves. Empathy and efficiency stop being a trade-off once the seam between them is engineered deliberately." },
    ],
  },
  {
    slug: "five-signs-ready-autonomous-cx",
    category: "Operations",
    date: "29 May 2026",
    read: "6 min",
    title: "Five signs your contact centre is ready for autonomous CX",
    excerpt:
      "Volume patterns, data hygiene and a clear escalation policy matter more than the model you pick.",
    body: [
      { p: "Most autonomous CX programmes stall for operational reasons, not technical ones. The model is rarely the constraint. Before committing budget, look for five signs in your own operation." },
      { h: "1. Your volume is concentrated", p: "Pull twelve months of contact reasons. If your top twenty intents cover 80% or more of volume, automation has a clear target. If volume is fragmented across hundreds of low-frequency intents, start with agent assist rather than full automation." },
      { h: "2. Your knowledge is current", p: "An AI agent is only as good as the policy and product information behind it. If your knowledge base is stale or your agents rely on tribal knowledge, fix that first. It is the single most common cause of poor automated answers." },
      { h: "3. Your escalation policy is written down", p: "Autonomous CX needs an explicit rule for when a person takes over: complaint categories, vulnerable customers, regulatory topics, monetary thresholds. If those rules live in supervisors' heads, they cannot be encoded, and the handover will be inconsistent." },
      { h: "4. Your processes are stable", p: "Automating a process that changes weekly multiplies rework. Automate the stable core, keep the volatile edge with people, and revisit the boundary quarterly." },
      { h: "5. Someone senior owns the outcome", p: "The successful programmes we run have a single accountable owner with authority over operations, technology and compliance. Committees do not ship autonomous CX." },
      { p: "Score yourself honestly against these five. Three or more, and a scoped pilot on your highest-volume intent will pay back quickly. Fewer, and the readiness work itself is the right first project." },
    ],
  },
  {
    slug: "cape-town-uk-emea-2026",
    category: "Location",
    date: "14 May 2026",
    read: "4 min",
    title: "What Cape Town offers UK and EMEA brands in 2026",
    excerpt:
      "Time-zone overlap, English fluency, a deep talent pool and a mature compliance regime, at a meaningful cost advantage.",
    body: [
      { p: "South Africa is ranked the second most attractive BPO destination globally by McKinsey, and Cape Town leads the market. For UK and EMEA brands weighing offshore options in 2026, the case rests on five practical factors." },
      { h: "Time zone", p: "GMT+2 means a one to two hour difference with the UK and full overlap with the European working day. Teams collaborate live, escalations resolve same-day, and extended USA coverage is workable on the same site." },
      { h: "Language and culture", p: "Over 95% workforce English proficiency with neutral accents that consistently score well with UK and European consumers. Cultural affinity with British brands is real and measurable in NPS." },
      { h: "Talent depth", p: "Cape Town offers the largest skilled BPO talent pool in the region: young, educated, and experienced across telecommunications, utilities, retail, insurance and financial services. Sites of 1,000+ seats recruit without degrading quality." },
      { h: "Compliance maturity", p: "POPIA aligns closely with GDPR, ISO 27001 certification is standard among serious operators, and the industry bodies (BPESA, Cape BPO) enforce professional standards. Data protection is a solved conversation, not a risk item." },
      { h: "Economics", p: "Operational costs run up to 60% below UK equivalents. A GCC structure adds a further 20 to 30% saving versus outsourced South African rates, and digital plus AI deflection compounds from there." },
      { p: "The combination is hard to match: European hours, native English, deep talent and a mature regulatory regime, at a structural cost advantage. That is why the global operators keep building here." },
    ],
  },
  {
    slug: "rpa-or-agentic-ai-collections",
    category: "AI",
    date: "30 Apr 2026",
    read: "7 min",
    title: "RPA or agentic AI for collections? What we are seeing",
    excerpt:
      "Rules still win for the predictable 80 percent. Agentic AI earns its place on the messy, high-value remainder.",
    body: [
      { p: "Collections is where automation economics are easiest to measure, and where the RPA-versus-agentic-AI question comes up most. Running both across live portfolios, the answer we keep landing on is: it is not either-or. The technologies solve different segments." },
      { h: "Where rules still win", p: "Around 80% of collections activity is predictable: payment reminders, promise-to-pay follow-ups, receipt confirmations, standard plan setups. RPA and deterministic workflows handle this at near-zero marginal cost, with exact compliance and full auditability. Replacing working rules with an LLM adds cost and risk for no gain." },
      { h: "Where agentic AI earns its place", p: "The remaining 20% carries most of the value and most of the mess: disputed balances, hardship cases, negotiations within mandate, customers who went quiet. An agentic system can hold a real conversation, propose a settlement within defined limits, and know when to hand over to a person. This is the segment where we see recovery rates move." },
      { h: "Segmentation is the actual work", p: "The deciding factor in every deployment is how well the portfolio is segmented before any automation runs. AI-driven propensity scoring routes each account to the cheapest treatment likely to work: a reminder, a bot conversation, an agent call. Get that right and both RPA and agentic AI outperform." },
      { h: "Guardrails are non-negotiable", p: "In collections, a wrong promise is a regulatory event. Our deployments run agentic AI with hard mandate limits, full conversation logging, real-time sentiment monitoring, and human approval on any commitment outside policy. Agent-in-the-loop is not a compromise; in this vertical it is the design." },
      { p: "The practical guidance: keep rules on the predictable base, point agentic AI at the high-value remainder, invest in segmentation before either, and wire the human handover from day one." },
    ],
  },
] as const;

// Headline proof points, used in the hero band and stats strip.
export const stats = [
  { value: "30+", label: "Contact centres built worldwide" },
  { value: "10,000+", label: "Agent seats scaled globally" },
  { value: "6 wks", label: "From zero to a live operation" },
  { value: "25+ yrs", label: "Combined leadership experience" },
] as const;

// The three offerings: the heart of the brand, mirroring the 三 mark.
export const offerings = [
  {
    index: "01",
    key: "bpo",
    name: "Trilogy BPO",
    kicker: "Outsourced contact centre",
    headline: "From voice, to digital, to autonomous CX.",
    body: "A turnkey contact centre on a fully integrated platform: voice, email, chat and back-office. Outsource marketing, customer service, sales, collections or retentions, with predictive AI/ML, RPA, analytics and live reporting built in.",
    points: ["Turnkey digital + autonomous", "Predictive AI / ML + RPA", "Voice · email · chat · back-office"],
    image: "/img/offer-bpo.png",
    video: "/video/offer-bpo.mp4",
    imageAlt:
      "A contact-centre floor at night, rows of human agents in headsets lit by the green glow of their monitors, with an android among them.",
  },
  {
    index: "02",
    key: "gcc",
    name: "Trilogy GCC",
    kicker: "Global Capability Centres",
    headline: "Build your own centre in South Africa.",
    body: "We help international BPOs and enterprises stand up high-performance Global Capability Centres using our proven DBIT method: Design, Build, Innovate & Transfer. Deep local expertise in labour law, compliance, facilities and vendor ecosystems makes delivery fast, compliant and low-risk.",
    points: ["DBIT: Design · Build · Innovate · Transfer", "100 seats live in six weeks", "Compliance, facilities & people"],
    image: "/img/offer-gcc.png",
    video: "/video/offer-gcc.mp4",
    imageAlt:
      "A team reviewing a glowing green holographic building floorplate in a dark fit-out space.",
  },
  {
    index: "03",
    key: "ai",
    name: "Trilogy Ai",
    kicker: "Autonomous CX platform",
    headline: "Proven, customer-ready AI.",
    body: "One of the first proven autonomous customer-engagement platforms for sales, service, marketing, collections and retention. An agent-in-the-loop model lets people step in seamlessly when judgement, escalation or compliance is required. Already live with multiple clients.",
    points: ["Agent-in-the-loop model", "Live with multiple clients", "Higher conversion, lower cost"],
    image: "/img/offer-ai.png",
    video: "/video/offer-ai.mp4",
    imageAlt:
      "A human hand and a robotic hand reaching toward a single glowing green point of light.",
  },
] as const;

// Team / experience block.
export const team = {
  kicker: "The team",
  headline: "Run by people who have done this before, many times over.",
  body: "Trilogy is led by seasoned BPO operators with 25+ years of combined leadership. Between them they have built and managed 30+ contact centres globally, launched 1,000-seat operations, and stood up fully operational sites in under six weeks. They know what it takes to get customer experience right, first time.",
  facts: [
    { k: "Operations delivered", v: "30+" },
    { k: "Seats scaled", v: "10,000+" },
    { k: "Largest single launch", v: "1,000 seats" },
    { k: "Fastest site stand-up", v: "< 6 weeks" },
  ],
} as const;

// The scripted "agent-in-the-loop" demo conversation used on every direction.
export const demoConversation = [
  { role: "customer", text: "Hi, I've been charged twice for order #4821. Can you help?" },
  {
    role: "ai",
    text: "I can see two £49.00 charges on #4821. I've queued an instant refund for the duplicate; it'll clear in 3 to 5 working days.",
    approval: "Agent reviewed · approved",
  },
  { role: "customer", text: "Amazing, thank you. Will I get something in writing?" },
  {
    role: "ai",
    text: "Done — a confirmation email is on its way to the address on file, with the refund reference and the expected clearing date.",
  },
  { role: "customer", text: "Perfect. One more thing: can I change the delivery address for the reorder?" },
  {
    role: "ai",
    text: "Of course. I've updated the delivery address on #4821 and your future orders. Shall I resend the dispatch confirmation?",
    approval: "Agent reviewed · approved",
  },
  { role: "customer", text: "Yes please. You've been really helpful!" },
  {
    role: "ai",
    text: "Happy to help. Your reorder ships today and tracking will reach you within the hour. Anything else I can sort for you?",
  },
] as const;

// The actual Trilogy people, from trilogybpo.com/team.
// `linkedin` is the person's profile where we have it; People cards without one
// fall back to the company page.
export const people = [
  { name: "Kobus van der Westhuizen", role: "CEO & Founder", image: "/team/kobus.jpg", group: "Executive team", linkedin: "https://www.linkedin.com/in/kobus-van-der-westhuizen-trilogy-bpo/" },
  { name: "Tanya Phillips", role: "Chief Operating Officer", image: "/team/tanya.jpg", group: "Executive team", linkedin: "https://www.linkedin.com/in/tanya-phillips-sa/" },
  { name: "Craig Shalekoff", role: "CTO & Founder", image: "/team/craig.jpg", group: "Executive team", linkedin: "https://www.linkedin.com/in/craig-shalekoff-digital-tribe-bpo/" },
  { name: "Rudi Jansen", role: "Director of People", image: "/team/rudi.jpg", group: "Executive team" },
  { name: "Vancyon van Zyl", role: "Director of Transitions", image: "/team/vancyon.jpg", group: "Executive team" },
  { name: "Keanu Vieira", role: "Head of CX Solutions", image: "/team/keanu.jpg", group: "Executive team" },
  { name: "Jason Luboyera", role: "Head of Digital", image: "/team/jason.png", group: "Executive team" },
  { name: "Tish Carruthers", role: "Marketing & Intelligence Lead", image: "/team/tish.jpg", group: "Executive team" },
  { name: "Frank Kilbourn", role: "Non-Executive Director", image: "/team/frank.jpg", group: "Board", linkedin: "https://www.linkedin.com/in/frank-kilbourn-31ba97b9/" },
  { name: "Jonathan Broll", role: "Non-Executive Director", image: "/team/jonathan.jpg", group: "Board", linkedin: "https://www.linkedin.com/in/jonathan-broll-ab5a61b5/" },
  { name: "Heather Wallace", role: "Non-Executive Director", image: "/team/heather.jpg", group: "Board" },
] as const;

export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/trilogybpo";

// Cape Town as the premium BPO location in Africa.
export const location = {
  kicker: "The location",
  headline: "Cape Town: the premium home for BPO in Africa.",
  body: "South Africa is a proven destination for customer experience, and Cape Town leads it. Our teams are culturally aligned with UK, US and EMEA brands, fluent in English with neutral accents, and highly skilled, working in a time zone that overlaps the European day. The result is quality and compliance at a meaningful cost advantage.",
  points: [
    "English-fluent, neutral-accent talent",
    "Time-zone overlap with UK and EMEA",
    "Deep, scalable talent pool",
    "Mature data-protection and compliance regime",
  ],
  image: "/img/cape-town.jpg",
  video: "/video/cape-town.mp4",
  imageAlt:
    "Twilight view of Cape Town: the full Table Mountain massif at dusk with the city lights glowing below.",
  credit: { name: "K", source: "Pexels" },
} as const;

// Testimonials: trust.
export const testimonials = [
  {
    quote:
      "They didn't just run our contact centre. They built it, staffed it and had it live faster than we thought possible. The AI tooling lifted quality from day one.",
    name: "VP, Customer Operations",
    org: "UK financial services brand",
    avatar: "/testimonials/t1.jpg",
  },
  {
    quote:
      "The DBIT approach took the risk out of offshoring. We were at 100 seats in six weeks and over 1,000 agents shortly after, fully compliant.",
    name: "COO",
    org: "Global BPO",
    avatar: "/testimonials/t2.jpg",
  },
  {
    quote:
      "Agent-in-the-loop AI changed our economics. Higher conversion, faster response, and a human always there when it matters.",
    name: "Director of CX",
    org: "EMEA retailer",
    avatar: "/testimonials/t3.jpg",
  },
] as const;

export const directions = [
  {
    slug: "editorial",
    name: "Editorial",
    blurb: "Ink canvas, electric-green accent, oversized light type. Confident and cinematic.",
  },
  {
    slug: "warmth",
    name: "Warmth",
    blurb: "Warm paper, deep forest green, soft cards and generous space. People-first and reassuring.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    blurb: "Clean white, navy slate and a strict grid. Enterprise-grade, precise and trustworthy.",
  },
  {
    slug: "motion",
    name: "Motion",
    blurb: "Scroll-driven and kinetic: line-by-line reveals, marquees and a pinned horizontal gallery.",
  },
  {
    slug: "corpratorial",
    name: "Corpratorial",
    blurb: "Editorial structure and thin display type, recoloured in the corporate white / navy / deep-green palette.",
  },
] as const;

export type DirectionSlug = (typeof directions)[number]["slug"];

// ===========================================================================
// Full site content, from the client's "Trilogy Web site pages layout" deck.
// ===========================================================================

export const offshoringIntro =
  "Trilogy BPO is an offshore Business Process Outsourcing company in South Africa, helping UK and USA companies augment their customer experience while cutting the cost of customer service and sales.";

// Executive team with bios (slide 3). Real photos where we have them; null = initials.
export const execTeam = [
  { name: "Kobus van der Westhuizen", role: "CEO & Founder", bio: "Visionary leader with decades of BPO experience across multiple continents.", image: "/team/kobus.png" },
  { name: "Tanya Phillips", role: "Chief Operating Officer", bio: "Builder of multiple BPO businesses from the ground up to profitable operations.", image: "/team/tanya.png" },
  { name: "Craig Shalekoff", role: "Chief Technology Officer", bio: "Technical expert driving operational excellence and efficiency at scale.", image: "/team/craig.png" },
  { name: "Vancyon van Zyl", role: "Director of Transitions", bio: "Specialist in seamless operation migrations and process optimisation.", image: "/team/vancyon.png" },
  { name: "Keanu Vieira", role: "Head of Commercial Engagement, UK", bio: "Customer experience innovation leader transforming service delivery models.", image: "/team/keanu.png" },
  { name: "Rudi Jansen", role: "Head of People", bio: "Leader in people development and management.", image: "/team/rudi.png" },
  { name: "Jason Luboyera", role: "Head of Commercial Engagement, SA", bio: "Customer experience innovation leader transforming service delivery models.", image: "/team/jason.png" },
  { name: "Brandon Grant", role: "Head of Digital Contact", bio: "Digital transformation leader specialising in omnichannel solutions.", image: "/team/brandon.png" },
] as const;

export const teamIntro =
  "Our leadership team comprises seasoned BPO executives and operational managers with over 20 years of collective expertise in establishing and scaling operations across South Africa. Between them they have built more than 30 contact-centre and back-office operations, totalling over 10,000 seats, for global enterprises and emerging BPO providers alike.";

// Employee value proposition (slide 5)
export const evp = {
  kicker: "Our People · Our Promise",
  headline: "When people thrive, business follows.",
  body: "At Trilogy BPO our employee value proposition is built on one unshakeable belief. We invest in the people who serve your customers, because engaged, supported teams deliver the experiences that build loyalty and growth.",
};

// The six EVP pillars from slide 5.
export const evpPillars = [
  { name: "Wellbeing support", body: "On-site counsellors and a culture that genuinely supports mental and physical health.", icon: "people" },
  { name: "Unapologetically inclusive", body: "DE&I isn't a policy, it's who we are. Every voice belongs here.", icon: "inclusive" },
  { name: "Competitive salary", body: "Market-aligned compensation that recognises and rewards the value you bring.", icon: "salary" },
  { name: "Meaningful benefits", body: "Relevant, real-world benefits designed around the lives of our people.", icon: "heart" },
  { name: "Leadership development", body: "We invest in growing leaders at every level, from first-time managers to executives.", icon: "growth" },
  { name: "Reward & recognition", body: "Celebrating contributions big and small, because people deserve to feel seen.", icon: "star" },
] as const;

// Trilogy / DSG joint venture (slide 6)
export const jointVenture = {
  kicker: "A Trilogy / DSG joint venture",
  headline: "Two leaders. One purpose.",
  body: "Trilogy and DSG have created a separate joint venture as part of the Trilogy Group, combining capabilities and strengths. Trilogy Digital brings together two organisations that have each spent decades focused on customer experience, combining their depth to create a digital-first experience.",
  companies: [
    {
      name: "Trilogy BPO",
      accent: "green" as const,
      logos: ["/pool/partners/trilogy-logo.png"],
      body: "A human-led, AI-enabled, owner-led BPO based in Cape Town, built by a leadership team with 25+ years in the industry and a track record of delivering 30+ contact-centre operations globally. Its differentiated AI platform combines autonomous customer engagement with an agent-in-the-loop model, serving UK, US and EMEA brands. This is the team's third BPO build, and its most advanced.",
      stats: [
        { value: "3", label: "Blue-chip BPOs built" },
        { value: "25+", label: "Years BPO leadership" },
        { value: "36+", label: "Operations delivered" },
        { value: "10,000+", label: "Seats scaled globally" },
      ],
    },
    {
      name: "DSG / CXG",
      accent: "red" as const,
      logos: ["/pool/partners/dsg-logo.png", "/pool/partners/cxg-logo.png"],
      body: "DSG is South Africa's leading customer experience and technology group: seven specialist businesses delivering contact-centre operations, marketing, telecoms, AI, managed security and commerce solutions. CXG, a DSG company, is the specialist BPO and CX delivery arm, with 27 years of expertise across QSR, telecoms, retail, entertainment and financial services, powered by the QContact UCaaS platform.",
      stats: [
        { value: "28+", label: "Years in market" },
        { value: "1,000+", label: "Specialist agents" },
        { value: "60+", label: "Enterprise clients" },
        { value: "3M+", label: "Monthly interactions" },
      ],
    },
  ],
};

// World-class brands (slides 7 + 10)
export const brands = {
  kicker: "World-class brands",
  body: "Over the past 25 years, Trilogy's leadership has managed over 30 contact centres for some of the world's most recognised brands. That gives us insight into the challenges and opportunities of offshore customer-service delivery, with deep vertical expertise across telecommunications, utilities, retail, fast food, insurance and technology.",
  categories: ["Global brands", "Local brands", "GCCs", "Telco brands"],
  names: ["Thames Water", "British Gas", "Vodafone", "John Lewis", "Aldi", "KFC", "Virgin"],
};

// Combined locations (slide 8)
export const locations = [
  { name: "Head Office, Pinelands", city: "Cape Town", seats: "1,500 seats", image: "/pool/locations/pinelands.jpg" },
  { name: "Newtown", city: "Johannesburg", seats: "400 seats", image: "/pool/locations/newtown.jpg" },
  { name: "Century City", city: "Cape Town", seats: "300 seats", image: "/pool/locations/century-city.jpg" },
  { name: "Rosebank", city: "Johannesburg", seats: "250 seats", image: "/pool/locations/rosebank.jpg" },
] as const;

// Memberships + awards (slide 9)
export const memberships = ["CCMG", "BPESA", "Cape BPO"];
export const membershipsIntro =
  "We are proud members of South Africa's most respected industry bodies and hold internationally recognised certifications: a testament to our commitment to excellence, security and service quality.";
export const awardsIntro =
  "Over nearly a decade, our award record reflects consistent industry leadership across outsourcing, technology and social impact.";
export const awards = [
  { year: "2016", items: "CCMG Best Outsourced Partnership Winner · BPESA Best Outsourced Winner & Best Use of Social Media" },
  { year: "2017", items: "BPESA / CCMG Best Outsourced Contact Centre, Best Use of Social Media & Technology Innovation" },
  { year: "2018–2019", items: "Best Outsourced Contact Centre Finalist · Best Outsourced Partnership (Engage UK) Finalist · BPESA Best Impact Sourcing & Service Provider Winner" },
  { year: "2021", items: "Contact Centre World, Best Partnership. Ranked #1 EMEA and #2 globally" },
  { year: "2022–2023", items: "BPESA Best Partnership & Shared Services Finalist · Cape BPO Top Technical Innovation Finalist · BPESA & Cape BPO National Top Service Provider Award Winner" },
  { year: "2025", items: "Cape BPO & BPESA Top Support Service Provider Finalist · BPESA Top BPO Operator Finalist & Runner-Up" },
] as const;

// How and where we operate (slide 10)
export const operate = {
  geographies: {
    title: "Geographies covered",
    body: "Over 25 years supporting predominantly the UK and USA markets, helping prominent brands land successfully in South Africa. Seamless service delivery across time zones with native English-speaking talent.",
  },
  verticals: {
    title: "Verticals covered",
    body: "Previously worked with Thames Water, British Gas, Vodafone, John Lewis, Aldi, KFC and Virgin, among others.",
    items: ["Technology & e-commerce", "Healthcare & insurance", "Retail & telecommunications", "Utilities & financial services", "Travel, tourism & hospitality", "Automotive"],
  },
  functions: {
    title: "Functions covered",
    body: "A focused, niche offering to ensure excellence in every engagement.",
    items: ["Customer service & IT support", "Chat commerce & digital engagement", "Back-office administration", "Digital & AI enablement", "Automation & RPA implementation"],
  },
};

// Achievements (slide 11)
export const achievements = {
  body: "Trilogy's 20-year track record speaks to our ability to deliver results at scale, creating jobs, building infrastructure and pioneering technology across the BPO industry.",
  stats: [
    { value: "45K", label: "Jobs created", note: "Significant positive impact on South Africa's economy and communities over 20 years." },
    { value: "20+", label: "Years of experience", note: "Two decades of proven, exceptional value across multiple industries and geographies." },
    { value: "13", label: "Years experience in ML", note: "Developing AI, machine-learning platforms, analytics and digital automation tools." },
    { value: "36", label: "Blue-chip centres built", note: "Contact centres built and launched for blue-chip companies across South Africa." },
  ],
};

// Savings (slide 4)
export const savings = [
  { value: "40–60%", label: "Saving through outsourcing versus a captive or outsourced UK call centre." },
  { value: "20–30%", label: "Additional saving through a GCC versus an outsourced South African call centre." },
  { value: "More", label: "Further savings through digital and AI deflection." },
];

// 7 AI opportunities across the customer journey (slide 12)
export const aiOpportunities = [
  { name: "AI agents (chat / voice)", benefit: "Handle Tier-1 inquiries 24/7", detail: "Claim status, new claims and routine requests, resolved without a queue.", icon: "/pool/icons/icon-57.svg" },
  { name: "Agent assist", benefit: "Boost agent productivity & accuracy", detail: "Real-time suggestions during calls and chats.", icon: "/pool/icons/icon-58.svg" },
  { name: "Knowledge base (AI-driven)", benefit: "Improve self-service & reduce contact volume", detail: "Contextual answers drawn from the website and app.", icon: "/pool/icons/icon-59.svg" },
  { name: "Auto QA & sentiment analysis", benefit: "Full coverage, unhappy customers flagged live", detail: "Reviews 100% of interactions for compliance and quality, and triggers supervisor intervention the moment sentiment drops.", icon: "/pool/icons/icon-60.svg" },
  { name: "Personalisation AI", benefit: "Drive loyalty through tailored engagement", detail: "Product recommendations based on behaviour.", icon: "/pool/icons/icon-62.svg" },
  { name: "Predictive customer service", benefit: "Pre-empt issues before customers reach out", detail: "Anticipate needs from signals across the journey.", icon: "/pool/icons/icon-63.svg" },
] as const;

// Technology stack providers (slide 13). The client asked for a carousel.
export const techStack = {
  kicker: "Our technology stack providers",
  headline: "Best-of-breed technology, end to end.",
  categories: [
    { key: "C", name: "Channel", providers: ["Voice", "WhatsApp", "Email", "SMS", "Instagram", "Messenger", "RCS"] },
    { key: "O", name: "Orchestration", providers: ["Infobip", "Amazon Connect", "UiPath", "n8n", "Meta", "Genesys"] },
    { key: "R", name: "RPA / Bot", providers: ["Infobip", "Amazon Connect", "TP", "Zendesk", "Meta", "Genesys"] },
    { key: "A", name: "Agent front end", providers: ["Infobip", "Amazon Connect", "TP", "Zendesk", "Genesys"] },
    { key: "M", name: "ML engine", providers: ["Amazon Bedrock", "ecosystem.Ai", "Amazon SageMaker", "Vertex AI", "Azure ML"] },
    { key: "R2", name: "BI / Reporting", providers: ["Amazon QuickSight", "Power BI", "Qlik", "Tableau"] },
  ],
  discovery: { label: "Analytics and AI discovery engine", engines: ["trilogy.discover", "genii"] },
} as const;

// Brand logos for the technology ecosystem, keyed by the provider names above.
// Files live in /public/pool/partners. Channel entries (Voice, WhatsApp, …)
// are capabilities rather than brands, so they intentionally have no logo and
// keep rendering as text tiles.
export const techLogos: Record<string, string> = {
  Infobip: "/pool/partners/Infobip_logo_horizontal_orange.png",
  "Amazon Connect": "/pool/partners/amazon-connect-logo-large-3652689061-1.webp",
  UiPath: "/pool/partners/UiPath-Logo.png",
  n8n: "/pool/partners/n8n-icon.webp",
  Meta: "/pool/partners/meta_PNG7.png",
  Genesys: "/pool/partners/genesys-logo.jpeg",
  TP: "/pool/partners/tp.svg",
  Zendesk: "/pool/partners/Zendesk-Logo.png",
  "Amazon Bedrock": "/pool/partners/bedrock.png",
  "ecosystem.Ai": "/pool/partners/ecosystem.webp",
  "Amazon SageMaker": "/pool/partners/amazon-web-service-sagemaker-na5x2in3cjjj7zgdfjal8.webp",
  "Vertex AI": "/pool/partners/Vertex_AI_Logo.svg.webp",
  "Azure ML": "/pool/partners/azure.png",
  "Amazon QuickSight": "/pool/partners/quicksight.webp",
  "Power BI": "/pool/partners/Power-BI-Logo.png",
  Qlik: "/pool/partners/Qlik_Logo.svg.webp",
  Tableau: "/pool/partners/Tableau-Symbol.png",
};

// Trilogy's own AI point solutions (slide 14)
export const pointSolutions = [
  { name: "anychat.ai", tagline: "Real-time language translation", body: "Latest large language models for real-time translation, so any agent can serve any customer worldwide, regardless of language." },
  { name: "guruvoice.ai", tagline: "Fully automated AI voice", body: "An automated AI voice platform with LLM capabilities for inbound service and proactive outbound for service, sales and collections." },
  { name: "acwa.ai", tagline: "After-call work assistant", body: "Uses chat or voice interactions to predict an agent's next steps, automating follow-up actions without human effort." },
  { name: "click2cash.ai", tagline: "Meta marketing & sales", body: "An integrated Meta and IM marketing and sales platform that converts Facebook adverts and likes directly into sales." },
  { name: "collect.ai", tagline: "Digital & autonomous collections", body: "Combines AI-driven customer segmentation, predictive analytics and automated communication." },
  { name: "hr.ai", tagline: "Intelligent recruitment & onboarding", body: "A global portal to excite, inform and screen employees, automating and scaling recruitment." },
] as const;

// Why South Africa (slide 15)
export const whySA = {
  kicker: "Your strategic outsourcing advantage",
  headline: "Why South Africa?",
  source:
    "South Africa has consistently been ranked the second most attractive Business Process Outsourcing location globally, after consecutive years of high performance. Source: McKinsey.",
  points: [
    { title: "Cost efficiency meets quality", body: "Up to 60% lower operational costs than UK and USA markets, substantial wage arbitrage without compromising quality." },
    { title: "Cape Town: the premium hub", body: "The leading BPO destination, with rapid growth, exceptional infrastructure and the largest skilled talent pool in the region." },
    { title: "Industry recognition", body: "Ranked a top-three global BPO destination for three consecutive years by leading industry analysts." },
    { title: "Time-zone synergy", body: "GMT+2 alignment, a 1 to 2 hour difference with the UK and extended USA coverage." },
    { title: "Quality talent pool", body: "A young, educated and highly professional workforce ready to deliver exceptional customer experiences." },
    { title: "Language & cultural excellence", body: "Over 95% workforce proficiency in English with neutral accents that resonate with Western consumers." },
  ],
};

// Big brand wall, logos extracted from the deck (slide 7), grouped by the
// deck's categories. NOTE: Global vs Local split is a best-effort read of the
// slide; confirm against the PPT.
export const brandWall = {
  groups: [
    { label: "Global brands", logos: [
      { name: "Aldi", src: "/pool/brands/aldi.png" },
      { name: "John Lewis", src: "/pool/brands/john-lewis.png" },
      { name: "JD", src: "/pool/brands/jd.png" },
      { name: "B&Q", src: "/pool/brands/b-and-q.png" },
      { name: "British Gas", src: "/pool/brands/british-gas.png" },
      { name: "Pizza Hut", src: "/pool/brands/pizza-hut.png" },
      { name: "Gusto", src: "/pool/brands/gusto.png" },
      { name: "Virgin", src: "/pool/brands/virgin.png" },
      { name: "Peloton", src: "/pool/brands/peloton.png" },
      { name: "Iceland", src: "/pool/brands/iceland.png" },
    ] },
    { label: "Local brands", logos: [
      { name: "Mercedes-Benz", src: "/pool/brands/mercedes-benz.png" },
      { name: "BMW", src: "/pool/brands/bmw.png" },
      { name: "Nando's", src: "/pool/brands/nandos.png" },
      { name: "Vodacom", src: "/pool/brands/vodacom.png" },
      { name: "Burger King", src: "/pool/brands/burger-king.png" },
      { name: "hc", src: "/pool/brands/hc.png" },
      { name: "Sun International", src: "/pool/brands/sun-international.png" },
      { name: "KFC", src: "/pool/brands/kfc.png" },
    ] },
    { label: "GCCs", logos: [
      { name: "Startek", src: "/pool/brands/startek.png" },
      { name: "Ascensos", src: "/pool/brands/ascensos.png" },
      { name: "Ventrica", src: "/pool/brands/ventrica.png" },
    ] },
    // Sliced from the deck's flattened telco collage (slide 7).
    { label: "Telco brands", logos: [
      { name: "Cell C", src: "/pool/brands/telco/cellc.png" },
      { name: "Telco", src: "/pool/brands/telco/telco.png" },
      { name: "Vuma", src: "/pool/brands/telco/vuma.png" },
      { name: "MTN", src: "/pool/brands/telco/mtn.png" },
      { name: "Telkom", src: "/pool/brands/telco/telkom.png" },
      { name: "Afrihost", src: "/pool/brands/telco/afrihost.png" },
      { name: "Webafrica", src: "/pool/brands/telco/webafrica.png" },
      { name: "Fibertime", src: "/pool/brands/telco/fibertime.png" },
      { name: "Vodacom", src: "/pool/brands/telco/vodacom.png" },
      { name: "Herotel", src: "/pool/brands/telco/herotel.png" },
      { name: "Cool Ideas", src: "/pool/brands/telco/coolideas.png" },
      { name: "SA Digital Villages", src: "/pool/brands/telco/sadv.png" },
      { name: "Telecom Namibia", src: "/pool/brands/telco/telecom-namibia.png" },
      { name: "DFA", src: "/pool/brands/telco/dfa.png" },
      { name: "DF", src: "/pool/brands/telco/df.png" },
      { name: "Rain", src: "/pool/brands/telco/rain.png" },
      { name: "Kliq", src: "/pool/brands/telco/kliq.png" },
      { name: "eSimplified", src: "/pool/brands/telco/esimplified.png" },
    ] },
  ],
} as const;

// Slide 9 shows: BPESA, ISO 27001, GBPO badge, broadbrand, MVNE, Cape BPO, CCMG.
// (The GBPO badge exists only as an EMF vector in the deck; ask the client for a PNG.)
export const accreditationLogos = [
  { name: "BPESA", src: "/pool/accreditations/bpesa.png" },
  { name: "ISO 27001", src: "/pool/accreditations/iso-27001.png" },
  { name: "Broadbrand", src: "/pool/accreditations/broadbrand.png" },
  { name: "MVNE", src: "/pool/accreditations/mvne.png" },
  { name: "Cape BPO", src: "/pool/accreditations/capebpo.png" },
  { name: "CCMG", src: "/pool/accreditations/ccmg.png" },
] as const;
