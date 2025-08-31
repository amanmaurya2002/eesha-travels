import BlogCard from "@/components/blog-card";

const blogPosts = [
  {
    id: '10-hidden-gems-in-italy',
    title: '10 Hidden Gems to Discover in Italy',
    excerpt: 'Move beyond the Colosseum and canals. We\'re uncovering the lesser-known towns and stunning landscapes that make Italy truly magical.',
    author: 'Alex Johnson',
    date: 'October 26, 2023',
    imageUrl: 'https://picsum.photos/400/250?random=21',
    imageHint: 'Italian village',
  },
  {
    id: 'a-food-lovers-guide-to-vietnam',
    title: 'A Food Lover\'s Guide to Vietnam',
    excerpt: 'From steaming bowls of pho to crispy banh mi, join us on a culinary journey through the vibrant street food scene of Vietnam.',
    author: 'Samantha Bee',
    date: 'October 15, 2023',
    imageUrl: 'https://picsum.photos/400/250?random=22',
    imageHint: 'Vietnamese food',
  },
  {
    id: 'solo-travel-in-scandinavia',
    title: 'Finding Yourself: A Guide to Solo Travel in Scandinavia',
    excerpt: 'Embrace the solitude and stunning natural beauty of Scandinavia. Here are our top tips for a safe and unforgettable solo adventure.',
    author: 'Ben Carter',
    date: 'September 28, 2023',
    imageUrl: 'https://picsum.photos/400/250?random=23',
    imageHint: 'Norway fjord',
  },
  {
    id: 'packing-light-for-a-big-trip',
    title: 'The Art of Packing Light for a Big Trip',
    excerpt: 'Say goodbye to oversized luggage! Learn how to pack everything you need for a multi-week trip into a single carry-on.',
    author: 'Eesha Travels Staff',
    date: 'September 5, 2023',
    imageUrl: 'https://picsum.photos/400/250?random=24',
    imageHint: 'packing suitcase',
  },
  {
    id: 'navigating-the-grand-bazaar-in-istanbul',
    title: 'Navigating the Grand Bazaar in Istanbul',
    excerpt: 'A sensory overload in the best way possible. Here\'s how to haggle, what to buy, and how to not get lost in one of the world\'s oldest markets.',
    author: 'Fatima Ahmed',
    date: 'August 21, 2023',
    imageUrl: 'https://picsum.photos/400/250?random=25',
    imageHint: 'Turkish market',
  },
  {
    id: 'the-ultimate-costa-rica-ecotourism-itinerary',
    title: 'The Ultimate Costa Rica Ecotourism Itinerary',
    excerpt: 'Zip-lining through cloud forests, spotting exotic wildlife, and relaxing on pristine beaches. Explore the Pura Vida lifestyle with our eco-friendly guide.',
    author: 'Maria Rodriguez',
    date: 'August 10, 2023',
    imageUrl: 'https://picsum.photos/400/250?random=26',
    imageHint: 'Costa Rica jungle',
  }
];

export default function BlogsPage() {
    return (
        <div className="bg-secondary/40 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">From Our Travel Journal</h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Stories, tips, and inspiration from our travels around the globe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
