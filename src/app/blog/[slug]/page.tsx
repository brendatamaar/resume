import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchBlogPost, fetchBlogPosts } from '../../../contentful/blogPosts'
import { formatDate } from '@/components/formatDate'
import Menu from "@/components/Menu";
import Link from 'next/link'
import RichText from '../../../contentful/RichText'
import Header from "@/components/Header";

interface BlogPostPageParams {
    slug: string
}

interface BlogPostPageProps {
    params: BlogPostPageParams
}

export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
    const blogPosts = await fetchBlogPosts({ preview: false })

    return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })

    if (!blogPost) {
        return notFound()
    }

    return {
        title: blogPost.title,
    }
}

async function BlogPostPage({ params }: BlogPostPageProps) {

    const blogPost = await fetchBlogPost({ slug: params.slug, preview: draftMode().isEnabled })

    if (!blogPost) {
        return notFound()
    }

    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
            <section className="mx-auto w-full max-w-2xl space-y-4 print:space-y-6 ">
                <Header />
                <div className="border-t border-b pt-8 pb-4">
                    <Link href="/blog">← Back</Link>
                    <h1 className='text-medium font-medium mt-4'>{blogPost.title}</h1>
                    <RichText document={blogPost.body} />
                </div>
                <div className="mt-4 inline-flex gap-x-2">
                    <span className='text-medium font-medium'>{formatDate(blogPost.date)}</span>
                    {blogPost.tags.map((tag) => (
                        <span key={tag} className='text-muted-foreground dark:text-font-dark-mode'>
                            #{tag}
                        </span>
                    ))}
                </div>

            </section>


            <Menu />
        </main>
    )
}

export default BlogPostPage