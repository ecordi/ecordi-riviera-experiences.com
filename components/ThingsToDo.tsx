interface Props { t: Record<string, any>; onFilterAndGo: (type: string) => void; }
export default function ThingsToDo({ t, onFilterAndGo }: Props) {
  const tiles = [
    { k: "water", icon: "\u2248", label: t.tBeaches, c: "#13a3a0" },
    { k: "adventure", icon: "\u26f0", label: t.tAdventure, c: "#2f8f5b" },
    { k: "culture", icon: "\u25c8", label: t.tCulture, c: "#c2497a" },
    { k: "private", icon: "\u26f5", label: t.tPrivate, c: "#0e3a52" },
    { k: "family", icon: "\u263c", label: t.tFamily, c: "#e6a02e" },
    { k: "all", icon: "\u2726", label: t.tAll, c: "#d85b39" },
  ];
  return (
    <section aria-label="Things to do" className="py-[clamp(56px,8vw,96px)] pb-[clamp(8px,2vw,16px)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div data-reveal className="max-w-[640px] mb-[clamp(28px,3.5vw,44px)]">
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-turq mb-[14px]">{t.thingsEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-.01em] mb-[14px] text-balance">{t.thingsTitle}</h2>
          <p className="text-[16.5px] text-navy/72 max-w-[520px]">{t.thingsSub}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,180px),1fr))] gap-[clamp(12px,1.6vw,18px)]">
          {tiles.map((c) => (
            <button key={c.k} type="button" onClick={() => onFilterAndGo(c.k)} className="flex items-center gap-[14px] text-left cursor-pointer border-none rounded-[8px] p-5 text-white hover:-translate-y-1 transition-transform duration-250" style={{ background: c.c, boxShadow: `0 16px 32px -22px ${c.c}` }}>
              <span className="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white/[0.18] text-[20px] leading-none">{c.icon}</span>
              <span className="flex flex-col gap-[3px]">
                <span className="font-serif text-[19px] font-semibold leading-[1.1]">{c.label}</span>
                <span className="text-[12.5px] font-semibold tracking-[.02em] opacity-85 inline-flex items-center gap-[6px]">{t.viewMore} <span aria-hidden="true">&rarr;</span></span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
