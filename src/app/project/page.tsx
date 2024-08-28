"use client"
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { RESUME_DATA_ID } from "@/data/resume-data-id";
import Menu from "@/components/Menu";
import { ProjectCard } from '@/components/project-card';
import Header from "@/components/Header";
import { useTranslations } from 'next-intl';
import { useLocale } from '@/components/LocaleProvider';

function Project() {
    const t = useTranslations('Project');
    const locale = useLocale();
    const data = locale === 'en' ? RESUME_DATA : RESUME_DATA_ID;

    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
            <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
                <Header />
                <Section>
                    <h2 className='font-medium text-medium mb-8'>{t('projects')}</h2>
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
    )
}

export default Project