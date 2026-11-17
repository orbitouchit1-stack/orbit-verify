import HeroSection from "./components/home-components/HeroSection";
import IndustriesSection from "./components/home-components/IndustriesSection";
import RecognisedBrands from "./components/home-components/RecognisedBrands";
import StatsCounter from "./components/home-components/StatsCounter";

export default function Home() {
  return (
    <>
<HeroSection />
<StatsCounter />
<IndustriesSection  />
<RecognisedBrands />
    </>
  );
}
