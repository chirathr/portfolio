"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
export function BackButton({ fallback = "/" }: { fallback?: string }) {
    const router = useRouter();

    const handleBack = () => {
        if (typeof window !== "undefined" && window.history.length > 1) {
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
