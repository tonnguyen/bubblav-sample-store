import { NextRequest, NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = searchParams.get("q")?.toLowerCase().trim() ?? "";
  const category = searchParams.get("category")?.trim() ?? "";
  const subcategory = searchParams.get("subcategory")?.trim() ?? "";
  const color = searchParams.get("color")?.toLowerCase().trim() ?? "";
  const size = searchParams.get("size")?.toUpperCase().trim() ?? "";
  const sustainable = searchParams.get("sustainable");
  const inStock = searchParams.get("inStock");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const sort = searchParams.get("sort") ?? "relevance";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const limit = Math.min(100, Math.max(1, Number(searchParams.get("limit")) || 20));

  let results = products.filter((product) => {
    // Text search across name, description, tags, material
    if (query) {
      const searchText = [
        product.name,
        product.description,
        product.material,
        ...product.tags,
        product.subcategory,
      ]
        .join(" ")
        .toLowerCase();
      if (!searchText.includes(query)) return false;
    }

    if (category && product.category.toLowerCase() !== category.toLowerCase()) return false;
    if (subcategory && product.subcategory.toLowerCase() !== subcategory.toLowerCase()) return false;
    if (color && !product.colors.some((c) => c.toLowerCase().includes(color))) return false;
    if (size && !product.sizes.includes(size)) return false;
    if (sustainable === "true" && !product.sustainable) return false;
    if (inStock === "true" && !product.inStock) return false;
    if (minPrice && product.price < Number(minPrice)) return false;
    if (maxPrice && product.price > Number(maxPrice)) return false;

    return true;
  });

  // Sorting
  switch (sort) {
    case "price-asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      results.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      // Reverse array order as a proxy for "newest"
      results.reverse();
      break;
    case "name-asc":
      results.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      results.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "relevance":
    default:
      if (query) {
        // Boost results where query matches the product name
        results.sort((a, b) => {
          const aInName = a.name.toLowerCase().includes(query) ? 1 : 0;
          const bInName = b.name.toLowerCase().includes(query) ? 1 : 0;
          return bInName - aInName || b.rating - a.rating;
        });
      }
      break;
  }

  const total = results.length;
  const totalPages = Math.ceil(total / limit);
  const offset = (page - 1) * limit;
  const paginatedResults = results.slice(offset, offset + limit);

  return NextResponse.json({
    products: paginatedResults,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  });
}
