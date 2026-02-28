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

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        // Only override default jump behavior if we are currently on the homepage
        if (window.location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Update URL cleanly without jumping
                window.history.pushState({}, '', `/#${id}`);
            }
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
                scrolled ? "bg-zinc-950/80 backdrop-blur-sm border-b border-blue-500/20 shadow-lg" : "bg-transparent"
            )}
        >
            <div className="mx-auto max-w-4xl px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-zinc-200" onClick={(e) => {
                    if (window.location.pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }}>
                    {portfolioData.personalInfo.name}
                </Link>
                <nav className="hidden sm:block">
                    <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
                        {['about', 'experience', 'skills', 'projects', 'education', 'blog'].map((section) => (
                            <li key={section}>
                                <a
                                    href={`/#${section}`}
                                    onClick={(e) => scrollToSection(e, section)}
                                    className="hover:text-blue-400 transition-colors capitalize"
                                >
                                    {section}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
