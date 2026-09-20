import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { MobileNavigation } from "@/components/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, site } from "@/data/portfolio";

const contactDescription = "Contact Pulasthi Aberathne about freelance engineering, contract work, technical collaboration, backend development, full-stack applications, and production software.";

const capabilities = [
  ["Backend & APIs", "Production backend services, APIs, integrations, authentication and authorization, and existing systems that need new features or modernization."],
  ["Distributed Systems", "Service-oriented and microservices environments, gRPC / REST communication, service integration, and troubleshooting across system boundaries."],
  ["Full-Stack Applications", "Features that cross backend services and modern React / TypeScript frontend applications."],
  ["Cloud & Delivery", "Containerized applications, cloud environments, CI/CD, Helm-based delivery, and production engineering workflows."],
] as const;

const projectTypes = [
  "Freelance engineering projects",
  "Part-time contract engineering",
  "Backend and API development",
  "Full-stack feature development",
  "Existing-system improvements",
  "Third-party API integrations",
  "Technical troubleshooting",
  "Cloud-native application work",
];

export const metadata: Metadata = {
  title: "Contact | Pulasthi Aberathne",
  description: contactDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Pulasthi Aberathne",
    description: contactDescription,
    url: "/contact",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pulasthi Aberathne — Full-Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Pulasthi Aberathne",
    description: contactDescription,
    images: [{ url: "/og-image.png", alt: "Pulasthi Aberathne — Full-Stack Engineer" }],
  },
};

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function ContactPage() {
  return <><header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/#top" aria-label="Pulasthi Aberathne home"><Image src="/pa-logo-light.png" alt="PA" width={39} height={47} className="theme-logo logo-light" priority /><Image src="/pa-logo-dark.png" alt="" width={39} height={47} className="theme-logo logo-dark" priority /><span className="brand-name">Pulasthi</span></Link><nav aria-label="Primary navigation" className="nav-links desktop-nav">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="nav-actions"><MobileNavigation /><ThemeToggle /><Link href="/contact" className="nav-contact">Let&apos;s talk <Icon name="arrow-up-right" className="size-3.5" /></Link></div></div></header><main className="contact-page"><div className="container contact-shell"><Link className="case-back" href="/#top"><Icon name="arrow-up-right" className="size-3.5 rotate-180" /> Back to home</Link><header className="contact-hero"><p className="section-kicker">Contact</p><h1>Let&apos;s Build Something Useful</h1><p>I&apos;m open to discussing engineering projects, technical collaboration, and opportunities where I can help build, improve, or troubleshoot production software.</p></header><section className="contact-primary" aria-labelledby="contact-primary-title"><div><p className="section-kicker">Start a conversation</p><h2 id="contact-primary-title">Have an engineering problem in mind?</h2><p>For project enquiries, collaboration, or relevant opportunities, email is the best way to reach me.</p></div><a className="contact-email contact-email-primary" href={`mailto:${site.email}`}><Icon name="mail" className="size-5" /><span><small>Email me</small>{site.email}</span><Icon name="arrow-up-right" className="size-4" /></a></section><section className="contact-section" aria-labelledby="capabilities-title"><div className="contact-section-heading"><p className="section-kicker">/ What I can help with</p><h2 id="capabilities-title">Engineering conversations with a practical scope.</h2></div><div className="contact-capability-grid">{capabilities.map(([title, description]) => <article className="contact-capability" key={title}><p className="case-type">{title}</p><p>{description}</p></article>)}</div></section><section className="contact-section contact-fit-section" aria-labelledby="fit-title"><div className="contact-section-heading"><p className="section-kicker">/ Good fit</p><h2 id="fit-title">Ways we can work together.</h2></div><ul className="contact-fit-list">{projectTypes.map((projectType) => <li key={projectType}>{projectType}</li>)}</ul></section><section className="contact-section contact-profiles" aria-labelledby="profiles-title"><div className="contact-section-heading"><p className="section-kicker">/ Professional profiles</p><h2 id="profiles-title">Find more of my work.</h2></div><div className="contact-profile-grid"><ExternalLink href={site.linkedin}><span>LinkedIn</span><Icon name="arrow-up-right" className="size-4" /></ExternalLink><ExternalLink href={site.github}><span>GitHub</span><Icon name="arrow-up-right" className="size-4" /></ExternalLink><ExternalLink href={site.medium}><span>Medium</span><Icon name="arrow-up-right" className="size-4" /></ExternalLink><ExternalLink href={site.stackoverflow}><span>Stack Overflow</span><Icon name="arrow-up-right" className="size-4" /></ExternalLink></div></section></div></main><footer className="site-footer"><div className="container footer-inner"><div><p className="footer-name">{site.name}</p><p className="footer-role">{site.title}</p></div><div className="footer-right"><nav className="footer-links" aria-label="Footer links"><Link href="/contact">Contact</Link><ExternalLink href={site.github}>GitHub</ExternalLink><ExternalLink href={site.linkedin}>LinkedIn</ExternalLink><ExternalLink href={site.medium}>Medium</ExternalLink></nav><p className="copyright">© {new Date().getFullYear()} {site.name}</p></div></div></footer></>;
}
