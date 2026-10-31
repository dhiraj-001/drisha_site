import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Wind, CheckCircle2 } from 'lucide-react';
import { vehicleCategories, siteConfig } from '../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';
import { Button } from '../components/ui/Button';
import { VehicleGraphic } from '../components/ui/VehicleGraphic';

export default function Vehicles() {
  const vehicleSpecs: Record<string, { seats: string; luggage: string; comfort: string; features: string[] }> = {
    'mini-bus': {
      seats: '12–18 Seater',
      luggage: '10–14 Bags',
      comfort: 'High Roof & AC',
      features: ['Tempo Traveller & Urbania', 'Pushback Recline Seats', 'Integrated PA & Music System', 'Curated for Hill Routes'],
    },
    'standard-bus': {
      seats: '28–36 Seater',
      luggage: '25–35 Bags',
      comfort: 'High Deck & Recline',
      features: ['Air Conditioned Cabin', 'Overhead Luggage Racks', 'Smooth Highway Suspension', 'Wedding & Event Favorite'],
    },
    'large-bus': {
      seats: '45–55 Seater',
      luggage: '50+ Bags',
      comfort: 'Air Suspension Coach',
      features: ['High-Deck Panoramic Windows', 'Multi-Axle Ride Stability', 'Spacious Underbelly Cargo', 'Pilgrimage & Convention Fleet'],
    },
    'premium-van': {
      seats: '6–10 VIP Seats',
      luggage: '8 Bags',
      comfort: 'Executive Captain Seats',
      features: ['Plush Leather Reclining Seats', 'Quiet Sound-Insulated Cabin', 'Individual AC Vents & USBs', 'VIP & Corporate Chauffeur'],
    },
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 bg-champagne relative overflow-hidden border-b border-warm-sand/20">
        <div className="container-editorial relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-burgundy" />
              <span className="section-label text-burgundy font-semibold">Vehicle Collection</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-charcoal leading-[1.08] max-w-3xl"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Find the right vehicle for your journey.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-taupe mt-6 max-w-2xl leading-relaxed">
              Explore the curated range of group vehicles available through Drisha. Every vehicle is vetted for safety, hygiene, air-conditioning, and chauffeur professionalism.
            </p>
          </Reveal>
        </div>

        <div className="absolute right-6 bottom-4 select-none pointer-events-none opacity-[0.05]">
          <span className="text-[14rem] font-extrabold leading-none text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>V</span>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container-editorial">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" staggerDelay={0.12}>
            {vehicleCategories.map((vehicle, index) => {
              const spec = vehicleSpecs[vehicle.id] || {
                seats: 'Group Sized',
                luggage: 'Ample Luggage',
                comfort: 'Climate Controlled',
                features: ['Vetted Driver', 'GPS Tracked'],
              };
              return (
                <StaggerItem key={vehicle.id}>
                  <motion.div
                    className="bg-white rounded-2xl border border-warm-sand/30 shadow-sm hover:shadow-xl hover:border-warm-sand/60 transition-all duration-300 p-7 lg:p-8 flex flex-col justify-between h-full"
                    whileHover={{ y: -4 }}
                  >
                    <div>
                      {/* Visual Header */}
                      <div className="relative h-[220px] bg-gradient-to-br from-champagne/40 via-ivory to-champagne/20 rounded-xl flex items-center justify-center p-6 mb-6 border border-warm-sand/20 overflow-hidden">
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-burgundy bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md border border-warm-sand/20">
                            {vehicle.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 text-xs font-bold text-warm-sand">
                          0{index + 1}
                        </div>

                        {/* Vector Graphic */}
                        <VehicleGraphic id={vehicle.id} />
                      </div>

                      {/* Info */}
                      <h3 className="text-2xl font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                        {vehicle.category}
                      </h3>
                      <p className="text-sm text-taupe leading-relaxed mb-6">{vehicle.description}</p>

                      {/* Specs Pill Grid */}
                      <div className="grid grid-cols-3 gap-2 bg-ivory/80 rounded-xl p-3 mb-6 border border-warm-sand/20 text-center">
                        <div className="flex flex-col items-center">
                          <Users size={15} className="text-burgundy mb-1" />
                          <span className="text-[11px] font-semibold text-charcoal">{spec.seats}</span>
                        </div>
                        <div className="flex flex-col items-center border-x border-warm-sand/20">
                          <Briefcase size={15} className="text-burgundy mb-1" />
                          <span className="text-[11px] font-semibold text-charcoal">{spec.luggage}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Wind size={15} className="text-burgundy mb-1" />
                          <span className="text-[11px] font-semibold text-charcoal">{spec.comfort}</span>
                        </div>
                      </div>

                      {/* Features Checklist */}
                      <div className="space-y-2 mb-6">
                        {spec.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-charcoal/80">
                            <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Use Cases & CTA */}
                    <div className="pt-5 border-t border-warm-sand/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {vehicle.useCases.map((uc) => (
                          <span key={uc} className="text-[10px] font-medium text-taupe bg-champagne/40 border border-warm-sand/30 px-2.5 py-1 rounded-full">
                            {uc}
                          </span>
                        ))}
                      </div>
                      <Button href={siteConfig.consumerAppLink} size="sm" rounded="full">
                        Book Vehicle
                      </Button>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* CTA Banner */}
          <Reveal delay={0.3}>
            <div className="mt-16 bg-gradient-to-br from-[#722f37] to-[#4c1e24] text-white p-8 lg:p-12 rounded-2xl text-center shadow-xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
                Have a specific group size or multi-city itinerary?
              </h3>
              <p className="text-champagne/90 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                Our team arranges dedicated bus convoys and luxury tempo travellers across Assam, Meghalaya, Arunachal Pradesh, and India.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href={siteConfig.consumerAppLink} variant="secondary" size="lg" rounded="full" className="gap-2">
                  Check Instant Availability
                  <ArrowRight size={18} />
                </Button>
                <Button href="/contact" variant="outline-white" size="lg" rounded="full">
                  Speak with Coordinator
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
