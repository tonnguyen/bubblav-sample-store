'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface PageChatbotHintProps {
  question: string;
}

export function PageChatbotHint({ question }: PageChatbotHintProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(question);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-3 flex items-center gap-3 my-4 mx-4 sm:mx-8 lg:mx-16">
      <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
      <p className="text-sm text-brand flex-1">
        <span className="text-muted">Try asking the chatbot: </span>
        &ldquo;{question}&rdquo;
      </p>
      <button
        onClick={handleCopy}
        className="text-xs font-medium text-accent hover:text-accent/80 transition-colors whitespace-nowrap"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
