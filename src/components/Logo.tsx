export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-[24px] leading-none text-black/70 ${className}`}>
      Meet<span className="font-serif italic">mind</span>
    </span>
  );
}
