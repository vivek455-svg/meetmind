"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 md:pt-[19px]">
      <nav
        className={`flex w-full max-w-[1367px] items-center justify-between rounded-2xl px-3 py-2 transition-all duration-500 ease-[var(--ease-out-expo)] md:px-0 ${
          scrolled
            ? "max-w-[1100px] bg-white/70 shadow-[0_8px_30px_rgb(0_0_0/0.06)] ring-1 ring-black/5 backdrop-blur-xl md:px-4"
            : ""
        }`}
        aria-label="Main"
      >
        <a href="#top" className="animate-pop transition-opacity hover:opacity-70" aria-label="Meetmind home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-[34px] md:flex">
          {links.map((l, i) => (
            <li key={l.href} className="animate-rise" style={{ "--d": `${80 + i * 60}ms` } as React.CSSProperties}>
              <a
                href={l.href}
                className="group relative text-[17px] font-medium text-black/65 transition-colors hover:text-black"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#cta" className="btn-primary animate-pop" style={{ "--d": "200ms" } as React.CSSProperties}>
            Contact Us
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-5 bg-black transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-black transition-transform duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`absolute inset-x-4 top-[72px] origin-top rounded-2xl bg-white/90 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-[17px] font-medium text-black/75 hover:bg-black/5"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
