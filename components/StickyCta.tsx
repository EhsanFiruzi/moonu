"use client";
import { useEffect, useState } from "react";

/**
 * Bottom download bar for small screens. It hides while the hero CTA or the final #download
 * section is on screen (IntersectionObserver, so no scroll listeners) and is `inert` when hidden.
 * State only changes when visibility flips, not on every scroll tick.
 */
export function StickyCta({ href, label, watch }: { href: string; label: string; watch: string[] }) {
  const [hidden, setHidden] = useState(true); // starts hidden: the hero CTA is on screen at load
  useEffect(() => {
    const visible = new Set<string>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      }
      setHidden(visible.size > 0);
    });
    for (const id of watch) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [watch]);

  return (
    <div inert={hidden} aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-edge/40 bg-sky-top/90 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition duration-300 motion-reduce:transition-none md:hidden ${hidden ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
      <a href={href}
        className="btn-glow flex h-12 items-center justify-center rounded-full font-extrabold">{label}</a>
    </div>
  );
}
