import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devilsales.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work/devilsales-auto`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];
}