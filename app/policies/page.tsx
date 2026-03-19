import { FileText, Shield, Cookie, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function PoliciesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-[100px] px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-newsreader text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Store Policies
            </h1>
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              Our policies are designed to ensure a fair and transparent shopping experience for everyone. Please review these policies carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand">
              Terms &amp; Conditions
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-3">Acceptance of Terms</h3>
              <p className="text-muted text-sm leading-relaxed">
                By accessing or using the VELVET &amp; VOGUE website, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our website.
              </p>
            </div>

            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-3">Account Registration</h3>
              <p className="text-muted text-sm leading-relaxed">
                When creating an account, you agree to provide accurate, current information, maintain and update your information, keep your password secure, and accept responsibility for all activities under your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="bg-offset py-16 px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand">
              Privacy Policy
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-3">Information We Collect</h3>
              <p className="text-muted text-sm leading-relaxed">
                We collect personal information (name, email, phone, addresses), payment information (processed securely), order information, and website usage data (IP address, pages visited, device information).
              </p>
            </div>

            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-3">How We Use Your Information</h3>
              <p className="text-muted text-sm leading-relaxed">
                We use your information to process your order, improve our service, and for marketing (with your consent). We do not sell your personal information.
              </p>
            </div>

            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-3">Your Rights</h3>
              <p className="text-muted text-sm leading-relaxed">
                You have the right to access your personal data, correct inaccurate information, request deletion of your data, opt out of marketing communications, and data portability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand">
              Cookie Policy
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-3">What Are Cookies?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better experience.
              </p>
            </div>

            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-3">Types of Cookies We Use</h3>
              <ul className="space-y-2">
                <li className="text-muted text-sm"><strong>Essential Cookies:</strong> Required for the website to function</li>
                <li className="text-muted text-sm"><strong>Performance Cookies:</strong> Help us understand how you use our website</li>
                <li className="text-muted text-sm"><strong>Functionality Cookies:</strong> Remember your preferences</li>
                <li className="text-muted text-sm"><strong>Targeting Cookies:</strong> Used for marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Policies */}
      <section className="bg-white py-16 px-16 border-t border-light">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand mb-8">
            Other Policies
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CreditCard className="w-6 h-6 text-accent mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-newsreader text-lg font-medium text-brand mb-2">Refund Policy</h3>
                <p className="text-muted text-sm mb-3">We offer a 30-day return policy from the date of delivery.</p>
                <Link href="/returns" className="text-accent text-sm font-medium">View Returns Page →</Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-accent mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-newsreader text-lg font-medium text-brand mb-2">Shipping Policy</h3>
                <p className="text-muted text-sm mb-3">Free shipping on orders over 500 SEK within Sweden.</p>
                <Link href="/shipping" className="text-accent text-sm font-medium">View Shipping Page →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-16 px-16 border-t border-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-newsreader text-2xl font-medium text-brand mb-2">
                Policy Questions?
              </h2>
              <p className="text-muted text-base">
                For policy-related questions, contact us at legal@velvetandvogue.com
              </p>
            </div>
            <Link href="/contact" className="bg-brand text-white px-6 py-3 rounded text-sm font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
