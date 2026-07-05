"use client";

interface PrivateSectionProps {
  t: Record<string, any>;
  lang: string;
  formState: string;
  form: Record<string, string>;
  errors: Record<string, boolean>;
  onField: (k: string, v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  onPickTraveler: (type: string) => void;
  onNav: (id: string) => void;
  waPrivate: string;
  waFromForm: string;
}

export default function PrivateSection({
  t,
  formState,
  form,
  errors,
  onField,
  onSubmit,
  onReset,
  onPickTraveler,
  waPrivate,
  waFromForm,
}: PrivateSectionProps) {
  const field =
    "h-12 border border-line rounded px-3 text-[15px] text-navy bg-white w-full";
  const label = "text-[13px] font-semibold text-navy";
  const errBox = (bad: boolean) =>
    `${field}; border-color: ${bad ? "var(--color-coral-deep)" : "var(--color-line)"}; background: ${bad ? "rgba(216,91,57,.05)" : "#fff"}`;

  const travelers = [
    { icon: "\u2661", label: t.trvRomantic, type: "Romantic" },
    { icon: "\u263c", label: t.trvFamily, type: "Family" },
    { icon: "\u2726", label: t.trvFriends, type: "Group activities" },
    { icon: "\u25ce", label: t.trvGroup, type: "Group activities" },
    { icon: "\u2691", label: t.trvCorporate, type: "Corporate outing" },
  ];

  return (
    <section id="private" className="pt-[clamp(40px,5vw,64px)] pb-[clamp(56px,8vw,96px)] bg-deep text-offwhite">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)] grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-[clamp(32px,5vw,64px)] items-start">
        <div>
          <p className="font-mono text-[12.5px] tracking-[.2em] uppercase text-[#f1c9b3] mb-4">{t.privEyebrow}</p>
          <h2 className="font-serif font-medium text-[clamp(30px,4.2vw,50px)] leading-[1.06] tracking-[-.01em] mb-5 text-balance">{t.privTitle}</h2>
          <p className="text-[17px] leading-[1.6] text-offwhite/82 mb-[22px] max-w-[480px]">{t.privSub}</p>

          <p className="text-[12px] font-semibold tracking-[.14em] uppercase text-[#f1c9b3] mb-3">{t.travelersLabel}</p>
          <div role="group" aria-label={t.travelersLabel} className="flex flex-wrap gap-[9px] mb-7">
            {travelers.map((tc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onPickTraveler(tc.type)}
                className="inline-flex items-center gap-2 bg-white/[0.06] text-white border border-white/28 rounded-[30px] px-4 py-[9px] text-[14px] font-semibold cursor-pointer hover:bg-white/[0.16] hover:border-white/50 focus:outline-2 focus:outline-white focus:outline-offset-[2px]"
              >
                <span className="text-[14px]">{tc.icon}</span>
                {tc.label}
              </button>
            ))}
          </div>

          <ul className="list-none p-0 m-0 mb-[30px] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[10px_22px]">
            {t.privateItems.map((p: string, i: number) => (
              <li key={i} className="flex items-center gap-[11px] text-[15px] text-offwhite/92">
                <span className="text-[#f1c9b3] text-[13px]">&#9670;</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="border-t border-white/14 pt-[22px]">
            <p className="text-[14px] text-offwhite/70 mb-[14px]">{t.privWaIntro}</p>
            <a
              href={waPrivate}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[9px] bg-transparent text-white no-underline font-semibold px-[22px] py-[13px] rounded-[4px] border border-white/40 hover:bg-white/[0.12] focus:outline-2 focus:outline-white focus:outline-offset-[2px]"
            >
              <span className="w-[9px] h-[9px] rounded-full bg-[#25d366]" />
              {t.privWaBtn}
            </a>
          </div>
        </div>

        <div className="bg-paper text-navy rounded-[8px] p-[clamp(22px,3vw,36px)] shadow-[0_36px_72px_-40px_rgba(0,0,0,.6)]">
          {formState === "success" ? (
            <div role="status" className="text-center py-7 px-2">
              <span className="inline-flex w-[60px] h-[60px] rounded-full bg-[rgba(29,111,104,.12)] text-teal items-center justify-center text-[30px] mb-5">&#10003;</span>
              <h3 className="font-serif font-medium text-[28px] mb-3">{t.successTitle}</h3>
              <p className="text-[15.5px] text-navy/72 leading-[1.55] mb-3 max-w-[340px] mx-auto">{t.successBody}</p>
              <p className="font-mono text-[11.5px] text-navy/50 mb-6">{t.successNote}</p>
              <div className="flex flex-col gap-[10px]">
                <a href={waFromForm} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-[9px] bg-teal text-white no-underline font-semibold py-[14px] rounded-[4px]">{t.successWa}</a>
                <button type="button" onClick={onReset} className="bg-transparent text-navy border border-line rounded-[4px] font-semibold py-[13px] cursor-pointer">{t.successReset}</button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-label="Request a personalized experience">
              <h3 className="font-serif font-medium text-[clamp(22px,2.6vw,28px)] mb-1">{t.formTitle}</h3>
              <p className="text-[14px] text-navy/65 mb-[22px]">{t.formSub}</p>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="f-name" className={label}>{t.lName} *</label>
                  <input id="f-name" type="text" autoComplete="name" value={form.name || ""} onChange={(e) => onField("name", e.target.value)} aria-required="true" aria-invalid={errors.name} aria-describedby={errors.name ? "e-name" : undefined} className={errBox(errors.name)} />
                  {errors.name && <span id="e-name" className="text-[12.5px] text-coral-deep font-semibold">{t.eName}</span>}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="f-contact" className={label}>{t.lContact} *</label>
                  <input id="f-contact" type="text" autoComplete="tel" value={form.contact || ""} onChange={(e) => onField("contact", e.target.value)} aria-required="true" aria-invalid={errors.contact} aria-describedby={errors.contact ? "e-contact" : undefined} className={errBox(errors.contact)} />
                  {errors.contact && <span id="e-contact" className="text-[12.5px] text-coral-deep font-semibold">{t.eContact}</span>}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="f-dest" className={label}>{t.fDest} *</label>
                  <select id="f-dest" value={form.dest || ""} onChange={(e) => onField("dest", e.target.value)} aria-required="true" aria-invalid={errors.dest} aria-describedby={errors.dest ? "e-dest" : undefined} className={errBox(errors.dest)}>
                    <option value="">{t.selectDest}</option>
                    <option value="nayarit">Riviera Nayarit / Puerto Vallarta</option>
                    <option value="maya">Riviera Maya</option>
                    <option value="notsure">{t.notSure}</option>
                  </select>
                  {errors.dest && <span id="e-dest" className="text-[12.5px] text-coral-deep font-semibold">{t.eDest}</span>}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="f-date" className={label}>{t.fDate}</label>
                  <input id="f-date" type="date" value={form.date || ""} onChange={(e) => onField("date", e.target.value)} className={field} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="f-pax" className={label}>{t.fPax}</label>
                  <select id="f-pax" value={form.pax || "2"} onChange={(e) => onField("pax", e.target.value)} className={field}>
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    <option value="6">6+</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="f-type" className={label}>{t.fType}</label>
                  <select id="f-type" value={form.type || ""} onChange={(e) => onField("type", e.target.value)} className={field}>
                    <option value="">{t.anyType}</option>
                    <option value="water">{t.catWater}</option>
                    <option value="adventure">{t.catAdventure}</option>
                    <option value="culture">{t.catCulture}</option>
                    <option value="private">{t.catPrivate}</option>
                    <option value="family">{t.catFamily}</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[6px] col-span-full">
                  <label htmlFor="f-msg" className={label}>{t.lMsg}</label>
                  <textarea id="f-msg" rows={4} value={form.message || ""} onChange={(e) => onField("message", e.target.value)} placeholder={t.msgPlaceholder} className="border border-line rounded px-3 py-2 text-[15px] text-navy bg-white w-full resize-y" />
                </div>
              </div>
              <p className="text-[12px] text-navy/55 mt-3 mb-4">{t.formDisclaimer}</p>
              <button type="submit" className="w-full h-12 bg-navy text-white border-none rounded-[4px] font-semibold text-[15px] cursor-pointer hover:bg-ocean focus:outline-2 focus:outline-coral focus:outline-offset-[2px]">{t.formSubmit}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
