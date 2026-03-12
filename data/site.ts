export type ProductStatus = "Concept" | "Prototype" | "Beta" | "Upcoming";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/business", label: "Business" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/developer", label: "Developer" },
  { href: "/contact", label: "Contact" }
];

export const heroStats = [
  { label: "Adaptive key states", value: "72+" },
  { label: "Realtime profile switch", value: "<16ms" },
  { label: "GlyphOS modules", value: "18" }
];

export const ecosystemPillars = [
  {
    title: "Hardware",
    subtitle: "GlyphX Keyboard",
    description:
      "CNC-inspired chassis, precision switch geometry, and dynamic display keys engineered for context-aware control."
  },
  {
    title: "Software",
    subtitle: "GlyphOS",
    description:
      "A low-latency input platform that maps intent to symbols, profiles, and adaptive actions across creative and technical workflows."
  },
  {
    title: "Developer",
    subtitle: "SDK + Protocol",
    description:
      "A future-forward API surface for custom key modules, telemetry hooks, and secure profile orchestration."
  },
  {
    title: "Roadmap",
    subtitle: "Ecosystem Expansion",
    description:
      "From core keyboard to accessories, cloud profiles, and enterprise fleet controls designed for scale."
  }
];

export const aboutPrinciples = [
  {
    title: "Static keys are legacy",
    body: "Traditional keyboards freeze function in plastic. Modern work demands interfaces that adapt to context, role, and intent."
  },
  {
    title: "Hardware-first intelligence",
    body: "Every interaction starts with tactile confidence. We build industrial hardware that feels permanent while the interface evolves in software."
  },
  {
    title: "Symbolic computing",
    body: "GlyphX visual keys shift from letters to symbols, tools, scenes, and macros so users navigate complexity with less friction."
  },
  {
    title: "GlyphOS as the control plane",
    body: "GlyphOS unifies firmware, profile logic, telemetry, and automation into one adaptive stack for creators, operators, and teams."
  }
];

export const productCatalog = [
  {
    name: "GlyphX Keyboard",
    status: "Prototype" as ProductStatus,
    audience: "Creators, developers, power users",
    overview:
      "A premium adaptive keyboard with display keys, modular scenes, and low-latency switching between symbol layers.",
    features: [
      "Display-enabled adaptive keys",
      "Knob + macro rail control",
      "Profile transitions in under 16ms",
      "Desktop and studio-grade metal finish"
    ],
    useCases: ["Editing workflows", "Streaming and production", "Command-heavy engineering tasks"]
  },
  {
    name: "GlyphOS",
    status: "Beta" as ProductStatus,
    audience: "Power users, teams, IT operators",
    overview:
      "The adaptive input platform that coordinates device profiles, firmware maps, cloud sync, and role-specific layouts.",
    features: [
      "Scene orchestration engine",
      "Policy-aware profile deployment",
      "Secure local-first configuration",
      "Cross-device state memory"
    ],
    useCases: ["Enterprise workstation rollout", "Studio profile management", "Personal command systems"]
  },
  {
    name: "Glyph Dock + Modules",
    status: "Upcoming" as ProductStatus,
    audience: "Advanced setups and enterprise desks",
    overview:
      "Accessories and extensions that bring modular controls, haptics, and expanded symbolic input to the GlyphX ecosystem.",
    features: [
      "Hot-swappable side modules",
      "Context panel displays",
      "Dual-host device routing",
      "Fleet-ready hardware identity"
    ],
    useCases: ["Control room operations", "Multi-machine command centers", "Hybrid office desks"]
  }
];

export const businessMetrics = [
  { label: "Global keyboard TAM", value: "$12.4B", note: "premium + gaming + creator segments" },
  { label: "Target segment growth", value: "18.7%", note: "adaptive control workflows YoY" },
  { label: "Projected gross margin", value: "61%", note: "hardware + software blend" },
  { label: "Software attach target", value: "72%", note: "GlyphOS paid tier activation" }
];

export const businessPanels = [
  {
    title: "Revenue model",
    points: [
      "Hardware margin from flagship keyboards and modules",
      "GlyphOS subscription tiers for advanced orchestration",
      "Enterprise device management and support contracts",
      "Marketplace revenue from verified profile packs"
    ]
  },
  {
    title: "Product strategy",
    points: [
      "Launch with creator and developer segments",
      "Expand into enterprise desk fleets and specialized verticals",
      "Open controlled developer APIs after core stability",
      "Scale accessories to increase ecosystem retention"
    ]
  },
  {
    title: "Development phases",
    points: [
      "P0 concept and industrial ID validation",
      "P1 prototype hardware + firmware baseline",
      "P2 closed beta with selected operators",
      "P3 launch manufacturing and retail channels"
    ]
  }
];

export const roadmapMilestones = [
  {
    title: "Concept",
    quarter: "Q1 2026",
    status: "Completed",
    detail: "Industrial design language, switch architecture, and first symbolic layout framework established."
  },
  {
    title: "Prototype",
    quarter: "Q2 2026",
    status: "In Progress",
    detail: "Working hardware assemblies with display-key matrix validation and acoustic tuning."
  },
  {
    title: "Firmware Core",
    quarter: "Q3 2026",
    status: "Planned",
    detail: "Real-time scene scheduler, secure key update protocol, and host synchronization layer."
  },
  {
    title: "Configurator",
    quarter: "Q4 2026",
    status: "Planned",
    detail: "GlyphOS desktop control center with profile graph, AI suggestions, and role presets."
  },
  {
    title: "Beta Program",
    quarter: "Q1 2027",
    status: "Planned",
    detail: "Closed release with creators, developers, and operational teams for telemetry-backed iteration."
  },
  {
    title: "Manufacturing",
    quarter: "Q2 2027",
    status: "Planned",
    detail: "Pilot runs, QA hardening, and channel-readiness for launch inventory."
  },
  {
    title: "Launch",
    quarter: "Q3 2027",
    status: "Planned",
    detail: "Global launch of GlyphX Keyboard and GlyphOS with direct and partner distribution."
  },
  {
    title: "Ecosystem Expansion",
    quarter: "Q4 2027",
    status: "Planned",
    detail: "Accessory modules, developer kits, and enterprise fleet controls at scale."
  }
];

export const devTabs = [
  {
    id: "platform",
    title: "Platform",
    content:
      "GlyphOS is a deterministic input runtime that maps key states, symbolic layers, telemetry, and actions through a policy-safe execution engine."
  },
  {
    id: "sdk",
    title: "SDK/API",
    content:
      "Planned SDK will expose scene registration, profile mutation, icon pipeline hooks, and host-event subscriptions with typed APIs."
  },
  {
    id: "firmware",
    title: "Firmware",
    content:
      "Firmware architecture separates scan matrix, display compositor, transport protocol, and secure update channels for reliability and speed."
  },
  {
    id: "integrations",
    title: "Integrations",
    content:
      "Upcoming integrations include creative suites, terminal environments, streaming stacks, and enterprise command workflows."
  }
];

export const developerCards = [
  {
    title: "Protocol Reference",
    value: "v0.4 Draft",
    description: "Message schema for profile sync, key state updates, and host acknowledgement loops.",
    status: "Coming Soon"
  },
  {
    title: "SDK Quickstart",
    value: "Node + Rust",
    description: "Generate and deploy profile packs with validation and signature tooling.",
    status: "Coming Soon"
  },
  {
    title: "Firmware Hooks",
    value: "Sandbox",
    description: "Test dynamic key rendering and macro execution pipelines in a safe local environment.",
    status: "Preview"
  }
];

export const faqItems = [
  {
    question: "When will GlyphX be available?",
    answer: "GlyphX is in the prototype phase with manufacturing preparation planned after closed beta validation."
  },
  {
    question: "Will GlyphOS require a subscription?",
    answer: "Core functionality is designed to remain local-first. Advanced orchestration, fleet controls, and premium packs will be subscription-based."
  },
  {
    question: "Can teams manage multiple devices?",
    answer: "Yes. Enterprise roadmap includes policy deployment, fleet telemetry, and role-based profile distribution."
  },
  {
    question: "Are developer tools open yet?",
    answer: "A staged developer program is planned. Early documentation and API previews will launch before public SDK release."
  }
];

export const socialLinks = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "YouTube", href: "#" }
];