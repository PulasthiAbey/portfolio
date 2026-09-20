import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleLayout } from "@/components/blog-article-layout";
import { getInternalBlogPost, getRelatedBlogPosts, internalBlogPosts } from "@/lib/blog";

const siteUrl = "https://pulasthiabey.dev";

export const dynamicParams = false;

export function generateStaticParams() {
  return internalBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getInternalBlogPost(slug);

  if (!post) return {};

  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: `${post.title} | Pulasthi Aberathne`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      authors: ["Pulasthi Aberathne"],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInternalBlogPost(slug);

  if (!post) notFound();

  const url = `${siteUrl}/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    author: { "@id": `${siteUrl}/#person` },
    ...(post.image ? { image: new URL(post.image, siteUrl).toString() } : {}),
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><BlogArticleLayout post={post} relatedPosts={getRelatedBlogPosts(post)} /></>;
}
