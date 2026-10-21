import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "@/components/Download";
import { SkyBackground, SpotlightCard } from "@/components/Fx";
import { Phone, SoundCards } from "@/components/Interactive";
import { StickyCta } from "@/components/StickyCta";
import { dict } from "@/lib/i18n";
import { LINKS, SITE, bgs, icon, isLang, momo, shots } from "@/lib/links";

type P = { params: Promise<{ lang: string }> };

const STICKY_HIDE_WHILE_VISIBLE = ["hero-cta", "download"];
const chip = "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-muted transition hover:text-ink";

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { title, desc } = dict[lang].meta;
  // metadataBase already carries the base path, so these must NOT include it
  const ogImage = "/assets/moonu_momo/pose_1_wave.png";
  const og = { url: `/${lang}`, title, description: desc, siteName: "Moonu", type: "website" as const,
    locale: lang === "fa" ? "fa_IR" : "en_US", alternateLocale: lang === "fa" ? "en_US" : "fa_IR",
    images: [{ url: ogImage, alt: "Momo" }] };
  return { title, description: desc, alternates: { canonical: `/${lang}`, languages: { fa: "/fa", en: "/en", "x-default": "/en" } },
    openGraph: og, twitter: { card: "summary_large_image", title, description: desc, images: [ogImage] } };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dict[lang];
  const other = lang === "fa" ? "en" : "fa";
  // Art direction: portrait artwork on phones, landscape from 768px up. Only the matching file is downloaded.
  const heroImg = { alt: "", fill: true, quality: 90, sizes: "100vw", priority: true } as const;
  const { props: { srcSet: heroWide, ...heroFallback } } = getImageProps({ ...heroImg, src: bgs.hero });
  const { props: { srcSet: heroTall } } = getImageProps({ ...heroImg, src: bgs.heroMobile });
  const links = [["#features", t.nav.features], ["#sounds", t.nav.sounds], ["#how", t.nav.how], ["#faq", t.nav.faq]] as const;

  // Structured data for search + answer engines (AEO): the FAQ text mirrors the visible page.
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "MobileApplication", name: "Moonu", description: t.meta.desc, operatingSystem: "Android", applicationCategory: "LifestyleApplication",
      inLanguage: ["fa", "en"], image: new URL(momo("moonu_icon"), SITE).toString(), url: `${SITE}/${lang}`, downloadUrl: LINKS.download,
      author: { "@type": "Person", name: "Ehsan Firuzi" } },
    { "@type": "FAQPage", inLanguage: lang, mainEntity: t.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ] };

  return (
    <>
      <SkyBackground />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-moon focus:px-4 focus:py-2 focus:font-bold focus:text-on-accent">{t.a11y.skip}</a>

      <header className="z-30 px-3 pt-3 md:sticky md:top-3 md:pt-0">
        <nav aria-label={t.nav.label} className="mx-auto max-w-6xl">
          <div className="glass flex h-16 items-center justify-between gap-3 rounded-full px-4 sm:px-5">
            <Link href={`/${lang}`} className="flex items-center gap-2 text-2xl font-extrabold">
              <Image src={momo("moonu_icon")} alt="" width={40} height={40} className="rounded-xl" /> Moonu
            </Link>
            <ul className="hidden items-center gap-6 text-sm font-semibold md:flex">
              <li><a href="#top" className={chip}>{t.nav.home}</a></li>
              {links.map(([h, l]) => <li key={h}><a href={h} className={chip}>{l}</a></li>)}
            </ul>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href={`/${other}`} hrefLang={other} lang={other} className="glass inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold">{other === "fa" ? "فارسی" : "English"}</Link>
              <a href="#download" className="btn-glow hidden h-11 items-center gap-2 rounded-full px-5 text-sm font-bold sm:inline-flex">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" /></svg>{t.nav.download}
              </a>
            </div>
          </div>
          {/* small screens: the section links wrap into a compact row instead of a menu */}
          <ul className="mt-1 flex flex-wrap justify-center gap-x-1 md:hidden">
            {links.map(([h, l]) => <li key={h}><a href={h} className={chip}>{l}</a></li>)}
          </ul>
        </nav>
      </header>

      <main id="main">
        <section id="top" aria-labelledby="hero-title" className="relative isolate mx-3 mt-2 overflow-hidden rounded-[2rem] ring-1 ring-edge/30 md:mx-6 md:mt-4 md:rounded-[2.5rem]">
          <picture>
            <source media="(min-width: 768px)" srcSet={heroWide} />
            <source media="(max-width: 767px)" srcSet={heroTall} />
            <img {...heroFallback} alt="" className="-z-10 object-cover object-center md:object-right md:rtl:scale-x-[-1] feather-y" />
          </picture>
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-sky-top/85 via-sky-top/60 to-sky-top/15 lg:bg-linear-to-r lg:from-sky-top lg:via-sky-top/85 lg:to-sky-top/40 lg:rtl:bg-linear-to-l" />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-8 lg:py-24">
            <div className="rise max-w-xl">
              <p className="font-semibold text-accent-light">{t.hero.eyebrow}</p>
              <h1 id="hero-title" className="mt-3 text-balance [text-shadow:0_2px_14px_rgb(5_8_24/.7)] text-[clamp(2.25rem,8vw,3.75rem)] font-extrabold leading-[1.25]">{t.hero.h1}</h1>
              <p className="mt-5 max-w-md text-base leading-relaxed sm:text-lg">{t.hero.sub}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {t.hero.benefits.map((b) => (
                  <li key={b} className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold">
                    <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-moon" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>{b}
                  </li>
                ))}
              </ul>
              <div id="hero-cta" className="mt-7"><Download lang={lang} /></div>
              <p className="mt-3 text-sm text-muted">{t.hero.note}</p>
            </div>
            <div className="mx-auto w-full max-w-[16rem] sm:max-w-[17rem] lg:max-w-[18rem]">
              <Phone shots={shots[lang]} labels={t.carousel} priority />
            </div>
          </div>
        </section>

        <section id="features" aria-labelledby="features-title" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-accent-light">{t.why.eyebrow}</p>
          <h2 id="features-title" className="mt-2 text-3xl font-extrabold md:text-4xl">{t.why.title}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.features.map((f, i) => (
              <li key={f.t} className="flex">
                <SpotlightCard className="group flex w-full items-center gap-4 p-5 text-start sm:flex-col sm:p-7 sm:text-center">
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent/25 transition motion-reduce:transition-none sm:size-20 sm:rounded-[1.75rem] sm:group-hover:-translate-y-1 sm:group-hover:bg-accent/40">
                    {i === 2 ? <Image src={momo("expr_1_happy_sleepy")} alt="" width={48} height={48} className="size-9 object-contain sm:size-12" /> : (
                      <svg viewBox="0 0 24 24" className="size-8 text-accent-light sm:size-10" fill="currentColor" aria-hidden>
                        {i === 0 && <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />}
                        {i === 1 && <path className="text-moon" d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" />}
                        {i === 3 && <path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z" />}
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold sm:mt-2">{f.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted sm:mx-auto sm:max-w-60">{f.d}</p>
                  </div>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </section>

        <section id="sounds" aria-labelledby="sounds-title" className="relative overflow-hidden py-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -start-32 h-72 w-[28rem] rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <p className="text-accent-light">{t.explore.eyebrow}</p>
              <h2 id="sounds-title" className="mt-2 text-3xl font-extrabold md:text-4xl">{t.explore.title}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">{t.explore.sub}</p>
              <div className="my-8"><SoundCards lang={lang} label={t.explore.group} /></div>
              <a href="#download" className="btn-glow inline-flex h-12 items-center rounded-full px-7 font-bold transition motion-reduce:transition-none hover:scale-105 motion-reduce:hover:scale-100">{t.explore.cta}</a>
            </div>
            <div className="mx-auto w-full max-w-[16rem] sm:max-w-[17rem]">
              <Phone shots={shots[lang]} labels={t.carousel} initial={1} />
            </div>
          </div>
        </section>

        <section id="how" aria-labelledby="how-title" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-accent-light">{t.how.eyebrow}</p>
          <h2 id="how-title" className="mt-2 text-3xl font-extrabold md:text-4xl">{t.how.title}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {t.how.steps.map((s, i) => (
              <li key={s.t} className="glass flex items-start gap-4 rounded-3xl p-5 md:flex-col md:p-7">
                <div className="relative shrink-0">
                  <div className="grid size-14 place-items-center rounded-2xl bg-accent/25">
                    {i === 0 && <Image src={icon("rain")} alt="" width={32} height={32} className="size-8" />}
                    {i === 1 && (
                      <svg viewBox="0 0 24 24" className="size-8 text-accent-light" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                        <path d="M5 4v16M12 4v16M19 4v16" /><circle cx="5" cy="9" r="2.2" fill="currentColor" /><circle cx="12" cy="15" r="2.2" fill="currentColor" /><circle cx="19" cy="8" r="2.2" fill="currentColor" />
                      </svg>
                    )}
                    {i === 2 && <Image src={momo("pose_3_sleeping")} alt="" width={40} height={40} className="size-9 object-contain" />}
                  </div>
                  <span aria-hidden className="absolute -end-2 -top-2 grid size-6 place-items-center rounded-full bg-moon text-xs font-extrabold text-on-accent">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside aria-labelledby="privacy-title" className="glass mt-6 rounded-3xl p-6 md:p-8">
            <h3 id="privacy-title" className="text-lg font-bold">{t.how.privacy.title}</h3>
            <ul className="mt-4 space-y-3">
              {t.how.privacy.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                  <svg viewBox="0 0 24 24" className="mt-1 size-4 shrink-0 text-moon" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">{t.how.privacy.contact}</p>
          </aside>
        </section>

        <section id="about" aria-labelledby="about-title" className="relative isolate mx-3 flex min-h-[360px] items-center overflow-hidden rounded-[2rem] ring-1 ring-edge/30 md:mx-6 md:min-h-[460px] md:rounded-[2.5rem]">
          <Image src={bgs.mission} alt="" fill quality={90} sizes="100vw" className="-z-10 object-cover object-[25%_center] rtl:scale-x-[-1] feather-y" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-sky-top/60 md:bg-transparent md:bg-linear-to-r md:from-transparent md:via-sky-top/60 md:to-sky-top/95 md:rtl:bg-linear-to-l" />
          <div className="mx-auto grid w-full max-w-6xl px-5 py-16 md:grid-cols-2 md:py-20">
            <div className="md:col-start-2">
              <p className="text-sm text-accent-light">{t.about.eyebrow}</p>
              <h2 id="about-title" className="mt-2 text-3xl font-extrabold [text-shadow:0_2px_14px_rgb(5_8_24/.7)] md:text-4xl">{t.about.title}</h2>
              <p className="mt-4 max-w-md leading-relaxed [text-shadow:0_1px_10px_rgb(5_8_24/.8)]">{t.about.sub}</p>
              <p className="mt-6 flex items-center gap-2 text-lg font-semibold italic text-accent-light">
                {t.about.note}
                <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor" aria-hidden><path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z" /></svg>
              </p>
            </div>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="faq-title" className="text-3xl font-extrabold md:text-4xl">{t.faqTitle}</h2>
          <div className="mt-8 space-y-3">
            {t.faq.map((f) => (
              <details key={f.q} className="glass group rounded-2xl">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-3 font-bold">
                  {f.q}
                  <svg className="chev size-5 shrink-0 transition-transform motion-reduce:transition-none" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="m5 8 5 5 5-5" /></svg>
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="download" aria-labelledby="download-title" className="relative overflow-hidden px-5 py-20 text-center md:py-24">
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -end-32 h-72 w-[28rem] rounded-full bg-accent/20 blur-3xl" />
          <h2 id="download-title" className="relative text-3xl font-extrabold md:text-4xl">{t.cta.title}</h2>
          <p className="relative mt-2 text-muted">{t.cta.sub}</p>
          <div className="relative mt-8 flex justify-center"><Download lang={lang} size="h-16" /></div>
         
        </section>
      </main>

      <footer className="border-t border-edge/40 px-5 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-8 text-sm text-muted md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p>© {new Date().getFullYear()} Moonu. {t.footer.rights}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>{t.footer.other}:</span>
            <a href={LINKS.myketDev} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-ink">{t.footer.myket}</a>
            <a href={LINKS.bazaarDev} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-ink">{t.footer.bazaar}</a>
            <a href={`mailto:${LINKS.email}`} className="inline-flex min-h-11 items-center [overflow-wrap:anywhere] hover:text-ink">{t.footer.support}:&nbsp;<bdi>{LINKS.email}</bdi></a>
          </div>
        </div>
      </footer>

      <StickyCta href="#download" label={t.nav.download} watch={STICKY_HIDE_WHILE_VISIBLE} />
    </>
  );
}
