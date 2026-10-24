import type { CSSProperties } from "react";
import { u } from "@/lib/u";
import { Pic } from "./Pic";

const W = 779;

const lines: { t: string; kind?: "h" | "li" | "gap" }[] = [
  { t: "Project Kickoff – Website Redesign", kind: "h" },
  { t: "", kind: "gap" },
  { t: "Key Discussion", kind: "h" },
  { t: "Finalized the homepage redesign direction.", kind: "li" },
  { t: "Agreed to prioritize a clean, modern interface.", kind: "li" },
  { t: "Focus on improving onboarding and conversion rates.", kind: "li" },
  { t: "", kind: "gap" },
  { t: "Decisions Made", kind: "h" },
  { t: "Use a minimal visual style with subtle animations.", kind: "li" },
  { t: "Launch MVP by August 15.", kind: "li" },
  { t: "", kind: "gap" },
  { t: "Action Items", kind: "h" },
  { t: "Sarah: Deliver updated wireframes by Friday.", kind: "li" },
  { t: "Alex: Prepare UI components and design system.", kind: "li" },
  { t: "David: Review copy....", kind: "li" },
];

function Control({ icon, x, wide, red }: { icon: string; x: number; wide?: boolean; red?: boolean }) {
  return (
    <span
      className={`absolute grid -translate-x-1/2 place-items-center rounded-full transition-transform duration-300 ease-[var(--ease-spring)] hover:scale-110 ${
        red ? "bg-[#f84448] hover:bg-[#e13438]" : "bg-[#6f6f6f] hover:bg-[#5d5d5d]"
      }`}
      style={{ left: `calc(50% + ${u(x)})`, top: u(139.6), width: u(wide ? 36.6 : 27.5), height: u(27.5) }}
    >
      <img src={icon} alt="" style={{ width: u(red ? 18.3 : 14.9), height: u(red ? 18.3 : 14.9) }} />
    </span>
  );
}

function SyncIcon({ x, children, bg = "#42a6ff", delay }: { x: number; children: React.ReactNode; bg?: string; delay: number }) {
  return (
    <span
      className="animate-pop absolute grid place-items-center overflow-hidden rounded-full shadow-[-2px_-2px_2px_rgb(198_198_198/0.25)] transition-transform duration-300 ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:scale-110"
      style={{ left: u(x), top: u(296.4), width: u(27), height: u(27), background: bg, border: `${u(1.56)} solid #fff`, "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </span>
  );
}

export function HeroMock() {
  return (
    <div className="scale-box anim-scope" style={{ aspectRatio: `${W} / 420`, "--w": W } as CSSProperties}>
      <div
        className="scale-inner overflow-hidden bg-white shadow-[0_30px_80px_-20px_rgb(30_80_140/0.25)]"
        style={{ borderRadius: u(13.7), border: `${u(3.4)} solid #fff` }}
      >
        {/* window dots */}
        <div className="absolute flex" style={{ left: u(9), top: u(9), gap: u(6.9) }}>
          {["#fc4646", "#fcaf24", "#28c131"].map((c) => (
            <span key={c} className="rounded-full" style={{ background: c, width: u(11.4), height: u(11.4) }} />
          ))}
        </div>

        <div className="absolute inset-x-0 overflow-hidden bg-[#f4f4f4]" style={{ top: u(26.3), height: u(419), borderRadius: u(13.7) }}>
          {/* Video tiles */}
          <div
            className="group absolute overflow-hidden"
            style={{ left: u(20.6), top: u(16), width: u(201.4), height: u(177.4), borderTopLeftRadius: u(9.2), border: `${u(3.4)} solid rgb(255 255 255/0.7)` }}
          >
            <Pic name="cam1" alt="Meeting participant" sizes="(min-width: 779px) 202px, 26vw" priority imgClassName="transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div
            className="group absolute overflow-hidden"
            style={{ left: u(221.9), top: u(16.2), width: u(201.2), height: u(177.3), borderTopRightRadius: u(9.2), border: `${u(3.4)} solid rgb(255 255 255/0.7)` }}
          >
            <Pic name="cam2" alt="Meeting participant" sizes="(min-width: 779px) 202px, 26vw" priority imgClassName="transition-transform duration-700 group-hover:scale-105" />
            {/* active speaker ring */}
            <span className="pointer-events-none absolute inset-0 animate-[beam_2.4s_ease-in-out_infinite] ring-2 ring-inset ring-[#37a1ff]/80" />
          </div>
          <div
            className="group absolute overflow-hidden"
            style={{ left: u(20.7), top: u(194.6), width: u(402.4), height: u(176.3), borderBottomLeftRadius: u(9.2), borderBottomRightRadius: u(9.2), border: `${u(2.3)} solid rgb(255 255 255/0.7)` }}
          >
            <Pic
              name="cam3"
              alt="Meeting participant"
              sizes="(min-width: 779px) 403px, 52vw"
              priority
              crop={{ height: "127.74%", top: "-7.14%" }}
              imgClassName="transition-transform duration-700 group-hover:scale-105"
            />
            <Control icon="/icons/stretch.svg" x={-68.4} />
            <Control icon="/icons/micoff.svg" x={-36.4} />
            <Control icon="/icons/hangup.svg" x={0.2} wide red />
            <Control icon="/icons/video.svg" x={36.9} />
            <Control icon="/icons/settings.svg" x={68.9} />
            <span
              className="absolute grid place-items-center rounded-full bg-[#37a1ff] shadow-[inset_-3px_-3px_4px_rgb(255_255_255/0.25),inset_3px_3px_4px_rgb(255_255_255/0.25)]"
              style={{ right: u(6.4), top: u(6.9), width: u(27.5), height: u(27.5) }}
            >
              <img src="/icons/linear.svg" alt="" style={{ width: u(14.9), height: u(14.9) }} />
            </span>
          </div>

          {/* Live summary panel */}
          <div
            className="absolute overflow-hidden bg-[#f7f7f7]"
            style={{ left: u(431.4), top: u(16), width: u(327.3), height: u(354.8), borderRadius: u(9.2), border: `${u(3.4)} solid rgb(255 255 255/0.7)` }}
          >
            <p className="absolute text-black/80" style={{ left: u(9), top: u(11.3), fontSize: u(12.4) }}>
              Taking Summary
              <span className="inline-block animate-[caret_1s_steps(1)_infinite]">...</span>
            </p>
            <div className="absolute text-black/55" style={{ left: u(9), top: u(36), width: u(286), fontSize: u(10.37), lineHeight: u(13.48) }}>
              {lines.map((l, i) => (
                <p
                  key={i}
                  className={`animate-rise ${l.kind === "h" ? "font-medium text-black/65" : ""} ${l.kind === "li" ? "flex" : ""}`}
                  style={{ "--d": `${1000 + i * 110}ms`, minHeight: u(13.48) } as CSSProperties}
                >
                  {l.kind === "li" && <span className="shrink-0 text-center" style={{ width: u(14) }}>•</span>}
                  {l.t}
                </p>
              ))}
            </div>

            <div className="absolute inset-x-0 h-px bg-black/[0.07]" style={{ top: u(252) }} />
            <p className="absolute text-black/75" style={{ left: u(9), top: u(261.2), fontSize: u(12.4) }}>
              Syncing to Workspace...
            </p>

            {/* dotted track with travelling packet */}
            <div className="absolute" style={{ left: u(55.6), top: u(309.4), width: u(160), height: u(2) }}>
              <svg className="absolute inset-0 size-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 160 2">
                <line x1="0" y1="1" x2="160" y2="1" stroke="#9fcfff" strokeWidth="1" className="dash-flow" />
              </svg>
              <span
                className="absolute left-0 top-1/2 rounded-full bg-[#37a1ff] shadow-[0_0_6px_#37a1ff] animate-[packet_2.8s_var(--ease-out-expo)_infinite]"
                style={{ width: u(5), height: u(5) }}
              />
            </div>

            <SyncIcon x={28.7} delay={1900}>
              <img src="/icons/notes.svg" alt="" style={{ width: u(18.7), height: u(18.7) }} />
            </SyncIcon>
            <SyncIcon x={84.7} delay={2000}>
              <img src="/icons/images.svg" alt="" style={{ width: u(17.6), height: u(17.6) }} />
            </SyncIcon>
            <SyncIcon x={138.6} delay={2100}>
              <img src="/icons/invoice.svg" alt="" style={{ width: u(16.6), height: u(16.6) }} />
            </SyncIcon>
            <SyncIcon x={216.5} bg="#fff" delay={2200}>
              <span className="relative block size-full">
                <Pic name="appWhatsapp" alt="WhatsApp" sizes="28px" tint="#fff" imgClassName="!object-contain" />
              </span>
            </SyncIcon>
            <SyncIcon x={241.2} bg="#f1f1f1" delay={2300}>
              <img src="/icons/slack.svg" alt="Slack" style={{ width: u(15), height: u(15) }} />
            </SyncIcon>
            <SyncIcon x={261} bg="#fff" delay={2400}>
              <span className="relative block size-full">
                <Pic name="appTelegram" alt="Telegram" sizes="28px" tint="#fff" imgClassName="!object-contain" />
              </span>
            </SyncIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
