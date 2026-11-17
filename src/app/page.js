import AwardsFaqSection from "./components/home-components/AwardsFaqSection";
import HeroSection from "./components/home-components/HeroSection";
import IndustriesSection from "./components/home-components/IndustriesSection";
import RecognisedBrands from "./components/home-components/RecognisedBrands";
import StatsCounter from "./components/home-components/StatsCounter";
import Testimonials from "./components/home-components/Testimonials";
import VerificationSolution from "./components/home-components/VerificationSolution";

export default function Home() {
  return (
    <>
<HeroSection />
<StatsCounter />
<IndustriesSection  />
<RecognisedBrands />
<VerificationSolution />
<Testimonials />
<AwardsFaqSection/>
    </>
  );
}
