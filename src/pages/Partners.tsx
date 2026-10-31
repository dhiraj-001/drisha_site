import { ArrowRight, Truck } from 'lucide-react';
import { partnerFeatures, partnerOnboardingSteps, siteConfig } from '../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';
import { Button } from '../components/ui/Button';

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 bg-[#1f1d1b] text-white relative overflow-hidden border-b border-white/10">
        <div className="container-editorial relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-champagne" />
              <span className="section-label text-champagne font-semibold tracking-wider">Fleet Partners</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight leading-[1.08] max-w-3xl"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Your fleet. Your business.<br />
              <span className="text-champagne">Connected.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-white/70 mt-6 max-w-xl leading-relaxed font-normal">
              Join Drisha as a verified fleet partner. Eliminate idle days, configure customized vehicle rate-cards, and receive guaranteed multi-leg payouts with transparent digital accounting.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={siteConfig.partnerAppLink} size="lg" rounded="full" className="gap-2.5">
                Register as Partner
                <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="outline-white" size="lg" rounded="full">
                Talk to Depot Team
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Background decoration */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <path d="M-50,300 C300,200 600,400 900,300 S1200,200 1500,300" stroke="#fff" strokeWidth="1" fill="none" />
        </svg>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-burgundy" />
              <span className="section-label text-burgundy font-semibold">Capabilities</span>
            </div>
            <h2
              className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-12"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Platform capabilities for fleet partners.
            </h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.06}>
            {partnerFeatures.map((feature, index) => (
              <StaggerItem key={feature}>
                <div className="bg-white rounded-2xl p-6 border border-warm-sand/30 shadow-xs hover:shadow-md hover:border-burgundy/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <span className="text-2xl font-extrabold text-burgundy mb-4 block" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    0{index + 1}
                  </span>
                  <p className="text-sm font-semibold text-charcoal/90 leading-snug">{feature}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Onboarding */}
      <section className="py-16 lg:py-24 bg-champagne border-y border-warm-sand/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-px bg-burgundy" />
                  <span className="section-label text-burgundy font-semibold">Fast Onboarding</span>
                </div>
                <h2
                  className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  Getting started is simple.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base sm:text-lg text-taupe leading-relaxed mb-6 font-normal">
                  Register, upload vehicle documents, set your preferred operating radius, and begin accepting confirmed group bookings.
                </p>
                <div className="p-4 rounded-xl bg-white/80 border border-warm-sand/30 text-xs text-taupe space-y-2">
                  <div className="font-bold text-burgundy">Required Documents:</div>
                  <div>• Commercial RC & Fitness Certificate</div>
                  <div>• Commercial Insurance & State Permits</div>
                  <div>• Driver Commercial Driving License</div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <StaggerContainer className="space-y-4" staggerDelay={0.12}>
                {partnerOnboardingSteps.map((step) => (
                  <StaggerItem key={step.step}>
                    <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border border-warm-sand/30 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center font-bold text-base flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-charcoal mb-1" style={{ fontFamily: 'var(--font-family-heading)' }}>
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-taupe leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Partner App Showcase */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne text-burgundy text-xs font-bold uppercase tracking-wider mb-4 border border-warm-sand/30">
                <Truck size={15} />
                <span>Drisha Partner Command Portal</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-4"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Manage your fleet from anywhere.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-taupe leading-relaxed">
                The Drisha Partner app gives you complete operational control — from vehicle registration and rate configuration to live trip monitoring and automated earnings settlement.
              </p>
            </Reveal>
          </div>

          {/* Interactive Fleet Command Center Preview Card */}
          <Reveal delay={0.3}>
            <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#24211f] to-[#161413] text-white p-6 sm:p-10 shadow-2xl border border-warm-sand/30">
              {/* Card Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-burgundy flex items-center justify-center font-bold text-white text-sm shadow-sm">
                    DP
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      Assam Valley Mobility Fleet
                    </h3>
                    <p className="text-xs text-champagne/80 font-mono">Depot #04 • Guwahati, Assam</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                    Live Booking Engine Connected
                  </span>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-white/10 text-center">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-white/50 block">Today's Revenue</span>
                  <span className="text-lg sm:text-xl font-bold text-emerald-400">₹42,500</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-white/50 block">Fleet Active</span>
                  <span className="text-lg sm:text-xl font-bold text-champagne">5 / 6 Vehicles</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-white/50 block">Avg Rate / Km</span>
                  <span className="text-lg sm:text-xl font-bold text-white">₹38.50</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-bold text-white/50 block">Payout Cycle</span>
                  <span className="text-lg sm:text-xl font-bold text-emerald-400">T+2 Days</span>
                </div>
              </div>

              {/* Active Vehicles List */}
              <div className="pt-6 space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-champagne block">Active Vehicle Dispatches</span>
                
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-burgundy/60 flex items-center justify-center text-xs font-bold">17S</div>
                    <div>
                      <div className="text-xs font-bold text-white">Tempo Traveller Luxury (AS 01 EC 4820)</div>
                      <div className="text-[11px] text-white/60">Guwahati Airport ➔ Shillong • Driver: Rajesh Bora</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-xs font-mono font-bold text-emerald-400">₹6,400 (3-Leg)</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      En Route
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-warm-sand/40 flex items-center justify-center text-xs font-bold">32S</div>
                    <div>
                      <div className="text-xs font-bold text-white">Standard AC Bus (AS 01 BB 2291)</div>
                      <div className="text-[11px] text-white/60">Corporate Offsite ➔ Kaziranga • Driver: Dipen Barman</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-xs font-mono font-bold text-emerald-400">₹18,500 (3-Leg)</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                      Depot Standby
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Inside Card */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-white/60">
                  Ready to digitize your fleet management with Drisha?
                </span>
                <Button href={siteConfig.partnerAppLink} size="sm" rounded="full" className="gap-2">
                  Download Partner App
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#722f37] to-[#4c1e24] text-white text-center">
        <div className="container-editorial">
          <Reveal>
            <h2
              className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Ready to grow your fleet business?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg text-champagne/90 leading-relaxed mb-8 max-w-xl mx-auto">
              Join Drisha and connect your vehicles to a growing network of vetted corporate, wedding, and tourism journeys across India.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href={siteConfig.partnerAppLink} variant="secondary" size="lg" rounded="full" className="gap-2">
              Join as a Partner
              <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
