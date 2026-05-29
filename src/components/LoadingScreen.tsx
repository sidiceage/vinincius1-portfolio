import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// "VF" outline path (drawn within a 600x400 viewBox)
const VF_PATH =
  "M40 40 L160 340 L280 40 M340 340 L340 40 L520 40 M340 190 L500 190";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 3200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / duration) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setHidden(true), 600);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (hidden) {
      const t = setTimeout(onDone, 700);
      return () => clearTimeout(t);
    }
  }, [hidden, onDone]);

  const pct = Math.round(progress);
  const dash = 1 - progress / 100;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <svg
            viewBox="0 0 600 400"
            className="w-[min(80vw,640px)] h-auto"
            fill="none"
          >
            <defs>
              <linearGradient id="vfgrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
                <stop offset="50%" stopColor="oklch(0.7 0.22 240)" />
                <stop offset="100%" stopColor="oklch(0.7 0.22 300)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* track */}
            <path
              d={VF_PATH}
              stroke="oklch(0.25 0.04 260)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* progress */}
            <path
              d={VF_PATH}
              stroke="url(#vfgrad)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={dash}
              filter="url(#glow)"
            />
          </svg>
          <div className="mt-10 font-display text-5xl font-bold text-gradient tabular-nums">
            {pct}%
          </div>
          <div className="mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Initializing Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
