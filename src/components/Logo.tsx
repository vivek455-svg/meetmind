export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`text-[24px] leading-none ${light ? "text-white" : "text-black/70"} ${className}`}>
      Meet<span className="font-serif italic">mind</span>
    </span>
  );
}
