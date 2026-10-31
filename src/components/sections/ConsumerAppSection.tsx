import { motion } from 'framer-motion';
import { Smartphone, ArrowRight } from 'lucide-react';
import { consumerFeatures, siteConfig } from '../../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../animations/Reveal';
import { Button } from '../ui/Button';

export function ConsumerAppSection() {
  return (
    <section className="py-20 lg:py-28 bg-champagne relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label">Consumer Application</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Your journey, in your hands.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-taupe leading-relaxed mb-10">
                Discover vehicles, organize group journeys, understand your fare, and stay connected throughout your trip.
              </p>
            </Reveal>

            {/* Features List */}
            <StaggerContainer className="space-y-4 mb-10" staggerDelay={0.08}>
              {consumerFeatures.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-burgundy rounded-full flex-shrink-0" />
                    <span className="text-sm text-charcoal/70">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.6}>
              <Button href={siteConfig.consumerAppLink} size="lg" className="gap-2">
                Download Drisha
                <ArrowRight size={18} />
              </Button>
            </Reveal>
          </div>

          {/* Right — Phone Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="relative flex justify-center items-center py-6">
              {/* Phone mockup */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[310px] mx-auto">
                  <div className="bg-[#1c1a18] rounded-[3rem] p-3 shadow-2xl border-4 border-[#36322f]">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Screen */}
                    <div className="bg-ivory rounded-[2.3rem] overflow-hidden aspect-[9/19] flex flex-col justify-between border border-warm-sand/30">
                      {/* App Header */}
                      <div className="pt-8 px-5 pb-4 bg-gradient-to-b from-burgundy to-[#58232a] text-white">
                        <div className="flex items-center justify-between mb-3 text-[10px] text-white/70">
                          <span>09:41 AM</span>
                          <span className="flex items-center gap-1">5G • 100%</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Smartphone size={14} className="text-champagne" />
                          <span className="text-champagne text-xs font-bold uppercase tracking-wider">Drisha</span>
                        </div>
                        <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>
                          Where is your group heading?
                        </h4>
                      </div>

                      {/* App Content */}
                      <div className="p-4 space-y-3 flex-1 overflow-hidden bg-ivory">
                        {/* Search Card */}
                        <div className="bg-white rounded-xl p-3 border border-warm-sand/30 shadow-xs space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-2 h-2 rounded-full bg-burgundy" />
                            <span className="text-charcoal font-medium">Guwahati Airport (GAU)</span>
                          </div>
                          <div className="border-t border-warm-sand/20 pt-2 flex items-center gap-2 text-xs">
                            <div className="w-2 h-2 rounded-full bg-emerald-600" />
                            <span className="text-charcoal font-medium">Shillong Peak & Lake</span>
                          </div>
                          <div className="bg-champagne/40 rounded-lg p-1.5 flex justify-between text-[10px] text-taupe font-medium">
                            <span>16 Passengers</span>
                            <span>Tempo Traveller</span>
                          </div>
                        </div>

                        {/* Selected Vehicle Card */}
                        <div className="bg-white rounded-xl p-3 border-2 border-burgundy/60 shadow-xs">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <span className="text-[9px] uppercase font-bold text-burgundy tracking-wider block">Recommended</span>
                              <span className="text-xs font-bold text-charcoal">Tempo Traveller Luxury</span>
                            </div>
                            <span className="text-xs font-bold text-burgundy">₹6,400</span>
                          </div>
                          <p className="text-[10px] text-taupe mb-2">17 Pushback Seats • AC • All 3 Legs Included</p>
                          <div className="w-full py-1.5 bg-burgundy text-white text-[10px] font-semibold rounded-lg text-center shadow-xs">
                            Confirm Booking
                          </div>
                        </div>

                        {/* Live Tracking Mini-Widget */}
                        <div className="bg-white rounded-xl p-3 border border-warm-sand/30 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-semibold text-charcoal">Live Guest Sharing Ready</span>
                          </div>
                          <span className="text-[10px] text-burgundy font-bold">1 Tap</span>
                        </div>
                      </div>

                      {/* App Footer Navigation Bar */}
                      <div className="py-2.5 px-6 bg-white border-t border-warm-sand/20 flex justify-between text-[9px] text-taupe font-medium">
                        <span className="text-burgundy font-bold">Explore</span>
                        <span>My Trips</span>
                        <span>Tracking</span>
                        <span>Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating label 1 */}
                <motion.div
                  className="absolute -right-2 sm:-right-8 top-1/4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-3.5 border border-warm-sand/30"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-[9px] tracking-[0.15em] uppercase text-burgundy font-bold block">3-Leg Clear Fare</span>
                  <p className="text-xs text-charcoal font-bold mt-0.5">Zero Hidden Charges</p>
                </motion.div>

                {/* Floating label 2 */}
                <motion.div
                  className="absolute -left-2 sm:-left-8 bottom-1/4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-3.5 border border-warm-sand/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <span className="text-[9px] tracking-[0.15em] uppercase text-emerald-700 font-bold block">WhatsApp Tracking Link</span>
                  <p className="text-xs text-charcoal font-bold mt-0.5">Share with All Guests</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized section number */}
      <div className="absolute right-4 top-8 select-none pointer-events-none opacity-[0.04]">
        <span
          className="text-[16rem] font-extrabold leading-none text-charcoal"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          07
        </span>
      </div>
    </section>
  );
}
