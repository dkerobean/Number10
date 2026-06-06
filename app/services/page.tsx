import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceList } from "@/components/service-list";
import { CtaButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our distinct services" title="We exist to make you look and feel better.">
            <p>Transparent grooming packages for walk-ins, regular clients, events, and premium maintenance.</p>
          </SectionHeading>
          <ServiceList />
          <div className="center-cta">
            <CtaButton href="/contact">Book an appointment</CtaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
