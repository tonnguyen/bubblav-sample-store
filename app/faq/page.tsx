import { Metadata } from 'next';
import { FAQPage } from '@/components/faq-page';
import { PageChatbotHint } from '@/components/page-chatbot-hint';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | VELVET & VOGUE',
  description: 'Find answers to common questions about shopping at VELVET & VOGUE. Shipping, returns, payment, sizing, and account help.',
  openGraph: {
    title: 'Frequently Asked Questions | VELVET & VOGUE',
    description: 'Find answers to common questions about shopping at VELVET & VOGUE. Shipping, returns, payment, sizing, and account help.',
    type: 'website',
  },
};

// JSON-LD structured data for FAQ
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // Ordering & Account
    {
      '@type': 'Question',
      name: 'How do I place an order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browse our collections and add items to your cart. Click the cart icon when ready to checkout. Enter your shipping information, select your preferred payment method, and confirm. You\'ll receive an order confirmation email.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an account to shop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! You can checkout as a guest. However, creating an account offers faster checkout, order tracking, saved addresses, wishlist functionality, and exclusive member offers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I modify or cancel my order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orders can be modified or cancelled within 1 hour of placing them. Contact us immediately at support@velvetandvogue.com or call +46 8 123 4567. After 1 hour, we begin processing your order.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I create an account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Click "Account" in the top menu, then "Create Account". Enter your email and create a password. You\'ll receive a confirmation email to activate your account.',
      },
    },
    {
      '@type': 'Question',
      name: 'I forgot my password. What do I do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Click "Account" → "Forgot Password" and enter your email. You\'ll receive a link to reset your password.',
      },
    },
    // Payment
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept Credit/Debit Cards (Visa, Mastercard, American Express), PayPal, Klarna (Buy Now, Pay Later), Apple Pay & Google Pay, and Swish (Swedish customers).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my payment information secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We use industry-standard SSL encryption and are PCI DSS compliant. Your payment details are never stored on our servers.',
      },
    },
    // Shipping
    {
      '@type': 'Question',
      name: 'How long does delivery take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sweden: 2-4 business days (Standard), 1-2 days (Express). EU: 3-8 business days. International: 5-8 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does shipping cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sweden: FREE on orders over 500 SEK, otherwise 49 SEK. International: Rates vary by destination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you ship internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We ship to most European countries, the UK, and Switzerland. Contact us for other destinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I track my order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You\'ll receive a tracking number via email when your order ships. Visit our Tracking page to monitor your delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I\'m not home for delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The carrier will leave a notification. Your package will be taken to a service point for pickup. Most packages are held for 14 days.',
      },
    },
    // Returns
    {
      '@type': 'Question',
      name: 'What is your return policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a 30-day return policy. Items must be unworn, unwashed, with original tags attached. See our Returns page for full details.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I return an item?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit our Returns Portal, enter your order number and email, select items to return, print the return label, and drop off at any PostNord service point.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are returns free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first order includes free returns. Standard returns cost 49 SEK, deducted from your refund. Exchanges are always free.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do refunds take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refunds are processed within 5-7 business days after we receive your return. Timing depends on your payment method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I exchange for a different size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Select "Exchange" in our returns portal and choose your preferred size/color.',
      },
    },
    // Sizing
    {
      '@type': 'Question',
      name: 'How do I know what size to order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check our Size Guide for detailed measurements. Each product page also includes specific measurements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do your clothes run true to size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most items run true to size. Product pages include fit notes (slim fit, regular fit, etc.) to help you decide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What materials do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We prioritize quality materials including organic cotton, linen, wool blends, and sustainable fabrics. Each product page lists material composition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I care for my clothes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Care instructions are on each product page and on the garment\'s label. Generally: Machine wash cold with similar colors, do not bleach, tumble dry low or hang to dry, iron on low heat if needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer gift cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Gift cards are available in amounts from 100-5000 SEK. They\'re delivered via email and never expire.',
      },
    },
    // Stock & Availability
    {
      '@type': 'Question',
      name: 'What if an item is out of stock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can sign up for stock notifications on the product page. We\'ll email you when it\'s back in stock.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you restock sold-out items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We try to restock popular items. Sign up for notifications to be notified when items return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pre-order upcoming items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some items are available for pre-order. Estimated shipping dates are listed on the product page.',
      },
    },
    // Account
    {
      '@type': 'Question',
      name: 'How do I view my order history?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Log into your account and click "Order History" to see all past orders.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use a discount code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter your code at checkout in the "Discount Code" field. Only one code per order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why didn\'t my discount code work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check: Code is entered correctly, code hasn\'t expired, minimum purchase requirement is met, code applies to items in your cart, code hasn\'t already been used.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I subscribe to your newsletter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scroll to the bottom of any page and enter your email in the newsletter signup. You\'ll receive 10% off your first order!',
      },
    },
    // Sustainability
    {
      '@type': 'Question',
      name: 'Is VELVET & VOGUE sustainable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'re committed to sustainability through eco-friendly materials, ethical manufacturing, minimal packaging, carbon-offset shipping, and recycling programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you use organic materials?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We use organic cotton, linen, and other sustainable materials whenever possible. Check product pages for material details.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageChatbotHint question="What is your return policy for sale items?" />
      <FAQPage />
    </>
  );
}
