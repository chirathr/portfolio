import { SkillTag } from "@/components/ui/skill-tag";
import { SkillGroup } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export interface SkillsSectionProps {
    skills: SkillGroup[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <section id="skills" className="mb-24 scroll-mt-24">
            <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Skills <span className="flex-grow h-px bg-zinc-800/50"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-start">
                {skills.map((skillGroup, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "flex flex-col justify-start",
                            idx === skills.length - 1 && skills.length % 2 === 1 ? "md:col-span-2 lg:col-auto" : "",
                            idx === skills.length - 1 && skills.length % 3 === 2 ? "lg:col-span-2" : "",
                            idx === skills.length - 1 && skills.length % 3 === 1 ? "lg:col-span-3" : ""
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
    );
}
