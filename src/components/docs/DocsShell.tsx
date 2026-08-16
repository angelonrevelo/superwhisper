import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import { TriangleMark, Wordmark } from "@/components/brand";
import { cn } from "@/lib/cn";
import {
  DOCS_NAV,
  allDocsPages,
  type DocsBlock,
  type DocsPage,
} from "@/data/docs";

export function DocsShell({
  page,
  initialAssistantOpen = false,
}: {
  page: DocsPage;
  initialAssistantOpen?: boolean;
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(initialAssistantOpen);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        setAssistantOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-[#ececed]">
      <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-white/6 bg-[#0b0b0c]/90 px-3 backdrop-blur-xl md:px-4">
        <button
          type="button"
          className="grid size-9 place-items-center rounded-lg hover:bg-white/6 lg:hidden"
          onClick={() => setNavOpen(true)}
          aria-label="Open navigation"
        >
          <span className="block h-0.5 w-4 bg-current" />
        </button>
        <Link to="/" className="hidden items-center gap-2 text-[14px] font-medium sm:flex">
          <TriangleMark className="size-4" />
          Superwhisper
        </Link>
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="ml-auto flex h-9 flex-1 items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-3 text-[13px] text-white/40 sm:max-w-xs"
        >
          <Search className="size-3.5" />
          Search...
          <kbd className="ml-auto rounded border border-white/10 px-1.5 text-[10px]">⌘K</kbd>
        </button>
        <button
          type="button"
          onClick={() => setAssistantOpen(true)}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/8 px-3 text-[13px] hover:bg-white/6"
        >
          <Sparkles className="size-3.5" />
          Ask Assistant
        </button>
        <a
          href="mailto:support@superwhisper.com"
          className="hidden h-9 items-center rounded-lg px-3 text-[13px] text-white/60 hover:text-white md:inline-flex"
        >
          Support
        </a>
        <Link
          to="/docs"
          className="hidden h-9 items-center rounded-lg bg-white/8 px-3 text-[13px] md:inline-flex"
        >
          Superwhisper ›
        </Link>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        <DocsSidebar current={page.slug} mobileOpen={navOpen} onClose={() => setNavOpen(false)} />
        <main className="min-w-0 flex-1 px-5 py-10 md:px-10 lg:px-14">
          {page.eyebrow ? (
            <p className="text-[13px] text-white/45">{page.eyebrow}</p>
          ) : null}
          <h1 className="mt-1 text-[32px] leading-tight font-semibold tracking-tight md:text-[36px]">
            {page.title}
          </h1>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-white/55">
            {page.description}
          </p>
          <article className="prose-sw mt-10 max-w-3xl">
            {page.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </article>
          <div className="mt-12 flex items-center justify-between border-t border-white/8 pt-6 text-[13px] text-white/45">
            <span>Was this page helpful?</span>
            <div className="flex gap-2">
              <button type="button" className="rounded-md border border-white/8 px-3 py-1 hover:bg-white/6">
                Yes
              </button>
              <button type="button" className="rounded-md border border-white/8 px-3 py-1 hover:bg-white/6">
                No
              </button>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            {page.prev ? (
              <Link
                to="/docs/$slug"
                params={{ slug: page.prev.slug }}
                className="inline-flex items-center gap-1 text-[14px] text-white/70 hover:text-white"
              >
                <ChevronLeft className="size-4" />
                {page.prev.title}
              </Link>
            ) : (
              <span />
            )}
            {page.next ? (
              <Link
                to="/docs/$slug"
                params={{ slug: page.next.slug }}
                className="inline-flex items-center gap-1 text-[14px] text-white/70 hover:text-white"
              >
                {page.next.title}
                <ChevronRight className="size-4" />
              </Link>
            ) : null}
          </div>
        </main>
        <aside className="sticky top-14 hidden h-[calc(100vh-56px)] w-56 shrink-0 overflow-y-auto py-10 pr-6 xl:block">
          <p className="mb-3 text-[12px] font-medium tracking-wide text-white/40 uppercase">
            On this page
          </p>
          <ul className="space-y-2">
            {page.toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-[13px] text-white/50 hover:text-white">
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {searchOpen ? <SearchModal onClose={() => setSearchOpen(false)} /> : null}
      {assistantOpen ? (
        <AssistantPanel pageTitle={page.title} onClose={() => setAssistantOpen(false)} />
      ) : null}
    </div>
  );
}

function DocsSidebar({
  current,
  mobileOpen,
  onClose,
}: {
  current: string;
  mobileOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {mobileOpen ? (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={onClose} />
      ) : null}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto border-r border-white/6 bg-[#0b0b0c] px-4 py-5 lg:sticky lg:top-14 lg:z-0 lg:h-[calc(100vh-56px)] lg:w-64 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <Wordmark className="text-sm" />
          <button type="button" onClick={onClose} aria-label="Close">
            <X className="size-4" />
          </button>
        </div>
        <p className="mb-3 text-[11px] font-medium tracking-wide text-white/35 uppercase">
          Documentation
        </p>
        {DOCS_NAV.map((group) => (
          <NavGroup key={group.label} group={group} current={current} onNavigate={onClose} />
        ))}
      </aside>
    </>
  );
}

function NavGroup({
  group,
  current,
  onNavigate,
}: {
  group: (typeof DOCS_NAV)[number];
  current: string;
  onNavigate: () => void;
}) {
  const hasCurrent = group.items.some((i) => i.slug === current);
  const [open, setOpen] = useState(hasCurrent || group.label === "Get Started");
  return (
    <div className="mb-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-1.5 text-left text-[13px] font-medium text-white/80"
      >
        {group.label}
        <ChevronDown className={cn("size-3.5 text-white/35", open && "rotate-180")} />
      </button>
      {open ? (
        <ul className="ml-1 border-l border-white/8 pl-3">
          {group.items.map((item) => (
            <li key={item.slug}>
              <Link
                to="/docs/$slug"
                params={{ slug: item.slug }}
                onClick={onNavigate}
                className={cn(
                  "block rounded-md px-2 py-1 text-[13px]",
                  current === item.slug
                    ? "bg-white/8 text-white"
                    : "text-white/50 hover:text-white",
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Block({ block }: { block: DocsBlock }) {
  switch (block.type) {
    case "p":
      return <p className="mb-4 text-[15.5px] leading-[1.7] text-white/70">{block.text}</p>;
    case "h2":
      return (
        <h2 id={block.id} className="mt-12 mb-4 scroll-mt-24 text-[24px] font-semibold tracking-tight">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 id={block.id} className="mt-8 mb-3 scroll-mt-24 text-[17px] font-semibold">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mb-5 list-disc space-y-1.5 pl-5 text-[15px] text-white/70">
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-5 list-decimal space-y-1.5 pl-5 text-[15px] text-white/70">
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ol>
      );
    case "note":
      return (
        <div className="mb-6 rounded-xl border border-amber-400/20 bg-amber-400/8 px-4 py-3 text-[14px] leading-relaxed text-amber-100/80">
          {block.text}
        </div>
      );
    case "callout":
      return (
        <div className="mb-6 rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-[14px] leading-relaxed text-white/65">
          {block.title ? <p className="mb-1 font-medium text-white/80">{block.title}</p> : null}
          {block.text}
        </div>
      );
    case "img":
      return (
        <figure className="my-8 overflow-hidden rounded-xl border border-white/8">
          <img src={block.src} alt={block.alt} className="w-full" />
        </figure>
      );
    case "code":
      return (
        <pre className="mb-5 overflow-x-auto rounded-xl bg-white/5 px-4 py-3 font-mono text-[13px] text-white/80">
          {block.text}
        </pre>
      );
    case "table":
      return (
        <div className="mb-6 overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full text-left text-[14px]">
            <thead className="bg-white/4 text-white/70">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} className="px-3 py-2 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-white/6">
                  {row.map((c, j) => (
                    <td key={j} className="px-3 py-2 text-white/70">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div className="mb-8 grid gap-3 sm:grid-cols-2">
          {block.items.map((c) =>
            c.href ? (
              <Link
                key={c.title}
                to="/docs/$slug"
                params={{ slug: c.href.replace("/docs/", "") }}
                className="rounded-2xl border border-white/8 bg-white/3 p-4 hover:bg-white/6"
              >
                <p className="font-medium">{c.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/50">{c.body}</p>
              </Link>
            ) : (
              <div key={c.title} className="rounded-2xl border border-white/8 bg-white/3 p-4">
                <p className="font-medium">{c.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/50">{c.body}</p>
              </div>
            ),
          )}
        </div>
      );
    case "steps":
      return (
        <ol className="mb-8 space-y-5">
          {block.items.map((s, i) => (
            <li key={s.title} className="flex gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/8 text-[13px] font-medium">
                {i + 1}
              </span>
              <div>
                <p className="font-medium">{s.title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-white/55">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "platforms":
      return (
        <div className="mb-8 grid gap-3 sm:grid-cols-2">
          {block.items.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/8 px-4 py-3">
              <p className="font-medium">{p.title}</p>
              <p className="text-[13px] text-white/50">{p.body}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const pages = useMemo(() => allDocsPages(), []);
  const results = pages.filter(
    (p) =>
      !q.trim() ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase()),
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] bg-black/70 px-4 pt-[12vh]" onClick={onClose}>
      <div
        className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#141416] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-white/8 px-3">
          <Search className="size-4 text-white/40" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search documentation..."
            className="h-12 flex-1 bg-transparent text-[14px] outline-none"
          />
          <kbd className="text-[10px] text-white/35">ESC</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.slice(0, 12).map((p) => (
            <li key={p.slug}>
              <button
                type="button"
                className="flex w-full flex-col rounded-lg px-3 py-2 text-left hover:bg-white/6"
                onClick={() => {
                  nav({ to: "/docs/$slug", params: { slug: p.slug } });
                  onClose();
                }}
              >
                <span className="text-[14px]">{p.title}</span>
                <span className="line-clamp-1 text-[12px] text-white/40">{p.description}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type ChatMsg = { role: "user" | "assistant"; text: string };

function answerFor(q: string, pageTitle: string): string {
  const s = q.toLowerCase();
  if (s.includes("hi") || s.includes("hello") || s === "hey") {
    return "Hi! How can I help you with Superwhisper today?";
  }
  if (s.includes("price") || s.includes("cost") || s.includes("pro")) {
    return "Superwhisper Pro is $8.49/month, $84.99/year, or $249.99 lifetime. One license works on Mac, Windows, iPhone, and iPad. New users get 15 minutes of Pro features free.";
  }
  if (s.includes("ios") || s.includes("iphone") || s.includes("ipad")) {
    return "To activate iOS: install Superwhisper from the App Store, then scan the QR code from Settings in the Mac app. Windows users can open superwhisper://license/YOUR-KEY on iPhone instead.";
  }
  if (s.includes("reprocess") || s.includes("history")) {
    return "Open History from the menu bar or Settings, right-click a previous dictation, and choose Process Again. Make sure the mode you want is active first.";
  }
  if (s.includes("offline") || s.includes("wifi") || s.includes("local")) {
    return "Superwhisper works offline with local models — no Wi-Fi required. Cloud models need a connection and generally produce stronger Super Mode results.";
  }
  if (s.includes("mode") || s.includes("super")) {
    return "Modes control how dictation is processed. Super Mode is context-aware: it reads the active app, selected text, and recent clipboard to format output. Use it for transformation, not long-form generation.";
  }
  if (s.includes("license") || s.includes("device")) {
    return "One Pro license activates on unlimited Macs and PCs plus your personal iPhone and iPad. You don't need a separate purchase per platform.";
  }
  return `I can help with Superwhisper. You're currently viewing “${pageTitle}”. Ask about pricing, modes, History, iOS activation, or offline use — or browse the sidebar for the full docs.`;
}

function AssistantPanel({
  pageTitle,
  onClose,
}: {
  pageTitle: string;
  onClose: () => void;
}) {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    { role: "assistant", text: "Hi! How can I help you with Superwhisper today?" },
  ]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "assistant", text: answerFor(q, pageTitle) }]);
    setInput("");
  }

  return (
    <aside className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-[400px] flex-col border-l border-white/8 bg-[#0e0e10] shadow-2xl">
      <div className="flex h-14 items-center gap-2 border-b border-white/6 px-4">
        <Sparkles className="size-4" />
        <span className="text-[14px] font-medium">Assistant</span>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded-md p-1 text-white/50 hover:bg-white/6 hover:text-white"
          aria-label="Close assistant"
        >
          <X className="size-4" />
        </button>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
        {msgs.map((m, i) => (
          <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[90%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed",
                m.role === "user" ? "bg-white/10" : "text-white/80",
              )}
            >
              {m.text}
              {m.role === "assistant" ? (
                <div className="mt-2 flex gap-2 text-white/30">
                  <ThumbsUp className="size-3.5" />
                  <ThumbsDown className="size-3.5" />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <form
        className="border-t border-white/6 p-3"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <div className="rounded-2xl border border-white/12 bg-black px-3 py-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            rows={2}
            className="w-full resize-none bg-transparent text-[14px] outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
          />
          <div className="flex items-center justify-between text-white/35">
            <span className="text-[12px]">⌘I</span>
            <button
              type="submit"
              className="grid size-7 place-items-center rounded-full border border-white/15 hover:text-white"
              aria-label="Send"
            >
              ↑
            </button>
          </div>
        </div>
        <p className="mt-2 text-center text-[11px] text-white/30">
          Responses are generated using AI and may contain mistakes.
        </p>
      </form>
    </aside>
  );
}
