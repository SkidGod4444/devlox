
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://devlox.devwtf.in`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0,
    },
  ];
}