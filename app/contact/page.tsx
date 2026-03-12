import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";
import { WaitlistModule } from "@/components/ui/waitlist-module";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="section-shell space-y-10 pb-12 pt-14 md:space-y-14 md:pt-16">
      <section>
        <SectionHeading
          eyebrow="Contact / Waitlist"
          title="Start a conversation with HyroGlyphX"
          description="Connect with us for pilot opportunities, strategic partnerships, investor relations, or early product access."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <ContactForm />
        <div className="space-y-6">
          <WaitlistModule />
          <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-panel">
            <p className="text-xs uppercase tracking-[0.16em] text-accent">Partner + Investor Inquiries</p>
            <p className="mt-3 text-sm leading-relaxed text-textMuted">
              For strategic partnerships, distribution opportunities, enterprise pilots, or investor communications, use the contact
              form and select the relevant inquiry type.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="#" variant="secondary">
                Investor Deck Request
              </Button>
              <Button href="#" variant="ghost">
                Partnership Brief
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}