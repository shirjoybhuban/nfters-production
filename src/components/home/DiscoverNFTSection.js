import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import clsx from "clsx";
import { IoFilter } from "react-icons/io5";
import { Button } from "../ui/button";
import DiscoverNFTCard from "./DiscoverNFTCard";
import { CATEGORIES, NFTCARDS } from "@/const/home-data";

const baseCategoryClasses =
  "text-sm font-semibold px-5 py-2 rounded-3xl cursor-pointer hover:bg-primary-900 hover:text-white";

const DiscoverNFTSection = () => {
  return (
    <div>
      <h2 className="font-[1000] font-header text-xl sm:text-2xl md:text-3xl mb-10">DISCOVER MORE NFTS</h2>
      <div className="flex justify-between flex-col sm:flex-row gap-4">
        <div className="flex gap-5 flex-wrap">
          {CATEGORIES.map((cat) => (
            <p
              key={cat.name}
              className={clsx(baseCategoryClasses, {
                "bg-primary-900 text-white": cat.selected,
                "bg-ternary-50 text-black": !cat.selected,
              })}>
              {cat.name}
            </p>
          ))}
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className={clsx(baseCategoryClasses, "bg-ternary-50 text-primary-900")}>
                <IoFilter className="mr-2 text-2xl" />
                All Filters
              </MenubarTrigger>
              <MenubarContent className="bg-white">
                <MenubarItem>Sort by Price</MenubarItem>
                <MenubarItem>Sort by Popularity</MenubarItem>
                <MenubarItem>Sort by Time Left</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="flex justify-between items-center m-auto sm:m-0 py-10 flex-col sm:flex-row gap-9 flex-wrap">
        {NFTCARDS.map((card) => (
          <DiscoverNFTCard name={card?.name} key={card?.name} />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Button size="xl" variant="outline">
          More NFTs
        </Button>
      </div>
    </div>
  );
};

export default DiscoverNFTSection;
