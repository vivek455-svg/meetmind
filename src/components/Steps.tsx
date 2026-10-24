import type { CSSProperties } from "react";
import { Biohazard, Note, VideoConference } from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    n: "01",
    title: "Meet like you normally do",
    body: "Start your meeting as usual. Meetmind quietly captures the conversation in the background.",
    Icon: VideoConference,
    h: 280,
  },
  {
    n: "02",
    title: "Get the important stuff",
    body: "It turns your conversation into a clear summary with decisions, key points, and action items.",
    Icon: Biohazard,
    h: 349,
  },
  {
    n: "03",
    title: "Get back to work",
    body: "Everything is organized and synced to your workspace so your team can move forward.",
    Icon: Note,
    h: 416,
    dark: true,
  },
];

export function Steps() {
  return (
    <section id="how-it-works" className="flex flex-col items-center gap-[34px] px-4 pb-[72px] pt-[80px] md:pb-[90px] md:pt-[100px]">
      <h2 className="section-title max-w-[522px] text-center text-ink" data-reveal>
        From meeting to momentum in three simple steps.
      </h2>
      <ol className="flex w-full max-w-[1200px] flex-col gap-2 md:flex-row md:items-end" data-reveal="group">
        {steps.map(({ n, title, body, Icon, h, dark }, i) => (
          <li
            key={n}
            className="step-card group relative flex min-h-[230px] flex-1 flex-col justify-between overflow-hidden rounded-[6px] border-[3px] border-white/50 px-2.5 py-4 transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgb(40_110_180/0.5)] md:h-[var(--h)]"
            style={
              {
                "--h": `${h}px`,
                "--d": `${i * 160}ms`,
                backgroundImage: dark
                  ? "linear-gradient(2.5deg, #3f8cd1 2%, #94c1ea 98%)"
                  : "linear-gradient(180deg, #fff 0%, #d9edff 100%)",
              } as CSSProperties
            }
          >
            <Icon
              size={dark ? 72 : 60}
              weight="light"
              aria-hidden
              className={`transition-transform duration-700 ease-[var(--ease-spring)] group-hover:-translate-y-1 group-hover:rotate-[-8deg] ${dark ? "text-white/45" : "text-[#2870b1]/30"}`}
            />
            <div className="flex flex-col gap-1.5">
              <span className={`step-pill self-start ${dark ? "bg-page text-black/90" : "bg-blue-600 text-white/90"}`}>Step {n}</span>
              <h3 className={`text-[18px] ${dark ? "text-white" : "text-black"}`}>{title}</h3>
              <p className={`text-[16px] leading-[22px] ${dark ? "text-white/80" : "text-black/80"}`}>{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
