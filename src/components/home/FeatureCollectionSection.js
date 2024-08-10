import Image from "next/image";

const FEATURES = [1, 2, 3];

const FeatureCollectionSection = () => {
  return (
    <div>
      <h2 className="font-[1000] font-header text-xl sm:text-2xl md:text-3xl mb-1">COLLECTION FEATURED NFTS</h2>
      <div className="flex justify-between items-center m-auto sm:m-0 py-10 flex-col sm:flex-row gap-7">
        {FEATURES.map((ftr) => (
          <div key={ftr}>
            <div className="flex gap-2 mb-1 md:mb-4">
              <div>
                <Image
                  src="/images/home/feature_collection_left.webp"
                  width={266}
                  height={273}
                  alt="top-collection"
                  priority={false}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/home/feature_collection_right.webp"
                  width={104}
                  height={86}
                  alt="top-collection"
                  priority={false}
                  className="rounded-md"
                />
                <Image
                  src="/images/home/feature_collection_right.webp"
                  width={104}
                  height={86}
                  alt="top-collection"
                  priority={false}
                  className="rounded-md"
                />
                <Image
                  src="/images/home/feature_collection_right.webp"
                  width={104}
                  height={86}
                  alt="top-collection"
                  priority={false}
                  className="rounded-md"
                />
              </div>
            </div>
            <p className="font-semibold text-lg mb-1">Amazing Collection</p>
            <div className="flex justify-between gap-2">
              <div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/home/small_avater.png"
                    width={25}
                    height={25}
                    alt="top-collection"
                    priority={false}
                    className="rounded-md"
                  />
                  <p className="text-xs">by Arkhan</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-[#2639ED] font-semibold border-[1px] border-[#2639ED] rounded-2xl px-2 py-1">
                  Total 54 Items
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCollectionSection;
