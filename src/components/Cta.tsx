import type { CSSProperties } from "react";

const check = (color: string, cls = "size-3.5") => (
  <svg viewBox="0 0 14 14" fill="none" className={cls} aria-hidden>
    <path d="M2.5 7.5l3 3 6-7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const items = [
  { t: "Finalize pricing copy", who: "Priya · Fri", done: true },
  { t: "Share user research deck", who: "Daniel · Mon" },
  { t: "QA new invite flow", who: "Arjun · Tue" },
];

const row = "flex w-full items-center gap-2.5 rounded-[8px] border border-black/[0.07] bg-white px-2.5 py-[9px] text-[13.5px] text-black/80";

export function Cta() {
  return (
    <section id="cta" className="flex justify-center px-4 pb-[100px] pt-5 md:pb-[120px]">
      <div
        data-reveal="scale"
        className="relative flex w-full max-w-[1200px] flex-col items-center gap-12 overflow-hidden rounded-[24px] border border-white/60 bg-[linear-gradient(144.5deg,#196fbd_0%,#6bafed_70%,#b8d9f7_100%)] px-6 py-14 md:px-[72px] md:py-20 lg:flex-row lg:gap-14"
      >
        {/* layered glass behind the preview */}
        <div aria-hidden className="absolute left-[calc(50%+306.5px)] top-1/2 hidden h-[476px] w-[513px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white/10 lg:block">
          <div className="absolute left-1/2 top-1/2 h-[451px] w-[481px] -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-black/10" />
        </div>

        <div className="relative flex flex-1 flex-col gap-7">
          <div className="flex flex-col gap-4">
            <h2 className="text-[clamp(34px,4.6vw,48px)] leading-[1.17] text-white text-balance">Your next meeting can take its own notes.</h2>
            <p className="max-w-[440px] text-[17px] leading-7 text-white/90">
              Join thousands of teams who let Meetmind capture, summarize and sync every conversation.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <a
              href="#top"
              className="group relative inline-flex self-start overflow-hidden rounded-[12px] bg-white px-5 py-3 text-[16px] text-[#007cea] shadow-[-2px_3px_9px_rgb(80_78_78/0.1),-9px_14px_17px_rgb(80_78_78/0.09),-21px_31px_23px_rgb(80_78_78/0.05)] transition-transform duration-300 ease-[var(--ease-spring)] hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <svg viewBox="0 0 16 16" className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {["14-day free trial", "No credit card", "Setup in 2 minutes"].map((b) => (
                <li key={b} className="flex items-center gap-1.5 text-[14px] text-white/88">
                  {check("#fff")}
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cta-preview relative w-full max-w-[440px] shrink-0 rounded-[16px] bg-white px-[5px] pb-[5px] pt-[25px] shadow-[0_30px_60px_-20px_rgb(0_40_100/0.35)] transition-transform duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:rotate-[-0.6deg]">
          <span className="absolute left-[21px] top-[9.7px] flex gap-1.5" aria-hidden>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
            ))}
          </span>
          <span
            aria-hidden
            className="cta-note pointer-events-none absolute -top-[46px] right-2 hidden rotate-[-8.6deg] font-hand text-[18px] font-bold text-white/80 lg:block"
          >
            Done before the call ends!
          </span>

          <div className="flex flex-col gap-2.5 rounded-[16px] bg-page px-4 py-5">
            <div className="flex flex-col gap-0.5">
              <p className="text-[16px] font-medium text-ink">Weekly Product Sync</p>
              <p className="text-[13px] text-black/50">Today · 32 min · 5 participants</p>
            </div>
            <p className="text-[13px] font-medium text-black/85">Key decisions</p>
            <div className={row}>Ship onboarding redesign in v2.4</div>
            <p className="text-[13px] font-medium text-black/85">Action items</p>
            {items.map((it, i) => (
              <div key={it.t} className={`group/row ${row} transition-transform duration-300 hover:translate-x-1`}>
                <span
                  className={`cta-check grid size-3.5 shrink-0 place-items-center rounded-[4px] border-[1.5px] border-[#37a1ff] transition-colors duration-300 ${
                    it.done ? "is-done" : "bg-white group-hover/row:bg-[#37a1ff]/15"
                  }`}
                  style={{ "--d": `${700 + i * 450}ms` } as CSSProperties}
                >
                  {check("#fff", "size-2.5")}
                </span>
                <span className="flex-1">{it.t}</span>
                <span className="rounded-full bg-blue-50 px-2 py-[3px] text-[11px] text-[#007cea]">{it.who}</span>
              </div>
            ))}
            <div className="relative flex items-center justify-between overflow-hidden rounded-[10px] bg-blue-50 px-3 py-2.5 text-[12px]">
              <span aria-hidden className="cta-progress absolute inset-y-0 left-0 w-full origin-left bg-[#37a1ff]/10" />
              <span className="relative flex items-center gap-1.5 font-medium text-[#007cea]">
                {check("#007cea", "size-3")}
                Synced to Notion, Slack &amp; Linear
              </span>
              <span className="cta-now relative text-[#007cea]/70">Just now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
