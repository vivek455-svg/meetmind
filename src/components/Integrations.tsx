import type { CSSProperties, ReactNode } from "react";
import { u } from "@/lib/u";
import { Pic } from "./Pic";

type Tool = { name: string; x: number; y: number; size: number; icon: ReactNode };

const img = (src: string, size: number, alt: string) => <img src={src} alt={alt} width={size} height={size} className="size-full" />;
const pic = (name: "appGmail" | "appWhatsapp" | "appZoom", alt: string) => (
  <span className="relative block size-full overflow-hidden rounded-full">
    <Pic name={name} alt={alt} sizes="56px" tint="#fff" imgClassName="!object-contain" />
  </span>
);

const tools: Tool[] = [
  { name: "Jira", x: 261, y: 171.4, size: 52, icon: img("/icons/jira.svg", 52, "Jira") },
  { name: "Gmail", x: 373, y: 271.4, size: 55, icon: pic("appGmail", "Gmail") },
  { name: "WhatsApp", x: 532, y: 321.4, size: 50, icon: pic("appWhatsapp", "WhatsApp") },
  { name: "Telegram", x: 852, y: 321.4, size: 50, icon: img("/icons/telegram.svg", 50, "Telegram") },
  { name: "Notion", x: 1003, y: 270.4, size: 46, icon: img("/icons/notion.svg", 46, "Notion") },
  { name: "Zoom", x: 1096, y: 158.4, size: 50, icon: pic("appZoom", "Zoom") },
];

const nodeCls =
  "grid place-items-center rounded-full border-[3px] border-white bg-page shadow-[0_4px_4px_rgb(0_0_0/0.25),inset_-2px_-2px_6px_rgb(0_0_0/0.2),inset_2px_2px_6px_rgb(0_0_0/0.2)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-spring)] hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_14px_24px_-6px_rgb(0_60_140/0.45),inset_-2px_-2px_6px_rgb(0_0_0/0.2),inset_2px_2px_6px_rgb(0_0_0/0.2)]";

function Tooltip({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`relative rounded-[6px] bg-gradient-to-b from-[#8fbee8] to-[#418dd1] px-1 pb-1 pt-3.5 ${className}`} style={style}>
      <svg viewBox="0 0 27 26" className="absolute left-1/2 top-[-17px] h-[26px] w-[26.5px] -translate-x-1/2" aria-hidden>
        <path d="M0 26L13.5 0L26.5 26H0Z" fill="#8CBCE7" />
      </svg>
      <p className="relative rounded-[3px] bg-white px-2.5 py-3 text-left text-[16px] text-black/75">
        Share all your meeting summaries and all the action items with your whole team.
      </p>
    </div>
  );
}

function Copy({ scaled }: { scaled?: boolean }) {
  const s = (n: number) => (scaled ? u(n) : `${n}px`);
  return (
    <div className="relative flex flex-col items-center" style={{ gap: s(16) }}>
      <h2 className={`text-center text-white/93 ${scaled ? "" : "section-title"}`} style={scaled ? { width: u(522), fontSize: u(40), lineHeight: u(47) } : { maxWidth: 522 }} data-reveal>
        Meets shouldn&apos;t create other place to manage work.
      </h2>
      <p className="text-center text-white/93" style={{ maxWidth: s(566), fontSize: scaled ? u(15) : 15, lineHeight: s(22) }} data-reveal>
        Meetmind connects your meeting intelligence with the tools your team already uses, so important information can move where your work happens.
      </p>
      <a href="#cta" className="btn-primary" data-reveal>
        Start Free Trial
      </a>
    </div>
  );
}

export function Integrations() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0e66b5_0%,rgb(50_153_246/0.6)_40%,rgb(247_247_247/0)_100%)]">
      {/* ≥1280px: scattered constellation exactly as designed */}
      <div className="scale-box anim-scope mx-auto hidden max-w-[1440px] xl:block" style={{ aspectRatio: "1440 / 659", "--w": 1440 } as CSSProperties}>
        <div className="scale-inner">
          <svg viewBox="0 0 820 184" fill="none" className="absolute" style={{ left: u(311), top: u(198.4), width: u(817.5), height: u(182.5) }} aria-hidden>
            <path
              className="dash-flow"
              d="M0.81 33.27L83.63 103.89C93.97 112.72 106.01 119.34 119 123.35L247.43 163.02C253.34 164.85 259.4 166.12 265.55 166.83L398.01 182.03C405.19 182.85 412.44 182.9 419.62 182.16L567.13 167.02C575.22 166.19 583.18 164.37 590.83 161.62L706.01 120.1C723.84 113.68 739.48 102.32 751.1 87.35L818.31 0.77"
              stroke="white"
              strokeOpacity="0.45"
              strokeWidth="2.5"
            />
          </svg>

          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: u(100) }}>
            <Copy scaled />
          </div>

          {/* Slack — the hub */}
          <div className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center" style={{ top: u(345) }} data-reveal="scale">
            <span className={`${nodeCls} animate-float`} style={{ padding: u(12), "--d": "-1s" } as CSSProperties}>
              <img src="/icons/slack.svg" alt="Slack" style={{ width: u(45.7), height: u(44.7) }} />
            </span>
            <Tooltip style={{ width: u(288), marginTop: u(30) }} />
          </div>

          {tools.map((t, i) => (
            <div key={t.name} className="absolute" style={{ left: u(t.x), top: u(t.y) }}>
              <div data-reveal="scale" style={{ "--d": `${150 + Math.abs(i - 2.5) * 110}ms` } as CSSProperties}>
                <span className={`${nodeCls} animate-float`} style={{ padding: u(12), "--d": `${-i * 0.7}s` } as CSSProperties} title={t.name}>
                  <span className="block" style={{ width: u(t.size), height: u(t.size) }}>
                    {t.icon}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* < 1280px: stacked */}
      <div className="flex flex-col items-center gap-10 px-5 pb-20 pt-[72px] xl:hidden">
        <Copy />
        <div className="flex max-w-[560px] flex-wrap justify-center gap-4" data-reveal>
          {[tools[0], tools[1], tools[2]].map((t) => (
            <span key={t.name} className={`${nodeCls} p-2.5`} title={t.name}>
              <span className="block size-10">{t.icon}</span>
            </span>
          ))}
          <span className={`${nodeCls} p-2.5`} title="Slack">
            <img src="/icons/slack.svg" alt="Slack" className="size-10" />
          </span>
          {[tools[3], tools[4], tools[5]].map((t) => (
            <span key={t.name} className={`${nodeCls} p-2.5`} title={t.name}>
              <span className="block size-10">{t.icon}</span>
            </span>
          ))}
        </div>
        <Tooltip className="mt-2 w-full max-w-[288px]" />
      </div>
    </section>
  );
}
