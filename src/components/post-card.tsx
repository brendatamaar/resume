import {
  Card,
  CardHeader,
  CardContent,
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
    <Card className="flex flex-col overflow-hidden border border-muted px-3.5 py-6 my-2 hover:bg-zinc-50">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base space-y-2">
          <div className="block">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a className="hover:underline" href={link}>
              {title}
            </a>
          </h3>
          </div>
          <div className="text-sm tabular-nums text-gray-500">
            {formatDate(date)}
          </div>
        </div>

      </CardHeader>
      <CardContent className="text-md">
        <span className="inline-flex gap-x-1">
          {tags.map((tag) => (
            <Badge variant="default" className="font-sans" key={tag}>
              {tag}
            </Badge>
          ))}
        </span>
      </CardContent>
    </Card>
  );
}
