import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { BackButton } from "@/components/ui/back-button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog | Chirath R.',
    description: 'Writing about software engineering, distributed systems, and modern web development.',
};

export default function BlogArchive() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="bg-zinc-950 min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 selection:text-blue-200 antialiased">
            <div className="mx-auto max-w-3xl px-6 py-12 md:py-24 relative z-10">

                {/* Navigation */}
                <nav className="mb-12 flex items-center justify-between">
                    <BackButton fallback="/" />
                    <Link
                        href="/"
                        className="text-sm font-semibold tracking-wide text-zinc-500 hover:text-blue-400 transition-colors uppercase"
                    >
                        Portfolio
                    </Link>
                </nav>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-200 mb-6">
                        All Posts
                    </h1>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        Thoughts, tutorials, and deep dives into software engineering, distributed systems architecture, and modern web development.
                    </p>
                </header>

                {/* Feed */}
                <ul className="group/list divide-y divide-zinc-800/50">
                    {allPostsData.map((post) => (
                        <li key={post.slug} className="py-8 first:pt-0 border-zinc-800">
                            <div className="flex flex-col gap-3">
                                <header className="z-10 mt-1 flex items-center gap-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                    <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                    <span>{post.readTime}</span>
                                </header>
                                <h2 className="z-10 font-bold text-xl leading-snug text-zinc-200">
                                    <Link className="inline-flex items-baseline hover:text-blue-400 focus-visible:text-blue-400 group/link transition-colors" href={`/blog/${post.slug}`}>
                                        <span>{post.title}</span> <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-2 opacity-0 group-hover/link:opacity-100" />
                                    </Link>
                                </h2>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Footer */}
                <footer className="mt-24 pt-8 border-t border-zinc-800/50 flex justify-between items-center text-sm text-zinc-500">
                    <p>© {new Date().getFullYear()} Chirath R.</p>
                    <a href="#" className="hover:text-blue-400 transition-colors">Back to top</a>
                </footer>
            </div>
        </div>
    );
}
