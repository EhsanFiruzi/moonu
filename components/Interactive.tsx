"use client";
import Image from "next/image";
import { useState } from "react";
import { sounds, type Lang } from "@/lib/links";

const auto = { width: "100%", height: "auto" } as const; // keeps each image's real aspect ratio

/** Tap the phone or a dot to flip through app screens. */
export function Phone({ shots, label }: { shots: string[]; label: string }) {
  const [i, setI] = useState(0);
  return (
    <div className="mx-auto w-60 sm:w-72">
      <button type="button" aria-label={label} onClick={() => setI((i + 1) % shots.length)}
        className="block w-full -rotate-6 rounded-[2.6rem] border-4 border-[#262d6e] bg-black p-1.5 shadow-2xl shadow-accent/30 transition duration-300 hover:rotate-0 active:scale-[.98]">
        <span className="grid overflow-hidden rounded-[2.1rem]">
          {shots.map((s, n) => (
            <Image key={s} src={s} alt="" width={0} height={0} quality={95} sizes="(max-width:640px) 240px, 288px" style={auto}
              className={`col-start-1 row-start-1 transition-opacity duration-500 ${n === i ? "opacity-100" : "opacity-0"}`} />
          ))}
        </span>
      </button>
      <div className="mt-5 flex justify-center gap-2">
        {shots.map((s, n) => (
          <button key={s} type="button" aria-label={`${n + 1}`} aria-current={n === i} onClick={() => setI(n)}
            className={`h-2.5 rounded-full transition-all ${n === i ? "w-7 bg-accent-light" : "w-2.5 bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
}

/** Tilted category tiles; tapping one straightens it and shows its description. */
export function SoundCards({ lang }: { lang: Lang }) {
  const [i, setI] = useState(0);
  const cur = sounds[i];
  return (
    <div>
      <p aria-live="polite" className="mb-5 min-h-12 text-lg font-semibold text-accent-light">
        {cur[lang]} <span className="font-normal text-muted">— {lang === "fa" ? cur.dfa : cur.den}</span>
      </p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {sounds.map((s, n) => (
          <button key={s.id} type="button" aria-pressed={n === i} onClick={() => setI(n)}
            className={`relative aspect-square overflow-hidden rounded-3xl border border-edge text-start transition duration-300 active:scale-95 ${n % 2 ? "rotate-3" : "-rotate-3"} ${n === i ? "z-10 scale-110 rotate-0 ring-2 ring-accent-light shadow-[0_0_28px_rgba(154,163,255,.5)]" : "hover:rotate-0 hover:scale-105"}`}>
            <Image src={s.bgUrl} alt="" fill quality={90} sizes="(max-width:640px) 30vw, 160px" className="object-cover" />
            <span className="absolute inset-0 bg-linear-to-t from-sky-top/80 via-transparent to-transparent" />
            <Image src={s.iconUrl} alt="" width={28} height={28} className="absolute start-2 top-2 size-6 sm:size-7" />
            <span className="absolute inset-x-2 bottom-2 flex items-center justify-between text-xs font-bold sm:text-sm">
              {s[lang]}
              <svg viewBox="0 0 24 24" className="size-5 shrink-0 rounded-full bg-white/90 p-1 text-sky-top" aria-hidden><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
