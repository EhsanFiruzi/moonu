import { LINKS, type Lang } from "@/lib/links";

export function Download({ lang, size = "h-14" }: { lang: Lang; size?: string }) {
  return (
    <a href={LINKS.download} target="_blank" rel="noopener noreferrer" aria-label="Myket" className="inline-block">
      {/* plain img: SVG badge keeps its own aspect ratio */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/assets/svg_icons/get_from_myket-${lang}.svg`} alt="Myket" className={`${size} w-auto transition hover:scale-105`} />
    </a>
  );
}
