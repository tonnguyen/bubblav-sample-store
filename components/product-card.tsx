import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-offset">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        {product.sustainable && (
          <span className="absolute top-3 left-3 bg-white/90 text-brand text-xs font-medium px-2.5 py-1 rounded-full">
            Sustainable
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-brand mb-1">{product.name}</h3>
      <p className="text-sm text-muted">{formatPrice(product.price)}</p>
    </Link>
  );
}
