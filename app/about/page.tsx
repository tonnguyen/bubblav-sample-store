import Link from 'next/link';
import { Award, Leaf, Heart, Eye, Check, Star, Shield, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality Over Everything',
      desc: "We believe that true style is built on quality. That's why we meticulously select every piece in our collection, ensuring premium fabrics, expert craftsmanship, and designs that stand the test of time.",
    },
    {
      icon: Leaf,
      title: 'Sustainability is Not Optional',
      desc: "Fashion should never come at the expense of our planet. We use eco-friendly materials, partner with ethical manufacturers, and minimize waste through thoughtful production.",
    },
    {
      icon: Heart,
      title: 'Style for Every Body',
      desc: "Fashion is inclusive. Our collections are designed to celebrate diversity in all its forms. We offer extended sizing and strive to represent real people in our imagery.",
    },
    {
      icon: Eye,
      title: 'Transparency Matters',
      desc: "We believe you should know where your clothes come from. We openly share information about our suppliers, manufacturing processes, and sustainability efforts.",
    },
  ];

  const commitments = [
    { icon: Check, label: 'Authenticity' },
    { icon: Star, label: 'Expertise' },
    { icon: Shield, label: 'Responsibility' },
    { icon: Users, label: 'Connection' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-[120px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex bg-offset px-4 py-2 mb-6">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                ABOUT US
              </span>
            </div>

            {/* Title */}
            <h1 className="font-newsreader text-4xl sm:text-[48px] font-medium leading-[1.1] text-brand mb-6">
              About VELVET &amp; VOGUE
            </h1>

            {/* Subtitle */}
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              Founded in 2020, we believe everyone deserves access to high-quality, stylish fashion that doesn&apos;t compromise the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto">
            {/* Badge */}
            <div className="inline-flex bg-offset px-4 py-2 mb-4">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                OUR STORY
              </span>
            </div>

            <div className="space-y-6 text-muted leading-[1.7]">
              <p>
                Founded in 2020, VELVET &amp; VOGUE was born from a simple belief: everyone deserves access to high-quality, stylish fashion that doesn&apos;t cost a fortune or compromise the planet.
              </p>
              <p>
                What started as a small boutique in Stockholm has grown into a beloved destination for fashion enthusiasts across Europe. But our mission remains the same – to help you discover your unique style while making conscious choices.
              </p>
              <p>
                Our passionate team of buyers, designers, and customer service specialists share a common goal: to make your shopping experience exceptional. From our founder&apos;s vision to our customer care team&apos;s dedication, every person at VELVET &amp; VOGUE is committed to helping you look and feel your best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-block mb-4">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                WHAT WE STAND FOR
              </span>
            </div>
            <h2 className="font-newsreader text-3xl sm:text-[36px] font-medium leading-[1.1] text-brand">
              What We Stand For
            </h2>
          </div>

          {/* Grid */}
          <div className="max-w-[900px] mx-auto space-y-6">
            {values.map((item, i) => (
              <div key={i} className="bg-light border border-light rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-6">
                <div className="w-16 h-16 bg-offset rounded flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-newsreader text-lg font-medium text-brand mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-[1.5]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-offset py-12 sm:py-16 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white px-4 py-2 mb-4">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                OUR PROMISE
              </span>
            </div>
            <h2 className="font-newsreader text-3xl sm:text-[36px] font-medium leading-[1.1] text-brand mb-4">
              Our Commitment to You
            </h2>
            <p className="text-muted text-base max-w-[560px] mx-auto leading-[1.6]">
              When you shop with VELVET &amp; VOGUE, you&apos;re not just buying clothes – you&apos;re joining a community.
            </p>
          </div>

          {/* Grid */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-[700px] mx-auto">
            {commitments.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 w-[140px]">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                  <item.icon className="w-[28px] h-[28px] text-white" strokeWidth={2} />
                </div>
                <span className="text-brand text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="font-newsreader text-3xl sm:text-[32px] font-medium leading-[1.1] text-brand mb-4">
              Join Our Journey
            </h2>
            <p className="text-muted text-base max-w-[560px] mx-auto leading-[1.6] mb-6">
              We&apos;re just getting started. Explore our collections, follow us on social media, and be part of the VELVET &amp; VOGUE story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/" className="bg-brand text-white px-8 py-4 rounded text-sm font-medium inline-flex items-center justify-center gap-2">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="border border-brand text-brand px-8 py-4 rounded text-sm font-medium inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
