import { BsBarChart, BsWallet2 } from "react-icons/bs";

const FEATURES = [
  {
    name: "Fast Transaction",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
    icon: <BsWallet2 className="mt-1 text-2xl" />,
  },
  {
    name: "Growth Transaction",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
    icon: <BsBarChart className="mt-1 text-2xl" />,
  },
];

const FeatureSection = () => {
  return (
    <div className="flex justify-between items-center text-center sm:text-left m-auto sm:m-0 py-10 flex-col sm:flex-row gap-3">
      <h2 className="font-header font-[1000] text-xl sm:text-2xl md:text-3xl">
        THE AMAZING NFT ART <br /> OF THE WORLD HERE
      </h2>
      {/* Features, We can add one more here */}
      {FEATURES.map((feature) => (
        <div key={feature.name} className="flex gap-3">
          <div className="hidden sm:block">{feature.icon}</div>
          <div>
            <p className="font-semibold text-md md:text-lg">{feature.name}</p>
            <p className="max-w-64 text-sm mt-2 text-ternary-600 leading-6">{feature.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
