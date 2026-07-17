import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devilsales.dev"),

  title: {
    default: "DevilSales Web | Custom Websites Built to Win Business",
    template: "%s | DevilSales Web",
  },

  description:
    "Custom web design and development for ambitious service businesses. Strategy, conversion-led design, development and integrations from one accountable team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
