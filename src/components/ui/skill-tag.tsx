import { cn } from "@/lib/utils";

export interface SkillTagProps {
    children: React.ReactNode;
    className?: string;
}

export function SkillTag({ children, className }: SkillTagProps) {
    return (
        <span className={cn("flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5", className)}>
            {children}
        </span>
    );
}
