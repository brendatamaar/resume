import { RESUME_DATA } from "@/data/resume-data";
import { RESUME_DATA_ID } from "@/data/resume-data-id";
import { GlobeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";
import { useLocale } from "@/components/LocaleProvider";
import Link from "next/link";
import { TextEffect } from "@/components/utils/text-effect";

export default function Hero() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const data = locale === "en" ? RESUME_DATA : RESUME_DATA_ID;

  return (
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
        <AvatarImage alt={data.name} src={data.avatarUrl} rel="dns-prefetch" />
        <AvatarFallback>{data.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}
