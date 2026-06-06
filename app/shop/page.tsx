import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ShopClient } from "@/components/shop-client";

export const metadata: Metadata = {
  title: "Shop"
};

export default function ShopPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Barber ecommerce shop" title="Razor blades, machines, and creams for clean finishes.">
            <p>
              This demo shop shows product listings for blades, barber machines, and grooming creams, with cart behavior,
              checkout direction, and order follow-up messaging. Payment and inventory can be wired in the next phase.
            </p>
          </SectionHeading>
          <ShopClient />
        </div>
      </section>
    </main>
  );
}
