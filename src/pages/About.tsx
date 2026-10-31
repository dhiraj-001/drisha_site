import { ArrowRight, Compass, Heart, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { siteConfig } from '../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';
import { Button } from '../components/ui/Button';

export default function About() {
  const values = [
    {
      icon: Compass,
      title: 'Radical Transparency',
      description:
        'We demystify group transport pricing. Our clear 3-leg model ensures travellers know exactly what they pay for, and fleet partners receive fair compensation for every kilometre travelled.',
    },
    {
      icon: Sparkles,
      title: 'Dignified Travel Experience',
      description:
        'Group journeys should elevate occasions, not cause logistical anxiety. We curate vehicle standards, punctuality, and guest comfort so the journey itself becomes a cherished memory.',
    },
    {
      icon: Heart,
      title: 'True Fleet Partnership',
      description:
        'Fleet owners and drivers are the heartbeat of regional mobility. Drisha provides them modern digital tools, predictable earnings, and transparent ledgers rather than exploitative commissions.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Connected Peace of Mind',
      description:
        'Every vehicle is vetted, every journey is tracked in real-time, and live route status is shareable with family and guests with zero software installation required.',
    },
  ];

  const milestones = [
    {
      year: 'The Origin',
      title: 'Recognizing the Friction in Group Travel',
      description:
        'Organizing a family wedding or company offsite required countless phone calls, uncertain quotes, and worrying whether the vehicle would actually show up in good condition.',
    },
    {
      year: 'The Architecture',
      title: 'Designing the Connected Mobility Stack',
      description:
        'We architected an integrated platform connecting consumer journey booking with partner fleet management and driver dispatching, anchored by transparent 3-leg pricing.',
    },
    {
      year: 'Northeast India Launch',
      title: 'Rooted in the Gateway of the East',
      description:
        'Starting in Northeast India — a region with incredible scenic routes, thriving tourism, and growing enterprise hubs — Drisha sets a new benchmark for group road travel.',
    },
    {
      year: 'Pan-India Vision',
      title: 'Connecting Journeys Across the Nation',
      description:
        'Expanding systematically across states, bringing reliable group mobility to every celebration, pilgrimage, corporate summit, and adventure.',
    },
  ];

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20">
      {/* Editorial Hero Header */}
      <section className="container-editorial mb-12 lg:mb-16">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-burgundy" />
            <span className="section-label">Our Story & Philosophy</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-charcoal leading-[1.08] max-w-4xl mb-6"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Move Together. Move Better. The story behind Drisha.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-taupe leading-relaxed max-w-3xl mb-6">
            {siteConfig.supportingStatement}
          </p>
        </Reveal>
      </section>

      {/* Brand Manifesto Quote Banner */}
      <section className="bg-charcoal text-white py-14 lg:py-20 relative overflow-hidden mb-14 lg:mb-20">
        <div className="container-editorial relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-warm-sand text-xs tracking-[0.2em] uppercase mb-4 block">
                The Drisha Belief
              </span>
              <blockquote
                className="text-2xl sm:text-3xl lg:text-4xl font-light italic leading-snug text-ivory mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                “Travel is never merely about reaching coordinates on a map. When people travel together, the journey is where shared memories, laughter, and camaraderie truly begin.”
              </blockquote>
              <div className="w-12 h-0.5 bg-burgundy mx-auto" />
            </div>
          </Reveal>
        </div>

        {/* Ambient background accent */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-burgundy/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Core Values */}
      <section className="container-editorial mb-20 lg:mb-28">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-burgundy" />
              <span className="section-label">Guiding Principles</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-charcoal"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Built on empathy, clarity, and enduring respect
            </h2>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((val) => (
            <StaggerItem key={val.title}>
              <div className="bg-white p-8 lg:p-10 border border-warm-sand/25 h-full hover:border-burgundy/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy mb-6">
                  <val.icon size={22} />
                </div>
                <h3
                  className="text-xl font-bold text-charcoal mb-4"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  {val.title}
                </h3>
                <p className="text-taupe leading-relaxed text-sm lg:text-base">
                  {val.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Journey Timeline */}
      <section className="bg-ivory py-14 lg:py-20 border-y border-warm-sand/20 mb-14 lg:mb-20">
        <div className="container-editorial">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
              <span className="section-label">Evolution</span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-charcoal mt-3"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Our path to reshaping group mobility
              </h2>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-8 lg:space-y-10">
            {milestones.map((milestone, idx) => (
              <Reveal key={milestone.title} delay={idx * 0.1}>
                <div className="flex gap-6 lg:gap-10 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      0{idx + 1}
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-px h-20 bg-warm-sand/40 my-2" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-burgundy font-semibold block mb-1">
                      {milestone.year}
                    </span>
                    <h3
                      className="text-xl font-bold text-charcoal mb-2"
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-taupe text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus & Roots */}
      <section className="container-editorial mb-14 lg:mb-20">
        <div className="bg-gradient-to-br from-champagne/40 to-ivory border border-warm-sand/30 p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-burgundy mb-4">
                <MapPin size={20} />
                <span className="section-label text-burgundy">Northeast India & Beyond</span>
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-charcoal mb-4"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Proudly rooted in Northeast India
              </h3>
              <p className="text-taupe text-base leading-relaxed mb-6">
                From Guwahati to Shillong, Kaziranga, Tezpur, and Tawang, we understand the distinct topography, transit patterns, and community spirit of the region. Drisha is building an infrastructure designed for the realities of local roads while delivering international-grade booking and tracking standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/vehicles">Explore Vehicle Fleet</Button>
                <Button href="/partner" variant="outline">Join As Fleet Partner</Button>
              </div>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <div className="inline-block p-8 bg-white border border-warm-sand/30 shadow-sm text-left">
                <div className="text-3xl font-bold text-burgundy mb-1" style={{ fontFamily: 'var(--font-family-heading)' }}>
                  100%
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-4">
                  Commitment to Quality
                </div>
                <p className="text-xs text-taupe leading-relaxed">
                  Every partner depot, driver certification, and vehicle standard is directly audited by our regional operations team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="container-editorial text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Ready to experience group travel the way it should be?
            </h2>
            <div className="flex justify-center gap-4">
              <Button href={siteConfig.consumerAppLink} size="lg" className="gap-2">
                Plan Your Journey
                <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
