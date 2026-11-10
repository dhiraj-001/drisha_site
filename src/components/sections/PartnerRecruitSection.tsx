import { ArrowRight } from 'lucide-react';
import { partnerOnboardingSteps } from '../../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../animations/Reveal';
import { Button } from '../ui/Button';

export function PartnerRecruitSection() {
  return (
    <section className="py-20 lg:py-28 bg-champagne relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label">Fleet Partners</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Have a fleet or commercial DL?<br />
                Let's put them to work.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-taupe leading-relaxed mb-8">
                Join Drisha as a fleet owner or professional commercial driver. Monetize your vehicles or get contracts to drive without owning a vehicle — all managed seamlessly inside the Drisha Partner App.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-3 mb-10">
                {[
                  'Digital fleet onboarding & vehicle inventory',
                  'Commercial driver registration with DL verification',
                  'Vehicle driving contract matching & dispatch',
                  'Custom rate configuration with dead-mileage safeguards',
                  'Guaranteed driver allowances & automated payouts',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-burgundy rounded-full flex-shrink-0" />
                    <span className="text-sm text-charcoal/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="#founding-fleet" size="lg" className="gap-2">
                  Pre-Register Your Vehicle
                  <ArrowRight size={18} />
                </Button>
                <Button href="/partner" variant="outline" size="lg">
                  Partner Portal
                </Button>
                <Button href="/partner#drivers" variant="ghost" size="lg">
                  Driver Contracts
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right — Onboarding Steps */}
          <div className="flex items-center">
            <StaggerContainer className="space-y-4 w-full" staggerDelay={0.12}>
              {partnerOnboardingSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="group bg-white/70 hover:bg-white rounded-2xl p-6 border border-warm-sand/30 hover:border-burgundy/40 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-5">
                    {/* Step Number Badge */}
                    <div className="w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy group-hover:bg-burgundy group-hover:text-white flex items-center justify-center font-bold text-base transition-colors duration-300 flex-shrink-0">
                      {step.step}
                    </div>

                    <div>
                      <h3
                        className="text-lg font-bold text-charcoal mb-1"
                        style={{ fontFamily: 'var(--font-family-heading)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-taupe leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* Oversized section number */}
      <div className="absolute right-4 bottom-8 select-none pointer-events-none opacity-[0.04]">
        <span
          className="text-[16rem] font-extrabold leading-none text-charcoal"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          09
        </span>
      </div>
    </section>
  );
}
