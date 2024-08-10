import TopCollectionMiddleCard from "@/components/home/TopCollectionMiddleCard";
import TopCollectionRightCard from "@/components/home/TopCollectionRightCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TOP_COLLECTIONS } from "@/const/home-data";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

const TopCollectionSection = () => {
  return (
    <div className="flex justify-between sm:text-left sm:m-0 py-5 md:py-10 flex-col sm:flex-row gap-10 sm:gap-3">
      {/* First Section */}
      <div className="flex gap-12 flex-col md:flex-row">
        <div>
          <Image
            src="/images/home/feature_img.png"
            width={350}
            height={371}
            alt="top-collection"
            priority={false}
            placeholder="blur"
            blurDataURL="/images/home/feature_img.png"
            className="rounded-md"
          />
          <div className="flex gap-2 justify-start md:justify-between mt-4">
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="/images/home/medium_avtr.png" />
                <AvatarFallback>NF</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold">The Futr Abstr</p>
                <p className="text-xs text-ternary-600">10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] ml-1 text-ternary-600">Highest Bid</p>
              <div className="flex gap-1 mt-1">
                <FaEthereum className="text-lg" />
                <p className="text-sm font-semibold">0.25 ETH</p>
              </div>
            </div>
          </div>
        </div>
        {/* First-Second Section */}
        <div className="flex flex-col justify-between items-start md:items-center gap-7 md:gap-0">
          <TopCollectionMiddleCard />
          <TopCollectionMiddleCard />
          <TopCollectionMiddleCard />
        </div>
      </div>
      {/* Vertical Line */}
      <div className="border border-[#e5e7eb] h-[450px] hidden md:block"></div>
      {/* Third Section */}
      <div>
        <div className="mb-7">
          <h4 className="font-[1000] font-header text-base mb-1">TOP COLLECTIONS OVER</h4>
          <p className="text-purple-800 text-xs font-semibold">Last 7 Days</p>
        </div>
        <div className="flex flex-col justify-between items-start">
          {TOP_COLLECTIONS.map((col, index) => (
            <TopCollectionRightCard
              key={index}
              number={index + 1}
              length={TOP_COLLECTIONS.length}
              name={col.name}
              positive={col.positive}
              percentage={col.percentage}
              verified={col.verified}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollectionSection;
