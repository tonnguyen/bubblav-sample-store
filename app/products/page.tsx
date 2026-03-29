import { Metadata } from "next";
import Link from "next/link";
import { getAllProducts, Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const metadata: Metadata = {
  title: "Shop All Products | VELVET & VOGUE",
  description:
    "Browse our curated collection of premium fashion pieces. Sustainable luxury clothing, accessories, and footwear.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sustainable?: string; sort?: string }>;
}) {
  const { category, sustainable, sort } = await searchParams;
  const allProducts = getAllProducts();

  const categories = Array.from(
    new Set(allProducts.map((p: Product) => p.category))
  ).sort();

  const activeCategory = categories.find(
    (c) => c.toLowerCase() === category?.toLowerCase()
  );

  let products = activeCategory
    ? allProducts.filter((p: Product) => p.category === activeCategory)
    : allProducts;

  if (sustainable === "true") {
    products = products.filter((p: Product) => p.sustainable);
  }

  if (sort === "newest") {
    products = [...products].reverse();
  }

  const isSustainable = sustainable === "true";
  const heading = isSustainable ? "Sustainable Collection" : activeCategory ?? "Our Collection";
  const countLabel = isSustainable
    ? `${products.length} sustainably made pieces`
    : activeCategory
    ? `${products.length} ${activeCategory.toLowerCase()} pieces`
    : `${products.length} pieces curated for the modern individual`;

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-light py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent mb-3 block">
            SHOP ALL
          </span>
          <h1 className="font-newsreader text-3xl sm:text-[40px] font-medium leading-[1.1] text-brand mb-3">
            {heading}
          </h1>
          <p className="text-muted text-base max-w-[480px] mx-auto">
            {countLabel}
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-light py-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-2 justify-center">
          <Link
            href="/products"
            className={`text-xs font-medium px-4 py-2 rounded-full transition-colors ${
              !activeCategory
                ? "bg-brand text-white"
                : "bg-offset text-muted hover:text-brand"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${encodeURIComponent(cat.toLowerCase())}`}
              className={`text-xs font-medium px-4 py-2 rounded-full transition-colors ${
                activeCategory === cat
                  ? "bg-brand text-white"
                  : "bg-offset text-muted hover:text-brand"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
