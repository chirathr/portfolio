"use client";
import { portfolioData } from "@/data/portfolio";
import { SpotlightCard, GlobalSpotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { SkillTag } from "@/components/ui/skill-tag";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ParticleBackground } from "@/components/ui/particle-background";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 leading-relaxed text-zinc-400 antialiased selection:bg-blue-500/30 selection:text-blue-200 min-h-screen">
      <ParticleBackground />
      <GlobalSpotlight color="rgba(255, 255, 255, 0.03)" />

      {/* Floating Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
          scrolled ? "bg-zinc-950/80 backdrop-blur-sm border-b border-blue-500/20 shadow-lg" : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-4xl px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-zinc-200">
            {portfolioData.personalInfo.name}
          </Link>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </nav>
        </div>
      </header>

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

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-zinc-500 gap-2">
            <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} />
          </div>
        </section>

        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> About <span className="flex-grow h-px bg-zinc-800/50"></span>
          </h2>
          <p className="text-lg leading-relaxed">{portfolioData.about}</p>
        </section>



        <section id="experience" className="mb-24 scroll-mt-24">
          <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Experience <span className="flex-grow h-px bg-zinc-800/50"></span>
          </h2>
          <ol className="group/list space-y-6">
            {portfolioData.experience.map((exp, idx) => (
              <li key={idx}>
                <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      <header className="z-10 mt-1 text-sm font-semibold uppercase tracking-wide text-zinc-500 sm:w-1/4 shrink-0">
                        {exp.period}
                      </header>
                      <div className="z-10 sm:w-3/4">
                        <h3 className="font-medium text-lg leading-snug text-zinc-200 font-sans mb-4">
                          {exp.title} · <span className="text-blue-300">{exp.company}</span>
                        </h3>
                        <ul className="text-sm leading-normal space-y-3 mb-6">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex"><span className="mr-3 text-sky-400">▹</span><span>{bullet}</span></li>
                          ))}
                        </ul>
                        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                          {exp.tech.map((t) => (
                            <li key={t}><SkillTag className="bg-blue-500/10 border border-blue-500/20 text-blue-300">{t}</SkillTag></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </SpotlightCard>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="mb-24 scroll-mt-24">
          <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Skills <span className="flex-grow h-px bg-zinc-800/50"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-start">
            {portfolioData.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col justify-start",
                  idx === portfolioData.skills.length - 1 && portfolioData.skills.length % 2 === 1 ? "md:col-span-2 lg:col-auto" : "",
                  idx === portfolioData.skills.length - 1 && portfolioData.skills.length % 3 === 2 ? "lg:col-span-2" : "",
                  idx === portfolioData.skills.length - 1 && portfolioData.skills.length % 3 === 1 ? "lg:col-span-3" : ""
                )}
              >
                <h3 className="font-medium text-sm text-zinc-200 mb-6 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                  {skillGroup.category}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <li key={item}>
                      <SkillTag className="bg-blue-500/10 border border-blue-500/20 text-blue-300 shadow-sm">{item}</SkillTag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-24 scroll-mt-24">
          <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Projects <span className="flex-grow h-px bg-zinc-800/50"></span>
          </h2>
          <ul className="group/list space-y-6">
            {portfolioData.projects.map((project, idx) => (
              <li key={idx}>
                <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="z-10 md:w-1/3 shrink-0">
                        <div className="rounded-lg border-2 border-zinc-700/50 w-full aspect-video bg-zinc-900 flex items-center justify-center text-zinc-600 shadow-inner">
                          <span className="text-xs uppercase font-bold tracking-wider">Preview Image</span>
                        </div>
                      </div>
                      <div className="z-10 md:w-2/3">
                        <h3 className="font-medium text-lg leading-snug text-zinc-200 mb-3">
                          <a className="inline-flex items-baseline hover:text-blue-400 focus-visible:text-blue-400 group/link transition-colors" href={project.link} target="_blank" rel="noreferrer">
                            <span>{project.title}</span> <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-2" />
                          </a>
                        </h3>
                        <p className="text-sm leading-relaxed mb-6">{project.description}</p>
                        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                          {project.tech.map((t) => (
                            <li key={t}><SkillTag className="bg-blue-500/10 border border-blue-500/20 text-blue-300">{t}</SkillTag></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="mb-24 scroll-mt-24">
          <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Education <span className="flex-grow h-px bg-zinc-800/50"></span>
          </h2>
          <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
            <Card className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                <header className="z-10 mt-1 text-sm font-semibold uppercase tracking-wide text-zinc-500 sm:w-1/4 shrink-0">
                  {portfolioData.education.year}
                </header>
                <div className="z-10 sm:w-3/4">
                  <h3 className="font-medium text-lg leading-snug text-zinc-200 font-sans mb-2">
                    {portfolioData.education.degree}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">{portfolioData.education.school}</p>
                  <p className="text-zinc-500 text-xs font-mono">CGPA: {portfolioData.education.cgpa}</p>
                </div>
              </div>
            </Card>
          </SpotlightCard>
        </section>

        <section id="blog" className="mb-24 scroll-mt-24">
          <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Blog <span className="flex-grow h-px bg-zinc-800/50"></span>
          </h2>
          <ul className="group/list space-y-6">
            {portfolioData.blog?.map((post, idx) => (
              <li key={idx}>
                <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-col gap-2">
                      <header className="z-10 mt-1 flex items-center gap-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                        <span>{post.readTime}</span>
                      </header>
                      <h3 className="z-10 font-medium text-lg leading-snug text-zinc-200">
                        <a className="inline-flex items-baseline hover:text-blue-400 focus-visible:text-blue-400 group/link transition-colors" href={post.link} target="_blank" rel="noreferrer">
                          <span>{post.title}</span> <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-2 opacity-0 group-hover/link:opacity-100" />
                        </a>
                      </h3>
                    </div>
                  </Card>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </section>

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
