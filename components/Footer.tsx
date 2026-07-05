"use client";

interface FooterProps {
  t: Record<string, any>;
  onNav: (id: string) => void;
  waFooter: string;
  waFinal: string;
  year: number;
}

export default function Footer({ t, onNav, waFooter, waFinal, year }: FooterProps) {
  const link = (id: string) => ({
    href: `#${id}`,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onNav(id);
    },
  });

  const footCols = [
    {
      title: t.fcDestinations,
      links: [
        { label: "Riviera Nayarit", ...link("destinations") },
        { label: "Puerto Vallarta", ...link("destinations") },
        { label: "Riviera Maya", ...link("destinations") },
      ],
    },
    {
      title: t.fcExperiences,
      links: [
        { label: t.catWater, ...link("experiences") },
        { label: t.catAdventure, ...link("experiences") },
        { label: t.catCulture, ...link("experiences") },
        { label: t.catPrivate, ...link("experiences") },
      ],
    },
    {
      title: t.fcCompany,
      links: [
        { label: t.nGuides, ...link("guides") },
        { label: t.nAbout, ...link("why") },
        { label: t.nPrivate, ...link("private") },
      ],
    },
    {
      title: t.fcContact,
      links: [
        { label: "WhatsApp", href: waFooter, onClick: undefined },
        { label: "hello@\u2014.com", href: "#contact", onClick: (e: React.MouseEvent) => { e.preventDefault(); onNav("contact"); } },
      ],
    },
  ];

  const socials = [
    { label: "Instagram (placeholder)", icon: "IG", href: "#contact", onClick: (e: React.MouseEvent) => { e.preventDefault(); onNav("contact"); } },
    { label: "Facebook (placeholder)", icon: "FB", href: "#contact", onClick: (e: React.MouseEvent) => { e.preventDefault(); onNav("contact"); } },
    { label: "TripAdvisor (placeholder)", icon: "TA", href: "#contact", onClick: (e: React.MouseEvent) => { e.preventDefault(); onNav("contact"); } },
  ];

  const legal = [t.lpPrivacy, t.lpTerms, t.lpCancel].map((label) => ({
    label,
    href: "#contact",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      onNav("contact");
    },
  }));

  return (
    <>
      <section className="py-[clamp(72px,10vw,120px)] bg-deep text-offwhite">
        <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)] text-center">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-[#f1c9b3] mb-4">{t.finalEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(30px,4.4vw,52px)] leading-[1.07] tracking-[-.01em] mb-4 text-balance">{t.finalTitle}</h2>
          <p className="text-[17px] leading-[1.6] text-offwhite/82 mb-8 max-w-[520px] mx-auto">{t.finalSub}</p>
          <div className="flex flex-wrap justify-center gap-[12px]">
            <a href={waFinal} target="_blank" rel="noopener" className="inline-flex items-center gap-[9px] bg-coral text-white no-underline font-semibold px-6 py-[14px] rounded-[4px] hover:bg-coral-deep">
              <span className="w-2 h-2 rounded-full bg-[#25d366]" />
              {t.finalWa}
            </a>
            <a href="#private" onClick={(e) => { e.preventDefault(); onNav("private"); }} className="inline-flex items-center bg-transparent text-white no-underline font-semibold px-6 py-[14px] rounded-[4px] border border-white/40 hover:bg-white/[0.12]">
              {t.finalRec}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-navy text-offwhite py-[clamp(40px,6vw,64px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
          <div className="flex flex-wrap items-start gap-[clamp(24px,4vw,40px)] mb-[clamp(28px,4vw,44px)]">
            <div className="max-w-[340px]">
              <a href="#home" onClick={(e) => { e.preventDefault(); onNav("home"); }} className="flex items-center gap-[11px] no-underline text-offwhite mb-4">
                <span className="w-[34px] h-[34px] rounded-full border-[1.5px] border-current flex items-center justify-center font-serif text-[18px] font-semibold">R</span>
                <span className="font-serif text-[20px] font-semibold tracking-[.2px]">Riviera<span className="block font-sans text-[10px] font-semibold tracking-[.32em] uppercase opacity-72">Experiences</span></span>
              </a>
              <p className="text-[14px] leading-[1.55] text-offwhite/72">{t.footBlurb}</p>
            </div>
            <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[clamp(16px,3vw,28px)]">
              {footCols.map((col) => (
                <div key={col.title}>
                  <p className="text-[12px] font-semibold tracking-[.14em] uppercase text-[#f1c9b3] mb-3">{col.title}</p>
                  <ul className="list-none p-0 m-0 flex flex-col gap-[10px]">
                    {col.links.map((l, i) => (
                      <li key={i}>
                        <a
                          href={l.href}
                          onClick={l.onClick}
                          target={l.href?.startsWith("http") ? "_blank" : undefined}
                          rel={l.href?.startsWith("http") ? "noopener" : undefined}
                          className="text-[14px] text-offwhite/72 no-underline hover:text-offwhite"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/12 pt-[clamp(18px,3vw,28px)] flex flex-wrap items-center gap-[14px] justify-between">
            <p className="text-[12.5px] text-offwhite/55">&copy; {year} Riviera Experiences. {t.footRights}</p>
            <div className="flex flex-wrap gap-[18px]">
              {legal.map((l, i) => (
                <a key={i} href={l.href} onClick={l.onClick} className="text-[12.5px] text-offwhite/55 no-underline hover:text-offwhite">{l.label}</a>
              ))}
            </div>
            <div className="flex gap-[14px]">
              {socials.map((s) => (
                <a key={s.label} href={s.href} onClick={s.onClick} aria-label={s.label} className="text-[12px] font-semibold text-offwhite/55 no-underline hover:text-offwhite border border-white/20 rounded-[4px] px-[10px] py-[6px]">{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <a
        href={waFooter}
        target="_blank"
        rel="noopener"
        aria-label={t.waFloat}
        className="fixed bottom-6 right-6 z-[200] w-[56px] h-[56px] rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(0,0,0,.45)] hover:scale-105 transition-transform"
        title={t.waFloat}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.3A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
