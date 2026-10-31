import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Reveal } from '../animations/Reveal';

export function RegionalVisionSection() {
  return (
    <section className="py-20 lg:py-28 bg-champagne relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label text-burgundy font-semibold">Our Regional Vision</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                From Northeast India to journeys across the country.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-taupe leading-relaxed mb-6 font-normal">
                Built with Northeast India in mind, Drisha is creating a connected group mobility platform designed to scale across India.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-sm sm:text-base text-taupe/80 leading-relaxed mb-8">
                Our roots in the Northeast give us deep practical insight into the realities of group travel — navigating winding mountain roads, coordinating festive wedding convoys across district lines, and delivering dependable pilgrimage transport.
              </p>
            </Reveal>

            {/* Regional Badges */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/80 border border-warm-sand/30">
                  <div className="text-xs font-bold text-burgundy mb-1">Mountain Terrain Expertise</div>
                  <div className="text-[11px] text-taupe">Chauffeurs experienced on Guwahati-Shillong & Tawang routes</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-warm-sand/30">
                  <div className="text-xs font-bold text-burgundy mb-1">Interstate Permit Clarity</div>
                  <div className="text-[11px] text-taupe">All border entry taxes, tolls & green cess pre-accounted</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map/Visual */}
          <div>
            <Reveal direction="left" delay={0.3}>
              <div className="relative aspect-square max-w-lg mx-auto bg-gradient-to-br from-[#2a2624] to-[#1c1a18] rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-warm-sand/20 overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-burgundy" />
                    <span className="text-xs font-bold tracking-wider uppercase text-champagne">Regional Network Hub</span>
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">26.14° N, 91.73° E</span>
                </div>

                {/* SVG Regional Node Graphic */}
                <div className="relative h-64 sm:h-72 w-full">
                  <svg className="w-full h-full" viewBox="0 0 360 280">
                    {/* Connecting Route Webs */}
                    <path d="M120 160 L180 120 L260 90 L290 140 L210 190 Z" stroke="#722f37" strokeWidth="2" fill="none" opacity="0.6"/>
                    <path d="M60 200 L120 160 L180 120" stroke="#b7a891" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
                    <path d="M180 120 L220 60" stroke="#b7a891" strokeWidth="1" strokeDasharray="4 4" fill="none"/>

                    {/* Nodes */}
                    {/* Guwahati Main Hub */}
                    <g transform="translate(180, 120)">
                      <circle r="16" fill="#722f37" fillOpacity="0.3" className="animate-ping" />
                      <circle r="10" fill="#722f37" stroke="#e8dcc6" strokeWidth="2" />
                      <circle r="4" fill="#e8dcc6" />
                      <text x="14" y="4" fill="#e8dcc6" fontSize="11" fontWeight="700">Guwahati (HQ Hub)</text>
                    </g>

                    {/* Shillong */}
                    <g transform="translate(120, 160)">
                      <circle r="6" fill="#b7a891" />
                      <text x="-65" y="4" fill="#fff" fontSize="10" opacity="0.8">Shillong</text>
                    </g>

                    {/* Kaziranga */}
                    <g transform="translate(260, 90)">
                      <circle r="6" fill="#b7a891" />
                      <text x="12" y="4" fill="#fff" fontSize="10" opacity="0.8">Kaziranga</text>
                    </g>

                    {/* Tezpur */}
                    <g transform="translate(220, 60)">
                      <circle r="5" fill="#722f37" />
                      <text x="-45" y="-6" fill="#fff" fontSize="9" opacity="0.7">Tezpur</text>
                    </g>

                    {/* Jorhat / Dibrugarh */}
                    <g transform="translate(290, 140)">
                      <circle r="5" fill="#722f37" />
                      <text x="10" y="4" fill="#fff" fontSize="9" opacity="0.7">Dibrugarh</text>
                    </g>
                  </svg>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[11px] text-white/60">
                  <span>Pan-India Expansion Roadmap</span>
                  <span className="text-champagne font-bold">Phase 1: Live</span>
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
          11
        </span>
      </div>
    </section>
  );
}
