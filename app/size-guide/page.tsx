import { Ruler, Shirt, Footprints } from 'lucide-react';

export default function SizeGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-[100px] px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-newsreader text-[48px] font-medium leading-[1.1] text-brand mb-5">
              Size Guide
            </h1>
            <p className="text-muted text-base max-w-[640px] leading-[1.6]">
              Find your perfect fit with our comprehensive size guide. We&apos;ve detailed measurements for all our clothing so you can shop with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* How to Measure */}
      <section className="bg-offset py-16 px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Ruler className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand">
              How to Measure
            </h2>
          </div>

          <p className="text-muted text-base mb-8">
            For accurate measurements, measure directly on your body or over thin clothing.
          </p>

          <div className="grid grid-cols-5 gap-6">
            <div className="bg-white border border-light rounded-lg p-6">
              <h3 className="font-newsreader text-base font-medium text-brand mb-3">Bust</h3>
              <p className="text-muted text-sm">Measure around the fullest part of your chest. Keep the tape measure level and comfortable.</p>
            </div>
            <div className="bg-white border border-light rounded-lg p-6">
              <h3 className="font-newsreader text-base font-medium text-brand mb-3">Waist</h3>
              <p className="text-muted text-sm">Measure around the narrowest part of your waist, usually just above the belly button.</p>
            </div>
            <div className="bg-white border border-light rounded-lg p-6">
              <h3 className="font-newsreader text-base font-medium text-brand mb-3">Hips</h3>
              <p className="text-muted text-sm">Measure around the fullest part of your hips. Keep feet together.</p>
            </div>
            <div className="bg-white border border-light rounded-lg p-6">
              <h3 className="font-newsreader text-base font-medium text-brand mb-3">Inseam</h3>
              <p className="text-muted text-sm">Measure from the crotch to the ankle. For best results, measure a pair of pants that fit well.</p>
            </div>
            <div className="bg-white border border-light rounded-lg p-6">
              <h3 className="font-newsreader text-base font-medium text-brand mb-3">Sleeve</h3>
              <p className="text-muted text-sm">Measure from the center of your back to the wrist. Arm should be slightly bent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Clothing */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shirt className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand">
              Women&apos;s Clothing
            </h2>
          </div>

          <h3 className="font-newsreader text-lg font-medium text-brand mb-6">Tops &amp; Dresses</h3>
          <div className="border border-light rounded-lg mb-8 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-offset">
                <tr>
                  <th className="text-left py-4 px-6 text-brand font-semibold">Size</th>
                  <th className="text-left py-4 px-6 text-brand font-semibold">Bust (cm)</th>
                  <th className="text-left py-4 px-6 text-brand font-semibold">Waist (cm)</th>
                  <th className="text-left py-4 px-6 text-brand font-semibold">Hips (cm)</th>
                </tr>
              </thead>
              <tbody>
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
                  <tr key={size} className="border-t border-light">
                    <td className="py-3 px-6 text-brand font-medium">{size}</td>
                    <td className="py-3 px-6 text-muted">{78 + i * 4}-{82 + i * 4}</td>
                    <td className="py-3 px-6 text-muted">{60 + i * 4}-{64 + i * 4}</td>
                    <td className="py-3 px-6 text-muted">{86 + i * 4}-{90 + i * 4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-newsreader text-lg font-medium text-brand mb-6">Jeans (Inseam)</h3>
          <div className="grid grid-cols-4 gap-6">
            {[
              { name: 'Short', inseam: '76' },
              { name: 'Regular', inseam: '81' },
              { name: 'Long', inseam: '86' },
              { name: 'Extra Long', inseam: '91' },
            ].map((item) => (
              <div key={item.name} className="border border-light rounded-lg p-6 text-center">
                <p className="font-newsreader text-base font-medium text-brand mb-1">{item.name}</p>
                <p className="text-muted text-sm">{item.inseam} cm</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Men's Clothing */}
      <section className="bg-offset py-16 px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shirt className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand">
              Men&apos;s Clothing
            </h2>
          </div>

          <h3 className="font-newsreader text-lg font-medium text-brand mb-6">Tops &amp; Shirts</h3>
          <div className="border border-light rounded-lg mb-8 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white">
                <tr>
                  <th className="text-left py-4 px-6 text-brand font-semibold">Size</th>
                  <th className="text-left py-4 px-6 text-brand font-semibold">Chest (cm)</th>
                  <th className="text-left py-4 px-6 text-brand font-semibold">Waist (cm)</th>
                </tr>
              </thead>
              <tbody>
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
                  <tr key={size} className="border-t border-light">
                    <td className="py-3 px-6 text-brand font-medium">{size}</td>
                    <td className="py-3 px-6 text-muted">{84 + i * 4}-{88 + i * 4}</td>
                    <td className="py-3 px-6 text-muted">{70 + i * 4}-{74 + i * 4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Shoes */}
      <section className="bg-white py-16 px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Footprints className="w-6 h-6 text-accent" strokeWidth={1.5} />
            <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand">
              Shoes
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-6">Women&apos;s Shoes</h3>
              <div className="border border-light rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-offset">
                    <tr>
                      <th className="text-left py-3 px-4 text-brand font-semibold">EU</th>
                      <th className="text-left py-3 px-4 text-brand font-semibold">UK</th>
                      <th className="text-left py-3 px-4 text-brand font-semibold">US</th>
                      <th className="text-left py-3 px-4 text-brand font-semibold">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { eu: 35, uk: 2.5, us: 5, cm: 22.3 },
                      { eu: 37, uk: 4.5, us: 6.5, cm: 23.7 },
                      { eu: 39, uk: 6, us: 8.5, cm: 25.1 },
                      { eu: 41, uk: 7.5, us: 9.5, cm: 26.5 },
                    ].map((size) => (
                      <tr key={size.eu} className="border-t border-light">
                        <td className="py-2 px-4 text-brand font-medium">{size.eu}</td>
                        <td className="py-2 px-4 text-muted">{size.uk}</td>
                        <td className="py-2 px-4 text-muted">{size.us}</td>
                        <td className="py-2 px-4 text-muted">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-newsreader text-lg font-medium text-brand mb-6">Men&apos;s Shoes</h3>
              <div className="border border-light rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-offset">
                    <tr>
                      <th className="text-left py-3 px-4 text-brand font-semibold">EU</th>
                      <th className="text-left py-3 px-4 text-brand font-semibold">UK</th>
                      <th className="text-left py-3 px-4 text-brand font-semibold">US</th>
                      <th className="text-left py-3 px-4 text-brand font-semibold">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { eu: 40, uk: 6.5, us: 7.5, cm: 25.6 },
                      { eu: 42, uk: 8, us: 9, cm: 27.0 },
                      { eu: 44, uk: 9.5, us: 10.5, cm: 28.6 },
                      { eu: 45, uk: 10.5, us: 11.5, cm: 29.4 },
                    ].map((size) => (
                      <tr key={size.eu} className="border-t border-light">
                        <td className="py-2 px-4 text-brand font-medium">{size.eu}</td>
                        <td className="py-2 px-4 text-muted">{size.uk}</td>
                        <td className="py-2 px-4 text-muted">{size.us}</td>
                        <td className="py-2 px-4 text-muted">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Tips */}
      <section className="bg-white py-16 px-16 border-t border-light">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-newsreader text-[32px] font-medium leading-[1.1] text-brand mb-8">
            Size Tips
          </h2>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-newsreader text-base font-medium text-brand mb-4">Between Sizes?</h3>
              <ul className="space-y-2">
                <li className="text-muted text-sm"><strong>Tops:</strong> Size up for a more relaxed fit</li>
                <li className="text-muted text-sm"><strong>Bottoms:</strong> Size down if you have a smaller waist</li>
                <li className="text-muted text-sm"><strong>Shoes:</strong> Size up for wider feet</li>
              </ul>
            </div>

            <div>
              <h3 className="font-newsreader text-base font-medium text-brand mb-4">Fit Guide</h3>
              <ul className="space-y-2">
                <li className="text-muted text-sm"><strong>Slim Fit:</strong> Close to the body, modern look</li>
                <li className="text-muted text-sm"><strong>Regular Fit:</strong> Classic fit, true to size</li>
                <li className="text-muted text-sm"><strong>Relaxed Fit:</strong> Looser fit, comfortable</li>
              </ul>
            </div>

            <div>
              <h3 className="font-newsreader text-base font-medium text-brand mb-4">Need Help?</h3>
              <p className="text-muted text-sm mb-4">
                Our customer service team is here to help with sizing questions.
              </p>
              <p className="text-muted text-sm">
                <strong>Email:</strong> support@velvetandvogue.com<br />
                <strong>Phone:</strong> +46 8 123 4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
