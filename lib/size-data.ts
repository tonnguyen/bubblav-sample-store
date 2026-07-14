/**
 * Structured, machine-readable size charts for the Sample Store.
 *
 * Single source of truth for:
 *  - the sizing-recommendation API  (app/api/products/[slug]/sizing/route.ts)
 *  - the public /size-guide page     (app/size-guide/page.tsx)
 *
 * NOTE: `weightKg` ranges are approximate DEMO figures assuming average height
 * (~165cm). Weight↔size is inherently height/build-dependent, so every
 * weight-driven recommendation is caveated. All other figures are in cm.
 */

export interface SizeRow {
  size: string;
  bust?: string;
  waist?: string;
  hips?: string;
  chest?: string;
  footLengthCm?: number;
  weightKg?: string;
}

export type MeasurementType = "bust-waist-hips" | "waist-hips" | "foot-length";

export interface SizeChart {
  appliesTo: string;
  measurementType: MeasurementType;
  rows: SizeRow[];
}

/** Women's Tops & Dresses — Dresses, Outerwear, Knitwear, Tops, Loungewear */
export const WOMENS_TOPS_DRESSES: SizeChart = {
  appliesTo: "Women's Tops & Dresses",
  measurementType: "bust-waist-hips",
  rows: [
    { size: "XS", bust: "78-82", waist: "60-64", hips: "86-90", weightKg: "45-52" },
    { size: "S", bust: "82-86", waist: "64-68", hips: "90-94", weightKg: "52-59" },
    { size: "M", bust: "86-90", waist: "68-72", hips: "94-98", weightKg: "59-67" },
    { size: "L", bust: "90-94", waist: "72-76", hips: "98-102", weightKg: "67-75" },
    { size: "XL", bust: "94-98", waist: "76-80", hips: "102-106", weightKg: "75-84" },
    { size: "XXL", bust: "98-102", waist: "80-84", hips: "106-110", weightKg: "84-93" },
  ],
};

/** Women's Bottoms — Trousers, Skirts */
export const WOMENS_BOTTOMS: SizeChart = {
  appliesTo: "Women's Bottoms",
  measurementType: "waist-hips",
  rows: [
    { size: "XS", waist: "60-64", hips: "86-90", weightKg: "45-52" },
    { size: "S", waist: "64-68", hips: "90-94", weightKg: "52-59" },
    { size: "M", waist: "68-72", hips: "94-98", weightKg: "59-67" },
    { size: "L", waist: "72-76", hips: "98-102", weightKg: "67-75" },
    { size: "XL", waist: "76-80", hips: "102-106", weightKg: "75-84" },
    { size: "XXL", waist: "80-84", hips: "106-110", weightKg: "84-93" },
  ],
};

/** Women's Shoes — Footwear. `size` is EU; matched against product EU sizes. */
export const WOMENS_SHOES: SizeChart = {
  appliesTo: "Women's Shoes (EU)",
  measurementType: "foot-length",
  rows: [
    { size: "35", footLengthCm: 22.3 },
    { size: "36", footLengthCm: 23.0 },
    { size: "37", footLengthCm: 23.7 },
    { size: "38", footLengthCm: 24.4 },
    { size: "39", footLengthCm: 25.1 },
    { size: "40", footLengthCm: 25.8 },
    { size: "41", footLengthCm: 26.5 },
    { size: "42", footLengthCm: 27.2 },
    { size: "43", footLengthCm: 27.9 },
  ],
};

/** Map a product category to the chart that governs its sizing. */
export function getChartForCategory(category: string): SizeChart | null {
  switch (category) {
    case "Footwear":
      return WOMENS_SHOES;
    case "Trousers":
    case "Skirts":
      return WOMENS_BOTTOMS;
    case "Dresses":
    case "Outerwear":
    case "Knitwear":
    case "Tops":
    case "Loungewear":
      return WOMENS_TOPS_DRESSES;
    default:
      // Accessories (bags, jewellery, scarves, hats) -> one-size handling.
      return null;
  }
}

export interface SizeInputs {
  weightKg?: number;
  heightCm?: number;
  bustCm?: number;
  chestCm?: number;
  waistCm?: number;
  hipCm?: number;
  footLengthCm?: number;
}

export interface SizeRecommendation {
  recommendedSize: string;
  confidence: "high" | "medium" | "low";
  reasoning: string;
  betweenSizesAdvice: string;
  fitTips: string[];
  caveat: string | null;
}

// --- small helpers ---------------------------------------------------------

/** Parse "78-82" / "45-52" into [78, 82]. */
function parseRange(s?: string): [number, number] | null {
  if (!s) return null;
  const nums = s.match(/\d+(?:\.\d+)?/g);
  if (!nums || nums.length < 2) return null;
  return [parseFloat(nums[0]), parseFloat(nums[1])];
}

/** Expand combined labels like "S/M" or "L/XL" into individual sizes. */
function expandCombo(size: string): string[] {
  return size.split("/").map((s) => s.trim());
}

/** Distance of a value from a range; 0 when inside the range. */
function rangeDistance(v: number, range: [number, number]): number {
  if (v < range[0]) return range[0] - v;
  if (v > range[1]) return v - range[1];
  return 0;
}

/** True if the product offers `size` directly or via a combo label. */
function productOffersSize(productSizes: string[], size: string): boolean {
  return productSizes.some((ps) => expandCombo(ps).includes(size));
}

function betweenSizesAdviceFor(type: MeasurementType): string {
  switch (type) {
    case "bust-waist-hips":
      return "If you're between sizes, size up for a more relaxed fit (or down for a fitted look).";
    case "waist-hips":
      return "If you're between sizes, size down if you have a smaller waist, or up to accommodate hips.";
    case "foot-length":
      return "If you're between sizes or have wider feet, size up.";
  }
}

function fitTipsFor(category: string, subcategory: string): string[] {
  switch (category) {
    case "Knitwear":
      return ["Natural fibres may relax over time; size down for a fitted look."];
    case "Outerwear":
      return ["Consider layering underneath — size up to wear over thicker knits."];
    case "Footwear":
      return ["Leather/suede gives slightly with wear; size up for wider feet."];
    default:
      return ["This style generally runs true to size."];
  }
}

export interface RecommendResult {
  recommendation: SizeRecommendation;
  chart: SizeChart | null;
  /** Chart rows that match sizes this product actually offers. */
  availableRows: SizeRow[];
}

/**
 * Recommend a size for a product from the visitor's body metrics.
 *
 * Priority of signals: explicit body measurements > weight > height.
 * Only sizes the product actually offers are considered. Returns the chart and
 * the matched rows so callers can echo them to the model/UI.
 */
export function recommendSize(args: {
  category: string;
  subcategory: string;
  productSizes: string[];
  inputs: SizeInputs;
}): RecommendResult {
  const { category, subcategory, productSizes, inputs } = args;
  const chart = getChartForCategory(category);
  const fitTips = fitTipsFor(category, subcategory);

  // --- Accessories / one-size items ---------------------------------------
  if (!chart) {
    const only =
      productSizes.length === 1 ? productSizes[0] : productSizes.join(", ");
    return {
      chart: null,
      availableRows: [],
      recommendation: {
        recommendedSize: only,
        confidence: "high",
        reasoning:
          only === "One Size"
            ? "This item is One Size (adjustable / one-size-fits-most) — no measurements needed."
            : `This item comes in ${only}.`,
        betweenSizesAdvice: "",
        fitTips,
        caveat: null,
      },
    };
  }

  const availableRows = chart.rows.filter((r) =>
    productOffersSize(productSizes, r.size)
  );

  // --- Footwear -----------------------------------------------------------
  if (chart.measurementType === "foot-length") {
    if (availableRows.length === 0) {
      return {
        chart,
        availableRows,
        recommendation: {
          recommendedSize: productSizes.join(", "),
          confidence: "low",
          reasoning:
            "Couldn't match this footwear to the size chart. Please share your usual EU/UK/US shoe size or foot length.",
          betweenSizesAdvice: betweenSizesAdviceFor(chart.measurementType),
          fitTips,
          caveat: "Provide your foot length (cm) or usual shoe size for an accurate pick.",
        },
      };
    }
    const foot = inputs.footLengthCm;
    const best =
      foot != null
        ? [...availableRows].sort(
            (a, b) =>
              Math.abs((a.footLengthCm ?? 0) - foot) -
              Math.abs((b.footLengthCm ?? 0) - foot)
          )[0]
        : availableRows[0];
    return {
      chart,
      availableRows,
      recommendation: {
        recommendedSize: best.size,
        confidence: foot != null ? "high" : "low",
        reasoning:
          foot != null
            ? `Foot length ${foot}cm is closest to EU ${best.size} (≈${best.footLengthCm}cm).`
            : "No foot length provided — please share your usual shoe size or foot length (cm).",
        betweenSizesAdvice: betweenSizesAdviceFor(chart.measurementType),
        fitTips,
        caveat:
          foot != null
            ? null
            : "Provide your foot length (cm) or usual shoe size for a precise fit.",
      },
    };
  }

  // --- Clothing (bust-waist-hips or waist-hips) ---------------------------
  if (availableRows.length === 0) {
    return {
      chart,
      availableRows,
      recommendation: {
        recommendedSize: productSizes.join(", "),
        confidence: "low",
        reasoning: "Couldn't match this product's sizes to the size chart.",
        betweenSizesAdvice: betweenSizesAdviceFor(chart.measurementType),
        fitTips,
        caveat: `Available sizes: ${productSizes.join(", ")}.`,
      },
    };
  }

  const isBottoms = chart.measurementType === "waist-hips";
  // For tops, chest is treated as a stand-in for bust (women's tops use bust).
  const measurePlans: { input: keyof SizeInputs; rowKey: keyof SizeRow }[] = isBottoms
    ? [
        { input: "waistCm", rowKey: "waist" },
        { input: "hipCm", rowKey: "hips" },
      ]
    : [
        { input: "bustCm", rowKey: "bust" },
        { input: "chestCm", rowKey: "bust" },
        { input: "waistCm", rowKey: "waist" },
        { input: "hipCm", rowKey: "hips" },
      ];

  const hasMeasurements = measurePlans.some((p) => inputs[p.input] != null);
  const hasWeight = inputs.weightKg != null;

  // Score each available size: total "distance" penalty (lower = better fit).
  const scored = availableRows.map((row) => {
    let penalty = 0;
    const fitNotes: string[] = [];

    for (const plan of measurePlans) {
      const v = inputs[plan.input];
      if (v == null) continue;
      // Don't double-count bust when both bust and chest were given.
      if (plan.input === "chestCm" && inputs.bustCm != null) continue;
      const range = parseRange(row[plan.rowKey] as string | undefined);
      if (!range) continue;
      const d = rangeDistance(v, range);
      penalty += d;
      fitNotes.push(
        d === 0
          ? `${plan.rowKey} ${v}cm fits ${row.size}`
          : `${plan.rowKey} ${v}cm is ${d.toFixed(0)}cm off ${row.size}`
      );
    }

    if (hasWeight) {
      const wr = parseRange(row.weightKg);
      if (wr) {
        // Weight is approximate -> discount its contribution.
        penalty += rangeDistance(inputs.weightKg as number, wr) * 0.5;
        fitNotes.push(`weight ${inputs.weightKg}kg vs ${row.size} (${row.weightKg}kg)`);
      }
    }

    return { row, penalty, fitNotes };
  });

  scored.sort((a, b) => a.penalty - b.penalty);
  const best = scored[0];

  const confidence: SizeRecommendation["confidence"] = hasMeasurements
    ? "high"
    : hasWeight
      ? "medium"
      : "low";

  let reasoning: string;
  if (hasMeasurements) {
    reasoning = `${best.fitNotes.filter((n) => n.includes("fits")).join("; ")} — best match: ${best.row.size}.`;
  } else if (hasWeight) {
    reasoning = `No body measurements given; using weight ${inputs.weightKg}kg, which lands in the ${best.row.size} range (${best.row.weightKg}kg, ~165cm avg height).`;
  } else {
    reasoning = "No weight or measurements provided.";
  }

  if (inputs.heightCm != null) {
    reasoning +=
      inputs.heightCm < 160
        ? " You're petite (<160cm) — consider sizing down for tops."
        : inputs.heightCm > 175
          ? " You're tall (>175cm) — consider a longer inseam for bottoms/jumpsuits."
          : " Your height is within the standard range.";
  }

  return {
    chart,
    availableRows,
    recommendation: {
      recommendedSize: best.row.size,
      confidence,
      reasoning: reasoning.trim(),
      betweenSizesAdvice: betweenSizesAdviceFor(chart.measurementType),
      fitTips,
      caveat:
        confidence === "high"
          ? null
          : "Sizing from weight alone is approximate — share your bust/waist/hip (cm) for a precise fit.",
    },
  };
}
