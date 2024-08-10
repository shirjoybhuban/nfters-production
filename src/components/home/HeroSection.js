import HeroCount from "@/components/home/HeroCount";
import { Button } from "@/components/ui/button";
import { achievmentCount } from "@/const/home-data";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      {/* Hero Left Section */}
      <div className="text-center sm:text-left m-auto sm:m-0">
        <h1 className="font-[1000] text-2xl sm:text-3xl md:text-[40px] font-header">
          DISCOVER, AND COLLECT <br /> DIGITAL ART NFTS
        </h1>
        <p className="text-sm sm:text-base text-ternary-600 mt-5 leading-4 md:leading-7">
          Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover{" "}
          <br />
          exclusive digital assets.
        </p>
        <Button size="lg" className="mt-6">
          Explore Now
        </Button>
        <div className="flex gap-6 mt-6 justify-center sm:justify-start">
          {achievmentCount.map((achievment) => (
            <HeroCount key={achievment.name} count={achievment.count} name={achievment.name} />
          ))}
        </div>
      </div>
      {/* Hero Right Section */}
      <div className="hidden sm:block">
        <Image
          src="/images/home/hero_right.webp"
          width={500}
          height={410}
          alt="NFT-card"
          priority={false}
          placeholder="blur"
          blurDataURL="/images/home/hero_right.webp"
          quality={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
