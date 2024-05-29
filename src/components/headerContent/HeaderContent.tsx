function HeaderContent() {
  return (
    <div className="absolute z-10 top-40 ml-122">
      <div className="bg-transparent text-start">
        <h2 className="text-secondary  font-bold text-22.86 ">
          Uma nova experiência!
        </h2>
        <div className="flex text-77.65 leading-70">
          <h1 className="text-secondary font-bold mr-2">KING</h1>
          <h1 className="text-300 font-bold ">BURGER</h1>
        </div>
        <div className="flex items-center mt-5">
          <h2 className="text-primary text-start text-22.86 mr-1">
            Para quem tem um
          </h2>
          <h2 className="bg-300 font-bold text-secondary rounded-md text-start text-22.86">
            Apetite de um REI!
          </h2>
        </div>
        <button className="bg-red-600 text-white w-48 h-12 gap-12 rounded-md text-22.86 mt-3">
          Comprar Agora
        </button>
      </div>
    </div>
  );
}

export default HeaderContent;
