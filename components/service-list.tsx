import { services } from "@/data/site";
import { Reveal } from "@/components/animated";

export function ServiceList({ limit }: { limit?: number }) {
  const groups = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <div className="service-grid">
      {groups.map((group, groupIndex) => (
        <Reveal key={group.category} delay={groupIndex * 0.08} className="service-card card">
          <div className="service-card-top">
            <span>0{groupIndex + 1}</span>
            <h3>{group.category}</h3>
          </div>
          <p>{group.intro}</p>
          <div className="service-items">
            {group.items.map((item) => (
              <article key={item.name}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="service-price">
                  <strong>{item.price}</strong>
                  <span>{item.duration}</span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
