"use client";

import { useEffect } from "react";

export function CodeCopyButtons() {
    useEffect(() => {
        document.querySelectorAll('pre').forEach((block) => {
            if (block.querySelector('.copy-btn')) return;

            block.style.position = 'relative';
            block.classList.add('group');

            const btn = document.createElement('button');
            btn.title = "Copy code";
            btn.className = 'copy-btn absolute top-1.5 right-1.5 p-1 rounded-sm bg-zinc-800/80 text-zinc-500 hover:text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity z-10';

            const copyIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
            const checkIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M20 6 9 17l-5-5"/></svg>`;

            btn.innerHTML = copyIcon;

            btn.onclick = async () => {
                await navigator.clipboard.writeText(block.querySelector('code')?.innerText || '');
                btn.innerHTML = checkIcon;
                setTimeout(() => btn.innerHTML = copyIcon, 2000);
            };

            block.appendChild(btn);
        });
    }, []);

    return null;
}
