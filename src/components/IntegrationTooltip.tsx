import type { CSSProperties } from "react";

export const nodeCls =
  "grid place-items-center rounded-full border-[3px] border-white bg-page shadow-[0_4px_4px_rgb(0_0_0/0.25),inset_-2px_-2px_6px_rgb(0_0_0/0.2),inset_2px_2px_6px_rgb(0_0_0/0.2)] outline-none transition-[transform,opacity] duration-500 ease-[var(--ease-spring)]";

export function Tooltip({ name, detail, above, className = "", style }: { name: string; detail: string; above?: boolean; className?: string; style?: CSSProperties }) {
  return (
    <div
      className={`rounded-[6px] px-1 ${above ? "bg-gradient-to-t pb-3.5 pt-1" : "bg-gradient-to-b pb-1 pt-3.5"} from-[#8fbee8] to-[#418dd1] ${className}`}
      style={style}
    >
      <svg
        viewBox="0 0 27 26"
        className={`absolute left-1/2 h-[26px] w-[26.5px] -translate-x-1/2 ${above ? "bottom-[-17px] rotate-180" : "top-[-17px]"}`}
        aria-hidden
      >
        <path d="M0 26L13.5 0L26.5 26H0Z" fill="#8CBCE7" />
      </svg>
      <div className="relative rounded-[3px] bg-white px-2.5 py-3 text-left">
        <p className="mb-1 text-[0.8em] font-medium text-[#007cea]">{name}</p>
        <p className="text-black/75">{detail}</p>
      </div>
    </div>
  );
}
