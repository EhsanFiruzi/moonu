"use client";
import { useEffect, useRef } from "react";

/** Words blur in one after another (reactbits "Blur Text"). Splits by word so Persian letters stay joined. */
export function BlurText({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="blurin inline-block" style={{ animationDelay: `${i * 130}ms` }}>
          {w}{i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </>
  );
}

/** Card with a soft glow that follows the cursor (reactbits "Spotlight Card"). */
export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className={`spot glass rounded-3xl ${className}`}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}>
      {children}
    </div>
  );
}

/** Top glow, plus a dark veil that deepens as the page scrolls (the stars stay above it). */
export function SkyBackground() {
  const dark = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (dark.current) dark.current.style.opacity = String(p * 0.88);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div ref={dark} className="absolute inset-0 bg-[#01020a] opacity-0" />
    </div>
  );
}
