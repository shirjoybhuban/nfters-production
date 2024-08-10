import clsx from "clsx";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
const basePercentageClass = "text-sm font-semibold";

const TopCollectionRightCard = ({ number, length, name, positive, percentage, verified }) => {
  return (
    <div className="flex items-center gap-5 border-b-[1px] pb-3 pt-3">
      <p className="font-bold text-xl">{number}</p>
      <div className="relative">
        <Image
          src="/images/home/feature_round_img.png"
          width={50}
          height={50}
          alt="top-collection"
          priority={false}
          placeholder="blur"
          blurDataURL="/images/home/feature_round_img.png"
          className="rounded-md"
        />
        {verified && <MdVerified className="text-blue-500 text-xl absolute top-[-5px] right-0" />}
      </div>
      <div>
        <p className="text-xs">{name}</p>
        <div className="flex items-center gap-1 mt-1">
          <FaEthereum className="text-sm" />
          <p className="text-[10px] font-semibold text-ternary-600">19,769.39</p>
        </div>
      </div>
      <div>
        <p
          className={clsx(basePercentageClass, {
            "text-[#14C8B0]": positive,
            "text-[#FF002E]": !positive,
          })}>
          {percentage}
        </p>
      </div>
    </div>
  );
};

export default TopCollectionRightCard;
