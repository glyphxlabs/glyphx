"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

type SubmissionState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialState: SubmissionState = {
  type: "idle",
  message: ""
};

export function WaitlistModule() {
  const pathname = usePathname();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(initialState);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      email: String(formData.get("email") ?? ""),
      source: pathname,
      company: String(formData.get("company") ?? "")
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setStatus({
          type: "error",
          message: data.message || "Unable to submit waitlist request."
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: "You are on the list. We will reach out with updates."
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network issue. Please try again in a moment."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <GlassCard>
      <h3 className="text-xl font-semibold text-text">Join the GlyphX Waitlist</h3>
      <p className="mt-2 text-sm text-textMuted">
        Receive prototype updates, launch windows, and early access invitations for creators, teams, and developers.
      </p>
      <form className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="contact@hyroglyphx.com"
          className="h-11 rounded-full border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
          aria-label="Waitlist email"
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Request Early Access"}
        </Button>
      </form>
      <p
        className={`mt-3 text-xs ${
          status.type === "success" ? "text-emerald-300" : status.type === "error" ? "text-rose-300" : "text-textMuted"
        }`}
        aria-live="polite"
      >
        {status.message || "By joining, you will receive roadmap and product communications."}
      </p>
    </GlassCard>
  );
}