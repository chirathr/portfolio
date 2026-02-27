import { cn } from "@/lib/utils";

export function SkillTag({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={cn("flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5", className)}>
            {children}
        </span>
    );
}
