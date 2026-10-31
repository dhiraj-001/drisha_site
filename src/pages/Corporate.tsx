import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Clock, Users, Building, Send } from 'lucide-react';
import { corporateUseCases, siteConfig } from '../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';
import { Button } from '../components/ui/Button';

export default function Corporate() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: 'Corporate Offsite',
    passengers: '20-50',
    date: '',
    origin: '',
    destination: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const corporateBenefits = [
    {
      icon: Users,
      title: 'Dedicated Mobility Coordinator',
      description: 'Single point of contact managing fleet scheduling, driver protocols, and timetable synchronization.',
    },
    {
      icon: Clock,
      title: 'Real-Time Schedule Precision',
      description: 'Live trip tracking links for all delegates and organizers, preventing coordination chaos and wait times.',
    },
    {
      icon: Shield,
      title: 'Vetted Fleet & Premium Vehicles',
      description: 'Strict standards on vehicle condition, hygiene, air conditioning, and professional driver conduct.',
    },
    {
      icon: Building,
      title: 'Transparent Multi-Leg Invoicing',
      description: 'Leg A, Leg B, and Leg C itemized clarity. GST compliant invoicing with flexible enterprise billing terms.',
    },
  ];

  return (
    <div className="pt-36 lg:pt-44 pb-16 lg:pb-24">
      {/* Hero Header */}
      <section className="container-editorial mb-16 lg:mb-24">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-burgundy" />
            <span className="section-label">Enterprise & Event Mobility</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-charcoal leading-[1.08] max-w-4xl mb-6"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Moving teams. Connecting moments. Crafted for scale.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-taupe leading-relaxed max-w-2xl mb-8">
            From regional annual offsites to high-stakes conferences and wedding guest logistics, Drisha delivers end-to-end coordinated transport across Northeast India and beyond.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <a href="#inquiry-form">
              <Button size="lg" rounded="full" className="gap-2">
                Request Corporate Proposal
                <ArrowRight size={18} />
              </Button>
            </a>
            <Button href={siteConfig.consumerAppLink} variant="outline" rounded="full" size="lg">
              Explore Available Fleet
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Value Pillars */}
      <section className="bg-white/80 py-16 lg:py-24 border-y border-warm-sand/25 mb-16 lg:mb-24">
        <div className="container-editorial">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <span className="section-label">Why Leading Organizations Choose Drisha</span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-charcoal mt-3"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Engineered for flawless group logistics
              </h2>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {corporateBenefits.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-ivory/80 rounded-2xl p-8 border border-warm-sand/30 shadow-sm h-full flex flex-col justify-between hover:border-burgundy/40 hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center text-burgundy mb-6">
                      <item.icon size={22} />
                    </div>
                    <h3
                      className="text-lg font-bold text-charcoal mb-3"
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Occasions & Event Types Supported */}
      <section className="container-editorial mb-14 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-burgundy" />
                <span className="section-label">Coverage & Use Cases</span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Tailored execution for every milestone occasion
              </h2>
              <p className="text-taupe leading-relaxed mb-8">
                Every event has unique timeline dynamics, baggage requirements, and attendee expectations. We provide bespoke routing, staging depots, and live dispatching.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4">
                {corporateUseCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-4 p-4 bg-white border border-warm-sand/20 rounded-none hover:border-burgundy/30 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-burgundy flex-shrink-0" />
                    <span className="text-charcoal font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-charcoal to-[#2e2a27] p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy/20 rounded-full blur-3xl pointer-events-none" />
                <span className="text-warm-sand text-xs tracking-[0.2em] uppercase mb-4 block">Case Study Highlight</span>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  Regional Tech Summit — Guwahati to Shillong
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Coordinated 18 premium buses and vans transferring 350+ delegates across airport arrivals, hilltop retreat venues, and networking dinners over 4 days with zero schedule deviations.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
                  <div>
                    <div className="text-2xl font-bold text-champagne" style={{ fontFamily: 'var(--font-family-heading)' }}>350+</div>
                    <div className="text-xs text-white/50 mt-1">Guests Moved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-champagne" style={{ fontFamily: 'var(--font-family-heading)' }}>100%</div>
                    <div className="text-xs text-white/50 mt-1">On-Time Dispatches</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-champagne" style={{ fontFamily: 'var(--font-family-heading)' }}>1 Link</div>
                    <div className="text-xs text-white/50 mt-1">Live Tracking Hub</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="container-editorial">
        <div className="bg-white border border-warm-sand/30 p-6 md:p-10 lg:p-12 relative">
          <div className="max-w-2xl mx-auto text-center mb-8 lg:mb-10">
            <Reveal>
              <span className="section-label">Direct Enterprise Desk</span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Discuss Your Requirements
              </h2>
              <p className="text-taupe text-base">
                Share your journey parameters and our dedicated event transport desk will provide a transparent proposal within 4 hours.
              </p>
            </Reveal>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-6 max-w-lg mx-auto"
            >
              <CheckCircle2 size={64} className="text-burgundy mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
                Inquiry Received
              </h3>
              <p className="text-taupe leading-relaxed mb-8">
                Thank you, {formData.name || 'there'}. Our enterprise coordinator will review your requirements and reach out via {formData.email || 'your email'} shortly.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priyanshu Sharma"
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Corp / Private Family"
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priyanshu@acme.com"
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  >
                    <option value="Corporate Offsite">Corporate Offsite / Retreat</option>
                    <option value="Conference / Summit">Conference / Summit</option>
                    <option value="Wedding / Celebration">Wedding / Large Celebration</option>
                    <option value="Delegation Airport Logistics">Delegation Airport Logistics</option>
                    <option value="Other">Other Custom Requirement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Expected Passenger Count
                  </label>
                  <select
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  >
                    <option value="10-25">10 – 25 Guests</option>
                    <option value="25-50">25 – 50 Guests</option>
                    <option value="50-100">50 – 100 Guests</option>
                    <option value="100-250">100 – 250 Guests</option>
                    <option value="250+">250+ Guests (Multi-vehicle)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Target Date / Window
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Origin / Pickup City
                  </label>
                  <input
                    type="text"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="e.g. Guwahati"
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Destination City / Venue
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Shillong / Kaziranga"
                    className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                  Additional Details or Special Preferences
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Outline any special requirements, luggage needs, multi-day itineraries, or multiple pickup points..."
                  className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm transition-colors"
                />
              </div>

              <div className="pt-4 text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12 gap-2">
                  Send Proposal Request
                  <Send size={18} />
                </Button>
                <p className="text-xs text-taupe mt-3">
                  No commitment required. We respect your confidentiality.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
