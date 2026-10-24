import type { CSSProperties } from "react";

const row1 = [
  { src: "/logos/logo-a.svg", w: 100, h: 40 },
  { src: "/logos/logo-b.svg", w: 144, h: 33 },
  { src: "/logos/logo-c.svg", w: 72, h: 72 },
  { src: "/logos/logo-d.svg", w: 159, h: 37 },
  { src: "/logos/logo-e.svg", w: 165, h: 37 },
];
const row2 = [row1[3], row1[4], row1[0], row1[1], row1[2]];

function Squares({ flip }: { flip?: boolean }) {
  return (
    <div aria-hidden className={`relative hidden h-[83px] w-[81px] shrink-0 md:block ${flip ? "" : ""}`}>
      <span className="animate-float absolute left-0 top-[23px] size-[60px] rounded-[6px] bg-[#37a1ff]/60" style={{ "--d": flip ? "-2s" : "0s" } as CSSProperties} />
      <span className="animate-float absolute left-[21px] top-0 size-[60px] rounded-[6px] bg-[#37a1ff]" style={{ "--d": flip ? "-3s" : "-1s" } as CSSProperties} />
    </div>
  );
}

export function Trust() {
  return (
    <section className="flex flex-col items-center gap-9 px-5 py-[72px] md:px-20 md:py-[90px]">
      <div className="flex w-full flex-col items-center gap-4" data-reveal>
        <p className="text-center text-[22px]">Trusted by leading startups</p>
        <div className="grid w-full max-w-[1118px] grid-cols-2 border-l border-t border-black/15 sm:grid-cols-3 md:grid-cols-5">
          {[...row1, ...row2].map((l, i) => (
            <div
              key={i}
              className="group grid h-[86px] place-items-center overflow-hidden border-b border-r border-black/15 bg-[#efefef] transition-colors duration-500 hover:bg-white md:h-[113px]"
            >
              <img
                src={l.src}
                alt="Customer logo"
                width={l.w}
                height={l.h}
                loading="lazy"
                className="max-w-[70%] opacity-80 grayscale transition-all duration-500 ease-[var(--ease-spring)] group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-[1092px] items-start gap-8" data-reveal style={{ "--d": "120ms" } as CSSProperties}>
        <Squares />
        <p className="flex-1 text-center text-[clamp(22px,2.6vw,32px)] leading-[1.4] text-black text-balance">
          Your meetings can contain sensitive information. Meetmind is designed with privacy and security in mind, so
          your team&apos;s <span className="text-black/70">conversations stay protected.</span>
        </p>
        <Squares flip />
      </div>
    </section>
  );
}
