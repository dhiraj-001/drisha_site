import { useState } from 'react';

interface VehicleGraphicProps {
  id: string;
  className?: string;
}

const vehicleImages: Record<string, { src: string; alt: string; name: string }> = {
  'mini-bus': {
    src: '/images/vehicles/mini-bus.jpg',
    alt: '17-Seater Luxury Tempo Traveller',
    name: 'Force Tempo Traveller',
  },
  'standard-bus': {
    src: '/images/vehicles/standard-bus.jpg',
    alt: '32-Seater Luxury Intercity Tourist Coach',
    name: '32S Tourist Coach',
  },
  'large-bus': {
    src: '/images/vehicles/large-bus.jpg',
    alt: '50-Seater Multi-Axle Luxury Tourist Coach',
    name: 'Multi-Axle Luxury Coach',
  },
  'premium-van': {
    src: '/images/vehicles/premium-van.jpg',
    alt: 'Executive VIP Luxury Van',
    name: 'Force Urbania VIP',
  },
};

export function VehicleGraphic({ id, className = '' }: VehicleGraphicProps) {
  const [hasError, setHasError] = useState(false);
  const vehicle = vehicleImages[id];

  if (vehicle && !hasError) {
    return (
      <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
        <img
          src={vehicle.src}
          alt={vehicle.alt}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setHasError(true)}
          loading="lazy"
        />
        {/* Subtle cinematic gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-black/10 pointer-events-none" />
        {/* Model name watermark pill */}
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="text-[10px] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
            {vehicle.name}
          </span>
        </div>
      </div>
    );
  }

  // Fallback vector SVG if image fails to load
  switch (id) {
    case 'mini-bus':
      return (
        <svg viewBox="0 0 320 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="142" rx="120" ry="8" fill="#211e1c" fillOpacity="0.1" />
          <path d="M45 125H275C278 125 280 122 280 119V75C280 62 268 52 254 52H95C85 52 75 58 70 67L50 102C46 109 45 117 45 125Z" fill="#722f37" />
          <rect x="74" y="68" width="198" height="32" rx="4" fill="#211e1c" fillOpacity="0.85" />
          <circle cx="95" cy="126" r="18" fill="#211e1c" />
          <circle cx="235" cy="126" r="18" fill="#211e1c" />
        </svg>
      );
    case 'standard-bus':
      return (
        <svg viewBox="0 0 340 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="170" cy="144" rx="135" ry="9" fill="#211e1c" fillOpacity="0.1" />
          <rect x="40" y="48" width="260" height="78" rx="10" fill="#2a2725" />
          <circle cx="85" cy="126" r="18" fill="#1a1816" />
          <circle cx="250" cy="126" r="18" fill="#1a1816" />
        </svg>
      );
    case 'large-bus':
      return (
        <svg viewBox="0 0 350 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="175" cy="145" rx="145" ry="9" fill="#211e1c" fillOpacity="0.1" />
          <path d="M35 126H315V52C315 44 308 38 300 38H60C46 38 35 49 35 63V126Z" fill="#5a252c" />
          <circle cx="85" cy="126" r="18" fill="#140608" />
          <circle cx="240" cy="126" r="18" fill="#140608" />
        </svg>
      );
    case 'premium-van':
    default:
      return (
        <svg viewBox="0 0 320 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="142" rx="115" ry="8" fill="#211e1c" fillOpacity="0.1" />
          <path d="M50 125H270C274 125 277 122 277 118L275 88C274 76 264 68 252 68H135C125 68 116 72 110 80L85 106H50C46 106 44 112 45 116L48 123C48 124 49 125 50 125Z" fill="#1f1d1b" />
          <circle cx="95" cy="125" r="17" fill="#141312" />
          <circle cx="230" cy="125" r="17" fill="#141312" />
        </svg>
      );
  }
}
