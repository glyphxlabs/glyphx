import nodemailer from "nodemailer";

type WebsiteEmailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

const DEFAULT_RECIPIENT = "contact@hyroglyphx.com";

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function getPort(): number {
  const raw = process.env.SMTP_PORT?.trim();
  if (!raw) {
    return 587;
  }
  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error("SMTP_PORT must be a positive integer");
  }
  return parsed;
}

function getSecure(port: number): boolean {
  const raw = process.env.SMTP_SECURE?.trim();
  if (!raw) {
    return port === 465;
  }
  return raw.toLowerCase() === "true";
}

let cachedTransporter: nodemailer.Transporter | null = null;

function transporter(): nodemailer.Transporter {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const host = required("SMTP_HOST");
  const port = getPort();
  const secure = getSecure(port);
  const user = required("SMTP_USER");
  const pass = required("SMTP_PASS");

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });

  return cachedTransporter;
}

function fromAddress(): string {
  const configured = process.env.SMTP_FROM?.trim();
  if (configured) {
    return configured;
  }
  const user = process.env.SMTP_USER?.trim();
  if (user) {
    return `HyroGlyphX <${user}>`;
  }
  return "HyroGlyphX <no-reply@hyroglyphx.com>";
}

function recipientAddress(): string {
  return process.env.INQUIRY_RECIPIENT?.trim() || DEFAULT_RECIPIENT;
}

export function hasMailConfig(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() && process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim()
  );
}

export async function sendWebsiteEmail(payload: WebsiteEmailPayload): Promise<void> {
  const mailer = transporter();
  await mailer.sendMail({
    from: fromAddress(),
    to: recipientAddress(),
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
    replyTo: payload.replyTo
  });
}