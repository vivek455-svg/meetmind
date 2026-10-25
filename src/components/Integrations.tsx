import type { CSSProperties, ReactNode } from "react";
import { u } from "@/lib/u";
import { Pic } from "./Pic";
import { IntegrationPicker } from "./IntegrationPicker";
import { nodeCls, Tooltip } from "./IntegrationTooltip";

export type Tool = { name: string; x: number; y: number; size: number; icon: ReactNode; detail: string; above?: boolean };

const img = (src: string, size: number, alt: string) => <img src={src} alt={alt} width={size} height={size} className="size-full" />;
const pic = (name: "appGmail" | "appWhatsapp" | "appZoom", alt: string) => (
  <span className="relative block size-full overflow-hidden rounded-full">
    <Pic name={name} alt={alt} sizes="56px" tint="#fff" imgClassName="!object-contain" />
  </span>
);

const SLACK = "Slack";

// x/y are the node's top-left in the 1440px Figma frame
const tools: Tool[] = [
  {
    name: "Jira",
    above: true,
    x: 261,
    y: 171.4,
    size: 52,
    icon: img("/icons/jira.svg", 52, "Jira"),
    detail: "Action items become Jira issues automatically, complete with owners and due dates.",
  },
  {
    name: "Gmail",
    x: 373,
    y: 271.4,
    size: 55,
    icon: pic("appGmail", "Gmail"),
    detail: "Send a clean recap email to every attendee the moment the call ends — no copy-pasting notes.",
  },
  {
    name: "WhatsApp",
    x: 532,
    y: 321.4,
    size: 50,
    icon: pic("appWhatsapp", "WhatsApp"),
    detail: "Get the summary and your next steps on WhatsApp, even when you’re away from your desk.",
  },
  {
    name: SLACK,
    x: 682,
    y: 345,
    size: 45.7,
    icon: img("/icons/slack.svg", 46, "Slack"),
    detail: "Share all your meeting summaries and all the action items with your whole team.",
  },
  {
    name: "Telegram",
    x: 852,
    y: 321.4,
    size: 50,
    icon: img("/icons/telegram.svg", 50, "Telegram"),
    detail: "The Meetmind bot posts summaries to your Telegram groups so everyone stays in the loop.",
  },
  {
    name: "Notion",
    x: 1003,
    y: 270.4,
    size: 46,
    icon: img("/icons/notion.svg", 46, "Notion"),
    detail: "Every meeting becomes a structured Notion page with notes, decisions and tasks, neatly organised.",
  },
  {
    name: "Zoom",
    above: true,
    x: 1096,
    y: 158.4,
    size: 50,
    icon: pic("appZoom", "Zoom"),
    detail: "Meetmind joins your Zoom calls on its own and starts capturing the conversation right away.",
  },
];

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
        <div className="scale-inner tools-layer">
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

          {tools.map((t, i) => (
            <div
              key={t.name}
              className={`tool absolute ${t.name === SLACK ? "is-default" : ""}`}
              style={{ left: u(t.x), top: u(t.y) }}
            >
              <div data-reveal="scale" style={{ "--d": `${150 + Math.abs(i - 3) * 110}ms` } as CSSProperties}>
                <div className="animate-float" style={{ "--d": `${-i * 0.7}s` } as CSSProperties}>
                  <button
                    type="button"
                    aria-label={`${t.name}: ${t.detail}`}
                    className={`tool-node ${nodeCls} cursor-pointer`}
                    style={{ padding: u(12) }}
                  >
                    <span className="block" style={{ width: u(t.size), height: u(t.size) }}>
                      {t.icon}
                    </span>
                  </button>
                </div>
              </div>
              <Tooltip
                name={t.name}
                detail={t.detail}
                above={t.above}
                className={`tool-tip absolute left-1/2 ${t.above ? "is-above" : ""}`}
                style={{
                  width: u(288),
                  fontSize: u(16),
                  lineHeight: 1.35,
                  ...(t.above ? { bottom: `calc(100% + ${u(24)})` } : { top: `calc(100% + ${u(30)})` }),
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* < 1280px: stacked, tap an icon to swap the detail */}
      <div className="flex flex-col items-center gap-10 px-5 pb-20 pt-[72px] xl:hidden">
        <Copy />
        <IntegrationPicker
          tools={tools.map(({ name, detail, icon }) => ({ name, detail, icon }))}
          defaultName={SLACK}
        />
      </div>
    </section>
  );
}
