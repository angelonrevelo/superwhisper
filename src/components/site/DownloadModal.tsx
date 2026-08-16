import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { TriangleMark } from "@/components/brand";

export function DownloadModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dl-title"
        className="relative w-full max-w-md rounded-2xl border border-line bg-card p-6 shadow-[var(--shadow-card)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full p-1.5 text-muted hover:bg-elev hover:text-fg"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
        <div className="mb-5 flex items-center gap-2 text-sm text-muted-2">
          <TriangleMark className="size-4" />
          Download Superwhisper
        </div>
        <h2 id="dl-title" className="text-2xl font-semibold tracking-tight">
          Just speak. Write faster.
        </h2>
        <p className="mt-2 text-sm text-muted-2">
          Turn your voice into polished text. Works in Slack, Gmail and any other
          site or app.
        </p>
        <div className="mt-6 flex flex-col gap-2.5">
          <a
            href="https://api.superwhisper.com/download"
            className="flex h-11 items-center justify-center gap-2 rounded-[10px] bg-fg px-4 text-sm font-medium text-bg transition hover:bg-white/90"
          >
            <AppleIcon />
            Download for Mac
          </a>
          <a
            href="https://api.superwhisper.com/download"
            className="flex h-11 items-center justify-center gap-2 rounded-[10px] bg-elev px-4 text-sm font-medium text-fg ring-1 ring-line-strong transition hover:bg-white/10"
          >
            <WindowsIcon />
            Download for Windows
          </a>
          <a
            href="https://api.superwhisper.com/download/ios"
            className="flex h-11 items-center justify-center gap-2 rounded-[10px] px-4 text-sm text-muted-2 transition hover:text-fg"
          >
            Also available for iPhone
            <span aria-hidden>›</span>
          </a>
        </div>
        <p className="mt-5 text-center text-xs text-dim">
          Already have a license?{" "}
          <Link to="/login" className="text-muted-2 underline-offset-2 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export function AppleIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden>
      <path d="M12.6 8.4c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.2-2.3 1.2-2.4-.1 0-2.3-.9-2.3-3.5zM10.7 2.8c.6-.7 1-1.7.9-2.8-1 .1-2.1.6-2.7 1.4-.6.7-1.1 1.7-.9 2.7 1.1.1 2.1-.5 2.7-1.3z" />
    </svg>
  );
}

export function WindowsIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden>
      <path d="M1 3.4l6.1-.8v5.7H1V3.4zm6.1 5.6v5.8L1 13.9V9h6.1zM8 2.5L15 1.5v6.8H8V2.5zm7 7.2V14.6L8 13.5V9.7h7z" />
    </svg>
  );
}
