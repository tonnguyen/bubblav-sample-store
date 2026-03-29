'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-light relative z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/logo.svg" alt="V&V VELVET & VOGUE" width={180} height={36} className="h-7 sm:h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? 'text-accent text-sm font-semibold'
                    : 'text-muted text-sm font-medium hover:text-brand transition-colors'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">
            <Search className="w-5 h-5 text-muted" strokeWidth={1.5} />
            <ShoppingBag className="w-5 h-5 text-muted" strokeWidth={1.5} />
            <button className="bg-brand text-white px-5 py-2.5 rounded text-sm font-medium">
              Sign In
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <Search className="w-5 h-5 text-muted" strokeWidth={1.5} />
            <ShoppingBag className="w-5 h-5 text-muted" strokeWidth={1.5} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-muted hover:text-brand transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-light">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-3 rounded text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-offset text-accent'
                    : 'text-muted hover:text-brand hover:bg-offset'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-light mt-2">
              <button className="w-full bg-brand text-white px-5 py-3 rounded text-sm font-medium">
                Sign In
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
