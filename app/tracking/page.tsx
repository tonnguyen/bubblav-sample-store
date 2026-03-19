import { Package, Truck, Clock, Home } from 'lucide-react';

export default function TrackingPage() {
  const orderStatuses = [
    {
      icon: Package,
      title: 'Order Placed',
      desc: 'Your order has been received and is being processed.',
    },
    {
      icon: Clock,
      title: 'Processing',
      desc: "We're preparing your order for shipment.",
    },
    {
      icon: Truck,
      title: 'Shipped',
      desc: 'Your order has left our warehouse and is on its way!',
    },
    {
      icon: Home,
      title: 'Out for Delivery',
      desc: 'Your package is with the local carrier and will be delivered today.',
    },
  ];

  const deliveryStages = [
    { step: 1, title: 'Order Processing', desc: '1-2 business days', details: 'We confirm payment, verify inventory, pick and pack your items, and generate your shipping label.' },
    { step: 2, title: 'Carrier Pickup', desc: 'Same day or next business day', details: "Your package is handed to the carrier (PostNord/DB Schenker). Tracking information becomes active." },
    { step: 3, title: 'In Transit', desc: 'Varies by destination', details: "Your package travels through the carrier's network, passing through distribution centers." },
    { step: 4, title: 'Local Delivery', desc: 'Delivery day', details: 'Package arrives at your local distribution center and is scheduled for delivery.' },
    { step: 5, title: 'Delivery', desc: 'Complete', details: 'Package delivered to your door or available for collection at service point.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex bg-offset px-4 py-2 mb-5">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                ORDER TRACKING
              </span>
            </div>

            {/* Title */}
            <h1 className="font-newsreader text-4xl sm:text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Track Your Order
            </h1>

            {/* Subtitle */}
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              Track your VELVET &amp; VOGUE order in real-time. Get updates on your package&apos;s journey from our warehouse to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Track Form Section */}
      <section className="bg-offset py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="font-newsreader text-2xl sm:text-[28px] font-medium leading-[1.2] text-brand">
              Quick Track
            </h2>
            <p className="text-muted text-base">
              Enter your order number and email address to get real-time updates
            </p>

            <div className="bg-white border border-light rounded-lg p-6 sm:p-10 w-full max-w-[560px] space-y-5">
              <div>
                <label className="block text-brand text-sm font-semibold mb-2">Order Number</label>
                <input
                  type="text"
                  className="w-full border border-light rounded h-12 px-4 text-sm focus:outline-none focus:border-accent"
                  placeholder="#123456"
                />
              </div>
              <div>
                <label className="block text-brand text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-light rounded h-12 px-4 text-sm focus:outline-none focus:border-accent"
                  placeholder="your@email.com"
                />
              </div>
              <button className="w-full bg-brand text-white h-12 rounded text-sm font-medium">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Status Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.2] text-brand mb-8">
            Understanding Your Order Status
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderStatuses.map((item, i) => (
              <div key={i} className="border border-light rounded-lg p-6 space-y-3">
                <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <h3 className="font-newsreader text-lg font-medium text-brand">{item.title}</h3>
                <p className="text-muted text-sm leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Stages Section */}
      <section className="bg-offset py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.2] text-brand mb-8">
            Delivery Stages Explained
          </h2>

          <div className="space-y-6">
            {deliveryStages.map((stage) => (
              <div key={stage.step} className="bg-white border border-light rounded-lg p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">{stage.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                      <h3 className="font-newsreader text-lg font-medium text-brand">{stage.title}</h3>
                      <span className="text-accent text-sm font-medium">{stage.desc}</span>
                    </div>
                    <p className="text-muted text-sm leading-[1.5]">{stage.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-5">
            <h2 className="font-newsreader text-2xl font-medium text-brand">
              Need Help Tracking?
            </h2>
            <p className="text-muted text-base max-w-[560px]">
              If you have any questions about your order or delivery, our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-brand text-white px-8 py-4 rounded text-sm font-medium">
                Contact Us
              </button>
              <button className="border border-brand text-brand px-8 py-4 rounded text-sm font-medium">
                Shipping Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
