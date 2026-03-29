"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Star, Heart, Minus, Plus, ChevronRight } from "lucide-react";
import { getAllProducts, getProductBySlug, getRelatedProducts, formatPrice } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

function ProductDetail({ product }: { product: NonNullable<ReturnType<typeof getProductBySlug>> }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "material" | "shipping">("description");

  const related = getRelatedProducts(product, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-offset border-b border-light">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-brand transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="w-full lg:w-[580px] flex-shrink-0">
              {/* Main Image */}
              <div className="relative aspect-[580/700] max-h-[700px] rounded-lg overflow-hidden bg-offset mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  sizes="580px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative w-[72px] h-[72px] sm:w-[120px] sm:h-[120px] rounded-lg overflow-hidden bg-offset border-2 transition-colors ${
                        i === selectedImage ? "border-brand" : "border-transparent hover:border-light"
                      }`}
                    >
                      <Image src={img} alt="" fill sizes="120px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Panel */}
            <div className="flex-1 max-w-[480px]">
              {/* Title */}
              <h1 className="text-2xl sm:text-[28px] font-semibold text-brand leading-tight mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.round(product.rating)
                          ? "text-[#E8B931] fill-[#E8B931]"
                          : "text-light"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-semibold text-brand mb-6">
                {formatPrice(product.price)}
              </p>

              {/* Description */}
              <p className="text-sm text-muted leading-[1.6] mb-6">
                {product.description}
              </p>

              <hr className="border-light mb-6" />

              {/* Material */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">Material</span>
                <p className="text-sm text-brand mt-1">{product.material}</p>
              </div>

              {/* Sustainable Badge */}
              {product.sustainable && (
                <div className="inline-flex items-center gap-1.5 bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium px-3 py-1.5 rounded-lg mb-6">
                  <span className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full" />
                  Sustainably Made
                </div>
              )}

              {/* Colors */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">
                  Color: {product.colors[selectedColor]}
                </span>
                <div className="flex gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(i)}
                      className={`w-8 h-8 rounded-full border-2 transition-colors ${
                        i === selectedColor ? "border-brand" : "border-light"
                      }`}
                      style={{ backgroundColor: getColorCode(color) }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">Size</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "bg-brand text-white"
                          : "bg-offset text-brand hover:border hover:border-brand"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-3 mb-4">
                {/* Quantity */}
                <div className="flex items-center border border-light rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-brand transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-brand">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-muted hover:text-brand transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button className="flex-1 bg-brand text-white h-[52px] rounded-lg text-sm font-medium hover:bg-brand/90 transition-colors">
                  Add to Cart
                </button>

                {/* Wishlist */}
                <button
                  className="w-[52px] h-[52px] flex items-center justify-center border border-light rounded-lg text-muted hover:text-brand hover:border-brand transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Category + Stock */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-offset text-muted px-3 py-1.5 rounded-full">
                  {product.category}
                </span>
                <span className={`text-xs px-3 py-1.5 rounded-full ${product.inStock ? "bg-[#E8F5E9] text-[#2E7D32]" : "bg-red-50 text-red-600"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-t border-light px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto py-8 sm:py-12">
          {/* Tab Headers */}
          <div className="flex gap-8 border-b border-light mb-8">
            {(["description", "material", "shipping"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                  activeTab === tab
                    ? "border-brand text-brand"
                    : "border-transparent text-muted hover:text-brand"
                }`}
              >
                {tab === "description"
                  ? "Description"
                  : tab === "material"
                  ? "Material & Care"
                  : "Shipping & Returns"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div className="max-w-2xl">
              <p className="text-sm text-muted leading-[1.6] mb-6">{product.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-offset p-4 rounded-lg">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1">Category</span>
                  <span className="text-sm text-brand">{product.category} / {product.subcategory}</span>
                </div>
                <div className="bg-offset p-4 rounded-lg">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1">Brand</span>
                  <span className="text-sm text-brand">{product.brand}</span>
                </div>
                <div className="bg-offset p-4 rounded-lg">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1">Rating</span>
                  <span className="text-sm text-brand">{product.rating}/5 ({product.reviewCount} reviews)</span>
                </div>
                <div className="bg-offset p-4 rounded-lg">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1">Tags</span>
                  <span className="text-sm text-brand">{product.tags.join(", ")}</span>
                </div>
              </div>
            </div>
          )}
          {activeTab === "material" && (
            <div className="max-w-2xl">
              <p className="text-sm text-muted leading-[1.6] mb-4">
                <strong className="text-brand">Composition:</strong> {product.material}
              </p>
              <ul className="text-sm text-muted leading-[1.8] space-y-1">
                <li>• Professional dry cleaning recommended</li>
                <li>• Store on a padded hanger to maintain shape</li>
                <li>• Avoid direct sunlight for extended periods</li>
                <li>• Follow care label instructions for best results</li>
              </ul>
            </div>
          )}
          {activeTab === "shipping" && (
            <div className="max-w-2xl">
              <ul className="text-sm text-muted leading-[1.8] space-y-1">
                <li>• Free shipping on orders over 500 SEK</li>
                <li>• Standard delivery: 3-5 business days</li>
                <li>• Express delivery: 1-2 business days (+99 SEK)</li>
                <li>• 30-day hassle-free returns</li>
                <li>• Free return shipping on all orders</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-light py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium text-brand mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Approximate color map for color swatches
function getColorCode(name: string): string {
  const map: Record<string, string> = {
    black: "#1A1A1A",
    white: "#FFFFFF",
    cream: "#FFFDD0",
    ivory: "#FFFFF0",
    blush: "#DE5D83",
    "dusty rose": "#DCAE96",
    champagne: "#F7E7CE",
    camel: "#C19A6B",
    tan: "#D2B48C",
    cognac: "#9A463D",
    beige: "#F5F5DC",
    sand: "#C2B280",
    charcoal: "#36454F",
    "grey melange": "#9E9E9E",
    "forest green": "#228B22",
    olive: "#808000",
    "sage": "#9DC183",
    "sage green": "#9DC183",
    "deep teal": "#005F5F",
    navy: "#000080",
    burgundy: "#800020",
    emerald: "#50C878",
    terracotta: "#E2725B",
    "light blue": "#ADD8E6",
    "blue/white stripe": "#6495ED",
    "pink/white stripe": "#FFB6C1",
    "green/white stripe": "#90EE90",
    "light wash": "#A4C8E1",
    "mid wash": "#6B8DB2",
    "matte black": "#2C2C2C",
    stone: "#928E85",
    "dark brown": "#654321",
    chestnut: "#954535",
    taupe: "#483C32",
    "gold": "#FFD700",
    silver: "#C0C0C0",
    "silver mist": "#C0C0C0",
    bronze: "#CD7F32",
    oatmeal: "#B8A990",
    "dusty pink": "#DCAE96",
    natural: "#F5F0E1",
    "black ribbon": "#1A1A1A",
    "navy ribbon": "#000080",
    "herringbone grey": "#8C8C8C",
    "plaid burgundy": "#800020",
    "solid camel": "#C19A6B",
    "gold/white pearl": "#F5F5DC",
    "silver/white pearl": "#E8E8E8",
  };
  return map[name.toLowerCase()] || "#CCCCCC";
}

export default function ProductPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
