import { HeroSection } from '../components/sections/HeroSection';
import { BrandIntroSection } from '../components/sections/BrandIntroSection';
import { OccasionsSection } from '../components/sections/OccasionsSection';
import { VehicleSection } from '../components/sections/VehicleSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TrackingSection } from '../components/sections/TrackingSection';
import { ConsumerAppSection } from '../components/sections/ConsumerAppSection';
import { PartnerAppSection } from '../components/sections/PartnerAppSection';
import { PartnerRecruitSection } from '../components/sections/PartnerRecruitSection';
import { FoundingFleetSection } from '../components/sections/FoundingFleetSection';
import { CorporateSection } from '../components/sections/CorporateSection';
import { RegionalVisionSection } from '../components/sections/RegionalVisionSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandIntroSection />
      <OccasionsSection />
      <VehicleSection />
      <PricingSection />
      <TrackingSection />
      <ConsumerAppSection />
      <PartnerAppSection />
      <PartnerRecruitSection />
      <FoundingFleetSection />
      <CorporateSection />
      <RegionalVisionSection />
      <FinalCTASection />
    </>
  );
}
