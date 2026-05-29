import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Nav } from "@/components/Nav";
import { HomeSection } from "@/components/sections/Home";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ConnectSection } from "@/components/sections/Connect";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portfolio" },
      { name: "description", content: "Full-Stack Developer specializing in modern web applications and AI integration. React, Next.js, Node.js, ChatGPT, and more." },
    ],
  }),
});

function Index() {
  const [ready, setReady] = useState(false);
  return (
    <>
      {!ready && <LoadingScreen onDone={() => setReady(true)} />}
      {ready && (
        <main>
          <Nav />
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ConnectSection />
        </main>
      )}
    </>
  );
}
