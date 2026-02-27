import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
                className
            )}
        >
            {children}
        </div>
    );
}
