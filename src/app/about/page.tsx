import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Globe, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white"
               style={{
                 backgroundImage: 'url(/images/about.jpg)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-bold drop-shadow-lg">About Eesha Travels</h1>
          <p className="text-lg md:text-xl mt-2 drop-shadow-md">Crafting unforgettable journeys, one adventure at a time.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-headline text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-muted-foreground">To inspire and enable travel that is both breathtaking and responsible. We believe in creating experiences that are not only memorable for our clients but also respectful to the cultures and environments we visit.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-headline text-2xl font-semibold mb-2">Our Vision</h2>
                <p className="text-muted-foreground">To be the most trusted and innovative travel company, known for our exceptional service, curated packages, and a deep passion for exploring the world. We aim to make dream vacations a reality for everyone.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-headline text-2xl font-semibold mb-2">Our Team</h2>
                <p className="text-muted-foreground">Our team is composed of seasoned travelers and industry experts who live and breathe adventure. We leverage our personal experiences and knowledge to design the perfect trip for you, every single time.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container mx-auto max-w-5xl px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-center">Meet the Founder</h2>
                <p className="text-muted-foreground mb-4 text-lg text-center">Eesha, a globetrotter with a passion for discovering hidden gems, founded Eesha Travels to share her love for exploration. With over a decade of experience in the travel industry, she ensures every itinerary is filled with authentic and enriching experiences.</p>
                <p className="text-muted-foreground">"Travel is more than just seeing new places," says Eesha. "It's about connecting with the world, creating lasting memories, and returning home with a new perspective. That's the magic I want to share with every one of our clients."</p>
             </div>
             <div className="relative h-96 rounded-lg overflow-hidden order-1 md:order-2">
                 <Image src="https://picsum.photos/600/700" alt="Eesha, the founder" className="object-cover" fill data-ai-hint="portrait woman smiling"/>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
