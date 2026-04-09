'use client';

import Link from 'next/link';
import { MessageCircle, Copy, Check, Bot, Zap, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const suggestedQuestions = [
  {
    category: 'Products',
    questions: [
      'What sustainable dresses do you have?',
      'Tell me about the Silk Wrap Dress',
      'Do you have any blue items under 2000 SEK?',
      'What materials are your blazers made of?',
    ],
  },
  {
    category: 'Shipping',
    questions: [
      'How long does shipping take?',
      'Do you ship internationally?',
      'How much does shipping cost?',
      'Can I track my order?',
    ],
  },
  {
    category: 'Returns & Policies',
    questions: [
      "What's your return policy?",
      'Can I return an item after 30 days?',
      'How do I get a refund?',
      'What payment methods do you accept?',
    ],
  },
  {
    category: 'Sizing',
    questions: [
      'What size should I get for a medium frame?',
      'Do you have a size guide?',
      'How do your clothes fit?',
    ],
  },
  {
    category: 'Order Tracking',
    questions: [
      'What is the status of order ORD-20250203-002? (erik.johansson@email.se)',
      'Has order ORD-20250210-003 been shipped yet? (sofia.nordstrom@email.se)',
      'Track my order ORD-20250214-004 for maria.karlsson@email.se',
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded hover:bg-accent/10 transition-colors"
      title="Copy question"
    >
      {copied ? (
        <Check className="w-4 h-4 text-accent" />
      ) : (
        <Copy className="w-4 h-4 text-muted-light" />
      )}
    </button>
  );
}

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-light px-4 sm:px-8 lg:px-16 py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex bg-accent/10 px-4 py-2 mb-6">
            <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
              AI CHATBOT DEMO
            </span>
          </div>
          <h1 className="font-newsreader text-3xl sm:text-5xl font-medium leading-[1.1] text-brand mb-4">
            Experience BubblaV AI Chatbot
          </h1>
          <p className="text-muted text-base leading-[1.6] max-w-[560px] mx-auto">
            This demo store is powered by BubblaV — an AI chatbot that answers customer questions 24/7.
            Try asking it anything about our products, policies, or services.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-offset">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-newsreader text-2xl font-medium text-brand mb-8 text-center">
            How to Test
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                step: '1',
                title: 'Open the Chat',
                desc: 'Click the chat icon in the bottom-right corner of any page.',
              },
              {
                icon: Bot,
                step: '2',
                title: 'Ask a Question',
                desc: 'Type any question about products, shipping, returns, or sizing.',
              },
              {
                icon: Zap,
                step: '3',
                title: 'Get Instant Answers',
                desc: 'The AI responds instantly with accurate, context-aware answers.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-light p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-newsreader text-base font-medium text-brand mb-2">{item.title}</h3>
                <p className="text-muted-light text-sm leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the Chatbot Knows */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-newsreader text-2xl font-medium text-brand mb-4 text-center">
            What the Chatbot Was Trained On
          </h2>
          <p className="text-muted text-sm text-center mb-8 max-w-[480px] mx-auto">
            The AI has been trained on all the content of this store, so it can answer questions about:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              'Product catalog & details',
              'Shipping rates & times',
              'Return & refund policies',
              'Size guides & fitting',
              'Payment methods',
              'FAQ (25+ topics)',
              'Order tracking',
              'Store policies',
            ].map((topic, i) => (
              <div key={i} className="bg-offset rounded-lg px-4 py-3 text-center">
                <span className="text-brand text-sm font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Questions */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-offset border-t border-light">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-newsreader text-2xl font-medium text-brand mb-4 text-center">
            Suggested Questions to Try
          </h2>
          <p className="text-muted text-sm text-center mb-8">
            Copy any question and paste it into the chat, or type your own.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {suggestedQuestions.map((group, i) => (
              <div key={i}>
                <h3 className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent mb-3">
                  {group.category.toUpperCase()}
                </h3>
                <div className="flex flex-col gap-2">
                  {group.questions.map((q, j) => (
                    <div
                      key={j}
                      className="bg-white rounded-lg border border-light px-4 py-3 flex items-center gap-3"
                    >
                      <p className="text-brand text-sm flex-1">&ldquo;{q}&rdquo;</p>
                      <CopyButton text={q} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-white border-t border-light">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-6 h-6 text-accent" strokeWidth={1.5} />
          </div>
          <h2 className="font-newsreader text-2xl font-medium text-brand mb-3">
            Want This for Your Store?
          </h2>
          <p className="text-muted text-sm leading-[1.6] mb-6">
            Add an AI chatbot to your website in 5 minutes. No coding required.
            Trained on your content, answers customer questions 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://bubblav.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-3.5 rounded text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="border border-brand text-brand px-8 py-3.5 rounded text-sm font-medium text-center hover:bg-offset transition-colors"
            >
              Browse the Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
