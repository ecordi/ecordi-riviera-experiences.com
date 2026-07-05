import { notFound } from "next/navigation";
import Link from "next/link";
import { getExperience, typeLabels } from "@/lib/experiences-data";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const exp = getExperience(id);
  if (!exp) return { title: "Experience not found" };
  return { title: `${exp.name.en} | Riviera Experiences` };
}

export default async function ExperiencePage({ params, searchParams }: Props) {
  const { id } = await params;
  const { lang = "en" } = await searchParams;
  const exp = getExperience(id);

  if (!exp) return notFound();

  const isES = lang === "es";
  const t = {
    back: isES ? "← Volver a experiencias" : "← Back to experiences",
    book: isES ? "Reservar ahora" : "Book now",
    ask: isES ? "Consultar por WhatsApp" : "Ask on WhatsApp",
    duration: isES ? "Duración" : "Duration",
    type: isES ? "Tipo" : "Type",
    location: isES ? "Ubicación" : "Location",
    pricing: isES ? "Tarifa" : "Pricing",
    priceOnReq: isES ? "A consultar" : "On request",
    priceNote: isES
      ? "Cada experiencia se cotiza por fecha, tamaño de grupo y temporada — consúltanos y te enviamos un precio claro y con todo incluido."
      : "Every experience is priced per date, group size and season — ask us and we'll send a clear, all-in quote.",
  };

  const waMsg = isES
    ? `¡Hola! Me interesa la experiencia "${exp.name.es}" (${exp.destLabel}). ¿Me comparten disponibilidad y detalles?`
    : `Hi! I'm interested in the "${exp.name.en}" experience (${exp.destLabel}). Could you share availability and details?`;

  const waLink = `https://wa.me/5492995798163?text=${encodeURIComponent(waMsg)}`;

  return (
    <main className="min-h-screen bg-sand-soft">
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[320px] max-h-[560px] overflow-hidden">
        <img
          src={exp.img}
          alt={exp.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(7,36,51,.7)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 p-[clamp(18px,4vw,48px)] max-w-[1280px] mx-auto">
          <span className="inline-block text-[12px] font-semibold tracking-[.04em] text-white bg-[rgba(7,36,51,.55)] px-[10px] py-[5px] rounded-[3px] backdrop-blur-sm mb-3">
            {exp.destLabel}
          </span>
          <h1 className="font-serif font-medium text-[clamp(28px,5vw,48px)] leading-[1.08] tracking-[-.01em] text-white text-balance">
            {isES ? exp.name.es : exp.name.en}
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[clamp(18px,4vw,48px)] py-[clamp(40px,6vw,72px)]">
        <Link
          href={`/?lang=${lang}#experiences`}
          className="inline-block text-[14px] font-semibold text-teal mb-6 no-underline hover:underline"
        >
          {t.back}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-[clamp(32px,5vw,56px)]">
          {/* Left column */}
          <div>
            <p className="text-[17px] leading-[1.65] text-navy/82 mb-8">
              {isES ? exp.desc.es : exp.desc.en}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-paper rounded-[6px] border border-line p-4">
                <p className="text-[11px] font-semibold tracking-[.08em] uppercase text-navy/50 mb-1">{t.duration}</p>
                <p className="font-serif text-[18px] font-medium text-navy">{isES ? exp.duration.es : exp.duration.en}</p>
              </div>
              <div className="bg-paper rounded-[6px] border border-line p-4">
                <p className="text-[11px] font-semibold tracking-[.08em] uppercase text-navy/50 mb-1">{t.type}</p>
                <p className="font-serif text-[18px] font-medium text-navy">{isES ? typeLabels[exp.type].es : typeLabels[exp.type].en}</p>
              </div>
              <div className="bg-paper rounded-[6px] border border-line p-4">
                <p className="text-[11px] font-semibold tracking-[.08em] uppercase text-navy/50 mb-1">{t.location}</p>
                <p className="font-serif text-[18px] font-medium text-navy">{exp.destLabel}</p>
              </div>
            </div>

            <p className="font-mono text-[12px] text-navy/50">{t.priceNote}</p>
          </div>

          {/* Right column — booking card */}
          <div className="bg-paper rounded-[6px] border border-line p-6 h-fit sticky top-6">
            <p className="text-[11px] font-semibold tracking-[.08em] uppercase text-navy/50 mb-2">{t.pricing}</p>
            <p className="font-serif text-[28px] font-semibold text-teal mb-6">{t.priceOnReq}</p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 w-full bg-[#25d366] text-white font-semibold text-[15px] py-3 rounded-[4px] no-underline hover:opacity-90 transition-opacity mb-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              {t.ask}
            </a>

            <button
              type="button"
              disabled
              className="w-full bg-navy text-white font-semibold text-[15px] py-3 rounded-[4px] opacity-50 cursor-not-allowed"
              title="Online booking coming soon"
            >
              {t.book}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
