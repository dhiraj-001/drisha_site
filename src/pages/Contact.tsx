import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';
import { Reveal } from '../components/animations/Reveal';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactChannels = [
    {
      icon: MessageSquare,
      title: 'Journey & Booking Assistance',
      detail: 'Help with organizing group trips, quote clarifications, or active journey status.',
      email: 'support@drishamobility.com',
      note: 'Available 7 days a week, 7:00 AM – 10:00 PM IST',
    },
    {
      icon: Phone,
      title: 'Fleet & Partner Desk',
      detail: 'For bus operators, vehicle owners, and commercial fleet managers seeking onboarding.',
      email: 'partners@drishamobility.com',
      note: 'Dedicated partner support line & depot onboarding',
    },
    {
      icon: MapPin,
      title: 'Regional Operations Hub',
      detail: 'Northeast Operations Center, Guwahati, Assam, India.',
      email: 'hello@drishamobility.com',
      note: 'Serving Assam, Meghalaya, Arunachal Pradesh & beyond',
    },
  ];

  const faqs = [
    {
      q: 'How does Drisha calculate group trip pricing?',
      a: 'We use a transparent 3-leg pricing model: Leg A (Depot to Pickup), Leg B (Pickup to Destination), and Leg C (Destination back to Depot). All toll estimates, driver allowances, and mileage minimums are clearly itemized before booking.',
    },
    {
      q: 'Do guests need an app to track the vehicle?',
      a: 'No! The trip organizer receives a secure live web link that can be shared via WhatsApp or SMS. Anyone with the link can see the vehicle live on a map with zero download required.',
    },
    {
      q: 'How do I register my fleet or buses with Drisha?',
      a: 'Fleet operators can register through the Partner page or download the Drisha Partner App. Our local team conducts a quick vehicle inspection and assists with rate-card setup.',
    },
    {
      q: 'Can Drisha handle multi-day or outstation itineraries?',
      a: 'Yes. We cater to multi-day corporate retreats, wedding functions across multiple venues, pilgrimages, and inter-state tourism routes.',
    },
  ];

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20">
      {/* Header */}
      <section className="container-editorial mb-10 lg:mb-14">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-burgundy" />
            <span className="section-label">Connect With Us</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-charcoal leading-[1.08] max-w-4xl mb-6"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            We are here to make your group journeys effortless.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-taupe leading-relaxed max-w-2xl">
            Whether you have questions about an upcoming trip, corporate logistics, or joining our partner fleet network, our team is ready to assist.
          </p>
        </Reveal>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="container-editorial mb-14 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <h2
                className="text-2xl font-bold text-charcoal mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Direct Support Desks
              </h2>
            </Reveal>

            {contactChannels.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 0.1}>
                <div className="p-6 bg-white border border-warm-sand/25 hover:border-burgundy/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy flex-shrink-0 mt-1">
                      <channel.icon size={20} />
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-charcoal mb-1"
                        style={{ fontFamily: 'var(--font-family-heading)' }}
                      >
                        {channel.title}
                      </h3>
                      <p className="text-xs text-taupe mb-3 leading-relaxed">
                        {channel.detail}
                      </p>
                      <a
                        href={`mailto:${channel.email}`}
                        className="text-sm font-semibold text-burgundy hover:underline block mb-1"
                      >
                        {channel.email}
                      </a>
                      <span className="text-[11px] text-taupe/80 flex items-center gap-1.5 mt-2">
                        <Clock size={12} />
                        {channel.note}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-warm-sand/30 p-8 lg:p-12 relative">
              <Reveal>
                <h2
                  className="text-2xl font-bold text-charcoal mb-2"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  Send a Message
                </h2>
                <p className="text-taupe text-sm mb-8">
                  Fill out the form below and our team will get back to you within a few business hours.
                </p>
              </Reveal>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-6"
                >
                  <CheckCircle2 size={56} className="text-burgundy mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-taupe text-sm max-w-md mx-auto mb-6">
                    We have received your message, {formData.name}. A Drisha mobility representative will get back to you at {formData.email}.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Note
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Trip Planning">Trip Planning & Quotes</option>
                        <option value="Partner Fleet Onboarding">Partner Fleet Onboarding</option>
                        <option value="Corporate Partnerships">Corporate Partnerships</option>
                        <option value="Feedback & Support">Feedback & Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your trip dates, group requirements, or partner query..."
                      className="w-full px-4 py-3 bg-ivory/60 border border-warm-sand/40 focus:border-burgundy focus:outline-none text-charcoal text-sm"
                    />
                  </div>

                  <div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto px-10 gap-2">
                      Send Message
                      <Send size={18} />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container-editorial">
        <div className="bg-white/60 border border-warm-sand/20 p-8 lg:p-14">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">Quick Answers</span>
            <h2
              className="text-2xl lg:text-3xl font-bold text-charcoal mt-2"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-ivory border border-warm-sand/25">
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle size={18} className="text-burgundy flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-charcoal text-base" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    {faq.q}
                  </h3>
                </div>
                <p className="text-taupe text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
