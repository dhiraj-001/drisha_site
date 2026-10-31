import { MapPin, Navigation, Share2, Eye } from 'lucide-react';
import { trackingFeatures } from '../../data/content';
import { Reveal } from '../animations/Reveal';

export function TrackingSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — High-Fidelity Live Tracking Demonstration Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <div className="relative rounded-2xl bg-gradient-to-br from-[#211e1c] via-[#2a2724] to-[#1a1816] text-white p-6 sm:p-8 shadow-2xl border border-warm-sand/20 overflow-hidden">
                {/* Simulated Radar & Grid Background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="trackingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#trackingGrid)" />
                    <circle cx="200" cy="200" r="160" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" fill="none"/>
                  </svg>
                </div>

                {/* Top Status Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs uppercase font-bold tracking-widest text-champagne">Live Journey Session</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 font-mono">
                    Trip #DR-9240
                  </span>
                </div>

                {/* Map Route Canvas */}
                <div className="relative h-56 sm:h-64 rounded-xl bg-charcoal/80 border border-white/10 overflow-hidden p-4 mb-6">
                  {/* SVG Route */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240">
                    {/* Shadow route */}
                    <path
                      d="M50 190 C120 170 140 120 200 110 S300 70 350 40"
                      stroke="#000"
                      strokeWidth="6"
                      strokeOpacity="0.3"
                      fill="none"
                    />
                    {/* Active Route Path */}
                    <path
                      d="M50 190 C120 170 140 120 200 110 S300 70 350 40"
                      stroke="#722f37"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Route Direction dashes */}
                    <path
                      d="M50 190 C120 170 140 120 200 110 S300 70 350 40"
                      stroke="#e8dcc6"
                      strokeWidth="1.5"
                      strokeDasharray="6 8"
                      fill="none"
                      opacity="0.8"
                    />

                    {/* Origin Pin */}
                    <circle cx="50" cy="190" r="7" fill="#722f37" stroke="#fff" strokeWidth="2" />

                    {/* Live Vehicle Marker */}
                    <g transform="translate(200, 110)">
                      <circle r="18" fill="#722f37" fillOpacity="0.25" className="animate-ping" />
                      <circle r="12" fill="#211e1c" stroke="#e8dcc6" strokeWidth="2" />
                      <circle r="5" fill="#e8dcc6" />
                    </g>

                    {/* Destination Pin */}
                    <circle cx="350" cy="40" r="7" fill="#10b981" stroke="#fff" strokeWidth="2" />
                  </svg>

                  {/* Location Badges on Map */}
                  <div className="absolute bottom-3 left-3 bg-charcoal/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px]">
                    <span className="text-white/40 block text-[9px] uppercase">Origin</span>
                    <span className="font-semibold text-white">Guwahati Airport</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-charcoal/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px]">
                    <span className="text-emerald-400 block text-[9px] uppercase">Destination</span>
                    <span className="font-semibold text-white">Shillong Peak</span>
                  </div>

                  {/* Real-time Telemetry Pill */}
                  <div className="absolute bottom-3 right-3 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    58 km/h • 34 km to go
                  </div>
                </div>

                {/* Driver & Share Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <div className="w-9 h-9 rounded-full bg-burgundy flex items-center justify-center text-xs font-bold text-white">
                      RB
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Rajesh Bora</div>
                      <div className="text-[10px] text-white/60">Tempo Traveller • AS 01 EC 4820</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                    <div>
                      <div className="text-xs font-bold text-champagne">Shareable Guest Link</div>
                      <div className="text-[10px] text-white/50">WhatsApp / SMS Ready</div>
                    </div>
                    <span className="text-xs text-burgundy font-bold bg-champagne px-2.5 py-1 rounded-md">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label text-burgundy font-semibold">Live Journey Tracking</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Always know where your group journey is.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-taupe leading-relaxed mb-8">
                Group travel coordination can be chaotic when guests call asking where the bus is. Drisha generates a lightweight, real-time map link you can share with everyone in seconds.
              </p>
            </Reveal>

            <div className="space-y-4 mb-8">
              {trackingFeatures.map((feature, index) => {
                const icons = [Eye, Navigation, MapPin, Share2, Eye];
                const Icon = icons[index % icons.length];
                return (
                  <Reveal key={feature} delay={0.25 + index * 0.08}>
                    <div className="flex items-center gap-4 p-3.5 rounded-xl bg-champagne/40 border border-warm-sand/30 hover:border-burgundy/40 hover:bg-champagne/70 transition-all duration-300">
                      <div className="w-9 h-9 rounded-lg bg-burgundy flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                        <Icon size={16} />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-charcoal/90">{feature}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.6}>
              <div className="p-4 rounded-xl bg-white border border-warm-sand/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-burgundy block">Zero Friction Guarantee</span>
                  <p className="text-xs text-taupe">Guests tap the link and see the vehicle live. No app installation or signups needed.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Oversized section number */}
      <div className="absolute -left-4 bottom-8 select-none pointer-events-none opacity-[0.04]">
        <span
          className="text-[16rem] font-extrabold leading-none text-charcoal"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          06
        </span>
      </div>
    </section>
  );
}
