import products from "@/data/products.json";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory: string;
  brand: string;
  sizes: string[];
  colors: string[];
  material: string;
  sustainable: boolean;
  inStock: boolean;
  images: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
}

export function getAllProducts(): Product[] {
  return products as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return (products as Product[]).find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return (products as Product[])
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p.tags.some((t) => product.tags.includes(t)))
    )
    .slice(0, limit);
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString("sv-SE")} SEK`;
}
