
import { RESUME_DATA } from "@/data/resume-data";
import { RESUME_DATA_ID } from "@/data/resume-data-id";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from 'next-intl';
import { useLocale } from '@/components/LocaleProvider';
import Link from "next/link";

export default function Hero() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const data = locale === 'en' ? RESUME_DATA : RESUME_DATA_ID;
    
    return (
        <div className="block md:flex print:flex items-center justify-between">
            <div className="flex-1 space-y-8">
                <h1 className="text-medium font-medium -mb-4">{data.name}</h1>
                <p className="text-medium text-muted-foreground dark:text-font-dark-mode max-w-md">
                    {data.about}
                </p>
                <p className="max-w-md items-center">
                    <Link
                        className="inline-flex gap-x-1.5 font-light text-muted-foreground dark:text-font-dark-mode align-baseline leading-none hover:underline"
                        href={data.locationLink}
                        aria-label="Location"
                        target="_blank"
                    >
                        <GlobeIcon className="size-4" />
                        {data.location}
                    </Link>
                </p>
                <div className="flex gap-x-1 pt-1 print:hidden">
                    {data.contact.email ? (
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                        >
                            <Link href={`mailto:${data.contact.email}`} aria-label="Email">
                                <MailIcon className="size-4" />
                            </Link>
                        </Button>
                    ) : null}
                    {data.contact.social.map((social) => (
                        <Button
                            key={social.name}
                            variant="outline"
                            size="sm"
                            asChild
                        >
                            <Link href={social.url} aria-label={social.name}>
                                <social.icon className="size-4" />
                            </Link>
                        </Button>
                    ))}

                    <Button variant="outline" size={"sm"}>
                        <a href="/pdf/cv_2024_eng.pdf" aria-label="Resume">{t('download')}
                        </a>
                    </Button>
                </div>
                <div className="hidden flex-col gap-x-1 print:flex">
                    {data.contact.email ? (
                        <Link href={`mailto:${data.contact.email}`} aria-label="Print_email">
                            <span className="underline">{data.contact.email}</span>
                        </Link>
                    ) : null}
                    {data.contact.tel ? (
                        <Link href={`tel:${data.contact.tel}`} aria-label="Print_telp">
                            <span className="underline">{data.contact.tel}</span>
                        </Link>
                    ) : null}
                </div>
            </div>

            <Avatar className="size-28 mx-auto max-sm:w-1/2 max-sm:h-1/2 max-sm:mt-6">
                <AvatarImage alt={data.name} src={data.avatarUrl} rel="dns-prefetch" />
                <AvatarFallback>{data.initials}</AvatarFallback>
            </Avatar>
        </div>
    );
}
