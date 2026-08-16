export type TimeOfDay = "day" | "dusk" | "night";

export const PRICING = {
  monthly: { label: "Monthly", note: "", pro: 8.49, suffix: "/month" },
  yearly: {
    label: "Yearly",
    note: "2 months free",
    pro: 7.08,
    suffix: "/month",
    billed: "$84.99/year",
  },
  lifetime: {
    label: "Lifetime",
    note: "Top choice",
    pro: 249.99,
    suffix: " once",
  },
} as const;

export const FREE_FEATURES = [
  "Voice to text that works in any app",
  "Meeting recording and transcription",
  "Support for 100+ Languages",
  "Unlimited use of small AI models",
  "Custom prompt control",
  "Email Support",
];

export const PRO_FEATURES = [
  "Use your own AI API Keys",
  "Unlimited use of Cloud and Local AI models",
  "Translate any language to English",
  "Transcribe audio and video files",
  "Priority Support",
];

export const ENTERPRISE_FEATURES = [
  "SOC 2 Type II certified",
  "Centralized billing and authentication",
  "Model access control",
  "Use Enterprise hosted models",
  "Volume discounts",
];

export const FAQS = [
  {
    q: "Can I try Superwhisper for free?",
    a: "Yes, you can try the Pro features for 15 minutes of recording for free, after that the free tier features are available to you forever. The no questions asked refund within 30 days of purchase will always be honored.",
  },
  {
    q: "Will it work on my Intel Mac?",
    a: "Intel Macs work best with Cloud models. Offline models only run really well on Apple Silicon macs.",
  },
  {
    q: "Which features are being worked on next?",
    a: "Check out our Roadmap to see what is being worked on or request a new feature.",
  },
  {
    q: "Can I use my Pro license on all my devices?",
    a: "Yes, you can activate your license on as many of your devices as you like.",
  },
];

export const TUTORIALS = [
  {
    id: "email",
    title: "Respond to an email in seconds",
    caption: "Dictate your emails, in any app",
    duration: "2 min",
    image: "/sw/landing/1.webp",
  },
  {
    id: "slack",
    title: "Send perfect messages at work",
    caption: "Send perfect messages at work",
    duration: "7 min",
    image: "/sw/landing/1.webp",
  },
  {
    id: "youtube",
    title: "Take notes from YouTube",
    caption: "Quickly solidify your learning",
    duration: "2 min",
    image: "/sw/landing/2.webp",
  },
  {
    id: "secure",
    title: "Get your work done fast & secure",
    caption: "Get your work done fast & secure",
    duration: "14 min",
    image: "/sw/landing/3.webp",
  },
  {
    id: "journal",
    title: "Make your journaling effortless",
    caption: "Make your journaling effortless",
    duration: "2 min",
    image: "/sw/landing/4.webp",
  },
  {
    id: "code",
    title: "Voice to code in seconds",
    caption: "Voice to code in seconds",
    duration: "8 min",
    image: "/sw/landing/5.webp",
  },
  {
    id: "messages",
    title: "Write better messages, get responses",
    caption: "Write better messages, get responses",
    duration: "5 min",
    image: "/sw/landing/6.webp",
  },
];

export const TESTIMONIALS = [
  {
    id: "karpathy",
    name: "Andrej Karpathy",
    handle: "karpathy",
    role: "Founder",
    company: "Eureka Labs",
    avatar: "/sw/landing/karpathy.webp",
    verified: true,
    quote:
      'There\'s a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It\'s possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. I just talk to Composer with @superwhisperapp so I barely even touch the keyboard....',
  },
  {
    id: "levels",
    name: "Pieter Levels",
    handle: "levelsio",
    role: "Serial entrepreneur",
    company: "",
    avatar: "/sw/landing/levelsio.webp",
    verified: false,
    quote:
      "Tried @superwhisperapp today. Very nice. Lets me talk to Cursor and then it codes for me just gets it right.",
  },
  {
    id: "wilkinson",
    name: "Andrew Wilkinson",
    handle: "awilkinson",
    role: "CEO",
    company: "tiny",
    avatar: "/sw/landing/awilkinson.webp",
    verified: false,
    quote:
      "Tools I couldn't live without: @Superhuman @superwhisperapp @reflectnotes @ChatGPTapp @perplexity_ai What about you? What's your iOS/Mac/Web stack?",
  },
  {
    id: "rauch",
    name: "Guillermo Rauch",
    handle: "rauchg",
    role: "CEO",
    company: "Vercel",
    avatar: "/sw/landing/rauchg.webp",
    verified: false,
    quote:
      "@superwhisperapp delivers on the dream of an AI-native operating system. The best part: it's insanely fast and does just what you expect.",
  },
];

export const FEATURE_CARDS = [
  {
    title: "Works offline",
    kicker: "Duh, yes online too",
    body: "Superwhisper works offline, so you can transcribe anytime.",
    punch: "No Wi-Fi, no problem.",
    image: "/sw/landing/background(1).webp",
  },
  {
    title: "Use your own words",
    body: "Enter names, abbreviations, and specialized terms once.",
    punch: "Superwhisper remembers forever.",
  },
  {
    title: "Predefined modes",
    body: "Predefined modes optimize tone, structure, and formatting.",
    punch: "So your text is always right, right away.",
    image: "/sw/landing/background(2).webp",
  },
  {
    title: "Multilanguage support",
    body: "Superwhisper supports 100+ languages & dialects.",
    punch: "It can also translate them all to English.",
    image: "/sw/landing/background(3).webp",
  },
  {
    title: "Clipboard integration",
    body: "No need to copy and paste.",
    punch: "Your edited transcript is automatically pasted in the app you're using.",
    image: "/sw/landing/background(4).webp",
  },
  {
    title: "Meeting assistant",
    body: "Focus now, we take notes.",
    punch: "Record and digest meetings effortlessly with automatic notes.",
    image: "/sw/landing/background(5).webp",
  },
];

export const MINI_FEATURES = [
  {
    title: "File transcription",
    body: "Upload video and audio files and get reliable transcripts.",
    icon: "file",
  },
  {
    title: "Push to talk",
    body: "Hold, speak, release. Effortless control at your fingertips.",
    icon: "ptt",
    badge: "New",
  },
  {
    title: "Shortcuts",
    body: "Set custom shortcuts to launch, dictate and control.",
    icon: "keys",
  },
  {
    title: "Super Mode",
    body: "AI-enhanced mode that adapts to your screen for smart results.",
    icon: "spark",
  },
];

export const FOOTER = {
  product: [
    { label: "Windows", href: "/#download" },
    { label: "iOS", href: "/#ios" },
    { label: "Mac", href: "/#download" },
    { label: "Enterprise", href: "/#pricing" },
    { label: "Use cases", href: "/#features" },
    { label: "Compare", href: "/#pricing" },
  ],
  agentic: [
    { label: "Claude Code", href: "/#agentic" },
    { label: "OpenCode", href: "/#agentic" },
    { label: "Pi", href: "/#agentic" },
    { label: "Codex", href: "/#agentic" },
    { label: "Grok", href: "/#agentic" },
    { label: "CLI", href: "/#agentic" },
  ],
  tools: [
    { label: "Mic test", href: "/docs" },
    { label: "Voice recorder", href: "/docs" },
    { label: "Transcribe audio", href: "/docs/file-transcription" },
    { label: "Typing speed test", href: "/docs" },
    { label: "Voice to text online", href: "/docs" },
  ],
  resources: [
    { label: "Blog", href: "/docs" },
    { label: "Changelog", href: "/docs" },
    { label: "Roadmap", href: "/docs" },
    { label: "Careers", href: "/docs", hiring: true },
    { label: "Brand assets", href: "/docs" },
  ],
  support: [
    { label: "Documentation", href: "/docs" },
    { label: "Manage Billing", href: "/login" },
    { label: "Email Support", href: "mailto:support@superwhisper.com" },
  ],
  policies: [
    { label: "Terms of Service", href: "/docs" },
    { label: "Refund Policy", href: "/docs/cancel-refund" },
    { label: "Privacy Policy", href: "/docs" },
  ],
};

export const TONE_MODES = [
  {
    id: "formal",
    label: "Formal",
    bubbles: [
      { from: "me", text: "Hello Louis, hope you're doing well. Do you have any updates?" },
      { from: "them", text: "No, but we could chat next week if that works for you" },
      {
        from: "me",
        text: "Let's schedule a meeting next week to review details. Please let me know your availability",
      },
    ],
  },
  {
    id: "casual",
    label: "Casual",
    bubbles: [
      { from: "me", text: "Hey @Louis, any updates?" },
      { from: "them", text: "No, chat soon ?" },
      {
        from: "me",
        text: "Sure lets book a call for next week, can go over the details then. LMK when you're free!",
      },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    bubbles: [
      {
        from: "me",
        text: "Dear Mr. Coleman, I wanted to follow up and see if there are any updates since our last meeting",
      },
      { from: "them", text: "No, but we could chat next week if it is acceptable for you" },
      {
        from: "me",
        text: "We can set an appointment to discuss the indemnification clauses in further detail. Please, let me know your schedule.",
      },
    ],
  },
  {
    id: "chat",
    label: "Chat",
    bubbles: [
      { from: "me", text: "hey louis, whats good my man" },
      { from: "them", text: "suh fam" },
      { from: "me", text: "lets catch up next wk, lmk when your free" },
    ],
  },
] as const;

export const KEYBOARD_ICONS = [
  // row 1 (number-row replacements) — visual set from dump
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
];
