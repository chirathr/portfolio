import { SpotlightCard } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { BlogFrontmatter } from "@/lib/blog";

export interface BlogSectionProps {
    allPostsData: (BlogFrontmatter & { slug: string })[];
}

export function BlogSection({ allPostsData }: BlogSectionProps) {
    return (
        <section id="blog" className="mb-24 scroll-mt-24">
            <h2 className="text-md font-bold uppercase tracking-widest text-zinc-200 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500/50 via-sky-500/50 to-indigo-500/50"></span> Blog <span className="flex-grow h-px bg-zinc-800/50"></span>
            </h2>
            {(!allPostsData || allPostsData.length === 0) ? (
                <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
                    <Card className="p-6 sm:p-8 flex items-center justify-center border-dashed border-zinc-800/50 bg-zinc-900/20">
                        <p className="text-sm text-zinc-500 italic">Coming soon...</p>
                    </Card>
                </SpotlightCard>
            ) : (
                <>
                    <ul className="group/list space-y-4">
                        {allPostsData.slice(0, 3).map((post) => (
                            <li key={post.slug}>
                                <SpotlightCard className="rounded-xl" color="rgba(255, 255, 255, 0.03)">
                                    <Card className="p-6 sm:p-8">
                                        <div className="flex flex-col gap-2">
                                            <header className="z-10 mt-1 flex items-center gap-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                                                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                                <span>{post.readTime}</span>
                                            </header>
                                            <h3 className="z-10 font-medium text-lg leading-snug text-zinc-200">
                                                <Link className="inline-flex items-baseline hover:text-blue-400 focus-visible:text-blue-400 group/link transition-colors" href={`/blog/${post.slug}`}>
                                                    <span>{post.title}</span> <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-2 opacity-0 group-hover/link:opacity-100" />
                                                </Link>
                                            </h3>
                                        </div>
                                    </Card>
                                </SpotlightCard>
                            </li>
                        ))}
                    </ul>

                    {allPostsData.length > 3 && (
                        <div className="mt-8 w-full flex justify-end">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-200 hover:text-blue-400 transition-colors group"
                            >
                                View all posts <ExternalLink size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}
