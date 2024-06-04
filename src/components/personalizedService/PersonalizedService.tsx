import woman from "../../assets/png/card-woman-eating.png";

function PersonalizedService() {
  return (
    <div>
      <div className="flex justify-center items-center   ">
        <div className="flex flex-col justify-start md:flex-row md:mt-[219px] mt-14 w-[88%]">
          <div className="">
            <img src={woman} className=" " style={{ zIndex: 1 }} />
          </div>
          <div className="md:ml-10 ml-0 md:mt-40 mt-10">
            <div className="flex flex-col items-start">
              <h1 className="text-secondary font-bold md:text-[41px] text-25 mr-2">
                ATENDIMENTO
              </h1>
              <h1 className="bg-300 text-secondary p-1 rounded-lg md:text-[41px] text-25 font-bold">
                PERSONALIZADO
              </h1>
              <div className="flex items-center mt-5">
                <h2 className="text-primary text-start text-[16px] mr-1 mb-4">
                  Todos os nossos clientes são tratados como rei e rainha, com a
                  nossa colunaria artesanal.
                </h2>
              </div>
              <button className="bg-red-600 text-white h-[53px] w-[230px] rounded-md text-[23px] mt-3 transition-transform transform hover:-translate-y-1">
                Cardápio
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[128px]">
        <hr className="w-[88%] border-[#1D060526]" />
      </div>
    </div>
  );
}

export default PersonalizedService;
