import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight } from 'lucide-react';
import { partnerFeatures, siteConfig } from '../../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../animations/Reveal';
import { Button } from '../ui/Button';

export function PartnerAppSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Phone Mockup */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative flex justify-center items-center py-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-[280px] sm:w-[310px] mx-auto z-10 isolate">
                  <div className="bg-[#1c1a18] rounded-[3rem] p-3 shadow-2xl border-4 border-[#36322f]">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>

                    <div className="bg-ivory rounded-[2.3rem] overflow-hidden aspect-[9/19] relative border border-warm-sand/30">
                      {/* Real Partner App Screenshot */}
                      <img
                        src="/images/partner-app-preview.png"
                        alt="Drisha Fleet Partner App"
                        className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-300 ${
                          imageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                      />

                      <div className="flex flex-col justify-between h-full">
                        {/* App Header */}
                      <div className="pt-8 px-5 pb-4 bg-gradient-to-b from-[#252220] to-[#171514] text-white">
                        <div className="flex items-center justify-between mb-3 text-[10px] text-white/70">
                          <span>09:41 AM</span>
                          <span className="flex items-center gap-1">Fleet Partner • 5G</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Truck size={14} className="text-champagne" />
                          <span className="text-champagne text-xs font-bold uppercase tracking-wider">Drisha Partner</span>
                        </div>
                        <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>
                          Fleet Command Hub
                        </h4>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3 flex-1 overflow-hidden bg-ivory">
                        {/* Metrics Bar */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white p-2.5 rounded-xl border border-warm-sand/30 shadow-xs">
                            <span className="text-[9px] uppercase font-bold text-taupe block">Today's Payout</span>
                            <span className="text-sm font-bold text-emerald-700">₹42,500</span>
                          </div>
                          <div className="bg-white p-2.5 rounded-xl border border-warm-sand/30 shadow-xs">
                            <span className="text-[9px] uppercase font-bold text-taupe block">Active Fleet</span>
                            <span className="text-sm font-bold text-burgundy">4/5 on Road</span>
                          </div>
                        </div>

                        {/* Active Trip Card */}
                        <div className="bg-white p-3 rounded-xl border border-warm-sand/30 shadow-xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              En Route • Trip #9240
                            </span>
                            <span className="text-[10px] font-semibold text-charcoal">₹8,500</span>
                          </div>
                          <div className="text-xs font-bold text-charcoal">Tempo Traveller 17S</div>
                          <div className="text-[10px] text-taupe">Driver: Dipen Barman • Shillong</div>
                        </div>

                        {/* Fleet Readiness */}
                        <div className="bg-white p-3 rounded-xl border border-warm-sand/30 shadow-xs space-y-2">
                          <span className="text-[10px] uppercase font-bold text-taupe block">Depot Standby</span>
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-medium text-charcoal">32S Luxury Coach</span>
                            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Ready</span>
                          </div>
                          <div className="flex justify-between items-center text-xs border-t border-warm-sand/20 pt-1.5">
                            <span className="font-medium text-charcoal">Urbania Premium</span>
                            <span className="text-[10px] text-burgundy font-bold bg-burgundy/10 px-2 py-0.5 rounded">Scheduled 2 PM</span>
                          </div>
                        </div>
                      </div>

                      {/* App Bottom Nav */}
                      <div className="py-2.5 px-6 bg-white border-t border-warm-sand/20 flex justify-between text-[9px] text-taupe font-medium">
                        <span className="text-burgundy font-bold">Fleet</span>
                        <span>Bookings</span>
                        <span>Earnings</span>
                        <span>Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                {/* Floating label 1 */}
                <motion.div
                  className="absolute -right-2 sm:-right-8 top-1/4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-3.5 border border-warm-sand/30 z-30"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-[9px] tracking-[0.15em] uppercase text-burgundy font-bold block">Fleet & Drivers</span>
                  <p className="text-xs text-charcoal font-bold mt-0.5">Automated Multi-Leg Payouts</p>
                </motion.div>

                <motion.div
                  className="absolute -left-2 sm:-left-8 bottom-1/4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-3.5 border border-warm-sand/30 z-30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <span className="text-[9px] tracking-[0.15em] uppercase text-emerald-700 font-bold block">Commercial Drivers</span>
                  <p className="text-xs text-charcoal font-bold mt-0.5">Vehicle Contracts in App</p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label">Partner Application • Fleets & Drivers</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Your fleet. Your driving skills. Connected.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-taupe leading-relaxed mb-8">
                A unified mobile app built for both fleet owners and commercial drivers. Fleet operators manage vehicles and rate cards, while drivers can register directly to receive vehicle driving contracts without owning a vehicle.
              </p>
            </Reveal>

            <StaggerContainer className="space-y-3 mb-10" staggerDelay={0.06}>
              {[
                'Fleet vehicle registration & rate configuration',
                'Driver registration with commercial DL verification',
                'Direct vehicle driving contracts & trip dispatch',
                'Duty status management (Available / On-Trip / Off-Duty)',
                'Automated multi-leg payouts & driver allowances',
              ].map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-burgundy rounded-full flex-shrink-0" />
                    <span className="text-sm text-charcoal/80 font-medium">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/partner" variant="primary" size="lg" className="gap-2">
                  Explore Partner & Driver Tracks
                  <ArrowRight size={18} />
                </Button>
                <Button href={siteConfig.partnerAppLink} variant="outline" size="lg">
                  Download Partner App
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Oversized section number */}
      <div className="absolute -left-4 top-8 select-none pointer-events-none opacity-[0.04]">
        <span
          className="text-[16rem] font-extrabold leading-none text-charcoal"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          08
        </span>
      </div>
    </section>
  );
}
