import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://pulasthiabey.dev/" },
    { url: "https://pulasthiabey.dev/work/location-discovery-platform" },
  ];
}
