import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type BlogCardProps = {
  id: string;
  imageUrl: string;
  imageHint: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

export default function BlogCard({ id, imageUrl, imageHint, title, excerpt, author, date }: BlogCardProps) {
  const authorInitials = author.split(' ').map(n => n[0]).join('');

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
      <Link href={`/blogs/${id}`} className="block">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-3 leading-tight">
          <Link href={`/blogs/${id}`} className="hover:text-primary transition-colors">{title}</Link>
        </CardTitle>
        <p className="text-foreground/80 font-body text-base">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 flex justify-between items-center bg-secondary/30">
        <div className="flex items-center gap-3">
            <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/40?u=${author}`} />
                <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-sm">{author}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
            </div>
        </div>
        <Button asChild variant="secondary" size="sm">
            <Link href={`/blogs/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
