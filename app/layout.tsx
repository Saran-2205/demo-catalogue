import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"], variable: "--font-dm-sans", display: "swap",
});
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"], variable: "--font-dm-serif", weight: "400", display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"], variable: "--font-cinzel", weight: ["400", "500", "600"], display: "swap",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"], variable: "--font-josefin", weight: ["300", "400", "500"], display: "swap",
});

export const metadata: Metadata = {
  title: "Demo Catalogue",
  description: "Curated demo templates for local businesses and creative studios.",
  openGraph: {
    title: "Demo Library",
    description: "Website demo templates for local businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable} ${cinzel.variable} ${josefinSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
