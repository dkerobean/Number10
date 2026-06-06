import { testimonials } from "@/data/site";
import { Reveal } from "@/components/animated";

export function TestimonialBand() {
  return (
    <section className="section-tight testimonial-band">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Clients become regulars</p>
          <h2>We Start with Cuts. End Up with Confidence.</h2>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08} className="testimonial-card card">
              <p>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
