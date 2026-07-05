"use client";

interface HeroProps {
  t: Record<string, any>;
  onNav: (id: string) => void;
  waHero: string;
  searchDest: string;
  searchType: string;
  searchDate: string;
  searchPax: string;
  onSearch: (e: React.FormEvent) => void;
  onSearchDest: (v: string) => void;
  onSearchType: (v: string) => void;
  onSearchDate: (v: string) => void;
  onSearchPax: (v: string) => void;
}

export default function Hero({
  t,
  onNav,
  waHero,
  searchDest,
  searchType,
  searchDate,
  searchPax,
  onSearch,
  onSearchDest,
  onSearchType,
  onSearchDate,
  onSearchPax,
}: HeroProps) {
  const field =
    "h-12 border border-line rounded px-3 text-[15px] text-navy bg-white w-full";
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[min(94vh,860px)] flex items-end bg-deep overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#0a3046_0%,#0e3a52_42%,#103f44_100%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,.035)_0_2px,transparent_2px_13px)]" />
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none opacity-100"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(7,36,51,.35)_0%,rgba(7,36,51,.06)_34%,rgba(7,36,51,.55)_78%,rgba(7,36,51,.82)_100%)]"
      />

      <div className="absolute left-1/2 bottom-[118px] -translate-x-1/2 z-[3] flex flex-col items-center gap-[7px] text-white/70">
        <span className="font-mono text-[10px] tracking-[.24em] uppercase">Scroll</span>
        <span className="w-[18px] h-[28px] border-[1.5px] border-white/50 rounded-[10px] flex justify-center pt-[5px]">
          <span className="w-[3px] h-[7px] rounded-[2px] bg-white/80 animate-[rx-cue_1.8s_ease-in-out_infinite]" />
        </span>
      </div>

      <div className="relative z-[4] w-full max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)] pb-[clamp(40px,6vw,72px)] text-offwhite">
        <div className="max-w-[760px]">
          <p className="inline-flex items-center gap-[10px] font-mono text-[12.5px] tracking-[.22em] uppercase text-[#f1c9b3] mb-[22px]">
            <span aria-hidden="true" className="w-[26px] h-[1px] bg-[#f1c9b3]" />
            {t.eyebrow}
          </p>
          <h1 className="font-serif font-medium text-[clamp(38px,6.4vw,80px)] leading-[1.02] tracking-[-.01em] mb-[22px] text-balance">
            {t.heroTitle}
          </h1>
          <p className="text-[clamp(16px,2vw,20px)] leading-[1.55] max-w-[560px] text-offwhite/90 mb-[30px]">
            {t.heroSub}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#experiences"
              onClick={(e) => {
                e.preventDefault();
                onNav("experiences");
              }}
              className="inline-flex items-center bg-coral text-white no-underline font-semibold text-[16px] px-7 py-4 rounded-[4px] hover:bg-coral-deep focus:outline-2 focus:outline-white focus:outline-offset-[3px]"
            >
              {t.explore}
            </a>
            <a
              href="#private"
              onClick={(e) => {
                e.preventDefault();
                onNav("private");
              }}
              className="inline-flex items-center bg-white/[0.08] text-white no-underline font-semibold text-[16px] px-7 py-4 rounded-[4px] border border-white/45 backdrop-blur-sm hover:bg-white/[0.18] focus:outline-2 focus:outline-white focus:outline-offset-[3px]"
            >
              {t.plan}
            </a>
            <a
              href={waHero}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[9px] text-white no-underline font-semibold text-[15px] py-[14px] px-2 hover:text-[#f1c9b3]"
            >
              <span className="w-[9px] h-[9px] rounded-full bg-[#25d366] shadow-[0_0_0_3px_rgba(37,211,102,.25)]" />
              {t.heroWa}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-[4] w-full max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <form
          onSubmit={onSearch}
          aria-label="Find an experience"
          className="bg-paper rounded-[6px] shadow-[0_24px_60px_-28px_rgba(7,36,51,.55)] p-[clamp(16px,2vw,22px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(168px,1fr))] gap-[14px] items-end translate-y-1/2"
        >
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="s-dest" className="text-[12px] font-semibold tracking-[.06em] uppercase text-teal">
              {t.fDest}
            </label>
            <select id="s-dest" value={searchDest} onChange={(e) => onSearchDest(e.target.value)} className={field}>
              <option value="">{t.anyDest}</option>
              <option value="nayarit">Riviera Nayarit / Puerto Vallarta</option>
              <option value="maya">Riviera Maya</option>
            </select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="s-type" className="text-[12px] font-semibold tracking-[.06em] uppercase text-teal">
              {t.fType}
            </label>
            <select id="s-type" value={searchType} onChange={(e) => onSearchType(e.target.value)} className={field}>
              <option value="all">{t.allTypes}</option>
              <option value="water">{t.catWater}</option>
              <option value="adventure">{t.catAdventure}</option>
              <option value="culture">{t.catCulture}</option>
              <option value="private">{t.catPrivate}</option>
              <option value="family">{t.catFamily}</option>
            </select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="s-date" className="text-[12px] font-semibold tracking-[.06em] uppercase text-teal">
              {t.fDate}
            </label>
            <input id="s-date" type="date" value={searchDate} onChange={(e) => onSearchDate(e.target.value)} className={field} />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="s-pax" className="text-[12px] font-semibold tracking-[.06em] uppercase text-teal">
              {t.fPax}
            </label>
            <select id="s-pax" value={searchPax} onChange={(e) => onSearchPax(e.target.value)} className={field}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
              <option value="6">6+</option>
            </select>
          </div>
          <button
            type="submit"
            className="h-12 bg-navy text-white border-none rounded-[4px] font-semibold text-[15px] cursor-pointer flex items-center justify-center gap-2 hover:bg-ocean focus:outline-2 focus:outline-coral focus:outline-offset-[2px]"
          >
            <span aria-hidden="true">&#8627;</span>
            {t.search}
          </button>
        </form>
      </div>
    </section>
  );
}
