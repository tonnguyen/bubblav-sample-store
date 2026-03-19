import type { Metadata } from "next";
import { BubblaVWidget } from '@bubblav/ai-chatbot-react';
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BubblaVWidget websiteId="739dc090-75c7-4fd1-b46e-0dc1518204ed" />
      </body>
    </html>
  );
}
