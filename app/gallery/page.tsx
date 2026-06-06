import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Gallery"
};

export default function GalleryPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Step inside the barbershop" title="A visual wall of cuts, craft, and atmosphere.">
            <p>Use this page for real haircut photos, client transformations, product shots, and shop interior moments.</p>
          </SectionHeading>
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
