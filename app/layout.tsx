import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pulasthiabey.dev"),
  title: "Pulasthi Aberathne | Full-Stack Engineer",
  description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.",
  alternates: { canonical: "https://pulasthiabey.dev" },
  icons: { icon: "/pa-logo-light.png", shortcut: "/pa-logo-light.png", apple: "/pa-logo-light.png" },
  openGraph: { title: "Pulasthi Aberathne | Full-Stack Engineer", description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure.", url: "https://pulasthiabey.dev", siteName: "Pulasthi Aberathne", type: "website" },
  twitter: { card: "summary", title: "Pulasthi Aberathne | Full-Stack Engineer", description: "Full-Stack Engineer building reliable production systems across backend, frontend, distributed systems and cloud infrastructure." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: `(() => { const stored = localStorage.getItem("theme"); const theme = stored === "light" || stored === "dark" ? stored : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"); document.documentElement.dataset.theme = theme; })();` }} />{children}</body></html>;
}
