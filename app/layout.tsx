import type { Metadata } from "next";
import Script from "next/script";
import { BubblaVWidget } from '@bubblav/ai-chatbot-react';
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DemoBanner } from "@/components/demo-banner";

export const metadata: Metadata = {
  title: "VELVET & VOGUE - Redefine Your Style, Embrace Luxury",
  description: "Premium fashion for the modern individual. Discover curated collections of clothing and accessories that blend contemporary style with timeless elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JDQ1JMR37D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JDQ1JMR37D');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <DemoBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BubblaVWidget websiteId="739dc090-75c7-4fd1-b46e-0dc1518204ed" />
      </body>
    </html>
  );
}
