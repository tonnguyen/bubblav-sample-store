'use client';

import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const faqCategories = [
  'Ordering & Account',
  'Payment',
  'Shipping',
  'Returns',
  'Sizing',
  'Account',
];

const faqData = {
  'Ordering & Account': [
    {
      question: 'How do I place an order?',
      answer: 'Browse our collections and add items to your cart. Click the cart icon when ready to checkout. Enter your shipping information, select your preferred payment method, and confirm. You\'ll receive an order confirmation email.',
    },
    {
      question: 'Do I need an account to shop?',
      answer: 'No! You can checkout as a guest. However, creating an account offers faster checkout, order tracking, saved addresses, wishlist functionality, and exclusive member offers.',
    },
    {
      question: 'Can I modify or cancel my order?',
      answer: 'Orders can be modified or cancelled within 1 hour of placing them. Contact us immediately at support@velvetandvogue.com or call +46 8 123 4567. After 1 hour, we begin processing your order.',
    },
    {
      question: 'How do I create an account?',
      answer: 'Click "Account" in the top menu, then "Create Account". Enter your email and create a password. You\'ll receive a confirmation email to activate your account.',
    },
    {
      question: 'I forgot my password. What do I do?',
      answer: 'Click "Account" → "Forgot Password" and enter your email. You\'ll receive a link to reset your password.',
    },
  ],
  'Payment': [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Credit/Debit Cards (Visa, Mastercard, American Express), PayPal, Klarna (Buy Now, Pay Later), Apple Pay & Google Pay, and Swish (Swedish customers).',
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes! We use industry-standard SSL encryption and are PCI DSS compliant. Your payment details are never stored on our servers.',
    },
    {
      question: 'Do you charge for payment?',
      answer: 'No! We don\'t charge any additional fees for using any of our payment methods.',
    },
    {
      question: 'Can I use multiple payment methods?',
      answer: 'Currently, we only accept one payment method per order.',
    },
    {
      question: 'Why was my payment declined?',
      answer: 'Payment can be declined for several reasons: Incorrect card details, insufficient funds, bank security flags, expired card. Try again or contact your bank. If issues persist, try a different payment method or contact us.',
    },
  ],
  'Shipping': [
    {
      question: 'How long does delivery take?',
      answer: 'Sweden: 2-4 business days (Standard), 1-2 days (Express). EU: 3-8 business days. International: 5-8 business days.',
    },
    {
      question: 'How much does shipping cost?',
      answer: 'Sweden: FREE on orders over 500 SEK, otherwise 49 SEK. International: Rates vary by destination.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to most European countries, the UK, and Switzerland. Contact us for other destinations.',
    },
    {
      question: 'How do I track my order?',
      answer: 'You\'ll receive a tracking number via email when your order ships. Visit our Tracking page to monitor your delivery.',
    },
    {
      question: 'Can I change my shipping address after ordering?',
      answer: 'Contact us immediately. If your order hasn\'t shipped, we may be able to update the address.',
    },
    {
      question: 'What if I\'m not home for delivery?',
      answer: 'The carrier will leave a notification. Your package will be taken to a service point for pickup. Most packages are held for 14 days.',
    },
  ],
  'Returns': [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy. Items must be unworn, unwashed, with original tags attached. See our Returns page for full details.',
    },
    {
      question: 'How do I return an item?',
      answer: 'Visit our Returns Portal, enter your order number and email, select items to return, print the return label, and drop off at any PostNord service point.',
    },
    {
      question: 'Are returns free?',
      answer: 'Your first order includes free returns. Standard returns cost 49 SEK, deducted from your refund. Exchanges are always free.',
    },
    {
      question: 'How long do refunds take?',
      answer: 'Refunds are processed within 5-7 business days after we receive your return. Timing depends on your payment method.',
    },
    {
      question: 'Can I exchange for a different size?',
      answer: 'Yes! Select "Exchange" in our returns portal and choose your preferred size/color.',
    },
  ],
  'Sizing': [
    {
      question: 'How do I know what size to order?',
      answer: 'Check our Size Guide for detailed measurements. Each product page also includes specific measurements.',
    },
    {
      question: 'Do your clothes run true to size?',
      answer: 'Most items run true to size. Product pages include fit notes (slim fit, regular fit, etc.) to help you decide.',
    },
    {
      question: 'What materials do you use?',
      answer: 'We prioritize quality materials including organic cotton, linen, wool blends, and sustainable fabrics. Each product page lists material composition.',
    },
    {
      question: 'How do I care for my clothes?',
      answer: 'Care instructions are on each product page and on the garment\'s label. Generally: Machine wash cold with similar colors, do not bleach, tumble dry low or hang to dry, iron on low heat if needed.',
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes! Gift cards are available in amounts from 100-5000 SEK. They\'re delivered via email and never expire.',
    },
  ],
  'Account': [
    {
      question: 'How do I view my order history?',
      answer: 'Log into your account and click "Order History" to see all past orders.',
    },
    {
      question: 'How do I use a discount code?',
      answer: 'Enter your code at checkout in the "Discount Code" field. Only one code per order.',
    },
    {
      question: 'Why didn\'t my discount code work?',
      answer: 'Check: Code is entered correctly, code hasn\'t expired, minimum purchase requirement is met, code applies to items in your cart, code hasn\'t already been used.',
    },
    {
      question: 'How do I subscribe to your newsletter?',
      answer: 'Scroll to the bottom of any page and enter your email in the newsletter signup. You\'ll receive 10% off your first order!',
    },
  ],
};

// Additional hidden content for crawlers - full FAQ list
const FullFAQContent = () => (
  <div className="sr-only">
    <h2>All Frequently Asked Questions</h2>
    {Object.entries(faqData).map(([category, items]) => (
      <div key={category}>
        <h3>{category}</h3>
        {items.map((item, i) => (
          <div key={i}>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    ))}
    <h2>Sustainability</h2>
    <p>Is VELVET & VOGUE sustainable? We're committed to sustainability through eco-friendly materials, ethical manufacturing, minimal packaging, carbon-offset shipping, and recycling programs.</p>
    <p>Do you use organic materials? Yes! We use organic cotton, linen, and other sustainable materials whenever possible. Check product pages for material details.</p>
    <h2>Stock & Availability</h2>
    <p>What if an item is out of stock? You can sign up for stock notifications on the product page. We'll email you when it's back in stock.</p>
    <p>Do you restock sold-out items? We try to restock popular items. Sign up for notifications to be notified when items return.</p>
    <p>Can I pre-order upcoming items? Some items are available for pre-order. Estimated shipping dates are listed on the product page.</p>
    <h2>Customer Service Contact</h2>
    <p>Email: support@velvetandvogue.com</p>
    <p>Phone: +46 8 123 4567</p>
    <p>Live Chat: Available Mon-Fri 9-18 CET</p>
  </div>
);

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('Ordering & Account');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(key)) {
      newOpen.delete(key);
    } else {
      newOpen.add(key);
    }
    setOpenItems(newOpen);
  };

  return (
    <>
      {/* Hidden full content for SEO/crawlers */}
      <FullFAQContent />

      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex bg-offset px-4 py-2 mb-5">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                HELP CENTER
              </span>
            </div>

            {/* Title */}
            <h1 className="font-newsreader text-4xl sm:text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Frequently Asked Questions
            </h1>

            {/* Subtitle */}
            <p className="text-muted text-base max-w-[640px] leading-[1.6] mb-8">
              Find answers to common questions about shopping at VELVET &amp; VOGUE. Can&apos;t find what you&apos;re looking for? Contact our team.
            </p>

            {/* Search */}
            <div className="flex items-center gap-3 border border-light rounded w-full max-w-[480px] h-12 px-4">
              <Search className="w-5 h-5 text-muted flex-shrink-0" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search questions..."
                className="flex-1 outline-none text-sm text-muted placeholder:text-muted min-w-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-8 sm:py-10 px-4 sm:px-8 lg:px-16 border-b border-light">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-offset text-accent'
                    : 'bg-transparent text-muted hover:text-brand'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white px-4 sm:px-8 lg:px-16 py-8 sm:py-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="border-b border-light py-10 mb-0">
            <h2 className="font-newsreader text-2xl font-medium text-brand">{activeCategory}</h2>
          </div>

          {/* FAQ Items - Using semantic details/summary for better SEO */}
          {faqData[activeCategory as keyof typeof faqData]?.map((item, i) => {
            const key = `${activeCategory}-${i}`;
            const isOpen = openItems.has(key);

            return (
              <details
                key={key}
                open={isOpen}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    setOpenItems((prev) => new Set(prev).add(key));
                  } else {
                    setOpenItems((prev) => {
                      const newSet = new Set(prev);
                      newSet.delete(key);
                      return newSet;
                    });
                  }
                }}
                className="border-b border-light group"
              >
                <summary className="w-full flex items-center justify-between py-6 text-left list-none cursor-pointer">
                  <span className="font-newsreader text-lg font-medium text-brand pr-8">
                    {item.question}
                  </span>
                  <ChevronDown
                    className="flex-shrink-0 text-muted transition-transform group-open:rotate-180"
                    strokeWidth={1.5}
                  />
                </summary>
                <div className="pb-6">
                  <p className="text-muted text-sm leading-[1.6]">
                    {item.answer}
                  </p>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-offset py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center gap-5">
            <h2 className="font-newsreader text-2xl font-medium text-brand">
              Still have questions?
            </h2>
            <p className="text-muted text-base">
              Our customer service team is here to help
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-muted">
              <span>Email: support@velvetandvogue.com</span>
              <span className="hidden sm:inline">·</span>
              <span>Phone: +46 8 123 4567</span>
              <span className="hidden sm:inline">·</span>
              <span>Live Chat: Mon-Fri 9-18 CET</span>
            </div>
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-4 rounded text-sm font-medium inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
