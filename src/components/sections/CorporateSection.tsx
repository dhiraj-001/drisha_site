import { ArrowRight } from 'lucide-react';
import { corporateUseCases } from '../../data/content';
import { Reveal } from '../animations/Reveal';
import { Button } from '../ui/Button';

export function CorporateSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Visual Card */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#211e1c] via-[#2a2624] to-[#171514] text-white p-8 lg:p-10 rounded-2xl border border-warm-sand/30 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-champagne font-bold block">Enterprise Mobility</span>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>
                        Corporate & Events
                      </h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-burgundy/40 text-champagne font-semibold border border-burgundy/60">
                      SLA Guaranteed
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <div className="text-xs font-bold text-champagne mb-1">Single Dedicated Coordinator</div>
                      <p className="text-[11px] text-white/60">Direct liaison handling route schedule, driver briefings, and itinerary synchronization.</p>
                    </div>

                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <div className="text-xs font-bold text-champagne mb-1">GST Compliant Enterprise Billing</div>
                      <p className="text-[11px] text-white/60">Itemized 3-leg receipts with input tax credit eligibility and flexible PO options.</p>
                    </div>

                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                      <div className="text-xs font-bold text-champagne mb-1">Fleet Standby Guarantee</div>
                      <p className="text-[11px] text-white/60">Dedicated backup vehicle assigned to high-stakes conferences and VIP movements.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                    <span>Tech Offsites</span>
                    <span>•</span>
                    <span>Annual Galas</span>
                    <span>•</span>
                    <span>Delegate Convoys</span>
                  </div>
                </div>

                {/* Decorative frame offset */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-warm-sand/30 -z-10" />
              </div>
            </Reveal>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label text-burgundy font-semibold">Corporate & Events</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Moving teams.<br />Connecting moments.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-taupe leading-relaxed mb-8 max-w-xl">
                Drisha simplifies organizing transportation for groups — whether it's a corporate offsite to Meghalaya, annual company convention, wedding guest shuttles, or airport delegate transfers.
              </p>
            </Reveal>

            {/* Use Cases */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {corporateUseCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3 p-3 rounded-xl bg-champagne/40 border border-warm-sand/30">
                    <div className="w-2 h-2 bg-burgundy rounded-full flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-charcoal/90">{useCase}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <Button href="/corporate" size="lg" variant="outline" className="gap-2">
                Discuss Your Requirements
                <ArrowRight size={18} />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Oversized section number */}
      <div className="absolute -right-4 top-8 select-none pointer-events-none opacity-[0.04]">
        <span
          className="text-[16rem] font-extrabold leading-none text-charcoal"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          10
        </span>
      </div>
    </section>
  );
}
