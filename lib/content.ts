import { readFileSync } from 'fs';
import { join } from 'path';

export interface ContentPage {
  slug: string;
  title: string;
  content: string;
}

const contentDir = join(process.cwd(), 'content');

export function getContentBySlug(slug: string): string {
  try {
    const fullPath = join(contentDir, `${slug}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error(`Error reading content for ${slug}:`, error);
    return '';
  }
}

export function getAllContentSlugs(): string[] {
  return [
    'home',
    'about',
    'shipping',
    'returns',
    'payment',
    'tracking',
    'size-guide',
    'faq',
    'contact',
    'policies',
  ];
}

// Parse markdown content and convert to HTML-like structure for rendering
export function parseMarkdown(content: string): {
  title: string;
  html: string;
} {
  const lines = content.split('\n');
  let title = '';
  let html = '';
  let inList = false;
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Extract title (first h1)
    if (line.startsWith('# ') && !title) {
      title = line.substring(2);
      html += `<h1 class="text-4xl font-bold mb-8">${title}</h1>\n`;
      continue;
    }

    // Headers
    if (line.startsWith('## ')) {
      html += `<h2 class="text-2xl font-bold mt-8 mb-4">${line.substring(3)}</h2>\n`;
      continue;
    }
    if (line.startsWith('### ')) {
      html += `<h3 class="text-xl font-semibold mt-6 mb-3">${line.substring(4)}</h3>\n`;
      continue;
    }

    // Horizontal rule
    if (line.trim() === '---') {
      html += `<hr class="my-8 border-gray-200" />\n`;
      continue;
    }

    // Tables
    if (line.startsWith('|') && line.includes('|')) {
      const cells = line.split('|').filter(c => c.trim() !== '');
      if (cells.length > 1) {
        if (!inTable) {
          html += '<div class="overflow-x-auto my-6">\n';
          html += '<table class="min-w-full divide-y divide-gray-200">\n';
          inTable = true;
        }
        html += '<tr class="divide-x divide-gray-200">\n';
        cells.forEach(cell => {
          html += `<td class="px-4 py-2 text-sm">${cell.trim()}</td>\n`;
        });
        html += '</tr>\n';
      }
      if (i === lines.length - 1 || !lines[i + 1]?.startsWith('|')) {
        html += '</table>\n</div>\n';
        inTable = false;
      }
      continue;
    }

    // Bold text
    if (line.startsWith('**') && line.endsWith('**')) {
      html += `<p class="font-semibold text-lg mt-4 mb-2">${line.substring(2, line.length - 2)}</p>\n`;
      continue;
    }

    // List items
    if (line.match(/^[\s]*[-*]\s+/)) {
      if (!inList) {
        html += '<ul class="list-disc list-inside my-4 space-y-2">\n';
        inList = true;
      }
      const itemText = line.replace(/^[\s]*[-*]\s+/, '');
      // Handle inline bold
      const formattedItem = itemText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      html += `  <li>${formattedItem}</li>\n`;
      if (i === lines.length - 1 || !lines[i + 1]?.match(/^[\s]*[-*]\s+/)) {
        html += '</ul>\n';
        inList = false;
      }
      continue;
    }

    // Links
    if (line.match(/^\[.*\]\(.*\)/)) {
      html += `<p class="my-4">${line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')}</p>\n`;
      continue;
    }

    // Checkboxes
    if (line.match(/^\[\s?\]/)) {
      if (!inList) {
        html += '<ul class="list-none my-4 space-y-2">\n';
        inList = true;
      }
      const checked = line.includes('[x]');
      const itemText = line.replace(/^\[[x\s]\]\s*/, '');
      html += `  <li class="flex items-center gap-2">\n`;
      html += `    <span class="w-4 h-4 border ${checked ? 'bg-gray-800' : 'bg-white'} rounded"></span>\n`;
      html += `    <span>${itemText}</span>\n`;
      html += `  </li>\n`;
      if (i === lines.length - 1 || !lines[i + 1]?.match(/^\[[x\s]\]/)) {
        html += '</ul>\n';
        inList = false;
      }
      continue;
    }

    // Regular paragraphs (skip empty lines and already processed)
    if (line.trim() && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('**')) {
      // Handle inline formatting
      let formattedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
      html += `<p class="my-4">${formattedLine}</p>\n`;
    }
  }

  return { title, html };
}

export function getPageMetadata(slug: string): { title: string; description: string } {
  const metadata: Record<string, { title: string; description: string }> = {
    home: {
      title: 'VELVET & VOGUE - Redefine Your Style, Embrace Luxury',
      description: 'Premium fashion for the modern individual. Discover curated collections of clothing and accessories.',
    },
    about: {
      title: 'About Us - VELVET & VOGUE',
      description: 'Learn about our story, values, and commitment to sustainable fashion.',
    },
    shipping: {
      title: 'Shipping & Delivery - VELVET & VOGUE',
      description: 'Free shipping on orders over 500 SEK. Delivery times and options for Sweden and international.',
    },
    returns: {
      title: 'Returns & Refunds - VELVET & VOGUE',
      description: '30-day hassle-free return policy. Easy exchanges and refunds.',
    },
    payment: {
      title: 'Payment Methods - VELVET & VOGUE',
      description: 'We accept cards, PayPal, Klarna, Apple Pay, Google Pay, and Swish.',
    },
    tracking: {
      title: 'Order Tracking - VELVET & VOGUE',
      description: 'Track your order in real-time. Get delivery updates via email or SMS.',
    },
    'size-guide': {
      title: 'Size Guide - VELVET & VOGUE',
      description: 'Find your perfect fit with our comprehensive size guide for clothing and shoes.',
    },
    faq: {
      title: 'FAQ - VELVET & VOGUE',
      description: 'Frequently asked questions about ordering, shipping, returns, and more.',
    },
    contact: {
      title: 'Contact Us - VELVET & VOGUE',
      description: 'Get in touch with our customer service team. Visit our Stockholm boutique.',
    },
    policies: {
      title: 'Store Policies - VELVET & VOGUE',
      description: 'Terms, privacy policy, cookies, and refund policy.',
    },
  };

  return metadata[slug] || { title: 'VELVET & VOGUE', description: 'Premium fashion' };
}
