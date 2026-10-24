"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page. Elements opt in with:
 *  - data-reveal            → fade/slide in once when scrolled into view
 *  - .anim-scope            → looping illustration animations only play while on screen
 *  - data-count="1234"      → number counts up once revealed
 */
export function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const decimals = Number(el.dataset.decimals ?? 0);
      if (Number.isNaN(target) || reduce) return;
      const start = performance.now();
      const dur = 1400;
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = (target * eased).toFixed(decimals);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const once = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          once.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    const live = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.target.classList.toggle("is-in", e.isIntersecting);
      },
      { rootMargin: "80px 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => once.observe(el));
    document.querySelectorAll(".anim-scope").forEach((el) => live.observe(el));

    return () => {
      once.disconnect();
      live.disconnect();
    };
  }, []);

  return null;
}
