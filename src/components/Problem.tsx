import type { CSSProperties } from "react";
import { Calendar, Database, FilmReel, Scroll } from "@phosphor-icons/react/dist/ssr";
import { u } from "@/lib/u";
import { Pic } from "./Pic";

const W = 936;

const pills = [
  { label: "Missed Follow-ups", Icon: Calendar, x: -2, y: 23, d: 0 },
  { label: "Action items get forgotten", Icon: Scroll, x: -46, y: 344, d: 1.4 },
  { label: "Important details disappear", Icon: Database, x: 734, y: 72, d: 0.7 },
  { label: "Decisions get buried in recordings", Icon: FilmReel, x: 718, y: 384, d: 2.1 },
];

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-gradient-to-b from-[#007cea] to-page pt-[72px] md:pt-[90px]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[478px] bg-[linear-gradient(180deg,rgb(0_0_0/0.25),rgb(102_102_102/0))]" />

      <h2 className="section-title relative mx-auto max-w-[636px] px-5 text-center text-white/93" data-reveal>
        Great meetings shouldn&apos;t disappear when the call ends.
      </h2>

      <div className="relative mx-auto mt-[34px] w-full max-w-[936px] px-4 md:px-0" data-reveal="scale" style={{ "--d": "100ms" } as CSSProperties}>
        <div className="scale-box anim-scope" style={{ aspectRatio: `${W} / 627`, "--w": W } as CSSProperties}>
          <div className="scale-inner">
            <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: u(8.9) }}>
              <Pic name="monitor" sizes="(min-width: 936px) 936px, 100vw" crop={{ height: "144.38%", top: "-14.05%" }} tint="transparent" />
            </div>
            <div className="absolute" style={{ left: u(123), top: u(6), width: u(695), height: u(480) }}>
              <Pic name="meetGrid" alt="A video call with four participants" sizes="(min-width: 936px) 695px, 74vw" tint="#2b2b2b" />
            </div>

            {pills.map(({ label, Icon, x, y, d }, i) => (
              <div
                key={label}
                className="absolute hidden md:block"
                style={{ left: u(x), top: u(y), fontSize: u(18) }}
              >
                <div data-reveal="blur" style={{ "--d": `${300 + i * 140}ms` } as CSSProperties}>
                  <span
                    className="pill-glass animate-float cursor-default transition-colors duration-300 hover:bg-black/55"
                    style={{ "--d": `-${d}s`, fontSize: "inherit", padding: `${u(8)} ${u(14)}`, gap: u(4) } as CSSProperties}
                  >
                    <Icon size="1.33em" weight="regular" aria-hidden />
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ul className="relative mx-auto mt-6 flex max-w-[480px] flex-wrap justify-center gap-2 px-4 pb-10 md:hidden">
        {pills.map(({ label, Icon }) => (
          <li key={label} className="pill-glass !text-[14px]" data-reveal="blur">
            <Icon size={18} aria-hidden />
            {label}
          </li>
        ))}
      </ul>

      {/* soft fog that melts the monitor stand into the page */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] bg-[radial-gradient(38%_100%_at_50%_100%,var(--color-page)_35%,transparent_100%)]" />
    </section>
  );
}
