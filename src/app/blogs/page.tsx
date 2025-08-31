import BlogCard from "@/components/blog-card";

const blogPosts = [
  {
    id: 'discovering-the-backwaters-of-kerala',
    title: 'Discovering the Serene Backwaters of Kerala',
    excerpt: 'Glide through emerald waters on traditional houseboats, explore spice plantations, and experience the tranquil beauty that makes Kerala a paradise on earth.',
    author: 'Eesha',
    date: 'August 15, 2025',
    imageUrl: 'https://picsum.photos/400/250?random=21',
    imageHint: 'Kerala backwaters',
  },
  {
    id: 'royal-palaces-of-rajasthan',
    title: 'The Majestic Palaces of Rajasthan: A Royal Journey',
    excerpt: 'Step into a fairy tale as you explore the opulent palaces, magnificent forts, and vibrant culture that define the royal heritage of Rajasthan.',
    author: 'Aman Maurya',
    date: 'September 2, 2025',
    imageUrl: 'https://picsum.photos/400/250?random=22',
    imageHint: 'Rajasthan palace',
  },
  {
    id: 'spiritual-journey-in-varanasi',
    title: 'A Spiritual Journey Along the Ganges in Varanasi',
    excerpt: 'Experience the soul-stirring spirituality of India\'s oldest living city, where ancient rituals meet the sacred waters of the holy Ganges river.',
    author: 'Komal Maurya',
    date: 'September 18, 2025',
    imageUrl: 'https://picsum.photos/400/250?random=23',
    imageHint: 'Varanasi ghats',
  },
  {
    id: 'monsoon-magic-in-maharashtra',
    title: 'Monsoon Magic: Exploring Maharashtra\'s Waterfalls',
    excerpt: 'Chase the rains through Maharashtra\'s spectacular waterfalls, lush green landscapes, and rejuvenating hill stations during the magical monsoon season.',
    author: 'Eesha',
    date: 'October 8, 2025',
    imageUrl: 'https://picsum.photos/400/250?random=24',
    imageHint: 'Maharashtra waterfall',
  },
  {
    id: 'culinary-delights-of-punjab',
    title: 'Culinary Delights: A Food Lover\'s Guide to Punjab',
    excerpt: 'Dive into the rich flavors of Punjabi cuisine - from butter chicken to makhan, explore the heartwarming dishes that define India\'s food culture.',
    author: 'Aman Maurya',
    date: 'October 22, 2025',
    imageUrl: 'https://picsum.photos/400/250?random=25',
    imageHint: 'Punjabi food',
  },
  {
    id: 'wildlife-safari-in-ranthambore',
    title: 'Wildlife Safari in Ranthambore: A Tiger\'s Tale',
    excerpt: 'Embark on an unforgettable journey to spot majestic tigers, explore ancient ruins, and witness the raw beauty of India\'s wildlife sanctuaries.',
    author: 'Komal Maurya',
    date: 'November 5, 2025',
    imageUrl: 'https://picsum.photos/400/250?random=26',
    imageHint: 'Ranthambore tiger',
  }
];

export default function BlogsPage() {
    return (
        <div className="bg-secondary/40 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">From Our Travel Journal</h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Authentic stories, cultural insights, and travel inspiration from the diverse landscapes of Incredible India.
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
