import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { heroContent, siteConfig } from '../../data/content';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-champagne pt-24 lg:pt-0">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-champagne via-ivory to-champagne-light" />

      {/* Animated Route Line SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M-50,450 C200,350 400,550 600,400 S900,250 1100,380 S1300,500 1500,420"
          className="route-line-subtle"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
        />
        <motion.path
          d="M-50,600 C300,500 500,700 750,550 S1000,400 1200,520 S1400,650 1550,570"
          className="route-line-subtle"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 3.5, delay: 1.5, ease: 'easeInOut' }}
        />
      </svg>

      {/* Location Labels */}
      <motion.div
        className="absolute top-32 right-16 lg:right-32 flex items-center gap-2 text-taupe/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <MapPin size={12} />
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">26.1445° N</span>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 lg:left-32 flex items-center gap-2 text-taupe/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
      >
        <MapPin size={12} />
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">91.7362° E</span>
      </motion.div>

      {/* Main Content */}
      <div className="container-editorial relative z-10 pt-64 sm:pt-38 lg:pt-40 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Editorial Typography */}
          <div className="lg:col-span-7">
            {/* Section Label */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="w-12 h-px bg-burgundy" />
              <span className="section-label text-burgundy font-semibold">Group Mobility Platform</span>
            </motion.div>

            {/* Headline with line reveal */}
            <div className="mb-6 lg:mb-8">
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.08] tracking-tight text-charcoal"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  Every journey begins
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.08] tracking-tight text-charcoal"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  with bringing
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.08] tracking-tight text-burgundy"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  people together.
                </motion.h1>
              </div>
            </div>

            {/* Supporting Text */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-taupe max-w-xl leading-relaxed mb-8 lg:mb-10 font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {heroContent.supporting}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Button href={siteConfig.consumerAppLink} size="lg" rounded="full" className="gap-2.5 shadow-lg shadow-burgundy/25">
                {heroContent.primaryCta}
                <ArrowRight size={18} />
              </Button>
              <Button href="/partner" variant="outline" size="lg" rounded="full">
                {heroContent.secondaryCta}
              </Button>
            </motion.div>

            {/* Trust Micro-Metrics */}
            <motion.div
              className="mt-12 pt-8 border-t border-warm-sand/30 flex flex-wrap items-center gap-8 text-xs text-taupe font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Transparent 3-Leg Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-burgundy" />
                <span>Live Shareable Journey Links</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warm-sand" />
                <span>Vetted Fleet Partners</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Elegant Floating Journey Visual Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-warm-sand/30 shadow-xl shadow-charcoal/8 p-6 lg:p-8 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-warm-sand/20 pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-taupe block">Curated Experience</span>
                  <h3 className="text-base font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    Guwahati ➔ Shillong Hills
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </div>
              </div>

              {/* Journey Route Timeline */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-burgundy" />
                    <div className="w-0.5 h-10 bg-burgundy/30 my-0.5 border-dashed" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-taupe font-semibold">Origin Pickup</span>
                    <p className="text-sm font-semibold text-charcoal">Guwahati Airport / Hotel</p>
                    <p className="text-xs text-taupe/80">07:30 AM • 16 Guests Boarding</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-taupe font-semibold">Destination</span>
                    <p className="text-sm font-semibold text-charcoal">Shillong Peak & Ward's Lake</p>
                    <p className="text-xs text-taupe/80">Scenic Mountain Route • 98 km</p>
                  </div>
                </div>
              </div>

              {/* Selected Vehicle Badge */}
              <div className="bg-ivory rounded-xl p-4 border border-warm-sand/30 mb-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-burgundy tracking-wider block">Assigned Fleet</span>
                  <h4 className="text-sm font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    Tempo Traveller Luxury
                  </h4>
                  <p className="text-xs text-taupe">17 Pushback Seats • AC • Chauffeur Verified</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-taupe block">Transparent Fare</span>
                  <span className="text-base font-bold text-burgundy" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    ₹6,400
                  </span>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="flex items-center justify-between text-xs text-taupe/90 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="text-burgundy">✓</span> Complete 3-Leg Clearance
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-burgundy">✓</span> Guest WhatsApp Link
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative oversized number */}
        <motion.div
          className="absolute -right-4 lg:right-4 bottom-4 lg:bottom-10 select-none pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <span
            className="text-[12rem] lg:text-[18rem] font-extrabold leading-none text-charcoal"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            01
          </span>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-taupe">Scroll</span>
        <motion.div
          className="w-px h-8 bg-taupe/50"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
