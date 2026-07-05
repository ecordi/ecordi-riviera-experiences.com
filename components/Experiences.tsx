"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface ExperiencesProps {
  t: Record<string, any>;
  activeFilter: string;
  destFilter: string;
  lang: string;
  onSetFilter: (f: string) => void;
  onViewExp: (formDest: string, formType: string) => void;
  waExp: (name: string, dest: string) => string;
}

export default function Experiences({
  t,
  activeFilter,
  destFilter,
  lang,
  onSetFilter,
  onViewExp,
  waExp,
}: ExperiencesProps) {
  const typeLabels: Record<string, string> = {
    water: t.catWater,
    adventure: t.catAdventure,
    culture: t.catCulture,
    private: t.catPrivate,
    family: t.catFamily,
  };

  const EXP = [
    { id: "biolum", name: t.x1, dest: "nayarit", destLabel: "Riviera Nayarit", duration: t.dur25, type: "water", desc: t.x1d, img: "/images/biolum.jpg", alt: "Bioluminescent water glowing around a paddleboard at night, Riviera Nayarit" },
    { id: "sup", name: t.x2, dest: "nayarit", destLabel: "Punta Mita", duration: t.dur2, type: "water", desc: t.x2d, img: "/images/paddleboard.jpg", alt: "Paddleboarder on calm water at sunrise near Punta Mita" },
    { id: "snorkel", name: t.x3, dest: "nayarit", destLabel: "Islas Marietas", duration: t.dur4, type: "water", desc: t.x3d, img: "/images/snorkel.jpg", alt: "Snorkelers exploring reef at Islas Marietas" },
    { id: "surf", name: t.x4, dest: "nayarit", destLabel: "Sayulita", duration: t.dur15, type: "adventure", desc: t.x4d, img: "/images/surf.jpg", alt: "Beginner surf lesson in the waves at Sayulita" },
    { id: "yacht", name: t.x5, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.durFull, type: "private", desc: t.x5d, img: "/images/yacht.jpg", alt: "Private yacht anchored in Banderas Bay" },
    { id: "whale", name: t.x6, dest: "nayarit", destLabel: "Banderas Bay", duration: t.dur3, type: "family", desc: t.x6d, img: "/images/whale.jpg", alt: "Humpback whale breaching in Banderas Bay during whale season" },
    { id: "chichen", name: t.x7, dest: "maya", destLabel: "Riviera Maya", duration: t.durFull, type: "culture", desc: t.x7d, img: "/images/chichen.jpg", alt: "The El Castillo pyramid at Chich\u00e9n Itz\u00e1" },
    { id: "isla", name: t.x8, dest: "maya", destLabel: "Isla Mujeres", duration: t.durFull, type: "family", desc: t.x8d, img: "/images/catamaran.jpg", alt: "Catamaran sailing toward Isla Mujeres on turquoise water" },
    { id: "hiking", name: t.x9, dest: "nayarit", destLabel: "Riviera Nayarit", duration: t.dur4, type: "adventure", desc: t.x9d, img: "/images/jungle.jpg", alt: "Hikers walking through tropical jungle toward a hidden waterfall" },
    { id: "fishing", name: t.x10, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.dur5, type: "private", desc: t.x10d, img: "/images/fishing.jpg", alt: "Angler holding a large mahi-mahi on a fishing boat" },
    { id: "catamaran-pv", name: t.x11, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.dur3, type: "water", desc: t.x11d, img: "/images/catamaran-pv.jpg", alt: "Catamaran sailing at sunset on Banderas Bay" },
    { id: "sailing", name: t.x12, dest: "nayarit", destLabel: "Punta Mita", duration: t.durFull, type: "private", desc: t.x12d, img: "/images/sailing.jpg", alt: "Sailboat gliding on calm Pacific waters near Punta Mita" },
    { id: "boat-tour", name: t.x13, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.dur3, type: "family", desc: t.x13d, img: "/images/boat-tour.jpg", alt: "Tour boat cruising along the coastline of Banderas Bay" },
    { id: "atv", name: t.x14, dest: "nayarit", destLabel: "Sayulita", duration: t.dur3, type: "adventure", desc: t.x14d, img: "/images/atv.jpg", alt: "ATV riding through tropical jungle trails" },
    { id: "rzr", name: t.x15, dest: "nayarit", destLabel: "Sayulita", duration: t.dur3, type: "adventure", desc: t.x15d, img: "/images/rzr.jpg", alt: "RZR dune buggy on dusty mountain trail" },
    { id: "zipline", name: t.x16, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.dur3, type: "adventure", desc: t.x16d, img: "/images/zipline.jpg", alt: "Zipline canopy tour through tropical forest" },
    { id: "kayak", name: t.x17, dest: "nayarit", destLabel: "Islas Marietas", duration: t.dur2, type: "water", desc: t.x17d, img: "/images/kayak.jpg", alt: "Kayakers paddling through clear turquoise water" },
    { id: "tequila", name: t.x18, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.dur3, type: "culture", desc: t.x18d, img: "/images/tequila.jpg", alt: "Tequila tasting with agave plants in the background" },
    { id: "food-tour", name: t.x19, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.dur3, type: "culture", desc: t.x19d, img: "/images/food-tour.jpg", alt: "Colorful Mexican street tacos and fresh local dishes" },
    { id: "sunset-cruise", name: t.x20, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.durNight, type: "private", desc: t.x20d, img: "/images/sunset-cruise.jpg", alt: "Sunset over the ocean from a boat deck" },
    { id: "scuba", name: t.x21, dest: "nayarit", destLabel: "Islas Marietas", duration: t.dur4, type: "water", desc: t.x21d, img: "/images/scuba.jpg", alt: "Scuba diver exploring underwater rock formations" },
    { id: "horseback", name: t.x22, dest: "nayarit", destLabel: "Sayulita", duration: t.dur2, type: "adventure", desc: t.x22d, img: "/images/horseback.jpg", alt: "Horseback riding along a sandy beach at sunset" },
    { id: "tulum", name: t.x23, dest: "maya", destLabel: "Riviera Maya", duration: t.durFull, type: "culture", desc: t.x23d, img: "/images/tulum.jpg", alt: "Tulum Mayan ruins overlooking turquoise Caribbean water" },
    { id: "cozumel", name: t.x24, dest: "maya", destLabel: "Cozumel", duration: t.durFull, type: "water", desc: t.x24d, img: "/images/cozumel.jpg", alt: "Snorkeler above colorful coral reef in Cozumel" },
    { id: "xcaret", name: t.x25, dest: "maya", destLabel: "Riviera Maya", duration: t.durFull, type: "family", desc: t.x25d, img: "/images/xcaret.jpg", alt: "Underground river swim at Xcaret eco park" },
    { id: "xplor", name: t.x26, dest: "maya", destLabel: "Riviera Maya", duration: t.durFull, type: "adventure", desc: t.x26d, img: "/images/xplor.jpg", alt: "Underground zipline and stalactites at Xplor adventure park" },
    { id: "xelha", name: t.x27, dest: "maya", destLabel: "Riviera Maya", duration: t.durFull, type: "family", desc: t.x27d, img: "/images/xelha.jpg", alt: "Lazy river floating through mangroves at Xel-Há natural park" },
    { id: "xenotes", name: t.x28, dest: "maya", destLabel: "Riviera Maya", duration: t.durFull, type: "adventure", desc: t.x28d, img: "/images/xenotes.jpg", alt: "Zip-lining between cenotes in the Yucatán jungle" },
    { id: "cenote", name: t.x29, dest: "maya", destLabel: "Riviera Maya", duration: t.dur4, type: "water", desc: t.x29d, img: "/images/cenote.jpg", alt: "Crystal-clear cenote with limestone walls and turquoise water" },
    { id: "mayan-cooking", name: t.x30, dest: "maya", destLabel: "Riviera Maya", duration: t.dur4, type: "culture", desc: t.x30d, img: "/images/mayan-cooking.jpg", alt: "Traditional Mayan cooking class with fresh local ingredients" },
    { id: "cozumel-dive", name: t.x31, dest: "maya", destLabel: "Cozumel", duration: t.dur5, type: "water", desc: t.x31d, img: "/images/cozumel-dive.jpg", alt: "Scuba diver surrounded by tropical fish on Cozumel reef" },
    { id: "atv-maya", name: t.x32, dest: "maya", destLabel: "Riviera Maya", duration: t.dur4, type: "adventure", desc: t.x32d, img: "/images/atv-maya.jpg", alt: "ATV riding through jungle trail to an open cenote" },
    { id: "sailing-maya", name: t.x33, dest: "maya", destLabel: "Riviera Maya", duration: t.durFull, type: "private", desc: t.x33d, img: "/images/sailing-maya.jpg", alt: "Catamaran sailing on turquoise Caribbean water" },
    { id: "holbox", name: t.x34, dest: "maya", destLabel: "Holbox", duration: t.durFull, type: "family", desc: t.x34d, img: "/images/holbox.jpg", alt: "Flamingos and shallow turquoise water at Holbox island" },
    { id: "sian-kaan", name: t.x35, dest: "maya", destLabel: "Sian Ka'an", duration: t.durFull, type: "adventure", desc: t.x35d, img: "/images/sian-kaan.jpg", alt: "Mangrove channel and wildlife in Sian Ka'an biosphere" },
    { id: "coco-bongo", name: t.x36, dest: "maya", destLabel: "Cancún", duration: t.durNight, type: "family", desc: t.x36d, img: "/images/coco-bongo.jpg", alt: "Vibrant Coco Bongo show stage with performers" },
    { id: "isla-contoy", name: t.x37, dest: "maya", destLabel: "Isla Contoy", duration: t.durFull, type: "family", desc: t.x37d, img: "/images/isla-contoy.jpg", alt: "Pristine white sand beach at Isla Contoy nature reserve" },
    { id: "spa-day", name: t.x38, dest: "nayarit", destLabel: "Puerto Vallarta", duration: t.dur3, type: "private", desc: t.x38d, img: "/images/spa-day.jpg", alt: "Beachfront massage cabana overlooking the Pacific ocean" },
  ];

  const filtered = EXP
    .filter((x) => (activeFilter === "all" ? true : x.type === activeFilter))
    .filter((x) => (destFilter === "all" || !destFilter ? true : x.dest === destFilter));

  const [shown, setShown] = useState(8);
  useEffect(() => { setShown(8); }, [activeFilter, destFilter]);
  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  const filterDefs = [
    ["all", t.fAll],
    ["water", t.catWater],
    ["adventure", t.catAdventure],
    ["culture", t.catCulture],
    ["private", t.catPrivate],
    ["family", t.catFamily],
  ];

  return (
    <section id="experiences" className="py-[clamp(36px,4.5vw,56px)] bg-sand-soft">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)]">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-[clamp(28px,3.5vw,44px)]">
          <div className="max-w-[620px]">
            <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-coral mb-[14px]">{t.expEyebrow}</p>
            <h2 className="font-serif font-medium text-[clamp(30px,4.4vw,52px)] leading-[1.07] tracking-[-.01em] text-balance">{t.expTitle}</h2>
          </div>
          <p className="text-[16px] text-navy/70 max-w-[360px]">{t.expSub}</p>
        </div>

        <div role="group" aria-label="Filter experiences by category" className="flex flex-wrap gap-[9px] mb-[clamp(24px,3vw,36px)]">
          {filterDefs.map(([k, label]) => {
            const active = activeFilter === k;
            return (
              <button
                key={k}
                type="button"
                aria-pressed={active}
                onClick={() => onSetFilter(k as string)}
                className={`px-[18px] py-[10px] rounded-[30px] text-[14px] font-semibold cursor-pointer border transition-all duration-200 ${
                  active
                    ? "bg-navy text-white border-navy"
                    : "bg-transparent text-navy border-line hover:bg-navy/5"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-[clamp(16px,2vw,26px)]">
          {visible.map((x) => (
            <article key={x.id} className="relative bg-paper rounded-[6px] overflow-hidden border border-line flex flex-col">
              <div role="img" aria-label={x.alt} className="relative aspect-[4/3] overflow-hidden">
                <img src={x.img} alt={x.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(7,36,51,.55)_100%)]" />
                <span className="absolute top-[11px] left-[11px] text-[11px] font-semibold tracking-[.04em] text-white bg-[rgba(7,36,51,.55)] px-[10px] py-[5px] rounded-[3px] backdrop-blur-sm">{x.destLabel}</span>
                <span className="absolute top-[11px] right-[11px] text-[11px] font-semibold text-navy bg-paper/92 px-[10px] py-[5px] rounded-[3px] capitalize">{typeLabels[x.type]}</span>
              </div>
              <div className="px-5 pt-5 pb-[22px] flex flex-col flex-1">
                <h3 className="font-serif font-medium text-[23px] leading-[1.12] mb-2">{x.name}</h3>
                <p className="flex items-center gap-3 text-[13px] text-teal font-semibold mb-3">
                  <span className="inline-flex items-center gap-[5px]"><span aria-hidden="true">&#9687;</span>{x.duration}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-current opacity-50" />
                  <span>{typeLabels[x.type]}</span>
                </p>
                <p className="text-[14.5px] leading-[1.55] text-navy/74 mb-[18px] flex-1">{x.desc}</p>
                <div className="flex items-baseline justify-between gap-[10px] mb-4 pt-[14px] border-t border-line">
                  <span className="text-[12px] font-semibold tracking-[.08em] uppercase text-navy/50">{t.pricing}</span>
                  <span className="font-serif text-[19px] font-semibold text-teal">{t.priceOnReq}</span>
                </div>
                <div className="flex gap-[9px]">
                  <Link
                    href={`/experience/${x.id}?lang=${lang}`}
                    className="flex-1 bg-navy text-white border-none rounded-[4px] font-semibold text-[14px] py-3 text-center no-underline hover:bg-ocean focus:outline-2 focus:outline-coral focus:outline-offset-[2px]"
                  >
                    {t.viewExp}
                  </Link>
                  <a
                    href={waExp(x.name, x.destLabel)}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Ask about ${x.name} on WhatsApp`}
                    className="flex-shrink-0 inline-flex items-center justify-center gap-[7px] bg-transparent text-teal border border-teal rounded-[4px] font-semibold text-[14px] px-[14px] py-3 no-underline hover:bg-[rgba(29,111,104,.1)] focus:outline-2 focus:outline-coral focus:outline-offset-[2px]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25d366]" />
                    {t.ask}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center py-10 text-[16px] text-navy/60">{t.noResults}</p>
        )}

        {filtered.length > 0 && (
          <p className="text-center text-[13px] text-navy/50 mt-4">
            {lang === "es"
              ? `Mostrando ${visible.length} de ${filtered.length} experiencias`
              : `Showing ${visible.length} of ${filtered.length} experiences`}
          </p>
        )}

        {hasMore && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => setShown((s) => s + 8)}
              className="px-8 py-3 rounded-[4px] bg-navy text-white font-semibold text-[14px] cursor-pointer hover:bg-ocean transition-colors"
            >
              {lang === "es" ? "Cargar más experiencias" : "Load more experiences"}
            </button>
          </div>
        )}

        <p className="font-mono text-[12px] text-navy/50 mt-[26px] text-center">{t.priceNote}</p>
      </div>
    </section>
  );
}
