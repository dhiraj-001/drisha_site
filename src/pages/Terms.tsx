import { Reveal } from '../components/animations/Reveal';

export default function Terms() {
  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20">
      <div className="container-narrow">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-burgundy" />
            <span className="section-label">Terms of Service</span>
          </div>
          <h1
            className="text-3xl lg:text-5xl font-bold tracking-tight text-charcoal mb-3"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Terms and Conditions
          </h1>
          <p className="text-taupe text-sm mb-8">
            Last updated: October 2026 • Applicable to all travellers, organizers, and partner fleets
          </p>
        </Reveal>

        <div className="prose prose-neutral max-w-none text-charcoal/90 space-y-8 text-base leading-relaxed">
          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              By accessing the Drisha Mobility website, downloading our mobile applications, or engaging our group transport coordination platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use Drisha services.
            </p>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              2. Nature of Platform Services
            </h2>
            <p className="text-taupe text-sm leading-relaxed mb-3">
              Drisha Mobility operates a technology platform connecting individual, corporate, and event organizers with independent licensed fleet operators and professional commercial drivers. Drisha facilitates:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-taupe text-sm leading-relaxed">
              <li>Discovery and matching of appropriately sized group transit vehicles (vans, mini-buses, standard buses, large coaches).</li>
              <li>Transparent multi-leg fare calculation including Leg A (Garage to Pickup), Leg B (Pickup to Destination), and Leg C (Destination to Garage).</li>
              <li>Telemetry journey tracking links and electronic ticketing.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              3. Transparent Fare Structure & Payment Terms
            </h2>
            <p className="text-taupe text-sm leading-relaxed mb-3">
              Drisha guarantees clear pricing prior to booking confirmation. Total fares comprise:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-taupe text-sm leading-relaxed">
              <li>Base daily vehicle charter fees and covered standard mileage allowances.</li>
              <li>Itemized dead mileage (Legs A and C) based on depot location and route geometry.</li>
              <li>Driver night/daily allowances, toll estimates, and applicable state motor transit taxes.</li>
              <li>Any excess kilometers or overtime hours requested beyond the confirmed itinerary will be billed according to the agreed hourly/kilometer rate card.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              4. Cancellations, Rescheduling & Refunds
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              Cancellations made more than 48 hours prior to scheduled Leg A vehicle dispatch are eligible for a full refund minus nominal processing charges. Cancellations within 24 to 48 hours are subject to a standard booking hold fee. Detailed cancellation schedules for large fleet blocks (multiple buses) are specified in individual corporate service agreements.
            </p>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              5. Passenger Safety & Vehicle Conduct
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              Passengers are required to adhere to all applicable road safety regulations, seatbelt mandates, and passenger conduct guidelines under the Motor Vehicles Act. Carrying prohibited or hazardous substances, unlawful overloading, or inappropriate conduct toward commercial drivers may result in immediate trip termination without refund.
            </p>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              6. Fleet Partner & Operator Commitments
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              Fleet partners registered on Drisha agree to maintain all vehicle permits, commercial comprehensive insurance, fitness certificates, and pollution clearances in current valid standing. Operators guarantee that assigned drivers hold valid commercial driving licenses and observe professional driving decorum.
            </p>
          </section>

          <section className="bg-white p-8 border border-warm-sand/25">
            <h2 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
              7. Governing Law & Jurisdiction
            </h2>
            <p className="text-taupe text-sm leading-relaxed">
              These terms are governed by the laws of India. Any legal disputes arising in relation to platform use or mobility bookings shall be subject to the exclusive jurisdiction of the competent courts in Guwahati, Assam.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
