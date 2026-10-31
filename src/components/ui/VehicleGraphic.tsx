interface VehicleGraphicProps {
  id: string;
  className?: string;
}

export function VehicleGraphic({ id, className = '' }: VehicleGraphicProps) {
  switch (id) {
    case 'mini-bus':
      return (
        <svg viewBox="0 0 320 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ground shadow */}
          <ellipse cx="160" cy="142" rx="120" ry="8" fill="#211e1c" fillOpacity="0.1" />
          {/* Main Body */}
          <path d="M45 125H275C278 125 280 122 280 119V75C280 62 268 52 254 52H95C85 52 75 58 70 67L50 102C46 109 45 117 45 125Z" fill="#722f37" />
          {/* Highlight Roof line */}
          <path d="M96 56H252C264 56 274 64 276 75H73C77 64 86 56 96 56Z" fill="#8e3d46" />
          {/* Windows Bar */}
          <rect x="74" y="68" width="198" height="32" rx="4" fill="#211e1c" fillOpacity="0.85" />
          {/* Individual Windows */}
          <rect x="78" y="71" width="34" height="26" rx="2" fill="#e8dcc6" fillOpacity="0.4" />
          <rect x="116" y="71" width="36" height="26" rx="2" fill="#e8dcc6" fillOpacity="0.4" />
          <rect x="156" y="71" width="36" height="26" rx="2" fill="#e8dcc6" fillOpacity="0.4" />
          <rect x="196" y="71" width="36" height="26" rx="2" fill="#e8dcc6" fillOpacity="0.4" />
          <rect x="236" y="71" width="32" height="26" rx="2" fill="#e8dcc6" fillOpacity="0.4" />
          {/* Headlights & Tail lights */}
          <rect x="44" y="106" width="6" height="12" rx="2" fill="#ffdd80" />
          <rect x="278" y="102" width="4" height="14" rx="1" fill="#ff4d4d" />
          {/* Body Trim Line */}
          <path d="M46 116H279" stroke="#b7a891" strokeWidth="2" strokeLinecap="round" />
          {/* Wheels */}
          <circle cx="95" cy="126" r="18" fill="#211e1c" />
          <circle cx="95" cy="126" r="10" fill="#b7a891" />
          <circle cx="95" cy="126" r="4" fill="#ffffff" />
          <circle cx="235" cy="126" r="18" fill="#211e1c" />
          <circle cx="235" cy="126" r="10" fill="#b7a891" />
          <circle cx="235" cy="126" r="4" fill="#ffffff" />
        </svg>
      );

    case 'standard-bus':
      return (
        <svg viewBox="0 0 340 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ground shadow */}
          <ellipse cx="170" cy="144" rx="135" ry="9" fill="#211e1c" fillOpacity="0.1" />
          {/* Bus Body */}
          <rect x="40" y="48" width="260" height="78" rx="10" fill="#2a2725" />
          <path d="M40 75H300V126H40V75Z" fill="#36322f" />
          {/* Champagne Graphic Stripe */}
          <path d="M40 98L120 98L160 112L300 112V118L155 118L115 104L40 104V98Z" fill="#b7a891" />
          <path d="M40 106L110 106L150 120L300 120V123L147 123L107 109L40 109V106Z" fill="#722f37" />
          {/* Panoramic Windshield & Window Strip */}
          <rect x="48" y="55" width="244" height="28" rx="4" fill="#141312" />
          {/* Window Sections */}
          {[...Array(6)].map((_, i) => (
            <rect key={i} x={52 + i * 40} y="58" width="36" height="22" rx="2" fill="#e8dcc6" fillOpacity="0.35" />
          ))}
          {/* AC Unit on roof */}
          <rect x="130" y="42" width="75" height="7" rx="3" fill="#524d47" />
          {/* Headlights */}
          <rect x="38" y="96" width="4" height="16" rx="2" fill="#ffea9f" />
          <rect x="298" y="96" width="3" height="14" rx="1" fill="#ff4d4d" />
          {/* Wheels */}
          <circle cx="85" cy="126" r="18" fill="#1a1816" />
          <circle cx="85" cy="126" r="10" fill="#722f37" />
          <circle cx="85" cy="126" r="4" fill="#ffffff" />
          <circle cx="250" cy="126" r="18" fill="#1a1816" />
          <circle cx="250" cy="126" r="10" fill="#722f37" />
          <circle cx="250" cy="126" r="4" fill="#ffffff" />
        </svg>
      );

    case 'large-bus':
      return (
        <svg viewBox="0 0 350 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ground shadow */}
          <ellipse cx="175" cy="145" rx="145" ry="9" fill="#211e1c" fillOpacity="0.1" />
          {/* High Deck Coach Body */}
          <path d="M35 126H315V52C315 44 308 38 300 38H60C46 38 35 49 35 63V126Z" fill="#5a252c" />
          <path d="M35 88H315V126H35V88Z" fill="#722f37" />
          {/* Aerodynamic Front Slope */}
          <path d="M35 68C35 52 46 40 60 40H110L80 72H35V68Z" fill="#431a20" />
          {/* Dual Glass Deck */}
          <rect x="75" y="44" width="232" height="26" rx="3" fill="#1b0b0e" />
          {[...Array(7)].map((_, i) => (
            <rect key={i} x={80 + i * 32} y="47" width="28" height="20" rx="2" fill="#e8dcc6" fillOpacity="0.4" />
          ))}
          {/* Lower Driver Windshield */}
          <path d="M40 76H76V94H40V76Z" fill="#1b0b0e" />
          {/* Coach Gold Decal */}
          <path d="M78 86H315V90H78V86Z" fill="#e8dcc6" />
          <path d="M100 94H315V96H100V94Z" fill="#b7a891" />
          {/* Roof AC */}
          <rect x="140" y="32" width="90" height="7" rx="3" fill="#3a181d" />
          {/* Headlights */}
          <rect x="34" y="98" width="4" height="16" rx="2" fill="#fff5cc" />
          {/* Wheels (Multi-axle) */}
          <circle cx="85" cy="126" r="18" fill="#140608" />
          <circle cx="85" cy="126" r="10" fill="#b7a891" />
          <circle cx="85" cy="126" r="4" fill="#ffffff" />
          <circle cx="240" cy="126" r="18" fill="#140608" />
          <circle cx="240" cy="126" r="10" fill="#b7a891" />
          <circle cx="240" cy="126" r="4" fill="#ffffff" />
          <circle cx="278" cy="126" r="18" fill="#140608" />
          <circle cx="278" cy="126" r="10" fill="#b7a891" />
          <circle cx="278" cy="126" r="4" fill="#ffffff" />
        </svg>
      );

    case 'premium-van':
    default:
      return (
        <svg viewBox="0 0 320 160" className={`w-full h-auto max-h-[140px] drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ground shadow */}
          <ellipse cx="160" cy="142" rx="115" ry="8" fill="#211e1c" fillOpacity="0.1" />
          {/* Sleek MPV Body */}
          <path d="M50 125H270C274 125 277 122 277 118L275 88C274 76 264 68 252 68H135C125 68 116 72 110 80L85 106H50C46 106 44 112 45 116L48 123C48 124 49 125 50 125Z" fill="#1f1d1b" />
          {/* Contrast Metallic Line */}
          <path d="M82 104L108 78C114 71 123 67 132 67H250C260 67 268 74 270 84L272 104H82Z" fill="#36322f" />
          {/* Tinted VIP Glass */}
          <path d="M92 100L112 80C116 76 122 73 128 73H264L266 100H92Z" fill="#0c0b0a" />
          <rect x="134" y="76" width="38" height="20" rx="2" fill="#e8dcc6" fillOpacity="0.3" />
          <rect x="178" y="76" width="40" height="20" rx="2" fill="#e8dcc6" fillOpacity="0.3" />
          <rect x="224" y="76" width="36" height="20" rx="2" fill="#e8dcc6" fillOpacity="0.3" />
          {/* Chrome Trim Accent */}
          <path d="M47 114H274" stroke="#e8dcc6" strokeWidth="1.5" strokeLinecap="round" />
          {/* LED Headlights */}
          <path d="M48 108L72 108L68 114L46 114L48 108Z" fill="#a8e6cf" />
          {/* Premium Alloy Wheels */}
          <circle cx="95" cy="125" r="17" fill="#141312" />
          <circle cx="95" cy="125" r="10" fill="#b7a891" />
          <circle cx="95" cy="125" r="4" fill="#ffffff" />
          <circle cx="230" cy="125" r="17" fill="#141312" />
          <circle cx="230" cy="125" r="10" fill="#b7a891" />
          <circle cx="230" cy="125" r="4" fill="#ffffff" />
        </svg>
      );
  }
}
