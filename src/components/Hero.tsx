
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Hero() {

    return (
        <div className="block md:flex print:flex items-center justify-between">
            <div className="flex-1 space-y-4">
                <h1 className="text-medium font-medium -mb-4">{RESUME_DATA.name}</h1>
                <p className="text-medium text-muted-foreground dark:text-font-dark-mode max-w-md">
                    {RESUME_DATA.about}
                </p>
                <p className="max-w-md items-center">
                    <Link
                        className="inline-flex gap-x-1.5 font-light text-muted-foreground dark:text-font-dark-mode align-baseline leading-none hover:underline"
                        href={RESUME_DATA.locationLink}
                        aria-label="Location"
                        target="_blank"
                    >
                        <GlobeIcon className="size-4" />
                        {RESUME_DATA.location}
                    </Link>
                </p>
                <div className="flex gap-x-1 pt-1 print:hidden">
                    {RESUME_DATA.contact.email ? (
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                        >
                            <Link href={`mailto:${RESUME_DATA.contact.email}`} aria-label="Email">
                                <MailIcon className="size-4" />
                            </Link>
                        </Button>
                    ) : null}
                    {RESUME_DATA.contact.social.map((social) => (
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
                        <Link href="/pdf/cv_2024_eng.pdf" aria-label="Resume">Download Resume
                        </Link>
                    </Button>
                </div>
                <div className="hidden flex-col gap-x-1 print:flex">
                    {RESUME_DATA.contact.email ? (
                        <Link href={`mailto:${RESUME_DATA.contact.email}`} aria-label="Print_email">
                            <span className="underline">{RESUME_DATA.contact.email}</span>
                        </Link>
                    ) : null}
                    {RESUME_DATA.contact.tel ? (
                        <Link href={`tel:${RESUME_DATA.contact.tel}`} aria-label="Print_telp">
                            <span className="underline">{RESUME_DATA.contact.tel}</span>
                        </Link>
                    ) : null}
                </div>
            </div>

            <Avatar className="size-28 mx-auto max-sm:w-1/2 max-sm:h-1/2 max-sm:mt-6">
                <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
        </div>
    );
}
