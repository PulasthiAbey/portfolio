import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BlogPostCard } from "@/components/blog-post-card";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Icon } from "@/components/icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { blogPosts, navigation, site } from "@/data/portfolio";

const blogDescription = "Technical writing by Pulasthi Aberathne on distributed systems, backend engineering, APIs, cloud infrastructure, and building production software.";

export const metadata: Metadata = {
  title: "Engineering Blog | Pulasthi Aberathne",
  description: blogDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Engineering Blog | Pulasthi Aberathne",
    description: blogDescription,
    url: "/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pulasthi Aberathne — Full-Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog | Pulasthi Aberathne",
    description: blogDescription,
    images: [{ url: "/og-image.png", alt: "Pulasthi Aberathne — Full-Stack Engineer" }],
  },
};

export default function BlogPage() {
  return <><header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/#top" aria-label="Pulasthi Aberathne home"><Image src="/pa-logo-light.png" alt="PA" width={39} height={47} className="theme-logo logo-light" priority /><Image src="/pa-logo-dark.png" alt="" width={39} height={47} className="theme-logo logo-dark" priority /><span className="brand-name">Pulasthi</span></Link><nav aria-label="Primary navigation" className="nav-links desktop-nav">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="nav-actions"><MobileNavigation /><ThemeToggle /><Link href="/#contact" className="nav-contact">Let&apos;s talk <Icon name="arrow-up-right" className="size-3.5" /></Link></div></div></header><main className="writing-page"><div className="container writing-shell"><Link className="case-back" href="/#top"><Icon name="arrow-up-right" className="size-3.5 rotate-180" /> Back to home</Link><header className="writing-hero"><p className="section-kicker">Blog</p><h1>Engineering Writing</h1><p className="writing-hero-lede">Notes on distributed systems, backend engineering, APIs, cloud infrastructure, and lessons from building production software.</p><p className="writing-hero-note">Writing about the engineering decisions that happen between the architecture diagram and production.</p></header><section className="writing-library" aria-labelledby="blog-library-title"><div className="writing-library-heading"><div><p className="section-kicker">/ Selected articles</p><h2 id="blog-library-title">Ideas from the boundary.</h2></div><p className="heading-note">External and original articles can live alongside each other here over time.</p></div><div className="writing-entry-list">{blogPosts.map((post) => <BlogPostCard post={post} key={post.title} />)}</div></section><section className="writing-page-cta" aria-labelledby="blog-cta-title"><p className="section-kicker">Keep exploring</p><h2 id="blog-cta-title">Engineering work, explained clearly.</h2><Link className="button button-secondary" href="/#work">View selected work <Icon name="arrow-up-right" className="size-4" /></Link></section></div></main><footer className="site-footer"><div className="container footer-inner"><div><p className="footer-name">{site.name}</p><p className="footer-role">{site.title}</p></div><div className="footer-right"><nav className="footer-links" aria-label="Footer links"><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={site.medium} target="_blank" rel="noopener noreferrer">Medium</a></nav><p className="copyright">© {new Date().getFullYear()} {site.name}</p></div></div></footer></>;
}
