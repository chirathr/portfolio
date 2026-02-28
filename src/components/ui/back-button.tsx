"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export function BackButton({ fallback = "/" }: { fallback?: string }) {
    const router = useRouter();
    const [hasHistory, setHasHistory] = useState(false);

    useEffect(() => {
        const pagesViewed = parseInt(sessionStorage.getItem("pagesViewed") || "0");
        if (pagesViewed > 1) {
            setHasHistory(true);
        }
    }, []);

    const handleBack = () => {
        if (hasHistory) {
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
