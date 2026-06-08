import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevSales Web | Premium Websites & Digital Infrastructure",
  description:
    "Premium web development, e-commerce platforms, mobile applications and digital infrastructure engineered for growth.",
  keywords: [
    "web development agency",
    "premium web design",
    "ecommerce development",
    "mobile app development",
    "UI UX design",
    "digital infrastructure",
    "DevSales Web",
  ],
  openGraph: {
    title: "DevSales Web | Premium Websites & Digital Infrastructure",
    description:
      "Premium websites, e-commerce platforms and mobile applications engineered for ambitious brands.",
    url: "https://devsales.dev",
    siteName: "DevSales Web",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}