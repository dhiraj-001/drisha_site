import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Users, Briefcase, Wind } from 'lucide-react';
import { vehicleCategories, siteConfig } from '../../data/content';
import { Reveal } from '../animations/Reveal';
import { VehicleGraphic } from '../ui/VehicleGraphic';

export function VehicleSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const vehicleSpecs: Record<string, { seats: string; luggage: string; comfort: string }> = {
    'mini-bus': { seats: '12–18 Seater', luggage: '10–14 Bags', comfort: 'High Roof & AC' },
    'standard-bus': { seats: '28–36 Seater', luggage: '25–35 Bags', comfort: 'High Deck & Recline' },
    'large-bus': { seats: '45–55 Seater', luggage: '50+ Bags', comfort: 'Air Suspension' },
    'premium-van': { seats: '6–10 VIP Seats', luggage: '8 Bags', comfort: 'Executive Captain Seats' },
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label text-burgundy font-semibold">Vehicle Collection</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-charcoal leading-[1.1]"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Find the right vehicle for your journey.
              </h2>
            </Reveal>
          </div>

          {/* Gallery Controls */}
          <Reveal delay={0.2} direction="left">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full border border-warm-sand/40 bg-white flex items-center justify-center text-charcoal hover:bg-burgundy hover:text-white hover:border-burgundy shadow-xs transition-all duration-300"
                aria-label="Previous vehicle"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full border border-warm-sand/40 bg-white flex items-center justify-center text-charcoal hover:bg-burgundy hover:text-white hover:border-burgundy shadow-xs transition-all duration-300"
                aria-label="Next vehicle"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="container-editorial">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {vehicleCategories.map((vehicle, index) => {
            const spec = vehicleSpecs[vehicle.id] || { seats: 'Group Sized', luggage: 'Ample', comfort: 'Air Conditioned' };
            return (
              <motion.div
                key={vehicle.id}
                className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl border border-warm-sand/30 shadow-sm hover:shadow-xl hover:border-warm-sand/60 transition-all duration-300 p-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Vehicle Art Stage */}
                    <div className="relative h-[200px] bg-gradient-to-br from-champagne/40 via-ivory to-champagne/20 rounded-xl flex items-center justify-center p-4 mb-6 border border-warm-sand/20 overflow-hidden">
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 z-10 text-[10px] tracking-[0.15em] uppercase font-bold text-burgundy bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-warm-sand/30 shadow-xs">
                        {vehicle.category}
                      </span>

                      {/* Vector Vehicle */}
                      <VehicleGraphic id={vehicle.id} />
                    </div>

                    {/* Vehicle Info */}
                    <h3
                      className="text-xl font-bold text-charcoal mb-2"
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      {vehicle.category}
                    </h3>
                    <p className="text-xs text-taupe leading-relaxed mb-4">
                      {vehicle.description}
                    </p>

                    {/* Key Specs Pill Row */}
                    <div className="grid grid-cols-3 gap-2 bg-ivory/80 rounded-xl p-3 mb-5 border border-warm-sand/20 text-center">
                      <div className="flex flex-col items-center">
                        <Users size={14} className="text-burgundy mb-1" />
                        <span className="text-[10px] font-semibold text-charcoal">{spec.seats}</span>
                      </div>
                      <div className="flex flex-col items-center border-x border-warm-sand/20">
                        <Briefcase size={14} className="text-burgundy mb-1" />
                        <span className="text-[10px] font-semibold text-charcoal">{spec.luggage}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Wind size={14} className="text-burgundy mb-1" />
                        <span className="text-[10px] font-semibold text-charcoal">{spec.comfort}</span>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-warm-sand/20">
                      {vehicle.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="text-[10px] font-medium text-taupe bg-champagne/40 border border-warm-sand/30 px-2.5 py-1 rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="h-full min-h-[440px] bg-gradient-to-br from-[#722f37] to-[#4c1e24] text-white rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-lg">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-champagne mb-3">Custom Requirement</span>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Need multiple vehicles or a convoy?
              </h3>
              <p className="text-white/80 text-xs leading-relaxed mb-6 max-w-xs">
                We coordinate multi-vehicle fleets for mega-weddings, corporate conferences, and tour operators across India.
              </p>
              <a
                href={siteConfig.consumerAppLink}
                className="inline-flex items-center gap-2 text-charcoal bg-champagne hover:bg-champagne-light text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-sm"
              >
                Open Drisha App
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Oversized section number */}
      <div className="absolute -left-4 top-8 select-none pointer-events-none opacity-[0.04]">
        <span
          className="text-[16rem] font-extrabold leading-none text-charcoal"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          04
        </span>
      </div>
    </section>
  );
}
