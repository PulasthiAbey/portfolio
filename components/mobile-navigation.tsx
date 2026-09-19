"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";

function MenuIcon({ open }: { open: boolean }) {
  return <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d={open ? "M6 6 18 18M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>;
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return <div className="mobile-nav"><button type="button" className="mobile-nav-trigger" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((isOpen) => !isOpen)}><MenuIcon open={open} /></button>{open && <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation"><ul>{navigation.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)}>{item.label}</a></li>)}</ul></nav>}</div>;
}
