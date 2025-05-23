import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  img?: string;
}

export function ProjectCard({ title, description, tags, link, img }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3 my-2">
      <CardHeader>
        <div className="space-y-1">
          {img ? (
            <img className="w-full h-3/4 rounded-md mb-2 mx-auto" src={img} alt="project" />
          ) : (<div className="none"></div>)}
          <CardTitle>
            {link ? (
              <a
                href={link}
                target="_blank"
                className="text-medium font-medium mt-2 mb-4 inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              <span className="text-medium font-medium mt-2 mb-4 inline-flex items-center gap-1 hover:underline">{title}</span>
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-muted-foreground dark:text-font-dark-mode">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-4 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
