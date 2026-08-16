import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Wordmark } from "@/components/brand";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({ meta: [{ title: "Sign in — Superwhisper" }] }),
});

function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-6 text-fg">
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-8 flex justify-center text-[15px]">
          <Wordmark />
        </Link>
        <h1 className="text-center text-2xl font-semibold tracking-tight">
          Manage your license
        </h1>
        <p className="mt-2 mb-6 text-center text-sm text-muted-2">
          Sign in to manage billing and devices.
        </p>
        {authEnabled ? (
          <div className="space-y-2.5">
            {GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="flex h-11 w-full items-center justify-center rounded-xl border border-line bg-card text-sm font-medium transition hover:bg-elev"
              >
                Continue with {p.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-muted">Sign-in is disabled.</p>
        )}
        <p className="mt-6 text-center text-xs text-dim">
          <Link to="/" className="hover:text-fg">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
