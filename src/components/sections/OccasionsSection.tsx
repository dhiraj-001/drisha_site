import type { MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { occasions } from '../../data/content';
import { Reveal, StaggerContainer, StaggerItem } from '../animations/Reveal';

/* ------------------------------------------------------------------ */
/* Illustrations — one per occasion.                                  */
/* All illustrations use currentColor so the card controls the tint. */
/* ------------------------------------------------------------------ */

const svgBase = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/**
 * Wedding:
 * Interlocking rings inside a petal mandala.
 */
function WeddingArt() {
  return (
    <svg viewBox="0 0 200 200" {...svgBase} aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="42"
          rx="7"
          ry="22"
          transform={`rotate(${i * 22.5} 100 100)`}
          opacity={i % 2 ? 0.5 : 0.9}
        />
      ))}

      <circle
        cx="100"
        cy="100"
        r="78"
        strokeDasharray="2 5"
        opacity="0.6"
      />

      <circle cx="100" cy="100" r="26" />
      <circle
        cx="100"
        cy="100"
        r="26"
        strokeWidth="0"
        fill="currentColor"
        opacity="0.08"
      />

      {/* Rings */}
      <circle cx="86" cy="104" r="17" strokeWidth="1.6" />
      <circle cx="114" cy="104" r="17" strokeWidth="1.6" />

      {/* Diamond */}
      <path
        d="M86 83 l5 6 -5 6 -5 -6z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Corporate:
 * A timed multi-stop route.
 */
function CorporateArt() {
  return (
    <svg viewBox="0 0 200 150" {...svgBase} aria-hidden="true">
      {[30, 60, 90, 120].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="200"
          y2={y}
          strokeDasharray="1 6"
          opacity="0.5"
        />
      ))}

      {[40, 80, 120, 160].map((x) => (
        <line
          key={x}
          x1={x}
          y1="10"
          x2={x}
          y2="140"
          strokeDasharray="1 6"
          opacity="0.5"
        />
      ))}

      <polyline
        points="20,118 65,86 105,100 150,48 182,38"
        strokeWidth="1.8"
      />

      {[
        [20, 118],
        [65, 86],
        [105, 100],
        [150, 48],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r="6"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <circle
            cx={cx}
            cy={cy}
            r="2.5"
            fill="currentColor"
          />
        </g>
      ))}

      <path
        d="M182 38 V16 l16 5 -16 5"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}

/**
 * Family Getaways:
 * Minimal mountain landscape with a delicate sun and orbit detail.
 * Small composition designed for the upper-right corner.
 */
function HillsArt() {
  return (
    <svg
      viewBox="0 0 160 96"
      className="w-full h-full"
      {...svgBase}
      aria-hidden="true"
    >
      {/* Sun */}
      <circle
        cx="116"
        cy="27"
        r="12"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="none"
      />

      {/* Sun orbit */}
      <circle
        cx="116"
        cy="27"
        r="19"
        strokeDasharray="1 5"
        opacity="0.4"
      />

      {/* Distant mountain */}
      <path
        d="M12 72 L48 38 L67 57 L91 29 L137 72"
        strokeWidth="1.2"
        opacity="0.8"
      />

      {/* Foreground mountain */}
      <path
        d="M24 77 L57 51 L75 66 L99 47 L132 77"
        strokeWidth="1.3"
      />

      {/* Mountain details */}
      <path
        d="M39 47 L48 38 L56 47 M84 38 L91 29 L99 39"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Ground */}
      <path d="M12 82 H142" opacity="0.35" />
    </svg>
  );
}

/**
 * Pilgrimage:
 * Minimal temple architecture with a subtle circular halo.
 * Designed to feel elegant and understated.
 */
function TempleArt() {
  return (
    <svg
      viewBox="0 0 140 100"
      className="w-full h-full"
      {...svgBase}
      aria-hidden="true"
    >
      {/* Outer halo */}
      <circle
        cx="70"
        cy="48"
        r="35"
        strokeDasharray="1.5 5"
        opacity="0.4"
      />

      {/* Inner halo */}
      <circle
        cx="70"
        cy="48"
        r="27"
        opacity="0.35"
      />

      {/* Temple spire */}
      <path d="M70 15 V21" />
      <path d="M63 25 L70 18 L77 25" />

      {/* Roof silhouette */}
      <path
        d="M49 48 L70 29 L91 48"
        strokeWidth="1.4"
      />

      {/* Main structure */}
      <path
        d="M54 48 V73 H86 V48"
        strokeWidth="1.3"
      />

      {/* Entrance */}
      <path
        d="M64 73 V60 A6 6 0 0 1 76 60 V73"
        strokeWidth="1.2"
      />

      {/* Base */}
      <path d="M48 77 H92 M44 82 H96" />

      {/* Decorative detail */}
      <path
        d="M53 48 H87"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * Airport:
 * Minimal aircraft with a curved flight path.
 */
function AirportArt() {
  return (
    <svg
      viewBox="0 0 160 96"
      className="w-full h-full"
      {...svgBase}
      aria-hidden="true"
    >
      {/* Flight path */}
      <path
        d="M13 72 Q76 5 147 57"
        strokeDasharray="3 5"
        strokeWidth="1.2"
        opacity="0.65"
      />

      {/* Origin */}
      <circle
        cx="13"
        cy="72"
        r="3"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="13"
        cy="72"
        r="7"
        opacity="0.4"
      />

      {/* Destination */}
      <circle
        cx="147"
        cy="57"
        r="3"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="147"
        cy="57"
        r="7"
        opacity="0.4"
      />

      {/* Aircraft */}
      <g
        transform="translate(84 28) rotate(20) scale(0.65)"
        fill="currentColor"
        stroke="none"
        opacity="0.9"
      >
        <path d="M0 -17 L4 -3 L22 5 V10 L4 5 L3 17 L8 21 V24 L0 21 L-8 24 V21 L-3 17 L-4 5 L-22 10 V5 L-4 -3 Z" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Card Configuration                                                  */
/* ------------------------------------------------------------------ */

type Size = 'lg' | 'md' | 'sm';

interface CardConfig {
  idx: number;
  span: string;
  size: Size;
  gradient: string;
  border: string;
  glow: string;
  accent: string;
  badge: string;
  meta: string;
  tags: string[];
  art: ReactNode;
  artClass: string;
}

const cards: CardConfig[] = [
  /* 01 — Weddings */
  {
    idx: 0,
    span: 'lg:col-span-7',
    size: 'lg',
    gradient: 'from-[#5a2229] via-[#2d1216] to-[#1a0a0c]',
    border: 'border-burgundy/50',
    glow: 'bg-burgundy/40',
    accent: 'text-champagne',
    badge: 'High Demand',
    meta: '20 – 100+ Guests',
    tags: [
      'Multi-Point Pickup',
      'Decorated Fleets',
      'Luggage Care',
      'Chauffeurs in Formal Attire',
    ],
    art: <WeddingArt />,
    artClass:
      'right-6 top-16 w-56 lg:right-10 lg:top-20 lg:w-80 opacity-30 lg:opacity-35',
  },

  /* 02 — Corporate */
  {
    idx: 1,
    span: 'lg:col-span-5',
    size: 'md',
    gradient: 'from-[#34302c] via-[#1f1d1b] to-[#141312]',
    border: 'border-warm-sand/30',
    glow: 'bg-warm-sand/20',
    accent: 'text-warm-sand',
    badge: 'Corporate',
    meta: '15 – 150 Delegates',
    tags: [
      'GST Invoicing',
      'Precision Timetables',
      'Dedicated Coordinator',
    ],
    art: <CorporateArt />,
    artClass: 'right-4 top-16 w-52 lg:w-64 opacity-35',
  },

  /* 03 — Family Getaways */
  {
    idx: 2,
    span: 'lg:col-span-4',
    size: 'sm',
    gradient: 'from-[#4a4037] to-[#25211e]',
    border: 'border-warm-sand/30',
    glow: 'bg-warm-sand/20',
    accent: 'text-warm-sand',
    badge: '',
    meta: '8 – 26 Guests',
    tags: [
      'Hill Route Experts',
      'Child Friendly',
      'Pushback Recline',
    ],
    art: <HillsArt />,
    artClass:
      'right-6 top-14 w-28 h-20 lg:right-7 lg:top-14 lg:w-32 lg:h-20 opacity-35',
  },

  /* 04 — Pilgrimage */
  {
    idx: 3,
    span: 'lg:col-span-4',
    size: 'sm',
    gradient: 'from-[#5c2a32] to-[#2a1317]',
    border: 'border-burgundy/50',
    glow: 'bg-burgundy/40',
    accent: 'text-champagne',
    badge: '',
    meta: 'Spiritual Circuits',
    tags: [
      'Kamakhya Packages',
      'Senior Care',
      'Multi-day Itinerary',
    ],
    art: <TempleArt />,
    artClass:
      'right-6 top-14 w-28 h-20 lg:right-7 lg:top-14 lg:w-32 lg:h-20 opacity-35',
  },

  /* 05 — Airport Transfers */
  {
    idx: 4,
    span: 'lg:col-span-4',
    size: 'sm',
    gradient: 'from-[#33363b] to-[#18191b]',
    border: 'border-warm-sand/30',
    glow: 'bg-warm-sand/20',
    accent: 'text-warm-sand',
    badge: '',
    meta: 'Flight Synchronized',
    tags: [
      'Luggage Space',
      'Flight Delay Buffer',
      'Fixed Group Rate',
    ],
    art: <AirportArt />,
    artClass:
      'right-6 top-14 w-28 h-20 lg:right-7 lg:top-14 lg:w-32 lg:h-20 opacity-35',
  },
];

/* ------------------------------------------------------------------ */
/* Card Sizing                                                         */
/* ------------------------------------------------------------------ */

const sizing: Record<
  Size,
  {
    height: string;
    pad: string;
    title: string;
    body: string;
    tag: string;
  }
> = {
  lg: {
    height: 'h-[440px] lg:h-[520px]',
    pad: 'p-8 lg:p-10',
    title: 'text-2xl lg:text-4xl',
    body: 'text-sm lg:text-base max-w-lg',
    tag: 'text-[11px] px-3 py-1',
  },
  md: {
    height: 'h-[440px] lg:h-[520px]',
    pad: 'p-8',
    title: 'text-2xl lg:text-3xl',
    body: 'text-sm',
    tag: 'text-[11px] px-3 py-1',
  },
  sm: {
    height: 'h-[400px]',
    pad: 'p-7',
    title: 'text-xl',
    body: 'text-xs',
    tag: 'text-[10px] px-2.5 py-1',
  },
};

/* ------------------------------------------------------------------ */
/* Film Grain                                                           */
/* ------------------------------------------------------------------ */

const grain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

/* ------------------------------------------------------------------ */
/* Occasion Card                                                       */
/* ------------------------------------------------------------------ */

function OccasionCard({ cfg }: { cfg: CardConfig }) {
  const o = occasions[cfg.idx];
  const s = sizing[cfg.size];

  // Cursor spotlight
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      '--mx',
      `${e.clientX - r.left}px`
    );

    e.currentTarget.style.setProperty(
      '--my',
      `${e.clientY - r.top}px`
    );
  };

  return (
    <StaggerItem className={cfg.span}>
      <motion.div
        onMouseMove={onMove}
        whileHover={{ y: -6 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 22,
        }}
        className={`
          group relative
          ${s.height}
          ${s.pad}
          rounded-2xl
          bg-gradient-to-br ${cfg.gradient}
          text-white
          flex flex-col justify-between
          overflow-hidden
          cursor-pointer
          border ${cfg.border}
          shadow-lg
          hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]
          transition-shadow duration-500
        `}
      >
        {/* Film Grain */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: grain }}
        />

        {/* Background Glow */}
        <div
          className={`
            absolute -right-16 -top-16
            w-64 h-64 rounded-full
            ${cfg.glow}
            blur-3xl
            pointer-events-none
            transition-transform duration-700
            group-hover:scale-125
          `}
        />

        {/* Top Hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-sand/70 to-transparent pointer-events-none" />

        {/* Cursor Spotlight */}
        <div
          className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
          style={{
            background:
              'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(232,220,198,0.13), transparent 65%)',
          }}
        />

        {/* Illustration */}
        <div
          className={`
            absolute
            ${cfg.accent}
            ${cfg.artClass}
            pointer-events-none
            transition-all duration-700 ease-out
            group-hover:scale-105
            group-hover:opacity-55
          `}
        >
          {cfg.art}
        </div>

        {/* Top Row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span
            className={`
              inline-flex items-center gap-2
              rounded-full
              bg-black/25
              backdrop-blur-sm
              border border-white/15
              px-3 py-1
              text-xs font-semibold tracking-wider
              ${cfg.accent}
            `}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />

            {o.number}

            {cfg.badge && (
              <span className="text-white/70 font-medium">
                {cfg.badge}
              </span>
            )}
          </span>

          <span className="text-xs text-white/70 font-medium text-right">
            {cfg.meta}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10">
          <h3
            className={`
              ${s.title}
              font-bold
              text-white
              mb-3
              tracking-tight
            `}
            style={{
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            {o.title}
          </h3>

          <p
            className={`
              ${s.body}
              text-white/75
              leading-relaxed
              mb-5
            `}
          >
            {o.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {cfg.tags.map((tag) => (
              <span
                key={tag}
                className={`
                  ${s.tag}
                  inline-flex items-center gap-1.5
                  font-medium
                  rounded-full
                  bg-white/10
                  text-white/90
                  border border-white/10
                  backdrop-blur-sm
                  transition-colors duration-300
                  group-hover:bg-white/15
                `}
              >
                <span
                  className={`
                    w-1 h-1 rounded-full
                    bg-current
                    ${cfg.accent}
                  `}
                />

                {tag}
              </span>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
            <span
              className={`
                text-xs font-semibold
                ${cfg.accent}
                transition-transform duration-300
                group-hover:translate-x-1
              `}
            >
              Plan this journey
            </span>

            <span
              className={`
                w-8 h-8 rounded-full
                border border-white/20
                flex items-center justify-center
                ${cfg.accent}
                transition-all duration-300
                group-hover:bg-white
                group-hover:text-charcoal
                group-hover:border-white
                group-hover:rotate-45
              `}
            >
              <svg
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

/* ------------------------------------------------------------------ */
/* Occasions Section                                                   */
/* ------------------------------------------------------------------ */

export function OccasionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-champagne relative overflow-hidden">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-14">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-burgundy" />

              <span className="section-label">
                Occasions & Experiences
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="
                text-[clamp(2rem,4vw,3.5rem)]
                font-bold
                tracking-tight
                text-charcoal
                leading-[1.1]
              "
              style={{
                fontFamily: 'var(--font-family-heading)',
              }}
            >
              Every occasion deserves a better journey.
            </h2>
          </Reveal>
        </div>

        {/* Occasions Grid */}
        <StaggerContainer
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-12
            gap-6
            lg:gap-8
          "
          staggerDelay={0.12}
        >
          {cards.map((cfg) => (
            <OccasionCard
              key={cfg.idx}
              cfg={cfg}
            />
          ))}
        </StaggerContainer>

        {/* Oversized Section Number */}
        <div
          className="
            absolute
            -right-4
            top-16
            select-none
            pointer-events-none
            opacity-[0.04]
          "
        >
          <span
            className="
              text-[16rem]
              font-extrabold
              leading-none
              text-charcoal
            "
            style={{
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            03
          </span>
        </div>
      </div>
    </section>
  );
}