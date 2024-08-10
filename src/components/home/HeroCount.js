const HeroCount = ({ count, name }) => {
  return (
    <div>
      <div className="flex text-2xl sm:text-3xl md:text-4xl items-center">
        <p className="font-[1000] font-header">{count}</p>
        <p className="font-bold">K</p>
        <p className="font-extrabold">+</p>
      </div>
      <p className="text-ternary-600 text-xs leading-3">{name}</p>
    </div>
  );
};

export default HeroCount;
