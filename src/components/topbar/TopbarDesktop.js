import { Button } from "../ui/button";
import SearchInput from "../ui/SearchInput";

const TopbarDesktop = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      {/* Navbar Left Side */}
      <div className="flex items-center md:gap-5 lg:gap-12">
        <h3 className="font-[1000] text-3xl text-primary-900 cursor-pointer mr-7 tracking-tighter font-header">NFTERS</h3>
        <p className="font-medium text-sm cursor-pointer hover:text-primary-900">Marketplace</p>
        <p className="font-medium text-sm cursor-pointer hover:text-primary-900">Resource</p>
        <p className="font-medium text-sm cursor-pointer hover:text-primary-900">About</p>
      </div>
      {/* Navbar Right Side */}
      <div className="flex items-center md:gap-3 lg:gap-5">
        <SearchInput />
        <Button>Upload</Button>
        <Button variant="outline">Connect Wallet</Button>
      </div>
    </div>
  );
};

export default TopbarDesktop;
