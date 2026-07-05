interface Props { t: Record<string, any>; }
export default function WhySection({ t }: Props) {
  return (
    <section id="why" className="py-[clamp(72px,10vw,128px)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[640px] mb-[clamp(36px,5vw,60px)]">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-coral mb-[14px]">{t.whyEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(30px,4.2vw,50px)] leading-[1.06] tracking-[-.01em] mb-4 text-balance">{t.whyTitle}</h2>
          <p className="text-[17px] text-navy/72 max-w-[560px]">{t.whySub}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(16px,2.4vw,28px)]">
          {t.whyItems.map((w: any, i: number) => (
            <div key={i} data-reveal className="bg-paper border border-line rounded-[6px] p-[clamp(22px,2.6vw,32px)]">
              <span className="text-[22px] mb-3 block">{w.icon}</span>
              <h3 className="font-serif font-medium text-[20px] leading-[1.15] mb-2">{w.title}</h3>
              <p className="text-[14.5px] leading-[1.55] text-navy/72">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
