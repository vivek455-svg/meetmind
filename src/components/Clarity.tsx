import type { CSSProperties } from "react";
import { Note, Notepad, NotePencil } from "@phosphor-icons/react/dist/ssr";
import { Pic } from "./Pic";

// [right, top] of the 15px pixel squares in each card's top-right corner (from Figma)
const pixels = [
  [[75.67, 0.4], [60.67, 15.4], [45.67, 30.4], [15.67, 30.4], [0.67, 45.4], [30.67, 15.4], [75.67, 30.4], [60.67, 45.4], [45.67, 60.4], [30.67, 45.4], [15.67, 60.4], [0.67, 75.4]],
  [[60.33, 0.4], [75.33, 16.4], [60.33, 31.4], [45.33, 16.4], [30.33, 1.4], [45.33, 46.4], [30.33, 61.4], [15.33, 46.4], [30.33, 31.4], [15.33, 16.4], [0.33, 31.4], [60.33, 61.4]],
  [[15, 1.4], [15, 30.4], [0, 45.4], [30, 45.4], [0, 16.4], [30, 16.4], [45, 31.4], [15, 60.4], [0, 75.4]],
];

const cards = [
  {
    title: "Automatic Meeting Notes",
    body: "Meetmind captures the conversation and creates structured notes you can review, edit, and share.",
    Icon: NotePencil,
    radius: "rounded-b-[6px] rounded-tr-[6px]",
  },
  {
    title: "AI-Powered Summaries",
    body: "Get a concise summary of the discussion, important topics, and decisions — ready when your meeting ends.",
    Icon: Notepad,
    radius: "rounded-[6px]",
  },
  {
    title: "Action Items",
    body: "Meetmind identifies action items so your team knows what needs to happen, who owns it, and what comes next.",
    Icon: Note,
    radius: "rounded-b-[6px] rounded-tl-[6px]",
  },
];

export function Clarity() {
  return (
    <section className="relative flex flex-col items-center gap-[34px] overflow-hidden bg-gradient-to-b from-[#007cea] to-page px-4 py-[72px] md:py-[90px]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[686px] bg-[linear-gradient(180deg,rgb(0_0_0/0.25),rgb(102_102_102/0))]" />

      <h2 className="section-title relative max-w-[636px] text-center text-white/93" data-reveal>
        From conversation to clarity without extra efforts.
      </h2>

      <div className="relative flex w-full max-w-[1030px] flex-col gap-2">
        <div
          className="group relative aspect-[1030/597] w-full overflow-hidden rounded-t-[6px] border-[5px] border-white/30 bg-white"
          data-reveal="scale"
        >
          <Pic
            name="clarityVideo"
            alt="Meetmind summarizing a meeting next to the speaker"
            sizes="(min-width: 1030px) 1030px, 100vw"
            crop={{ height: "115.4%", top: "-4.9%" }}
            imgClassName="transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.025]"
          />
          {/* pulse rings around the play button baked into the still */}
          <span aria-hidden className="pointer-events-none absolute left-[48.3%] top-[55%] size-[7%] -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inset-0 rounded-full border-2 border-white/70 animate-[ping_2.4s_ease-out_infinite]" />
            <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-[ping_2.4s_ease-out_infinite_1.2s]" />
          </span>
        </div>

        <div className="grid gap-1 md:grid-cols-3">
          {cards.map(({ title, body, Icon, radius }, i) => (
            <article
              key={title}
              className={`group relative flex h-[220px] flex-col justify-between overflow-hidden border-[5px] border-white/30 bg-gradient-to-b from-white to-blue-100 px-2.5 py-4 md:h-[280px] ${radius}`}
              data-reveal
              style={{ "--d": `${120 + i * 110}ms` } as CSSProperties}
            >
              <span className="icon-tile size-[45px] text-white transition-transform duration-500 ease-[var(--ease-spring)] group-hover:-rotate-6 group-hover:scale-110">
                <Icon size={27} weight="regular" />
              </span>
              <div className="relative flex flex-col gap-1.5">
                <h3 className="text-[18px] text-black">{title}</h3>
                <p className="text-[16px] leading-[22px] text-black/80">{body}</p>
              </div>
              {pixels[i].map(([r, t], j) => (
                <span
                  key={j}
                  aria-hidden
                  className="absolute size-[15px] bg-[#6cace5] transition-[opacity,transform] duration-500 group-hover:opacity-40"
                  style={{ right: r, top: t, transitionDelay: `${j * 30}ms` }}
                />
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
