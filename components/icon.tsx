type IconName = "arrow-up-right" | "github" | "linkedin" | "mail" | "sun" | "moon";

type IconProps = { name: IconName; className?: string };

export function Icon({ name, className = "size-5" }: IconProps) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "github") return <svg {...common} fill="currentColor" stroke="none" viewBox="0 0 24 24"><path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 7.27c1.02 0 2.05.14 3.01.42 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v1.65c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z" /></svg>;
  if (name === "linkedin") return <svg {...common} fill="currentColor" stroke="none" viewBox="0 0 24 24"><path d="M5.02 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.75 9.75h4.54V21H2.75V9.75Zm7.37 0h4.35v1.54h.06c.61-1.16 2.09-2.38 4.3-2.38 4.6 0 5.45 3.03 5.45 6.97V21h-4.54v-4.54c0-1.08-.02-2.47-.08-3.13-.13-.91-.93-1.82-2.27-1.82-2.23 0-2.57 1.89-2.57 3.84V21h-4.7V9.75Z" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  if (name === "sun") return <svg {...common}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;
  if (name === "moon") return <svg {...common}><path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" /></svg>;
  return <svg {...common}><path d="M5 19 19 5" /><path d="M9 5h10v10" /></svg>;
}
