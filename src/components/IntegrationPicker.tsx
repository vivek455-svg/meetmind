"use client";

import { useState, type ReactNode } from "react";
import { nodeCls, Tooltip } from "./IntegrationTooltip";

type Item = { name: string; detail: string; icon: ReactNode };

export function IntegrationPicker({ tools, defaultName }: { tools: Item[]; defaultName: string }) {
  const [active, setActive] = useState(defaultName);
  const current = tools.find((t) => t.name === active) ?? tools[0];

  return (
    <>
      <div className="flex max-w-[560px] flex-wrap justify-center gap-4" data-reveal role="tablist" aria-label="Integrations">
        {tools.map((t) => {
          const on = t.name === active;
          return (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={on}
              aria-label={t.name}
              onMouseEnter={() => setActive(t.name)}
              onFocus={() => setActive(t.name)}
              onClick={() => setActive(t.name)}
              className={`${nodeCls} cursor-pointer p-2.5 ${on ? "-translate-y-1 scale-110" : "opacity-70 hover:opacity-100"}`}
            >
              <span className="block size-10">{t.icon}</span>
            </button>
          );
        })}
      </div>
      <div className="relative mt-2 w-full max-w-[288px] text-[16px] leading-[1.35]" role="tabpanel" aria-live="polite">
        {/* key forces a fresh enter animation each time the selection changes */}
        <Tooltip key={current.name} name={current.name} detail={current.detail} className="tip-swap relative w-full" />
      </div>
    </>
  );
}
