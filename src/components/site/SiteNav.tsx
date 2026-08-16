import { Link, useRouterState } from "@tanstack/react-router";
import { TriangleMark } from "@/components/brand";
import { useDownload } from "./DownloadContext";
import { cn } from "@/lib/cn";
import type { TimeOfDay } from "@/data/site";

export function SiteNav({
  timeOfDay,
  onTimeOfDay,
  showTheme = true,
}: {
  timeOfDay?: TimeOfDay;
  onTimeOfDay?: (t: TimeOfDay) => void;
  showTheme?: boolean;
}) {
  const { openDownload } = useDownload();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onDocs = pathname.startsWith("/docs");
  const onPricing = pathname === "/pricing";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-center px-3 pt-4 md:pt-5">
      <nav className="pointer-events-auto flex items-center gap-2">
        <div className="flex items-center rounded-full border border-white/8 bg-pill px-1.5 py-1 shadow-[var(--shadow-nav)] backdrop-blur-xl">
          <NavLink to="/" active={pathname === "/" && !onPricing}>
            Home
          </NavLink>
          <NavLink to="/docs" active={onDocs}>
            Docs
          </NavLink>
          <NavLink to="/pricing" active={onPricing}>
            Pricing
          </NavLink>
          <button
            type="button"
            onClick={openDownload}
            className="ml-0.5 inline-flex h-8 items-center gap-1.5 rounded-full bg-fg px-3.5 text-[13px] font-medium text-bg transition hover:bg-white/90"
          >
            <TriangleMark className="size-3.5" />
            Download
          </button>
        </div>
        {showTheme && onTimeOfDay && timeOfDay ? (
          <div className="hidden items-center rounded-full border border-white/8 bg-pill p-1 shadow-[var(--shadow-nav)] backdrop-blur-xl sm:flex">
            {(
              [
                ["day", "Day"],
                ["dusk", "Dusk"],
                ["night", "Night"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                aria-label={label}
                aria-pressed={timeOfDay === id}
                onClick={() => onTimeOfDay(id)}
                className={cn(
                  "grid size-7 place-items-center rounded-full text-muted transition",
                  timeOfDay === id && "bg-white/10 text-fg",
                )}
              >
                {id === "day" ? <SunIcon /> : id === "dusk" ? <DuskIcon /> : <MoonIcon />}
              </button>
            ))}
          </div>
        ) : null}
      </nav>
    </div>
  );
}

function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex h-8 items-center rounded-full px-3 text-[13px] font-medium transition",
        active ? "text-fg" : "text-muted-2 hover:text-fg",
      )}
    >
      {children}
    </Link>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="8" cy="8" r="2.4" />
      <path d="M8 1.8v1.4M8 12.8v1.4M1.8 8h1.4M12.8 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" strokeLinecap="round" />
    </svg>
  );
}
function DuskIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
      <path d="M9.2 3.1a5 5 0 1 0 3.7 8.8 5.6 5.6 0 0 1-3.7-8.8z" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path
        d="M13 10.2A5.3 5.3 0 0 1 5.8 3 5.4 5.4 0 1 0 13 10.2z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
