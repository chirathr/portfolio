import { SpotlightCard } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { Education } from "@/data/portfolio";

export interface EducationSectionProps {
    education: Education;
}

export function EducationSection({ education }: EducationSectionProps) {
    return (
        <section id="education" className="mb-24 scroll-mt-24">
            <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Education <span className="flex-grow h-px bg-zinc-800/50"></span>
            </h2>
            <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
                <Card className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                        <header className="z-10 mt-1 text-sm font-semibold uppercase tracking-wide text-zinc-500 sm:w-1/4 shrink-0">
                            {education.year}
                        </header>
                        <div className="z-10 sm:w-3/4">
                            <h3 className="font-medium text-lg leading-snug text-zinc-200 font-sans mb-2">
                                {education.degree}
                            </h3>
                            <p className="text-zinc-400 text-sm mb-2">{education.school}</p>
                            <p className="text-zinc-500 text-xs font-mono">CGPA: {education.cgpa}</p>
                        </div>
                    </div>
                </Card>
            </SpotlightCard>
        </section>
    );
}
