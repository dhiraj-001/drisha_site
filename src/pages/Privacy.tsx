import { Reveal } from '../components/animations/Reveal';

export default function Privacy() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-20">
      <div className="container-narrow">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-burgundy" />
            <span className="section-label">Legal & Compliance</span>
          </div>
          <h1
            className="text-3xl lg:text-5xl font-bold tracking-tight text-charcoal mb-3"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-taupe text-sm mb-8">
            Last updated: October 2026 • Effective Date: October 2026
          </p>
        </Reveal>

        <div className="prose prose-neutral max-w-none text-charcoal/90 space-y-8 text-base leading-relaxed">
          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              1. Introduction
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              Drisha Mobility ("Drisha", "we", "us", or "our") respects your privacy and is committed to protecting the personal data of our travellers, organizers, fleet partners, and website visitors. This Privacy Policy describes how we collect, store, process, and protect your information when you use our website, consumer mobile applications, partner portals, and related mobility services.
            </p>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-taupe text-sm leading-relaxed">
              <li><strong>Contact & Identity Data:</strong> Full name, telephone number, business affiliation, and email address when submitting inquiries or creating an account.</li>
              <li><strong>Trip & Booking Information:</strong> Pickup locations, destinations, intermediate stops, travel dates, passenger counts, and journey notes.</li>
              <li><strong>Geolocation & Telemetry Data:</strong> Real-time GPS location of active vehicles during trip fulfillment for safety and tracking link generation.</li>
              <li><strong>Fleet Partner Records:</strong> Vehicle registration certificates, permits, fitness certificates, commercial insurance documents, and driver identification records for fleet verification.</li>
              <li><strong>Technical & Usage Data:</strong> IP addresses, browser types, interaction logs, and referral headers collected anonymously to maintain system security and optimize performance.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              3. Purpose and Legal Basis of Processing
            </h2>
            <p className="text-taupe text-sm leading-relaxed mb-3">
              We process personal and operational data exclusively for legitimate mobility services, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-taupe text-sm leading-relaxed">
              <li>Executing and coordinating group transport bookings and providing transparent fare breakdowns.</li>
              <li>Generating live journey tracking feeds shareable between organizers and traveling guests.</li>
              <li>Facilitating secure payouts, accounting ledgers, and compliance for partner vehicle operators.</li>
              <li>Responding to customer support tickets, enterprise proposals, and emergency inquiries.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              4. Data Sharing & Third Parties
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              Drisha Mobility does not sell or lease user data to third-party advertisers. Information is disclosed solely to authorized parties necessary to complete journeys (e.g. assigned vehicle operators and licensed commercial drivers), regulatory or law enforcement bodies when mandated by Indian law, and verified cloud infrastructure and payment gateway providers complying with strict encryption protocols.
            </p>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              5. Data Security & Retention
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              We implement industry-standard encryption (TLS/SSL in transit and AES-256 at rest) to safeguard trip records and personal details. We retain data for as long as required to service ongoing bookings, resolve legal disputes, and comply with tax and statutory accounting mandates under Indian jurisdiction.
            </p>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              6. Contact Our Privacy Office
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              If you have inquiries regarding this Privacy Policy or wish to request data correction or deletion, please contact our Data Governance Officer at <span className="font-semibold text-burgundy">privacy@drishamobility.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
