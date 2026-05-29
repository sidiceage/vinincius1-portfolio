import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Effect = "fade" | "thread" | "diamond" | "spinner" | "slide";

const variants: Record<Effect, Variants> = {
  fade: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
  thread: {
    hidden: { opacity: 0, scaleX: 0 },
    show: { opacity: 1, scaleX: 1, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
  },
  diamond: {
    hidden: { opacity: 0, rotate: 45, scale: 0.6 },
    show: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.7, ease: "backOut" } },
  },
  spinner: {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    show: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
  },
  slide: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
};

export function Reveal({
  children,
  effect = "fade",
  delay = 0,
  className,
}: {
  children: ReactNode;
  effect?: Effect;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants[effect]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
