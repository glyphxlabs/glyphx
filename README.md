# HyroGlyphX Platform

A premium multi-page Next.js web application for HyroGlyphX, designed as a combined company site, product platform, investor shell, and developer ecosystem entry point.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Run
```bash
npm install
npm run dev
```

## Working Contact + Waitlist Forms
The site includes live form endpoints:
- `POST /api/contact`
- `POST /api/waitlist`

All submissions are sent to `contact@hyroglyphx.com` by default.

### 1. Configure environment variables
Copy `.env.example` to `.env.local` and set real SMTP credentials:

```bash
cp .env.example .env.local
```

Required:
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`

Optional:
- `SMTP_PORT` (default `587`)
- `SMTP_SECURE` (`true` for SSL, usually `false` on port `587`)
- `SMTP_FROM`
- `INQUIRY_RECIPIENT` (defaults to `contact@hyroglyphx.com`)

### 2. Test locally
Start the app and submit either form. You should receive the email at `contact@hyroglyphx.com`.

## Production
```bash
npm run build
npm run start
```