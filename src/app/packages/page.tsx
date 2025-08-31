import PackageCard from "@/components/package-card";
import { Plane } from "lucide-react";

const allPackages = [
    {
        id: 'kashmir-paradise',
        destination: 'Kashmir Paradise',
        description: 'Experience the breathtaking beauty of Kashmir with houseboat stays and scenic landscapes.',
        price: 25999,
        duration: '6 Days',
        imageUrl: 'https://picsum.photos/400/300?random=1',
        imageHint: 'Kashmir mountains and lakes',
    },
    {
        id: 'goa-beach-bliss',
        destination: 'Goa Beach Bliss',
        description: 'Relax on pristine beaches, enjoy water sports, and experience vibrant nightlife in Goa.',
        price: 18999,
        duration: '5 Days',
        imageUrl: 'https://picsum.photos/400/300?random=2',
        imageHint: 'Goa beach sunset',
    },
    {
        id: 'rajasthan-royal',
        destination: 'Rajasthan Royal Tour',
        description: 'Explore majestic palaces, forts, and desert landscapes of Rajasthan with cultural immersion.',
        price: 22999,
        duration: '8 Days',
        imageUrl: 'https://picsum.photos/400/300?random=3',
        imageHint: 'Rajasthan palace and desert',
    },
    {
        id: 'kerala-backwaters',
        destination: 'Kerala Backwaters',
        description: 'Cruise through serene backwaters, visit spice plantations, and experience Ayurvedic wellness.',
        price: 19999,
        duration: '7 Days',
        imageUrl: 'https://picsum.photos/400/300?random=4',
        imageHint: 'Kerala backwaters and houseboats',
    },
    {
        id: 'himachal-adventure',
        destination: 'Himachal Adventure',
        description: 'Trek through stunning valleys, visit ancient temples, and enjoy adventure sports in Himachal.',
        price: 17999,
        duration: '6 Days',
        imageUrl: 'https://picsum.photos/400/300?random=5',
        imageHint: 'Himachal mountains and valleys',
    },
    {
        id: 'golden-triangle',
        destination: 'Golden Triangle Tour',
        description: 'Discover Delhi, Agra, and Jaipur - the crown jewels of Indian heritage and culture.',
        price: 24999,
        duration: '7 Days',
        imageUrl: 'https://picsum.photos/400/300?random=6',
        imageHint: 'Taj Mahal and Indian monuments',
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