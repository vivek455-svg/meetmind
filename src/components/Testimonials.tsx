import type { CSSProperties } from "react";
import { Pic } from "./Pic";

type T = { quote: string; name: string; role: string; featured?: boolean };

const columns: T[][] = [
  [
    {
      quote: "“I used to spend the first ten minutes after every call rewriting my notes. Now the summary is waiting in Notion before I’ve even closed the tab.”",
      name: "Priya Raman",
      role: "Product Manager, Loopstack",
    },
    {
      quote: "“Decisions don’t get lost in recordings anymore. Anyone who missed the meeting can catch up in under a minute — and we’ve cut our follow-up meetings by almost half.”",
      name: "Daniel Mensah",
      role: "Engineering Lead, Brightlane",
    },
  ],
  [
    {
      quote: "“Meetmind is the first tool our whole team adopted without being asked. Action items land in Slack with an owner and a due date — nothing slips through the cracks.”",
      name: "Sarah Chen",
      role: "COO, Northwind Labs",
      featured: true,
    },
    { quote: "“Setup took two minutes. It just joins our calls and does the work.”", name: "Arjun Kapoor", role: "Founder, Fieldnote" },
  ],
  [
    {
      quote: "“Privacy was our biggest concern. Meetmind’s controls made it an easy yes for our security review.”",
      name: "James Whitaker",
      role: "CTO, Ledgerly",
    },
    {
      quote: "“Our customer calls finally turn into tickets automatically. The summaries are accurate enough that I trust them over my own notes.”",
      name: "Maria Lopez",
      role: "Head of CS, Orbitly",
    },
  ],
];

const stats = [
  { value: 6, suffix: " hrs", label: "saved per person, every week" },
  { value: 92, suffix: "%", label: "action items completed on time" },
  { value: 12, suffix: "k+", label: "meetings summarized every day" },
  { value: 4.5, suffix: "/5", label: "average rating on Product Hunt", decimals: 1 },
];

function Stars({ white }: { white?: boolean }) {
  return (
    <span className="flex gap-[2px]" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 22 22"
          className="size-[22px] transition-transform duration-300 ease-[var(--ease-spring)] group-hover:scale-110"
          style={{ transitionDelay: `${i * 40}ms` }}
          aria-hidden
        >
          <path d="M11 1.65L13.75 7.56L20.21 8.39L15.4 12.79L16.64 19.11L11 15.95L5.36 19.11L6.6 12.79L1.79 8.39L8.25 7.56L11 1.65Z" fill={white ? "#fff" : "#037EEB"} />
        </svg>
      ))}
    </span>
  );
}

function Card({ quote, name, role, featured }: T) {
  return (
    <figure
      className={`group flex flex-col gap-5 rounded-[8px] border border-white p-6 transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 ${
        featured
          ? "bg-[linear-gradient(140deg,#007cea_0%,#37a1ff_100%)] hover:shadow-[0_24px_48px_-20px_rgb(0_110_220/0.6)]"
          : "bg-page hover:bg-white hover:shadow-[0_18px_40px_-24px_rgb(0_0_0/0.25)]"
      }`}
    >
      <Stars white={featured} />
      <blockquote className={featured ? "text-[20px] font-light leading-[30px] text-white/95" : "text-[16px] leading-6 text-black/80"}>{quote}</blockquote>
      <span className={`h-px w-full ${featured ? "bg-white/25" : "bg-black/[0.08]"}`} />
      <figcaption className="flex items-center gap-3">
        <span className="relative size-10 shrink-0 overflow-hidden rounded-full">
          <Pic name="avatar" alt="" sizes="40px" tint={featured ? "#5fb0ff" : "#dfe6ee"} />
        </span>
        <span className="flex flex-col gap-0.5">
          <span className={`text-[16px] ${featured ? "text-white" : "text-black/93"}`}>{name}</span>
          <span className={`text-[14px] ${featured ? "text-white/75" : "text-black/55"}`}>{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="flex flex-col items-center gap-12 px-4 pb-[72px] pt-[80px] md:pb-[90px] md:pt-[100px]">
      <h2 className="section-title max-w-[560px] text-center text-ink" data-reveal>
        Loved by teams who are done taking notes.
      </h2>

      <div className="flex w-full max-w-[1200px] flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2 rounded-[18px] border border-black/5 bg-panel p-2.5 md:grid-cols-4" data-reveal>
          {stats.map((s) => (
            <div key={s.label} className="group flex flex-col gap-1 rounded-[8px] border border-white bg-page px-5 py-6 transition-colors duration-300 hover:bg-white">
              <p className="text-[clamp(32px,4vw,40px)] leading-[47px] text-blue-600">
                <span data-count={s.value} data-decimals={s.decimals ?? 0}>
                  {s.decimals ? s.value.toFixed(s.decimals) : s.value}
                </span>
                {s.suffix}
              </p>
              <p className="text-[16px] leading-[22px] text-black/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 rounded-[18px] border border-black/5 bg-panel p-2.5 md:grid-cols-3">
          {columns.map((col, ci) => (
            <div key={ci} className={`flex flex-col ${ci === 1 ? "gap-4" : "gap-3"}`}>
              {col.map((t, ti) => (
                <div key={t.name} data-reveal style={{ "--d": `${ci * 110 + ti * 140}ms` } as CSSProperties}>
                  <Card {...t} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
