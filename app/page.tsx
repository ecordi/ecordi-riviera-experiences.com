"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { translations } from "@/lib/translations";
import { waLink } from "@/lib/data";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Destinations from "@/components/Destinations";
import Experiences from "@/components/Experiences";
import PrivateSection from "@/components/PrivateSection";
import WhySection from "@/components/WhySection";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Guides from "@/components/Guides";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [destFilter, setDestFilter] = useState("all");
  const [searchDest, setSearchDest] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [searchDate, setSearchDate] = useState("");
  const [searchPax, setSearchPax] = useState("2");
  const [faqOpen, setFaqOpen] = useState(-1);
  const [formState, setFormState] = useState("idle");
  const [form, setForm] = useState<Record<string, string>>({ name: "", contact: "", dest: "", date: "", pax: "2", type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [vw, setVw] = useState(1200);
  const mainRef = useRef<HTMLElement>(null);

  const t = useMemo(() => translations[lang], [lang]);
  const isMobile = vw < 900;

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
      nodes.forEach((n) => {
        n.style.transition = "opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1)";
        n.style.opacity = "0";
        n.style.transform = "perspective(1200px) translateY(34px) rotateX(8deg)";
      });
      const hero = document.getElementById("home");
      const heroNodes = hero ? Array.from(hero.querySelectorAll<HTMLElement>("[data-reveal]")) : [];
      heroNodes.forEach((n, i) => {
        n.style.transitionDelay = `${0.12 + i * 0.13}s`;
        requestAnimationFrame(() => { n.style.opacity = "1"; n.style.transform = "none"; });
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const el = e.target as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "none";
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      nodes.forEach((n) => { if (!heroNodes.includes(n)) io.observe(n); });
      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
        io.disconnect();
      };
    }
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [lang]);

  useEffect(() => {
    setSearchDest(destFilter === "all" ? "" : destFilter);
  }, [destFilter]);

  useEffect(() => {
    setSearchType(activeFilter);
  }, [activeFilter]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const nav = (id: string) => { setMobileOpen(false); scrollTo(id); };
  const toggleMobile = () => setMobileOpen((s) => !s);
  const setLangFn = (l: "en" | "es") => setLang(l);
  const setFilter = (f: string) => {
    setActiveFilter(f);
    setSearchType(f);
    setTimeout(() => scrollTo("experiences"), 30);
  };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveFilter(searchType || "all");
    setDestFilter(searchDest || "all");
    setTimeout(() => scrollTo("experiences"), 30);
  };

  const handleSearchDest = (v: string) => {
    setSearchDest(v);
    setDestFilter(v || "all");
    setTimeout(() => scrollTo("experiences"), 30);
  };

  const handleSearchType = (v: string) => {
    setSearchType(v);
    setActiveFilter(v || "all");
    setTimeout(() => scrollTo("experiences"), 30);
  };

  const handleSearchDate = (v: string) => {
    setSearchDate(v);
    setTimeout(() => scrollTo("experiences"), 30);
  };

  const handleSearchPax = (v: string) => {
    setSearchPax(v);
    setTimeout(() => scrollTo("experiences"), 30);
  };

  const pickTraveler = (type: string) => {
    setForm((s) => ({ ...s, type }));
    setFormState("idle");
    setTimeout(() => {
      scrollTo("private");
      setTimeout(() => { const el = document.getElementById("f-name"); if (el) el.focus(); }, 500);
    }, 20);
  };

  const viewExp = (formDest: string, formType: string) => {
    setForm((s) => ({ ...s, dest: formDest, type: formType }));
    setFormState("idle");
    setTimeout(() => {
      scrollTo("private");
      setTimeout(() => { const el = document.getElementById("f-name"); if (el) el.focus(); }, 500);
    }, 20);
  };

  const toggleFaq = (i: number) => setFaqOpen((s) => (s === i ? -1 : i));
  const setField = (k: string, v: string) => { setForm((s) => ({ ...s, [k]: v })); setErrors((s) => ({ ...s, [k]: false })); };

  const validEmailOrPhone = (v: string) => {
    const s = (v || "").trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) || /^[+()\-\s\d]{7,}$/.test(s);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    if (!form.name?.trim()) errs.name = true;
    if (!validEmailOrPhone(form.contact)) errs.contact = true;
    if (!form.dest) errs.dest = true;
    if (Object.keys(errs).length) {
      setErrors(errs);
      const firstId = errs.name ? "f-name" : errs.contact ? "f-contact" : "f-dest";
      const el = document.getElementById(firstId);
      if (el) el.focus();
      return;
    }
    setFormState("success");
    setErrors({});
  };

  const resetForm = () => {
    setFormState("idle");
    setForm({ name: "", contact: "", dest: "", date: "", pax: "2", type: "", message: "" });
    setErrors({});
  };

  const waGeneral = waLink(t.waGeneral);
  const waPrivate = waLink(t.waPrivate);
  const waFooter = waLink(t.waFooter);
  const waFromForm = waLink(t.waForm(form));
  const waExp = (name: string, dest: string) => waLink(t.waExp(name, dest));

  return (
    <div lang={lang}>
      <a href="#main" onClick={(e) => { e.preventDefault(); scrollTo("main"); }} className="absolute left-[-9999px] top-2 z-[200] bg-navy text-white px-4 py-[10px] rounded no-underline font-semibold focus:left-3">Skip to content</a>
      <Header lang={lang} scrolled={scrolled} mobileOpen={mobileOpen} t={t} onNav={nav} onToggleMobile={toggleMobile} onSetLang={setLangFn} waGeneral={waGeneral} />
      <main id="main" ref={mainRef}>
        <Hero t={t} onNav={nav} waHero={waGeneral} searchDest={searchDest} searchType={searchType} searchDate={searchDate} searchPax={searchPax} onSearch={onSearch} onSearchDest={handleSearchDest} onSearchType={handleSearchType} onSearchDate={handleSearchDate} onSearchPax={handleSearchPax} />
        <TrustBar t={t} />
        <Destinations t={t} isMobile={isMobile} onNav={nav} setDestFilter={setDestFilter} />
        <Experiences t={t} activeFilter={activeFilter} destFilter={destFilter} lang={lang} onSetFilter={setFilter} onViewExp={viewExp} waExp={waExp} />
        <PrivateSection t={t} lang={lang} formState={formState} form={form} errors={errors} onField={setField} onSubmit={submitForm} onReset={resetForm} onPickTraveler={pickTraveler} onNav={nav} waPrivate={waPrivate} waFromForm={waFromForm} />
        <WhySection t={t} />
        <HowItWorks t={t} />
        <Gallery t={t} isMobile={isMobile} />
        <Testimonials t={t} />
        <Guides t={t} onNav={nav} />
        <FAQ t={t} faqOpen={faqOpen} onToggle={toggleFaq} />
      </main>
      <Footer t={t} onNav={nav} waFooter={waFooter} waFinal={waGeneral} year={new Date().getFullYear()} />
    </div>
  );
}
