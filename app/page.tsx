import Image from 'next/image';
import { Truck, RefreshCw, Shield, MessageCircle, Award, Leaf, Heart, Star } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex h-[600px]">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center pr-12">
              {/* Badge */}
              <div className="inline-flex bg-offset px-4 py-2 mb-6 w-fit">
                <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-brand">
                  NEW COLLECTION SPRING 2026
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-newsreader text-[56px] font-medium leading-[1.1] text-brand mb-6">
                Redefine Your Style, Embrace Luxury
              </h1>

              {/* Subhead */}
              <p className="text-muted text-base leading-[1.6] max-w-[480px] mb-6">
                Welcome to VELVET &amp; VOGUE – where contemporary fashion meets timeless elegance.
                We curate the finest pieces for the modern individual who refuses to compromise on quality or style.
              </p>

              {/* CTAs */}
              <div className="flex gap-4">
                <button className="bg-brand text-white px-8 py-4 rounded text-sm font-medium">
                  Shop Now
                </button>
                <button className="border border-brand text-brand px-8 py-4 rounded text-sm font-medium">
                  Explore Collections
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-[520px] relative">
              <Image
                src="/design/pencil/images/generated-1773951111211.png"
                alt="VELVET & VOGUE Fashion Collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-offset border-y border-light py-0 h-20">
        <div className="max-w-[1440px] mx-auto px-16 h-full">
          <div className="flex justify-around items-center h-full">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span className="text-brand text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span className="text-brand text-sm font-medium">Easy Returns</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span className="text-brand text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span className="text-brand text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                FEATURED COLLECTIONS
              </span>
            </div>
            <h2 className="font-newsreader text-[40px] font-medium leading-[1.1] text-brand mb-3">
              Featured Collections
            </h2>
            <p className="text-muted text-base max-w-[480px] mx-auto">
              Explore our carefully curated selection of sustainable fashion pieces
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { img: 'generated-1773951198355.png', title: 'New Arrivals' },
              { img: 'generated-1773951213733.png', title: 'Essentials' },
              { img: 'generated-1773951239156.png', title: 'Sustainable' },
            ].map((collection, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[400px] mb-5 overflow-hidden rounded">
                  <Image
                    src={`/design/pencil/images/${collection.img}`}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-newsreader text-lg font-medium text-brand">{collection.title}</h3>
                <p className="text-muted-light text-sm mt-1">Explore Collection →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="bg-white border-y border-light py-24 px-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                OUR PROMISE
              </span>
            </div>
            <h2 className="font-newsreader text-[40px] font-medium leading-[1.1] text-brand mb-4">
              The VELVET &amp; VOGUE Promise
            </h2>
            <p className="text-muted text-base max-w-[540px] mx-auto leading-[1.6]">
              We&apos;re committed to providing you with an exceptional shopping experience
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Premium Quality', desc: 'Every piece is crafted from the finest materials, selected for durability, comfort, and style.' },
              { icon: Award, title: 'Curated Selection', desc: 'Our buyers scour the globe to bring you unique pieces you won&apos;t find everywhere else.' },
              { icon: Heart, title: 'Sustainable Practices', desc: 'We&apos;re committed to reducing our environmental footprint through ethical sourcing and eco-friendly packaging.' },
              { icon: Star, title: 'Exceptional Service', desc: 'Our dedicated team is here to help you find exactly what you&apos;re looking for.' },
            ].map((item, i) => (
              <div key={i} className="border border-light rounded-lg p-8">
                <div className="w-12 h-12 bg-offset rounded flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="font-newsreader text-base font-medium text-brand mb-2">{item.title}</h3>
                <p className="text-muted-light text-sm leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
