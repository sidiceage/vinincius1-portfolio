import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActive(l.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-background shadow-neon">
            VF
          </span>
          <span className="hidden sm:inline text-sm tracking-wide text-foreground/90">
            Vinicius Fernandes
          </span>
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded bg-gradient-brand" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
