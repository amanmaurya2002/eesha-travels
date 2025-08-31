"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/blogs", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open and handle escape key
  useEffect(() => {
    console.log('Mobile menu state changed:', isMobileMenuOpen);

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        console.log('Escape key pressed, closing menu');
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount or when menu closes
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <div className="p-1 container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Eesha Travels Logo"
            width={64}
            height={64}
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
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={(e) => {
              console.log('Hamburger button clicked, current state:', isMobileMenuOpen);
              e.stopPropagation();
              const newState = !isMobileMenuOpen;
              console.log('Setting new state to:', newState);
              setIsMobileMenuOpen(newState);
            }}
            className="p-2 rounded-md text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent relative z-[10001] pointer-events-auto"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] md:hidden">
            {/* Backdrop - only covers area below header */}
            <div
              className="absolute top-16 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm"
              onClick={(e) => {
                console.log('Backdrop clicked, closing menu');
                e.stopPropagation();
                setIsMobileMenuOpen(false);
              }}
            />

            {/* Menu Panel */}
            <div
              className="fixed top-16 left-0 right-0 bottom-0 shadow-2xl border-t border-border mobile-menu-panel bg-background"
              style={{
                zIndex: 9999,
                height: 'calc(100vh - 4rem)' // Explicitly set height to cover from header to bottom
              }}
            >
              <nav className="flex flex-col h-full min-h-0 overflow-hidden">
                {/* Navigation Links */}
                <div className="flex-1 px-6 py-6 space-y-4 bg-background overflow-y-auto">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-4 px-4 text-lg font-semibold text-foreground hover:bg-accent/10 hover:text-accent rounded-lg transition-all duration-200 border border-transparent hover:border-accent/20"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'slideInRight 0.3s ease-out forwards'
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Book Now Button */}
                <div className="p-6 border-t border-border bg-muted/30">
                  <Button
                    asChild
                    className="w-full h-12 text-lg font-semibold shadow-md"
                    style={{
                      backgroundColor: 'hsl(var(--accent))',
                      color: 'hsl(var(--accent-foreground))'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Link href="/book">Book Now</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
