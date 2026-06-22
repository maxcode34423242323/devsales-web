import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devilsales.dev"),

  title: {
    default: "DevilSales Web | Premium Web Development Agency",
    template: "%s | DevilSales Web",
  },

  description:
    "Premium web development agency building high-converting websites, e-commerce platforms, mobile applications and scalable digital infrastructure for ambitious brands worldwide.",

  keywords: [
    "web development agency",
    "website development",
    "custom website development",
    "premium web design",
    "web design agency",
    "ecommerce development",
    "shopify development",
    "nextjs development",
    "mobile app development",
    "ios development",
    "android development",
    "seo optimization",
    "ui ux design",
    "digital agency",
    "luxury website design",
    "business website development",
    "DevilSales Web",
  ],

  authors: [{ name: "DevilSales Web" }],
  creator: "DevilSales Web",
  publisher: "DevilSales Web",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.devilsales.dev",
  },

  openGraph: {
    title: "DevilSales Web | Premium Web Development Agency",
    description:
      "Premium websites, e-commerce platforms and mobile applications engineered for ambitious brands.",
    url: "https://www.devilsales.dev",
    siteName: "DevilSales Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevilSales Web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DevilSales Web | Premium Web Development Agency",
    description:
      "Premium websites, e-commerce platforms and mobile applications engineered for ambitious brands.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a391ff0ab6f01632695974c"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}