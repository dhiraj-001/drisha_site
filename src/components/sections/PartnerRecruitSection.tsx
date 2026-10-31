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
                Have a fleet?<br />
                Let's put it to work.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-taupe leading-relaxed mb-8">
                Join Drisha as a fleet partner and connect your vehicles to a growing network of group transportation demand. Manage your fleet digitally and grow your business.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-3 mb-10">
                {[
                  'Digital fleet onboarding',
                  'Vehicle information management',
                  'Rate configuration',
                  'Availability management',
                  'Driver and booking coordination',
                  'Connected booking and earnings workflows',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-burgundy rounded-full flex-shrink-0" />
                    <span className="text-sm text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <Button href="/partner" size="lg" className="gap-2">
                Join as a Partner
                <ArrowRight size={18} />
              </Button>
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
