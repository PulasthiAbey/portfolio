import type { MetadataRoute } from "next";
import { internalBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://pulasthiabey.dev/" },
    { url: "https://pulasthiabey.dev/work/location-discovery-platform" },
    { url: "https://pulasthiabey.dev/work/zebra-nucleus" },
    { url: "https://pulasthiabey.dev/blog" },
    { url: "https://pulasthiabey.dev/contact" },
    ...internalBlogPosts.map((post) => ({ url: `https://pulasthiabey.dev/blog/${post.slug}` })),
  ];
}
