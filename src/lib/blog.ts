import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';

export interface BlogFrontmatter {
    title: string;
    date: string;
    readTime: string;
    draft?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
    slug: string;
    contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getSortedPostsData(): (BlogFrontmatter & { slug: string })[] {
    // Check if directory exists, if not return empty array
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            // Remove ".md" from file name to get id
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Skip draft posts in production.
            if (process.env.NODE_ENV === 'production' && matterResult.data.draft === true) {
                return null;
            }

            // Combine the data with the id
            return {
                slug,
                ...(matterResult.data as BlogFrontmatter),
            };
        })
        .filter((post): post is (BlogFrontmatter & { slug: string }) => post !== null);

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostSlugs(): { slug: string }[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            if (process.env.NODE_ENV === 'production' && matterResult.data.draft === true) {
                return null;
            }

            return { slug };
        })
        .filter((post): post is { slug: string } => post !== null);
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    let fileContents;

    try {
        fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
        return null;
    }

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark and rehype to convert markdown into HTML string with syntax highlighting
    const processedContent = await remark()
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            theme: 'poimandres',
            keepBackground: true,
        })
        .use(rehypeStringify)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        slug,
        contentHtml,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        readTime: matterResult.data.readTime as string,
    };
}
