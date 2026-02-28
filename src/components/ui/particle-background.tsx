"use client";
import { useEffect, useRef } from "react";

export interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: { r: number, g: number, b: number };
}

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        const handleScroll = () => {
            isScrollingRef.current = true;
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
            }, 100);
        };

        window.addEventListener("resize", setCanvasSize);
        window.addEventListener("scroll", handleScroll, { passive: true });

        const particles: Particle[] = [];

        const colors = [
            { r: 255, g: 255, b: 255 }, // white
            { r: 200, g: 200, b: 200 }, // gray-300
            { r: 150, g: 150, b: 150 }  // gray-500
        ];

        const particleCount = Math.min(Math.floor(window.innerWidth / 25), 50);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.6 + 0.4, // Increased baseline and max opacity
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        let animationFrameId: number;

        const drawParticles = () => {
            if (!isScrollingRef.current) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle) => {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.opacity})`; // Black and white theme
                    ctx.fill();

                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = canvas.height;
                    if (particle.y > canvas.height) particle.y = 0;
                });
            }

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        drawParticles();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-80" // Increased global background opacity
            aria-hidden="true"
        />
    );
}
