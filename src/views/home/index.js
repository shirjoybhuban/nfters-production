import FeatureSection from "@/components/home/FeatureSection";
import HeroSection from "@/components/home/HeroSection";
import TopCollectionSection from "@/components/home/TopCollectionSection";
import dynamic from "next/dynamic";
const DiscoverNFTSection = dynamic(() => import("@/components/home/DiscoverNFTSection"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const FeatureCollectionSection = dynamic(() => import("@/components/home/FeatureCollectionSection"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const HomeView = () => {
  return (
    <>
      <div className="max-w-screen-lg m-auto px-5 md:px-24 py-4 md:py-10">
        <HeroSection />
      </div>
      <div className="bg-ternary-100 my-14">
        <div className="max-w-screen-lg m-auto px-5 md:px-24 py-4 md:py-10">
          <FeatureSection />
        </div>
      </div>
      <div className="max-w-screen-lg m-auto px-5 md:px-24 py-4 md:py-8">
        <TopCollectionSection />
      </div>
      <div className="bg-ternary-100 my-14">
        <div className="max-w-screen-lg m-auto px-5 md:px-24 py-10 md:py-16">
          <FeatureCollectionSection />
        </div>
      </div>
      <div className="max-w-screen-lg m-auto px-5 md:px-24 py-4 md:py-10">
        <FeatureSection />
      </div>
      <div className="bg-ternary-100 mt-14">
        <div className="max-w-screen-lg m-auto px-5 md:px-24 py-10 md:py-12">
          <DiscoverNFTSection />
        </div>
      </div>
    </>
  );
};

export default HomeView;
