import type { CSSProperties, ReactNode } from "react";
import {
  ArrowsClockwise,
  Barcode,
  CalendarDots,
  ChatCircleDots,
  Clipboard,
  ListDashes,
  Notepad,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { u } from "@/lib/u";
import { Pic } from "./Pic";

/* ---------- shared bits ---------- */

function Blob({ x, y, w, h, rotate = 0 }: { x: number; y: number; w: number; h: number; rotate?: number }) {
  return (
    <span
      aria-hidden
      className="absolute rounded-full bg-[#40a5ff] opacity-60"
      style={{ left: u(x), top: u(y), width: u(w), height: u(h), filter: `blur(${u(42)})`, transform: `rotate(${rotate}deg)` }}
    />
  );
}

function Chip({ x, y, w, children, icon, d }: { x: number; y: number; w?: number; children: ReactNode; icon: ReactNode; d: string }) {
  return (
    <span
      className="animate-float-sm absolute flex items-center rounded-full border border-white bg-[#f7f7f7] text-black/70 drop-shadow-[1px_1px_0.5px_rgb(0_0_0/0.25)]"
      style={{ left: u(x), top: u(y), width: w ? u(w) : undefined, gap: u(3), padding: `${u(2)} ${u(6)} ${u(2)} ${u(2)}`, fontSize: u(8), lineHeight: u(9), "--d": d } as CSSProperties}
    >
      <span className="grid shrink-0 place-items-center rounded-full border border-white bg-gradient-to-b from-[#389cf6] to-[#266ba9] text-white" style={{ width: u(13), height: u(13) }}>
        {icon}
      </span>
      {children}
    </span>
  );
}

function Frame({ x, y, w, h, faded, centerX, centerY }: { x?: number; y?: number; w: number; h: number; faded?: boolean; centerX?: number; centerY?: number }) {
  const style: CSSProperties = { width: u(w), height: u(h) };
  if (centerX !== undefined) {
    style.left = `calc(50% + ${u(centerX)})`;
    style.transform = "translateX(-50%)";
  } else style.left = u(x!);
  if (centerY !== undefined) {
    style.top = `calc(50% + ${u(centerY)})`;
    style.transform = `${style.transform ?? ""} translateY(-50%)`;
  } else style.top = u(y!);
  return (
    <div
      className={`absolute overflow-hidden shadow-[0_2px_2px_rgb(0_0_0/0.25)] ${faded ? "border-[#f7f7f7]" : "border-white"}`}
      style={{ ...style, borderWidth: u(2.5), borderStyle: "solid" }}
    >
      <Pic name="meetGrid" sizes="200px" className={faded ? "opacity-40" : ""} tint="#d6dde5" />
    </div>
  );
}

/* ---------- 1. Capture everything ---------- */

function CaptureIllustration() {
  const bars = [7, 9, 7, 9, 7, 11, 7];
  const sparkles = [
    [147, 169], [191, 194], [241, 174], [179, 160], [213, 173], [169, 179], [194, 177], [167, 145], [233, 143],
  ];
  return (
    <>
      <Blob x={16} y={184} w={70} h={86} />
      <Blob x={291} y={191} w={59} h={76} />
      <Blob x={325} y={-4} w={81} h={102} />
      <span className="absolute left-1/2 -translate-x-1/2 rounded-[50%] bg-[#65b4fb]/30" style={{ top: u(258), width: u(73), height: u(14) }} />

      <Frame w={158} h={95} centerX={-145} centerY={-56.6} faded />
      <Frame w={158} h={95} centerX={135} centerY={-56.6} faded />
      <Frame w={194} h={123} centerX={-1} centerY={-56.6} />

      {/* projection beams */}
      <img src="/icons/beam-1.svg" alt="" className="absolute left-1/2 -translate-x-1/2 animate-[beam_3s_ease-in-out_infinite]" style={{ top: u(97.4), width: u(365.5), height: u(122) }} />
      <img src="/icons/beam-2.svg" alt="" className="absolute left-1/2 -translate-x-1/2 animate-[beam_3s_ease-in-out_infinite_0.6s]" style={{ top: u(87.9), width: u(191), height: u(131.5) }} />

      {/* sound waves radiating up from the recorder */}
      {[
        { w: 145, h: 27, t: 144.4, d: "0.8s" },
        { w: 105, h: 17, t: 167.4, d: "0.4s" },
        { w: 59, h: 11, t: 189.4, d: "0s" },
      ].map((a) => (
        <svg
          key={a.w}
          viewBox={`0 0 ${a.w} ${a.h}`}
          className="absolute left-1/2 -translate-x-1/2 animate-[beam_2.4s_ease-in-out_infinite]"
          style={{ top: u(a.t), width: u(a.w), height: u(a.h), animationDelay: a.d }}
          fill="none"
        >
          <path d={`M0.3 ${a.h - 0.5}C${a.w * 0.15} ${a.h * 0.2} ${a.w * 0.3} 0.35 ${a.w * 0.32} 0.35H${a.w * 0.62}C${a.w * 0.76} 0.35 ${a.w * 0.9} ${a.h * 0.25} ${a.w - 0.3} ${a.h - 0.5}`} stroke="#fff" strokeOpacity="0.5" strokeWidth="0.7" />
        </svg>
      ))}
      {sparkles.map(([x, y], i) => (
        <span key={i} className="absolute rounded-full bg-white animate-[twinkle_2.2s_ease-in-out_infinite]" style={{ left: u(x), top: u(y), width: u(2), height: u(2), animationDelay: `${i * 0.27}s` }} />
      ))}

      {/* recorder */}
      <span className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-[8px] bg-gradient-to-b from-[#3aa2ff] to-[#236199]" style={{ top: u(215.4), width: u(22), height: u(9) }}>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-[#3aa2ff]" style={{ width: u(5), height: u(5) }} />
      </span>
      <div
        className="absolute left-1/2 -translate-x-1/2 overflow-hidden bg-[#c6e4ff] shadow-[0_1px_1px_rgb(0_0_0/0.25),inset_-2px_-2px_2px_rgb(0_0_0/0.15),inset_2px_2px_4px_rgb(2_2_2/0.15)] transition-transform duration-300 hover:scale-110"
        style={{ top: u(218.4), width: u(36), height: u(49), borderRadius: u(12), border: `${u(2)} solid #fff` }}
      >
        <span className="absolute left-1/2 flex -translate-x-1/2 items-center rounded-full bg-[#fee7e7]" style={{ top: u(9), gap: u(2), padding: `${u(1)} ${u(3)}`, fontSize: u(5), lineHeight: u(6) }}>
          <span className="rounded-full bg-[#e9333b] animate-[blink_1.2s_ease-in-out_infinite]" style={{ width: u(4), height: u(4) }} />
          REC
        </span>
        <span className="absolute left-1/2 flex -translate-x-1/2 items-center" style={{ top: u(23), gap: u(1), height: u(11) }}>
          {bars.map((h, i) => (
            <span
              key={i}
              className="origin-center rounded-full bg-gradient-to-b from-[#379bf4] to-[#2c7cc5] animate-[eq_0.9s_ease-in-out_infinite]"
              style={{ width: u(2), height: u(h), animationDelay: `${(i % 4) * -0.18}s` }}
            />
          ))}
        </span>
      </div>

      <Chip x={22} y={184.4} icon={<Barcode size="0.95em" />} d="0s">
        Transcribing
      </Chip>
      <Chip x={284} y={229.4} w={73} icon={<Notepad size="0.95em" />} d="-1.6s">
        Notes saved
      </Chip>
    </>
  );
}

/* ---------- 2. Understand what matters ---------- */

function DocCard({ x, center, title, rows, footer }: { x?: number; center?: number; title: string; rows: string[][][]; footer: ReactNode }) {
  return (
    <div
      className="absolute overflow-hidden rounded-[2px] border border-white bg-[#f7f7f7] shadow-[1px_1px_1px_rgb(0_0_0/0.25)] transition-transform duration-500 ease-[var(--ease-spring)] hover:-translate-y-1.5"
      style={{
        left: center !== undefined ? `calc(50% + ${u(center)})` : u(x!),
        translate: center !== undefined ? "-50% 0" : undefined,
        top: u(137.4),
        width: u(75),
        height: u(105),
      }}
    >
      <p className="absolute text-black/70" style={{ left: u(5), top: u(5), fontSize: u(6) }}>
        {title}
      </p>
      <span className="absolute h-px bg-black/10" style={{ left: u(6), top: u(17), width: u(60) }} />
      {rows.map((group, gi) => (
        <div key={gi} className="absolute flex flex-col" style={{ left: u(5), top: u(gi === 0 ? 23 : 68), width: u(57), gap: u(3) }}>
          {group.map((r, i) => (
            <span key={i} className={`shimmer-bar ${r[0] === "b" ? "blue" : ""} rounded-full`} style={{ height: u(4), width: r[1] === "full" ? "100%" : u(Number(r[1])), animationDelay: `${(gi * 5 + i) * 0.15}s` }} />
          ))}
        </div>
      ))}
      <div className="absolute flex items-center border-t-[0.4px] border-black/[0.08] text-black/65" style={{ left: u(5), top: u(89), width: u(61), paddingTop: u(3), gap: u(2), fontSize: u(4.5) }}>
        {footer}
      </div>
    </div>
  );
}

function Transfer({ x }: { x: number }) {
  return (
    <span className="absolute overflow-hidden bg-[#3aa2ff]/40" style={{ left: u(x), top: u(182.4), width: u(65), height: u(10) }}>
      <span className="absolute inset-y-0 flex items-center animate-[transfer_1.6s_linear_infinite]" style={{ gap: u(5), left: u(-12) }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="rounded-full bg-[#4caafd]" style={{ width: u(7), height: u(2) }} />
        ))}
      </span>
    </span>
  );
}

function UnderstandIllustration() {
  return (
    <>
      <Blob x={-10} y={189} w={59} h={76} rotate={31} />
      <Blob x={275} y={-17} w={59} h={76} rotate={31} />
      <Blob x={-38} y={-47} w={59} h={76} rotate={-50} />
      <Blob x={291} y={191} w={59} h={76} />

      <Transfer x={83} />
      <Transfer x={223} />

      <svg viewBox="0 0 247 63" fill="none" className="absolute left-1/2 -translate-x-1/2" style={{ top: u(77.4), width: u(245.5), height: u(62), marginLeft: u(-2.25) }}>
        <path className="dash-flow" d="M125.9 0.4V31.4M125.9 31.4H31.4C14.28 31.4 0.4 45.28 0.4 62.4M125.9 31.4H217.4C233.14 31.4 245.9 44.16 245.9 59.9M125.9 31.4V59.9" stroke="#70BAFC" strokeWidth="0.8" strokeLinecap="round" />
      </svg>

      <DocCard
        x={21}
        title="Summary"
        rows={[[["b", "28"], ["g", "full"], ["b", "42"], ["g", "full"], ["b", "42"]], [["b", "42"], ["g", "full"]]]}
        footer={
          <>
            <span className="flex items-center">
              {(["attendee1", "attendee2", "attendee3", "attendee4"] as const).map((a) => (
                <span key={a} className="relative overflow-hidden rounded-full border-[0.24px] border-white" style={{ width: u(5.7), height: u(5.7), marginRight: u(-1.9) }}>
                  <Pic name={a} sizes="12px" tint="#cfd8e3" />
                </span>
              ))}
            </span>
            <span style={{ marginLeft: u(2) }}>4 attendees</span>
          </>
        }
      />
      <DocCard
        center={0.5}
        title="Key decisions"
        rows={[[["g", "full"], ["b", "28"], ["b", "42"], ["b", "full"], ["g", "full"]], [["b", "42"], ["g", "full"]]]}
        footer="3 of 4 decided"
      />
      <DocCard
        center={120.5}
        title="Important points"
        rows={[[["g", "full"], ["b", "28"], ["b", "46"], ["g", "full"], ["b", "42"]], [["g", "full"], ["b", "42"]]]}
        footer="Today, 10:42 AM"
      />

      {[184, 58, 304].map((x, i) => (
        <span key={x} className="absolute rounded-full border border-[#38a1fe] bg-white" style={{ left: u(x), top: u(136.4), width: u(4), height: u(4) }}>
          <span className="absolute inset-0 rounded-full bg-[#38a1fe] animate-[ping_1.8s_ease-out_infinite]" style={{ animationDelay: `${i * 0.3}s` }} />
        </span>
      ))}

      <div
        className="absolute left-1/2 overflow-hidden border-white shadow-[0_1px_1px_rgb(0_0_0/0.25)] transition-transform duration-500 hover:scale-105"
        style={{ top: u(14.4), width: u(111), height: u(70), marginLeft: u(-55), borderWidth: u(1.25), borderStyle: "solid" }}
      >
        <Pic name="meetGrid" sizes="120px" tint="#d6dde5" />
      </div>
    </>
  );
}

/* ---------- 3. Keep work moving ---------- */

const actions = [
  { t: "Send deck", w: 35, when: "Fri, 4 AM" },
  { t: "Book review", w: 45, when: "Mon, 2 PM" },
  { t: "Client feedback", w: 51, when: "Wed, 6 PM" },
  { t: "Discovery call", w: 47, when: "Tue, 4 PM" },
];

const nodes = [
  { x: 32, y: 84.4, Icon: Clipboard, label: "Board", lx: 32, ly: 72.4, d: "0s" },
  { x: 120, y: 26.4, Icon: CalendarDots, label: "Calendar", lx: 115, ly: 13.4, d: "-0.9s" },
  { x: 224, y: 26.4, Icon: ChatCircleDots, label: "Chat", lx: 227, ly: 13.4, d: "-1.8s" },
  { x: 295, y: 84.4, Icon: Notepad, label: "Docs", lx: 297, ly: 71.4, d: "-2.7s" },
];

function SyncIllustration() {
  return (
    <>
      <Blob x={36} y={-17} w={106} h={70} />
      <Blob x={280} y={-18} w={70} h={86} rotate={-142} />
      <Blob x={1} y={187} w={70} h={86} />
      <Blob x={299} y={202} w={70} h={86} rotate={-20} />

      <svg viewBox="0 0 258 63" fill="none" className="absolute left-1/2 -translate-x-1/2" style={{ top: u(48.4), width: u(257), height: u(62), marginLeft: u(-4.5) }}>
        <path className="dash-flow" d="M132.9 62.4L87.4 0.4M257.4 51.4L132.9 62.4L0.4 51.4M132.9 62.4L185.4 0.4" stroke="#38A1FE" strokeWidth="0.8" strokeLinecap="round" />
      </svg>

      {nodes.map(({ x, y, Icon, label, lx, ly, d }) => (
        <div key={label} className="animate-float-sm" style={{ "--d": d } as CSSProperties}>
          <span className="absolute rounded-[2px] border border-white bg-[#f7f7f7] text-black/80" style={{ left: u(lx), top: u(ly), padding: `${u(2)} ${u(3)}`, fontSize: u(7), lineHeight: 1 }}>
            {label}
          </span>
          <span
            className="absolute grid place-items-center rounded-full bg-gradient-to-b from-[#389cf6] to-[#266ba9] text-white shadow-[1px_1px_1px_rgb(0_0_0/0.25)] transition-transform duration-300 ease-[var(--ease-spring)] hover:scale-125"
            style={{ left: u(x), top: u(y), width: u(28), height: u(28), border: `${u(2.15)} solid #fff` }}
          >
            <Icon size="68%" weight="regular" />
          </span>
        </div>
      ))}

      <div
        className="group/list absolute left-1/2 -translate-x-1/2 rounded-[2.7px] border-[1.36px] border-white bg-[#f7f7f7] drop-shadow-[1.36px_1.36px_0.68px_rgb(0_0_0/0.25)]"
        style={{ top: u(110.4), width: u(189), height: u(156), marginLeft: u(0.5) }}
      >
        <span className="absolute left-1/2 -translate-x-1/2 rounded-full border border-[#38a1fe] bg-white" style={{ top: u(-4.4), width: u(5), height: u(5) }} />
        <div className="absolute flex items-end justify-between" style={{ left: u(9.6), top: u(7.6), width: u(168) }}>
          <span className="flex items-center text-black/70" style={{ gap: u(2), fontSize: u(9) }}>
            <ListDashes size={u(10)} />
            Action Items
          </span>
          <span className="rounded-full bg-[#2c7cc3] text-white" style={{ padding: `${u(2)} ${u(3)}`, fontSize: u(7), lineHeight: 1 }}>
            4 new
          </span>
        </div>
        <span className="absolute left-1/2 h-px -translate-x-1/2 bg-black/10" style={{ top: u(27.9), width: u(169.5) }} />
        {actions.map((a, i) => (
          <div
            key={a.t}
            className="absolute flex items-center justify-between rounded-[4px] border-[0.5px] border-black/5 bg-white transition-transform duration-300 hover:translate-x-0.5"
            style={{ left: u(8.6), top: u(34.6 + i * 25), width: u(169), padding: u(4), fontSize: u(7) }}
          >
            <span className="flex items-center" style={{ gap: u(2) }}>
              <SealCheck
                weight="fill"
                className="text-[#37a1ff] animate-[tick_0.6s_var(--ease-spring)_both]"
                style={{ width: u(10), height: u(10), animationDelay: `${0.4 + i * 0.25}s` }}
              />
              <span className="flex flex-col" style={{ gap: u(2), width: u(a.w + 6) }}>
                <span className="text-black">{a.t}</span>
                <span className="block origin-left rounded-full bg-[#b2d8fa] animate-[fill-bar_0.8s_var(--ease-out-expo)_both]" style={{ height: u(2), width: u(a.w), animationDelay: `${0.5 + i * 0.25}s` }} />
              </span>
            </span>
            <span className="text-black/70">{a.when}</span>
          </div>
        ))}
        <span
          className="absolute flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#3aa2ff] to-[#2c7cc5] text-white/95 shadow-[inset_2px_2px_4px_rgb(255_255_255/0.25)]"
          style={{ left: u(8.6), top: u(134.6), width: u(169), gap: u(3), padding: `${u(3)} ${u(8)}`, fontSize: u(7) }}
        >
          <ArrowsClockwise className="transition-transform duration-700 group-hover/list:rotate-180" style={{ width: u(8), height: u(8) }} />
          Sync to tools
        </span>
      </div>
    </>
  );
}

/* ---------- Section ---------- */

const cards = [
  {
    title: "Capture everything",
    body: "Automatically record your meetings without manually typing notes.",
    angle: 211.6,
    w: 384,
    Illustration: CaptureIllustration,
  },
  {
    title: "Understand what matters",
    body: "Get concise summaries, key decisions, and important discussion points in seconds.",
    angle: 132,
    w: 370,
    Illustration: UnderstandIllustration,
  },
  {
    title: "Keep work moving",
    body: "Turn conversations into clear action items and sync with tools your team already uses.",
    angle: 48.7,
    w: 370,
    Illustration: SyncIllustration,
  },
];

export function Features() {
  return (
    <section id="benefits" className="flex flex-col items-center gap-[34px] px-4 pb-[72px] pt-[80px] md:pb-[90px] md:pt-[100px]">
      <h2 className="section-title max-w-[522px] text-center text-ink" data-reveal>
        Turn every conversation into work you can act on.
      </h2>
      <div className="grid w-full max-w-[1214px] gap-4 rounded-[18px] border border-black/10 bg-panel p-2.5 md:grid-cols-3">
        {cards.map(({ title, body, angle, w, Illustration }, i) => (
          <article
            key={title}
            className="group flex flex-col gap-2 overflow-hidden rounded-[8px] border-[3px] border-white p-1.5 transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(30_110_200/0.45)]"
            style={{ backgroundImage: `linear-gradient(${angle}deg, #37a1ff 10%, #f7f7f7 90%)`, "--d": `${i * 120}ms` } as CSSProperties}
            data-reveal
          >
            <div className="scale-box anim-scope overflow-hidden rounded-[2px] bg-surface" style={{ aspectRatio: `${w} / 275`, "--w": w } as CSSProperties}>
              <div className="scale-inner">
                <Illustration />
              </div>
            </div>
            <div className="flex flex-col gap-[5px] rounded-[2px] bg-surface px-2.5 py-4">
              <h3 className="text-[18px] text-black">{title}</h3>
              <p className="text-[16px] leading-[22px] text-black/80">{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
