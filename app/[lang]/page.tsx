import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "@/components/Download";
import { BlurText, SkyBackground, SpotlightCard } from "@/components/Fx";
import { Phone, SoundCards } from "@/components/Interactive";
import { dict } from "@/lib/i18n";
import { LINKS, SITE, bgs, isLang, momo, shots } from "@/lib/links";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { title, desc } = dict[lang].meta;
  const og = { url: `/${lang}`, title, description: desc, siteName: "Moonu", type: "website" as const,
    locale: lang === "fa" ? "fa_IR" : "en_US", alternateLocale: lang === "fa" ? "en_US" : "fa_IR",
    images: [{ url: momo("pose_1_wave"), alt: "Momo" }] };
  return { title, description: desc, alternates: { canonical: `/${lang}`, languages: { fa: "/fa", en: "/en", "x-default": "/en" } },
    openGraph: og, twitter: { card: "summary_large_image", title, description: desc, images: [momo("pose_1_wave")] } };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dict[lang];
  const other = lang === "fa" ? "en" : "fa";

  // Structured data for search + answer engines (AEO): the FAQ text mirrors the visible page.
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "MobileApplication", name: "Moonu", description: t.meta.desc, operatingSystem: "Android", applicationCategory: "HealthApplication",
      inLanguage: ["fa", "en"], image: `${SITE}${momo("moonu_icon")}`, url: `${SITE}/${lang}`, downloadUrl: LINKS.download,
      author: { "@type": "Person", name: "Ehsan Firuzi" } },
    { "@type": "FAQPage", inLanguage: lang, mainEntity: t.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };

  return (
    <>
      <SkyBackground />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      <header className="sticky top-3 z-30 px-3">
        <nav aria-label="Main" className="glass mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full px-5">
          <Link href={`/${lang}`} className="flex items-center gap-2 text-2xl font-extrabold">
            <Image src={momo("moonu_icon")} alt="" width={40} height={40} className="rounded-xl" /> Moonu
          </Link>
          <div className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
            {([["#top", t.nav.home], ["#features", t.nav.features], ["#sounds", t.nav.sounds], ["#about", t.nav.about], ["#faq", t.nav.faq]] as const).map(([h, l]) => (
              <a key={h} href={h} className="border-b-2 border-transparent py-1 transition hover:border-accent-light hover:text-ink">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={`/${other}`} hrefLang={other} lang={other} className="glass rounded-full px-3 py-2 text-sm font-semibold">{other === "fa" ? "فارسی" : "English"}</Link>
            <a href="#download" className="btn-glow hidden h-11 items-center gap-2 rounded-full px-5 text-sm font-bold sm:inline-flex">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" /></svg>{t.nav.download}
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="relative isolate mx-3 flex min-h-[640px] items-center overflow-hidden rounded-[2.5rem] ring-1 ring-edge/30 md:mx-6 md:min-h-[740px]">
          <Image src={bgs.hero} alt="" fill priority quality={90} sizes="100vw" className="-z-10 object-cover object-[72%_center] md:object-right rtl:scale-x-[-1] feather-y" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-sky-top/60 via-sky-top/85 to-sky-top/95 md:bg-linear-to-r md:from-sky-top md:via-sky-top/80 md:to-sky-top/20 md:rtl:bg-linear-to-l" />
          <div className="mx-auto w-full max-w-6xl px-5 py-20">
            <div className="rise max-w-xl">
              <p className="shiny inline-block font-semibold">{t.hero.eyebrow}</p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.15] sm:text-6xl"><BlurText text={t.hero.h1} /></h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed">{t.hero.sub}</p>
              <div className="mt-8"><Download lang={lang} /></div>
              <p className="mt-4 text-sm text-muted">{t.hero.note}</p>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-accent-light">{t.why.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{t.why.title}</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((f, i) => (
              <SpotlightCard key={f.t} className="group p-7 text-center">
                <div className="mx-auto grid size-20 place-items-center rounded-[1.75rem] bg-accent/25 transition group-hover:-translate-y-1 group-hover:bg-accent/40">
                  {i === 2 ? <Image src={momo("expr_1_happy_sleepy")} alt="" width={48} height={48} className="size-12 object-contain" /> : (
                    <svg viewBox="0 0 24 24" className="size-10 text-accent-light" fill="currentColor" aria-hidden>
                      {i === 0 && <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />}
                      {i === 1 && <path className="text-moon" d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" />}
                      {i === 3 && <path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z" />}
                    </svg>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.t}</h3>
                <p className="mx-auto mt-2 max-w-60 text-sm leading-relaxed text-muted">{f.d}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section id="sounds" className="relative overflow-hidden py-20">
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -start-32 h-72 w-[28rem] rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.2fr]">
            <Phone shots={shots[lang]} label={t.explore.next} />
            <div>
              <p className="text-accent-light">{t.explore.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{t.explore.title}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">{t.explore.sub}</p>
              <div className="my-8"><SoundCards lang={lang} /></div>
              <a href="#download" className="btn-glow inline-flex h-12 items-center rounded-full px-7 font-bold transition hover:scale-105">{t.explore.cta}</a>
            </div>
          </div>
        </section>

        <section id="about" className="relative isolate mx-3 flex min-h-[520px] items-center overflow-hidden rounded-[2.5rem] ring-1 ring-edge/30 md:mx-6">
          <Image src={bgs.mission} alt="" fill quality={90} sizes="100vw" className="-z-10 object-cover object-[25%_center] rtl:scale-x-[-1] feather-y" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-sky-top/80 md:bg-transparent md:bg-linear-to-r md:from-transparent md:via-sky-top/55 md:to-sky-top/95 md:rtl:bg-linear-to-l" />
          <div className="mx-auto grid w-full max-w-6xl px-5 py-24 md:grid-cols-2">
            <div className="md:col-start-2">
              <p className="text-sm text-accent-light">{t.about.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{t.about.title}</h2>
              <p className="mt-4 max-w-md leading-relaxed">{t.about.sub}</p>
              <p className="mt-8 flex -rotate-3 items-center gap-2 text-xl font-semibold italic text-accent-light">
                {t.about.note}
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden><path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z" /></svg>
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">{t.faqTitle}</h2>
          <div className="mt-8 space-y-3">
            {t.faq.map((f) => (
              <details key={f.q} className="glass group rounded-2xl">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 px-5 py-3 font-bold">
                  {f.q}
                  <svg className="chev size-5 shrink-0 transition-transform" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="m5 8 5 5 5-5" /></svg>
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="download" className="relative overflow-hidden px-5 py-24 text-center">
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -end-32 h-72 w-[28rem] rounded-full bg-accent/20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold md:text-4xl">{t.cta.title}</h2>
          <p className="relative mt-2 text-muted">{t.cta.sub}</p>
          <div className="relative mt-8 flex justify-center"><div className="star-border rounded-2xl p-1.5"><Download lang={lang} size="h-16" /></div></div>
          <p className="relative mt-4 text-sm text-muted">{t.cta.avail}</p>
        </section>
      </main>

      <footer className="border-t border-edge/40 px-5 pb-28 pt-8 text-sm text-muted md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Moonu. {t.footer.rights}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{t.footer.other}:</span>
            <a href={LINKS.myketDev} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{t.footer.myket}</a>
            <a href={LINKS.bazaarDev} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{t.footer.bazaar}</a>
            <a href={`mailto:${LINKS.email}`} className="hover:text-ink">{t.footer.support}: {LINKS.email}</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-edge/40 bg-sky-top/85 p-3 backdrop-blur-md md:hidden">
        <a href="#download" className="btn-glow flex h-12 items-center justify-center rounded-full font-extrabold">{t.nav.download}</a>
      </div>
    </>
  );
}
