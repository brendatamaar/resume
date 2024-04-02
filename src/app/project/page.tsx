import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import Menu from "@/components/Menu";
import { ProjectCard } from '@/components/project-card';
import Header from "@/components/Header";
import Hero from '@/components/Hero';
async function Project() {
    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
            <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
                <Header />
                <Hero />
                <Section>
                    <h2 className='font-medium text-medium mb-8'>Projects</h2>
                    <div className="-mx-3">
                        {RESUME_DATA.projects.map((project) => {
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