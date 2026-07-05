interface Props { t: Record<string, any>; faqOpen: number; onToggle: (i: number) => void; }
export default function FAQ({ t, faqOpen, onToggle }: Props) {
  return (
    <section className="py-[clamp(28px,3.5vw,40px)] bg-sand-soft">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[640px] mb-[clamp(28px,3.5vw,44px)]">
          <h2 className="font-serif font-medium text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-.01em] mb-4 text-balance">{t.faqTitle}</h2>
        </div>
        <div className="max-w-[860px]">
          {t.faqs.map((f: any, i: number) => {
            const open = faqOpen === i;
            return (
              <div key={i} data-reveal className="border-b border-line">
                <button type="button" id={`faq-b-${i}`} aria-expanded={open} aria-controls={`faq-p-${i}`} onClick={() => onToggle(i)} className="w-full text-left bg-transparent border-none py-[18px] pr-[40px] flex items-center gap-[14px] cursor-pointer focus:outline-2 focus:outline-coral focus:outline-offset-[2px]">
                  <span className="flex-shrink-0 w-[26px] h-[26px] inline-flex items-center justify-center text-[22px] font-light text-coral transition-transform duration-250" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                  <span className="font-serif font-medium text-[18px] leading-[1.25] text-navy">{f.q}</span>
                </button>
                <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] opacity-100 pb-[18px]" : "max-h-0 opacity-0"}`}>
                  <p className="pl-[40px] text-[15px] leading-[1.6] text-navy/72">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
