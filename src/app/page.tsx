"use client"
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Menu from "@/components/Menu";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

export default function Page() {
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
      className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-transparent dark:bg-transparent print:space-y-6">
        <div className="print:hidden">
          <Header />
        </div>
        <Hero />
        <Section>
          <h2 className="font-medium text-medium mb-8">About</h2>
          <p className="text-muted-foreground dark:text-font-dark-mode mb-6">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="font-medium text-medium mb-8">Work Experience</h2>
          <div className="flex flex-col gap-6">
            {RESUME_DATA.work.map((work) => {
              return (
                <div className="flex flex-col md:flex-row mb-6" key={work.company}>
                  <div className="mr-8 max-w-[120px] w-full text-muted-foreground dark:text-font-dark-mode">
                    {work.start} - {work.end}
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-medium font-medium">{work.company}</h3>
                    <p className="text-muted-foreground dark:text-font-dark-mode mb-6 mt-1">
                      {work.title}
                    </p>
                    {work.description ? (
                      <p className="text-muted-foreground dark:text-font-dark-mode">
                        {work.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 className="font-medium text-medium mb-8">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <div className="flex flex-col md:flex-row mb-6" key={education.school}>
                <div className="mr-8 max-w-[120px] w-full text-muted-foreground dark:text-font-dark-mode">
                  {education.start} - {education.end}
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-medium font-medium">{education.school}</h3>
                  <p className="text-muted-foreground dark:text-font-dark-mode mb-6 mt-1">
                    {education.degree}
                  </p>
                  {education.desc ? (
                    <p className="text-muted-foreground dark:text-font-dark-mode">
                      {education.desc}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </Section>
        <Section>
          <h2 className="font-medium text-medium mb-8">Key Skills</h2>
          <div className="flex flex-wrap gap-1 mb-6">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section>
          <h2 className="font-medium text-medium">Featured Projects</h2>
          <div className="mb-6">
            {RESUME_DATA.projects.map((project) => {
              if (project.isFeatured) {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    img={project.img}
                    link={"link" in project ? project.link.href : undefined}
                  />
                );
              }
            })}
          </div>
          <Link href="/project" aria-label="See_more">
            <Button variant={"outline"} className="mb-6">
              See More
            </Button>
          </Link>
        </Section>

        <Section className="scroll-mb-16 print:hidden">
          <h2 className="font-medium text-medium mb-8">Contacts</h2>
          <p className="text-muted-foreground dark:text-font-dark-mode mb-4">
            For collaboration purpose to solve problems together or just to grab a coffee and have a good talk:
          </p>
          <Link href="mailto:brendatamaa@gmail.com">
            <Button variant={"outline"} className="mb-6">
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Let&apos;s connect
            </Button>
          </Link>
        </Section>
      </section>

      <Menu />
    </motion.main>
  );
}
