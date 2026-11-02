import { useState } from 'react';
import {
  ArrowRight,
  Truck,
  UserCheck,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  Compass,
  Wallet,
  Clock,
  Briefcase,
} from 'lucide-react';
import {
  partnerFeatures,
  driverFeatures,
  partnerOnboardingSteps,
  driverOnboardingSteps,
  siteConfig,
} from '../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../components/animations/Reveal';
import { Button } from '../components/ui/Button';

export default function Partners() {
  const [activeTab, setActiveTab] = useState<'all' | 'owners' | 'drivers'>('all');

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 bg-[#1f1d1b] text-white relative overflow-hidden border-b border-white/10">
        <div className="container-editorial relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-champagne" />
              <span className="section-label text-champagne font-semibold tracking-wider">
                Drisha Partner Ecosystem • Fleet Owners & Drivers
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight leading-[1.08] max-w-4xl"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Your fleet. Your driving skills.<br />
              <span className="text-champagne">Connected.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-white/70 mt-6 max-w-2xl leading-relaxed font-normal">
              Join the Drisha Partner network. Whether you manage a fleet of Tempo Travellers and buses or you're a certified commercial driver looking for lucrative driving contracts, our unified partner platform connects you directly to high-value group journeys.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={siteConfig.partnerAppLink} size="lg" rounded="full" className="gap-2.5">
                Download Partner App
                <ArrowRight size={18} />
              </Button>
              <Button href="#drivers" variant="outline-white" size="lg" rounded="full">
                Driver Registration & Contracts
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="text-champagne hover:text-white">
                Contact Depot Desk
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Background decoration */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-5"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-50,300 C300,200 600,400 900,300 S1200,200 1500,300"
            stroke="#fff"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </section>

      {/* Two Dedicated Tracks: Fleet Owners & Professional Drivers */}
      <section className="py-16 lg:py-24 bg-ivory border-b border-warm-sand/30">
        <div className="container-editorial">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne text-burgundy text-xs font-bold uppercase tracking-wider mb-4 border border-warm-sand/30">
                <Briefcase size={14} />
                <span>Dual Partner Pathways</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-4"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Two ways to partner with Drisha.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-taupe leading-relaxed">
                Both roles are seamlessly supported inside the single <strong>Drisha Partner App</strong>. Choose the pathway that matches your business model.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Track 1: Fleet Owners */}
            <div id="fleet" className="scroll-mt-24">
              <Reveal>
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-warm-sand/40 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/5 rounded-bl-[4rem] pointer-events-none" />
                  
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center font-bold text-xl mb-6">
                      <Truck size={28} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Track 01 • Vehicle Owners</span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-charcoal mt-1 mb-4"
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      Fleet Owners & Operators
                    </h3>
                    <p className="text-sm sm:text-base text-taupe leading-relaxed mb-6">
                      Have minibuses, Tempo Travellers, or full-size luxury buses? Monetize your fleet by plugging directly into confirmed consumer, corporate, and wedding charters.
                    </p>

                    <div className="space-y-3 pt-2 pb-6 border-t border-warm-sand/20">
                      {[
                        'Register unlimited vehicles with photo galleries',
                        'Set custom rate cards with dead-mileage safeguards',
                        'Assign verified drivers from your depot or Drisha pool',
                        'T+2 automated settlement for 3-leg journey totals',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-burgundy mt-1 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-charcoal/80 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-warm-sand/20 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-taupe font-medium">For vehicle fleet owners</span>
                    <Button href={siteConfig.partnerAppLink} rounded="full" size="md" className="gap-2">
                      Register Fleet
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Track 2: Professional Drivers */}
            <div id="drivers" className="scroll-mt-24">
              <Reveal delay={0.1}>
                <div className="bg-gradient-to-br from-[#24211f] to-[#161413] text-white rounded-3xl p-8 sm:p-10 border border-warm-sand/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/10 rounded-bl-[4rem] pointer-events-none" />

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-champagne/20 text-champagne flex items-center justify-center font-bold text-xl mb-6">
                      <UserCheck size={28} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-champagne">Track 02 • Certified Drivers</span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-4"
                      style={{ fontFamily: 'var(--font-family-heading)' }}
                    >
                      Commercial Drivers
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                      Don't own a vehicle? You don't need one. Register yourself as a certified commercial driver in the Partner App and receive assigned driving contracts for high-paying regional trips.
                    </p>

                    <div className="space-y-3 pt-2 pb-6 border-t border-white/10">
                      {[
                        'Direct vehicle driving contracts matched to your license',
                        'Zero vehicle ownership or EMIs required',
                        'Live duty status toggle (Available / On-Trip / Off-Duty)',
                        'Guaranteed driver daily allowances & outstation bonuses',
                        'Direct dispatches with GPS turn-by-turn routing',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-white/90 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-champagne/80 font-medium">Available in Drisha Partner App</span>
                    <Button href={siteConfig.partnerAppLink} variant="secondary" rounded="full" size="md" className="gap-2">
                      Register as Driver
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-warm-sand/30">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-burgundy" />
              <span className="section-label text-burgundy font-semibold">Platform Capabilities</span>
            </div>
            <h2
              className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-12"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Engineered for fleet operators & verified drivers.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fleet Capabilities */}
            <div className="bg-ivory/60 rounded-3xl p-6 sm:p-8 border border-warm-sand/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center font-bold">
                  <Truck size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    Fleet Operator Suite
                  </h3>
                  <p className="text-xs text-taupe">Everything to digitize vehicles & maximize daily utilization</p>
                </div>
              </div>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.04}>
                {partnerFeatures.map((feature, idx) => (
                  <StaggerItem key={feature}>
                    <div className="p-3.5 bg-white rounded-xl border border-warm-sand/20 shadow-2xs h-full flex items-start gap-2.5">
                      <span className="text-xs font-bold text-burgundy font-mono mt-0.5">0{idx + 1}</span>
                      <span className="text-xs text-charcoal/80 font-medium leading-snug">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Driver Capabilities */}
            <div className="bg-champagne/40 rounded-3xl p-6 sm:p-8 border border-warm-sand/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-champagne text-burgundy flex items-center justify-center font-bold">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    Commercial Driver Suite
                  </h3>
                  <p className="text-xs text-taupe">Everything to receive driving contracts with zero vehicle capital</p>
                </div>
              </div>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.04}>
                {driverFeatures.map((feature, idx) => (
                  <StaggerItem key={feature}>
                    <div className="p-3.5 bg-white rounded-xl border border-warm-sand/20 shadow-2xs h-full flex items-start gap-2.5">
                      <span className="text-xs font-bold font-mono mt-0.5 text-amber-800">0{idx + 1}</span>
                      <span className="text-xs text-charcoal/80 font-medium leading-snug">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive: Driver Contracts & Registration */}
      <section className="py-20 lg:py-28 bg-champagne border-b border-warm-sand/30">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Driver Details */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-px bg-burgundy" />
                  <span className="section-label text-burgundy font-semibold">Driver Opportunity</span>
                </div>
                <h2
                  className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  Drive with Drisha.<br />
                  <span className="text-burgundy">Get vehicle contracts on demand.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base sm:text-lg text-taupe leading-relaxed mb-6 font-normal">
                  In the traditional market, commercial drivers often struggle with inconsistent trip work or the heavy financial burden of purchasing their own bus or Tempo Traveller.
                </p>
                <p className="text-base sm:text-lg text-taupe leading-relaxed mb-8 font-normal">
                  With the <strong>Drisha Partner App</strong>, you can sign up as an independent commercial driver. Verified fleet operators and depot managers assign their vehicles to you for confirmed outstation contracts, corporate shuttles, and tourism charters.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white border border-warm-sand/30 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-burgundy/10 text-burgundy">
                        <Wallet size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-charcoal">Guaranteed Allowances</h4>
                    </div>
                    <p className="text-xs text-taupe leading-relaxed">
                      Every trip includes a locked driver allowance plus outstation night charges deposited straight to your account.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-warm-sand/30 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                        <Clock size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-charcoal">Duty Status Control</h4>
                    </div>
                    <p className="text-xs text-taupe leading-relaxed">
                      Toggle your duty status between Available, On-Trip, or Off-Duty right from your phone home screen.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-warm-sand/30 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-champagne text-burgundy">
                        <ShieldCheck size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-charcoal">Verified Vehicles</h4>
                    </div>
                    <p className="text-xs text-taupe leading-relaxed">
                      Drive certified, insured, and permit-ready vehicles maintained by audited fleet owners.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-warm-sand/30 shadow-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-charcoal/10 text-charcoal">
                        <Compass size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-charcoal">Live Navigation</h4>
                    </div>
                    <p className="text-xs text-taupe leading-relaxed">
                      Receive complete pickup coordinates, passenger contact links, and route guidance inside the app.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button href={siteConfig.partnerAppLink} size="lg" rounded="full" className="gap-2">
                    Register as a Driver in Partner App
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: Driver Onboarding & Requirements Card */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand/40 shadow-lg">
                  <div className="flex items-center gap-3 pb-6 border-b border-warm-sand/20 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center font-bold">
                      <FileCheck2 size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                        Driver Verification Requirements
                      </h3>
                      <p className="text-xs text-taupe">Everything needed to get approved in the Drisha Partner App</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-champagne/40 border border-warm-sand/20">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <span className="text-xs font-bold text-charcoal block">Commercial Driving License (DL)</span>
                        <p className="text-[11px] text-taupe mt-0.5">
                          Valid Commercial / Transport / Heavy Passenger Vehicle endorsement from your regional RTO.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-champagne/40 border border-warm-sand/20">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <span className="text-xs font-bold text-charcoal block">Identity Proof (Aadhaar / Voter ID)</span>
                        <p className="text-[11px] text-taupe mt-0.5">
                          Standard government-issued ID for identity verification and secure bank settlement.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-champagne/40 border border-warm-sand/20">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <span className="text-xs font-bold text-charcoal block">Driving Experience & Clean Record</span>
                        <p className="text-[11px] text-taupe mt-0.5">
                          Minimum 2 years of commercial driving experience on minibuses, Tempo Travellers, or heavy buses.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-champagne/40 border border-warm-sand/20">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <span className="text-xs font-bold text-charcoal block">Smartphone with Drisha Partner App</span>
                        <p className="text-[11px] text-taupe mt-0.5">
                          Android or iOS smartphone to receive contracts, update duty status, and view trip earnings.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Driver Role Indicator inside App */}
                  <div className="p-4 rounded-2xl bg-[#1f1d1b] text-white">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-champagne font-bold uppercase tracking-wider text-[10px]">App Feature Preview</span>
                      <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                        Partner App v1.0.0
                      </span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      "When you register in Drisha Partner, simply choose <strong>Driver</strong> as your primary role during onboarding. Once your license is verified, fleet owners in your region can assign you contracts directly."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Steps: Toggleable or Dual View */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Reveal>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-10 h-px bg-burgundy" />
                <span className="section-label text-burgundy font-semibold">Step-by-Step Onboarding</span>
                <div className="w-10 h-px bg-burgundy" />
              </div>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-charcoal leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Simple, transparent sign-up.
              </h2>
            </Reveal>

            {/* Role Filter Tabs */}
            <div className="inline-flex p-1.5 rounded-full bg-warm-sand/30 border border-warm-sand/40 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-burgundy text-white shadow-xs'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                All Tracks
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('owners')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'owners'
                    ? 'bg-burgundy text-white shadow-xs'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                Fleet Owners
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('drivers')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'drivers'
                    ? 'bg-burgundy text-white shadow-xs'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                Commercial Drivers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fleet Owner Steps */}
            {(activeTab === 'all' || activeTab === 'owners') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand/30 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center font-bold text-sm">
                    <Truck size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      Fleet Owner Track
                    </h3>
                    <p className="text-xs text-taupe">From vehicle registration to automated booking dispatches</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {partnerOnboardingSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-2xl bg-ivory/60 border border-warm-sand/20 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-charcoal mb-0.5">{step.title}</h4>
                        <p className="text-xs text-taupe leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Driver Steps */}
            {(activeTab === 'all' || activeTab === 'drivers') && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand/30 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-champagne text-burgundy flex items-center justify-center font-bold text-sm">
                    <UserCheck size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      Commercial Driver Track
                    </h3>
                    <p className="text-xs text-taupe">From license verification to active vehicle driving contracts</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {driverOnboardingSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-2xl bg-ivory/60 border border-warm-sand/20 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-champagne text-burgundy flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-charcoal mb-0.5">{step.title}</h4>
                        <p className="text-xs text-taupe leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partner App Dual Showcase (Interactive Fleet & Driver Hub) */}
      <section className="py-20 lg:py-28 bg-[#1f1d1b] text-white">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/20 text-champagne text-xs font-bold uppercase tracking-wider mb-4 border border-champagne/30">
                <Truck size={15} />
                <span>Drisha Partner App Hub</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1] mb-4"
                style={{ fontFamily: 'var(--font-family-heading)' }}
              >
                Fleet command & driver contracts in one app.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                The Drisha Partner app intelligently adapts based on your role. Fleet owners manage assets and pricing, while verified drivers receive driving contracts and real-time trip dispatches.
              </p>
            </Reveal>
          </div>

          {/* Interactive Command Center & Driver View Preview Card */}
          <Reveal delay={0.3}>
            <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#272320] to-[#151312] text-white p-6 sm:p-10 shadow-2xl border border-white/10">
              {/* Card Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-burgundy flex items-center justify-center font-bold text-white text-sm shadow-sm">
                    DP
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      Drisha Partner Command & Driver Portal
                    </h3>
                    <p className="text-xs text-champagne/80 font-mono">Unified Mobile Ecosystem • Regional Mobility Desk</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                    Live Dispatch & Contract Engine
                  </span>
                </div>
              </div>

              {/* Side-by-side: Fleet Owner View + Driver Contract View */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {/* Fleet Owner Mode */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-champagne">
                        Fleet Owner Mode
                      </span>
                      <span className="text-[10px] bg-champagne/20 text-champagne px-2 py-0.5 rounded font-mono">
                        Active Fleet: 6
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center text-xs">
                        <div>
                          <div className="font-bold text-white">Tempo Traveller 17S (Luxury)</div>
                          <div className="text-[10px] text-white/60">Assigned Driver: Rajesh Bora</div>
                        </div>
                        <span className="text-emerald-400 font-mono font-bold text-xs">₹6,400</span>
                      </div>

                      <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center text-xs">
                        <div>
                          <div className="font-bold text-white">32S Luxury Coach</div>
                          <div className="text-[10px] text-white/60">Assigned Driver: Dipen Barman</div>
                        </div>
                        <span className="text-emerald-400 font-mono font-bold text-xs">₹18,500</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Owners configure custom vehicle rate-cards (base rate, dead mileage Legs A & C), monitor live telematics, and assign trips to verified drivers.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs">
                    <span className="text-white/60">Weekly Payout Cycle</span>
                    <span className="text-emerald-400 font-bold">Automated T+2 Bank Transfer</span>
                  </div>
                </div>

                {/* Driver Mode (New Focus) */}
                <div className="bg-white/5 rounded-2xl p-5 border border-emerald-500/20 bg-gradient-to-br from-white/5 to-emerald-950/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                        Driver Contract Mode
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                        Duty Status: AVAILABLE
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-white">Active Contract #DRV-842</span>
                          <span className="text-[10px] bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded">
                            Dispatched
                          </span>
                        </div>
                        <div className="text-[11px] text-white/80">Vehicle: Force Urbania 12S (AS 01 ED 9912)</div>
                        <div className="text-[11px] text-champagne mt-1">Route: Guwahati ➔ Shillong ➔ Cherrapunji (3 Days)</div>
                        <div className="mt-2 pt-2 border-t border-white/10 flex justify-between text-[11px]">
                          <span className="text-white/60">Trip Driver Allowance</span>
                          <span className="text-emerald-400 font-bold font-mono">₹3,600 + Food/Night</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Drivers view assigned contracts, passenger contact info, and route details. No vehicle purchase or loans required.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs">
                    <span className="text-white/60">Driver Settlement</span>
                    <span className="text-champagne font-bold">Guaranteed Per-Trip Ledger</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Inside Card */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-white/60">
                  Ready to register as a fleet partner or get commercial driving contracts?
                </div>
                <div className="flex items-center gap-3">
                  <Button href={siteConfig.partnerAppLink} size="sm" rounded="full" className="gap-2">
                    Download Partner App
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Driver FAQ Section */}
      <section className="py-16 lg:py-24 bg-champagne border-t border-warm-sand/30">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <span className="section-label text-burgundy font-semibold mb-2 block">Driver Questions</span>
                <h2
                  className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-charcoal leading-[1.1]"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  Frequently asked driver questions.
                </h2>
              </div>
            </Reveal>

            <div className="space-y-4">
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl p-6 border border-warm-sand/30 shadow-xs">
                  <h3 className="text-base font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    Do I need to own a bus or vehicle to register as a driver?
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe leading-relaxed">
                    No! You do not need to own a vehicle. Commercial drivers can register on the Drisha Partner App with just their valid commercial driving license (DL). Verified fleet owners assign their vehicles to you for confirmed journey contracts.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-white rounded-2xl p-6 border border-warm-sand/30 shadow-xs">
                  <h3 className="text-base font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    How do driver payouts and allowances work?
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe leading-relaxed">
                    Every group journey booked on Drisha includes a transparent driver allowance (food and lodging per-diem for outstation trips) plus guaranteed contract compensation. All earnings are logged directly into your Partner App ledger and disbursed without deduction.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white rounded-2xl p-6 border border-warm-sand/30 shadow-xs">
                  <h3 className="text-base font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    How do I switch between Available and Off-Duty?
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe leading-relaxed">
                    In the Drisha Partner App, your home screen has a prominent duty status switch: <strong>Available</strong>, <strong>On-Trip</strong>, and <strong>Off-Duty</strong>. You only receive new trip contract assignments when you set yourself to Available.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="bg-white rounded-2xl p-6 border border-warm-sand/30 shadow-xs">
                  <h3 className="text-base font-bold text-charcoal mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    What types of vehicles can I drive?
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe leading-relaxed">
                    Depending on your commercial license endorsement, you can receive contracts for 12-17 seater Tempo Travellers, Force Urbania luxury vans, 26-seater minibuses, and 35-50 seater luxury coaches for corporate and tourist groups.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#722f37] to-[#4c1e24] text-white text-center">
        <div className="container-editorial">
          <Reveal>
            <h2
              className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Start earning with Drisha today.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg text-champagne/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join as a fleet owner to maximize vehicle utilization, or register as a commercial driver to receive high-paying driving contracts. All within the Drisha Partner App.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href={siteConfig.partnerAppLink} variant="secondary" size="lg" rounded="full" className="gap-2">
                Download Partner App
                <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="outline-white" size="lg" rounded="full">
                Talk to Depot Operations
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
