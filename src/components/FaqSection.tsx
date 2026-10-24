import { Faq } from "./Faq";

export function FaqSection() {
  return (
    <section id="faq" className="flex justify-center px-4 py-[72px] md:py-[100px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col justify-between gap-8 lg:w-[400px] lg:shrink-0">
          <h2 className="section-title text-ink" data-reveal>
            Questions? We’ve got answers.
          </h2>
          <div
            className="hidden flex-col items-start gap-3 rounded-[8px] border border-white bg-gradient-to-b from-white to-blue-100 p-6 lg:flex"
            data-reveal
          >
            <p className="text-[18px] text-black">Still have questions?</p>
            <p className="text-[16px] leading-6 text-black/80">
              Can’t find what you’re looking for? Our team usually replies within a few hours.
            </p>
            <a href="mailto:hello@meetmind.app" className="btn-primary text-[15px]">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex-1" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <Faq />
        </div>
        <div className="flex flex-col items-start gap-3 rounded-[8px] border border-white bg-gradient-to-b from-white to-blue-100 p-6 lg:hidden">
          <p className="text-[18px] text-black">Still have questions?</p>
          <p className="text-[16px] leading-6 text-black/80">Can’t find what you’re looking for? Our team usually replies within a few hours.</p>
          <a href="mailto:hello@meetmind.app" className="btn-primary text-[15px]">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
