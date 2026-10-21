"use client";
import Image from "next/image";
import { useState } from "react";
import { shotSize, sounds, type Lang } from "@/lib/links";

type PhoneLabels = { region: string; prev: string; next: string; dot: string; alt: string };
const fill = (s: string, n: number, total: number) => s.replace("{n}", String(n)).replace("{total}", String(total));

/**
 * App screenshots in a phone frame with explicit previous / next buttons and dots.
 * Only the active screenshot (plus the next one, and any already seen) is mounted, so the
 * others are not downloaded up front. The frame reserves its aspect ratio, so nothing shifts.
 */
export function Phone({ shots, labels, priority = false, initial = 0 }: { shots: string[]; labels: PhoneLabels; priority?: boolean; initial?: number }) {
  const [i, setI] = useState(initial);
  const [seen, setSeen] = useState<number[]>([initial]);
  const total = shots.length;
  const go = (n: number) => {
    const k = (n + total) % total;
    setI(k);
    setSeen((s) => (s.includes(k) ? s : [...s, k]));
  };
  const arrow = "grid size-11 shrink-0 place-items-center rounded-full text-accent-light transition hover:bg-white/10 motion-reduce:transition-none";
  return (
    <div role="group" aria-roledescription="carousel" aria-label={labels.region} className="w-full">
      <div className="rounded-[2.4rem] border-4 border-[#262d6e] bg-black p-1.5 shadow-2xl shadow-accent/30">
        <div className="relative overflow-hidden rounded-[1.9rem]" style={{ aspectRatio: `${shotSize.width} / ${shotSize.height}` }}>
          {shots.map((s, n) => {
            const active = n === i;
            if (!active && !seen.includes(n) && n !== (i + 1) % total) return null;
            return (
              <Image key={s} src={s} alt={active ? fill(labels.alt, n + 1, total) : ""} aria-hidden={!active} fill quality={90}
                priority={priority && n === initial} sizes="(max-width:640px) 256px, 288px"
                className={`object-contain transition-opacity duration-500 motion-reduce:transition-none ${active ? "opacity-100" : "opacity-0"}`} />
            );
          })}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{fill(labels.alt, i + 1, total)}</p>
      <div className="mt-3 flex items-center justify-center">
        <button type="button" className={arrow} aria-label={labels.prev} onClick={() => go(i - 1)}>
          <svg viewBox="0 0 24 24" className="size-5 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m14 6-6 6 6 6" /></svg>
        </button>
        {shots.map((s, n) => (
          <button key={s} type="button" aria-label={fill(labels.dot, n + 1, total)} aria-current={n === i ? "true" : undefined} onClick={() => go(n)}
            className="grid size-11 place-items-center rounded-full">
            <span aria-hidden className={`h-2.5 rounded-full transition-all motion-reduce:transition-none ${n === i ? "w-7 bg-accent-light" : "w-2.5 bg-white/40"}`} />
          </button>
        ))}
        <button type="button" className={arrow} aria-label={labels.next} onClick={() => go(i + 1)}>
          <svg viewBox="0 0 24 24" className="size-5 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}

/**
 * Sound categories. There are no audio previews on the website (the sounds live inside the app),
 * so this is a selector only: tapping a tile shows its name and description. No play icon.
 */
export function SoundCards({ lang, label }: { lang: Lang; label: string }) {
  const [i, setI] = useState(0);
  const cur = sounds[i];
  return (
    <div>
      <div aria-live="polite" className="mb-5 min-h-[4.5rem]">
        <p className="text-lg font-bold text-accent-light">{cur[lang]}</p>
        <p className="mt-1 leading-relaxed text-muted">{lang === "fa" ? cur.dfa : cur.den}</p>
      </div>
      <div role="group" aria-label={label} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {sounds.map((s, n) => {
          const on = n === i;
          return (
            <button key={s.id} type="button" aria-pressed={on} onClick={() => setI(n)}
              className={`relative aspect-square overflow-hidden rounded-3xl border text-start transition duration-300 motion-reduce:transition-none motion-reduce:transform-none active:scale-95 ${on ? "z-10 scale-105 border-accent-light ring-2 ring-accent-light shadow-[0_0_24px_rgba(154,163,255,.45)]" : "border-edge hover:-translate-y-0.5"}`}>
              <Image src={s.bgUrl} alt="" fill quality={90} sizes="(max-width:640px) 45vw, (max-width:1024px) 30vw, 160px" className="object-cover" />
              <span aria-hidden className="absolute inset-0 bg-linear-to-t from-sky-top/90 via-sky-top/25 to-transparent" />
              <span aria-hidden className="absolute start-2 top-2 grid size-8 place-items-center rounded-full bg-sky-top/60">
                <Image src={s.iconUrl} alt="" width={20} height={20} className="size-5" />
              </span>
              {on && (
                <svg viewBox="0 0 24 24" className="absolute end-2 top-2 size-6 rounded-full bg-accent-light p-1 text-on-accent" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
              )}
              <span className="absolute inset-x-2.5 bottom-2 line-clamp-2 text-sm font-bold leading-snug [text-shadow:0_1px_6px_rgb(5_8_24/.9)]">{s[lang]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
