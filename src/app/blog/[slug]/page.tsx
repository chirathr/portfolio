import { getAllPostSlugs, getPostData } from "@/lib/blog";
import Link from "next/link";
import { BackButton } from "@/components/ui/back-button";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    if (posts.length === 0) {
        return [{ slug: "__empty__" }];
    }
    return posts;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;

    if (resolvedParams.slug === "__empty__") {
        return {
            title: "Post Not Found | Chirath R.",
        };
    }

    const postData = await getPostData(resolvedParams.slug);

    return {
        title: `${postData.title} | Chirath R.`,
        description: `Read about ${postData.title} by Chirath R.`,
        openGraph: {
            title: `${postData.title} | Chirath R.`,
            type: "article",
            publishedTime: postData.date,
        },
        twitter: {
            card: "summary_large_image",
            title: postData.title,
        }
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;

    if (resolvedParams.slug === "__empty__") {
        notFound();
    }

    const postData = await getPostData(resolvedParams.slug);

    return (
        <div className="bg-zinc-950 min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 selection:text-blue-200 antialiased">


            <div className="mx-auto max-w-3xl px-6 py-12 md:py-24 relative z-10">

                {/* Navigation */}
                <nav className="mb-12 flex items-center justify-between">
                    <BackButton fallback="/blog" />
                    <Link
                        href="/blog"
                        className="text-sm font-semibold tracking-wide text-zinc-500 hover:text-blue-400 transition-colors uppercase"
                    >
                        All Posts
                    </Link>
                </nav>

                {/* Article Header */}
                <header className="mb-12 border-b border-zinc-800/50 pb-8">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-200 mb-6 leading-tight">
                        {postData.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-zinc-500">
                        <Link href="/" className="font-semibold text-zinc-300 hover:text-blue-400 transition-colors">
                            Chirath R.
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                        <time dateTime={postData.date}>{new Date(postData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                        <span>{postData.readTime}</span>
                    </div>
                </header>

                {/* Article Content - Styled with Tailwind Typography plugin */}
                <article
                    className="prose prose-invert prose-zinc max-w-none 
          prose-headings:text-zinc-200 prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-zinc-200 prose-strong:font-semibold
          prose-code:text-sky-300 prose-code:bg-sky-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-zinc-900/80 prose-pre:border prose-pre:border-zinc-800 prose-pre:shadow-xl
          prose-blockquote:border-l-blue-500 prose-blockquote:bg-zinc-900/30 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:text-zinc-300 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
          prose-hr:border-zinc-800
          prose-li:marker:text-blue-500
          leading-relaxed text-zinc-300"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

                {/* Footer */}
                <footer className="mt-24 pt-8 border-t border-zinc-800/50 flex justify-between items-center text-sm text-zinc-500">
                    <p>© {new Date().getFullYear()} Chirath R.</p>
                    <a href="#" className="hover:text-blue-400 transition-colors">Back to top</a>
                </footer>
            </div>
        </div>
    );
}
