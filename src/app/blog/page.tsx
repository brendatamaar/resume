import { draftMode } from 'next/headers'
import { fetchBlogPosts } from '../../contentful/blogPosts'
import { Section } from "@/components/ui/section";
import Menu from "@/components/Menu";
import { PostCard } from "@/components/post-card";
import Header from "@/components/Header";

async function Home() {
    const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
            <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
                <Header />

                <Section>
                    <h2 className="font-medium text-medium mb-8">Latest Posts</h2>
                    {blogPosts.map((blogPost) => {
                        return (
                            <PostCard
                                key={blogPost.slug}
                                title={blogPost.title}
                                link={`blog/${blogPost.slug}`}
                                date={blogPost.date}
                            />
                        );
                    })}
                </Section>
            </section>

            <Menu />
        </main>
    )
}

export default Home