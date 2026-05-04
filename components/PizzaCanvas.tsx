"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useScroll, useSpring, motion, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 168;
const pad = (n: number) => String(n).padStart(3, "0");

export default function PizzaCanvas({ children }: { children?: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(smoothProgress, "change", (v) => setOverlayOpacity(Math.max(0, 1 - v * 4)));

  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/sequence/pizza_${pad(i)}.webp`;
      const done = () => { loaded++; setLoadedCount(loaded); if (loaded === FRAME_COUNT) setIsLoaded(true); };
      img.onload = done; img.onerror = done;
      imgs.push(img);
    }
    setImages(imgs);
    return () => { imgs.forEach((i) => { i.onload = null; i.onerror = null; }); setImages([]); };
  }, []);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); if (!ctx) return;
    let raf: number, cur = 0;
    const render = () => {
      const target = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(smoothProgress.get() * FRAME_COUNT)));
      if (target !== cur) cur = target;
      const img = images[cur];
      if (img?.complete && img.naturalWidth) {
        const p = canvas.parentElement;
        if (p && (canvas.width !== p.clientWidth || canvas.height !== p.clientHeight)) { canvas.width = p.clientWidth; canvas.height = p.clientHeight; }
        ctx.fillStyle = "#0A0A0A"; ctx.fillRect(0, 0, canvas.width, canvas.height);
        const cr = canvas.width / canvas.height, ir = img.width / img.height;
        let dw = canvas.width, dh = canvas.height, ox = 0, oy = 0;
        if (cr > ir) { dh = canvas.width / ir; oy = (canvas.height - dh) / 2; } else { dw = canvas.height * ir; ox = (canvas.width - dw) / 2; }
        ctx.drawImage(img, ox, oy, dw, dh);
      }
      raf = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(raf);
  }, [isLoaded, images, smoothProgress]);

  const pct = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] z-50">
            <div className="text-muted text-xs tracking-[0.3em] font-lusitana mb-6 uppercase">Preparando</div>
            <div className="w-48 h-[1px] bg-amber/10 relative overflow-hidden">
              <motion.div className="absolute top-0 left-0 h-full bg-amber/80" initial={{ width: "0%" }} animate={{ width: `${pct}%` }} transition={{ duration: 0.1, ease: "linear" }} />
            </div>
            <div className="text-amber/60 text-xs mt-4 font-mono tracking-widest">{pct}%</div>
          </div>
        )}
        <canvas ref={canvasRef} className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
        {/* Bottom gradient fade to black — seamless transition to next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-[30vh] pointer-events-none z-20"
          style={{
            background: "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.6) 40%, transparent 100%)"
          }}
        />
        {isLoaded && children && (
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ opacity: overlayOpacity }}>
            <div className="pointer-events-auto w-full h-full">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
}
