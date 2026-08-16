import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/brand";
import { FOOTER } from "@/data/site";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-line bg-bg px-6 pt-14 pb-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-muted">
            <Wordmark className="text-[15px] text-fg" />
            <span className="text-dim">© 2026</span>
          </div>
          <div className="flex items-center gap-4 text-muted">
            <a href="https://x.com/superwhisperapp" aria-label="X" className="hover:text-fg">
              <XIcon />
            </a>
            <a href="https://discord.gg/tF98XvJNvB" aria-label="Discord" className="hover:text-fg">
              <DiscordIcon />
            </a>
            <a
              href="https://www.youtube.com/channel/UCBQpNBU5mrPKge6UETN8i8g"
              aria-label="YouTube"
              className="hover:text-fg"
            >
              <YtIcon />
            </a>
            <a href="mailto:support@superwhisper.com" aria-label="Email" className="hover:text-fg">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <Col title="Product" items={FOOTER.product} />
          <Col title="Agentic coding" items={FOOTER.agentic} />
          <Col title="Free tools" items={FOOTER.tools} />
          <Col title="Resources" items={FOOTER.resources} />
          <Col title="Support" items={FOOTER.support} />
          <Col title="Policies" items={FOOTER.policies} />
        </div>

        <div className="mt-16 max-w-sm">
          <p className="text-sm font-medium">Let's stay in touch!</p>
          <p className="mt-1 text-sm text-muted">
            Carefully curated emails to keep you in the loop!
          </p>
          <form
            className="mt-3 flex h-10 overflow-hidden rounded-lg border border-line bg-card"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-dim"
            />
            <button
              type="submit"
              className="px-3 text-sm text-muted-2 hover:text-fg"
            >
              {done ? "Thanks" : "Join"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function Col({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; hiring?: boolean }[];
}) {
  return (
    <div>
      <p className="mb-3 text-[13px] font-medium text-fg">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            {item.href.startsWith("http") || item.href.startsWith("mailto") || item.href.includes("#") ? (
              <a href={item.href} className="text-[13px] text-muted hover:text-fg">
                {item.label}
              </a>
            ) : (
              <Link to={item.href} className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-fg">
                {item.label}
                {item.hiring ? (
                  <span className="size-1.5 rounded-full bg-accent-yellow" aria-label="We're hiring" />
                ) : null}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor">
      <path d="M12.6 1.5h2.2L9.8 7.1l5.9 7.4H11.3L7.6 9.8l-4.1 4.7H1.2l6.3-7.2L1 1.5h4.5l3.3 4.6 3.8-4.6zm-.8 11.8h1.2L4.3 2.7H3L11.8 13.3z" />
    </svg>
  );
}
function DiscordIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor">
      <path d="M13.5 3.1A12.4 12.4 0 0 0 10.4 2c-.2.3-.3.7-.4 1a11.5 11.5 0 0 0-4 0c-.1-.3-.3-.7-.5-1A12.3 12.3 0 0 0 2.4 3.1C.6 5.8.1 8.4.3 11c1.3 1 2.6 1.6 3.9 2l.8-1.3c-.7-.3-1.3-.6-1.9-1 .2-.1.3-.2.5-.3 3.8 1.8 7.9 1.8 11.6 0 .2.1.3.2.5.3-.6.4-1.2.8-1.9 1l.8 1.3c1.3-.4 2.6-1 3.9-2 .3-3-.4-5.5-2-7.9zM5.7 9.5c-.7 0-1.3-.7-1.3-1.5S5 6.5 5.7 6.5s1.3.7 1.3 1.5-.6 1.5-1.3 1.5zm4.6 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5z" />
    </svg>
  );
}
function YtIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor">
      <path d="M15.3 4.6a2 2 0 0 0-1.4-1.4C12.7 2.9 8 2.9 8 2.9s-4.7 0-5.9.3A2 2 0 0 0 .7 4.6 21 21 0 0 0 .4 8c0 1.2.1 2.3.3 3.4a2 2 0 0 0 1.4 1.4c1.2.3 5.9.3 5.9.3s4.7 0 5.9-.3a2 2 0 0 0 1.4-1.4c.2-1.1.3-2.2.3-3.4 0-1.1-.1-2.2-.3-3.4zM6.5 10.5v-5l4.2 2.5-4.2 2.5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.6" y="3.4" width="12.8" height="9.2" rx="1.6" />
      <path d="M2.2 4.2L8 8.4l5.8-4.2" />
    </svg>
  );
}
