import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/content';
import { Button } from '../ui/Button';
import { LineReveal } from '../animations/Reveal';

export function FinalCTASection() {
  return (
    <section
      className="pt-20 pb-16 lg:pt-28 lg:pb-20 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #722f37 0%, #612830 18%, #4e2027 36%, #3b1a20 54%, #2b161a 70%, #1f1616 84%, #1a1715 95%, #1a1715 100%)',
      }}
    >
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      {/* Background pattern with bottom fade mask */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent_92%)]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50,300 C200,200 500,400 720,300 S1100,150 1300,280 S1500,400 1600,350"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-50,400 C300,300 600,500 820,380 S1000,250 1200,350 S1400,450 1550,400"
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="container-editorial relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-champagne text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            <span>Start Your Next Group Story</span>
          </div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8"
          >
            <h2
              className="text-[clamp(2.25rem,5vw,4.25rem)] font-bold tracking-tight text-white leading-[1.15] mb-2"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Your people. Your plans.
            </h2>
            <h2
              className="text-[clamp(2.25rem,5vw,4.25rem)] font-bold tracking-tight text-champagne leading-[1.15]"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              One better way to get there.
            </h2>
          </motion.div>

          {/* Supporting */}
          <motion.p
            className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-xl mx-auto font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Say goodbye to endless phone calls and hidden return mileage disputes. Make group transportation seamless with Drisha.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              href={siteConfig.consumerAppLink}
              variant="secondary"
              size="lg"
              rounded="full"
              className="gap-2.5 shadow-xl shadow-black/20"
            >
              Plan Your Journey
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/partner"
              variant="outline-white"
              size="lg"
              rounded="full"
              className="gap-2"
            >
              Become a Fleet Partner
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Oversized section watermark with fade mask */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.04] [mask-image:linear-gradient(to_bottom,black_40%,transparent_90%)]">
        <span
          className="text-[16rem] font-extrabold leading-none text-white"
          style={{ fontFamily: 'var(--font-family-heading)' }}
        >
          12
        </span>
      </div>
    </section>
  );
}
