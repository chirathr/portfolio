import { SpotlightCard } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { SkillTag } from "@/components/ui/skill-tag";
import { Experience } from "@/data/portfolio";

export interface ExperienceSectionProps {
    experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <section id="experience" className="mb-24 scroll-mt-24">
            <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Experience <span className="flex-grow h-px bg-zinc-800/50"></span>
            </h2>
            <ol className="group/list space-y-6">
                {experiences.map((exp, idx) => (
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
    );
}
