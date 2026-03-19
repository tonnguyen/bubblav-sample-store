import { CreditCard, Shield, Clock, Lock } from 'lucide-react';
import Link from 'next/link';

export default function PaymentPage() {
  const paymentMethods = [
    { name: 'Credit & Debit Cards', desc: 'Visa, Mastercard, American Express, Maestro' },
    { name: 'PayPal', desc: 'Quick and secure checkout' },
    { name: 'Klarna', desc: 'Buy Now, Pay Later' },
    { name: 'Apple Pay & Google Pay', desc: 'Fast digital wallet checkout' },
    { name: 'Swish', desc: 'Swedish mobile payments' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-newsreader text-4xl sm:text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Payment Methods
            </h1>
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              We offer a variety of secure payment options to make your shopping experience convenient and safe. All transactions are encrypted and processed with the highest security standards.
            </p>
          </div>
        </div>
      </section>

      {/* Accepted Methods */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              Accepted Payment Methods
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method, i) => (
              <div key={i} className="border border-light rounded-lg p-6">
                <h3 className="font-newsreader text-lg font-medium text-brand mb-2">{method.name}</h3>
                <p className="text-muted text-sm">{method.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-muted text-sm mt-8">
            <strong>No additional fees</strong> for using any of our payment methods.
          </p>
        </div>
      </section>

      {/* Security */}
      <section className="bg-offset py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              Security &amp; Fraud Protection
            </h2>
          </div>

          <p className="text-muted text-base mb-8">
            Your security is our top priority:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-light rounded-lg p-6">
              <Lock className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-newsreader text-base font-medium text-brand mb-2">SSL Encryption</h3>
              <p className="text-muted text-xs">All data transmitted is encrypted</p>
            </div>
            <div className="bg-white border border-light rounded-lg p-6">
              <Shield className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-newsreader text-base font-medium text-brand mb-2">PCI DSS Compliant</h3>
              <p className="text-muted text-xs">We meet the highest security standards</p>
            </div>
            <div className="bg-white border border-light rounded-lg p-6">
              <Lock className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-newsreader text-base font-medium text-brand mb-2">3D Secure</h3>
              <p className="text-muted text-xs">Additional verification for card payments</p>
            </div>
            <div className="bg-white border border-light rounded-lg p-6">
              <Shield className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-newsreader text-base font-medium text-brand mb-2">No Stored Data</h3>
              <p className="text-muted text-xs">Your payment details are never stored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Process */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-2xl sm:text-[32px] font-medium leading-[1.1] text-brand">
              Payment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: 1, title: 'Add Items to Cart', desc: 'Browse our collections and add items to your cart.' },
              { step: 2, title: 'Checkout', desc: 'Review your order and proceed to checkout.' },
              { step: 3, title: 'Payment', desc: 'Choose your preferred payment option and confirm.' },
              { step: 4, title: 'Confirmation', desc: "You'll receive an email confirmation immediately." },
            ].map((item) => (
              <div key={item.step} className="border border-light rounded-lg p-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-semibold">{item.step}</span>
                </div>
                <h3 className="font-newsreader text-base font-medium text-brand mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16 border-t border-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-newsreader text-2xl font-medium text-brand mb-2">
                Payment Questions?
              </h2>
              <p className="text-muted text-base">
                Our customer service team is here to help
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/contact" className="bg-brand text-white px-6 py-3 rounded text-sm font-medium text-center">
                Contact Us
              </Link>
              <Link href="/faq" className="border border-brand text-brand px-6 py-3 rounded text-sm font-medium text-center">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
