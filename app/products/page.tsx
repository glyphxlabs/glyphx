import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { WaitlistModule } from "@/components/ui/waitlist-module";
import { DeviceFrame } from "@/components/ui/device-frame";
import { productCatalog } from "@/data/site";

export default function ProductsPage() {
  return (
    <div className="section-shell space-y-14 pb-12 pt-14 md:space-y-18 md:pt-16">
      <section className="grid gap-8 lg:grid-cols-[1.08fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Products"
            title="The HyroGlyphX ecosystem"
            description="A hardware-first product family unified by GlyphOS, built for adaptive command workflows and premium desktop environments."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Join Waitlist</Button>
            <Button href="/developer" variant="secondary">
              View Developer Platform
            </Button>
          </div>
        </div>
        <div className="grid gap-4">
          <DeviceFrame variant="lite" priority />
          <div className="overflow-hidden rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(17,24,33,0.9),rgba(7,10,15,0.98))] shadow-panel">
            <div className="relative aspect-[16/9] bg-[#070a0f]">
              <Image
                src="/images/products/glyphx-mini.avif"
                alt="GlyphX Mini product render"
                fill
                className="object-contain p-4 md:p-5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/45 p-3 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">GlyphX Mini</p>
                <p className="mt-1 text-sm text-textMuted">
                  A compact adaptive keyboard concept for tighter desks, travel rigs, and streamlined command surfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {productCatalog.map((product, idx) => (
          <ProductCard key={product.name} {...product} delay={idx * 0.04} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-panel/80 p-6 shadow-panel">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">Target Audience</p>
          <h3 className="mt-3 text-xl font-semibold text-text">Who HyroGlyphX is built for</h3>
          <ul className="mt-4 space-y-3 text-sm text-textMuted">
            <li>Creators requiring rapid tool-switching and scene control.</li>
            <li>Developers navigating symbol-heavy environments and shortcuts.</li>
            <li>Operations teams managing repetitive, high-context command flows.</li>
            <li>Enterprise workstations requiring policy-based profile deployment.</li>
          </ul>
        </div>
        <WaitlistModule />
      </section>
    </div>
  );
}
