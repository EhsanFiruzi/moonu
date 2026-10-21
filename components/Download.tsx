import { dict } from "@/lib/i18n";
import { LINKS, type Lang } from "@/lib/links";

export function Download({ lang, size = "h-14" }: { lang: Lang; size?: string }) {
  return (
    <a href={LINKS.download} target="_blank" rel="noopener noreferrer" className="inline-block rounded-2xl">
      {/* plain img: SVG badge keeps its own aspect ratio */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/assets/svg_icons/get_from_myket-${lang}.svg`} alt={dict[lang].a11y.download} className={`${size} w-auto transition motion-reduce:transition-none hover:scale-105 motion-reduce:hover:scale-100`} />
    </a>
  );
}
