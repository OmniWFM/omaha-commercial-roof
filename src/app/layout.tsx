import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://omahacommercialroof.com"),
  title: "Omaha Commercial Roofing | Flat & Metal Roof Experts",
  description:
    "Omaha's trusted commercial roofing contractor. TPO, EPDM, metal & flat roof installation, repair and maintenance for businesses across the metro. Free inspections.",
  openGraph: {
    title: "Omaha Commercial Roofing | Flat & Metal Roof Experts",
    description:
      "TPO, EPDM, metal & flat roof installation, repair and maintenance for Omaha businesses. Free inspections and fast emergency response.",
    url: "https://omahacommercialroof.com",
    siteName: "Omaha Commercial Roof",
    type: "website",
  },
  alternates: { canonical: "https://omahacommercialroof.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-ink antialiased">{children}</body>
    </html>
  );
}