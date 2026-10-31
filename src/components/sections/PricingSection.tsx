import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { pricingLegs, pricingComponents } from '../../data/content';
import { Reveal } from '../animations/Reveal';

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const routeProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-charcoal text-white relative overflow-hidden">
      {/* Background route decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-5"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50,200 C200,100 400,300 700,200 S1000,100 1200,250 S1400,400 1550,300"
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="container-editorial relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-champagne" />
                <span className="section-label text-champagne font-semibold tracking-wider">Transparent Pricing</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight leading-[1.1]"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                No surprises.<br />
                <span className="text-champagne">Just transparent</span> journeys.
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end">
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                A group journey does not begin and end at the pickup point. Drisha's pricing approach accounts for the complete vehicle journey — so you always understand what you're paying for.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3-Leg Interactive Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left: Interactive Visual Route Overview */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-champagne mb-6 block">The Complete Loop</span>
            
            <div className="space-y-6 relative">
              {/* Connecting vertical line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-burgundy via-champagne to-burgundy opacity-40" />

              {/* Stop 1: Garage Base */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center text-xs font-bold text-white border-2 border-charcoal shadow-sm flex-shrink-0">
                  01
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">Origin Base</span>
                  <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>Fleet Depot / Garage</h4>
                  <p className="text-xs text-white/60">Vehicle inspected & dispatched to pickup</p>
                </div>
              </div>

              {/* Transition A */}
              <div className="ml-14 pl-2 py-1 border-l-2 border-dashed border-champagne/40">
                <span className="text-[11px] font-bold text-champagne bg-burgundy/40 px-2 py-0.5 rounded">
                  LEG A: Depot to Passenger Pickup
                </span>
              </div>

              {/* Stop 2: Pickup */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center text-xs font-bold text-charcoal border-2 border-charcoal shadow-sm flex-shrink-0">
                  02
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">Passenger Point</span>
                  <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>Guest Pickup Location</h4>
                  <p className="text-xs text-white/60">Guests board, luggage stowed, journey begins</p>
                </div>
              </div>

              {/* Transition B */}
              <div className="ml-14 pl-2 py-1 border-l-2 border-dashed border-champagne/40">
                <span className="text-[11px] font-bold text-champagne bg-burgundy/40 px-2 py-0.5 rounded">
                  LEG B: Main Passenger Journey
                </span>
              </div>

              {/* Stop 3: Destination */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-champagne flex items-center justify-center text-xs font-bold text-charcoal border-2 border-charcoal shadow-sm flex-shrink-0">
                  03
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">Arrival</span>
                  <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>Destination Venue</h4>
                  <p className="text-xs text-white/60">Wedding hall, resort, summit, or festival</p>
                </div>
              </div>

              {/* Transition C */}
              <div className="ml-14 pl-2 py-1 border-l-2 border-dashed border-champagne/40">
                <span className="text-[11px] font-bold text-champagne bg-burgundy/40 px-2 py-0.5 rounded">
                  LEG C: Safe Return to Garage
                </span>
              </div>

              {/* Stop 4: Garage */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center text-xs font-bold text-white border-2 border-charcoal shadow-sm flex-shrink-0">
                  04
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">Trip Close</span>
                  <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>Operating Depot</h4>
                  <p className="text-xs text-white/60">Final odometer sync & ledger closure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Leg Cards */}
          <div className="lg:col-span-7 space-y-4">
            {pricingLegs.map((leg, index) => (
              <Reveal key={leg.id} delay={index * 0.12}>
                <div className="bg-white/5 hover:bg-white/[0.08] backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-champagne/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-burgundy/60 text-champagne text-xs font-bold tracking-wider uppercase border border-burgundy/80">
                      {leg.label}
                    </span>
                    <span className="text-xs text-white/40 font-mono">{leg.point}</span>
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-family-heading)' }}
                  >
                    {leg.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">{leg.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pricing Components Grid */}
        <Reveal delay={0.4}>
          <div className="pt-10 border-t border-white/10">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-champagne mb-6">
              Itemized Quotation Breakdown Includes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pricingComponents.map((component) => (
                <div key={component} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-2 h-2 bg-champagne rounded-full flex-shrink-0" />
                  <span className="text-sm text-white/80 font-medium">{component}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-6 italic">
              * Rates are determined dynamically and presented with 100% itemized transparency before booking confirmation.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Oversized section number */}
      <div className="absolute right-4 bottom-8 select-none pointer-events-none opacity-[0.03]">
        <span
          className="text-[20rem] font-extrabold leading-none text-white"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          05
        </span>
      </div>
    </section>
  );
}
