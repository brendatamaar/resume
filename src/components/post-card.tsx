import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { formatDate } from "@/components/formatDate"

interface Props {
  title: string;
  link?: string;
  date: string;
  tags: string[];
}

export function PostCard({ title, link, date, tags }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3 my-2 hover:bg-zinc-50 dark:hover:bg-slate-700">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>
            <div className="flex items-center justify-between space-y-3">
              <div className="block">
                <h3 className="inline-flex items-center justify-center gap-x-1 leading-none">
                  <a className="text-medium font-medium inline-flex items-center gap-1 font-sans hover:underline" href={link}>
                    {title}
                  </a>
                  <span className="size-1 rounded-full bg-green-500"></span>
                </h3>
              </div>
              <div className="text-muted-foreground text-sm dark:text-font-dark-mode">
                {formatDate(date)}
              </div>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <span className="inline-flex gap-x-1 mt-2">
          {tags.map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </span>
      </CardContent>
    </Card>
  );
}
