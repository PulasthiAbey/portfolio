import type { ComponentType } from "react";

export type BlogArticleContent = ComponentType;

type BlogPostBase = {
  title: string;
  description: string;
  topics: string[];
  featured?: boolean;
};

export type ExternalBlogPost = BlogPostBase & {
  kind: "external";
  externalUrl: string;
  publication: string;
};

export type InternalBlogPost = BlogPostBase & {
  kind: "internal";
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  image?: string;
  content: BlogArticleContent;
  relatedSlugs?: string[];
  relatedWork?: { href: string; label: string }[];
};

export type BlogPost = ExternalBlogPost | InternalBlogPost;

export const blogPosts: BlogPost[] = [{
  kind: "external",
  title: "gRPC vs REST: What I Learned Using Both in Distributed Systems",
  description: "Why the right choice depends less on the technology and more on the communication boundary you’re designing.",
  topics: ["Distributed Systems", "gRPC", "REST", "APIs"],
  externalUrl: "https://pulasthiaberathne.medium.com/grpc-vs-rest-what-i-learned-using-both-in-distributed-systems-390945ad7174",
  publication: "Medium",
}];

export const internalBlogPosts = blogPosts.filter((post): post is InternalBlogPost => post.kind === "internal");

export function getBlogPostHref(post: BlogPost) {
  return post.kind === "external" ? post.externalUrl : `/blog/${post.slug}`;
}

// Kept as a compatibility alias for existing case-study consumers.
export const writing = { ...blogPosts[0], href: getBlogPostHref(blogPosts[0]) } as ExternalBlogPost & { href: string };

export function getInternalBlogPost(slug: string) {
  return internalBlogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(post: InternalBlogPost) {
  return (post.relatedSlugs ?? [])
    .map((slug) => getInternalBlogPost(slug))
    .filter((related): related is InternalBlogPost => Boolean(related));
}
