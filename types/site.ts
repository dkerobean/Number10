export type Service = {
  category: string;
  intro: string;
  items: {
    name: string;
    description: string;
    price: string;
    duration: string;
  }[];
};

export type Product = {
  id: string;
  category: "Razor Blades" | "Machines" | "Creams";
  name: string;
  description: string;
  price: number;
  image: string;
  badge: string;
  stock: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  tall?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  label: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type ContactInfo = {
  address: string;
  mapLabel: string;
  hours: string[];
  phones: string[];
  email: string;
  instagram: string;
  whatsapp: string;
};
