
import { RESUME_DATA } from "@/data/resume-data";
import { CommandMenu } from "@/components/command-menu";

export default function Menu() {

    return (
        <CommandMenu
            links={[
                ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                    url: socialMediaLink.url,
                    title: socialMediaLink.name,
                })),
            ]}
        />
    );
}
