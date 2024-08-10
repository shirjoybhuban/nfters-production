import Image from "next/image";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";

const DiscoverNFTCard = ({ name }) => {
  return (
    <div className="bg-white rounded-xl p-2">
      <div className="relative">
        <Image
          src="/images/home/discover_nft_card.png"
          width={240}
          height={215}
          alt="discover-nft"
          priority={false}
          className="rounded-md"
        />
        <div className="absolute bottom-[-16px] left-3 flex">
          <ul className="avatars">
            {[1, 2, 3, 4].map((avt) => (
              <li key={avt} className="avatar">
                <Image
                  src="/images/home/medium_avtr.png"
                  width={35}
                  height={35}
                  alt="small_avater"
                  priority={false}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="font-semibold text-lg mt-4">{name}</p>
      <div className="flex justify-between">
        <div className="text-green-500 font-semibold flex items-center  gap-1 mt-1">
          <FaEthereum />
          <p className="text-xs">0.25 ETH</p>
        </div>
        <p className="text-ternary-600 text-sm ">1 of 321</p>
      </div>
      <hr className="mt-4 mb-3" />
      <div className="flex justify-between items-center px-1">
        <p className="text-[10px] px-3 py-2 rounded-3xl bg-ternary-50 text-primary-900">3h 50m 2s left</p>
        <Link href="/" prefetch={true}>
          <p className="cursor-pointer text-primary-900 hover:underline">Place a bid</p>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverNFTCard;
