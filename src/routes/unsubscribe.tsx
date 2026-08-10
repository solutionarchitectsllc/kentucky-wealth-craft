import { useEffect, useState } from "react";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MailX, XCircle } from "lucide-react";

type State = "loading" | "valid" | "invalid" | "already" | "success" | "error";

export const Route = createFileRoute("/unsubscribe")({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search['token'] === "string" ? (search['token'] as string) : "",
  }),
  head: () => ({
    meta: [
      { title: "Email Preferences | Solution Architects LLC" },
      { name: "description", content: "Manage your email preferences for Solution Architects LLC notifications." },
      { property: "og:title", content: "Email Preferences — Solution Architects LLC" },
      { property: "og:description", content: "Unsubscribe from Solution Architects LLC emails." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  const { token } = useSearch({ from: "/unsubscribe" });
  const [state, setState] = useState<State>("loading");
  const [email, setEmail] = useState<string>("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`);
        const json = await res.json().catch(() => ({}));
        if (!res.ok || json?.valid === false) {
          setState(json?.reason === "already_used" ? "already" : "invalid");
          return;
        }
        if (json?.email) setEmail(json.email);
        setState(json?.used_at ? "already" : "valid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  async function confirm() {
    setBusy(true);
    try {
      const res = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <SiteLayout>
      <section className="container-x py-24">
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-9 text-center shadow-[var(--shadow-card)]">
          {state === "loading" && <p className="text-muted-foreground">Checking your link…</p>}

          {state === "valid" && (
            <>
              <MailX className="mx-auto h-12 w-12 text-brand-emerald" />
              <h1 className="mt-4 font-display text-2xl font-bold text-brand-navy">Unsubscribe</h1>
              <p className="mt-2 text-muted-foreground">
                {email ? <>Stop sending emails to <strong>{email}</strong>?</> : "Confirm you want to stop receiving our emails."}
              </p>
              <Button
                onClick={confirm}
                disabled={busy}
                size="lg"
                className="mt-6 w-full bg-brand-emerald hover:bg-brand-emerald-bright text-white"
              >
                {busy ? "Processing…" : "Confirm Unsubscribe"}
              </Button>
            </>
          )}

          {state === "success" && (
            <>
              <CheckCircle2 className="mx-auto h-12 w-12 text-brand-emerald" />
              <h1 className="mt-4 font-display text-2xl font-bold text-brand-navy">You're unsubscribed</h1>
              <p className="mt-2 text-muted-foreground">You will no longer receive emails from Solution Architects LLC.</p>
            </>
          )}

          {state === "already" && (
            <>
              <CheckCircle2 className="mx-auto h-12 w-12 text-brand-emerald" />
              <h1 className="mt-4 font-display text-2xl font-bold text-brand-navy">Already unsubscribed</h1>
              <p className="mt-2 text-muted-foreground">This address has already been removed from our list.</p>
            </>
          )}

          {(state === "invalid" || state === "error") && (
            <>
              <XCircle className="mx-auto h-12 w-12 text-destructive" />
              <h1 className="mt-4 font-display text-2xl font-bold text-brand-navy">Link not valid</h1>
              <p className="mt-2 text-muted-foreground">
                This unsubscribe link is invalid or expired. Email Ian.eady@solutionarchitectsllc.com and we'll take care of it.
              </p>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
