import type { ContactInfo, GalleryItem, Product, Service, TeamMember, Testimonial } from "@/types/site";

export const contactInfo: ContactInfo = {
  address: "Number10 Barbershop, Accra, Ghana",
  mapLabel: "Get directions",
  hours: ["Monday - Friday: 9am - 9pm", "Saturday: 9am - 8pm", "Sunday: By appointment"],
  phones: ["+233 55 000 0010", "+233 24 000 0010"],
  email: "bookings@number10barbershop.com",
  instagram: "@official_number10barbershop",
  whatsapp: "https://wa.me/233550000010"
};

export const services: Service[] = [
  {
    category: "Haircuts",
    intro: "Sharp cuts, clean tapers, and modern styles finished with precision.",
    items: [
      {
        name: "Signature Cut",
        description: "Consultation, clipper/scissor work, razor edge-up, and finishing style.",
        price: "GHS 120",
        duration: "45 min"
      },
      {
        name: "Skin Fade",
        description: "Detailed fade blend with crispy lineup and hot towel finish.",
        price: "GHS 150",
        duration: "55 min"
      },
      {
        name: "Kids Cut",
        description: "Clean and patient grooming for young clients.",
        price: "GHS 80",
        duration: "30 min"
      }
    ]
  },
  {
    category: "Beard Care",
    intro: "Beard shaping, razor work, and treatments for a polished finish.",
    items: [
      {
        name: "Beard Trim",
        description: "Shape, blend, razor line, and beard oil finish.",
        price: "GHS 70",
        duration: "25 min"
      },
      {
        name: "Luxury Beard Treatment",
        description: "Hot towel, beard wash, conditioning, trim, and razor detail.",
        price: "GHS 130",
        duration: "40 min"
      },
      {
        name: "Straight Razor Shave",
        description: "Traditional shave with hot towel prep and aftercare.",
        price: "GHS 100",
        duration: "35 min"
      }
    ]
  },
  {
    category: "Grooming Packages",
    intro: "Complete grooming sessions for events, shoots, and weekly maintenance.",
    items: [
      {
        name: "Number10 Classic",
        description: "Haircut, beard detail, hot towel, and style finish.",
        price: "GHS 220",
        duration: "80 min"
      },
      {
        name: "Executive Groom",
        description: "Full cut, beard treatment, face cleanse, and premium finish.",
        price: "GHS 300",
        duration: "100 min"
      },
      {
        name: "Wedding Grooming",
        description: "Premium grooming session for grooms and groomsmen.",
        price: "From GHS 450",
        duration: "Custom"
      }
    ]
  }
];

export const products: Product[] = [
  {
    id: "n10-platinum-blades",
    category: "Razor Blades",
    name: "Number10 Platinum Razor Blades",
    description: "Smooth double-edge blades for barbers and home grooming.",
    price: 85,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1100&q=80",
    badge: "Best Seller",
    stock: "In stock"
  },
  {
    id: "n10-pro-clipper",
    category: "Machines",
    name: "Number10 Pro Clipper Machine",
    description: "Cordless clipper machine for fades, bulk removal, and clean daily barber work.",
    price: 620,
    image: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=1100&q=80",
    badge: "Pro Tool",
    stock: "In stock"
  },
  {
    id: "n10-shave-cream",
    category: "Creams",
    name: "Cooling Shave Cream",
    description: "Rich shaving cream for smoother razor glide and less irritation after close shaves.",
    price: 95,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1100&q=80",
    badge: "Smooth Finish",
    stock: "In stock"
  },
  {
    id: "n10-fade-blade-pack",
    category: "Razor Blades",
    name: "Fade Finish Blade Pack",
    description: "A barber-grade blade bundle for clean edges and detailed finishes.",
    price: 120,
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1100&q=80",
    badge: "Pro Pack",
    stock: "Limited"
  },
  {
    id: "n10-detail-trimmer",
    category: "Machines",
    name: "Detail Trimmer Machine",
    description: "Compact trimmer for lineups, beard edges, neckline cleanups, and detailed finishing.",
    price: 480,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1100&q=80",
    badge: "Detailing",
    stock: "In stock"
  },
  {
    id: "n10-aftershave-cream",
    category: "Creams",
    name: "Aftershave Repair Cream",
    description: "Light grooming cream to calm the skin after shaving, edging, and hot towel service.",
    price: 110,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1100&q=80",
    badge: "Skin Care",
    stock: "In stock"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Crisp skin fade",
    category: "Fade",
    image: "/images/black-barber/fade-detail-black-client.jpg",
    tall: true
  },
  {
    title: "Gold trimmer finish",
    category: "Detail",
    image: "/images/black-barber/gold-trimmer-black-client.jpg"
  },
  {
    title: "Mirror-side grooming",
    category: "Cut",
    image: "/images/black-barber/barber-cutting-black-client.jpg",
    tall: true
  },
  {
    title: "Sharp neckline",
    category: "Precision",
    image: "/images/black-barber/clipper-close-black-client.jpg"
  },
  {
    title: "Fresh lineup",
    category: "Lineup",
    image: "/images/black-barber/lineup-black-client.jpg"
  },
  {
    title: "Relaxed trim",
    category: "Grooming",
    image: "/images/black-barber/smiling-black-client.jpg",
    tall: true
  }
];

export const homeShowcaseItems: GalleryItem[] = [
  {
    title: "Beard service",
    category: "Beard",
    image: "/images/black-barber/home-beard-service.jpg",
    tall: true
  },
  {
    title: "Gold trimmer finish",
    category: "Detail",
    image: "/images/black-barber/home-gold-trimmer.jpg"
  },
  {
    title: "Chair consultation",
    category: "Studio",
    image: "/images/black-barber/home-barber-consult.jpg",
    tall: true
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Number10 is the kind of barbershop where the haircut is sharp and the service feels personal every time.",
    name: "Kwame Mensah",
    label: "Weekly client"
  },
  {
    quote: "The booking flow makes it easy to choose a time, and the finish always looks clean for work and events.",
    name: "Nana Owusu",
    label: "Executive groom client"
  },
  {
    quote: "Their razor blades are reliable. I can order quickly and keep my grooming kit stocked without stress.",
    name: "David Addo",
    label: "Razor blade customer"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Kojo",
    role: "Fade Specialist",
    image: "/images/black-barber/fade-detail-black-client.jpg"
  },
  {
    name: "Prince",
    role: "Beard And Razor Work",
    image: "/images/black-barber/beard-trim-black-client.jpg"
  },
  {
    name: "Isaac",
    role: "Classic Cuts",
    image: "/images/black-barber/lineup-black-client.jpg"
  }
];
