function HeaderContent() {
  return (
    <div className="absolute z-10 w-full flex justify-center mt-24 md:mt-32 lg:mt-40 ">
      <div className="w-[88%]">
        <h2 className="text-secondary text-18 lg:text-[22px] font-bold">
          Uma nova experiência!
        </h2>
        <h1 className="text-secondary text-[53px] lg:text-[77px]">
          KING <span className="text-300">BURGER</span>
        </h1>
        <h2 className="text-18 text-primary lg:text-[22px]">
          Para quem tem um{" "}
          <span className="bg-300 p-1 rounded-md">Apetite de um REI!</span>
        </h2>
        <button className="bg-red-600 text-white h-11 lg:h-12 w-36 lg:w-48 lg:text-[22px] rounded-md text-[16px] mt-3 transition-transform transform hover:-translate-y-1">
          Comprar agora
        </button>
      </div>
    </div>
  );
}

export default HeaderContent;
