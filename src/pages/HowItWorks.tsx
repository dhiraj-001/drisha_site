import { howItWorksSteps, pricingLegs, pricingComponents } from '../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 bg-champagne relative overflow-hidden border-b border-warm-sand/20">
        <div className="container-editorial relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-burgundy" />
              <span className="section-label text-burgundy font-semibold">How It Works</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-charcoal leading-[1.08] max-w-3xl"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              A smarter way to organize group journeys.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-taupe mt-6 max-w-xl leading-relaxed">
              From choosing your occasion to tracking your vehicle in real-time — here's how Drisha brings your group journey together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container-editorial">
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {howItWorksSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="bg-white rounded-2xl p-7 lg:p-10 border border-warm-sand/30 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Step Number */}
                  <div className="lg:col-span-2">
                    <span
                      className="text-4xl lg:text-5xl font-extrabold text-burgundy bg-burgundy/10 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-4">
                    <h3
                      className="text-xl lg:text-2xl font-bold text-charcoal"
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-6">
                    <p className="text-sm sm:text-base text-taupe leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Explanation */}
      <section className="py-20 lg:py-28 bg-[#1f1d1b] text-white border-t border-white/10">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-champagne" />
              <span className="section-label text-champagne font-semibold tracking-wider">Understanding Your Fare</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-6 max-w-2xl"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              The three-leg pricing model.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-12 max-w-xl">
              A group journey involves more than the distance between pickup and destination. Here's how Drisha accounts for the complete vehicle journey.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {pricingLegs.map((leg, index) => (
              <Reveal key={leg.id} delay={0.2 + index * 0.1}>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <span className="text-champagne text-xs tracking-[0.2em] uppercase font-bold block mb-3">
                    {leg.label}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-bold mb-3 text-white"
                    style={{ fontFamily: 'var(--font-family-heading)' }}
                  >
                    {leg.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-xs sm:text-sm">{leg.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Route Diagram */}
          <Reveal delay={0.5}>
            <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              {['GARAGE', 'PICKUP', 'DESTINATION', 'GARAGE'].map((point, i) => (
                <div key={`${point}-${i}`} className="flex items-center w-full md:w-auto justify-between md:justify-start">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${i === 0 || i === 3 ? 'bg-burgundy' : 'bg-champagne'} ring-4 ring-white/10`} />
                    <span className="text-[11px] tracking-wider uppercase font-semibold text-white/70 mt-2 text-center">{point}</span>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:flex items-center mx-4 flex-1">
                      <div className="w-12 h-px bg-white/20" />
                      <span className="text-[10px] text-champagne font-bold px-2 py-0.5 bg-burgundy/40 rounded mx-1">
                        LEG {String.fromCharCode(65 + i)}
                      </span>
                      <div className="w-12 h-px bg-white/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Pricing Components */}
          <Reveal delay={0.6}>
            <div className="mt-12 pt-12 border-t border-white/10">
              <h4 className="text-sm tracking-[0.1em] uppercase text-white/40 mb-8 font-medium">
                Pricing may account for
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pricingComponents.map((comp) => (
                  <div key={comp} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-burgundy rounded-full flex-shrink-0" />
                    <span className="text-sm text-white/60">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
