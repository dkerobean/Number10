import Image from "next/image";
import { galleryItems } from "@/data/site";
import { Reveal } from "@/components/animated";
import { cn } from "@/lib/utils";

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05} className={cn("gallery-card", item.tall && "gallery-card-tall")}>
          <Image src={item.image} alt={item.title} width={900} height={1200} sizes="(max-width: 860px) 100vw, 33vw" />
          <div>
            <span>{item.category}</span>
            <strong>{item.title}</strong>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
