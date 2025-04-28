"use client";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { RESUME_DATA_ID } from "@/data/resume-data-id";
import Menu from "@/components/Menu";
import { ProjectCard } from "@/components/utils/project-card";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import { useLocale } from "@/components/LocaleProvider";

function Project() {
  const t = useTranslations("Project");
  const locale = useLocale();
  const data = locale === "en" ? RESUME_DATA : RESUME_DATA_ID;

  return (
    <main className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <section className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-14">
        <Header />
        <Section>
          <h2 className="text-medium mb-8 font-medium">{t("projects")}</h2>
          <div className="-mx-3 grid grid-cols-2 gap-3 print:grid-cols-3 print:gap-2">
            {data.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <Menu />
    </main>
  );
}

export default Project;
