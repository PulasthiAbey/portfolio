import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pulasthiabey.dev"),
  title: "Pulasthi Aberathne | Full-Stack Engineer",
  description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.",
  alternates: { canonical: "https://pulasthiabey.dev" },
  icons: { icon: "/pa-logo-light.png", shortcut: "/pa-logo-light.png", apple: "/pa-logo-light.png" },
  openGraph: { title: "Pulasthi Aberathne | Full-Stack Engineer", description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.", url: "https://pulasthiabey.dev", siteName: "Pulasthi Aberathne", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pulasthi Aberathne — Full-Stack Engineer" }] },
  twitter: { card: "summary_large_image", title: "Pulasthi Aberathne | Full-Stack Engineer", description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.", images: [{ url: "/og-image.png", alt: "Pulasthi Aberathne — Full-Stack Engineer" }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: `(() => { const stored = localStorage.getItem("theme"); const theme = stored === "light" || stored === "dark" ? stored : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"); document.documentElement.dataset.theme = theme; })();` }} />{children}</body></html>;
}
