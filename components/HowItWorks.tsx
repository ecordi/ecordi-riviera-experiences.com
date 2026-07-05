interface Props { t: Record<string, any>; }
export default function HowItWorks({ t }: Props) {
  return (
    <section className="pt-[clamp(20px,2.5vw,28px)] pb-[clamp(8px,2vw,16px)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[640px] mb-[clamp(36px,5vw,60px)]">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-teal mb-[14px]">{t.howEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(30px,4.2vw,50px)] leading-[1.06] tracking-[-.01em] mb-4 text-balance">{t.howTitle}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(16px,2.4vw,28px)]">
          {t.steps.map((s: any, i: number) => (
            <div key={i} data-reveal className="relative bg-paper border border-line rounded-[6px] p-[clamp(22px,2.6vw,32px)] overflow-hidden">
              <span aria-hidden="true" className="absolute top-[14px] right-[18px] font-serif text-[clamp(44px,5vw,64px)] font-medium text-navy/[0.06] leading-none">{s.n}</span>
              <p className="font-mono text-[12px] tracking-[.18em] uppercase text-teal mb-3">Step {s.n}</p>
              <h3 className="font-serif font-medium text-[20px] leading-[1.15] mb-2">{s.title}</h3>
              <p className="text-[14.5px] leading-[1.55] text-navy/72">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
