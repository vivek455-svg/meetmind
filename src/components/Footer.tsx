import { Logo } from "./Logo";
import { Pic } from "./Pic";

const cols = [
  { h: "Product", links: [["Problem", "#problem"], ["Benefits", "#benefits"], ["How It Works", "#how-it-works"], ["Integrations", "#cta"], ["Pricing", "#cta"]] },
  { h: "Company", links: [["About", "#top"], ["Testimonials", "#testimonials"], ["Careers", "#top"], ["Blog", "#top"], ["Contact Us", "mailto:hello@meetmind.app"]] },
  { h: "Resources", links: [["Help Center", "#faq"], ["Security", "#faq"], ["Changelog", "#top"], ["API Docs", "#top"], ["FAQ", "#faq"]] },
];

const socials = ["X", "in", "YT", "GH"];

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-between overflow-hidden border-t border-black/[0.06] bg-gradient-to-b from-[#1e73c0] to-[#2f9cfc] pt-20 md:min-h-[968px]">
      {/* Landscape that dissolves into the blue */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,transparent_0%,transparent_40%,rgb(0_0_0/0.35)_52%,rgb(0_0_0/0.85)_64%,#000_74%)]"
      >
        <div className="absolute left-[calc(50%-15.5px)] top-[calc(50%-0.84px)] h-[1005px] w-[1619px] -translate-x-1/2 -translate-y-1/2">
          <Pic
            name="footerLandscape"
            sizes="1619px"
            tint="transparent"
            crop={{ height: "192%", width: "93.51%", left: "6.49%", top: "-51.38%" }}
            imgClassName="footer-landscape"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(46_156_252/0.55)_45%,rgb(46_156_252/0)_75%)]" />
      </div>

      <div className="relative w-full max-w-[1200px] px-5 xl:px-0" data-reveal>
        <div className="flex flex-col justify-between gap-12 pb-16 md:flex-row">
          <div className="flex w-[280px] flex-col gap-4">
            <Logo />
            <p className="text-[15px] leading-[22px] text-black/65">Automatically records meetings, creates summaries and captures action items.</p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#top"
                  aria-label={s}
                  className="grid size-9 place-items-center rounded-[10px] border border-black/[0.08] bg-page text-[13px] font-medium text-black/70 transition-all duration-300 ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:bg-white hover:text-[#007cea]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-10" aria-label="Footer">
            {cols.map((c) => (
              <div key={c.h} className="flex flex-col gap-3.5">
                <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-black/45">{c.h}</p>
                {c.links.map(([label, href]) => (
                  <a key={label} href={href} className="group relative w-fit text-[15px] text-black/85 transition-colors hover:text-white">
                    {label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="h-px w-full bg-black/[0.07]" />
        <div className="flex flex-col justify-between gap-3 py-6 text-[14px] text-black/50 sm:flex-row">
          <p>© 2026 Meetmind, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        data-reveal
        className="relative -mb-[0.06em] mt-24 select-none whitespace-nowrap bg-gradient-to-b from-white/90 to-white/0 bg-clip-text text-center text-[clamp(90px,19.5vw,280px)] font-semibold leading-[0.75] tracking-[-0.05em] text-transparent md:mt-0"
      >
        Meetmind
      </p>
    </footer>
  );
}
