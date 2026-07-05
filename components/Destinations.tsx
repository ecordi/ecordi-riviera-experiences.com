interface Props { t: Record<string, any>; isMobile: boolean; onNav: (id: string) => void; setDestFilter: (d: string) => void; }
export default function Destinations({ t, isMobile, onNav, setDestFilter }: Props) {
  return (
    <section id="destinations" className="py-[clamp(72px,10vw,128px)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[680px] mb-[clamp(36px,5vw,60px)]">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-coral mb-[14px]">{t.destEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(30px,4.4vw,52px)] leading-[1.07] tracking-[-.01em] mb-4 text-balance">{t.destTitle}</h2>
          <p className="text-[17px] text-navy/72 max-w-[560px]">{t.destSub}</p>
        </div>
        <div className={`grid gap-[clamp(16px,2.4vw,28px)] ${isMobile ? "grid-cols-1" : "grid-cols-[1.55fr_1fr]"}`}>
          <article data-reveal className="relative rounded-[6px] overflow-hidden min-h-[clamp(380px,46vw,520px)] flex flex-col justify-end text-white shadow-[0_30px_60px_-36px_rgba(7,36,51,.5)]">
            <img src="/images/dest-nayarit.jpg" alt="Punta Mita and Banderas Bay, Riviera Nayarit" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_32%,rgba(7,28,40,.86)_100%)]" />
            <div className="relative p-[clamp(24px,3vw,40px)]">
              <span className="inline-block font-mono text-[11px] tracking-[.18em] uppercase text-[#f1c9b3] bg-[rgba(216,91,57,.22)] border border-[rgba(241,201,179,.4)] px-[11px] py-[5px] rounded-[3px] mb-4">{t.flagship}</span>
              <h3 className="font-serif font-medium text-[clamp(28px,3.6vw,42px)] leading-[1.05] mb-3">Riviera Nayarit<br/>& Puerto Vallarta</h3>
              <p className="text-[15.5px] leading-[1.55] text-white/88 max-w-[520px] mb-[18px]">{t.nayaritDesc}</p>
              <div className="flex flex-wrap gap-2 mb-[22px]">
                {t.nayaritCats.map((c: string) => <span key={c} className="text-[13px] font-medium text-white border border-white/30 px-3 py-[6px] rounded-[3px]">{c}</span>)}
              </div>
              <a href="#experiences" onClick={(e) => { e.preventDefault(); onNav("experiences"); setDestFilter("nayarit"); }} className="inline-flex items-center gap-[9px] bg-coral text-white no-underline font-semibold px-[22px] py-[13px] rounded-[4px] hover:bg-coral-deep focus:outline-2 focus:outline-white focus:outline-offset-[2px]">{t.exploreDest} <span aria-hidden="true">&rarr;</span></a>
            </div>
          </article>
          <article data-reveal className="relative rounded-[6px] overflow-hidden min-h-[clamp(320px,40vw,520px)] flex flex-col justify-end text-white">
            <img src="/images/dest-maya.jpg" alt="Riviera Maya, Caribbean coast" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(8,38,34,.86)_100%)]" />
            <div className="relative p-[clamp(22px,2.6vw,34px)]">
              <h3 className="font-serif font-medium text-[clamp(24px,3vw,34px)] leading-[1.06] mb-3">Riviera Maya</h3>
              <p className="text-[15px] leading-[1.55] text-white/88 max-w-[420px] mb-4">{t.mayaDesc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {t.mayaCats.map((c: string) => <span key={c} className="text-[13px] font-medium text-white border border-white/30 px-3 py-[6px] rounded-[3px]">{c}</span>)}
              </div>
              <a href="#experiences" onClick={(e) => { e.preventDefault(); onNav("experiences"); setDestFilter("maya"); }} className="inline-flex items-center gap-[9px] bg-white/[0.14] text-white no-underline font-semibold px-5 py-3 rounded-[4px] border border-white/40 hover:bg-white/[0.24] focus:outline-2 focus:outline-white focus:outline-offset-[2px]">{t.exploreDest} <span aria-hidden="true">&rarr;</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
