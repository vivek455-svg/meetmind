import type { CSSProperties } from "react";
import { Logo } from "./Logo";
import { Pic } from "./Pic";

const cols = [
  { h: "Product", links: [["Problem", "#problem"], ["Benefits", "#benefits"], ["How It Works", "#how-it-works"], ["Integrations", "#cta"], ["Pricing", "#cta"]] },
  { h: "Company", links: [["About", "#top"], ["Testimonials", "#testimonials"], ["Careers", "#top"], ["Blog", "#top"], ["Contact Us", "mailto:hello@meetmind.app"]] },
  { h: "Resources", links: [["Help Center", "#faq"], ["Security", "#faq"], ["Changelog", "#top"], ["API Docs", "#top"], ["FAQ", "#faq"]] },
];

const link = "group relative w-fit text-[15px] text-white/75 transition-colors hover:text-white";
const underline =
  "absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-between overflow-hidden border-t border-black/[0.06] bg-gradient-to-b from-[#288ee8] to-[#2f9cfc] pt-20 md:h-[851px] md:pt-[90px]">
      {/* Landscape, faded in through a soft ellipse and a top-to-bottom ramp (Figma "Footer Artwork") */}
      <div aria-hidden className="footer-artwork pointer-events-none absolute inset-0">
        <div className="absolute left-[calc(50%-15.5px)] top-[calc(50%-0.3px)] aspect-[1619/1005] w-[max(112.43%,1619px)] -translate-x-1/2 -translate-y-1/2">
          <Pic
            name="footerLandscape"
            sizes="(min-width: 1440px) 113vw, 1619px"
            tint="transparent"
            crop={{ width: "93.51%", height: "192%", left: "6.49%", top: "-51.38%" }}
            imgClassName="!object-fill"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(46_156_252/0.55)_45%,rgb(46_156_252/0)_75%)]" />
      </div>

      <div className="relative w-full max-w-[1280px] px-5 xl:px-0" data-reveal>
        <div className="flex flex-col justify-between gap-12 pb-16 md:flex-row">
          <div className="flex w-[280px] flex-col gap-4">
            <Logo className="!text-[32px] !leading-[42px] !text-white/90" />
            <p className="text-[15px] leading-[22px] text-white/75">Automatically records meetings, creates summaries and captures action items.</p>
          </div>
          <nav className="flex flex-wrap gap-x-10 gap-y-10" aria-label="Footer">
            {cols.map((c) => (
              <div key={c.h} className="flex flex-col gap-3.5 leading-5">
                <p className="text-[15px] font-medium uppercase tracking-[0.06em] text-white/90">{c.h}</p>
                {c.links.map(([label, href]) => (
                  <a key={label} href={href} className={link}>
                    {label}
                    <span className={underline} />
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="h-px w-full bg-white/30" />
        <div className="flex flex-col justify-between gap-3 py-6 text-[14px] leading-[18px] text-white/75 sm:flex-row">
          <p>© 2026 Meetmind, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className={link.replace("text-[15px] ", "")}>
              Privacy Policy
              <span className={underline} />
            </a>
            <a href="#top" className={link.replace("text-[15px] ", "")}>
              Terms of Service
              <span className={underline} />
            </a>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        data-reveal="group"
        className="footer-wordmark relative mt-24 select-none whitespace-nowrap text-center text-[clamp(60px,19.45vw,280px)] font-semibold leading-[0.75] tracking-[-0.05em] md:mt-0"
      >
        {"Meetmind".split("").map((ch, i) => (
          <span key={i} style={{ "--d": `${i * 60}ms` } as CSSProperties}>
            {ch}
          </span>
        ))}
      </p>
    </footer>
  );
}
