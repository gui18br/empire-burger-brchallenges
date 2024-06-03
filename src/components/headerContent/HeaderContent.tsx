function HeaderContent() {
  return (
    <div className="flex justify-start">
      <div className="absolute z-10 top-40 md:ml-[87px] ml-[23.85px]">
        <div className="bg-transparent text-start">
          <h2 className="text-secondary  font-bold md:text-22.86 text-[18px] ">
            Uma nova experiência!
          </h2>
          <div className="flex md:text-77.65 text-[53px] md:leading-70">
            <h1 className="text-secondary font-bold mr-2">KING</h1>
            <h1 className="text-300 font-bold ">BURGER</h1>
          </div>
          <div className="flex items-center md:mt-5 md:text-22.86 text-[16px]">
            <h2 className="text-primary text-start mr-1">Para quem tem um</h2>
            <h2 className="bg-300 font-bold text-secondary rounded-md text-start">
              Apetite de um REI!
            </h2>
          </div>
          <button className="bg-red-600 text-white md:w-48 md:h-12 w-36 h-11 gap-12 rounded-md md:text-22.86 mt-3 transition-transform transform hover:-translate-y-1">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
