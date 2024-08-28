"use client"
import { Section } from "@/components/ui/section";
import { NOW_DATA } from "@/data/now-data";
import { NOW_DATA_ID } from "@/data/now-data-id";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import { useTranslations } from 'next-intl';
import { useLocale } from '@/components/LocaleProvider';

function Now() {
    const t = useTranslations('Project');
    const locale = useLocale();
    const data = locale === 'en' ? NOW_DATA : NOW_DATA_ID;

    return (
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-6 print:p-12 md:px-16 md:py-10">
            <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
                <Header />
                <Section>
                    <h2 className='font-medium text-medium mb-8'>What is this page?</h2>
                    <div className="text-muted-foreground dark:text-font-dark-mode mb-6">
                        This is a <a className='underline' href='https://nownownow.com/about' target="_blank">now</a> page, containing my life updates and journal.
                    </div>
                </Section>
                <Section>
                    <h2 className="font-medium text-medium mb-8">What I am Up To</h2>
                    <div className="text-muted-foreground dark:text-font-dark-mode mb-6 flex flex-col gap-1">
                        {data.work.map((work) => {
                            return <ul key={work} className="list-disc ml-3">
                                <li> {work} </li>
                            </ul>
                        })}
                    </div>
                </Section>

                <Section>
                    <h2 className="font-medium text-medium mb-8">Life Update</h2>
                    <div className="text-muted-foreground dark:text-font-dark-mode mb-6 flex flex-col gap-1">
                        {data.personal.map((personal) => {
                            return <ul key={personal} className="list-disc ml-3">
                                <li> {personal} </li>
                            </ul>
                        })}
                    </div>
                </Section>

                <Section>
                    <h2 className="font-medium text-medium mb-8">Personal Target</h2>
                    <div className="text-muted-foreground dark:text-font-dark-mode mb-6 flex flex-col gap-1">
                        {data.target.map((target) => {
                            return <ul key={target} className="list-disc ml-3">
                                <li> {target} </li>
                            </ul>
                        })}
                    </div>
                </Section>

                <Section>
                    <h2 className="font-medium text-medium mb-8">Connect with Me</h2>
                    <div className="text-muted-foreground dark:text-font-dark-mode mb-20 flex flex-col gap-1">
                        {data.hobby.map((hobby) => {
                            return <ul key={hobby.hobby} className="list-disc ml-3">
                                <li> <a className='underline hover:underline' href={hobby.link} target='_blank'>{hobby.hobby}</a> </li>
                            </ul>
                        })}
                    </div>
                </Section>

                <span className='text-muted-foreground dark:text-font-dark-mode mb-6 '>Last update: {data.lastUpdate} </span>
            </section>

            <Menu />
        </main>
    )
}

export default Now