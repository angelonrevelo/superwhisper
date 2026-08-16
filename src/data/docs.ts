export type DocsGroup = {
  label: string;
  items: { slug: string; title: string }[];
};

export const DOCS_NAV: DocsGroup[] = [
  {
    label: "Get Started",
    items: [
      { slug: "introduction", title: "Introduction" },
      { slug: "pro", title: "Superwhisper Pro" },
      { slug: "activate-ios", title: "iOS App Activation" },
      { slug: "activate-mac", title: "MacOS App Activation" },
      { slug: "plan-changes", title: "Billing & Plans" },
    ],
  },
  {
    label: "Fine-Tune Your Setup",
    items: [
      { slug: "settings-overview", title: "The Interface" },
      { slug: "reprocess-from-history", title: "Reprocess from History" },
      { slug: "file-transcription", title: "File Transcription" },
      { slug: "history-management", title: "History Management" },
      { slug: "backing-up-settings", title: "Backing Up Settings" },
      { slug: "report", title: "Report an Issue" },
      { slug: "community", title: "Community Projects" },
      { slug: "windows", title: "Windows Feature Support" },
    ],
  },
  {
    label: "Modes",
    items: [
      { slug: "modes", title: "Intro to Modes" },
      { slug: "super", title: "Super" },
      { slug: "voice", title: "Voice to Text" },
      { slug: "message", title: "Message" },
      { slug: "email", title: "Email" },
      { slug: "note", title: "Note" },
      { slug: "meeting", title: "Meeting" },
      { slug: "custom", title: "Custom" },
      { slug: "switching-modes", title: "Switching Modes" },
    ],
  },
  {
    label: "Models",
    items: [
      { slug: "voice-models", title: "Voice" },
      { slug: "language-models", title: "Language" },
    ],
  },
  {
    label: "Security & Privacy",
    items: [
      { slug: "sensitive-data", title: "Sensitive Data Best Practices" },
      { slug: "compliance", title: "Compliance & Trust" },
      { slug: "account-deletion", title: "Account & Data Deletion" },
    ],
  },
  {
    label: "Common Issues",
    items: [
      { slug: "troubleshooting", title: "Troubleshooting Overview" },
      { slug: "ios-26", title: "Adapting to iOS 26.4" },
      { slug: "performance", title: "Performance Tips" },
      { slug: "appstore", title: "App Store Activation" },
      { slug: "realtime", title: "Realtime Transcription" },
      { slug: "unable-to-create-modes", title: "Unable to Create Modes" },
      { slug: "language-detection", title: "Language Detection" },
      { slug: "context", title: "Context Awareness" },
      { slug: "hallucinations", title: "Hallucinations & Unexpected Results" },
    ],
  },
  {
    label: "Enterprise",
    items: [
      { slug: "enterprise", title: "Getting Started" },
      { slug: "enterprise-auth", title: "Authentication & Deployment" },
      { slug: "enterprise-config", title: "Enterprise Configuration" },
      { slug: "enterprise-billing", title: "Billing & Subscription Management" },
      { slug: "usage-analytics", title: "Usage Analytics" },
    ],
  },
];

export type DocsBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "img"; src: string; alt: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "code"; text: string }
  | { type: "cards"; items: { title: string; body: string; href?: string }[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "platforms"; items: { title: string; body: string }[] };

export type DocsPage = {
  slug: string;
  title: string;
  eyebrow?: string;
  description: string;
  toc: { id: string; title: string }[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
  blocks: DocsBlock[];
};

const BLURBS: Record<string, string> = {
  "activate-mac":
    "Learn how to activate your Mac app using your existing iOS App Store subscription.",
  "plan-changes":
    "Switch between Free, Pro Monthly, Pro Annual, Lifetime, or move off an Enterprise trial.",
  "cancel-refund":
    "How to cancel your Superwhisper subscription and request a refund.",
  "settings-overview":
    "Learn how to personalize Superwhisper's settings and options to enhance your voice-to-text experience and maximize productivity.",
  "file-transcription":
    "Learn how to transcribe external audio and video files using Superwhisper.",
  "history-management":
    "Learn how to schedule automatic deletion of Superwhisper history files using cron jobs.",
  "backing-up-settings":
    "Learn how to backup and restore your Superwhisper settings across different devices or for safekeeping.",
  report: "Learn how to get help when Superwhisper isn't working as expected.",
  community: "Explore community-built tools and integrations for Superwhisper.",
  windows:
    "Learn about current limitations in Superwhisper for Windows 10 and 11.",
  modes:
    "Superwhisper modes tailor how your voice gets processed, helping you work faster and smarter. Choose the right mode to transform your dictation into exactly what you need.",
  voice:
    "Voice to Text provides speed-optimized dictation with basic formatting. Ideal for both quick inputs or longer transcriptions where AI processing is not required.",
  message:
    "Message Mode enhances your dictation with smart formatting and grammar fixes, delivering polished, ready-to-send messages that capture your voice while maintaining clarity.",
  email:
    "Transform your spoken words into properly formatted emails instantly — just speak naturally and let Email Mode handle the structure.",
  note: "Turn your spoken ideas into structured, easy-to-read notes. Notes Mode helps you capture and organize your thoughts with smart formatting and clear hierarchies.",
  meeting:
    "Meeting mode records audio from your meetings and transcribes it into a clear summary with action items, helping you capture key points and next steps.",
  custom:
    "Take full control of your dictation processing with Custom Mode. Create specialized workflows by combining context-awareness with your own AI instructions for unlimited possibilities.",
  "switching-modes":
    "Learn four convenient ways to switch between Superwhisper modes: keyboard shortcuts, menu bar, auto-activation rules, and deep links.",
  "voice-models":
    "Compare Superwhisper's voice-to-text models — cloud and local options for fast, accurate transcription in 100+ languages.",
  "language-models":
    "Compare Superwhisper's language models — cloud AI models from Anthropic, OpenAI, and Groq that enhance and format your transcriptions.",
  "sensitive-data":
    "How to configure Superwhisper to protect healthcare, financial, and other regulated data, with guidance on local models, cloud commitments, and enterprise controls.",
  compliance:
    "Access Superwhisper's Trust Center, sign a DPA or BAA, and review our security and compliance documentation.",
  "account-deletion":
    "How to delete your Superwhisper account, and what we actually hold on you.",
  troubleshooting:
    "Troubleshooting guides and solutions for common Superwhisper issues.",
  "ios-26":
    "How iOS 26.4 changes affect third-party keyboards like Superwhisper, and what we've done to keep your experience smooth.",
  performance:
    "Learn how to optimize Superwhisper's performance and responsiveness on your system.",
  appstore: "How to fix failed App Store activation.",
  realtime:
    "Learn why the Realtime feature might be unavailable and how to enable it in Superwhisper.",
  "unable-to-create-modes":
    "Resolve issues with creating or saving modes in Superwhisper.",
  "language-detection":
    "Learn how to fix issues with Superwhisper automatically translating non-English dictation to English when using the Automatic language setting.",
  context:
    "Learn how Superwhisper captures context, troubleshoot related issues, and optimize your dictation experience with different context types.",
  hallucinations:
    "Learn how to identify and resolve hallucinations and unexpected results.",
  enterprise:
    "Stand up a Superwhisper Enterprise org for your team: authentication, billing, members, and models.",
  "enterprise-auth":
    "Set up Single Sign-On with SAML 2.0, SCIM provisioning, and MDM silent deployment for Superwhisper Enterprise.",
  "enterprise-config":
    "Org-wide policies for Superwhisper members: model access, recording controls, retention, and API tokens.",
  "enterprise-billing":
    "Set up billing, manage seats, and control subscription costs for your Superwhisper Enterprise organization.",
  "usage-analytics":
    "Optional dashboard showing how your team is using Superwhisper, with full transparency on what we collect and what we never collect.",
};

export const FULL_PAGES: Record<string, DocsPage> = {
  introduction: {
    slug: "introduction",
    title: "Introduction",
    description:
      "Superwhisper: ultra-fast AI powered dictation that understands what you want to say and how you want to say it.",
    toc: [
      { id: "available-on", title: "Available On" },
      { id: "how-it-works", title: "How It Works" },
      { id: "key-features", title: "Key Features" },
      { id: "initial-setup", title: "Initial Setup" },
      { id: "explore-more", title: "Explore More" },
    ],
    next: { slug: "pro", title: "Superwhisper Pro" },
    blocks: [
      {
        type: "p",
        text: "Instantly turn speech into perfect emails, crisp notes, clear messages, professional communication, and more.",
      },
      { type: "img", src: "/sw/docs/hero-dark.png", alt: "Superwhisper onboarding" },
      { type: "h2", id: "available-on", text: "Available On" },
      {
        type: "platforms",
        items: [
          { title: "macOS", body: "Full-featured desktop app" },
          { title: "Windows", body: "Windows desktop app" },
          { title: "iOS", body: "iPhone and iPad" },
        ],
      },
      { type: "h2", id: "how-it-works", text: "How It Works" },
      {
        type: "steps",
        items: [
          { title: "Dictation", body: "Just talk as you normally would." },
          {
            title: "Transcription",
            body: "AI converts your speech into text with exceptional accuracy.",
          },
          {
            title: "Smart Processing",
            body: "AI transforms your transcription to match exactly what you need.",
          },
        ],
      },
      { type: "h2", id: "key-features", text: "Key Features" },
      {
        type: "cards",
        items: [
          {
            title: "Intelligent Modes",
            body: "Choose from built-in modes such as pure voice transcription, tailored text formatting, or create your own custom modes with personalized AI instructions. Each mode processes your dictation differently — from simple voice-to-text to complex transformations that match your exact requirements and workflow preferences.",
          },
          {
            title: "Context-Aware AI",
            body: "When enabled, Superwhisper's context awareness understands your specific needs and delivers smarter, more personalized results.",
          },
          {
            title: "File Transcription",
            body: "Aside from dictation, Superwhisper can transform existing audio and video files into text. Perfect for processing lectures, meetings, or interviews.",
          },
          {
            title: "Language Support",
            body: "Dictate in your preferred language and translate to English on the fly, use built-in modes in your language, or create custom modes to harness Superwhisper's capabilities across 100+ supported languages.",
          },
          {
            title: "Use Your Own API Keys",
            body: "Superwhisper's flexibility extends beyond our built-in models. Integrate your own API keys to access additional AI providers and models, expanding your capabilities even further.",
          },
          {
            title: "Unlimited AI",
            body: "Experience unlimited access to powerful cloud & local AI models from leading providers like OpenAI, Anthropic, Deepgram, and Groq. Process dictations with advanced language models without worrying about usage limits or additional costs.",
          },
        ],
      },
      {
        type: "note",
        text: "New users receive 15 minutes of free access to all pro features and the ability to create 3 modes to experience Superwhisper's full potential.",
      },
      { type: "h2", id: "initial-setup", text: "Initial Setup" },
      {
        type: "p",
        text: "When you first launch Superwhisper, the onboarding process will help you:",
      },
      {
        type: "ul",
        items: [
          "Set up essential system permissions for dictation",
          "Choose your preferred language for transcription",
          "Select your AI model (cloud or local) with system-optimized suggestions",
          "Configure your microphone and audio settings",
          "Complete a guided first dictation with keyboard shortcuts",
          "Test and verify your setup is working correctly",
        ],
      },
      {
        type: "p",
        text: "By the end of onboarding, you'll have completed the basic setup. To fine-tune Superwhisper for your specific needs, just click the menu bar icon to access all settings anytime.",
      },
      { type: "h2", id: "explore-more", text: "Explore More" },
      {
        type: "cards",
        items: [
          {
            title: "All About Modes",
            body: "Discover how to leverage different modes for maximum productivity",
            href: "/docs/modes",
          },
          {
            title: "The Interface",
            body: "Master Superwhisper by exploring its interface and learning about all its powerful features",
            href: "/docs/settings-overview",
          },
          {
            title: "Troubleshooting",
            body: "Find solutions to common questions",
            href: "/docs/troubleshooting",
          },
          {
            title: "Report an Issue",
            body: "Help us improve by reporting any problems you encounter",
            href: "/docs/report",
          },
        ],
      },
      {
        type: "p",
        text: "Your license covers both desktop and iOS versions — giving you powerful AI dictation capabilities across all your devices at no additional cost.",
      },
    ],
  },
  pro: {
    slug: "pro",
    title: "Superwhisper Pro",
    eyebrow: "Pro Activation",
    description:
      "Learn about Superwhisper Pro features, pricing, and cross-platform licensing.",
    toc: [
      { id: "one-license", title: "One License, All Your Devices" },
      { id: "free-vs-pro", title: "Free vs Pro" },
      { id: "pricing", title: "Pricing" },
      { id: "where-to-buy", title: "Where to Buy" },
      { id: "cross-platform", title: "Cross-Platform Activation" },
      { id: "faq", title: "FAQ" },
    ],
    prev: { slug: "introduction", title: "Introduction" },
    next: { slug: "activate-ios", title: "iOS App Activation" },
    blocks: [
      { type: "h2", id: "one-license", text: "One License, All Your Devices" },
      {
        type: "p",
        text: "Your Superwhisper Pro license works across all platforms:",
      },
      {
        type: "platforms",
        items: [
          { title: "Mac", body: "Unlimited Mac computers" },
          { title: "Windows", body: "Unlimited Windows PCs" },
          { title: "iPhone", body: "Your personal device" },
          { title: "iPad", body: "Your personal device" },
        ],
      },
      {
        type: "p",
        text: "You don't need to buy separately for each platform. A single Pro license unlocks Superwhisper on all your devices.",
      },
      { type: "h2", id: "free-vs-pro", text: "Free vs Pro" },
      {
        type: "table",
        headers: ["Feature", "Free", "Pro"],
        rows: [
          ["Voice dictation", "Yes", "Yes"],
          ["Basic transcription", "Yes", "Yes"],
          ["Cloud voice models", "Limited", "Unlimited"],
          ["Local voice models", "—", "Yes"],
          ["Custom modes", "Limited", "Yes"],
          ["AI-powered modes (Super, Email, etc.)", "—", "Yes"],
          ["Custom vocabulary", "—", "Yes"],
          ["Speaker separation", "—", "Yes"],
          ["Priority support", "—", "Yes"],
        ],
      },
      { type: "h2", id: "pricing", text: "Pricing" },
      {
        type: "table",
        headers: ["Plan", "Price", "Best For"],
        rows: [
          ["Monthly", "$8.49/month", "Trying Pro features"],
          ["Annual", "$84.99/year", "Regular users (save ~17%)"],
          ["Lifetime", "$249.99 once", "Power users"],
        ],
      },
      {
        type: "p",
        text: "All plans include the same features and work on all platforms. The only difference is billing frequency.",
      },
      { type: "h2", id: "where-to-buy", text: "Where to Buy" },
      {
        type: "p",
        text: "You can purchase Superwhisper Pro from:",
      },
      {
        type: "h3",
        id: "website",
        text: "Superwhisper Website (Recommended)",
      },
      {
        type: "ul",
        items: [
          "Visit superwhisper.com",
          "Purchase provides a license key that works everywhere",
          "Easiest for cross-platform activation",
        ],
      },
      { type: "h3", id: "app-store", text: "iOS App Store" },
      {
        type: "ul",
        items: [
          "Purchase directly in the iPhone/iPad app",
          "Your license key is available in Settings > Superwhisper Pro > Reveal License Key",
          "Use this key to activate on Mac and Windows",
        ],
      },
      { type: "h2", id: "cross-platform", text: "Cross-Platform Activation" },
      {
        type: "cards",
        items: [
          {
            title: "Activate iOS",
            body: "Activate Pro on your iPhone or iPad",
            href: "/docs/activate-ios",
          },
          {
            title: "Activate Mac",
            body: "Activate Pro on your Mac",
            href: "/docs/activate-mac",
          },
          {
            title: "Windows Info",
            body: "Windows-specific information and limitations",
            href: "/docs/windows",
          },
        ],
      },
      { type: "h2", id: "faq", text: "FAQ" },
      {
        type: "h3",
        id: "separate-licenses",
        text: "Do I need separate licenses for Mac and iPhone?",
      },
      {
        type: "p",
        text: "No. One Pro license works on all platforms—Mac, Windows, iPhone, and iPad.",
      },
      {
        type: "h3",
        id: "multiple-devices",
        text: "Can I use my license on multiple Macs/PCs?",
      },
      {
        type: "p",
        text: "Yes. There's no device limit for Mac and Windows computers.",
      },
      {
        type: "h3",
        id: "bought-ios",
        text: "I bought on iOS. How do I activate on Mac or Windows?",
      },
      {
        type: "p",
        text: "Open the iOS app, go to Settings > Superwhisper Pro > Reveal License Key. Enter this key in your Mac or Windows app.",
      },
      {
        type: "h3",
        id: "sync",
        text: "Do my custom modes sync between devices?",
      },
      {
        type: "p",
        text: "Currently, modes and vocabulary are stored locally on each device. Cloud sync is planned for a future update.",
      },
      {
        type: "h3",
        id: "store-vs-web",
        text: "What's the difference between App Store and website purchase?",
      },
      {
        type: "p",
        text: "Both give you the same Pro features, but there are important differences:",
      },
      {
        type: "p",
        text: "Website purchase (Recommended): Lower price, direct license key delivery, and we can help with any purchase issues.",
      },
      {
        type: "p",
        text: "App Store purchase: Higher price due to Apple's platform fees. Your license key is available in iOS Settings > Superwhisper Pro > Reveal License Key. We cannot assist with App Store billing, refunds, or subscription management. For App Store purchase issues, please contact Apple Support.",
      },
    ],
  },
  "activate-ios": {
    slug: "activate-ios",
    title: "iOS App Activation",
    eyebrow: "Pro Activation",
    description:
      "Extend Superwhisper's powerful dictation capabilities to your mobile device with the iOS app.",
    toc: [
      { id: "mac-users", title: "Step-by-Step (Mac Users)" },
      { id: "windows-users", title: "Step-by-Step (Windows Users)" },
      { id: "troubleshooting", title: "Troubleshooting" },
      { id: "no-key", title: "Didn't Get Your License Key?" },
    ],
    prev: { slug: "pro", title: "Superwhisper Pro" },
    next: { slug: "activate-mac", title: "MacOS App Activation" },
    blocks: [
      {
        type: "p",
        text: "Your Superwhisper Pro license works on all platforms—Mac, Windows, iPhone, and iPad. You don't need to buy separately.",
      },
      { type: "img", src: "/sw/docs/activate-ios-001.png", alt: "iOS activation" },
      { type: "h2", id: "mac-users", text: "Step-by-Step (Mac Users)" },
      {
        type: "steps",
        items: [
          {
            title: "Download the App",
            body: "Get Superwhisper for iOS from the App Store.",
          },
          {
            title: "Access your License Settings",
            body: 'Once installed, open the iOS app and navigate to Settings. Look for the "superwhisper PRO" option, which allows you to activate your license on your mobile device.',
          },
          {
            title: "License Activation",
            body: "To complete activation, you'll need to scan a QR code from your desktop app. In the desktop app, open the Settings panel. At the bottom left, click the button labeled \"Superwhisper\" to view your license details. Locate the mobile activation QR code and use your iOS device to scan the displayed code.",
          },
        ],
      },
      { type: "img", src: "/sw/docs/activate-ios-002.png", alt: "Scan QR code" },
      { type: "h2", id: "windows-users", text: "Step-by-Step (Windows Users)" },
      {
        type: "note",
        text: "The Windows app does not currently include a QR code for iOS activation. Use the manual method below.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Download the iOS App",
            body: "Get Superwhisper for iOS from the App Store.",
          },
          {
            title: "Find Your License Key",
            body: "Open Superwhisper on your Windows PC and go to Settings to locate your license key.",
          },
          {
            title: "Activate via URL",
            body: "On your iPhone, open Safari and enter this URL (replace YOUR-KEY with your actual license key).",
          },
        ],
      },
      { type: "code", text: "superwhisper://license/YOUR-KEY" },
      {
        type: "p",
        text: "Example: superwhisper://license/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX. Tap “Open” when prompted to activate Superwhisper.",
      },
      {
        type: "p",
        text: "Alternative: Open the Superwhisper iOS app > Settings > Superwhisper Pro > Enter your license key manually.",
      },
      { type: "h2", id: "troubleshooting", text: "Troubleshooting" },
      {
        type: "p",
        text: "Having trouble with the QR code? Here's a simple fix:",
      },
      {
        type: "ol",
        items: [
          "Open the QR code screen on your Mac",
          'Double-click your license key (you\'ll see "Copied to clipboard")',
          "Create the activation link: start with superwhisper://license/ then paste your key after the slash",
          "Open this link on your iOS device",
        ],
      },
      {
        type: "p",
        text: "This manual activation method works just as well as the QR code scan.",
      },
      { type: "h2", id: "no-key", text: "Didn't Get Your License Key?" },
      {
        type: "p",
        text: "If you paid for Superwhisper Pro but didn't receive a license key:",
      },
      {
        type: "ol",
        items: [
          "Check your spam or promotions folder for an email from superwhisper.com",
          "Confirm the email on your order matches the one you're checking",
          "Still nothing? Email support@superwhisper.com with the email or receipt from your purchase and we'll resend it",
        ],
      },
    ],
  },
  super: {
    slug: "super",
    title: "Super",
    eyebrow: "Modes",
    description:
      "Supercharge your dictation with advanced context-aware processing. Super Mode intelligently adapts to your active applications, selected text, and clipboard content to deliver more accurate and relevant results.",
    toc: [
      { id: "key-features", title: "Key Features" },
      { id: "context", title: "Context Awareness" },
      { id: "commands", title: "Commands" },
      { id: "troubleshooting", title: "Troubleshooting" },
    ],
    prev: { slug: "modes", title: "Intro to Modes" },
    next: { slug: "voice", title: "Voice to Text" },
    blocks: [
      { type: "img", src: "/sw/docs/modes-super-001.png", alt: "Super Mode" },
      { type: "h2", id: "key-features", text: "Key Features" },
      { type: "p", text: "Super Mode enhances your dictation by:" },
      {
        type: "ul",
        items: [
          "Adapting messages to match application context",
          "Correcting spelling based on app-specific terms, names, and vocabulary",
          "Converting spoken URLs and emails into proper format",
          "Preserving message tone and intent while improving clarity",
        ],
      },
      { type: "h2", id: "context", text: "Context Awareness" },
      {
        type: "p",
        text: "Super Mode uses accessibility APIs to gather three types of context:",
      },
      { type: "h3", id: "app-context", text: "1. Application Context" },
      {
        type: "ul",
        items: [
          "Identifies your active application",
          "Reads text from current input fields or text editor",
        ],
      },
      { type: "h3", id: "selected", text: "2. Selected Text Context" },
      {
        type: "ul",
        items: [
          "Reads any text you've highlighted",
          "Uses selection to inform AI processing",
        ],
      },
      { type: "h3", id: "clipboard", text: "3. Clipboard Context" },
      {
        type: "ul",
        items: [
          "Incorporates text copied within 3 seconds of dictation, or during dictation",
        ],
      },
      {
        type: "p",
        text: "When Application Context is active, Superwhisper also includes system information, like the current date and time, your full name, and your computer name. This can help the AI handle things like inserting today's date or addressing you by name.",
      },
      { type: "h2", id: "commands", text: "Commands" },
      {
        type: "p",
        text: "Super Mode lets you dictate commands on selected text. While it understands context, for best result use commands focused on text transformation or formatting rather than content analysis or generation.",
      },
      { type: "h3", id: "correct", text: "Correct" },
      {
        type: "ul",
        items: [
          '"Make this text title case"',
          '"Convert selection to uppercase"',
          '"Format my selected text as bullet points"',
        ],
      },
      { type: "h3", id: "incorrect", text: "Incorrect" },
      {
        type: "ul",
        items: [
          '"Summarize this paragraph"',
          '"Expand on these ideas"',
          '"Rewrite this section"',
        ],
      },
      {
        type: "p",
        text: "While you can use commands for formatting, they're completely optional. Just dictate naturally and Super Mode will intelligently adapt to your active app — no text selection or copying needed. It's that simple.",
      },
      { type: "h2", id: "troubleshooting", text: "Troubleshooting" },
      {
        type: "p",
        text: "If you're not getting expected results with Super Mode, check these common issues:",
      },
      { type: "h3", id: "mismatch", text: "Command Type Mismatch" },
      {
        type: "p",
        text: "If you are dictating a command, ensure it is related to formatting or text transformation only. Review the Commands section above for examples.",
      },
      { type: "h3", id: "models", text: "AI Models" },
      {
        type: "p",
        text: "Since Super Mode handles multiple types of context and more complex instructions, it may require advanced language understanding, such as that provided by Claude or GPT models. Using less capable or local models can produce weaker results.",
      },
      { type: "h3", id: "settings", text: "System Settings & User Error" },
      {
        type: "ul",
        items: [
          "Check system settings for the correct permissions",
          "For application context, make sure the correct app window is active",
          "For selected text context, verify that the text is selected when triggering the dictation",
          "Text copied to your clipboard will only be processed if done within 3 seconds of starting your dictation",
        ],
      },
    ],
  },
  "reprocess-from-history": {
    slug: "reprocess-from-history",
    title: "Reprocess from History",
    eyebrow: "Get Started",
    description: "Learn how to reprocess previous voice recordings with Superwhisper.",
    toc: [
      { id: "overview", title: "Overview" },
      { id: "steps", title: "Step by Step" },
      { id: "benefits", title: "Key Benefits" },
      { id: "related", title: "Related Documentation" },
    ],
    prev: { slug: "settings-overview", title: "The Interface" },
    next: { slug: "file-transcription", title: "File Transcription" },
    blocks: [
      { type: "h2", id: "overview", text: "Overview" },
      {
        type: "p",
        text: "Superwhisper's History feature allows users to reprocess previous dictations with ease, offering the convenience to retry failed transcriptions or explore different processing options without re-recording.",
      },
      {
        type: "note",
        text: "Ensure you have the desired mode active before reprocessing, as the dictation will be transcribed using your current mode settings.",
      },
      { type: "img", src: "/sw/docs/transcribe-history-001.png", alt: "History panel" },
      { type: "h2", id: "steps", text: "Step by Step" },
      { type: "h3", id: "open", text: "Open History" },
      { type: "p", text: "You can access the History through two methods:" },
      {
        type: "ul",
        items: [
          "Menu Bar Icon",
          "Superwhisper Settings",
          "Mini Recording Window Context Menu",
        ],
      },
      { type: "img", src: "/sw/docs/transcribe-history-002.png", alt: "Open History" },
      { type: "h3", id: "reprocess", text: "Reprocess" },
      {
        type: "p",
        text: 'In the History tab, you\'ll find a list of previous dictations in the left sidebar. Right-click on the desired recording and select "Process Again".',
      },
      {
        type: "img",
        src: "/sw/docs/transcribe-history-003.png",
        alt: "Process Again",
      },
      { type: "h2", id: "benefits", text: "Key Benefits" },
      {
        type: "p",
        text: "Once you learn how to reprocess dictations through Superwhisper's History feature, a world of flexibility opens up for your transcription workflow. Now you can:",
      },
      {
        type: "ul",
        items: [
          "Avoid re-recording failed transcriptions",
          "Experiment with different Superwhisper modes",
          "Easily generate alternative outputs",
          "Save time and improve workflow efficiency",
        ],
      },
      { type: "h2", id: "related", text: "Related Documentation" },
      {
        type: "cards",
        items: [
          {
            title: "Superwhisper's History",
            body: "Discover more features in Superwhisper's History tab. Analyze results, review AI prompts, troubleshoot transcriptions, and unlock powerful workflow tools.",
            href: "/docs/settings-overview",
          },
          {
            title: "File Transcription",
            body: "Transcribe external audio and video files using Superwhisper's modes. Expand your transcription capabilities with flexible file processing.",
            href: "/docs/file-transcription",
          },
        ],
      },
    ],
  },
};

export function getDocsPage(slug: string): DocsPage {
  if (FULL_PAGES[slug]) return FULL_PAGES[slug];
  const navItem = DOCS_NAV.flatMap((g) => g.items).find((i) => i.slug === slug);
  const title = navItem?.title ?? slug;
  const description =
    BLURBS[slug] ??
    "This page is listed in Superwhisper documentation. Open it from the sidebar to learn more.";
  return {
    slug,
    title,
    description,
    toc: [{ id: "overview", title: "Overview" }],
    blocks: [
      { type: "h2", id: "overview", text: "Overview" },
      { type: "p", text: description },
      {
        type: "callout",
        title: "From Superwhisper docs",
        text: "This article is part of the official Superwhisper documentation index. The landing, Super, Pro, iOS activation, and History pages include the full source copy from the provided dumps.",
      },
    ],
  };
}

export function allDocsPages(): { slug: string; title: string; description: string }[] {
  return DOCS_NAV.flatMap((g) =>
    g.items.map((i) => ({
      slug: i.slug,
      title: i.title,
      description: FULL_PAGES[i.slug]?.description ?? BLURBS[i.slug] ?? "",
    })),
  );
}
