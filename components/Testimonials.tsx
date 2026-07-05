interface Props { t: Record<string, any>; }
export default function Testimonials({ t }: Props) {
  return (
    <section className="py-[clamp(28px,3.5vw,40px)] bg-sand-soft">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[640px] mb-[clamp(28px,3.5vw,44px)]">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-coral mb-[14px]">{t.tsEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-.01em] mb-4 text-balance">{t.tsTitle}</h2>
          <p className="text-[13.5px] text-navy/55">{t.tsNote}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(16px,2vw,26px)]">
          {t.testimonials.map((ts: any, i: number) => (
            <div key={i} data-reveal className="bg-paper border border-line rounded-[6px] p-[clamp(22px,2.6vw,32px)]">
              <p className="font-serif text-[18px] leading-[1.45] italic text-navy/88 mb-4">&ldquo;{ts.quote}&rdquo;</p>
              <p className="text-[12.5px] font-semibold tracking-[.06em] uppercase text-navy/50">{ts.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
