import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { EnvelopeOpenIcon, DownloadIcon } from "@radix-ui/react-icons";
import Header from "@/components/Header";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="print:hidden">
          <Header />
        </div>
        <div className="block md:flex print:flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-xl md:text-2xl font-bold -mb-1">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
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
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
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
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
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
        <Section className="print:hidden">
          <Link href="/pdf/cv_2024_eng.pdf" locale={false}>
            <Button className="w-full">
              <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </Link>
        </Section>
        <Section>
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold mb-2">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (

              <ol className="relative border-s rounded-lg bg-card border-gray-200 dark:border-gray-700 text-card-foreground" key={work.company}>
                <li className="mb-5 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="text-sm tabular-nums text-gray-500">{work.start} - {work.end}</time>
                  <h3 className="font-semibold text-gray-900 dark:text-white"><a className="hover:underline" href={work.link}>
                    {work.company}
                  </a></h3>
                  <h4 className="font-mono text-sm">
                    {work.title}
                  </h4>
                  <p className="text-pretty font-mono text-muted-foreground mt-2 text-xs">{work.description}</p>
                </li>
              </ol>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold mb-2">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <ol className="relative border-s rounded-lg bg-card border-gray-200 dark:border-gray-700 text-card-foreground" key={education.school}>
                <li className="mb-5 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="text-sm tabular-nums text-gray-500">{education.start} - {education.end}</time>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {education.school}
                  </h3>
                  <h4 className="font-mono text-sm">
                    {education.degree}
                  </h4>
                  <p className="text-pretty font-mono text-muted-foreground mt-2 text-xs">{education.desc}</p>
                </li>
              </ol>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold mb-2">Featured Projects</h2>
          <div className="-mx-3">
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
        </Section>

        <Section className="scroll-mb-16 print:hidden">
          <h2 className="text-xl font-bold mb-2">Contacts</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground mb-2">
            For collaboration purpose to solve problems together or just to grab some coffee and have a good talk:
          </p>
          <a href="mailto:brendatamaa@gmail.com">
            <Button>
              <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Let&apos;s connect
            </Button>
          </a>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
