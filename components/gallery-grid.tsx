import Image from "next/image";
import { galleryItems } from "@/data/site";
import { Reveal } from "@/components/animated";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/site";

export function GalleryGrid({ limit, items: providedItems }: { limit?: number; items?: GalleryItem[] }) {
  const sourceItems = providedItems ?? galleryItems;
  const items = typeof limit === "number" ? sourceItems.slice(0, limit) : sourceItems;

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
