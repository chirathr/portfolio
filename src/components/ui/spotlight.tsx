"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps {
    className?: string;
    children: React.ReactNode;
    color?: string;
}

export function SpotlightCard({ className, children, color = "rgba(29, 78, 216, 0.15)" }: SpotlightCardProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    return (
        <div
            className={cn("group relative", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300 z-0 hidden sm:block"
                style={{
                    opacity,
                    background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
                }}
            />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}

export interface GlobalSpotlightProps {
    color?: string;
}

export function GlobalSpotlight({ color = "rgba(29, 78, 216, 0.15)" }: GlobalSpotlightProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
            style={{
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
            }}
        />
    );
}
