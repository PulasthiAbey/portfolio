import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { MobileNavigation } from "@/components/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, site } from "@/data/portfolio";
import type { InternalBlogPost } from "@/lib/blog";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export function BlogArticleLayout({ post, relatedPosts }: { post: InternalBlogPost; relatedPosts: InternalBlogPost[] }) {
  const Content = post.content;

  return <><header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/#top" aria-label="Pulasthi Aberathne home"><Image src="/pa-logo-light.png" alt="PA" width={39} height={47} className="theme-logo logo-light" priority /><Image src="/pa-logo-dark.png" alt="" width={39} height={47} className="theme-logo logo-dark" priority /><span className="brand-name">Pulasthi</span></Link><nav aria-label="Primary navigation" className="nav-links desktop-nav">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="nav-actions"><MobileNavigation /><ThemeToggle /><Link href="/contact" className="nav-contact">Let&apos;s talk <Icon name="arrow-up-right" className="size-3.5" /></Link></div></div></header><main className="blog-article-page"><div className="container blog-article-shell"><Link className="case-back" href="/blog"><Icon name="arrow-up-right" className="size-3.5 rotate-180" /> Back to Blog</Link><header className="blog-article-header"><div className="blog-article-topline"><span>{post.topics.join(" · ")}</span><span>Engineering article</span></div><h1>{post.title}</h1><p className="blog-article-deck">{post.description}</p><div className="blog-article-meta"><span>Pulasthi Aberathne</span><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{post.updatedAt && <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>}{post.readingTime && <span>{post.readingTime}</span>}</div></header><div className="blog-article-content"><article className="blog-article"><Content /></article>{post.relatedWork && post.relatedWork.length > 0 && <section className="blog-article-related" aria-labelledby="related-work-title"><h2 id="related-work-title">Related engineering work</h2><div className="blog-article-related-list">{post.relatedWork.map((work) => <Link href={work.href} key={work.href}>{work.label}<Icon name="arrow-up-right" className="size-4" /></Link>)}</div></section>}{relatedPosts.length > 0 && <section className="blog-article-related" aria-labelledby="related-articles-title"><h2 id="related-articles-title">Related articles</h2><div className="blog-article-related-list">{relatedPosts.map((related) => <Link href={`/blog/${related.slug}`} key={related.slug}>{related.title}<Icon name="arrow-up-right" className="size-4" /></Link>)}</div></section>}<div className="blog-article-back"><Link className="button button-secondary" href="/blog">Back to Blog <Icon name="arrow-up-right" className="size-4 rotate-180" /></Link></div></div></div></main><footer className="site-footer"><div className="container footer-inner"><div><p className="footer-name">{site.name}</p><p className="footer-role">{site.title}</p></div><div className="footer-right"><nav className="footer-links" aria-label="Footer links"><Link href="/contact">Contact</Link><ExternalLink href={site.github}>GitHub</ExternalLink><ExternalLink href={site.linkedin}>LinkedIn</ExternalLink><ExternalLink href={site.medium}>Medium</ExternalLink></nav><p className="copyright">© {new Date().getFullYear()} {site.name}</p></div></div></footer></>;
}
