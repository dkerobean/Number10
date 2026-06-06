import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/animated";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container contact-layout">
          <Reveal>
            <p className="eyebrow">Book an appointment</p>
            <h1 className="display">Make your appointment.</h1>
            <p className="lead">
              Customers can submit a booking request directly from the website. In production this can connect to email,
              WhatsApp, Google Calendar, or a dedicated booking system.
            </p>
          </Reveal>
          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container contact-card-grid">
          <ContactCard icon={<MapPin size={22} />} label="Address" value={contactInfo.address} />
          <ContactCard icon={<Clock size={22} />} label="Hours" value={contactInfo.hours.join(" / ")} />
          <ContactCard icon={<Phone size={22} />} label="Phone" value={contactInfo.phones.join(" / ")} />
          <ContactCard icon={<Mail size={22} />} label="Email" value={contactInfo.email} />
          <ContactCard icon={<Instagram size={22} />} label="Instagram" value={contactInfo.instagram} />
        </div>
      </section>
    </main>
  );
}

function ContactCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <Reveal className="contact-card card">
      {icon}
      <span>{label}</span>
      <p>{value}</p>
    </Reveal>
  );
}
