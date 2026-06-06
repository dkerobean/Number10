import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animated";
import { CtaButton } from "@/components/cta-button";
import { GalleryGrid } from "@/components/gallery-grid";
import { HeroVideo } from "@/components/hero-video";
import { SectionHeading } from "@/components/section-heading";
import { ServiceList } from "@/components/service-list";
import { TestimonialBand } from "@/components/testimonial-band";
import { contactInfo, galleryItems, homeShowcaseItems, products } from "@/data/site";
import { formatGhs } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <HeroVideo />
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <Stagger className="hero-copy">
            <StaggerItem>
              <p className="eyebrow">Welcome to Number10 Barbershop.</p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="display">Expert Grooming. Distinct Style.</h1>
            </StaggerItem>
            <StaggerItem>
              <div className="hero-actions">
                <CtaButton href="/contact">Book with us</CtaButton>
                <CtaButton href="/shop">Shop blades</CtaButton>
              </div>
            </StaggerItem>
          </Stagger>

          <Stagger className="hero-info">
            <StaggerItem className="info-card">
              <MapPin size={18} />
              <span>Address</span>
              <p>{contactInfo.address}</p>
            </StaggerItem>
            <StaggerItem className="info-card">
              <Clock size={18} />
              <span>Hours</span>
              <p>{contactInfo.hours.slice(0, 2).join(" / ")}</p>
            </StaggerItem>
            <StaggerItem className="info-card">
              <Phone size={18} />
              <span>Phone</span>
              <p>{contactInfo.phones.join(" / ")}</p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <TestimonialBand />

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">Molding style. Shaping character.</p>
            <h2 className="section-title">Built for sharp men and clean details.</h2>
            <p className="lead">
              Number10 blends traditional barbering with a modern appointment experience. Clients can discover services,
              book faster, and shop barber-grade razor blades from one polished website.
            </p>
            <CtaButton href="/about">About Number10</CtaButton>
          </Reveal>
          <Reveal className="media-frame">
            <Image
              src="/images/black-barber/gold-trimmer-black-client.jpg"
              alt="Black client receiving a detailed barber trim"
              width={900}
              height={1200}
            />
          </Reveal>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <SectionHeading eyebrow="Tailored services" title="From haircuts to razor detail, we’ve got you.">
            <p>Clear service categories make it easy for clients to pick the right grooming session before booking.</p>
          </SectionHeading>
          <ServiceList />
          <div className="center-cta">
            <CtaButton href="/services">Browse all services</CtaButton>
          </div>
        </div>
      </section>

      <section className="section icon-section">
        <div className="container">
          <Reveal className="icon-heading">
            <h2>Be an Icon</h2>
          </Reveal>
          <div className="icon-mosaic">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className={`icon-tile icon-tile-${index + 1}`}>
                <Image src={item.image} alt={item.title} width={900} height={900} sizes="(max-width: 860px) 100vw, 33vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Barber ecommerce" title="A shop built for blades, machines, creams, and reorders.">
            <p>The first ecommerce layer gives clients a clear product grid, cart-ready UI, and checkout path.</p>
          </SectionHeading>
          <div className="home-product-strip">
            {products.slice(0, 3).map((product, index) => (
              <Reveal key={product.id} delay={index * 0.08} className="home-product card">
                <Image src={product.image} alt={product.name} width={700} height={520} />
                <div>
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                  <strong>{formatGhs(product.price)}</strong>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center-cta">
            <CtaButton href="/shop">Open shop</CtaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Be an icon" title="Cuts, details, and atmosphere worth showing.">
            <p>Gallery sections help new customers trust the work before they book.</p>
          </SectionHeading>
          <GalleryGrid items={homeShowcaseItems} />
          <div className="center-cta">
            <CtaButton href="/gallery">View gallery</CtaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
