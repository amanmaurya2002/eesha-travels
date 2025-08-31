import PackageCard from "@/components/package-card";
import { Plane } from "lucide-react";

const allPackages = [
    {
        id: 'paris-dream',
        destination: 'Parisian Dream',
        description: 'Experience the romance of Paris with a week-long getaway.',
        price: 1800,
        duration: '7 Days',
        imageUrl: 'https://picsum.photos/400/300?random=1',
        imageHint: 'Paris Eiffel Tower',
    },
    {
        id: 'tokyo-adventure',
        destination: 'Tokyo Adventure',
        description: 'Explore the vibrant culture and futuristic cityscapes of Tokyo.',
        price: 2200,
        duration: '8 Days',
        imageUrl: 'https://picsum.photos/400/300?random=2',
        imageHint: 'Tokyo street',
    },
    {
        id: 'bali-escape',
        destination: 'Bali Escape',
        description: 'Relax and unwind on the beautiful beaches of Bali.',
        price: 1500,
        duration: '10 Days',
        imageUrl: 'https://picsum.photos/400/300?random=3',
        imageHint: 'Bali beach',
    },
    {
        id: 'roman-holiday',
        destination: 'Roman Holiday',
        description: 'Discover ancient history and culinary delights in Rome.',
        price: 1950,
        duration: '7 Days',
        imageUrl: 'https://picsum.photos/400/300?random=4',
        imageHint: 'Rome Colosseum',
    },
    {
        id: 'inca-trail',
        destination: 'The Inca Trail',
        description: 'Hike the legendary path to the lost city of Machu Picchu.',
        price: 2500,
        duration: '9 Days',
        imageUrl: 'https://picsum.photos/400/300?random=5',
        imageHint: 'Machu Picchu',
    },
    {
        id: 'safari-spectacular',
        destination: 'Safari Spectacular',
        description: 'Witness the Great Migration in the heart of the Serengeti.',
        price: 3500,
        duration: '12 Days',
        imageUrl: 'https://picsum.photos/400/300?random=6',
        imageHint: 'African safari',
    },
];


export default function PackagesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Our Travel Packages</h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        We've curated a collection of unique travel experiences. Find the perfect adventure that awaits you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPackages.map((pkg) => (
                        <PackageCard key={pkg.id} {...pkg} />
                    ))}
                </div>
            </div>
        </div>
    );
}