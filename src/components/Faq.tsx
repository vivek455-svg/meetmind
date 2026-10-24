"use client";

import { useId, useState } from "react";

const qa = [
  {
    q: "How does Meetmind join my meetings?",
    a: "Connect your calendar once and Meetmind automatically joins scheduled calls on Google Meet, Zoom and Microsoft Teams. It records, transcribes and builds your summary in the background — no extensions or manual setup per meeting.",
  },
  {
    q: "Is my meeting data private and secure?",
    a: "Yes. Recordings and transcripts are encrypted in transit and at rest, access follows your workspace permissions, and you control how long data is kept. We never use your meetings to train models.",
  },
  {
    q: "Which tools can Meetmind sync with?",
    a: "Summaries and action items sync to Slack, Notion, Gmail, Google Drive, Linear, Jira and more, so notes land where your team already works.",
  },
  {
    q: "How accurate are the summaries and action items?",
    a: "Meetmind identifies decisions, owners and due dates with high accuracy. Every summary is editable, so you can tweak anything before sharing.",
  },
  {
    q: "Does it work with multiple languages?",
    a: "Meetmind transcribes and summarizes meetings in 30+ languages, including conversations that switch languages mid-call.",
  },
  {
    q: "Can I edit notes before sharing them with my team?",
    a: "Absolutely. Review, edit and approve every summary before it’s synced, or turn on auto-share for trusted meeting types.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every plan starts with a 14-day free trial. No credit card required, and setup takes about two minutes.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div
      className={`rounded-[8px] border px-6 transition-[background-color,border-color,box-shadow] duration-500 ${
        open
          ? "border-[#37a1ff]/45 bg-gradient-to-b from-white to-blue-100 shadow-[0_8px_12px_rgb(51_128_229/0.08)]"
          : "border-black/[0.06] bg-surface hover:border-black/15 hover:bg-white"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="group flex w-full items-center gap-4 py-5 text-left text-[18px] text-ink"
        >
          <span className="flex-1">{q}</span>
          <span
            className={`relative grid size-7 shrink-0 place-items-center rounded-[6px] border transition-all duration-500 ease-[var(--ease-spring)] ${
              open
                ? "rotate-180 border-[#37a1ff] bg-[#37a1ff] text-white shadow-[inset_-4px_-4px_4px_rgb(255_255_255/0.25),inset_4px_4px_4px_rgb(255_255_255/0.25)]"
                : "border-black/[0.08] bg-white text-[#37a1ff] group-hover:scale-110"
            }`}
            aria-hidden
          >
            <svg viewBox="0 0 14 14" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M2 7h10" />
              <path d="M7 2v10" className={`origin-center transition-transform duration-500 ${open ? "scale-y-0" : ""}`} />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-expo)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-[16px] leading-6 text-black/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col gap-2.5">
      {qa.map((item, i) => (
        <Item key={item.q} {...item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  );
}
