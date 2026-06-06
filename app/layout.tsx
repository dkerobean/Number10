import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: {
    default: "Number10 Barbershop",
    template: "%s | Number10 Barbershop"
  },
  description: "A modern barbershop demo with appointment booking and ecommerce-ready razor blade sales.",
  openGraph: {
    title: "Number10 Barbershop",
    description: "Expert grooming, distinct style, and razor blade ecommerce.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
