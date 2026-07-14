import { NextRequest, NextResponse } from "next/server";
import { getAllProducts } from "@/lib/products";

/**
 * GET /api/products/[slug]
 *
 * Full detail for a single product. Lookup is deliberately tolerant so the
 * chatbot's slug derivation doesn't have to be exact:
 *   1. exact slug match (case-insensitive)
 *   2. kebab-normalized input matched against slug
 *   3. exact product-name match
 *   4. product-name contains the input
 * On a miss we return 404 with suggestions so the model can retry.
 *
 * Consumed by the `samplesite_product_detail` custom tool with
 * `response_ui_type: "none"`, so this JSON is read verbatim by the model.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const raw = decodeURIComponent(slug).trim();
  const products = getAllProducts();

  const normalized = raw
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  const asName = raw.toLowerCase().replace(/-/g, " ").trim();

  const product =
    products.find((p) => p.slug.toLowerCase() === raw.toLowerCase()) ??
    products.find((p) => p.slug === normalized) ??
    products.find((p) => p.name.toLowerCase() === asName) ??
    products.find((p) => p.name.toLowerCase().includes(asName));

  if (!product) {
    const firstToken = asName.split(" ")[0];
    const suggestions = products
      .filter((p) => (firstToken ? p.name.toLowerCase().includes(firstToken) : true))
      .slice(0, 5)
      .map((p) => ({ name: p.name, slug: p.slug }));
    return NextResponse.json(
      { error: "Product not found", query: slug, suggestions },
      { status: 404 }
    );
  }

  const origin = new URL(request.url).origin;
  const related = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p.tags.some((t) => product.tags.includes(t)))
    )
    .slice(0, 3)
    .map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: p.price,
      currency: p.currency,
    }));

  return NextResponse.json({
    ...product,
    url: `${origin}/products/${product.slug}`,
    image: product.images[0] ? `${origin}${product.images[0]}` : undefined,
    relatedProducts: related,
  });
}
