"use client";
import { MailIcon } from "lucide-react";
import { TextLoop } from "@/components/utils/text-loop";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/utils/text-effect";
import { RESUME_DATA } from "@/data/resume-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { BlogPost } from "@/contentful/blogPosts";
import { PostCard } from "@/components/utils/post-card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { XIcon, GlobeIcon } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/utils/morphing-dialog";

type ProjectProps = {
  src: string;
};

function Project({ src }: ProjectProps) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <img
          src={src}
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-inset ring-zinc-200/50 dark:bg-zinc-950 dark:ring-zinc-800/50">
          <img
            src={src}
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function Test() {
  const data = RESUME_DATA;
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBlogPosts() {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogPosts();
  }, []);

  return (
    <motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]"
    >
      <section className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-14">
        <Header />

        <div className="my-12 grid grid-cols-[1fr_auto] items-center gap-x-6">
          <div className="flex flex-col gap-1">
            <Link href="/" className="mb-2 text-lg text-black dark:text-white">
              {data.name}
            </Link>
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="text-sm"
              delay={0.5}
            >
              {data.currentJob}
            </TextEffect>

            <Link
              className="inline-flex gap-x-1 align-baseline text-xs font-light leading-none text-muted-foreground hover:underline dark:text-font-dark-mode"
              href={data.locationLink}
              aria-label="Location"
              target="_blank"
            >
              <GlobeIcon className="size-3" />
              {data.location}
            </Link>
          </div>

          <Avatar className="size-20 max-sm:mt-4 max-sm:hidden max-sm:h-20 max-sm:w-20">
            <AvatarImage
              alt={data.name}
              src={data.avatarUrl}
              rel="dns-prefetch"
            />
            <AvatarFallback>{data.initials}</AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-14">
          <div className="flex-1">
            <p className="opacity-75">{data.about}</p>
          </div>

          <h3 className="mb-3 font-medium">Experience</h3>
          <div className="flex flex-col gap-y-6">
            {data.work.map((work) => {
              return (
                <div className="flex w-full flex-col" key={work.company}>
                  <div className="flex flex-row items-center gap-x-1">
                    <h3>{work.company}</h3>
                    <p className="mt-1 opacity-50">
                      {work.start} - {work.end}
                    </p>
                  </div>

                  <p className="opacity-75">{work.description}</p>
                </div>
              );
            })}
          </div>

          <h3 className="mb-3 font-medium">Selected Projects</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {data.projects.map((project) => {
              if (project.isFeatured) {
                return (
                  <div key={project.title} className="space-y-2">
                    <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-inset ring-zinc-200/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                      <Project src={project.img} />
                    </div>
                    <div className="px-1">
                      <a
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                        href={"link" in project ? project.link.href : undefined}
                        target="_blank"
                      >
                        {project.title}
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <h3 className="mb-3 font-medium">Latest Posts</h3>
          <div className="flex flex-col gap-4">
            {isLoading ? (
              <div className="text-zinc-500">Loading posts...</div>
            ) : blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.title}
                  link={`blog/${post.slug}`}
                  date={post.date}
                />
              ))
            ) : (
              <div className="text-zinc-500">No posts found.</div>
            )}
          </div>

          <h3 className="mb-3 font-medium">Connect</h3>
          <p className="mb-3 text-zinc-600 dark:text-zinc-400">
            If you need expertise in developing software, designing products,
            solving problems or building teams, or just to grab some coffee and
            have a good talk, please reach out via:
          </p>
          <div className="flex items-center justify-start space-x-3">
            {data.contact.email ? (
              <Button variant="outline" size="sm" asChild>
                <Link href={`mailto:${data.contact.email}`} aria-label="Email">
                  <MailIcon className="size-4" />
                </Link>
              </Button>
            ) : null}
            {data.contact.social.map((social) => (
              <Button key={social.name} variant="outline" size="sm" asChild>
                <Link href={social.url} aria-label={social.name}>
                  <social.icon className="size-4" />
                </Link>
              </Button>
            ))}
          </div>
          <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <TextLoop className="text-xs text-zinc-500">
                <span>© {new Date().getFullYear()}</span>
                <span>Built with Next.js.</span>
              </TextLoop>
            </div>
          </footer>
        </div>
      </section>
    </motion.main>
  );
}

export default Test;
