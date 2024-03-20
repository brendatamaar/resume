import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
interface Props {
  title: string;
  link?: string;
  date: string;
  tags: string[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('id-ID', options);
  const parts = formatter.formatToParts(date);

  const day = parts.find(part => part.type === 'day')?.value ?? '';
  const month = parts.find(part => part.type === 'month')?.value ?? '';
  const year = parts.find(part => part.type === 'year')?.value ?? '';

  return `${day} ${month} ${year}`;
}

export function PostCard({ title, link, date, tags }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3 my-2 hover:bg-zinc-50 dark:hover:bg-slate-700">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <div className="flex items-center justify-between gap-x-2 text-base space-y-3">
              <div className="block">
                <h3 className="inline-flex items-center justify-center gap-x-1 leading-none">
                  <a className=" inline-flex items-center gap-1 font-sans hover:underline" href={link}>
                    {title}
                  </a>
                  <span className="size-1 rounded-full bg-green-500"></span>
                </h3>
              </div>
              <div className="text-xs font-sans tabular-nums text-gray-500">
                {formatDate(date)}
              </div>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <span className="inline-flex gap-x-1">
          {tags.map((tag) => (
            <Badge variant="secondary" className="font-sans" key={tag}>
              {tag}
            </Badge>
          ))}
        </span>
      </CardContent>
    </Card>
  );
}
