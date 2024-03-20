import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '../../../contentful/blogPosts'
import { formatDate } from '@/components/formatDate'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import RichText from '../../../contentful/RichText'
import Header from "@/components/header";

interface BlogPostPageParams {
    slug: string
}

interface BlogPostPageProps {
    params: BlogPostPageParams
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
    const blogPosts = await fetchBlogPosts({ preview: false })

    return blogPosts.map((post) => ({ slug: post.slug }))
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })

    if (!blogPost) {
        return notFound()
    }

    return {
        title: blogPost.title,
    }
}

// The actual BlogPostPage component.
async function BlogPostPage({ params }: BlogPostPageProps) {
    // Fetch a single blog post by slug,
    // using the content preview if draft mode is enabled:
    const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })

    if (!blogPost) {
        // If a blog post can't be found,
        // tell Next.js to render a 404 page.
        return notFound()
    }

    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
            <section className="mx-auto w-full max-w-2xl space-y-4 print:space-y-6">
                <Header />
                <div className="border-t pt-8 pb-4">
                    <Link href="/blog" className='text-sm'>← Back</Link>
                    <h1 className='text-2xl md:text-2xl font-bold mt-4'>{blogPost.title}</h1>
                    <p className='text-pretty text-sm font-sans text-muted-foreground mb-2'>{formatDate(blogPost.date)}</p>
                    <RichText document={blogPost.body} />
                </div>
                <span className="inline-flex gap-x-1">
                    {blogPost.tags.map((tag) => (
                        <Badge variant="secondary" className="font-sans" key={tag}>
                            {tag}
                        </Badge>
                    ))}
                </span>

            </section>
        </main>
    )
}

export default BlogPostPage