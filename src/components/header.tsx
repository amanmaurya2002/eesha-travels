"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/recommendations", label: "AI Recommendations" },
  { href: "/blogs", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Eesha Travels Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="Eesha Travels Logo"
                      width={240}
                      height={240}
                      className="h-8 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex-grow flex flex-col items-start gap-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Button asChild className="w-full" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                  <Link href="/book" onClick={() => setIsOpen(false)}>Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
