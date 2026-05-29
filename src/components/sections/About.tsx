import vfLogo from "@/assets/vf-logo.webp";
import { Reveal } from "@/components/Reveal";
import { Sparkles, Zap, Cpu, Globe } from "lucide-react";

const highlights = [
  { icon: Sparkles, label: "5+ years of professional development" },
  { icon: Zap, label: "3+ years building AI-powered solutions" },
  { icon: Cpu, label: "ChatGPT, OpenAI, TensorFlow, PyTorch" },
  { icon: Globe, label: "Cloud-native on AWS, GCP, Azure" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal effect="fade">
          <h2 className="text-center font-display text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            Get to know my background, what I build, and how I help teams ship modern AI-powered products.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <Reveal effect="spinner">
            <div className="relative rounded-3xl glass p-8 shadow-neon">
              <div className="absolute -inset-px rounded-3xl bg-gradient-brand opacity-20 blur-xl" />
              <img src={vfLogo} alt="VF" className="relative mx-auto w-full max-w-md" />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal effect="thread" className="origin-left">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Full-Stack Developer{" "}
                <span className="text-gradient">| AI Integration Specialist</span>
              </h3>
            </Reveal>
            <Reveal effect="fade" delay={0.1}>
              <p className="leading-relaxed text-foreground/85">
                Need a fast, modern website with smart AI features? I'm a Full-Stack
                Developer specializing in modern web applications and AI integration.
                I help businesses build fast, scalable, and user-friendly products with
                intelligent features that improve automation, engagement, and the
                overall user experience.
              </p>
            </Reveal>
            <Reveal effect="fade" delay={0.2}>
              <p className="leading-relaxed text-muted-foreground">
                With 5+ years of web development experience and 3+ years working with
                AI-powered solutions, I build everything from responsive websites to
                intelligent platforms powered by ChatGPT, automation systems,
                recommendation engines, and custom APIs.
              </p>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              {highlights.map((h, i) => (
                <Reveal key={h.label} effect="diamond" delay={i * 0.08}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-background">
                      <h.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-foreground/90">{h.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
