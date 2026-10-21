"use client";
import { useRef } from "react";

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

/** Slow clouds and a top glow behind the whole page. */
export function SkyBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="cloud" style={{ top: "10%", left: "-10%", width: "55vw", height: "14rem" }} />
      <div className="cloud" style={{ top: "45%", right: "-15%", width: "60vw", height: "16rem", animationDuration: "120s", animationDirection: "alternate-reverse" }} />
      <div className="cloud" style={{ bottom: "-4%", left: "10%", width: "70vw", height: "14rem", animationDuration: "105s" }} />
    </div>
  );
}
