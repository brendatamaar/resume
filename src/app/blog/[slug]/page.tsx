import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '../../../contentful/blogPosts'
import Link from 'next/link'
import RichText from '../../../contentful/RichText'

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
        <main className="p-[6vw]">
            <Link href="/">← Posts</Link>
            <div className="prose mt-8 border-t pt-8">
                
                {/* Render the blog post title */}
                <h1>{blogPost.title}</h1>

                <p>{blogPost.date}</p>

                {/* Render the blog post body */}
                <RichText document={blogPost.body} />
            </div>
        </main>
    )
}

export default BlogPostPage