import { draftMode } from "next/headers";
import { fetchBlogPosts } from "../../contentful/blogPosts";
import { Section } from "@/components/ui/section";
import Menu from "@/components/Menu";
import { PostCard } from "@/components/utils/post-card";
import Header from "@/components/Header";

async function Home() {
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  return (
    <main className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <section className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-14">
        <Header />

        <Section>
          <h2 className="text-medium mb-8 font-medium">Latest Posts</h2>
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
  );
}

export default Home;
