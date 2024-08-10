import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { Button } from "../ui/button";

const TopCollectionMiddleCard = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/home/top_collection_middle.png"
        width={125}
        height={125}
        alt="top-collection"
        priority={false}
        className="rounded-md"
      />
      <div>
        <p className="text-base font-semibold mb-1">The Futr Abstr</p>
        <div className="flex items-center gap-2 mb-3">
          <Image
            src="/images/home/small_avater.png"
            width={28}
            height={28}
            alt="top-collection"
            priority={false}
            className="rounded-md"
          />
          <div className="border border-[#00AC4F] rounded-md p-[5px] text-[#00AC4F] flex items-center  gap-1 mt-1">
            <FaEthereum className="text-xs" />
            <p className="text-[10px] font-semibold">0.25 ETH</p>
          </div>
          <p className="text-ternary-600 text-xs">1 of 8</p>
        </div>
        <Button variant="outline" size="sm">
          Place a bid
        </Button>
      </div>
    </div>
  );
};

export default TopCollectionMiddleCard;
