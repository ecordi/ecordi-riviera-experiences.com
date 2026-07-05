interface Props { t: Record<string, any>; }
export default function TrustBar({ t }: Props) {
  return (
    <section aria-label="Why travelers trust us" className="bg-deep text-offwhite pt-[clamp(96px,12vw,128px)] pb-[clamp(28px,4vw,40px)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2 gap-x-7">
        {t.trust.map((ti: any, i: number) => (
          <div key={i} className="flex items-start gap-[11px] py-[14px]">
            <span className="flex-shrink-0 w-[30px] h-[30px] border border-[rgba(241,201,179,.45)] rounded-full flex items-center justify-center text-[#f1c9b3] text-[14px]">{ti.icon}</span>
            <span className="text-[14.5px] font-medium leading-[1.4] text-offwhite/92">{ti.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
