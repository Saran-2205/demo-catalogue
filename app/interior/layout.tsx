import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier — Interior Design Studio",
  description: "Residential and hospitality interiors crafted for how you actually live.",
  openGraph: {
    title: "Atelier — Interior Design Studio",
    description: "Residential and hospitality interiors crafted for how you actually live.",
    images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85"],
  },
};

export default function InteriorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
