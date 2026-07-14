import { NextRequest, NextResponse } from "next/server";
import { getAllProducts } from "@/lib/products";
import { recommendSize, type SizeInputs } from "@/lib/size-data";

/**
 * GET /api/products/[slug]/sizing
 *
 * Recommends a size for a product from the visitor's body metrics
 * (weightKg, heightCm, bustCm/chestCm, waistCm, hipCm, footLengthCm — all
 * optional query params). Measurements beat weight; weight beats height; only
 * sizes the product actually offers are considered.
 *
 * Consumed by the `samplesite_size_recommendation` custom tool with
 * `response_ui_type: "none"`, so this JSON is read verbatim by the model,
 * which then presents the recommendation in natural language.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const sp = request.nextUrl.searchParams;

  const num = (key: string): number | undefined => {
    const v = sp.get(key);
    if (v == null || v === "") return undefined;
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  };

  const products = getAllProducts();
  const product =
    products.find((p) => p.slug === slug) ??
    products.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!product) {
    return NextResponse.json({ error: "Product not found", query: slug }, { status: 404 });
  }

  const inputs: SizeInputs = {
    weightKg: num("weightKg"),
    heightCm: num("heightCm"),
    bustCm: num("bustCm"),
    chestCm: num("chestCm"),
    waistCm: num("waistCm"),
    hipCm: num("hipCm"),
    footLengthCm: num("footLengthCm"),
  };

  const origin = new URL(request.url).origin;
  const { recommendation, chart, availableRows } = recommendSize({
    category: product.category,
    subcategory: product.subcategory,
    productSizes: product.sizes,
    inputs,
  });

  return NextResponse.json({
    product: {
      name: product.name,
      slug: product.slug,
      category: product.category,
      subcategory: product.subcategory,
      availableSizes: product.sizes,
      fit: product.fit,
      fitNote: product.fitNote,
      url: `${origin}/products/${product.slug}`,
    },
    inputsReceived: Object.fromEntries(
      Object.entries(inputs).filter(([, v]) => v != null)
    ),
    sizeChart: chart ? { appliesTo: chart.appliesTo, rows: availableRows } : null,
    ...recommendation,
  });
}
