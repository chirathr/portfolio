"use client";

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";

export function AppNavigationTracker() {
    const pathname = usePathname();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            window.isInternalNavigation = false;
        } else {
            window.isInternalNavigation = true;
        }
    }, [pathname]);

    return null;
}

export interface BackButtonProps {
    fallback?: string;
}

export function BackButton({ fallback = "/" }: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        if (typeof window !== "undefined" && window.isInternalNavigation) {
            router.back();
        } else {
            router.push(fallback);
        }
    };

    return (
        <button
            onClick={handleBack}
            className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-500 hover:text-blue-400 transition-colors uppercase bg-transparent border-none cursor-pointer p-0"
        >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back
        </button>
    );
}
