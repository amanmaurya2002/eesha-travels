import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Wallet, Headset, LockKeyhole } from 'lucide-react';
import PackageCard from '@/components/package-card';

const featuredPackages = [
  {
    id: 'jibhi',
    destination: 'Jibhi',
    description: 'Experience the romance of Jibhi with a 3 days getaway.',
    price: 4999,
    duration: '3 Days 2 Nights',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    imageHint: 'Jibhi',
  },
  {
    id: 'chandigarh',
    destination: 'Chandigarh',
    description: 'Explore the vibrant culture and futuristic cityscapes of Chandigarh with a 10 days getaway.',
    price: 5999,
    duration: '10 Days 9 Nights',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    imageHint: 'Chandigarh',
  },
  {
    id: 'goa',
    destination: 'Goa',
    description: 'Relax and unwind on the beautiful beaches of Goa with a 10 days getaway.',
    price: 13999,
    duration: '10 Days 9 Nights',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    imageHint: 'Goa',
  },
];

const travelMoments = [
  { src: 'https://picsum.photos/400/600?random=10', hint: 'mountain hiker' },
  { src: 'https://picsum.photos/400/600?random=11', hint: 'city nightlife' },
  { src: 'https://picsum.photos/400/600?random=12', hint: 'beach sunset' },
  { src: 'https://picsum.photos/400/600?random=13', hint: 'ancient ruins' },
  { src: 'https://picsum.photos/400/600?random=14', hint: 'desert safari' },
  { src: 'https://picsum.photos/400/600?random=15', hint: 'jungle waterfall' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Misty forest"
          fill
          className="object-cover -z-10 brightness-50"
          data-ai-hint="misty forest"
        />
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Your journey to unforgettable experiences begins here.
          </p>
          <div className="">
            <Button
              asChild
              className="px-10 h-14 text-lg bg-background/80 text-foreground hover:bg-background/90 border border-input"
            >
              <Link href="/book">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">Why Choose Us?</h2>
              <p className="text-muted-foreground mb-8 text-lg text-center">
                We are passionate about creating the most memorable travel experiences. Our expertise and dedication ensure that every trip you take with us is seamless, exciting, and tailored just for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-secondary/30 border-0 shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                       <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold mb-1">Handpicked Destinations</h3>
                      <p className="text-sm text-muted-foreground">Travel to the most beautiful and unique places around the world.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-0 shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <Wallet className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold mb-1">Affordable Packages</h3>
                      <p className="text-sm text-muted-foreground">Get the best value for your money without compromising on quality.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-0 shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <Headset className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold mb-1">24/7 Travel Assistance</h3>
                      <p className="text-sm text-muted-foreground">Our team is always here to help you, any time of the day.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-0 shadow-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                       <LockKeyhole className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold mb-1">Easy & Secure Booking</h3>
                      <p className="text-sm text-muted-foreground">Book your dream vacation with our simple and secure process.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-64 md:h-[500px] rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/600/800" alt="Happy traveler" className="object-cover" fill data-ai-hint="happy traveler"/>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-packages" className="py-16 md:py-24 bg-secondary/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Featured Packages</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our most popular travel packages, designed to give you an unforgettable experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          <Button asChild size="lg" className="mt-12" variant="outline">
            <Link href="/packages">View All Packages</Link>
          </Button>
        </div>
      </section>

      <section id="travel-moments" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Travel Moments</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A collection of unforgettable journeys and breathtaking views from travelers like you.
          </p>
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-6 gap-4 space-y-4">
            {travelMoments.map((moment, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
                <Image
                  src={moment.src}
                  alt={`Travel moment ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                  data-ai-hint={moment.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
