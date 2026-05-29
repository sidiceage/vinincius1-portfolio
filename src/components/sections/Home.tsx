import vfLogo from "@/assets/vf-logo.webp";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      {/* ambient orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[oklch(0.7_0.22_240)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[oklch(0.7_0.22_300)]/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-24 lg:grid-cols-2">
        <div className="space-y-7">
          <Reveal effect="slide">
            <span className="inline-flex items-center rounded-full border border-[oklch(0.7_0.22_240)]/40 bg-[oklch(0.7_0.22_240)]/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[oklch(0.85_0.18_200)]">
              5+ Years · AI Integration Specialist
            </span>
          </Reveal>
          <Reveal effect="fade" delay={0.1}>
            <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I'm <br />
              <span className="text-gradient">Vinicius Fernandes</span>
            </h1>
          </Reveal>
          <Reveal effect="fade" delay={0.2}>
            <p className="text-xl text-foreground/85">
              I am a{" "}
              <span className="text-[oklch(0.85_0.18_200)]">Full-Stack Developer </span>
              <span className="ml-1 inline-block w-[2px] h-6 align-middle bg-[oklch(0.85_0.18_200)] animate-pulse" />
              <span className="text-[oklch(0.85_0.18_200)]"> AI Integration Specialist</span>
            </p>
          </Reveal>
          <Reveal effect="fade" delay={0.3}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Crafting fast, scalable, AI-powered web products. I help businesses
              ship modern applications with intelligent features that improve
              automation, engagement, and user experience.
            </p>
          </Reveal>
          <Reveal effect="fade" delay={0.45}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-background shadow-neon transition-transform hover:scale-[1.03]"
              >
                View My Work →
              </a>
              <a
                href="#connect"
                className="rounded-xl border border-[oklch(0.7_0.22_240)]/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[oklch(0.7_0.22_240)]/10"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        {/* glowing circle */}
        <Reveal effect="diamond" delay={0.2} className="flex justify-center">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-brand blur-3xl"
            />
            <div className="relative h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] rounded-full bg-white shadow-glow animate-pulse-glow overflow-hidden ring-4 ring-[oklch(0.85_0.18_200)]/60">
              <img
                src={vfLogo}
                alt="Vinicius Fernandes logo"
                className="absolute inset-0 h-full w-full object-cover scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-[oklch(0.85_0.18_200)]/40 animate-spin-slow" style={{ boxShadow: "0 0 60px oklch(0.85 0.18 200 / 0.4)" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
