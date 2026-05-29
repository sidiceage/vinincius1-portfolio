import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import chatbotImg from "@/assets/project-chatbot.png";
import ecommerceImg from "@/assets/project-ecommerce.png";
import img3 from "@/assets/project-3.png";
import img4 from "@/assets/project-4.png";
import img5 from "@/assets/project-5.png";
import img6 from "@/assets/project-6.png";

const categories = ["All", "Web Apps", "AI"] as const;
type Cat = (typeof categories)[number];

const projects: { title: string; desc: string; cat: Exclude<Cat, "All">; tags: string[]; hue: string; image?: string; url?: string }[] = [
  {
    title: "AI Voice Chatbot",
    desc: "Implemented advanced algorithms for TTS and STT to achieve human-like voice quality and accuracy.",
    cat: "AI",
    tags: [
      "Speech Synthesis",
      "Chatbot",
      "Business Workflow Automation",
      "Cloud Infrastructure & System Deployment",
      "Dashboard UI/UX Development",
    ],
    hue: "from-[oklch(0.7_0.22_240)] to-[oklch(0.7_0.22_300)]",
    image: chatbotImg,
    url: "https://sistava.com/en/",
  },
  {
    title: "AI for Furniture & Interior E-commerce",
    desc: "AI-powered product operations for furniture and interior brands. From import to enrichment, photography, 3D models, and SEO, automated end-to-end.",
    cat: "Web Apps",
    tags: [
      "AI / LLM Development",
      "Web Development",
      "E-commerce API Integration",
      "Cloud & Automation Systems",
    ],
    hue: "from-[oklch(0.85_0.18_200)] to-[oklch(0.7_0.22_240)]",
    image: ecommerceImg,
    url: "https://www.automatedcommerce.ai/use-cases/furniture",
  },
  {
    title: "Affordable & Free CRM Solutions for Businesses",
    desc: "A business software website that helps companies find affordable and free CRM tools, automation platforms, and productivity solutions through comparisons, reviews, and guides.",
    cat: "Web Apps",
    tags: [
      "website development",
      "CMS/blog system",
      "SEO optimization",
      "CRM/API knowledge",
      "Content marketing system",
    ],
    hue: "from-[oklch(0.7_0.22_300)] to-[oklch(0.85_0.18_200)]",
    image: img3,
    url: "https://www.vendorbox.io/affordable-free-crms/",
  },
  {
    title: "AI-Powered Social Media Scheduling Platform",
    desc: "Postiz is a modern social media management platform that helps users create, schedule, automate, and manage content across multiple social media channels with AI-powered tools and automation workflows.",
    cat: "Web Apps",
    tags: [
      "website development",
      "AI Integration & Automation",
      "REST API & Social Media API Integration",
      "Cloud Infrastructure & Database Management",
      "Modern UI/UX Dashboard Development",
    ],
    hue: "from-[oklch(0.7_0.22_240)] to-[oklch(0.85_0.18_200)]",
    image: img4,
    url: "https://postiz.com/?utm_source=chatgpt.com",
  },
  {
    title: "AI Copilot Integration Platform for SaaS Applications",
    desc: "Superflows is an AI integration platform that helps SaaS companies add AI copilots, chat assistants, and intelligent workflows into their applications to improve user productivity, automation, and customer experience.",
    cat: "AI",
    tags: [
      "AI/LLM Integration Development",
      "Full-Stack SaaS Development",
      "API & Backend System Architecture",
      "Cloud Infrastructure & Scalability",
      "Conversational UI/UX Development",
    ],
    hue: "from-[oklch(0.7_0.22_300)] to-[oklch(0.7_0.22_240)]",
    image: img5,
    url: "https://www.superflows.ai/",
  },
  {
    title: "AI Workflow Automation Assistant for Business Operations",
    desc: "Lutra AI is an AI-powered productivity and workflow automation platform that helps users automate business tasks, manage workflows, connect applications, and interact with data using conversational AI assistants.",
    cat: "AI",
    tags: [
      "AI/LLM Integration Development",
      "Full-Stack SaaS Development",
      "Workflow Automation & API Integration",
      "Cloud Infrastructure & Backend Systems",
      "Conversational AI & Chat Interface Development",
    ],
    hue: "from-[oklch(0.85_0.18_200)] to-[oklch(0.7_0.22_300)]",
    image: img6,
    url: "https://lutra.ai/",
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Cat>("All");
  const list = projects.filter((p) => filter === "All" || p.cat === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal effect="fade">
          <h2 className="text-center font-display text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            A selection of recent work — full-stack web apps, AI integrations, and APIs.
          </p>
        </Reveal>

        <Reveal effect="thread" className="origin-center">
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-5 py-2 text-sm transition-all ${
                  filter === c
                    ? "border-transparent bg-gradient-brand text-background shadow-neon"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.url || "#"}
                target={p.url ? "_blank" : undefined}
                rel={p.url ? "noopener noreferrer" : undefined}
                layout
                initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl glass cursor-pointer"
              >
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.hue}`}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs uppercase tracking-widest text-white backdrop-blur">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">{p.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
