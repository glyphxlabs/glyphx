"use client";

import { FormEvent, useState } from "react";
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

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(initialState);
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      inquiryType: String(formData.get("inquiryType") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? "")
    };

    try {
      const response = await fetch("/api/contact", {
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
          message: data.message || "Unable to send inquiry right now."
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thanks. Your inquiry was sent to HyroGlyphX." 
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
      <h3 className="text-xl font-semibold text-text">Contact HyroGlyphX</h3>
      <p className="mt-2 text-sm text-textMuted">
        Tell us whether you are exploring pilot deployments, partnerships, or investment opportunities.
      </p>
      <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            className="h-11 rounded-xl border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
            aria-label="Full name"
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            required
            className="h-11 rounded-xl border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
            aria-label="Work email"
          />
        </div>
        <select
          name="inquiryType"
          className="h-11 rounded-xl border border-line bg-[#0c1219] px-4 text-sm text-text outline-none transition focus:border-accent/60"
          aria-label="Inquiry type"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Inquiry type
          </option>
          <option>Customer / Waitlist</option>
          <option>Business / Partnership</option>
          <option>Investor Relations</option>
          <option>Developer Program</option>
        </select>
        <textarea
          rows={5}
          name="message"
          placeholder="How can we help?"
          required
          minLength={10}
          className="rounded-xl border border-line bg-[#0c1219] px-4 py-3 text-sm text-text outline-none transition focus:border-accent/60"
          aria-label="Message"
        />
        <div className="flex items-center justify-between gap-3">
          <p
            className={`text-sm ${
              status.type === "success" ? "text-emerald-300" : status.type === "error" ? "text-rose-300" : "text-textMuted"
            }`}
            aria-live="polite"
          >
            {status.message || "All inquiries route to contact@hyroglyphx.com"}
          </p>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}