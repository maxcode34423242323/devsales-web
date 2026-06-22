import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devilsales.dev"),

  title: {
    default: "DevilSales Web | Premium Web Development Agency",
    template: "%s | DevilSales Web",
  },

  description:
    "Premium web development agency building high-converting websites, e-commerce platforms, mobile applications and scalable digital infrastructure for ambitious brands worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}