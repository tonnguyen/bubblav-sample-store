import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand text-white py-20 px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Main */}
        <div className="flex justify-between mb-12">
          {/* Brand */}
          <div className="w-[280px]">
            <h3 className="font-newsreader text-lg font-semibold tracking-[0.06em] mb-4">
              VELVET &amp; VOGUE
            </h3>
            <p className="text-muted-light text-sm leading-[1.6]">
              Fashion that speaks your language. Free shipping on orders over 500 SEK | 30-day hassle-free returns
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] mb-3 block">
                SHOP
              </span>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-muted-light text-sm hover:text-white transition-colors">Women&apos;s Collection</a>
                <a href="#" className="text-muted-light text-sm hover:text-white transition-colors">Men&apos;s Collection</a>
                <a href="#" className="text-muted-light text-sm hover:text-white transition-colors">Accessories</a>
              </div>
            </div>
            <div>
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] mb-3 block">
                HELP
              </span>
              <div className="flex flex-col gap-3">
                <Link href="/shipping" className="text-muted-light text-sm hover:text-white transition-colors">Shipping Info</Link>
                <Link href="/returns" className="text-muted-light text-sm hover:text-white transition-colors">Returns</Link>
                <Link href="/faq" className="text-muted-light text-sm hover:text-white transition-colors">FAQ</Link>
              </div>
            </div>
            <div>
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] mb-3 block">
                ABOUT
              </span>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-muted-light text-sm hover:text-white transition-colors">Our Story</Link>
                <Link href="/policies" className="text-muted-light text-sm hover:text-white transition-colors">Policies</Link>
                <Link href="/contact" className="text-muted-light text-sm hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-[320px]">
            <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] mb-4 block">
              STAY CONNECTED
            </span>
            <p className="text-muted-light text-sm leading-[1.5] mb-4">
              Join our VIP list for exclusive access to new arrivals, special offers, and style inspiration.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white placeholder:text-muted-light focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-brand px-4 py-2 rounded text-sm font-medium hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center pt-8 border-t border-white/20">
          <p className="text-muted text-xs">
            © 2026 Velvet &amp; Vogue. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-[18px] h-[18px] text-muted-light" strokeWidth={1.5} />
            <Facebook className="w-[18px] h-[18px] text-muted-light" strokeWidth={1.5} />
            <Twitter className="w-[18px] h-[18px] text-muted-light" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </footer>
  );
}
