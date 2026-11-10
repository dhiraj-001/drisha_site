// Content data for the Drisha Mobility website
// All content is separated from presentation for easy updates

export const siteConfig = {
  name: 'Drisha Mobility',
  tagline: 'Move Together. Move Better.',
  positioning: 'Group journeys, connected across India.',
  supportingStatement:
    'Starting in Northeast India, Drisha is building a smarter way to organize group transportation — connecting travellers, fleet owners, and professional drivers.',
  consumerAppLink: 'https://github.com/dhiraj-001/drisha_releases/releases/tag/v1.0.0.0',
  partnerAppLink: 'https://github.com/dhiraj-001/drisha_releases/releases/tag/dp_v1.0.0',
  socialLinks: {
    // Add verified social media URLs only
  },
  contact: {
    // Add verified contact details only
  },
};

export const heroContent = {
  headline: 'Every journey begins with bringing people together.',
  supporting:
    'From celebrations and corporate journeys to family getaways, Drisha makes group transportation simpler, smarter, and more connected.',
  primaryCta: 'Plan Your Journey',
  secondaryCta: 'Become a Partner',
};

export const brandIntro = {
  label: 'THE DRISHA APPROACH',
  headline: 'Not just transportation. A better way to experience every journey.',
  description:
    'Group transportation should be easier to organize. Organizers should have greater visibility. Pricing should be understandable. Fleet owners should have a connected way to manage their business. And every traveller should have a smoother journey experience.',
  supporting:
    'Drisha connects all the pieces — from vehicle discovery and transparent pricing to real-time journey tracking — into one connected group mobility experience.',
};

export const occasions = [
  {
    id: 'weddings',
    title: 'Weddings & Celebrations',
    description:
      'Coordinate guest transportation with ease. From ceremony to reception, ensure everyone arrives together.',
    number: '01',
  },
  {
    id: 'corporate',
    title: 'Corporate Events & Offsites',
    description:
      'Move your team seamlessly. From office pickups to off-site venues, keep everyone connected.',
    number: '02',
  },
  {
    id: 'family',
    title: 'Family Outings & Group Getaways',
    description:
      'Turn the journey into part of the experience. Travel together with comfort and visibility.',
    number: '03',
  },
  {
    id: 'pilgrimages',
    title: 'Pilgrimages & Group Tours',
    description:
      'Organize spiritual journeys and group tours with transparent pricing and reliable transportation.',
    number: '04',
  },
  {
    id: 'airport',
    title: 'Airport Transfers',
    description:
      'Coordinate group airport pickups and drops with vehicles sized for your group.',
    number: '05',
  },
];

export const vehicleCategories = [
  {
    id: 'mini-bus',
    category: 'Mini Bus',
    description: 'Perfect for small groups and intimate gatherings.',
    useCases: ['Family outings', 'Small corporate groups', 'Airport transfers'],
  },
  {
    id: 'standard-bus',
    category: 'Standard Bus',
    description: 'Comfortable group transportation for medium-sized groups.',
    useCases: ['Corporate events', 'Group tours', 'Wedding guests'],
  },
  {
    id: 'large-bus',
    category: 'Large Capacity Bus',
    description: 'For larger groups that need to travel together.',
    useCases: ['Large weddings', 'Corporate offsites', 'Pilgrimage groups'],
  },
  {
    id: 'premium-van',
    category: 'Premium Group Van',
    description: 'Premium comfort for smaller groups seeking a refined experience.',
    useCases: ['VIP transfers', 'Executive travel', 'Luxury getaways'],
  },
];

export const pricingLegs = [
  {
    id: 'leg-a',
    label: 'Leg A',
    title: 'Garage to Pickup',
    description:
      'The vehicle travels from its garage or operating base to the passenger pickup location.',
    point: 'GARAGE → PICKUP',
  },
  {
    id: 'leg-b',
    label: 'Leg B',
    title: 'Pickup to Destination',
    description:
      'The vehicle carries passengers from the pickup point to their destination.',
    point: 'PICKUP → DESTINATION',
  },
  {
    id: 'leg-c',
    label: 'Leg C',
    title: 'Destination to Garage',
    description:
      'The vehicle returns from the destination to its garage or operating base.',
    point: 'DESTINATION → GARAGE',
  },
];

export const pricingComponents = [
  'Base daily vehicle rate',
  'Standard mileage',
  'Dead mileage (Legs A & C)',
  'Driver allowance',
  'Tolls and applicable taxes',
  'Minimum daily kilometre guarantees',
];

export const trackingFeatures = [
  'Vehicle location visibility',
  'Journey progress tracking',
  'Route information',
  'Shareable guest tracking link',
  'No app required for guests',
];

export const consumerFeatures = [
  'Occasion-based journey discovery',
  'Pickup and destination selection',
  'Date and group-size selection',
  'Vehicle discovery with photos',
  'Transparent fare breakdown',
  'Booking and payment experience',
  'Active journey tracking',
];

export const partnerFeatures = [
  'Fleet vehicle registration',
  'Vehicle information and photographs',
  'Depot and operating radius setup',
  'Rate-card configuration',
  'Vehicle availability management',
  'Driver roster & contract assignments',
  'Booking management & dispatch',
  'Earnings and ledger information',
];

export const driverFeatures = [
  'Commercial driver registration',
  'Vehicle driving contracts & dispatch',
  'Zero vehicle ownership required',
  'Duty status toggle (Available / On-Trip / Off-Duty)',
  'Guaranteed driver allowances & payouts',
  'Turn-by-turn route & pickup details',
  'Verified fleet owner partnerships',
  'Transparent digital earnings ledger',
];

export const partnerOnboardingSteps = [
  {
    step: '01',
    title: 'Register Your Fleet',
    description: 'Sign up on the Drisha Partner App and add your fleet details to get started.',
  },
  {
    step: '02',
    title: 'Add Vehicles & Configure',
    description:
      'Add vehicles, set operating details, configure rate cards, and assign verified drivers.',
  },
  {
    step: '03',
    title: 'Manage & Earn Through Drisha Partner',
    description:
      'Receive confirmed bookings, track dispatches, and receive guaranteed payouts through the connected platform.',
  },
];

export const driverOnboardingSteps = [
  {
    step: '01',
    title: 'Download & Select Driver Role',
    description: 'Install the Drisha Partner App and register your profile as a Commercial Driver.',
  },
  {
    step: '02',
    title: 'Verify Commercial Driving License',
    description: 'Upload your commercial DL and identity documents for quick depot verification.',
  },
  {
    step: '03',
    title: 'Get Vehicle Contracts & Drive',
    description: 'Toggle your status to Available, receive vehicle driving contracts from fleet operators, and earn transparent allowances.',
  },
];

export const corporateUseCases = [
  'Corporate offsites',
  'Company events',
  'Conferences',
  'Weddings',
  'Large family gatherings',
  'Group tours',
];

export const navigationLinks = [
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Founding Fleet', href: '/founding-fleet' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'About', href: '/about' },
  { label: 'Partner', href: '/partner' },
];

export const footerLinks = {
  explore: [
    { label: 'Home', href: '/' },
    { label: 'Vehicles', href: '/vehicles' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  partners: [
    { label: 'Partner Portal Overview', href: '/partner' },
    { label: 'Founding Fleet Pre-Registration', href: '/founding-fleet' },
    { label: 'Fleet Owners', href: '/partner#fleet' },
    { label: 'Driver Registration & Contracts', href: '/partner#drivers' },
    { label: 'Partner App Download', href: siteConfig.partnerAppLink },
    { label: 'Fleet Admin Console', href: '/admin/founding-fleet' },
  ],
  business: [
    { label: 'Corporate Enquiries', href: '/corporate' },
    { label: 'Event & Wedding Fleet', href: '/corporate' },
    { label: 'Dedicated Desk', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Choose Your Occasion',
    description: 'Select the type of journey — wedding, corporate event, family outing, pilgrimage, or airport transfer.',
  },
  {
    step: '02',
    title: 'Enter Journey Details',
    description: 'Provide your pickup location, destination, travel dates, and group size.',
  },
  {
    step: '03',
    title: 'Explore Vehicle Options',
    description: 'Browse available vehicles suited to your group size and journey type.',
  },
  {
    step: '04',
    title: 'Understand the Fare',
    description: 'See a transparent breakdown covering the complete three-leg journey — garage to pickup, pickup to destination, and return.',
  },
  {
    step: '05',
    title: 'Complete Your Booking',
    description: 'Confirm and pay through the Drisha consumer app for a seamless experience.',
  },
  {
    step: '06',
    title: 'Stay Connected',
    description: 'Track your vehicle in real-time and share tracking links with your group — no app needed for guests.',
  },
];
