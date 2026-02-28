"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        // If the user arrived from outside the site (no referrer or external referrer),
        // fallback to safely routing them to the blog index instead of kicking them off the site.
        if (typeof window !== "undefined") {
            const referrer = document.referrer;
            if (!referrer || !referrer.includes(window.location.host)) {
                router.push("/blog");
                return;
            }
        }

        // Otherwise, they navigated here from within the site (Homepage or Archive),
        // so `back()` safely returns them exactly whence they came.
        router.back();
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
