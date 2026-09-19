import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pulasthiabey.dev"),
  title: "Pulasthi Aberathne | Full-Stack Engineer",
  description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.",
  applicationName: "Pulasthi Aberathne",
  authors: [{ name: "Pulasthi Aberathne", url: "https://pulasthiabey.dev/" }],
  creator: "Pulasthi Aberathne",
  publisher: "Pulasthi Aberathne",
  alternates: { canonical: "/" },
  icons: { icon: "/pa-logo-light.png", shortcut: "/pa-logo-light.png", apple: "/pa-logo-light.png" },
  openGraph: { title: "Pulasthi Aberathne | Full-Stack Engineer", description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.", url: "/", siteName: "Pulasthi Aberathne", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pulasthi Aberathne — Full-Stack Engineer" }] },
  twitter: { card: "summary_large_image", title: "Pulasthi Aberathne | Full-Stack Engineer", description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.", images: [{ url: "/og-image.png", alt: "Pulasthi Aberathne — Full-Stack Engineer" }] },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pulasthiabey.dev/#person",
      name: "Pulasthi Aberathne",
      url: "https://pulasthiabey.dev/",
      jobTitle: "Full-Stack Engineer",
      sameAs: [
        "https://www.linkedin.com/in/pulasthi-aberathne-b87979175/",
        "https://github.com/PulasthiAbey",
        "https://pulasthiaberathne.medium.com/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pulasthiabey.dev/#website",
      name: "Pulasthi Aberathne",
      url: "https://pulasthiabey.dev/",
      publisher: { "@id": "https://pulasthiabey.dev/#person" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: `(() => { const stored = localStorage.getItem("theme"); const theme = stored === "light" || stored === "dark" ? stored : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"); document.documentElement.dataset.theme = theme; })();` }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />{children}</body></html>;
}
