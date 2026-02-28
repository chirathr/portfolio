"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
                scrolled ? "bg-zinc-950/80 backdrop-blur-sm border-b border-blue-500/20 shadow-lg" : "bg-transparent"
            )}
        >
            <div className="mx-auto max-w-4xl px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-zinc-200">
                    {portfolioData.personalInfo.name}
                </Link>
                <nav className="hidden sm:block">
                    <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
                        <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                        <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
                        <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                        <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
                        <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
