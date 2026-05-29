import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Mail, Github, MessageCircle, Send, Users } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "viniciusferlustosa@outlook.com", href: "mailto:viniciusferlustosa@gmail.com", color: "text-[oklch(0.85_0.18_200)]" },
  // { icon: MessageCircle, label: "Discord", value: "vinicius.dev", href: "#", color: "text-[oklch(0.7_0.22_300)]" },
  // { icon: Send, label: "Telegram", value: "@viniciusdev", href: "#", color: "text-[oklch(0.7_0.22_240)]" },
  { icon: Users, label: "Teams", value: "Vinicius Fernandes", href: "", color: "text-[oklch(0.85_0.18_200)]" },
];

export function ConnectSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="connect" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal effect="fade">
          <h2 className="text-center font-display text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through any of the channels below.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <Reveal effect="slide">
              <h3 className="font-display text-2xl font-bold">Contact Information</h3>
              <p className="mt-2 text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </Reveal>
            <div className="space-y-3 pt-4">
              {channels.map((c, i) => (
                <Reveal key={c.label} effect="diamond" delay={i * 0.08}>
                  <a
                    href={c.href}
                    className="flex items-center gap-4 rounded-xl glass px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-neon"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary">
                      <c.icon className={`h-5 w-5 ${c.color}`} />
                    </span>
                    <div>
                      <div className={`text-sm font-semibold ${c.color}`}>{c.label}</div>
                      <div className="text-sm text-muted-foreground">{c.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal effect="spinner">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
              className="rounded-2xl glass p-7 shadow-neon"
            >
              <h3 className="font-display text-2xl font-bold">Send Me a Message</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" placeholder="John Doe" />
                <Field label="Your Email" placeholder="john@example.com" type="email" />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="I'd like to discuss a project..."
                  className="w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-[oklch(0.85_0.18_200)]"
                />
              </div>
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 font-semibold text-background shadow-neon transition-transform hover:scale-[1.02]"
              >
                {sent ? "Sent!" : "Send Message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <footer className="mt-20 border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vinicius Fernandes - Crafted with care.
      </footer>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        {...rest}
        className="w-full rounded-lg border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-[oklch(0.85_0.18_200)]"
      />
    </div>
  );
}
