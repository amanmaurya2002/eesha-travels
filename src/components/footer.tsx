import Link from 'next/link';
import { Mountain, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/40">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">Eesha Travels</span>
          </div>
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/packages" className="hover:text-primary">Packages</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <Link href="/blogs" className="hover:text-primary">Blog</Link>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.instagram.com/eesha_travels_?igsh=YTJsYTMzZHdjYWd2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eesha Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
