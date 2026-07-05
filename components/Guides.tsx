interface Props { t: Record<string, any>; onNav: (id: string) => void; }
export default function Guides({ t, onNav }: Props) {
  const images = ["/images/guide-nayarit.jpg", "/images/guide-pv.jpg", "/images/guide-maya.jpg"];
  return (
    <section className="py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[640px] mb-[clamp(28px,3.5vw,44px)]">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-teal mb-[14px]">{t.guidesEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-.01em] mb-4 text-balance">{t.guidesTitle}</h2>
          <p className="text-[16.5px] text-navy/72 max-w-[520px]">{t.guidesSub}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(16px,2vw,26px)]">
          {t.guidesList.map((g: any, i: number) => (
            <a key={i} href="#guides" onClick={(e) => { e.preventDefault(); onNav("guides"); }} className="group block bg-paper border border-line rounded-[6px] overflow-hidden no-underline hover:shadow-[0_20px_40px_-28px_rgba(7,36,51,.35)] transition-shadow duration-300">
              <div role="img" aria-label={g.alt} className="relative aspect-[16/9] overflow-hidden">
                <img src={images[i]} alt={g.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(7,36,51,.35)_100%)]" />
              </div>
              <div className="p-5">
                <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-teal font-semibold">{g.category}</span>
                <h3 className="font-serif font-medium text-[19px] leading-[1.15] mt-1 mb-2 text-navy group-hover:text-coral transition-colors">{g.title}</h3>
                <p className="text-[14px] leading-[1.55] text-navy/72 mb-3">{g.summary}</p>
                <span className="text-[12.5px] font-semibold text-teal">{t.readGuide} <span aria-hidden="true">&rarr;</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
