'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-light">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="V&V VELVET & VOGUE" width={220} height={36} className="h-9 w-auto object-contain" />
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8">
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

          {/* Actions */}
          <div className="flex items-center gap-5">
            <Search className="w-5 h-5 text-muted" strokeWidth={1.5} />
            <ShoppingBag className="w-5 h-5 text-muted" strokeWidth={1.5} />
            <button className="bg-brand text-white px-5 py-2.5 rounded text-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
