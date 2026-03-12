import { NextResponse } from "next/server";
import { hasMailConfig, sendWebsiteEmail } from "@/lib/mailer";

export const runtime = "nodejs";

type WaitlistPayload = {
  email?: string;
  source?: string;
  company?: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistPayload;

    const email = clean(body.email).toLowerCase();
    const source = clean(body.source) || "unknown";
    const company = clean(body.company);

    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!validEmail(email) || email.length > 255) {
      return NextResponse.json({ ok: false, message: "Please provide a valid email address." }, { status: 400 });
    }

    if (!hasMailConfig()) {
      console.error("Mail config missing: set SMTP_HOST, SMTP_USER, and SMTP_PASS");
      return NextResponse.json(
        { ok: false, message: "Email service is not configured yet. Please try again soon." },
        { status: 503 }
      );
    }

    const subject = "[HyroGlyphX Waitlist] New request";
    const text = [
      "New HyroGlyphX waitlist request",
      "",
      `Email: ${email}`,
      `Source: ${source}`,
      "Interest: Waitlist / launch updates / early access"
    ].join("\n");

    const html = `
      <h2>New HyroGlyphX Waitlist Request</h2>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <p><strong>Interest:</strong> Waitlist / launch updates / early access</p>
    `;

    await sendWebsiteEmail({
      subject,
      text,
      html,
      replyTo: email
    });

    return NextResponse.json({ ok: true, message: "Waitlist request sent successfully." });
  } catch (error) {
    console.error("Waitlist submission failed", error);
    return NextResponse.json({ ok: false, message: "Unable to submit waitlist request right now." }, { status: 500 });
  }
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}