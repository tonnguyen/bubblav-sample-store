import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'support@velvetandvogue.com',
      desc: 'Response within 24 hours (Mon-Fri)',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+46 8 123 4567',
      desc: 'Mon-Fri 9:00-18:00 CET',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      value: 'Available on website',
      desc: 'Mon-Fri 9:00-18:00 CET',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 lg:py-[100px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex bg-offset px-4 py-2 mb-5">
              <span className="font-jetbrains text-xs font-semibold tracking-[0.12em] text-accent">
                GET IN TOUCH
              </span>
            </div>

            {/* Title */}
            <h1 className="font-newsreader text-4xl sm:text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Contact Us
            </h1>

            {/* Subtitle */}
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              We&apos;d love to hear from you! Whether you have questions about products, orders, or just want to say hello, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-10 sm:py-[60px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactMethods.map((item, i) => (
              <div key={i} className="border border-light rounded-lg p-6 sm:p-8">
                <div className="w-12 h-12 bg-offset rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-newsreader text-lg font-medium text-brand mb-1">{item.title}</h3>
                <p className="text-accent text-sm font-medium mb-2">{item.value}</p>
                <p className="text-muted text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="bg-offset py-10 sm:py-[60px] px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
            {/* Store Info */}
            <div className="flex-1">
              <h2 className="font-newsreader text-3xl sm:text-[32px] font-medium leading-[1.1] text-brand mb-6">
                Visit Our Store
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-newsreader text-lg font-medium text-brand mb-1">VELVET &amp; VOGUE Boutique</h3>
                    <p className="text-muted text-sm">Biblioteksgatan 3, 111 45 Stockholm, Sweden</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-brand text-sm font-semibold">Store Hours</h4>
                  <p className="text-muted text-sm">Monday-Friday: 10:00-19:00</p>
                  <p className="text-muted text-sm">Saturday: 10:00-17:00</p>
                  <p className="text-muted text-sm">Sunday: 12:00-16:00</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="flex-1">
              <h3 className="font-newsreader text-lg font-medium text-brand mb-4">In-Store Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  Personal styling appointments
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  Try-before-you-buy
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  In-store returns and exchanges
                </li>
                <li className="flex items-center gap-3 text-muted text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  Gift wrapping
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[600px] mx-auto">
            <h2 className="font-newsreader text-3xl sm:text-[32px] font-medium leading-[1.1] text-brand mb-4 text-center">
              Send Us a Message
            </h2>
            <p className="text-muted text-base text-center mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-brand text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-brand text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-brand text-sm font-medium mb-2">Order Number (optional)</label>
                <input
                  type="text"
                  className="w-full border border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  placeholder="#12345"
                />
              </div>
              <div>
                <label className="block text-brand text-sm font-medium mb-2">Subject</label>
                <select className="w-full border border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-accent text-muted">
                  <option>Select a subject</option>
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Return/Exchange</option>
                  <option>Sizing Help</option>
                  <option>Partnership Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-brand text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-light rounded px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand text-white px-8 py-4 rounded text-sm font-medium flex items-center justify-center gap-2 hover:bg-brand/90 transition-colors"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
