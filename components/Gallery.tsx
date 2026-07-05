interface Props { t: Record<string, any>; isMobile: boolean; }
export default function Gallery({ t, isMobile }: Props) {
  const items = [
    { label: t.g1, col: isMobile ? "1/-1" : "1/7", h: "260px", img: "/images/paddleboard.jpg" },
    { label: t.g2, col: isMobile ? "1/-1" : "7/13", h: "260px", img: "/images/biolum.jpg" },
    { label: t.g3, col: isMobile ? "1/-1" : "1/5", h: "230px", img: "/images/snorkel.jpg" },
    { label: t.g4, col: isMobile ? "1/-1" : "5/9", h: "230px", img: "/images/jungle.jpg" },
    { label: t.g5, col: isMobile ? "1/-1" : "9/13", h: "230px", img: "/images/yacht.jpg" },
    { label: t.g6, col: "1/-1", h: "220px", img: "/images/culture.jpg" },
  ];
  return (
    <section id="guides" className="py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[640px] mb-[clamp(36px,5vw,60px)]">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-coral mb-[14px]">{t.storyEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(30px,4.2vw,50px)] leading-[1.06] tracking-[-.01em] mb-4 text-balance">{t.storyTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(12px,1.6vw,18px)]">
          {items.map((g, i) => (
            <div key={i} data-reveal className="relative rounded-[6px] overflow-hidden flex items-end p-[clamp(18px,2vw,26px)]" style={{ gridColumn: g.col, minHeight: g.h }}>
              <img src={g.img} alt={g.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(7,36,51,.75)_100%)]" />
              <span className="relative font-serif text-[18px] font-medium text-white">{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
