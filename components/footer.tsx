import Link from "next/link";
import { Facebook, Instagram, Music2, Twitter } from "lucide-react";
import { contactInfo } from "@/data/site";
import { CtaButton } from "@/components/cta-button";

const footerLinks = [
  ["Homepage", "/"],
  ["Services", "/services"],
  ["About Us", "/about"],
  ["Gallery", "/gallery"],
  ["Shop Blades", "/shop"],
  ["Contact Us", "/contact"]
] as const;

export function Footer() {
  return (
    <footer className="footer dark-panel">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Number10 Barbershop</p>
          <h2>Grooming Experts.</h2>
          <p>Sharp cuts, clean details, and barber-grade razor blades for clients who care about the finish.</p>
        </div>

        <nav aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <span>Address</span>
          <p>{contactInfo.address}</p>
          <span>Hours</span>
          <p>{contactInfo.hours.join(" / ")}</p>
          <span>Email</span>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>

        <div className="footer-actions">
          <div className="socials" aria-label="Social links">
            <a href="https://facebook.com/" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com/" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com/official_number10barbershop" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://tiktok.com/" aria-label="TikTok">
              <Music2 size={18} />
            </a>
          </div>
          <CtaButton href="/contact" dark>
            Book Now
          </CtaButton>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Number10 Barbershop.</span>
        <span>Appointments, grooming products, and sharp finishes.</span>
      </div>
    </footer>
  );
}
