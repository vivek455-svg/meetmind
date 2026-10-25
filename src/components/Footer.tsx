import type { CSSProperties } from "react";
import { ArrowUp, GithubLogo, LinkedinLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { Pic } from "./Pic";

const cols = [
  { h: "Product", links: [["Problem", "#problem"], ["Benefits", "#benefits"], ["How It Works", "#how-it-works"], ["Integrations", "#cta"], ["Pricing", "#cta"]] },
  { h: "Company", links: [["About", "#top"], ["Testimonials", "#testimonials"], ["Careers", "#top"], ["Blog", "#top"], ["Contact Us", "mailto:hello@meetmind.app"]] },
  { h: "Resources", links: [["Help Center", "#faq"], ["Security", "#faq"], ["Changelog", "#top"], ["API Docs", "#top"], ["FAQ", "#faq"]] },
];

const socials = [
  { label: "X", Icon: XLogo },
  { label: "LinkedIn", Icon: LinkedinLogo },
  { label: "YouTube", Icon: YoutubeLogo },
  { label: "GitHub", Icon: GithubLogo },
];

// Big wordmark, split per letter so it can rise in one character at a time
const word = [
  ..."Meet".split("").map((ch) => ({ ch, serif: false })),
  ..."mind".split("").map((ch) => ({ ch, serif: true })),
];

const iconBtn =
  "grid size-9 place-items-center rounded-full border border-black/10 text-black/70 transition-[transform,background-color,color,border-color] duration-300 ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:border-[#007cea] hover:bg-[#007cea] hover:text-white";

export function Footer() {
  return (
    <footer className="anim-scope relative isolate flex min-h-[max(100svh,760px)] flex-col overflow-hidden bg-gradient-to-b from-[#1e73c0] to-[#2f9cfc] md:rounded-t-[32px]">
      {/* Full-bleed landscape: the sky at the top of the photo carries the brand blue */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Pic name="footerLandscape" sizes="100vw" tint="transparent" imgClassName="footer-photo object-[50%_45%]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(12_70_160/0.6)_0%,rgb(12_70_160/0.2)_30%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(6_32_72/0.5)_0%,rgb(6_32_72/0.15)_28%,transparent_45%)]" />
      </div>

      {/* Links */}
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-16 md:pt-20 xl:px-0" data-reveal>
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex max-w-[300px] flex-col gap-4">
            <Logo light />
            <p className="text-[15px] leading-[22px] text-white/80">
              Automatically records meetings, creates summaries and captures action items.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-12 gap-y-10 md:gap-x-16" aria-label="Footer">
            {cols.map((c) => (
              <div key={c.h} className="flex flex-col gap-3.5">
                <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-white/60">{c.h}</p>
                {c.links.map(([label, href]) => (
                  <a key={label} href={href} className="group relative w-fit text-[15px] text-white/90 transition-colors hover:text-white">
                    {label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex-1" />

      {/* Wordmark */}
      <p
        aria-hidden
        data-reveal="group"
        className="footer-wordmark relative select-none whitespace-nowrap text-center text-[clamp(80px,20vw,400px)] leading-[0.82] tracking-[-0.04em] text-white"
      >
        {word.map(({ ch, serif }, i) => (
          <span
            key={i}
            className={`inline-block ${serif ? "font-serif italic tracking-[-0.02em]" : ""}`}
            style={{ "--d": `${i * 70}ms` } as CSSProperties}
          >
            {ch}
          </span>
        ))}
      </p>

      {/* Bottom bar */}
      <div className="relative mx-auto mb-5 mt-4 w-[calc(100%-32px)] max-w-[1200px] md:mb-6">
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl bg-white/90 px-5 py-3 text-[14px] text-black/60 shadow-[0_10px_40px_-10px_rgb(0_30_80/0.35)] backdrop-blur-md md:flex-row md:rounded-full md:py-2.5 md:pl-6 md:pr-2.5">
          <p>© 2026 Meetmind, Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#top" className="transition-colors hover:text-[#007cea]">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-[#007cea]">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ label, Icon }) => (
              <a key={label} href="#top" aria-label={label} className={iconBtn}>
                <Icon size={16} weight="regular" />
              </a>
            ))}
            <span className="mx-1 h-5 w-px bg-black/10" aria-hidden />
            <a href="#top" aria-label="Back to top" className={`${iconBtn} group`}>
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
