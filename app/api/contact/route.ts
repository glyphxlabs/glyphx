import { NextResponse } from "next/server";
import { hasMailConfig, sendWebsiteEmail } from "@/lib/mailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
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
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email).toLowerCase();
    const inquiryType = clean(body.inquiryType);
    const message = clean(body.message);
    const company = clean(body.company);

    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || name.length > 120) {
      return NextResponse.json({ ok: false, message: "Please enter your name." }, { status: 400 });
    }

    if (!validEmail(email) || email.length > 255) {
      return NextResponse.json({ ok: false, message: "Please provide a valid email address." }, { status: 400 });
    }

    if (!inquiryType || inquiryType.length > 120) {
      return NextResponse.json({ ok: false, message: "Please select an inquiry type." }, { status: 400 });
    }

    if (!message || message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { ok: false, message: "Please enter a message between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    if (!hasMailConfig()) {
      console.error("Mail config missing: set SMTP_HOST, SMTP_USER, and SMTP_PASS");
      return NextResponse.json(
        { ok: false, message: "Email service is not configured yet. Please try again soon." },
        { status: 503 }
      );
    }

    const subject = `[HyroGlyphX Contact] ${inquiryType}`;
    const text = [
      "New HyroGlyphX contact submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry Type: ${inquiryType}`,
      "",
      "Message:",
      message
    ].join("\n");

    const html = `
      <h2>New HyroGlyphX Contact Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    await sendWebsiteEmail({
      subject,
      text,
      html,
      replyTo: email
    });

    return NextResponse.json({ ok: true, message: "Inquiry sent successfully." });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ ok: false, message: "Unable to send inquiry right now." }, { status: 500 });
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