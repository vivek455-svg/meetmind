import type { CSSProperties } from "react";
import { Pic } from "./Pic";
import { HeroMock } from "./HeroMock";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-page pb-16 pt-[120px] md:min-h-[977px] md:pb-0 md:pt-[153px]">
      {/* Sky */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[674px] w-[1612px] -translate-x-1/2 opacity-70 [mask-image:radial-gradient(70%_80%_at_50%_30%,#000_45%,transparent_100%)]"
      >
        <Pic name="heroClouds" sizes="1612px" priority tint="#e8f1fa" imgClassName="animate-[float_14s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto flex max-w-[860px] flex-col items-center gap-[7px] px-5 text-center">
        <a
          href="#testimonials"
          className="animate-pop group flex items-center gap-2 rounded-full border-[0.5px] border-black/10 bg-white/60 py-1 pl-2 pr-1 shadow-[-1px_2px_2.5px_rgb(112_112_112/0.1),-5px_7px_4px_rgb(112_112_112/0.09)] backdrop-blur transition-transform duration-300 hover:-translate-y-0.5"
          style={d(0)}
        >
          <span className="flex items-center gap-0.5 font-medium text-[16px]">
            <span className="text-black/60">4.5</span>/5
            <img src="/icons/star.svg" alt="" width={24} height={24} className="transition-transform duration-500 group-hover:rotate-[72deg]" />
          </span>
          <span className="text-[16px] font-medium text-black/60">On Product Hunt</span>
          <img src="/icons/producthunt.svg" alt="Product Hunt" width={30} height={30} className="transition-transform duration-300 group-hover:scale-110" />
        </a>

        <div className="flex w-full flex-col items-center gap-[34px]">
          <div className="flex w-full flex-col items-center gap-4">
            <h1 className="text-[clamp(36px,6.4vw,65px)] font-medium leading-[1.23] tracking-[-0.01em] text-black">
              <span className="block">
                <span className="animate-rise inline-block" style={d(80)}>Stop</span>{" "}
                <span className="animate-rise inline-block" style={d(140)}>Taking</span>{" "}
                <span className="animate-rise inline-block text-black/60" style={d(200)}>Notes.</span>
              </span>
              <span className="block">
                <span className="animate-rise inline-block" style={d(280)}>Start</span>{" "}
                <span className="animate-rise inline-block" style={d(340)}>Closing</span>{" "}
                <span className="animate-rise inline-block text-black/60" style={d(400)}>More</span>{" "}
                <span className="animate-rise relative inline-block text-black/60" style={d(460)}>
                  Work.
                  <span
                    aria-hidden
                    className="animate-pop absolute -right-[66px] -top-[22px] hidden size-[66px] -scale-y-100 rotate-[128deg] opacity-40 md:block"
                    style={d(900)}
                  >
                    <Pic name="heroArrow" sizes="66px" tint="transparent" />
                  </span>
                </span>
              </span>
            </h1>
            <p
              className="animate-rise max-w-[652px] text-[17px] leading-[28px] text-black/70"
              style={d(520)}
            >
              MeetMind automatically records meetings, creates summaries, captures items, syncs everything to your
              workspace so you never misses a detail.
            </p>
          </div>
          <a href="#cta" className="btn-primary animate-pop" style={d(640)}>
            Start Free Trial
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-[779px] px-4 md:mt-[42px] md:px-0">
        <div className="animate-rise" style={d(700)}>
          <HeroMock />
        </div>
      </div>
    </section>
  );
}
