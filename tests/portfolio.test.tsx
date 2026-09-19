import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { getExperienceYears, site } from "@/data/portfolio";

describe("portfolio page", () => {
  it("renders the important portfolio sections", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /Pulasthi Aberathne/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Engineering with the whole system in view." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Capability areas" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Systems I've worked on" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Notes from the field." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Let's build something reliable." })).toBeInTheDocument();
  });

  it("exposes the expected navigation destinations", () => {
    render(<Home />);

    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    const links = within(navigation).getAllByRole("link");

    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "#about",
      "#expertise",
      "#work",
      "#writing",
      "#contact",
    ]);
  });

  it("provides an accessible compact navigation menu", () => {
    render(<Home />);

    const menuButton = screen.getByRole("button", { name: "Open navigation menu" });
    fireEvent.click(menuButton);

    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(within(mobileNavigation).getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual([
      "#about",
      "#expertise",
      "#work",
      "#writing",
      "#contact",
    ]);

    fireEvent.click(within(mobileNavigation).getByRole("link", { name: "Work" }));
    expect(screen.getByRole("button", { name: "Open navigation menu" })).toBeInTheDocument();
  });

  it("uses the configured external and contact destinations", () => {
    render(<Home />);

    expect(screen.getAllByRole("link", { name: "GitHub" }).every((link) => link.getAttribute("href") === site.github)).toBe(true);
    expect(screen.getAllByRole("link", { name: "LinkedIn" }).every((link) => link.getAttribute("href") === site.linkedin)).toBe(true);
    expect(screen.getByRole("link", { name: /hello@pulasthiabey\.dev/ })).toHaveAttribute("href", `mailto:${site.email}`);
    expect(screen.getByRole("link", { name: /Read on Medium/ })).toHaveAttribute("href", site.medium);
  });

  it("switches the theme and updates the accessible control label", () => {
    document.documentElement.dataset.theme = "dark";
    render(<Home />);

    const toggle = screen.getByRole("button", { name: "Switch to light mode" });
    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument();
  });
});

describe("experience calculation", () => {
  it("increments on the May anniversary", () => {
    expect(getExperienceYears(new Date(2026, 3, 30))).toBe(6);
    expect(getExperienceYears(new Date(2026, 4, 1))).toBe(7);
  });
});
