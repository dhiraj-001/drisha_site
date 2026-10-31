import { brandIntro } from '../../data/content';
import { Reveal } from '../animations/Reveal';

export function BrandIntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label text-burgundy font-semibold">{brandIntro.label}</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-charcoal mb-6 leading-[1.1]"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                {brandIntro.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-taupe leading-relaxed mb-6 max-w-xl font-normal">
                {brandIntro.description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base text-taupe/80 leading-relaxed max-w-xl mb-8">
                {brandIntro.supporting}
              </p>
            </Reveal>

            {/* Platform Pillars */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <div className="p-4 rounded-xl bg-champagne/40 border border-warm-sand/30">
                  <div className="text-burgundy font-bold text-sm mb-1">Single Point Coordination</div>
                  <p className="text-xs text-taupe leading-relaxed">No haggling with multiple brokers. Book verified vehicles suited for your exact group size.</p>
                </div>
                <div className="p-4 rounded-xl bg-champagne/40 border border-warm-sand/30">
                  <div className="text-burgundy font-bold text-sm mb-1">True Multi-Leg Clarity</div>
                  <p className="text-xs text-taupe leading-relaxed">Know where every rupee goes. Clear breakdown of depot travel, passenger distance, and returns.</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Visual Platform Architecture Card */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" delay={0.3}>
              <div className="relative">
                {/* Decorative border offset */}
                <div className="absolute -inset-3 rounded-2xl border border-warm-sand/30 -z-10" />

                {/* Main Visual Card */}
                <div className="bg-gradient-to-br from-[#2b2724] to-[#1a1816] text-white p-7 lg:p-8 rounded-2xl shadow-xl shadow-charcoal/15 relative overflow-hidden">
                  {/* Subtle Background Accent Route */}
                  <svg className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
                  </svg>

                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-warm-sand font-bold">Connected Ecosystem</span>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>
                        The Drisha Standard
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-burgundy/40 text-champagne text-[11px] font-semibold border border-burgundy/60">
                      Standardized
                    </span>
                  </div>

                  {/* Feature Steps */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3.5 bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-burgundy/60 flex items-center justify-center text-xs font-bold text-white">01</div>
                      <div>
                        <div className="text-xs font-semibold text-white">Curated Fleet Discovery</div>
                        <div className="text-[11px] text-white/60">Filtered by passenger capacity, amenities & luggage space</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-warm-sand/40 flex items-center justify-center text-xs font-bold text-white">02</div>
                      <div>
                        <div className="text-xs font-semibold text-white">Total Distance Transparency</div>
                        <div className="text-[11px] text-white/60">Itemized garage-to-pickup and return mileage tracking</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-700/60 flex items-center justify-center text-xs font-bold text-white">03</div>
                      <div>
                        <div className="text-xs font-semibold text-white">Real-Time Guest Link</div>
                        <div className="text-[11px] text-white/60">Frictionless map link shareable on WhatsApp with 1 tap</div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-white/10">
                    <div>
                      <div className="text-xl font-bold text-champagne" style={{ fontFamily: 'var(--font-family-heading)' }}>100%</div>
                      <div className="text-[10px] text-white/50 uppercase tracking-wider">Vetted Fleets</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-champagne" style={{ fontFamily: 'var(--font-family-heading)' }}>3-Leg</div>
                      <div className="text-[10px] text-white/50 uppercase tracking-wider">Fare Clarity</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-champagne" style={{ fontFamily: 'var(--font-family-heading)' }}>Zero</div>
                      <div className="text-[10px] text-white/50 uppercase tracking-wider">App for Guests</div>
                    </div>
                  </div>
                </div>

                {/* Oversized section number */}
                <div className="absolute -top-10 -left-6 select-none pointer-events-none">
                  <span className="section-number">02</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
