import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Cloud } from "lucide-react";

type Skill = { name: string; level: number };

const groups: { title: string; icon: any; skills: Skill[] }[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js / Express.js", level: 95 },
      { name: "Django", level: 85 },
      { name: "Laravel", level: 85 },
      { name: "Python / PHP", level: 90 },
      { name: "REST APIs / GraphQL", level: 90 },
    ],
  },
  {
    title: "AI Tools & Integration",
    icon: Brain,
    skills: [
      { name: "LLM Integration", level: 95 },
      { name: "LangChain / LangGraph", level: 90 },
      { name: "Prompt Engineering/Fine-Tuning", level: 85 },
      { name: "OpenAI / Claude / Gemini API Integration", level: 85 },
      { name: "Embeddings & Semantic Search", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 90 },
      { name: "Google Cloud", level: 85 },
      { name: "Azure", level: 85 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

function Bar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-brand shadow-neon"
      />
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal effect="fade">
          <h2 className="text-center font-display text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            A comprehensive overview of my technical expertise and proficiency
            across modern web stacks and AI tooling.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g.title} effect={gi % 2 === 0 ? "slide" : "diamond"} delay={gi * 0.08}>
              <div className="rounded-2xl glass p-7 transition-transform hover:-translate-y-1">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-background shadow-neon">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold">{g.title}</h3>
                </div>
                <ul className="space-y-4">
                  {g.skills.map((s) => (
                    <li key={s.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="text-[oklch(0.85_0.18_200)] tabular-nums">{s.level}%</span>
                      </div>
                      <Bar value={s.level} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
