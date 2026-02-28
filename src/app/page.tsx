import { portfolioData } from "@/data/portfolio";
import { getSortedPostsData } from "@/lib/blog";
import { GlobalSpotlight } from "@/components/ui/spotlight";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Header } from "@/components/ui/header";

// Feature Sections
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { BlogSection } from "@/components/sections/blog-section";

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="bg-zinc-950 leading-relaxed text-zinc-400 antialiased selection:bg-blue-500/30 selection:text-blue-200 min-h-screen">
      <ParticleBackground />
      <GlobalSpotlight color="rgba(255, 255, 255, 0.03)" />

      {/* Floating Header */}
      <Header />

      <div className="mx-auto max-w-4xl px-6 pt-32 pb-12 font-sans md:px-12 md:py-32 relative z-10">

        {/* Intro */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center pb-12 pt-16 -mt-32 relative">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-200 sm:text-7xl mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">{portfolioData.personalInfo.name.split(' ')[0]}</span>.
            </h1>
            <h2 className="text-xl font-medium tracking-tight text-zinc-300 sm:text-2xl mb-4 max-w-2xl">
              {portfolioData.personalInfo.tagline}
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
              {portfolioData.about.split('.')[0]}.
            </p>
            <ul className="flex items-center gap-6 text-xl">
              <li>
                <a className="block hover:text-blue-400 transition-colors" href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer">
                  <span className="sr-only">GitHub</span>
                  <Github size={28} />
                </a>
              </li>
              <li>
                <a className="block hover:text-blue-400 transition-colors" href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={28} />
                </a>
              </li>
              <li>
                <a className="block hover:text-blue-400 transition-colors" href={`mailto:${portfolioData.personalInfo.email}`}>
                  <span className="sr-only">Email</span>
                  <Mail size={28} />
                </a>
              </li>
            </ul>
          </div>

          <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-zinc-500 hover:text-blue-400 transition-colors gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-lg p-2">
            <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> About <span className="flex-grow h-px bg-zinc-800/50"></span>
          </h2>
          <p className="text-lg leading-relaxed">{portfolioData.about}</p>
        </section>

        {/* Modular Sections */}
        <ExperienceSection experiences={portfolioData.experience} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <EducationSection education={portfolioData.education} />
        <BlogSection allPostsData={allPostsData} />

      </div>

      <footer className="w-full mt-32 mb-12 text-center text-zinc-500 text-sm">
        <p>
          Looking for my old portfolio?{" "}
          <a
            href="/old/index.html"
            className="text-blue-400/80 hover:text-blue-400 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded px-1"
          >
            View previous version (Archived)
          </a>
        </p>
      </footer>
    </div>
  );
}
