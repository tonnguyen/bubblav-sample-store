import { Truck, Package, Clock, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { PageChatbotHint } from '@/components/page-chatbot-hint';

export default function ShippingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-newsreader text-4xl sm:text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Shipping &amp; Delivery
            </h1>
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              We want you to enjoy your VELVET &amp; VOGUE pieces as soon as possible. Here&apos;s everything you need to know about our shipping options and delivery times.
            </p>
          </div>
        </div>
      </section>

      <PageChatbotHint question="How long does shipping to Gothenburg take?" />

      {/* Domestic Shipping */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand mb-8">
            Domestic Shipping (Sweden)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="border border-light rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
                <h3 className="font-newsreader text-xl font-medium text-brand">Standard Delivery</h3>
              </div>
              <p className="text-accent text-sm font-semibold mb-2">FREE on orders over 500 SEK</p>
              <p className="text-muted text-sm mb-4">Otherwise 49 SEK</p>
              <div className="space-y-2">
                <p className="text-brand text-sm"><strong>Delivery Time:</strong> 2-4 business days</p>
                <p className="text-brand text-sm"><strong>Carrier:</strong> PostNord</p>
                <p className="text-brand text-sm"><strong>Tracking:</strong> Included</p>
              </div>
            </div>

            <div className="border border-light rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
                <h3 className="font-newsreader text-xl font-medium text-brand">Express Delivery</h3>
              </div>
              <p className="text-brand text-sm font-semibold mb-2">99 SEK</p>
              <div className="space-y-2">
                <p className="text-brand text-sm"><strong>Delivery Time:</strong> 1-2 business days</p>
                <p className="text-brand text-sm"><strong>Carrier:</strong> DB Schenker</p>
                <p className="text-brand text-sm"><strong>Tracking:</strong> Real-time updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="bg-offset py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              International Shipping
            </h2>
          </div>

          <p className="text-muted text-base mb-8">
            We ship to most European countries. Shipping rates and delivery times vary by destination.
          </p>

          <div className="bg-white border border-light rounded-lg p-6 sm:p-8">
            <h3 className="font-newsreader text-lg font-medium text-brand mb-6">Europe (EU)</h3>
            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <div className="min-w-[400px] px-6 sm:px-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-light">
                      <th className="text-left py-3 text-brand font-semibold">Destination</th>
                      <th className="text-left py-3 text-brand font-semibold">Standard</th>
                      <th className="text-left py-3 text-brand font-semibold">Express</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-light">
                      <td className="py-3 text-muted">Denmark, Norway, Finland</td>
                      <td className="py-3 text-muted">3-5 days (79 SEK)</td>
                      <td className="py-3 text-muted">2-3 days (149 SEK)</td>
                    </tr>
                    <tr className="border-b border-light">
                      <td className="py-3 text-muted">Germany, Netherlands, Belgium</td>
                      <td className="py-3 text-muted">4-6 days (99 SEK)</td>
                      <td className="py-3 text-muted">2-3 days (169 SEK)</td>
                    </tr>
                    <tr className="border-b border-light">
                      <td className="py-3 text-muted">France, Italy, Spain</td>
                      <td className="py-3 text-muted">5-7 days (129 SEK)</td>
                      <td className="py-3 text-muted">3-4 days (199 SEK)</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted">Rest of EU</td>
                      <td className="py-3 text-muted">6-8 days (149 SEK)</td>
                      <td className="py-3 text-muted">4-5 days (229 SEK)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Processing */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-accent flex-shrink-0" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              Order Processing
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="border border-light rounded-lg p-6">
              <p className="text-brand text-sm font-semibold mb-2">Processing Time</p>
              <p className="text-muted text-sm">Orders are processed within 24-48 hours on business days</p>
            </div>
            <div className="border border-light rounded-lg p-6">
              <p className="text-brand text-sm font-semibold mb-2">Cut-off Time</p>
              <p className="text-muted text-sm">Orders placed before 2 PM CET are shipped the same day</p>
            </div>
            <div className="border border-light rounded-lg p-6">
              <p className="text-brand text-sm font-semibold mb-2">Weekend Orders</p>
              <p className="text-muted text-sm">Orders placed Friday-Sunday are processed on Monday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16 border-t border-light">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand mb-8">
            Tracking Your Order
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1 space-y-4">
              <p className="text-muted text-base">
                Once your order ships, you&apos;ll receive an email with your tracking number. Track your package anytime:
              </p>
              <ol className="space-y-2">
                <li className="flex items-center gap-3 text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  Visit our Order Tracking page
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  Enter your order number and email
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
                  Get real-time delivery updates
                </li>
              </ol>
              <Link href="/tracking" className="inline-block bg-brand text-white px-6 py-3 rounded text-sm font-medium">
                Track Your Order
              </Link>
            </div>
            <div className="w-full md:w-[320px] h-[160px] sm:h-[200px] bg-offset rounded-lg flex items-center justify-center">
              <Package className="w-16 h-16 text-muted-light" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
