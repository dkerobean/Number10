import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/animated";
import { TestimonialBand } from "@/components/testimonial-band";
import { teamMembers } from "@/data/site";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">An award-minded barbershop</p>
            <h1 className="display">Built by barbers who care about the finish.</h1>
          </Reveal>
          <Reveal>
            <p className="lead">
              Number10 Barbershop is designed around precision, hospitality, and consistency. Every cut is treated as a
              signature piece, every client gets clear attention, and every detail matters from the chair to the product
              shelf.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading eyebrow="Meet the team" title="Barbers with different strengths, one standard." />
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08} className="team-card">
                <Image src={member.image} alt={`${member.name}, ${member.role}`} width={800} height={1000} />
                <div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section quality-section dark-panel">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Number10 standard</p>
            <h2>If it’s not clean, it’s not finished.</h2>
            <p>
              The website demo reflects that same standard: polished visuals, clear booking, strong product presentation,
              and a customer journey that feels premium from the first click.
            </p>
          </Reveal>
        </div>
      </section>

      <TestimonialBand />
    </main>
  );
}
