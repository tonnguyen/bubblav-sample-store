import { NextRequest, NextResponse } from "next/server";
import orders from "@/data/orders.json";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { order_number, email } = body.arguments ?? body;

  if (!order_number || !email) {
    return NextResponse.json({
      success: false,
      error: "Order number and email are required.",
      data: null,
    });
  }

  const order = orders.find(
    (o) => o.id === order_number && o.email.toLowerCase() === email.toLowerCase()
  );

  if (!order) {
    return NextResponse.json({
      success: false,
      error: `Order not found. Please check your order number (${order_number}) and email address.`,
      data: null,
    });
  }

  const currentStep = order.timeline[order.timeline.length - 1];

  return NextResponse.json({
    success: true,
    data: {
      order_number: order.id,
      status: order.status,
      current_step: currentStep,
      items: order.items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        price: item.price,
        currency: order.summary.currency,
      })),
      shipping: {
        carrier: order.shipping.carrier,
        tracking_number: order.shipping.trackingNumber,
        estimated_delivery: order.shipping.estimatedDelivery,
        actual_delivery: order.shipping.actualDelivery ?? null,
        address: `${order.shipping.address.name}, ${order.shipping.address.city}`,
      },
      timeline: order.timeline.map((step) => ({
        status: step.status,
        label: step.label,
        description: step.description,
        timestamp: step.timestamp,
      })),
      total: order.summary.total,
      currency: order.summary.currency,
    },
    message: `Your order ${order.id} is currently **${currentStep.label}**. ${currentStep.description}${order.shipping.trackingNumber ? ` Tracking number: ${order.shipping.carrier} — ${order.shipping.trackingNumber}.` : ""}${order.shipping.estimatedDelivery ? ` Estimated delivery: ${order.shipping.estimatedDelivery}.` : ""}`,
  });
}
