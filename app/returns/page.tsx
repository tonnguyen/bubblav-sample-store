import { RotateCcw, Shield, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-newsreader text-4xl sm:text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Returns &amp; Refunds
            </h1>
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              At VELVET &amp; VOGUE, we want you to love everything you buy. If something isn&apos;t quite right, our hassle-free return policy makes it easy to exchange or return your items.
            </p>
          </div>
        </div>
      </section>

      {/* 30-Day Policy */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              30-Day Return Policy
            </h2>
          </div>

          <p className="text-muted text-base mb-8">
            You have <strong>30 days</strong> from the date of delivery to return items for a full refund or exchange.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-4">Return Conditions</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  Items must be unworn, unwashed, and in original condition
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  Original tags must still be attached
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  Items must be returned in original packaging
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  Proof of purchase required
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-4">Non-Returnable Items</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full flex-shrink-0" />
                  Final sale items (marked as &quot;Final Sale&quot;)
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full flex-shrink-0" />
                  Underwear and swimwear (for hygiene reasons)
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full flex-shrink-0" />
                  Personalized or custom-made items
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-muted rounded-full flex-shrink-0" />
                  Gift cards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Return */}
      <section className="bg-offset py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <RotateCcw className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              How to Return an Item
            </h2>
          </div>

          <div className="bg-white border border-light rounded-lg p-6 sm:p-8">
            <h3 className="font-newsreader text-lg font-medium text-brand mb-6">Return via Service Point (Recommended)</h3>
            <ol className="space-y-4">
              {[
                { n: 1, title: 'Initiate Your Return', desc: 'Log into your account or visit Returns Portal. Enter your order number and email. Select the items you want to return. Choose refund or exchange.' },
                { n: 2, title: 'Print Your Return Label', desc: 'Download and print the prepaid return label. Attach it to your package.' },
                { n: 3, title: 'Drop Off Your Package', desc: 'Take your package to any PostNord service point. Keep your receipt as proof of return.' },
                { n: 4, title: 'Receive Your Refund', desc: "Refunds are processed within 5-7 business days after we receive your return. You'll receive an email confirmation when processed." },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">{step.n}</span>
                  </span>
                  <div>
                    <p className="text-brand text-sm font-semibold mb-1">{step.title}</p>
                    <p className="text-muted text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Return Costs */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand mb-8">
            Return Shipping Costs
          </h2>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[320px] px-4 sm:px-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-light">
                    <th className="text-left py-4 text-brand font-semibold">Return Type</th>
                    <th className="text-left py-4 text-brand font-semibold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-light">
                    <td className="py-4 text-muted">Exchange for different size/color</td>
                    <td className="py-4 text-accent font-semibold">FREE</td>
                  </tr>
                  <tr className="border-b border-light">
                    <td className="py-4 text-muted">Refund to original payment method</td>
                    <td className="py-4 text-muted">49 SEK (deducted from refund)</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-muted">In-store return</td>
                    <td className="py-4 text-accent font-semibold">FREE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-muted text-sm mt-6">
            <strong>Free returns</strong> on your first order – look for the &quot;Free Returns&quot; badge at checkout!
          </p>
        </div>
      </section>

      {/* Refunds */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16 border-t border-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              Refunds
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-4">Refund Method</h3>
              <p className="text-muted text-sm mb-4">Refunds are issued to your original payment method:</p>
              <ul className="space-y-2">
                <li className="text-muted text-sm"><strong>Credit/Debit Card:</strong> 5-7 business days</li>
                <li className="text-muted text-sm"><strong>PayPal:</strong> 3-5 business days</li>
                <li className="text-muted text-sm"><strong>Klarna:</strong> Processed according to Klarna&apos;s timeline</li>
                <li className="text-muted text-sm"><strong>Gift Card:</strong> Issued immediately as store credit</li>
              </ul>
            </div>

            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-4">Need Help?</h3>
              <p className="text-muted text-sm mb-4">Our customer service team is here to help:</p>
              <ul className="space-y-2">
                <li className="text-muted text-sm"><strong>Email:</strong> returns@velvetandvogue.com</li>
                <li className="text-muted text-sm"><strong>Phone:</strong> +46 8 123 4567</li>
                <li className="text-muted text-sm"><strong>Live Chat:</strong> Available Mon-Fri 9-18 CET</li>
              </ul>
              <div className="mt-6">
                <Link href="/contact" className="inline-block bg-brand text-white px-6 py-3 rounded text-sm font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
