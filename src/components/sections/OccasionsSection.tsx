import { motion } from 'framer-motion';
import { occasions } from '../../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../animations/Reveal';

export function OccasionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-champagne relative overflow-hidden">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-14">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-burgundy" />
              <span className="section-label">Occasions & Experiences</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1]"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Every occasion deserves a better journey.
            </h2>
          </Reveal>
        </div>

        {/* Occasions Grid — varied layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8" staggerDelay={0.12}>
          {/* Item 1 — Large: Weddings & Celebrations */}
          <StaggerItem className="lg:col-span-7">
            <motion.div
              className="group relative h-[420px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-[#4a1c22] via-[#2d1216] to-[#1a0a0c] text-white p-8 lg:p-10 flex flex-col justify-between overflow-hidden cursor-pointer border border-burgundy/40 shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              {/* Decorative motif */}
              <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-burgundy/30 blur-3xl pointer-events-none" />
              <svg className="absolute top-6 right-6 w-36 h-36 opacity-15 pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#e8dcc6" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <circle cx="50" cy="50" r="30" stroke="#e8dcc6" strokeWidth="1" fill="none" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="#e8dcc6" strokeWidth="0.75" />
              </svg>

              {/* Card Top */}
              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded-full bg-burgundy/80 text-champagne text-xs font-semibold tracking-wider uppercase border border-white/10">
                  {occasions[0].number} • High Demand
                </span>
                <span className="text-xs text-champagne/80 font-medium">20 – 100+ Guests</span>
              </div>

              {/* Card Bottom */}
              <div className="relative z-10">
                <h3
                  className="text-2xl lg:text-4xl font-bold text-white mb-3 tracking-tight"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  {occasions[0].title}
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-lg mb-6">
                  {occasions[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Multi-Point Pickup', 'Decorated Fleets', 'Luggage Care', 'Chauffeurs in Formal Attire'].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Item 2 — Corporate Events & Offsites */}
          <StaggerItem className="lg:col-span-5">
            <motion.div
              className="group relative h-[420px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-[#2a2725] via-[#1f1d1b] to-[#141312] text-white p-8 flex flex-col justify-between overflow-hidden cursor-pointer border border-warm-sand/30 shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-warm-sand/15 blur-2xl pointer-events-none" />

              {/* Top */}
              <div className="flex items-center justify-between relative z-10">
                <span className="px-3 py-1 rounded-full bg-white/10 text-warm-sand text-xs font-semibold tracking-wider uppercase border border-white/10">
                  {occasions[1].number} • Corporate
                </span>
                <span className="text-xs text-white/60 font-medium">15 – 150 Delegates</span>
              </div>

              {/* Bottom */}
              <div className="relative z-10">
                <h3
                  className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  {occasions[1].title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  {occasions[1].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['GST Invoicing', 'Precision Timetables', 'Dedicated Coordinator'].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Item 3 — Family Outings & Group Getaways */}
          <StaggerItem className="lg:col-span-4">
            <motion.div
              className="group relative h-[380px] rounded-2xl bg-gradient-to-br from-[#3b342e] to-[#25211e] text-white p-7 flex flex-col justify-between overflow-hidden cursor-pointer border border-warm-sand/30 shadow-md hover:shadow-xl transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between relative z-10">
                <span className="text-warm-sand text-xs font-bold tracking-widest uppercase">{occasions[2].number}</span>
                <span className="text-[11px] text-white/60">8 – 26 Guests</span>
              </div>
              <div className="relative z-10">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  {occasions[2].title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-4">{occasions[2].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Hill Route Experts', 'Child Friendly', 'Pushback Recline'].map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Item 4 — Pilgrimages & Group Tours */}
          <StaggerItem className="lg:col-span-4">
            <motion.div
              className="group relative h-[380px] rounded-2xl bg-gradient-to-br from-[#4e2229] to-[#2a1317] text-white p-7 flex flex-col justify-between overflow-hidden cursor-pointer border border-burgundy/40 shadow-md hover:shadow-xl transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between relative z-10">
                <span className="text-champagne text-xs font-bold tracking-widest uppercase">{occasions[3].number}</span>
                <span className="text-[11px] text-champagne/70">Spiritual Circuits</span>
              </div>
              <div className="relative z-10">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  {occasions[3].title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-4">{occasions[3].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Kamakhya Packages', 'Senior Care', 'Multi-day Itinerary'].map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Item 5 — Airport Transfers */}
          <StaggerItem className="lg:col-span-4">
            <motion.div
              className="group relative h-[380px] rounded-2xl bg-gradient-to-br from-[#26282b] to-[#18191b] text-white p-7 flex flex-col justify-between overflow-hidden cursor-pointer border border-warm-sand/30 shadow-md hover:shadow-xl transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between relative z-10">
                <span className="text-warm-sand text-xs font-bold tracking-widest uppercase">{occasions[4].number}</span>
                <span className="text-[11px] text-white/60">Flight Synchronized</span>
              </div>
              <div className="relative z-10">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  {occasions[4].title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-4">{occasions[4].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Luggage Space', 'Flight Delay Buffer', 'Fixed Group Rate'].map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Oversized section number */}
        <div className="absolute -right-4 top-16 select-none pointer-events-none opacity-[0.04]">
          <span
            className="text-[16rem] font-extrabold leading-none text-charcoal"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            03
          </span>
        </div>
      </div>
    </section>
  );
}
