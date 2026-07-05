"use client";

import { useCallback } from "react";

interface HeaderProps {
  lang: string;
  scrolled: boolean;
  mobileOpen: boolean;
  t: Record<string, any>;
  onNav: (id: string) => void;
  onToggleMobile: () => void;
  onSetLang: (l: "en" | "es") => void;
  waGeneral: string;
}

export default function Header({
  lang,
  scrolled,
  mobileOpen,
  t,
  onNav,
  onToggleMobile,
  onSetLang,
  waGeneral,
}: HeaderProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;
  const headerBg = scrolled
    ? "bg-offwhite/86 backdrop-blur-[14px] border-b border-line shadow-[0_6px_24px_-18px_rgba(7,36,51,.5)]"
    : "bg-[rgba(7,36,51,.04)] border-b border-transparent";
  const ink = scrolled ? "text-navy" : "text-white";
  const border = scrolled ? "border-line" : "border-white/40";

  const navItems = [
    ["experiences", t.nExperiences],
    ["destinations", t.nDestinations],
    ["private", t.nPrivate],
    ["experiences", t.nRentals],
    ["guides", t.nGuides],
    ["why", t.nAbout],
  ];

  const btn = (active: boolean) =>
    `px-[7px] py-[11px] text-[13px] font-semibold cursor-pointer border-none ${
      active ? "bg-coral text-white" : "bg-transparent"
    } ${active ? "" : ink}`;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${headerBg}`}>
        <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)] h-[72px] flex items-center gap-5">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNav("home");
            }}
            className={`flex items-center gap-[11px] no-underline mr-auto flex-shrink-0 ${ink}`}
            aria-label="Riviera Experiences home"
          >
            <span className="w-[34px] h-[34px] rounded-full border-[1.5px] border-current flex items-center justify-center font-serif text-[18px] font-semibold">R</span>
            <span className="font-serif text-[20px] font-semibold tracking-[.2px] leading-[1.05]">
              Riviera
              <span className="block font-sans text-[10px] font-semibold tracking-[.32em] uppercase opacity-72">Experiences</span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-[clamp(14px,1.6vw,26px)]">
            {navItems.map(([id, label]) => (
              <a
                key={id + label}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNav(id);
                }}
                className={`text-[14.5px] font-medium py-[6px] border-b-[1.5px] border-transparent whitespace-nowrap no-underline ${ink} hover:border-coral focus:outline-2 focus:outline-coral focus:outline-offset-[3px]`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-[10px] flex-shrink-0">
            <div role="group" aria-label="Language" className={`flex border rounded-[4px] overflow-hidden ${border}`}>
              <button type="button" aria-pressed={lang === "en"} className={btn(lang === "en")} onClick={() => onSetLang("en")}>EN</button>
              <button type="button" aria-pressed={lang === "es"} className={btn(lang === "es")} onClick={() => onSetLang("es")}>ES</button>
            </div>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener"
              className={`hidden md:inline-flex items-center gap-[7px] text-[14px] font-semibold px-3 py-[9px] border rounded-[4px] no-underline ${ink} ${border} hover:bg-[rgba(29,111,104,.12)]`}
            >
              <span className="w-2 h-2 rounded-full bg-[#25d366]" />
              WhatsApp
            </a>
            <a
              href="#experiences"
              onClick={(e) => {
                e.preventDefault();
                onNav("experiences");
              }}
              className="inline-flex items-center bg-coral text-white no-underline text-[14px] font-semibold px-[18px] py-[11px] rounded-[4px] whitespace-nowrap hover:bg-coral-deep focus:outline-2 focus:outline-navy focus:outline-offset-[2px]"
            >
              {t.exploreShort}
            </a>
            <button
              type="button"
              onClick={onToggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={t.menu}
              className={`md:hidden flex flex-col justify-center gap-[5px] w-[42px] h-[42px] items-center bg-transparent border rounded-[4px] cursor-pointer p-0 ${border}`}
            >
              <span className={`block w-[18px] h-[1.5px] ${scrolled ? "bg-navy" : "bg-white"}`} />
              <span className={`block w-[18px] h-[1.5px] ${scrolled ? "bg-navy" : "bg-white"}`} />
              <span className={`block w-[18px] h-[1.5px] ${scrolled ? "bg-navy" : "bg-white"}`} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-[150] bg-deep text-offwhite flex flex-col px-[clamp(20px,6vw,40px)] pt-[18px] pb-9 overflow-y-auto">
          <div className="flex items-center h-[54px] mb-[18px]">
            <span className="font-serif text-[20px] font-semibold mr-auto">Riviera Experiences</span>
            <button type="button" onClick={onToggleMobile} aria-label="Close menu" className="w-11 h-11 bg-transparent border border-white/30 rounded-[4px] text-white text-[22px] cursor-pointer leading-none">&times;</button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map(([id, label]) => (
              <a
                key={id + label}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNav(id);
                }}
                className="text-offwhite no-underline font-serif text-[26px] font-medium py-[15px] border-b border-white/12 focus:outline-2 focus:outline-coral focus:outline-offset-[3px]"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-[26px]">
            <a href="#experiences" onClick={(e) => { e.preventDefault(); onNav("experiences"); }} className="text-center bg-coral text-white no-underline font-semibold py-[15px] rounded-[4px]">{t.explore}</a>
            <a href={waGeneral} target="_blank" rel="noopener" className="text-center bg-transparent text-white no-underline font-semibold py-[15px] rounded-[4px] border border-white/35">Contact on WhatsApp</a>
          </div>
        </div>
      )}
    </>
  );
}
