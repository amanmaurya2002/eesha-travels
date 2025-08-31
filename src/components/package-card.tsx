import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

type PackageCardProps = {
  id: string;
  imageUrl: string;
  imageHint: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
};

export default function PackageCard({ id, imageUrl, imageHint, destination, description, price, duration }: PackageCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={destination}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2">{destination}</CardTitle>
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duration}</span>
        </div>
        <p className="text-foreground/80 font-body text-base">{description}</p>
      </CardContent>
      <CardFooter className="p-6 flex justify-between items-center bg-secondary/30">
        <p className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</p>
        <Button asChild style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
          <Link href={`/book?package=${id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
