import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchBlogPost, fetchBlogPosts } from "../../../contentful/blogPosts";
import { formatDate } from "@/components/utils/formatDate";
import Menu from "@/components/Menu";
import Link from "next/link";
import RichText from "../../../contentful/RichText";
import Header from "@/components/Header";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <section className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-14 ">
        <Header />
        <div className="border-b border-t pb-4 pt-8">
          <Link href="/blog">← Back</Link>
          <h1 className="text-medium mt-4 font-medium">{blogPost.title}</h1>
          <RichText document={blogPost.body} />
        </div>
        <div className="mt-4 inline-flex gap-x-2">
          <span className="text-medium font-medium">
            {formatDate(blogPost.date)}
          </span>
          {blogPost.tags.map((tag) => (
            <span
              key={tag}
              className="text-muted-foreground dark:text-font-dark-mode"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      <Menu />
    </main>
  );
}

export default BlogPostPage;
