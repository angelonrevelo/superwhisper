import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FileText,
  Hand,
  Keyboard,
  Sparkles,
  WifiOff,
  SlidersHorizontal,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AppleIcon, WindowsIcon } from "@/components/site/DownloadModal";
import { useDownload } from "@/components/site/DownloadContext";
import { TriangleMark } from "@/components/brand";
import { cn } from "@/lib/cn";
import {
  ENTERPRISE_FEATURES,
  FAQS,
  FEATURE_CARDS,
  FREE_FEATURES,
  MINI_FEATURES,
  PRICING,
  PRO_FEATURES,
  TESTIMONIALS,
  TONE_MODES,
  TUTORIALS,
  type TimeOfDay,
} from "@/data/site";

export function LandingPage({ pinPricing = false }: { pinPricing?: boolean }) {
  const [time, setTime] = useState<TimeOfDay>("dusk");
  const { openDownload } = useDownload();

  useEffect(() => {
    if (!pinPricing) return;
    const el = document.getElementById("pricing");
    el?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
  }, [pinPricing]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteNav timeOfDay={time} onTimeOfDay={setTime} />
      <Hero time={time} onDownload={openDownload} />
      <DemoStage />
      <SocialProof />
      <Adaptability />
      <Features />
      <CustomMode />
      <Integrations />
      <Agentic />
      <IosCta />
      <Testimonials />
      <Pricing onCta={openDownload} />
      <Tutorials />
      <Faq />
      <SiteFooter />
    </div>
  );
}

function Hero({ time, onDownload }: { time: TimeOfDay; onDownload: () => void }) {
  const left = `/sw/landing/${time}-left.webp`;
  const right = `/sw/landing/${time}-right.webp`;

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            time === "day"
              ? "linear-gradient(180deg, #7eb3d9 0%, #c9d6e4 45%, #e8d5c4 100%)"
              : time === "night"
                ? "linear-gradient(180deg, #05060d 0%, #10142a 50%, #1a1630 100%)"
                : "linear-gradient(180deg, #0b1a3a 0%, #24306a 38%, #6a5a9a 72%, #c9a8d4 100%)",
        }}
      />
      <img
        src={left}
        alt=""
        className="pointer-events-none absolute top-0 left-0 hidden h-full w-[38%] object-cover object-left md:block"
      />
      <img
        src={right}
        alt=""
        className="pointer-events-none absolute right-[-4%] bottom-[-8%] hidden h-[62%] w-[42%] object-contain object-right md:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        <h1
          className={cn(
            "text-[42px] leading-[1.05] font-semibold tracking-[-0.035em] sm:text-[56px] md:text-[64px]",
            time === "day" ? "text-[#1a2744]" : "text-white/90",
          )}
        >
          Just speak.
          <br />
          Write faster.
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex h-[42px] items-center gap-2 rounded-[9px] bg-white px-3.5 text-[14px] font-medium text-black shadow-sm transition hover:bg-white/90"
          >
            <AppleIcon />
            Download for Mac
          </button>
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex h-[42px] items-center gap-2 rounded-[9px] bg-black px-3.5 text-[14px] font-medium text-white ring-1 ring-white/10 transition hover:bg-zinc-900"
          >
            <WindowsIcon />
            Download for Windows
          </button>
        </div>
        <button
          type="button"
          onClick={onDownload}
          className={cn(
            "mt-3 text-[13px] transition hover:opacity-80",
            time === "day" ? "text-[#3a4a66]" : "text-white/55",
          )}
        >
          Also available for iPhone <span aria-hidden>›</span>
        </button>
        <p
          className={cn(
            "mt-8 max-w-md text-[14px] leading-relaxed",
            time === "day" ? "text-[#3a4a66]" : "text-white/60",
          )}
        >
          Turn your voice into polished text.
          <br />
          Works in Slack, Gmail and any other site or app.
        </p>
      </div>
    </section>
  );
}

function DemoStage() {
  const [playing, setPlaying] = useState(false);
  const [scene, setScene] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => {
      setScene((s) => ((s + 1) % 3) as 0 | 1 | 2);
    }, 3800);
    return () => window.clearInterval(t);
  }, [playing]);

  return (
    <section className="relative bg-bg px-4 pb-8 md:px-8">
      <div className="relative mx-auto max-w-[1024px] overflow-hidden rounded-[28px] border border-white/6">
        <div
          className="relative aspect-[16/10] min-h-[320px] w-full"
          style={{
            background:
              "linear-gradient(180deg, #0b1c4a 0%, #2a2a78 46%, #7a6ad4 78%, #c9b4e8 100%)",
          }}
        >
          {!playing ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <p className="text-[22px] font-medium tracking-tight text-white md:text-[28px]">
                Ready to see how it works?
              </p>
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-[15px] font-medium text-white backdrop-blur-md transition hover:bg-white/16"
              >
                <span className="grid size-5 place-items-center rounded-full bg-white text-black">
                  <svg viewBox="0 0 10 10" className="ml-0.5 size-2.5" fill="currentColor">
                    <path d="M2 1.2l7 3.8-7 3.8V1.2z" />
                  </svg>
                </span>
                Play Demo
              </button>
            </div>
          ) : (
            <div className="absolute inset-0 p-3 md:p-6">
              {scene === 0 ? <SlackScene /> : scene === 1 ? <NotesScene /> : <CursorScene />}
              <div className="absolute right-4 bottom-4 flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setScene(i as 0 | 1 | 2)}
                    className={cn(
                      "h-1.5 w-6 rounded-full",
                      scene === i ? "bg-white" : "bg-white/30",
                    )}
                    aria-label={`Scene ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SlackScene() {
  return (
    <div className="flex h-full overflow-hidden rounded-2xl bg-[#1a1d21] text-[12px] text-[#d1d2d3] shadow-2xl">
      <aside className="hidden w-[200px] shrink-0 flex-col bg-[#19171d] p-3 md:flex">
        <p className="mb-3 px-2 text-[13px] font-semibold">Slack</p>
        <p className="px-2 text-[11px] text-white/40">Channels</p>
        <p className="mt-1 rounded px-2 py-0.5"># announcements</p>
        <p className="rounded bg-white/10 px-2 py-0.5"># standup</p>
        <p className="mt-3 px-2 text-[11px] text-white/40">Direct messages</p>
        <p className="mt-1 flex items-center gap-2 px-2 py-0.5">
          <img src="/sw/landing/pfp-lisa.webp" alt="" className="size-4 rounded-full" />
          Lisa
        </p>
        <p className="flex items-center gap-2 px-2 py-0.5">
          <img src="/sw/landing/pfp-dario.webp" alt="" className="size-4 rounded-full" />
          Dario
        </p>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-white/8 px-4 py-3 text-[13px] font-semibold">#standup</div>
        <div className="flex-1 space-y-3 p-4">
          <p className="text-white/40">Welcome to the #standup channel</p>
          <div className="flex gap-2">
            <img src="/sw/landing/pfp-lisa.webp" alt="" className="size-8 rounded-lg" />
            <div>
              <p>
                <span className="font-semibold">Lisa</span>{" "}
                <span className="text-white/35">10:00 AM</span>
              </p>
              <p>☕ Morning team, any updates from last week?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotesScene() {
  return (
    <div className="mx-auto flex h-full max-w-lg flex-col overflow-hidden rounded-2xl bg-[#1c1c1e] p-4 text-left shadow-2xl">
      <p className="text-[11px] text-white/40">Today</p>
      <div className="mt-2 rounded-xl bg-white/6 p-3">
        <p className="text-[13px] font-medium">New note</p>
        <p className="text-[11px] text-white/40">5:04PM · No additional text</p>
      </div>
      <div className="mt-2 rounded-xl bg-white/6 p-3">
        <p className="text-[13px] font-medium">Dream where I found a rock with a strange letter on it.</p>
        <p className="text-[11px] text-white/40">7:15PM · When I put it to my ear, it started whispering</p>
      </div>
      <div className="mt-2 rounded-xl bg-white/6 p-3">
        <p className="text-[13px] font-medium">List of books</p>
        <p className="text-[11px] text-white/40">7:12PM · Doctor Faustus, Thomas Mann</p>
      </div>
    </div>
  );
}

function CursorScene() {
  return (
    <div className="h-full overflow-hidden rounded-2xl bg-[#0d0d0d] p-4 font-mono text-[11px] leading-relaxed text-[#c8c8c8] shadow-2xl">
      <p className="text-white/40">mod.rs · Current File · claude-4.5-opus</p>
      <pre className="mt-3 overflow-hidden text-[11px] text-[#9cdcfe]">
{`function solid() {
  switch (key) {
    case 37,38,39,40,65,66
    // Handle keyboard navigation
  }
}
class WaveForm
  analyze_spectrum
  for frequency in range(20, 20000)`}
      </pre>
    </div>
  );
}

function SocialProof() {
  const logos = [
    { src: "/sw/landing/Spotify.svg", alt: "Spotify" },
    { src: "/sw/landing/OpenAI.svg", alt: "OpenAI" },
    { src: "/sw/landing/Shopify.svg", alt: "Shopify" },
    { src: "/sw/landing/anthropic.svg", alt: "Anthropic" },
    { src: "/sw/landing/Applelogo.svg", alt: "Apple" },
  ];
  return (
    <section className="px-6 py-24 text-center">
      <div
        className="mx-auto mb-8 flex max-w-xl flex-wrap items-center justify-center gap-8 opacity-50 grayscale"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <TriangleMark className="size-5 text-fg" />
        {logos.map((l) => (
          <img key={l.alt} src={l.src} alt={l.alt} className="h-6 w-auto invert" />
        ))}
      </div>
      <h2 className="text-[28px] font-semibold tracking-tight md:text-[34px]">
        Used by those who move fast
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-[15px] text-muted-2">
        From startups to industry leaders,{" "}
        <span className="text-fg">hundreds of thousands</span> rely on Superwhisper
        to save time.
      </p>
    </section>
  );
}

function Adaptability() {
  const [mode, setMode] = useState<(typeof TONE_MODES)[number]["id"]>("casual");
  const active = TONE_MODES.find((m) => m.id === mode) ?? TONE_MODES[1];

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-2 lg:py-20">
      <div>
        <p className="text-[13px] text-muted">Adaptability</p>
        <h2 className="mt-2 max-w-md text-[34px] leading-[1.15] font-semibold tracking-tight md:text-[42px]">
          Communication isn't one-size-fits-all
        </h2>
      </div>
      <div className="rounded-[22px] border border-line bg-[#0c0d12] p-5 md:p-7">
        <div className="flex min-h-[240px] flex-col justify-end gap-2.5">
          {active.bubbles.map((b, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[86%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug",
                b.from === "me"
                  ? "self-end bg-[#3b82f6] text-white"
                  : "self-start bg-[#2a2d36] text-white/85",
              )}
            >
              {b.text}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {TONE_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={cn(
                "h-8 rounded-full px-3.5 text-[13px] transition",
                mode === m.id
                  ? "bg-[#2a2d44] text-fg ring-1 ring-white/10"
                  : "text-muted hover:text-fg",
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-line bg-[#070708] px-5 py-10 md:px-10 md:py-14">
        <p className="text-[13px] font-medium text-accent-pink">What's inside</p>
        <h2 className="mt-2 max-w-md text-[32px] leading-[1.15] font-semibold tracking-tight md:text-[40px]">
          Powerful features, seamlessly integrated.
        </h2>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.title}
              className="relative min-w-[280px] overflow-hidden rounded-2xl border border-white/6 bg-[#101012] p-4 md:min-w-0"
            >
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                <FeatureVisual card={card} />
              </div>
              <h3 className="flex items-center gap-2 font-medium">
                {card.title === "Works offline" ? (
                  <WifiOff className="size-4 text-[#c084fc]" />
                ) : null}
                {card.title}
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-2">{card.body}</p>
              <p className="mt-1 text-[13px] text-muted-2">{card.punch}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MINI_FEATURES.map((f) => (
            <div key={f.title}>
              <div className="mb-3 text-muted-2">
                {f.icon === "file" ? (
                  <FileText className="size-5" />
                ) : f.icon === "ptt" ? (
                  <Hand className="size-5" />
                ) : f.icon === "keys" ? (
                  <Keyboard className="size-5" />
                ) : (
                  <Sparkles className="size-5" />
                )}
              </div>
              <h3 className="flex items-center gap-2 text-[15px] font-medium">
                {f.title}
                {f.badge ? (
                  <span className="rounded-full bg-[#d4f562] px-1.5 py-0.5 text-[10px] font-semibold text-black">
                    {f.badge}
                  </span>
                ) : null}
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ card }: { card: (typeof FEATURE_CARDS)[number] }) {
  if (card.title === "Works offline") {
    return (
      <div className="relative size-full overflow-hidden rounded-xl">
        <img src="/sw/landing/background(1).webp" alt="" className="size-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-4 rounded-full bg-black/25 px-6 py-3.5 text-[26px] font-medium text-white shadow-lg backdrop-blur-md">
            Wi-Fi
            <span className="relative inline-flex h-8 w-14 items-center rounded-full bg-white/25 ring-1 ring-white/30">
              <span className="absolute right-0.5 size-7 rounded-full bg-white shadow-md" />
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (card.title === "Use your own words") {
    return (
      <div className="size-full rounded-xl bg-[#14181c]">
        <VocabMock />
      </div>
    );
  }
  if (card.title === "Predefined modes") {
    return (
      <div
        className="relative flex size-full items-center justify-center gap-2 rounded-xl px-3"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #7a2a3a 0%, #2a1018 70%)",
        }}
      >
        {[
          { l: "Voice", on: false },
          { l: "Message", on: true },
          { l: "Email", on: false },
        ].map((x) => (
          <div
            key={x.l}
            className={cn(
              "min-w-[72px] rounded-2xl px-3 py-5 text-center text-[12px] font-medium",
              x.on ? "bg-white text-black shadow-lg" : "bg-white/10 text-white",
            )}
          >
            {x.l}
          </div>
        ))}
      </div>
    );
  }
  if (card.title === "Multilanguage support") {
    return (
      <div
        className="flex size-full items-center justify-center overflow-hidden rounded-xl p-3 text-center text-[18px] leading-snug font-semibold"
        style={{
          background:
            "radial-gradient(80% 80% at 50% 40%, #1a2a6a 0%, #0a1028 80%)",
        }}
      >
        <p className="text-white/90">
          hello こんにちは ciao
          <br />
          привет olá হ্যালো
          <br />
          안녕하세요 bonjour
          <br />
          مرحبا 你好
        </p>
      </div>
    );
  }
  if (card.title === "Clipboard integration") {
    return (
      <div
        className="flex size-full items-center justify-center rounded-xl p-5"
        style={{ background: "radial-gradient(80% 80% at 50% 40%, #163328 0%, #0a1610 80%)" }}
      >
        <div className="rounded-2xl bg-[#1c3328] px-4 py-3 text-[13px] leading-snug text-white/85 shadow-xl ring-1 ring-white/8">
          Hey! Wanna catch a movie this weekend? They're playing Mulholland Drive at The
          Rialto.
        </div>
      </div>
    );
  }
  if (card.title === "Meeting assistant") {
    return (
      <div className="relative size-full overflow-hidden rounded-xl">
        <img src="/sw/landing/background(5).webp" alt="" className="size-full object-cover" />
        <div className="absolute inset-y-3 right-3 w-[42%] rounded-lg bg-black/55 p-2 text-[9px] leading-relaxed text-white/75 backdrop-blur-sm">
          <p className="mb-1 font-medium">Project Timeline</p>
          <p>• Mark asks if we can extend the deadline</p>
          <p>• Sarah responds time would be tight</p>
          <p>• John suggests extra resources</p>
        </div>
      </div>
    );
  }
  return <div className="size-full bg-card-2" />;
}

function VocabMock() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 p-4">
      <p className="text-[12px] text-white/50">Add a new word</p>
      <div className="flex gap-2">
        <div className="h-8 flex-1 rounded-md bg-white/8" />
        <div className="h-8 w-24 rounded-md bg-white/10 text-center text-[11px] leading-8">
          Create
        </div>
      </div>
      {["EBITDA", "C'est la vie", "Øystein"].map((w) => (
        <div key={w} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-[13px]">
          {w}
          <span className="text-white/30">⌫</span>
        </div>
      ))}
    </div>
  );
}

function CustomMode() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <div className="relative">
        <img
          src="/sw/docs/introduction-001.png"
          alt="Custom Mode settings"
          className="w-full rotate-[-8deg] rounded-2xl opacity-90"
        />
      </div>
      <div>
        <p className="text-[13px] font-medium text-link">Custom Mode</p>
        <h2 className="mt-2 text-[36px] leading-[1.1] font-semibold tracking-tight md:text-[44px]">
          Build it yourself
        </h2>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-2">
          Custom Mode lets you define how Superwhisper thinks, writes, and formats.
          Down to the finest detail.
        </p>
        <ul className="mt-8 space-y-6">
          <FeatureRow
            icon={<SlidersHorizontal className="size-4" />}
            title="Beyond tone – precision control"
            body="Set formatting rules, structure preferences, and even specialized prompts for different tasks."
          />
          <FeatureRow
            icon={<Cpu className="size-4" />}
            title="Pick the right model for the job"
            body="Choose from top-tier models like GPT, Claude, or Llama to balance speed, accuracy, and complexity."
          />
          <FeatureRow
            icon={<RefreshCw className="size-4" />}
            title="Refine for every situation"
            body="Save your preferences once, get consistent output every time. No more tweaking the same settings over and over."
          />
        </ul>
      </div>
    </section>
  );
}

function FeatureRow({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 text-muted-2">{icon}</span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-[14px] leading-relaxed text-muted">{body}</p>
      </div>
    </li>
  );
}

function Integrations() {
  const icons = Array.from({ length: 30 }, (_, i) => `/sw/landing/appicon-${i}.webp`);
  return (
    <section className="overflow-hidden px-6 pt-10 pb-6 text-center">
      <p className="text-[13px] font-medium text-link">Integrations</p>
      <h2 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-tight md:text-[56px]">
        <span className="text-white/40">Works</span> anywhere
        <br />
        <span className="text-white/40">you can type</span>
      </h2>
      <p className="mt-5 text-[16px] text-fg">Slack, Cursor, Notion...</p>
      <p className="text-[15px] text-muted-2">You say it, Superwhisper handles it.</p>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="mx-auto origin-center scale-[0.92] rotate-[-8deg] rounded-[28px] bg-[#2a2a2c] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:p-6">
          <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
            {icons.slice(0, 30).map((src, i) => (
              <div
                key={src + i}
                className="flex aspect-square items-center justify-center rounded-[11px] bg-[#161618] p-[16%] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <img src={src} alt="" className="size-full rounded-[7px] object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-1.5 sm:gap-2">
            <div className="h-10 flex-[2] rounded-[10px] bg-[#111113]" />
            <div className="h-10 flex-[5] rounded-[10px] bg-[#111113]" />
            <div className="h-10 flex-[2] rounded-[10px] bg-[#111113]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Agentic() {
  return (
    <section id="agentic" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_1.15fr]">
      <div>
        <p className="text-[13px] font-medium text-accent-yellow">Beep boop</p>
        <h2 className="mt-2 text-[34px] leading-[1.1] font-semibold tracking-tight md:text-[42px]">
          Faster agentic workflows
        </h2>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-2">
          Use Superwhisper with Cursor, Claude Code, Open Code, Amp, Codex, or any
          other agentic coding app, without touching your keyboard.
        </p>
        <ul className="mt-8 space-y-6">
          <FeatureRow
            icon={<SlidersHorizontal className="size-4 text-accent-yellow" />}
            title="Works where you code"
            body="Superwhisper integrates seamlessly so you can drive an entire fleet of agents faster than you can type."
          />
          <FeatureRow
            icon={<Cpu className="size-4 text-accent-yellow" />}
            title="Less typing, more building"
            body="Allow agents to one shot your next feature by giving them more context. Talk through your change and skip the typing."
          />
        </ul>
      </div>
      <ClaudeMock />
    </section>
  );
}

function ClaudeMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] font-mono text-[12px] shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-1.5 border-b border-white/6 px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-lg border border-[#c45c26]/50 p-3">
          <p className="text-center text-[#e07a3a]">Claude Code v2.1.12</p>
          <p className="mt-2 text-center">Welcome back!</p>
          <div className="mx-auto mt-2 size-10 bg-[#e07a3a]" style={{ clipPath: "polygon(20% 10%, 80% 10%, 90% 40%, 70% 90%, 30% 90%, 10% 40%)" }} />
          <p className="mt-2 text-center text-white/70">Opus 4.5 · Claude Team · Superwhisper</p>
          <p className="text-center text-white/40">~/Dev/kestrel</p>
        </div>
        <div className="rounded-lg border border-[#c45c26]/50 p-3 text-[#e07a3a]">
          <p className="font-semibold">Tips for getting started</p>
          <p className="mt-1 text-white/50">Run /init to create a …</p>
          <p className="mt-3 font-semibold">Recent activity</p>
          <p className="text-white/50">No recent activity</p>
        </div>
      </div>
      <div className="space-y-2 px-4 pb-4 text-[12.5px] leading-relaxed">
        <p>
          <span className="text-white/40">› </span>
          In @shape-generator.js can you add a nice morphing transition when I click
          generate? Like they morph from square to circle and vice versa or just fade
          out, but not instant like it is now.
        </p>
        <p>
          <span className="text-emerald-400">Read</span>
          <span className="text-white/50">(shape-generator.html)</span>
        </p>
        <p className="text-white/50">Read 1395 lines</p>
        <p>
          I'll add a smooth morphing transition with fade and border-radius animation
          when generating new shapes.
        </p>
        <p>
          <span className="text-amber-300">Update</span>
          <span className="text-white/50">(shape-generator.html)</span>
        </p>
        <p className="text-white/40">Edit file shape-generator.html</p>
        <pre className="text-white/45">{`  83   .shape-cell {
  84     width: 40px;`}</pre>
      </div>
    </div>
  );
}

function IosCta() {
  return (
    <section id="ios" className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-20 sm:flex-row sm:justify-center">
      <img
        src="/sw/landing/appstore-qr.svg"
        alt="App Store QR code"
        className="size-28 rounded-lg bg-white p-1.5"
      />
      <div>
        <h2 className="text-[28px] font-semibold tracking-tight">Also available for iOS</h2>
        <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted-2">
          Take Superwhisper for a stroll and keep your tone, punctuation, and
          formatting flawless, wherever you go.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section
      className="relative overflow-hidden px-6 py-24"
      style={{
        background:
          "linear-gradient(180deg, #050816 0%, #1a1450 42%, #4a2a88 78%, #7a4aa8 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-[13px] font-medium text-accent-pink">What people say</p>
        <h2 className="mt-3 text-[34px] leading-[1.1] font-semibold tracking-tight md:text-[52px]">
          Loved by thousands,
          <br />
          built for how you work
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.7fr]">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-x-6 top-6 h-full rounded-2xl bg-white/20" />
          <div className="absolute inset-x-3 top-3 h-full rounded-2xl bg-white/35" />
          <article className="relative rounded-2xl bg-[#e8e8ea] p-5 text-left text-black shadow-2xl">
            <div className="mb-4 flex items-center gap-3">
              <img src={t.avatar} alt="" className="size-11 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-zinc-500">
                  {t.role} {t.company}
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl bg-white p-5 shadow-sm">
              <img
                src="/sw/landing/paperclip.webp"
                alt=""
                className="absolute -top-3 -right-2 w-10"
              />
              <p className="flex items-center gap-1.5 font-semibold">
                {t.name}
                {t.verified ? (
                  <img src="/sw/landing/verified-badge.png" alt="" className="size-4" />
                ) : null}
                <span className="font-normal text-zinc-400">@{t.handle}</span>
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-800">
                {t.quote.split("@superwhisperapp").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 ? (
                      <span className="text-[#1d9bf0]">@superwhisperapp</span>
                    ) : null}
                  </span>
                ))}
              </p>
            </div>
          </article>
        </div>

        <div>
          <p className="text-[22px] font-semibold">Testimonies</p>
          <p className="text-sm text-white/55">Endless happy users</p>
          <ul className="mt-5 space-y-1.5">
            {TESTIMONIALS.map((person, i) => (
              <li key={person.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition",
                    i === active ? "bg-white/12" : "hover:bg-white/6",
                  )}
                >
                  <img src={person.avatar} alt="" className="size-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium">{person.name}</p>
                    <p className="text-[13px] text-white/50">
                      {person.role} {person.company}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pricing({ onCta }: { onCta: () => void }) {
  const [cycle, setCycle] = useState<keyof typeof PRICING>("monthly");
  const plan = PRICING[cycle];
  const priceLabel = useMemo(() => {
    if (cycle === "lifetime") return plan.pro.toFixed(0);
    const [whole, frac] = plan.pro.toFixed(2).split(".");
    return { whole, frac };
  }, [cycle, plan.pro]);

  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-24">
      <div className="mx-auto mb-10 flex justify-center">
        <div className="flex items-center rounded-full border border-white/8 bg-[#141414] p-1">
          {(Object.keys(PRICING) as (keyof typeof PRICING)[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCycle(key)}
              className={cn(
                "h-9 rounded-full px-4 text-[13px] transition",
                cycle === key ? "bg-[#2a2a2a] text-fg" : "text-muted hover:text-fg",
              )}
            >
              {PRICING[key].label}
              {PRICING[key].note ? (
                <span className="ml-1 text-muted">({PRICING[key].note})</span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-3">
        <PriceCard
          name="Free"
          price="$0"
          blurb="Must-have features for everyday use."
          items={FREE_FEATURES}
          cta="Download"
          onCta={onCta}
          footnote="Available on Mac, Windows and iOS"
        />
        <PriceCard
          name="Pro"
          highlighted
          price={
            typeof priceLabel === "string" ? (
              <>
                <span className="mr-0.5 align-top text-[26px]">$</span>
                {priceLabel}
              </>
            ) : (
              <span className="inline-flex items-start">
                <span className="mt-1.5 text-[26px] font-semibold">$</span>
                <span className="text-[56px] leading-none">{priceLabel.whole}</span>
                <span className="mt-1.5 text-[22px] font-semibold tracking-tight">
                  {priceLabel.frac}
                </span>
              </span>
            )
          }
          suffix={plan.suffix}
          badge="40% off for Students"
          blurb="Advanced tools for a refined workflow."
          lead="Everything in Free, plus:"
          items={PRO_FEATURES}
          cta="Get Pro"
          onCta={onCta}
          footnote="30 day refund available for all plans"
        />
        <PriceCard
          name="Enterprise"
          price="Custom"
          blurb="Solutions for teams of any size."
          lead="Everything in Pro, plus:"
          items={ENTERPRISE_FEATURES}
          cta="Contact us"
          href="mailto:enterprise@superwhisper.com"
          footnote="We'll get back to you within 24 hours"
        />
      </div>
    </section>
  );
}

function PriceCard({
  name,
  price,
  suffix,
  blurb,
  items,
  cta,
  onCta,
  href,
  footnote,
  highlighted,
  badge,
  lead,
}: {
  name: string;
  price: React.ReactNode;
  suffix?: string;
  blurb: string;
  items: string[];
  cta: string;
  onCta?: () => void;
  href?: string;
  footnote: string;
  highlighted?: boolean;
  badge?: string;
  lead?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-[22px] border p-6",
        highlighted
          ? "border-transparent bg-linear-to-b from-[#1b1c55] via-[#2a2780] to-[#1a1440] shadow-[0_20px_60px_rgba(40,30,120,0.35)]"
          : "border-white/8 bg-[#111113]",
      )}
    >
      <div className="flex items-start justify-between">
        <p className="text-[15px] font-medium">{name}</p>
        {name === "Enterprise" ? (
          <img src="/sw/landing/api-capital-logo.svg" alt="" className="h-8 opacity-70" />
        ) : null}
      </div>
      <div className="mt-4 flex items-start">
        <p className="text-[52px] leading-none font-semibold tracking-tight">{price}</p>
        {suffix ? (
          <span className="mt-3 ml-1 text-sm text-muted-2">{suffix}</span>
        ) : null}
        {badge ? (
          <span className="mt-2 ml-2 rounded-md bg-[#6d28d9] px-2 py-0.5 text-[11px] font-medium whitespace-nowrap">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-[13px] text-muted-2">{blurb}</p>
      <div className="my-5 h-px bg-white/8" />
      {lead ? <p className="mb-3 text-[13px] font-medium">{lead}</p> : null}
      <ul className="flex-1 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="text-[13.5px] text-muted-2">
            {item}
          </li>
        ))}
      </ul>
      {href ? (
        <a
          href={href}
          className="mt-6 inline-flex h-11 items-center justify-between rounded-full bg-white/8 px-5 text-[14px] font-medium ring-1 ring-white/8 transition hover:bg-white/12"
        >
          {cta}
          <ArrowRight className="size-4" />
        </a>
      ) : (
        <button
          type="button"
          onClick={onCta}
          className={cn(
            "mt-6 inline-flex h-11 items-center justify-between rounded-full px-5 text-[14px] font-medium transition",
            highlighted
              ? "bg-black text-white hover:bg-black/80"
              : "bg-white/8 ring-1 ring-white/8 hover:bg-white/12",
          )}
        >
          {cta}
          <ArrowRight className="size-4" />
        </button>
      )}
      <p className="mt-3 text-center text-[12px] text-muted">{footnote}</p>
    </article>
  );
}

function Tutorials() {
  const [i, setI] = useState(2);
  const current = TUTORIALS[i];

  return (
    <section className="overflow-hidden py-20">
      <div className="px-6 text-center">
        <p className="text-[13px] font-medium text-link">Tutorials</p>
        <h2 className="mt-3 text-[36px] leading-[1.1] font-semibold tracking-tight md:text-[48px]">
          {current.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-white/40">{current.title.split(" ").slice(-1)}</span>
        </h2>
        <p className="mt-3 text-[15px] text-muted-2">
          Quick videos to get you started in minutes
        </p>
      </div>

      <div className="mt-12 flex justify-center gap-4 overflow-x-auto px-6 pb-4">
        {TUTORIALS.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setI(idx)}
            className={cn(
              "w-[280px] shrink-0 text-left transition md:w-[340px]",
              idx === i ? "opacity-100" : "opacity-70 hover:opacity-90",
            )}
          >
            <div className="overflow-hidden rounded-2xl border border-white/8 bg-card">
              <img src={t.image} alt="" className="aspect-video w-full object-cover" />
            </div>
            <div className="mt-2 flex items-center justify-between text-[13px] text-muted-2">
              <span>{t.caption}</span>
              <span>{t.duration}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-2">
          {TUTORIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setI(idx)}
              className={cn(
                "h-1.5 rounded-full transition",
                idx === i ? "w-8 bg-white" : "w-3 bg-white/30",
              )}
              aria-label={t.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-[13px] text-muted">Support</p>
      <h2 className="mt-2 text-[32px] font-semibold tracking-tight md:text-[40px]">
        Frequently asked questions
      </h2>
      <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.1fr_0.8fr]">
        <div className="divide-y divide-white/8 border-t border-white/8">
          {FAQS.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-[16px]"
              >
                {item.q}
                <ChevronDown
                  className={cn(
                    "size-4 text-muted transition",
                    open === i && "rotate-180",
                  )}
                />
              </button>
              {open === i ? (
                <p className="pb-5 text-[14px] leading-relaxed text-muted-2">{item.a}</p>
              ) : null}
            </div>
          ))}
        </div>
        <div className="lg:pt-8">
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-2">
            Can't find the answers you're looking for? Take a look in our
            Documentation. Click the button below to find the answers you need.
          </p>
          <Link
            to="/docs"
            className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-[#1c1c1c] px-4 text-[14px] ring-1 ring-white/8 transition hover:bg-[#242424]"
          >
            Documentation
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
