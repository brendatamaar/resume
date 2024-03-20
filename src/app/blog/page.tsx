import { draftMode } from 'next/headers'
import { fetchBlogPosts } from '../../contentful/blogPosts'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { PostCard } from "@/components/post-card";
import Header from "@/components/header";

async function Home() {
    // Fetch blog posts using the content preview
    // if draft mode is enabled:
    const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
            <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
                <Header />

                <div className="block md:flex print:flex items-center justify-between">
                    <div className="flex-1 space-y-2.5">
                        <h1 className="text-xl md:text-2xl font-bold -mb-3">{RESUME_DATA.name}</h1>
                        <p className="max-w-md text-pretty font-sans text-muted-foreground">
                            {RESUME_DATA.about}
                        </p>
                        <p className="max-w-md items-center text-pretty font-sans text-xs text-muted-foreground">
                            <a
                                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                                href={RESUME_DATA.locationLink}
                                target="_blank"
                            >
                                <GlobeIcon className="size-3" />
                                {RESUME_DATA.location}
                            </a>
                        </p>
                        <div className="flex gap-x-1 pt-1 font-sans text-sm text-muted-foreground print:hidden">
                            {RESUME_DATA.contact.email ? (
                                <Button
                                    className="size-8"
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                                        <MailIcon className="size-4" />
                                    </a>
                                </Button>
                            ) : null}
                            {RESUME_DATA.contact.social.map((social) => (
                                <Button
                                    key={social.name}
                                    className="size-8"
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a href={social.url}>
                                        <social.icon className="size-4" />
                                    </a>
                                </Button>
                            ))}

                        </div>
                        <div className="hidden flex-col gap-x-1 font-sans text-sm text-muted-foreground print:flex">
                            {RESUME_DATA.contact.email ? (
                                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                                    <span className="underline">{RESUME_DATA.contact.email}</span>
                                </a>
                            ) : null}
                            {RESUME_DATA.contact.tel ? (
                                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                                </a>
                            ) : null}
                        </div>
                    </div>

                    <Avatar className="size-28 mx-auto max-sm:w-1/2 max-sm:h-1/2 max-sm:mt-6">
                        <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
                        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                    </Avatar>
                </div>
                <Section>
                    <h2 className="text-lg font-semibold mb-2">Latest Posts</h2>
                    <div className="-mx-3">
                        {blogPosts.map((blogPost) => {
                            return (
                                <PostCard
                                    key={blogPost.slug}
                                    title={blogPost.title}
                                    link={`blog/${blogPost.slug}`}
                                    date={blogPost.date}
                                    tags={blogPost.tags}
                                />
                            );
                        })}
                    </div>
                </Section>
            </section>
        </main>
    )
}

export default Home