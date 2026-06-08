import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.devilsales.dev",
      priority: 1,
    },
    {
      url: "https://www.devilsales.dev/contact",
      priority: 0.9,
    },
    {
      url: "https://www.devilsales.dev/work",
      priority: 0.9,
    },
    {
      url: "https://www.devilsales.dev/work/devilsales-auto",
      priority: 0.8,
    },
    {
      url: "https://www.devilsales.dev/privacy",
      priority: 0.5,
    },
    {
      url: "https://www.devilsales.dev/terms",
      priority: 0.5,
    },
  ];
}