import { SpotlightCard } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { SkillTag } from "@/components/ui/skill-tag";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio";

export interface ProjectsSectionProps {
    projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id="projects" className="mb-24 scroll-mt-24">
            <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Projects <span className="flex-grow h-px bg-zinc-800/50"></span>
            </h2>
            <ul className="group/list space-y-6">
                {projects.map((project, idx) => (
                    <li key={idx}>
                        <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
                            <Card className="p-6 sm:p-8">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="z-10 md:w-1/3 shrink-0">
                                        {project.image ? (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img src={project.image} alt={project.title} className="rounded-lg border border-zinc-700/50 w-full aspect-video object-cover shadow-lg opacity-80 group-hover/link:opacity-100 transition-opacity" />
                                        ) : (
                                            <div className="rounded-lg border border-zinc-700/50 w-full aspect-video bg-zinc-900 flex items-center justify-center text-zinc-600 shadow-inner">
                                                <span className="text-xs uppercase font-bold tracking-wider">Preview Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="z-10 md:w-2/3">
                                        <h3 className="font-medium text-lg leading-snug text-zinc-200 mb-3">
                                            {project.link && project.link !== "#" ? (
                                                <a className="inline-flex items-baseline hover:text-blue-400 focus-visible:text-blue-400 group/link transition-colors" href={project.link} target="_blank" rel="noreferrer">
                                                    <span>{project.title}</span> <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-2" />
                                                </a>
                                            ) : (
                                                <span className="inline-flex items-baseline">
                                                    <span>{project.title}</span>
                                                </span>
                                            )}
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
    );
}
